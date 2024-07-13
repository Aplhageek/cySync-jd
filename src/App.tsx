import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    document.title = "cySync by JD"
  }, []);

  return (
    <>
      <p>
        Hii
      </p>
    </>
  )
}

export default App
