import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import MealSummary from './components/meal-summary/MealSummary';
import Meals from './components/meals/Meals';
import Modal from "./components/modal/Modal"
function App() {
  const {open } = useSelector((state) => state.modal)
  return (
    <div className="App">
        <Header/>
        <MealSummary></MealSummary>
      <Meals></Meals>
      {open && <Modal/>}
    </div>
  );
}

export default App;
