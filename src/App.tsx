import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './layout/footer'
import Header from './layout/header'
import About from './pages/about'
import Career from './pages/career'
import Contact from './pages/contact'
import Cooperation from './pages/cooperation'
import Eating from './pages/eating'
import Engineering from './pages/engineering'
import Home from './pages/home'
import Purchase from './pages/purchase'
import Service from './pages/service'
import Transportaion from './pages/transportation'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/career' element={<Career />} />
          <Route path='/purchase' element={<Purchase />} />
          <Route path='/cooperation' element={<Cooperation />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/engineering' element={<Engineering />} />
          <Route path='/service' element={<Service />} />
          <Route path='/eating' element={<Eating />} />
          <Route path='/transportaion' element={<Transportaion />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
