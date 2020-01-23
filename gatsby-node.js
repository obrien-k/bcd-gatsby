const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allBigCommerceProducts {
        edges {
          node {
            name
            description
            price
            images{
                description
              url_standard
          }
          custom_url{
              url
          }
          }
        }
      }
    }
  `).then(result => {
    result.data.allBigCommerceProducts.edges.forEach(({ node }) =>
    createPage({
        path: node.custom_url.url,
        component: path.resolve('./src/templates/product.js'),
        context: {
            url: node.custom_url.url,
        },
    })
    )
  })
}