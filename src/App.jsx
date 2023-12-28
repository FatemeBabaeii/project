import { useState } from 'react'
import './App.scss'
import Card from './components/card'
import DATA from "./components/data/data.json"
import DetailsPage from "./components/DetailsPage"
import MainContainer from './components/MainContainer'

export default function App() {

  const [products, setProducts] = useState(DATA)
  const [product, setProduct] = useState(products[0]);

  function handleDetailsProduct(id) {
    products.map(item => {item.id === id && setProduct(item)})
  }

  return (
    <div>
        <DetailsPage data={product} />
        {products.map(item => {
          return <Card key={item.id} data={item} handleDetailsProduct={() => handleDetailsProduct(item.id)} />
        })}
    </div>
  )
}
