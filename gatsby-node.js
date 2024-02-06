require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`);
const resources = require('./content/resources/data');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/contractor/)) {
    page.context.layout = 'v2';
    createPage(page);
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: `/terms`,
    toPath: `https://storage.googleapis.com/public-assets.usurppower.com/legal/legal-current.pdf`,
  })

  const articleTemplate = path.resolve(`src/templates/article.js`)

  const templates = {
    article: articleTemplate,
  };

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            frontmatter {
              path
              tag
              title
              subtitle
              featuredImage {
                  publicURL
              }
            }
          }
        }
      }
    }
  `);

  const articles = result.data.allMarkdownRemark.edges.reduce((acc, {node}) => {
    const {
      html,
      frontmatter,
    } = node;
    const { tag } = frontmatter;

    if (!acc[tag]) {
      acc[tag] = [];
    }

    acc[tag].push({
      html,
      ...frontmatter,
    })
    return acc;
  }, {});

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const templateKey = node.frontmatter.template || 'article';
    const template = templates[templateKey];

    createPage({
      path: node.frontmatter.path,
      component: template,
      context: {
        relatedArticles: articles[node.frontmatter.tag]
      }, // additional data can be passed via context
    })
  });

  // Resources
  const resourceTemplate = path.resolve(`src/templates/resource.js`);
  const assetsFiles = await graphql(`
    {
      allFile(
          filter: {
            extension: { regex: "/(jpg|png)/" }
            relativeDirectory: { eq: "resources" }
          }
        ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 400) {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `)

  const assets = assetsFiles.data.allFile.edges.reduce((acc, asset) => {
    const {
      node: {
        name,
        childImageSharp: {
          fluid
        }
      }
    } = asset;
    acc[name] = fluid;
    return acc;
  }, {});

  resources.forEach((resource) => {
    if (resource.caseStudies) {
      resource.caseStudies.projects = resource.caseStudies.projects.map((project) => {
        if (typeof project.asset === 'string') {
          project.asset = assets[project.asset];
        }
        return project;
      });
    }
    if (resource.publications) {
      resource.publications.media = resource.publications.media.map((publication) => {
        if (typeof publication.imageName === 'string') {
          publication.image = assets[publication.imageName];
        }
        return publication;
      })
    }
    resource.articles.list = articles[resource.articles.tag];
    createPage({
      component: resourceTemplate,
      path: resource.meta.pathname,
      context: {
        ...resource
      }
    })
  })

  const contractorSignupTemplate = path.resolve(`src/templates/contractor-signup.js`);
  createPage({
    component: contractorSignupTemplate,
    path: '/contractor-signup',
    context: {
      layout: 'landingPage',
    }
  });

  const genericSignupTemplate = path.resolve(`src/templates/generic-signup.js`);
  createPage({
    component: genericSignupTemplate,
    path: '/sign-up',
    context: {
      layout: 'landingPage',
    }
  });
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  // const { createNodeField } = actions
  //
  // if (node.internal.type === `MarkdownRemark`) {
  //   const value = createFilePath({ node, getNode })
  //   createNodeField({
  //     name: `slug`,
  //     node,
  //     value,
  //   })
  // }
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
