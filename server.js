const express = require('express')
const app = express()
const port = 2000
var cors = require('cors')

app.use(cors())

app.get('/api/product', (req, res) => {
  res.json({
    name: "Омлет по-итальянски",
    image: 'https://i.postimg.cc/0rRJDyX9/omlet.jpg',
    ingredients: [
      "Яйцо - 3 шт.",
      "Помидор - 1 шт.",
      "Молоко - 50 мл."
    ],
    description: "Приготовление итальянского омлета начинаем с того, что очищаем овощи (по необходимости) от кожуры. Нарезаем лук тоненькими полукольцами..."
  })
})

app.get('/', (req, res) => {
    res.send('Less 21 Server (Back-end)')
  })

app.listen(port, () => {
  console.log(`Less 21 http://localhost:${port}`)
})