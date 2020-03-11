const { createRemoteFileNode } = require('gatsby-source-filesystem')

exports.createResolvers = async ({
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter
}) => {
    const { createNode } = actions

    await createResolvers({
        GitHub_Repository: {
            imageFile: {
                type: "File",
                async resolve(node) {
                    if (node && node.openGraphImageUrl) {
                        return await createRemoteFileNode({
                            url: node.openGraphImageUrl,
                            store,
                            cache,
                            createNode,
                            createNodeId,
                            reporter
                        })
                    }
                }
            }
        }
    })
}