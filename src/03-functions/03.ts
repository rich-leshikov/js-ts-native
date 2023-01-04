import {CityType, GovernmentBuildingsType, HouseType} from '../02-objects/02';
import {StudentType} from './state';

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: 5, // )))))
    title: skill
  })
}

export const makeStudentActive = (student: StudentType) => {
  student.isActive = true
}

export const whereStudentLive = (student: StudentType, city: string) => {
  return student.address.city.title === city
}

export const changeBudget = (building: GovernmentBuildingsType, budgetChanging: number) => {
  building.budget += budgetChanging
}

export const repairHouse = (house: HouseType) => {
  house.repaired = true
}

export const hireStuff = (building: GovernmentBuildingsType, stuffChanging: number) => {
  building.staffCount += stuffChanging
}

export const fireStuff = (building: GovernmentBuildingsType, stuffChanging: number) => {
  building.staffCount -= stuffChanging
}

export const createMessage = (city: CityType) => {
  return `Hello ${city.title} citizens. I want you are happy. All ${city.citizensNumber} of you.`
}
