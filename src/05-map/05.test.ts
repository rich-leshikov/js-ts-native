import {dimychTransformator, ManType} from './05';

let people: Array<ManType>

beforeEach(() => {
  people = [
    {name: "Danila Smirnov", age: 34},
    {name: "Andrew Kvachkov", age: 39},
    {name: "Vladislav Letov", age: 20},
  ]
})

test("Should give modified array of ManType objects", () => {
  const students = people.map(dimychTransformator)

  expect(students[0].stack.length).toBe(6)
  expect(students[0].firstname).toBe('Danila')
  expect(students[0].lastname).toBe('Smirnov')
  expect(students[1].firstname).toBe('Andrew')
  expect(students[1].lastname).toBe('Kvachkov')
  expect(students[2].firstname).toBe('Vladislav')
  expect(students[2].lastname).toBe('Letov')
})

test("Should give array of greetings messages", () => {
  const greetings = people.map(m => `Hello, ${m.name.split(' ')[0]}, my dear friend!`)

  expect(greetings[0]).toBe("Hello, Danila, my dear friend!")
  expect(greetings[1]).toBe("Hello, Andrew, my dear friend!")
  expect(greetings[2]).toBe("Hello, Vladislav, my dear friend!")
})