const { sendResponse } = require("../functions/index");
const dynamoDb = require("../config/dynamoDb");

module.exports.handler = async event => {
    try {
        const body = JSON.parse(event.body);
        console.log(event.pathParameters.id)
        const { name, author_name, description } = body
        const params = {
            TableName: "Books",
            Key: {
                pk: event.pathParameters.id
            },
            ExpressionAttributeNames: {
                '#name': 'name',
            },
            ExpressionAttributeValues: {
                ":name": name,
                ":author_name": author_name,
                ":description": description
            },
            UpdateExpression:
                "SET #name = :name, author_name = :author_name, description = :description",
            ReturnValues: "ALL_NEW"
        };

        const data = await dynamoDb.update(params).promise();
        if (data.Attributes) {
            return sendResponse(200, data.Attributes);
        } else {
            return sendResponse(404, { message: "Updated post data not found" });
        }
    } catch (e) {
        return sendResponse(500, { message: "Could not update this post" });
    }
};