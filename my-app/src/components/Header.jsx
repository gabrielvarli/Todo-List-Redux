import { useDispatch, useSelector } from "react-redux";
import { setName } from "../redux/nameSlice";
import { useState } from "react"; // Importera useState

export const Header = () => {
  const dispatch = useDispatch(); // Skapa en dispatch-funktion för att skicka actions
  const name = useSelector((state) => state.name.name); // Hämta det aktuella namnet från Redux-tillståndet

  // Definiera useState för att hantera det aktuella värdet av inputfältet
  const [inputName, setInputName] = useState("");

  // Funktion för att hantera namnsättning
  const handleSetName = () => {
    dispatch(setName(inputName)); // Dispatcha setName action med det aktuella värdet
    setInputName(""); // Töm inputfältet efter att namnet har satts
  };

  return (
    <div>
      <h2>{name} ToDo Lista</h2> {/* Visa det aktuella namnet */}

      <br />
      <input
        type="text"
        placeholder="Enter your name" // Placeholder text för inputfältet
        value={inputName} // Styrt värde kopplat till state
        onChange={(e) => setInputName(e.target.value)} // Uppdatera state när input förändras
      />
      <button onClick={handleSetName}>Set Name</button> {/* Anropa handleSetName när knappen klickas */}
    </div>
  );
};
