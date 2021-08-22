import {gql} from '@apollo/client';

export const GET_SINGLE_CHARACTER = gql`
query character($id : ID!){
    character(id : $id){
          id
          name
          status
          species
          type
          gender
          image
          created
          episode{
            name
            episode
            air_date
            id
          }
          location{
            id
            name
            type
            dimension
            created
          }
      
  }
}  


`
