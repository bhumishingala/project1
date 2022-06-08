import logo from './logo.svg';
import './App.css';
import Country from './containers/Country';
import CountryFun from './containers/CountryFun';
import City from './containers/City';
import CityFun from './containers/CityFun';
import Time from './containers/time/Time';
import TimeFun from './containers/time/TimeFun';
import Counter from './containers/time/Counter';
import CounterFun from './containers/time/CounterFun';
import { useEffect, useState } from 'react';
import Loading from './containers/HOC/Loading';
import Home from './containers/HOC/Home';

const HomeWithLoading = Loading(Home);

function App() {
  const [Loading , setLoading] = useState(false);
  const [data , setData] = useState([ ]);

  const orgData = [
    {id : 101 , name : "Amit"},
    {id : 102 , name : "Ajay"}
  ]

  useEffect(() => {
      setLoading(true);
      setTimeout(() => {setLoading(false) ; setData(orgData)} , 2000);
  } , [])

  return (
    <div>
        <HomeWithLoading 
          isLoading = {Loading}
          data = {data}
        />
    </div>
  )
   
}

export default App;