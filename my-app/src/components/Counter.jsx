import { increment, decrement } from "../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  // Funktionshandlare för att minska och öka räknaren
  
  const handleIncrement = (value) => {
    dispatch(increment(value));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };


  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleDecrement}>-</button>
      <button onClick={() => handleIncrement(5)}>+</button>
    </div>
  );
};
