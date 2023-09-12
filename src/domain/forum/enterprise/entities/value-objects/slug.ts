export class Slug {
  public value: string

  private constructor(value: string) {
    this.value = value
  }

  static create(slug: string) {
    return new Slug(slug)
  }

  /**
   * Receives a string and normalize it as a slug
   *
   * Example: "An exemple title" => "an-example-title"
   *
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // \ -> é um scape | s -> significa os espaços em branco | + -> um ou mais
      .replace(/[^\w-]+/g, '') // [] -> serve para fazer Match| \w -> Todas as palavras | ^ -> tudo o que não são... palavras
      .replace(/_/g, '-') // Substitui qualquer Underline por Hifen
      .replace(/--+/g, '-') // Substitui dois Hifens por um Hifen
      .replace(/-$/g, '') // $ -> no final da string

    return new Slug(slugText)
  }
}
