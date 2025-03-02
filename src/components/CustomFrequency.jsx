import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Slider from '@mui/material/Slider';
import {useState} from "react";

export default function CustomFrequency({setCustom}) {
    const [value, setValue] = useState("");

    const [X1, setX1] = useState(2);
    const [X2, setX2] = useState(2);

    const handleChange = (event) => {
        const new_val = event.target.value;
        setValue(new_val);

        if(new_val === "indefinitely") setCustom({"indefinitely" : ""});

        if(new_val === "X days") setCustom({"X days": X1});

        if(new_val === " X occurrences") setCustom({"X occurrences": X2});
    }

    return <>
        <InputLabel id="custom-label">Custom Date</InputLabel>
        <Select required labelId="custom-label" value={value} label="Custom Date" onChange={handleChange} sx={{width:"200px"}}>
            <MenuItem value={"X days"}>Every X days</MenuItem>
            <MenuItem value={"indefinitely"}>Indefinitely</MenuItem>
            <MenuItem value={"X occurrences"}>Stop after X occurrence</MenuItem>
        </Select>
        {value === "X days" && (
            <Slider sx={{ width: "200px" }} value={X1}
                    onChange={(e, v) => {
                        setX1(v);
                        setCustom({"X days": X1});
                    }}
                    aria-label="Days" valueLabelDisplay="auto" step={1} marks min={2} max={7}/>
        )}

        {value === "X occurrences" && (
            <Slider sx={{ width: "300px" }} value={X2}
                    onChange={(e, v) => {
                        setX2(v);
                        setCustom({"X occurrences": X2});
                    }}
                    aria-label="Days" valueLabelDisplay="auto" step={1} marks min={5} max={40}/>
        )}
    </>
}