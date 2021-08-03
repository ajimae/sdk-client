import { apiRoot, projectKey } from './clientBuilder'
const { log } = require('./logger')

export const getProject = () => {
  return apiRoot
    .withProjectKey({ projectKey })
    .get()
    .execute()
}

getProject()
  .then(log)
  .catch(log)
