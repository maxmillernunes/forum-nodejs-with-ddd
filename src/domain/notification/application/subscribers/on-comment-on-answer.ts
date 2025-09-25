import { DomainEvents } from '@/core/events/domain-events'
import type { EventHandler } from '@/core/events/event-handler'
import { CommentOnAnswerEvent } from '@/domain/forum/enterprise/events/comment-on-answer-event'
import { SendNotificationUseCase } from '../use-case/send-notification'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import type { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'

export class OnCommentOnAnswer implements EventHandler {
  constructor(
    private answersRepository: AnswersRepository,
    private questionsRepository: QuestionsRepository,
    private sendNotificationUseCase: SendNotificationUseCase
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendNewCommentOnAnswerNotification.bind(this),
      CommentOnAnswerEvent.name
    )
  }

  async sendNewCommentOnAnswerNotification({ comment }: CommentOnAnswerEvent) {
    const answer = await this.answersRepository.findById(
      comment.answerId.toString()
    )

    if (!answer) return

    const question = await this.questionsRepository.findById(
      answer.questionId.toString()
    )

    if (!question) return

    await this.sendNotificationUseCase.execute({
      recipientId: answer.authorId.toString(),
      title: 'Novo comentário em sua resposta.',
      content: `A resposta que voce envio em "${question.title
        .substring(0, 20)
        .concat('...')} recebeu um novo comentário!"`,
    })
  }
}
