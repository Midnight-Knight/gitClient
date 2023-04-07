import React, {useEffect, useState} from "react";



function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/get').then(response => response.json()).then(response => setData([response.message1, response.message2]))
  }, [])


  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch('/api/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({ message3: `hello frontend and number ${value}` })
    });
  }, [value]);

  return (
    <div className="App">
      <h1>{!data ? "Loading..." : data[0]}</h1>
      <h2>{!data ? "Loading..." : data[1]}</h2>
      <button onClick={() => setValue(value + 1)}>{value}</button>
      <input type="text" id="login"/>
      <input type="password" id="password"/>
      <input type="number" id="number"/>
      <button></button>

    </div>
  );
}

export default App;
