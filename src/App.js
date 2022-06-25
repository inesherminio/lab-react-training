import './App.css';
import IdCard from './components/IdCard';
import IdList from './components/IdList';
import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {
  return <div className="App">

{/*Iteration 1*/} 

    <IdList>
      <IdCard firstName = "John" lastName = "Doe" gender = "Male" height = {178} birth={new Date("1992-07-14")}  picture="https://randomuser.me/api/portraits/men/44.jpg" />
      <IdCard firstName = 'Delores' lastName = "Obrien" gender ='Female'  height = {172}  birth={new Date("1988-05-11")} picture="https://randomuser.me/api/portraits/women/44.jpg" />
    </IdList>

{/*Iteration 2*/} 

    <Greetings lang={"de"}>Ludwig</Greetings>
    <Greetings lang={"fr"}>Francois</Greetings>

{/*Iteration 3*/} 
    <Random min={1} max={6}/>
    <Random min={1} max={100}/>
    
  </div>;
}
export default App;
