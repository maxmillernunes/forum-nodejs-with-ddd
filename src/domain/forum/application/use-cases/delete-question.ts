import type { QuestionsRepository } from '../repositories/questions-repository'

interface DeleteQuestionRequest {
  authorId: string
  questionId: string
}

interface DeleteQuestionResponse {}

export class DeleteQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    questionId,
  }: DeleteQuestionRequest): Promise<DeleteQuestionResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found')
    }

    if (question.authorId.toString() !== authorId) {
      throw new Error('Not Allowed')
    }

    await this.questionsRepository.delete(question)

    return {}
  }
}
