var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"https://apoiob2b-frontend-dev.azurewebsites.net/v1"',
  GTM_ID: 'GTM-T62ZZF5',
  AZURE_SEARCH_BASE_URL: '"https://apoiob2b-search-dev.search.windows.net"',
  AZURE_SEARCH_API_KEY: '"80C4391D0D3F9F6BA3F59C5F9B5D01FC"',
  AZURE_SEARCH_API_VERSION: '"2016-09-01"'
})
