const { apiRoot, projectKey } = require('./client')
const { log } = require('./logger')

const getProject = () => {
  return apiRoot
    .withProjectKey({ projectKey })
    .get()
    .execute()
}

getProject()
  .then(log)
  .catch(log)
