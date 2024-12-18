import axios from 'axios';

export async function fetchMessage() {
  try {
    const response = await axios.get('/api/hello');
    return response.data.message;
  } catch (error) {
    console.error('Error fetching message:', error);
    throw error;
  }
}
