import {gql} from '@apollo/client';

export const GET_ALL_CHARACTERS= gql`
    query characters($page : Int!){
        characters(page : $page){
            info {
                count
                pages
                next
                prev
              }
            results {
              name
              id
              image
              status
              species
              type
              gender
              origin{
                id
                name
                type
              }
            }
        }
    }
          
`
