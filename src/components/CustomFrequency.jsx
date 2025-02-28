import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Slider from '@mui/material/Slider';
import {useState} from "react";

export default function CustomFrequency() {
    const [value, setValue] = useState("");
    const [form, setForm] = useState(<> </>);

    const handleChange = (e) => {
        const value = e.target.value;
        setValue(value);

        if(value === 1) {
            setForm(<Slider sx={{width: "200px"}} aria-label="Days" defaultValue={4} valueLabelDisplay="auto" step={1} marks min={2} max={7}/>)
        }
        if(value === 2) setForm(<></>);
        if (value === 3) setForm(<Slider sx={{width: "300px"}} aria-label="Days" defaultValue={10} valueLabelDisplay="auto" step={1} marks min={5} max={40}/>);
    }

    return <>
        <InputLabel id="custom-label">Custom Date</InputLabel>
        <Select labelId="custom-label" value={value} label="Custom Date" onChange={handleChange} sx={{width:"200px"}}>
            <MenuItem value={1}>Every X days</MenuItem>
            <MenuItem value={2}>Indefinitely</MenuItem>
            <MenuItem value={3}>Stop after X occurrence</MenuItem>
        </Select>
        {form}
    </>
}