import { createContext, useState } from "react"

export type ListItem = {
	id?: number, 
	name: string, 
	price: number, 
	link: string, 
	image: string
}

export type ItemContextType = {
	itemList: ListItem[],
	addItem: (item: ListItem) => void
}

export const ItemContext = createContext<ItemContextType>({} as ItemContextType)

export const ItemProvider = ({children}: { children: React.ReactNode }) => {

	const [itemList, setItemList] = useState<ListItem[]>([
		{ 
			id: 1,
			name: "Rattan chair", 
			price: 42000, 
			link: "https://6johan.com/products/silver-frame-rattan-chair?variant=41437404266694&currency=JPY&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_campaign=gs-2021-10-18&utm_source=google&utm_medium=smart_campaign&gad=1&gclid=CjwKCAjwvfmoBhAwEiwAG2tqzAMVrHfEI-ZpUH0D6KeEas_hVP4ostVLyW_lfrETHl6IC73FuYzuXRoCR4QQAvD_BwE",
			image: "https://6johan.com/cdn/shop/files/silverframerattanchair4_1000x.png?v=1683117452"
		}, 
		{
			id: 2, 
			name: "Linen curtain", 
			price: 3000, 
			link: "https://www.amazon.co.jp/NICETOWN-%E9%BA%BB%E9%A2%A8%E3%82%AB%E3%83%BC%E3%83%86%E3%83%B3-%E3%82%BF%E3%82%A4%E3%83%97-1-%E3%83%97%E3%83%A9%E3%82%A4%E3%83%90%E3%82%B7%E3%83%BC%E4%BF%9D%E8%AD%B7%E3%83%8A%E3%83%81%E3%83%A5%E3%83%A9%E3%83%AB%E3%81%AA%E9%9B%B0%E5%9B%B2%E6%B0%97-%E3%81%8A%E3%81%97%E3%82%83%E3%82%8CUV%E3%82%AB%E3%83%83%E3%83%88-%E4%BA%9C%E9%BA%BB%E8%89%B2-%E5%B9%85100cm%E4%B8%88178cm/dp/B0B742XFKW?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=AO3P2KAXRSQW9&th=1", 
			image: "https://m.media-amazon.com/images/I/81rkoqKiCjL._AC_SL1500_.jpg"
		}
	])

	const addItem = ({name, price, link, image}: ListItem) => {
    const newItem = {
      id: itemList.length + 1,
      name: name,
      price: price,
      link: link,
      image: image
    }
    setItemList([...itemList, newItem])
  }

	const toShare = {
		itemList: itemList, 
		addItem: addItem
	}

	return (
    <ItemContext.Provider value={toShare} >
      {children}
    </ItemContext.Provider>
  )
}
