import { StudentType } from "./state";
import {addSkill, makeStudentActive, whereStudentLive} from './03';

let student: StudentType

beforeEach(() => {
  student = {
    id: 1,
    name: 'Dimych',
    age: 32,
    isActive: false,
    address: {
      streetTitle: "Surganova 2",
      city: {
        title: 'Minsk',
        stateTitle: 'Belarus'
      }
    },
    technologies: [
      {
        id: 1,
        title: 'HTML'
      },
      {
        id: 2,
        title: 'CSS'
      },
      {
        id: 3,
        title: 'JS'
      },
      {
        id: 4,
        title: 'React'
      },
    ]
  }
})

test("New tech skill should be added to student", () => {
  addSkill(student, 'TS')

  expect(student.technologies.length).toBe(5)
  expect(student.technologies[4].id).toBeDefined()
  expect(student.technologies[4].title).toBe('TS')
})

test("Student should be active", () => {
  makeStudentActive(student)

  expect(student.isActive).toBe(true)
})

test("Where does student live?", () => {
  let rez1 = whereStudentLive(student, "Moscow")
  let rez2 = whereStudentLive(student, "Minsk")

  expect(rez1).toBe(false)
  expect(rez2).toBe(true)
})