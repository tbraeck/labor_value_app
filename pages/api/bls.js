  // pages/api/bls.js
export default async function handler(req, res) {
  const seriesID = "CXU900000LB1201M";
  const API_KEY = 'e56c9f9f7ede45429aa4920fc71eced9'; // Replace with your actual API key

  try {
    const response = await fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/${seriesID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        seriesid: [seriesID],
        startyear: "2020",
        endyear: "2023",
        registrationKey: API_KEY
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
