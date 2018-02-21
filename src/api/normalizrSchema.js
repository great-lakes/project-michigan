import { schema } from 'normalizr'

const { Entity } = schema

export const project = new Entity('project')

export const student = new Entity('student', {
  project
})

export const azurecode = new Entity('azurecode', {
  student
})

export const skill = new Entity('skill')

export const mentor = new Entity('mentor', {
  skills: [skill]
})

export const inquiry = new Entity('inquiry', {
  student,
  mentor
})

export const hackathon = new Entity('hackathon', {
  mentors: [mentor],
  students: [student],
  inquiries: [inquiry],
  azurecodes: [azurecode]
})
