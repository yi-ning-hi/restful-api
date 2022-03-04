import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import config from './Config';

function App() {

  const [data,setData] = useState({})

  useEffect(() => {

    (async ()=>{
      const r1 = await fetch(config.AB_LIST);
      const obj = await r1.json();
      console.log(obj);
      setData(obj);
    })();
  // fetch(config.AB_LIST).then(r=>r.json()).then(obj=>{
  //   console.log(obj);
  //   setData(obj);
  //   console.log(obj);
  }, []);
  console.log(data);

  const renderMe = (data)=>{
    if(data.rows && data.rows.length){
      return data.rows.map((v,i)=>
    <tr key={v.sid}>
      <td>{v.sid}</td>
      <td>{v.name}</td>
      <td>{v.email}</td>
      <td>{v.mobile}</td>
      <td>{v.birthday}</td>
    </tr>
    )
  }else{
    return (<tr><td></td></tr>);
  };
}

  return (
    <div className="App">
    <div className='container'>
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">mobile</th>
      <th scope="col">birthday</th>
    </tr>
  </thead>
  <tbody>
    { renderMe(data)}
  </tbody>
</table>
    </div>
    </div>
  );
}

export default App;
