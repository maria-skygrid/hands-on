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
  // const items: Item[] = [
  //   {
  //     id: 1, 
  //     name: "chair", 
  //     price: 5000, 
  //     link: "https://kanademono.design/products/dch-k03?variant=32698086096958&gclid=Cj0KCQjw1OmoBhDXARIsAAAYGSH6ENjmpqJrxwaqkErHlx07OnYi6aoS4TtoUkAoNdgOuIT2vU3CHxgaAuPFEALw_wcB", 
  //     image: "https://kanademono.design/cdn/shop/products/KanademonoSimpleDiningChairNatural_02_1080x.jpg?v=1629339321"
  //   }, 
  //   {
  //     id: 2, 
  //     name: "coffee filter holder", 
  //     price: 2.800, 
  //     link: "https://www.creema.jp/item/15827002/detail", 
  //     image: "https://c.p02.c4a.im/images/item/15827002/6f7ecd48131d456494d6e3eaf756b53021fdea73ee2ef342dbe5d338efeb5a78?d=583x585"
  //   }
  // ]

  const addItem = (data: Item) => {
    console.log(data);
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
