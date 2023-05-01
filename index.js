const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.get('/categories', (req, res) => {
  res.send(categories)
})

app.get('/news', (req, res) => {
  res.send(news)
})

app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const SelectedNews = news.find(n => n._id === id);
  res.send(SelectedNews);
})

app.get('/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news);
  }
  else {
    const selectedCategory = news.filter(c => parseInt(c.category_id) === id);
    res.send(selectedCategory);
  }

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})