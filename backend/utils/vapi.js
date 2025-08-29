const axios = require('axios');

const VAPI_API_KEY = process.env.VAPI_API_KEY;
const ASSISTANT_ID = process.env.VAPI_ASSISTANT_ID;

const vapiInstance = axios.create({
  baseURL: 'https://api.vapi.ai',
  headers: {
    'Authorization': `Bearer ${VAPI_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

async function sendMessageToAssistant(message) {
  try {
    const response = await vapiInstance.post('/calls', {
      assistantId: ASSISTANT_ID,
      messages: [{ role: 'user', content: message }],
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message to VAPI:', error);
    throw error;
  }
}

module.exports = { sendMessageToAssistant };
