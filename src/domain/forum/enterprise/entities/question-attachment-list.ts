import { WatchedList } from '@/core/entities/watched-list'
import { QuestionAttachment } from './question-attachment'

export class QuestionAttachmentList extends WatchedList<QuestionAttachment> {
  // Aqui é preciso especificar qual o parametro de comparação
  // Neste caso é o ID do attachment
  compareItems(a: QuestionAttachment, b: QuestionAttachment): boolean {
    return a.attachmentId.equals(b.attachmentId)
  }
}
