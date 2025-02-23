import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

export default function Habit() {
    return <>
        Habits
        <Link to="/create-habit">
            <Button variant="contained">Add Habit</Button>
        </Link>
    </>
}