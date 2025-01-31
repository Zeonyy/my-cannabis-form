exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    try {
      const data = JSON.parse(event.body);
      console.log("Empfangene Daten:", data);
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: "Data received." })
      };
    } catch (err) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: err.toString() })
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: "Method not allowed" })
    };
  }
};
