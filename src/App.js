import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [dolar, setUnidad] = useState(0);
  const [euros, setDecena] = useState(0);
  const [bitcoin, setCentena] = useState(0);
  

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setUnidad(total);
    setDecena(total / 1.11);
    setCentena(total / 4609.889277);
    
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertir de divisas</h1>

      <p>Dolar: {dolar}</p>
      <p>Euro: {euros}</p>
      <p>Bitcoin: {bitcoin}</p>
      

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Unidad</option>
        <option value={10}>Decena</option>
        <option value={100}>Centena</option>
        <option value={1000}>Unidad Mil</option>
        <option value={10000}>Decena Mil</option>
        <option value={100000}>Centena Mil</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
