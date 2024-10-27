import { useRef } from "react";
import TodoList from "../TodoList/TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/state/todo/todoSlice";

const Todo = () => {
  const myTodo = useRef();
  const dispatch = useDispatch();
  return (
    <div className=" my-10">
      <div className="card card-compact bg-base-100 shadow-xl border-2">
        <div className="bg-slate-500 rounded-tl-2xl rounded-tr-2xl">
          <h1 className="text-center text-white text-5xl font-bold p-4">
            My Todo App
          </h1>
        </div>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Todo Name</span>
            </label>
            <input
              type="text"
              ref={myTodo}
              placeholder="Enter todo name."
              className="input input-bordered"
              required
            />
          </div>

          <button onClick={()=>dispatch(addTodo(myTodo.current.value))} className="btn bg-slate-500 text-white">Add Todo List</button>
        </div>

        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Todo;
