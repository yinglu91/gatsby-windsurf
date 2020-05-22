const Promise = require(`bluebird`)

const blogs = require(`./src/utils/node/blogs.js`)
const sites = require(`./src/utils/node/sites.js`)
const sections = [blogs, sites]

exports.createPages = async (helpers) => {
  await Promise.all(sections.map((section) => section.createPages(helpers)))
}

// exports.onCreateNode = (helpers) => {
//   sections.forEach((section) => section.onCreateNode(helpers))
// }
