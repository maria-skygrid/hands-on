import './styles/input.css'
import WishList from './components/WishList';
import Form from './components/Form'; 
import { useState } from 'react';
import { FormData } from './components/Form';

const App = () => {
  const [items, setItems] = useState<FormData[]>([])

  const addItem = ({name, price, link, image}: FormData) => {
    const newItem = {
      id: items.length + 1,
      name: name,
      price: price,
      link: link,
      image: image
    }
    setItems([...items, newItem])
  }

  return (
    <div className="text-sm md:text-base bg-slate-100 h-full md:flex">
      <Form formSubmit={addItem}/>
      <WishList items={items}/>
    </div>
  );
}

export default App;
