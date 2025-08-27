import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { FetchQuestionsAnswersUseCase } from './fetch-question-answers'
import { makeAnswer } from 'test/factories/make-answer'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: FetchQuestionsAnswersUseCase

describe('Fetch Recent Questions', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new FetchQuestionsAnswersUseCase(inMemoryAnswersRepository)
  })

  it('should be able to fetch question answers', async () => {
    await inMemoryAnswersRepository.create(
      makeAnswer({
        questionId: new UniqueEntityId('question-id'),
      })
    )
    await inMemoryAnswersRepository.create(
      makeAnswer({
        questionId: new UniqueEntityId('question-id'),
      })
    )
    await inMemoryAnswersRepository.create(
      makeAnswer({
        questionId: new UniqueEntityId('question-id'),
      })
    )
    await inMemoryAnswersRepository.create(
      makeAnswer({
        questionId: new UniqueEntityId('question-id'),
      })
    )

    const { answers } = await sut.execute({
      questionId: 'question-id',
      page: 1,
    })

    expect(answers).toHaveLength(4)
  })

  it('should be able to fetch paginated question answers', async () => {
    for (let i = 1; i <= 22; i++) {
      await inMemoryAnswersRepository.create(
        makeAnswer({
          questionId: new UniqueEntityId('question-id-paginated'),
        })
      )
    }

    const { answers } = await sut.execute({
      questionId: 'question-id-paginated',
      page: 2,
    })

    expect(answers).toHaveLength(2)
  })
})
