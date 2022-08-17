import { gql, useQuery } from "@apollo/client";

const GET_CLIENTS = gql`
    query getClients {
        clients {
            id
            name
            email
            phone
        }
    }
`

export const Clients = () => {

    const { loading, error, data } = useQuery(GET_CLIENTS);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Something went wrong</p>

    return (
        <div>Clients</div>
    )
}
