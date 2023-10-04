import './App.css';
import WishList from './components/WishList';
import Form from './components/Form'; 
import { useState } from 'react';

type Item = {
  id?: number,
  name: string, 
  price: number,
  link: string,
  image: string
}

const App = () => {
  const [items, setItems] = useState<Item[]>([])

  const addItem = (data: Item) => {
    const newItem = {
      id: items.length + 1,
      name: data.name,
      price: data.price,
      link: data.link,
      image: data.image
    }
    setItems([...items, newItem])
  }

  return (
    <div className="App">
      <Form formSubmit={addItem}/>
      <WishList items={items}/>
    </div>
  );
}

export default App;
