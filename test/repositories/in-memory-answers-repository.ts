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
