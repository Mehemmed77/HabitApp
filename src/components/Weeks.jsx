import {Typography} from "@mui/material"; 
import "../scss/weeks.scss"
import Box from "@mui/material/Box";

export default function Weeks( {weeks, setWeeks} ) {
    const handleClick = (e) => {
        const value = e.target.innerHTML;

        if (e.target.className.includes("selected")) {
            e.target.classList.remove("selected");
            setWeeks([...weeks.filter( (e) => e !== value ) ]);
        }
        else {
            e.target.classList.add("selected");
            setWeeks([...weeks, value])
        }
    }

    return <>
        <Typography variant={"h5"}>Choose Weekly days</Typography>
        <Box className={"weeks-container"} sx={{display:"flex", gap:"20px"}}>
            <div onClick={handleClick}>Mon</div>
            <div onClick={handleClick}>Tue</div>
            <div onClick={handleClick}>Wed</div>
            <div onClick={handleClick}>Thu</div>
            <div onClick={handleClick}>Fri</div>
            <div onClick={handleClick}>Sat</div>
            <div onClick={handleClick}>Sun</div>
        </Box>
    </>
}