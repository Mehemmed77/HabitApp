import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import {useState} from "react";

export default function CustomFrequency() {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setValue(value);

        if(value === 1) {

        }
    }

    return <>
        <InputLabel id="custom-label">Custom Date</InputLabel>
        <Select labelId="custom-label" value={value} label="Custom Date" onChange={handleChange} sx={{width:"200px"}}>
            <MenuItem value={1}>Every X days</MenuItem>
            <MenuItem value={2}>Indefinitely</MenuItem>
            <MenuItem value={3}>Stop after X occurrence</MenuItem>
        </Select>
    </>
}