// Returns the summarized text as a string.
const axios = require('axios');
require("dotenv").config();

async function summarizeText(text) {
  let data = JSON.stringify({
    "inputs": text,
    "parameters": {
      "max_length": 100,
      "min_length": 30
    }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN
    },
    data : data
  };

  try {
		const response = await axios.request(config);

		return response.data[0].summary_text;
  } catch (error) {
    console.log(process.env.ACCESS_TOKEN);
		console.log("Error during summarization:", error);
		return "An error occurred during summarization.";
  }



}

module.exports = summarizeText;