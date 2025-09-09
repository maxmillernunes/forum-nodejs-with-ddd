import type { QuestionAttachmentsRepository } from '@/domain/forum/application/repositories/question-attachments-repository'
import type { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'

export class InMemoryQuestionAttachmentsRepository
  implements QuestionAttachmentsRepository
{
  public itens: QuestionAttachment[] = []

  async findManyByQuestionId(
    questionId: string
  ): Promise<QuestionAttachment[]> {
    const questionAttachments = this.itens.filter(
      (item) => item.questionId.toString() === questionId
    )

    return questionAttachments
  }

  async deleteManyByQuestionId(questionId: string): Promise<void> {
    const questionAttachments = this.itens.filter(
      (item) => item.questionId.toString() !== questionId
    )

    this.itens = questionAttachments
  }
}
