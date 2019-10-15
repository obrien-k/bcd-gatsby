import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>My Products</h1> 
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.allBigCommerceProducts.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.name}</td>
                <td>
                  <div
                    dangerouslySetInnerHTML={{ __html: node.description }}
                  ></div>
                </td>
                <td>
		{node.images.map(({ url_standard, description }, index) => (
                    <img key={index} alt={description} src={url_standard} />
                  ))}
                </td>
                <td>{node.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allBigCommerceProducts {
      edges {
        node {
          description
          name
          price
	  images{
	  	description
		url_standard
	}
        }
      }
    }
  }
`
