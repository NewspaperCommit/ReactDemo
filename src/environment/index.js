/*
 * @file: index.js
 * @description: It Contain environment variables.
 * @date: 01.07.2020
 * @author: Dixit
 */

const local = {
  apiUrl: "https://localhost:"
};

const production = {
  apiUrl: "https://localhost:"
};

console.log("process.env.REACT_APP_ENV :", process.env.REACT_APP_ENV);

if (process.env.REACT_APP_ENV === "prod") module.exports = production;
else if (process.env.REACT_APP_ENV === "dev") module.exports = local;
else module.exports = production;
