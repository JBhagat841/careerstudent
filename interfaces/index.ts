// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type Blog = {
  id: number
  name: string
  readingTime?: number
  metadata?: string
  body?: string
}
