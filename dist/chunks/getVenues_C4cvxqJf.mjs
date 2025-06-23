import axios from 'axios';

async function getVenues() {
  const AIRTABLE_TOKEN = "patMSvvkIboa3YFYf.e9874cde2970af4197a39ec17e0fb7d5f509ecc2417871ec0e905492c432a7ed";
  const BASE_ID = "appv9OQhEjhG36s5H";
  const TABLE_NAME = "Venues";
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`
    }
  });
  return response.data.records.map((record) => record.fields);
}

export { getVenues as g };
