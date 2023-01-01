export function sum(a: number, b: number) {
  return a + b
}

export function mult(a: number, b: number) {
  return a * b
}

export function splitIntoWords(sentence: string) {
  let arrWords = sentence.trim().toLowerCase().split(' ')

  return (
    arrWords.filter(w => w !== '' && w !== '-')
      .map(w => w.replace('.', '')
        .replace(',', '')
        .replace('!', '')
        .replace('?', '')
      )
  )
}