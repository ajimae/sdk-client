export interface CustomerData {
  email: string
  password: string
  firstName: string
  lastName: string
  countryCode: string
  key: string
}

// import { apiRoot, projectKey } from './client';
import { apiRoot, projectKey } from './clientBuilder'

export const getCustomerById = (ID: string) =>
  apiRoot
    .withProjectKey({ projectKey })
    .customers()
    .withId({ ID })
    .get()
    .execute()

export const getCustomerByKey = (key: string) =>
  apiRoot
    .withProjectKey({ projectKey })
    .customers()
    .withKey({ key })
    .get()
    .execute()

const createCustomerDraft = (customerData: CustomerData) => {
  const {
    email,
    password,
    firstName,
    lastName,
    countryCode,
    key,
  } = customerData
  return {
    email,
    password,
    key,
    firstName,
    lastName,
    addresses: [
      {
        country: countryCode,
      },
    ],
    defaultShippingAddress: 0,
  }
}

export const createCustomer = (customerData: CustomerData) =>
  apiRoot
    .withProjectKey({ projectKey })
    .customers()
    .post({
      body: createCustomerDraft(customerData),
    })
    .execute()

// const createCustomerDraftKey: Function = (customerData: CustomerData) => {};

// module.exports.createCustomerKeyVerfiedEmail = (customerData: CustomerData) =>
//   apiRoot
//     .withProjectKey({ projectKey })
//     .customers()
//     .post({
//       body: {
//         ...createCustomerDraft(customerData),
//         ...createCustomerDraftKey(customerData),
//         isEmailVerified: true,
//       },
//     })
//     .execute();

// module.exports.assignCustomerToCustomerGroup = (
//   customerKey: string | number,
//   customerGroupKey: string | number
// ) => {
//   return getCustomerByKey(customerKey).then((customer) => {
//     const updateActions = [
//       {
//         action: "setCustomerGroup",
//         customerGroup: {
//           key: customerGroupKey,
//         },
//       },
//     ];
//     return apiRoot
//       .withProjectKey({ projectKey })
//       .customers()
//       .withId({ ID: customer.body.id })
//       .post({
//         body: {
//           actions: updateActions,
//           version: customer.body.version,
//         },
//       })
//       .execute();
//   });
// };
