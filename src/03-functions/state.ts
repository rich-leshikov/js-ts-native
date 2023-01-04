type TechnologiesType = {
  id: number,
  title: string
}

type CityType = {
  title: string,
  stateTitle: string
}

type AddressType = {
  streetTitle: string,
  city: CityType,
}

export type StudentType = {
  id: number,
  name: string,
  age: number,
  isActive: boolean,
  address: AddressType,
  technologies: Array<TechnologiesType>
}

// export const student: StudentType = {
//   id: 1,
//   name: 'Dimych',
//   age: 32,
//   isActive: false,
//   address: {
//     streetTitle: "Surganova 2",
//     city: {
//       title: 'Minsk',
//       stateTitle: 'Belarus'
//     }
//   },
//   technologies: [
//     {
//       id: 1,
//       title: 'HTML'
//     },
//     {
//       id: 2,
//       title: 'CSS'
//     },
//     {
//       id: 3,
//       title: 'JS'
//     },
//     {
//       id: 4,
//       title: 'React'
//     },
//   ]
// }