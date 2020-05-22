const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(
    `
      {
        allContentfulBlogPost {
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
  result.data.allContentfulBlogPost.nodes.forEach((node) => {
    createPage({
      path: `/blogs/${node.slug}/`,
      component: path.resolve('src/templates/blog-post.js'),
      context: {
        slug: node.slug,
      },
    })
  })
}
