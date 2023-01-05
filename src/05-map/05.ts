export type ManType = {
  name: string,
  age: number
}

export const dimychTransformator = (man: ManType) => {
  const [firstname, lastname] = man.name.split(' ')

  return {
    stack: ['HTML', 'CSS', 'JS', 'TDD', 'React', 'Redux'],
    firstname: firstname,
    lastname: lastname
  }
}