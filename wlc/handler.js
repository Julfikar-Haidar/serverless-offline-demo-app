'use strict';

module.exports.wlc = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hey guys',
        input: event,
      },
      null,
      2
    ),
  };
};

