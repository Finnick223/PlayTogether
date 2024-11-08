import { gql } from '@apollo/client'
import { getClient } from './apollo-client'

export interface DataStructure {
  data: Data
}

export interface Data {
  characters: Characters
}

export interface Characters {
  results: Result[]
}

export interface Result {
  id: string
  name: string
  image: string
}

export async function queryRSC() {
  const { data }: DataStructure = await getClient().query({
    query: gql`
      query {
        characters(page: 1, filter: { name: "rick" }) {
          results {
            id
            name
            image
          }
        }
      }
    `,
  })

  return data.characters.results
}
