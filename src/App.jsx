import React from 'react'
import PromoCard from './components/PromoCard'
import NavBar from './components/NavBar'
import CardList from './components/CardList'
function App() {

  return (
    <>
      <div className='w-screen'>
        <NavBar />
        <PromoCard />
        <CardList />
      </div>
    </>
  )
}

export default App
