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
// netlify/functions/saveFormData.js
exports.handler = async (event) => {
  if (event.httpMethod === "POST") {
    try {
      const bodyData = JSON.parse(event.body);
      const { screenshot, name, email } = bodyData;

      // Hier könntest du das base64-Bild abspeichern, per Mail verschicken, etc.
      // Demo: nur console.log:
      console.log("Screenshot LENGTH:", screenshot?.length);
      console.log("Name:", name, "Email:", email);
      
      // Falls du es in einer Datenbank ablegen willst, hier deine DB-Logik

      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: "Screenshot received" })
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
