import './App.css'
import { useState } from 'react'
import quotes from './json/quotes.json'
import Card from './components/Card'
import colors from './json/colors.json'

function App() {

  const random = (arr) => {
    const num = Math.trunc(Math.random() * arr.length)

    return arr[num]
  }

  const [quote, setQuote] = useState(random(quotes))
  const [color, setColors] = useState(random(colors))

  const change = () => {
    setQuote(random(quotes))
    setColors(random(colors))
  }

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <Card text={quote} fun={change} colorStyle={color} />
      <p>Este es mi repositorio <a href="https://github.com/alpachm/1-prueba-react.git" target='_blank'>Click</a></p>
    </div>
  )
}

export default App
