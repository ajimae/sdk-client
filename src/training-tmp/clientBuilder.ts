import ClientBuilder from '../builder/ClientBuilder'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'
import { Client } from '../../src/types/sdk.d'

require('dotenv').config()

export const projectKey = 'demo-1'
const fetch = require('node-fetch')

const authMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey,
  credentials: {
    clientId: process.env.CTP_CLIENT_ID || '',
    clientSecret: process.env.CTP_CLIENT_SECRET || '',
  },
  oauthUri: process.env.adminAuthUrl || '',
  scopes: ['manage_project:demo-1'],
  fetch,
}

const httpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
}

const oauthUri = 'https://auth.europe-west1.gcp.commercetools.com'
const baseUri = 'https://api.europe-west1.gcp.commercetools.com'
const credentials = {
  clientId: process.env.CTP_CLIENT_ID || '',
  clientSecret: process.env.CTP_CLIENT_SECRET || '',
}

const authMiddlewarePassOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey,
  credentials: {
    clientId: process.env.CTP_CLIENT_ID || '',
    clientSecret: process.env.CTP_CLIENT_SECRET || '',
    user: {
      username: 'example@commercetools.com',
      password: '*********',
    },
  },
  oauthUri: process.env.adminAuthUrl || '',
  scopes: ['manage_project:demo-1'],
  fetch,
}

// export const apiRoot = new ClientBuilder()
//   .defaultClient(baseUri, credentials, oauthUri, projectKey)
//   .build()

export const client: Client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build()

export const apiRoot = createApiBuilderFromCtpClient(client)
