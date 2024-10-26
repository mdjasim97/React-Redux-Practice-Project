import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  setCustom,
} from "../../Redux/state/counter/counterSlice";
import { useRef } from "react";

const Counter = () => {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const customNumber = useRef();

  return (
    <div className="h-[550px] flex flex-col items-center my-20">
      <div className="card bg-base-200">
        <div className=" bg-slate-500 rounded-tl-xl rounded-tr-xl">
          <h1 className="text-5xl text-white font-bold p-5">My Counter App</h1>
        </div>
        <div className="card-body space-y-5">
          <h2 className="card-title text-5xl">{count}</h2>
          <div className="card-actions justify-self-center">
            <button
              onClick={() => dispatch(increment())}
              className="btn bg-green-600 text-white"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="btn bg-red-600 text-white"
            >
              Decrement
            </button>
          </div>

          
            <input
              type="number"
              ref={customNumber}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />

            <button
              onClick={() => dispatch(setCustom(customNumber.current.value))}
              className="btn bg-slate-500 btn-ghost text-white"
            >
              Set Custom
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default Counter;
