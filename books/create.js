var AWS = require("aws-sdk");
const { v4: uuidv4 } = require('uuid');
const { sendResponse } = require("../functions/index");
const dynamoDb = require("../config/dynamoDb");


module.exports.handler = async (event, context, callback) => {
  const body = JSON.parse(event.body);
  try {
    const { name, author_name, description } = body;
    const pk = uuidv4();
    const TableName = "Books";
    const params = {
      TableName,
      Item: {
        pk,
        name,
        author_name, 
        description
      },
      ConditionExpression: "attribute_not_exists(pk)"
    };
    const data = await dynamoDb.put(params).promise();
    console.log('32',data)
    return sendResponse(200,params.Item)
  } catch (e) {
    return sendResponse(500, { message: 'Could not create the post' });
  }
};
