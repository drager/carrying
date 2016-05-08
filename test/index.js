// Require all spec files so they are added to webpack.
const context = require.context('.', true, /.+\.spec\.ts?$/);
context.keys().forEach(context)
module.exports = context
