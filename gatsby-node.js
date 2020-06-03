const { createFilePath } = require(`gatsby-source-filesystem`),
	path = require(`path`),
	remark = require(`remark`),
	remarkHtml = require(`remark-html`),
	remarkLint = require(`remark-preset-lint-recommended`);


const processMarkdown = (markdown) => remark().use(remarkLint).use(remarkHtml).processSync(markdown)
	.toString();

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;

	return graphql(`
			{
				allLandingPage {
					edges {
						node {
							id
						}
					}
				}
			}
		`)
		.then((result) => {
			if (result.errors) {
				// eslint-disable-next-line no-console
				result.errors.forEach((e) => console.error(e.toString()));
				return Promise.reject(result.errors);
			}

			const { data } = result;


			data.allLandingPage.edges.forEach((page) => {
				let slug = page.node.id.replace(`landingPage-`, ``);
				if (RegExp(/homepage/).test(page.node.id)) {
					slug = `/`;
				}

				createPage({
					path: slug,
					component: path.resolve(`src/templates/landingPage.js`),
					context: {
						id: page.node.id,
						themeId: page.node.id.replace(`landingPage-`, ``)
					}
				});
			});
		});
};


exports.onCreateNode = async ({
	node, actions, getNode, createContentDigest, loadNodeContent
}) => {
	const { createNodeField, createNode } = actions;


	if (node.internal.type === `MarkdownRemark` && node.fileAbsolutePath) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value: value.replace(/(^\/|\/$)/g, ``),
		});
	} else if ([`LandingPagesJson`].includes(node.internal.type) && node.title) {
		const content = JSON.parse(await loadNodeContent(getNode(node.parent))),
			data = {
				id: `landingPage-${createFilePath({ node, getNode }).replace(/(^\/|\/$)/g, ``)}`,
				title: node.title,
				parent: node.id,
				internal: {
					contentDigest: createContentDigest(node),
					type: `landingPage`
				},
				...content
			};


		if (data.banner) {
			data.banner.content = processMarkdown(data.banner.content_markdown);
		}

		if (data.content) {
			data.content.forEach((block) => {
				if (block.content_markdown) {
					block.content = processMarkdown(block.content_markdown);
				}

				if (block.sections) {
					block.sections.forEach((section) => {
						if (section.content_markdown) {
							section.content = processMarkdown(section.content_markdown);
						}
					});
				}
			});
		}


		createNode(data);
	}
};
