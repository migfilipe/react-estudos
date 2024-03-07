import { useState } from 'react'
import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'
// Componentes
import FirstComponent from './components/FirstComponet'
// Estilos
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Fundamentos React</h1>
        <FirstComponent/>
      </div>
     
    </>
  )
}

export default App
