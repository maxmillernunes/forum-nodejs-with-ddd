import type { AnswersRepository } from '../repositories/answers-repository'

interface DeleteAnswerRequest {
  answerId: string
  authorId: string
}

interface DeleteAnswerResponse {}

export class DeleteAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    answerId,
    authorId,
  }: DeleteAnswerRequest): Promise<DeleteAnswerResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found')
    }

    if (answer.authorId.toString() !== authorId) {
      throw new Error('Not allowed')
    }

    await this.answersRepository.delete(answer)

    return {}
  }
}
