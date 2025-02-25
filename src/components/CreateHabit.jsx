import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
import Select from '@mui/material/Select';
import "../scss/createHabit.scss"
import FormControl from '@mui/material/FormControl';

export default function CreateHabit(){
    const sx = {width: "260px", background: "white",}

    const [frequency, setFrequency] = useState("d");

    const handleChange = (e) => {
        setFrequency(e.target.value);

        if (e.target.value === "w") {

        }
    }

    const form = (
        <div className={"form-container"}>
            <FormControl>
                <TextField label="Habit's name" variant="outlined" placeholder="e.g drink Water" size="small" sx={sx} />
            </FormControl>

            <FormControl>
                <Textarea name="Outlined" placeholder="e.g Run 45 minutes a Day" variant="outlined" sx={sx} size="md" />
            </FormControl>

            <FormControl>
                <InputLabel id="select-label">Frequency</InputLabel>
                <Select
                    labelId="select-label"
                    value={frequency}
                    label="Frequency"
                    onChange={handleChange}
                    sx={{width:"200px"}}
                >
                    <MenuItem value={"d"}>Daily</MenuItem>
                    <MenuItem value={"w"}>Weekly</MenuItem>
                    <MenuItem value={"c"}>Custom</MenuItem>
                </Select>
            </FormControl>

            <FormControl>

            </FormControl>
        </div>
    )

    return <>
        <h1>Add Habit</h1>
        {form}
    </>
}