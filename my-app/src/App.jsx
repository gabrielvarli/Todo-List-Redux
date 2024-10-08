import './App.css'
import{Header} from './components/Header'
import { ToDoList } from './components/ToDoList';
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "./redux/darkMode";

export default function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
      <div className={`App ${darkMode ? 'dark' : 'light'}`}> 
              <button
            onClick={() => {
                dispatch(setDarkMode(!darkMode));
            }}
        >
            Toggle Dark Mode
        </button>
      {/* <Counter /> */}
      <Header />
      <ToDoList />
    </div>
  );
}