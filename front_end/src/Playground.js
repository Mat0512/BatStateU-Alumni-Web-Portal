import { useReducer } from "react";

const INITIAL_STATE = [
    {
        id: 1,
        task: "read",
        complete: false,
    },
    {
        id: 2,
        task: "work out",
        complete: false,
    },
];

const taskReducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (action.id === todo.id) {
                    return {
                        ...todo,
                        complete: !todo.complete,
                    };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

const Playgorund = () => {
    const [todos, dispatch] = useReducer(taskReducer, INITIAL_STATE);
    console.log("state: ", todos);
    const handleChange = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-white-100">
            <h1 className="text-xl font-bold">
                This page is for testing purposes
            </h1>
            <p className="text-lg">todos</p>
            {todos.map((todo) => {
                return (
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => handleChange(todo)}
                        />
                        {todo.task}
                    </label>
                );
            })}
        </div>
    );
};

export { Playgorund };
