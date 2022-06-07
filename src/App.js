import React, { useEffect } from 'react'
import Navigation from './navigation'
import { useActions } from './redux/actions/useActions';
import './assets/styles/globaly.css'
export default function App() {
  const { get_all_categories } = useActions();
  useEffect(()=>{
    get_all_categories()
  },[])
  return <Navigation/>
  
}
