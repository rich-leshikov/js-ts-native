import './01'
import {mult, splitIntoWords, sum} from './01';
import exp from 'constants';

let a: number
let b: number
let c: number

beforeEach(() => {
  a = 5
  b = 2
  c = 0
})

test('Sum should be correct', () => {
  //action
  const rez1 = sum(a, b)
  const rez2 = sum(c, b)
  const rez3 = sum(a, c)

  //expect result
  expect(rez1).toBe(7)
  expect(rez2).toBe(2)
  expect(rez3).toBe(5)
})

test('Product should be correct', () => {
  //action
  const rez1 = mult(a, b)
  const rez2 = mult(c, b)
  const rez3 = mult(a, c)

  //expect result
  expect(rez1).toBe(10)
  expect(rez2).toBe(0)
  expect(rez3).toBe(0)
})

test('Splitting into words should be correct', () => {
  //action
  const rez1 = splitIntoWords('In a hole in the ground there lived a hobbit.')
  const rez2 = splitIntoWords('Never laugh at live dragons!')

  //expect result
  expect(rez1.length).toBe(10)
  expect(rez1[9]).toBe('hobbit')
  expect(rez1[0]).toBe('in')
  expect(rez2.length).toBe(5)
  expect(rez2[1]).toBe('laugh')
  expect(rez2[4]).toBe('dragons')
})