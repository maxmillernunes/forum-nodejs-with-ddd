import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { FetchRecentQuestionsUseCase } from './fetch-recent-questions'
import { Slug } from '../../enterprise/entities/value-objects/slug'
import { makeQuestion } from 'test/factories/make-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: FetchRecentQuestionsUseCase

describe('Fetch Recent Questions', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new FetchRecentQuestionsUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to fetch recent questions', async () => {
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2025, 0, 20) })
    )
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2025, 0, 18) })
    )
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2025, 0, 23) })
    )
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2025, 0, 21) })
    )

    const result = await sut.execute({ page: 1 })

    expect(result.isRight()).toBe(true)
    if (result.isRight()) {
      expect(result.value.questions).toHaveLength(4)
      expect(result.value.questions).toEqual([
        expect.objectContaining({ createdAt: new Date(2025, 0, 23) }),
        expect.objectContaining({ createdAt: new Date(2025, 0, 21) }),
        expect.objectContaining({ createdAt: new Date(2025, 0, 20) }),
        expect.objectContaining({ createdAt: new Date(2025, 0, 18) }),
      ])
    }
  })

  it('should be able to fetch paginated recent questions', async () => {
    for (let i = 1; i <= 22; i++) {
      await inMemoryQuestionsRepository.create(
        makeQuestion({
          slug: Slug.create(`question-${i}`),
          createdAt: new Date(2025, 0, i),
        })
      )
    }

    const result = await sut.execute({ page: 2 })

    if (result.isRight()) {
      expect(result.value.questions).toHaveLength(2)
      expect(result.value.questions).toEqual([
        expect.objectContaining({ slug: Slug.create('question-2') }),
        expect.objectContaining({ slug: Slug.create('question-1') }),
      ])
    }
  })
})
