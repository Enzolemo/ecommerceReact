import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponenteContenedor from './componentes/componenteContainer/componenteContainer'
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ComponenteContenedor />
     
    </div>
  )
}

export default App
