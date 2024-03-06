import { Box, Button, Input, Typography } from "@mui/material";
import { useState } from "react";


const UseStateWithArray = () => {
    const INITIAL_TODO = { todo: "" }
    const [task, setTask] = useState(INITIAL_TODO);
    const [tasks, setTasks] = useState([]);

    const createNewTask = (e) => {
        e.preventDefault();
        setTasks([...tasks, task])
        return setTask(INITIAL_TODO);
    }

    return (
        <>
            <form>
                <Typography variant="h4" component="h3">
                    task: {task.todo}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 5 }}>
                    <Button
                        disabled={!task.todo}
                        onClick={createNewTask}
                        variant="outlined"
                    >Create New Task</Button>
                    <Input
                        onChange={e => setTask({ ...task, todo: e.target.value })}
                        value={task.todo}
                    />

                </Box>
            </form>

            <ul>
                {tasks.map((todo, index) => (
                    <li key={index}>
                        {index + 1}. {todo.todo}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default UseStateWithArray;