import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
  const product = data.allBigCommerceProducts.edges[0].node
  console.log(product)

  return (
    <Layout>
      <div>
        <table>
          <tbody>
            
                <h1>{product.name}</h1>
                <td>
                  <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></div>
                </td>
                <td>
		{product.images.map(({ url_standard, description }, index) => (
                    <img key={index} alt={description} src={url_standard} />
                  ))}
                </td>
                <td>{product.price.toFixed(2)}</td>
              
           
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query ($url: String) {
    allBigCommerceProducts (filter: {custom_url: {url: {eq: $url}}}) {
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
