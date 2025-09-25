import type { UniqueEntityId } from '@/core/entities/unique-entity-id'
import type { DomainEvent } from '@/core/events/domain-event'
import type { AnswerComment } from '../entities/answer-comment'

export class CommentOnAnswerEvent implements DomainEvent {
  occurredAt: Date
  comment: AnswerComment

  constructor(comment: AnswerComment) {
    this.comment = comment
    this.occurredAt = new Date()
  }

  getAggregateId(): UniqueEntityId {
    return this.comment.id
  }
}
