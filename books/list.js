const dynamoDb = require("../config/dynamoDb");
const { sendResponse } = require("../functions/index");

module.exports.handler = async event => {
  try {
    const params = {
      TableName: "Books",
    }
    const posts = await dynamoDb.scan(params).promise();
    return sendResponse(200, { items: posts.Items });
  } catch (e) {
    return sendResponse(500, { message: "Could not get the books list" });
  }
};