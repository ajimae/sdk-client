// const {
//   createApiBuilderFromCtpClient,
// } = require("@commercetools/typescript-sdk");

import {
  createAuthForClientCredentialsFlow,
  createHttpClient,
  createClient,
  createApiBuilderFromCtpClient,
} from '../index'
require('dotenv').config()

const fetch = require('node-fetch')

export const projectKey = 'demo-1'
const getClient = () => {
  const authMiddleware = createAuthForClientCredentialsFlow({
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey,
    credentials: {
      clientId: process.env.adminClientId || '',
      clientSecret: process.env.adminClientSecret || '',
    },
    oauthUri: process.env.adminAuthUrl || '',
    scopes: ['manage_project:demo-1'],
    fetch,
  })
  const httpMiddleware = createHttpClient({
    host: 'https://api.europe-west1.gcp.commercetools.com',
    fetch,
  })
  const client = createClient({ middlewares: [authMiddleware, httpMiddleware] })
  return client
}

// const getImportClient = () => {

// };

// const getStoreClient = () => {

// };

// const getMLClient = () => { };

// const getMyAPIClient = () => {

// };

// module.exports.apiRoot = createApiBuilderFromCtpClient(getClient());
export const apiRoot = createApiBuilderFromCtpClient(getClient())

// module.exports.importApiRoot = createApiBuilderFromCtpClientOnlyForImports(
//   getImportClient()
// );

// module.exports.storeApiRoot = createApiBuilderFromCtpClient(getStoreClient());

// module.exports.myApiRoot = createApiBuilderFromCtpClient(getMyAPIClient());
// module.exports.projectKey = projectKey;
