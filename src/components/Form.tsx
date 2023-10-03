const Form = (): JSX.Element => {
  return (
    <form>
      <input type="text" placeholder="Item name"/>
      <input type="text" placeholder="Item price"/>
      <input type="text" placeholder="Item link"/>
      <input type="text" placeholder="Item img"/>
      <button type="submit">Add Item</button>
    </form>
  )
}

export default Form;