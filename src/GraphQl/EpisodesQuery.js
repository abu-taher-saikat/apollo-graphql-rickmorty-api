import {gql} from '@apollo/client';

export const GET_ALL_EPISODES= gql`
    query episodes($page : Int!){
        episodes(page : $page){
            info {
                count
                pages
                next
                prev
              }
              results {
                id
                name
                air_date
                created
                characters{
                    name
                    status
                    image
                    id
                  }
                  episode
              }
        }
    }
          
`
