import type { PaginationParams } from '@/core/repositories/pagination-params'
import type { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import type { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository implements AnswersRepository {
  public itens: Answer[] = []

  async findById(answerId: string): Promise<Answer | null> {
    const answer = this.itens.find((item) => item.id.toString() === answerId)

    if (!answer) {
      return null
    }

    return answer
  }

  async findManyByQuestionId(
    questionId: string,
    { page }: PaginationParams
  ): Promise<Answer[]> {
    const answers = this.itens
      .filter((item) => item.questionId.toString() === questionId)
      .slice((page - 1) * 20, page * 20)

    return answers
  }

  async create(answer: Answer): Promise<void> {
    this.itens.push(answer)
  }

  async save(answer: Answer): Promise<void> {
    const answerIndex = this.itens.findIndex((item) => item.id === answer.id)

    this.itens[answerIndex] = answer
  }

  async delete(answer: Answer): Promise<void> {
    const answerIndex = this.itens.findIndex((item) => item.id === answer.id)

    this.itens.splice(answerIndex, 1)
  }
}
