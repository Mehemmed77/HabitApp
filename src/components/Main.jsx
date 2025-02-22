import {BrowserRouter, Routes, Route} from "react-router";
import Header from "./Header";
import Habits from "./Habits";
import Home from "./Home";
import Settings from "./Settings";
import ToDo from "./ToDo.jsx";
import Profile from "./Profile.jsx";

export default function Main(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route path="/habits/" element={<Habits />} />
                    <Route path="/" index element={<Home />} />
                    <Route path="/toDoList/" element={<ToDo />} />
                    <Route path="/profile/" element={<Profile />} />
                    <Route path="/settings/" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}