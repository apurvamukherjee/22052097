const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;
const WINDOW_SIZE = 10;
let windowNumbers = [];

const API_URLS = {
  p: "http://localhost:8000/primes",
  f: "http://localhost:8000/fibonacci",
  e: "http://localhost:8000/even",
  r: "http://localhost:8000/random",
};

const MOCK_DATA = {
  p: [2, 3, 5, 7],
  f: [1, 1, 2, 3, 5],
  e: [2, 4, 6, 8, 10],
  r: [15, 27, 34, 49, 50],
};

const calculateAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
};

app.get("/", (req, res) => {
  res.send("Welcome to the Average Calculator Microservice!");
});

app.get("/numbers/:numberid", async (req, res) => {
  const { numberid } = req.params;
  if (!API_URLS[numberid]) {
    return res.status(400).json({ error: "Invalid number ID" });
  }

  const prevWindowState = [...windowNumbers];

  try {
    const response = await axios.get(API_URLS[numberid], { timeout: 1000 });
    let newNumbers = response.data.numbers || [];

    if (!Array.isArray(newNumbers)) {
      throw new Error("Invalid response format");
    }

    newNumbers = newNumbers.filter((num) => !windowNumbers.includes(num));

    windowNumbers = [...windowNumbers, ...newNumbers].slice(-WINDOW_SIZE);

    res.json({
      windowPrevState: prevWindowState,
      windowCurrState: windowNumbers,
      numbers: newNumbers,
      avg: parseFloat(calculateAverage(windowNumbers).toFixed(2)),
    });

  } catch (error) {
    console.error("Error fetching numbers:", error.message);

    const fallbackNumbers = MOCK_DATA[numberid] || [];
    windowNumbers = [...windowNumbers, ...fallbackNumbers].slice(-WINDOW_SIZE);

    res.status(500).json({
      error: "Third-party API error or timeout",
      usedMockData: true,
      windowPrevState: prevWindowState,
      windowCurrState: windowNumbers,
      numbers: fallbackNumbers,
      avg: parseFloat(calculateAverage(windowNumbers).toFixed(2)),
    });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
