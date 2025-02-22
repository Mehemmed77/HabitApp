import Layout from './Layout';
import {Typography} from "@mui/material";
import "../scss/layout.scss";
import Divider from '@mui/material/Divider';
import { Outlet } from "react-router-dom";

export default function Header() {
    return <>
        <div className="container">
            <Layout />
            {/*<Typography variant={"h4"}> Add Habit </Typography>*/}
        </div>
        <Divider />
        <Outlet />
    </>
}