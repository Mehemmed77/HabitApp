import {Typography} from "@mui/material";
import "../scss/weeks.scss"
import Box from "@mui/material/Box";

export default function Weeks() {
    return <>
        <Typography variant={"h5"}>Choose Weekly days</Typography>
        <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Box>
    </>
}