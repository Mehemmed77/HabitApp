import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export default function CreateHabit(){
    const sx = {
        width: "260px",}

    const form = (
        <>
            <div>
                <TextField label="Habit's name" variant="outlined" placeholder="e.g drink Water" size="small" sx={sx} />
            </div>
            <div>
                <TextField label="Short description" variant="outlined" placeholder="e.g Drink 45 minutes a Day" size="small" sx={sx} />
            </div>
        </>
    )

    return <>
        <h1>Add Habit</h1>
        {form}
    </>
}