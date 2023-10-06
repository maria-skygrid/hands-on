import './styles/input.css'
import WishList from './components/WishList';
import Form from './components/Form'; 

const App = () => {

  return (
    <div className="text-sm md:text-base bg-slate-100 h-full md:flex">
      <Form />
      <WishList />
    </div>
  );
}

export default App;
