import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { GetQuestionBySlug } from './get-question-by-slug'
import { Slug } from '../../enterprise/entities/value-objects/slug'
import { makeQuestion } from 'test/factories/make-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlug

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlug(inMemoryQuestionsRepository)
  })

  it('should be able to get question by slug', async () => {
    const newQuestion = makeQuestion({ slug: Slug.create('example-question') })

    await inMemoryQuestionsRepository.create(newQuestion)

    const { question } = await sut.execute({ slug: 'example-question' })

    expect(question.id).toBeTruthy()
    expect(question.slug.value).toEqual(newQuestion.slug.value)
  })
})
