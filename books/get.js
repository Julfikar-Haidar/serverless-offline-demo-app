const { sendResponse } = require("../functions/index");
const dynamoDb = require("../config/dynamoDb");

module.exports.handler = async event => {
  try {
    const { pk } = event.pathParameters;
    const params = {
      TableName: "Books",
      KeyConditionExpression: "pk = :pk",
      ExpressionAttributeValues: {
        ":pk": pk
      },
      Select: "ALL_ATTRIBUTES"
    };

    const data = await dynamoDb.query(params).promise();
    if (data.Count > 0) {
      return sendResponse(200, { item: data.Items });
    } else {
      return sendResponse(404, { message: "Book not found" });
    }
  } catch (e) {
    return sendResponse(500, { message: "Could not get the book" });
  }
};