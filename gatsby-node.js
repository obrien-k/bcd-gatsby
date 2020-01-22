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
    console.log(JSON.stringify(result, null, 4))
  })
}