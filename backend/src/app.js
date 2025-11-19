import express from "express";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.json({ ok: true, msg: "Hello from Express inside a Dev Container!", name: "Jason" });
});

app.get("/health", (req, res) => {
  res.status(200).send("healthy");
});



app.get("/math/circle/:r", (req, res) => {
  const r = Number(req.params.r);

  const area = Math.PI * r * r;
  const circumference = 2 * Math.PI * r;

  res.json({
    area: Number(area.toFixed(2)),
    circumference: Number(circumference.toFixed(2))
  });
});

app.get("/math/rectangle/:width/:height", (req, res) => {
  const width = Number(req.params.width);
  const height = Number(req.params.height);

  const area = width * height;
  const perimeter = 2 * (width + height);

  res.json({ area, perimeter });
});

app.get("/math/power/:base/:exponent", (req, res) => {
  const base = Number(req.params.base);
  const exponent = Number(req.params.exponent);

  const result = Math.pow(base, exponent);
  let response = { result };

  if (req.query.root === "true") {
    response.root = Math.sqrt(base);
  }

  res.json(response);
});

let categories = ['successQuotes', 'perseveranceQuotes', 'happinessQuotes'];

let successQuotes = [
  {
    'quote': 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    'author': 'Winston S. Churchill'
  },
  {
    'quote': 'The way to get started is to quit talking and begin doing.',
    'author': 'Walt Disney'
  }
];

let perseveranceQuotes = [
  {
    'quote': 'It’s not that I’m so smart, it’s just that I stay with problems longer.',
    'author': 'Albert Einstein'
  },
  {
    'quote': 'Perseverance is failing 19 times and succeeding the 20th.',
    'author': 'Julie Andrews'
  }
];

let happinessQuotes = [
  {
    'quote': 'Happiness is not something ready made. It comes from your own actions.',
    'author': 'Dalai Lama'
  },
  {
    'quote': 'For every minute you are angry you lose sixty seconds of happiness.',
    'author': 'Ralph Waldo Emerson'
  }
];

app.get("/quotebook/categories", (req, res) => {
  let output = categories.map(c => `A possible category is ${c}`).join("\n");
  res.type("text").send(output);
});

app.get("/quotebook/quote/:category", (req, res) => {
  const category = req.params.category;

  if (!categories.includes(category)) {
    return res.status(400).json({ error: `no category listed for ${category}` });
  }

  let selectedList = eval(category);
  let randomQuote = selectedList[Math.floor(Math.random() * selectedList.length)];
  res.json(randomQuote);
});

app.post("/quotebook/quote/new", (req, res) => {
  const { category, quote, author } = req.body;

  if (!category || !quote || !author || !categories.includes(category)) {
    return res.status(400).json({ error: "invalid or insufficient user input" });
  }

  let selectedList = eval(category);
  selectedList.push({ quote, author });

  res.type("text").send("Success!");
});