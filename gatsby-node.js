const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const createMarkdownPages = (edges, createPage, template) =>
    edges.forEach(({ node }, index) => {
        const prev = index === 0 ? null : edges[index - 1].node;
        const next = index === edges.length - 1 ? null : edges[index + 1].node;

        createPage({
            path: node.frontmatter.path,
            component: path.resolve(`./src/templates/${template}/index.js`),
            context: {
                slug: node.fields.slug,
                title: node.frontmatter.title,
                excerpt: node.excerpt,
                timeToRead: node.timeToRead,
                prev,
                next,
            },
        });
    });

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        node: {
            fs: 'empty',
            net: 'empty',
        },
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            plugins: [new DirectoryNamedWebpackPlugin()],
        },
    });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type !== 'MarkdownRemark') return;

    const slug = createFilePath({ node, getNode });

    createNodeField({
        node,
        name: 'slug',
        value: slug,
    });
};

exports.onCreatePage = ({ page, actions }) => {
    const { deletePage, createPage } = actions

    return new Promise(resolve => {
        // if the page component is the home page component.
        if (page.componentPath === `${__dirname}/src/pages/home/index.js`) {
            deletePage(page)

            // create a new page but with '/' as path.
            createPage({
                ...page,
                path: '/',
            });
        }

        // make sure page section components don't get created into pages.
        if (page.componentPath.includes('sections')) deletePage(page);

        resolve();
    });
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise(resolve => {
        graphql(`
            {
                allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                    totalCount
                    edges {
                        node {
                            excerpt
                            fields {
                                slug
                            }
                            frontmatter {
                                category
                                date(formatString: "MMMM DD, YYYY")
                                description
                                draft
                                page
                                path
                                tags
                                template
                                title
                            }
                            timeToRead
                        }
                    }
                }
            }
        `).then(result => {
            if (result.errors) reject(result.errors);

            const postTemplate = 'post';
            const posts = result.data.allMarkdownRemark.edges.filter(
                page => page.node.frontmatter.template === postTemplate && !page.node.frontmatter.draft,
            );
            const projectTemplate = 'project';
            const projects = result.data.allMarkdownRemark.edges.filter(
                page => page.node.frontmatter.template === projectTemplate && !page.node.frontmatter.draft,
            );
            const serviceTemplate = 'service';
            const services = result.data.allMarkdownRemark.edges.filter(
                page => page.node.frontmatter.template === serviceTemplate && !page.node.frontmatter.draft,
            );

            createMarkdownPages(posts, createPage, postTemplate);
            createMarkdownPages(projects, createPage, projectTemplate);
            createMarkdownPages(services, createPage, serviceTemplate);

            resolve();
        });
    });
};
