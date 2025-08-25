import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { makeQuestion } from 'test/factories/make-question'
import { DeleteQuestionUseCase } from './delete-question'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: DeleteQuestionUseCase

describe('Delete question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new DeleteQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to delete a question', async () => {
    const newQuestion = makeQuestion(
      { authorId: new UniqueEntityId('author-id') },
      new UniqueEntityId('question-id')
    )

    await inMemoryQuestionsRepository.create(newQuestion)

    await sut.execute({ authorId: 'author-id', questionId: 'question-id' })

    expect(inMemoryQuestionsRepository.itens).toHaveLength(0)
  })

  it('should not be able to delete a question from another user', async () => {
    const newQuestion = makeQuestion(
      { authorId: new UniqueEntityId('author-id') },
      new UniqueEntityId('question-id')
    )

    await inMemoryQuestionsRepository.create(newQuestion)

    await expect(() =>
      sut.execute({ authorId: 'author-id-1', questionId: 'question-id' })
    ).rejects.toBeInstanceOf(Error)
  })
})
