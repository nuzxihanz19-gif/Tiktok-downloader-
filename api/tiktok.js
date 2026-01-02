export default async function handler(req, res) {
  try {
    const { url } = req.query;
    if (!url) {
      return res.status(400).json({ error: "URL kosong" });
    }

    const apiKey = process.env.API_KEY;

    const apiUrl =
      "https://api.ryzumi.vip/api/downloader/v2/ttdl" +
      "?url=" + encodeURIComponent(url) +
      "&apikey=" + apiKey;

    const response = await fetch(apiUrl);
    const data = await response.json();

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
      }
