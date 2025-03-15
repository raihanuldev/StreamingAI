const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // React theke request asbe, tai CORS enable korte hobe
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.get("/stream-tourist-places", async (req, res) => {
  const { prompt } = req.query;
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Transfer-Encoding", "chunked");

  const responseText = `Best tourist places in ${prompt}: Cox's Bazar, Saint Martin, Rangamati...`;

  for (const char of responseText) {
    res.write(char); // Ekta ekta character send korbe
    await new Promise((resolve) => setTimeout(resolve, 50)); // AI er moto slow effect
  }

  res.end();
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
