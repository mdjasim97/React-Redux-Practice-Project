import { FaEdit } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdDelete, MdPending } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { editTodo, removeTodo } from "../../Redux/state/todo/todoSlice";
import store from "../../Redux/store/store";

const TodoList = () => {
  const todoItems = useSelector((state) => state.todo.value);
  console.log(todoItems);

  const RemoveTodo = (indx) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        store.dispatch(removeTodo(indx));
      }
    });
  };

  const UpdateTodo = (indx, item) => {
    Swal.fire({
      title: "Update Task Name",
      input: "text",
      inputValue: item,
      inputValidator: (value) => {
        if (value) {
          store.dispatch(editTodo({ index: indx, task: value }));
        }
      },
    });
  };

  return (
    <div className="m-10">
      <div className="card card-compact bg-base-100 shadow-xl border-2">
        <div className="card-body">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Task Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {todoItems?.map((item, indx) => {
                    return (
                      <tr key={indx}>
                        <th>{indx + 1}</th>
                        <td>{item}</td>
                        <td>
                          <button
                            onClick={() => {
                              UpdateTodo(indx);
                            }}
                            className="btn btn-ghost"
                          >
                            <FaEdit className="text-xl" />
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              RemoveTodo(indx);
                            }}
                            className="btn btn-ghost"
                          >
                            <MdDelete className="text-xl" />
                          </button>
                        </td>
                        <td>
                          <IoCheckmarkDoneCircle className="text-green-500 text-2xl" />
                        </td>
                        {/* <td>
                          <MdPending className="text-yellow-500 text-2xl" />
                        </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
