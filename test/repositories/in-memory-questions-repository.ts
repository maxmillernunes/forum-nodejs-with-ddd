import type { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import type { Question } from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public itens: Question[] = []

  async findById(questionId: string): Promise<Question | null> {
    const question = this.itens.find(
      (item) => item.id.toString() === questionId
    )

    if (!question) {
      return null
    }

    return question
  }

  async create(question: Question): Promise<void> {
    this.itens.push(question)
  }

  async findBySlug(slug: string): Promise<Question | null> {
    const question = this.itens.find((item) => item.slug.value === slug)

    if (!question) {
      return null
    }

    return question
  }

  async delete(question: Question): Promise<void> {
    const questionIndex = this.itens.findIndex(
      (item) => item.id === question.id
    )

    this.itens.splice(questionIndex, 1)
  }
}
