import { createCustomer, getCustomerById, getCustomerByKey } from './customer'
const { log } = require('./logger')

const customerSampleData = {
  firstName: 'test2',
  lastName: 'test',
  email: 'test2@test.com',
  password: '123',
  key: 'test1233',
  countryCode: 'DE',
}

// createCustomer(customerSampleData).then(log).catch(log);
getCustomerByKey('test1233')
  .then(log)
  .catch(log)
// getCustomerById("c14df345-f8b2-4394-9c04-374ea15049f0").then(log).catch(log);
