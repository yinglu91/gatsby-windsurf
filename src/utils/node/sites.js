const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(
    `
      {
        sites: allContentfulSites {
          nodes {
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    console.log(result.errors)
    return
  }

  // "slug": "hello-world"
  // http://localhost:8000/blogs/hello-world/
  result.data.sites.nodes.forEach((node) => {
    createPage({
      path: `/sites/${node.slug}/`,
      component: path.resolve('src/templates/site.jsx'),
      context: {
        slug: node.slug,
      },
    })
  })
}
