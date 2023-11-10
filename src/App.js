import React from 'react'
import Cards from './Components/Cards'
import "./App.css"

const App = () => {

  const images=[
    {
      id:1,
      title:"Green  Plants",
      url:"https://images.unsplash.com/photo-1583753075968-1236ccb83c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1954&q=80",
    active:true
    },
    
    {
      id:2,
      title:"Narrow Alleyway",
      url:"https://images.unsplash.com/photo-1659598468593-db2a3cef2c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    active:false
    },
    {
      id:3,
      title:"My Hometown",
      url:"https://images.unsplash.com/photo-1542827781-e1a76617521d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80",
    active:false
    },
    {
      id:4,
      title:"My Women ",
      url:"https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    active:false
    },
    {
      id:5,
      title:"Yumm Brunch",
      url:"https://plus.unsplash.com/premium_photo-1692805433054-9d2f187e4af0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    active:false
    },
  ]
  
  return (
    <>
    <Cards data={images}/>
    </>

  )
}

export default App
