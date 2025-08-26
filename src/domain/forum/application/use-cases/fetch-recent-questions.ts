import type { Question } from '../../enterprise/entities/question'
import type { QuestionsRepository } from '../repositories/questions-repository'

interface FetchRecentQuestionsRequest {
  page: number
}

interface FetchRecentQuestionsResponse {
  questions: Question[]
}

export class FetchRecentQuestionsUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    page,
  }: FetchRecentQuestionsRequest): Promise<FetchRecentQuestionsResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page })

    if (!questions) {
      throw new Error('Question not found')
    }

    return {
      questions,
    }
  }
}
