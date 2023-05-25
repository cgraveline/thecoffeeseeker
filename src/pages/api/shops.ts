import { NextApiResponse, NextApiRequest } from 'next'
import { gql, GraphQLClient } from 'graphql-request'
import { CoffeeShops } from '../../types'

const hygraph = new GraphQLClient(
  'https://api-us-east-1.hygraph.com/v2/clcjt8ric0ogl01ughxd0esvh/master'
)

const QUERY = gql`
  {
    coffeeShops {
      title
      website
      directions
      address
    }
  }
`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { coffeeShops } = await hygraph.request<CoffeeShops>(QUERY)

  res.status(200).json({
    coffeeShops,
  })
}
