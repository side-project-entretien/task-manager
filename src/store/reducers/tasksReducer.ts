import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from "../../utils/interfaces";


const initialState: Task[] = [];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        setTasks(state, action: PayloadAction<Task[]>) {
            return action.payload;
        },
        addTask(state, action: PayloadAction<Task>) {
            state.push(action.payload);
        },
        removeTask(state, action: PayloadAction<string>){
            state = state.filter((task:any) => task.id !== action.payload);
        }
    }
});

export const { setTasks, addTask, removeTask } = tasksSlice.actions
export default tasksSlice.reducer;