import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Create Questions', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  it('should be able to create a question', async () => {
    const result = await sut.execute({
      instructorId: '1',
      questionId: '2',
      content: 'New answer',
    })

    expect(result.isRight()).toBe(true)
    expect(result.value?.answer.id).toBeTruthy()
    expect(inMemoryAnswersRepository.itens[0]).toEqual(result.value?.answer)
  })
})
