import './App.css';
import TodoContextApi from './TodoContextApi';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <TodoContextApi>
  
      <Home/>
     </TodoContextApi>
    </div>
  );
}

export default App;
