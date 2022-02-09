const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000",
    accessKeyId: "bogusaccesskey",
    secretAccessKey: "bogussecretkey",
  });

const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports = dynamo;