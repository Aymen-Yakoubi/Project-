import './App.css'
import React, { useState ,useEffect } from 'react';
import CartList from './components/CartList'
import ProductsList from './components/ProductList'
import Search from './components/Search'
import axios from "axios"
const App = () => {
  const [menuView, setMenuView] = useState(false)
  const [view, setView] = useState('productList')
  const [data, setData] = useState([])

  const toggleMenu = () => {
    setMenuView(!menuView)
  }
  const switchView = (option) => {
    setView(option)
  }
    
    const fetchData =()=>{
      axios.get("http://localhost:5000/api/product/get")
      .then((response)=>setData(response.data))
      .catch((error)=>console.error(error))
    }
    useEffect(()=>{
      fetchData()
    },[])

  return (
    <div className="App">
      {console.log(data)}
      <div className="nav">
        <span className="logo" onClick={() => switchView('productList')}>
          TEK STORE
        </span>
        {view === 'productList' && <Search />}
        {view === 'productList' && (
          <span className="items" onClick={toggleMenu}>
            &#9660; CATEGORIES &#9660;
          </span>
        )}
        <span className="items"onClick={() => switchView('cart')}>
          🛒 CART
        </span>
      </div>
      {menuView && (
        <div className="menu">
          <span className="menu-item">All</span>
          <span className="menu-item">Computers</span>
          <span className="menu-item">Phones</span>
          <span className="menu-item">Electronics</span>
        </div>
      )}
      {view === 'productList' && <ProductsList data={data} />}
      {view === 'cart' && <CartList />}
      {view === 'productDetails' && <div>Render the clicked on single product from the list</div>}
    </div>
  )
}

export default App;
