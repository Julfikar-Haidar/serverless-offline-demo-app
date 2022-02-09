const { sendResponse } = require("../functions/index");
const dynamoDb = require("../config/dynamoDb");

module.exports.handler = async event => {
  try {
    const body = JSON.parse(event.body);
    const { id } = body;
    const params = {
      TableName: "Books",
      Key: {
        pk:id
      }
    };
    await dynamoDb.delete(params).promise();
    return sendResponse(200, { message: "Book deleted successfully" });
  } catch (e) {
    return sendResponse(500, { message: "Could not delete the post" });
  }
};