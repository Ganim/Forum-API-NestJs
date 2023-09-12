import { Entity } from '@/core/entities/entities'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface CommentProps {
  authorId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}

/* 
  Uma classe abstrata nunca pode ser instanciada sozinha, sempre terá que ser extendida a uma outra classe.
  Neste caso, a classe genérica dos comentários deve ser extendida ao comentário da questão ou da resposta.
*/
export abstract class Comment<
  Props extends CommentProps,
> extends Entity<Props> {
  get content() {
    return this.props.content
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
  }

  get authorId() {
    return this.props.authorId
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }
}
