import { React, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Loading from "./Loading/Loading"
import Home from "./pages/home/Home"
import Cards from "./pages/cards/Card"
import Cards2 from "./pages/cards2/Cards2"
import Became from "./pages/became/Became"
import Restaurant from './screens/Restaurant/Restaurant'
import Header from './pages/header/header'
import Halal from "./screens/Halal/Halal"
import View from "./screens/View/View"
import End from './pages/End/End'
import Tarmoq from "./pages/tarmoqlar1/Tarmoq"
import End2 from './pages/end2/End2'
import Scrolltop from './components/Scrolltop/Scrolltop'
function Homes() {
  return (
    <>
      <Home />
      <Cards />
      <Became />
      <Cards2 />
      <End />

    </>
  )
}

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='container'>
      {isLoading ? (
        <Loading />
      ) : (

        <BrowserRouter>
          <Scrolltop />
          <Header />
          <Routes>
            <Route path='/' element={<Homes />} />
            <Route path='/restaurant' element={<Restaurant />} />
            <Route path='/halal' element={<Halal />} />
            <Route path='/menu' element={<View />} />
          </Routes>
          <Tarmoq />
          <End2 />
        </BrowserRouter>

      )}
    </div>
  )
}

export default App