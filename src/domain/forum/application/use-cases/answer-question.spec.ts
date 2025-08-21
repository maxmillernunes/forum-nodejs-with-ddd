import { AnswerQuestionUseCase } from './answer-question'
import type { AnswersRepository } from '../repositories/answers-repository'
import type { Answer } from '../../enterprise/entities/answer'

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {},
}

test('create a answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '2',
    content: 'New answer',
  })

  expect(answer.content).toEqual('New answer')
})
