'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
        
      },
      null,
      2
    ),
  };
};


module.exports.wlc = async (event) => {
  let post_data = JSON.parse(event.body)

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hey',
        input: post_data,
      },
      null,
      2
    ),
  };
};

