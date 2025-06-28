import fetch from 'node-fetch';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.PUBLIC_AIRTABLE_SPECIAL_EVENTS_KEY;
const baseId = process.env.PUBLIC_AIRTABLE_SPECIAL_EVENTS_BASE;
const tableName = process.env.PUBLIC_AIRTABLE_SPECIAL_EVENTS_TABLE;

async function fetchAirtableData() {
  const url = `https://api.airtable.com/v0/${baseId}/${tableName}?view=Grid%20view`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const json = await res.json();
    if (!json.records) {
      console.error("No records found.");
      return;
    }

    // Save to file
    fs.writeFileSync(
      './src/data/specialevents.json',
      JSON.stringify(json.records, null, 2)
    );
    console.log('✅ specialevents.json updated successfully.');
  } catch (err) {
    console.error('❌ Error fetching Airtable data:', err);
  }
}

fetchAirtableData();
