// import { apiRoot, projectKey } from "./clientBuilder";
// const { log } = require("./logger");

// const getProject = () => {
//   return apiRoot.withProjectKey({ projectKey }).get().execute();
// }

// ((requestInterval: number, nunberOfRequest?: number) => {
//   let i = 1;
//   const intervalId = setInterval(function () {
//     getProject().catch(log) // making the actual call here
//     if (i++ == nunberOfRequest) clearInterval(intervalId);
//   }, requestInterval);
// })(0, 20);

// import { apiRoot, projectKey } from "./clientBuilder";
// // const { log } = require("./logger");

// const getProject = () => {
//   return apiRoot.withProjectKey({ projectKey }).get().execute();
// }

// const stats = {};
// ((requestInterval: number, nunberOfRequest?: number) => {
//   let i = 1;
//   const intervalId = setInterval(async function () {
//     var startTime = new Date()
//     if (i++ == nunberOfRequest) clearInterval(intervalId);
//     var endTime = new Date()
//     var response = await getProject();
//     var totalTime = endTime.getTime() - startTime.getTime();
//     stats['request-' + i] = {
//       totalTime,
//       response
//     }
//   }, requestInterval);

// })(0, 20);
// console.log(stats, '>>>>>>-->')
