// pages/api/mapbox.js

export default async function handler(req, res) {
  const { method } = req;

  // Only allow GET requests to the Mapbox API
  if (method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  // Set the CORS headers to allow requests from any origin
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  try {
    // Make a request to the Mapbox API
    const response = await fetch(
      `https://api.mapbox.com/styles/v1/mapbox/streets-v11?access_token=${'pk.eyJ1IjoianBudXdhZ2FiYSIsImEiOiJjbGduMmlrbDgwYm9mM21tbWdkZ3hodjc4In0.Q9vUbRDFh0Q7rc8o8Al8pA'}`
    );

    // Return the response from the Mapbox API
    res.status(response.status).json(await response.json());
  } catch (error) {
    // Handle any errors that occur while making the request
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
