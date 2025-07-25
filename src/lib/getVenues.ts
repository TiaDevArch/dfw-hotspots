import axios from 'axios';

export async function getVenues() {
  const AIRTABLE_TOKEN = import.meta.env.AIRTABLE_TOKEN;
  const BASE_ID = 'appv9OQhEjhG36s5H';
  const TABLE_NAME = 'Venues';

  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`
    }
  });

  // Return fields only
  return response.data.records.map(record => record.fields);
}