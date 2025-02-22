import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ListItem from '@mui/material/ListItem';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CheckIcon from '@mui/icons-material/Check';
import {Link} from "react-router-dom";

export default function Layout() {
    const [open, setOpen] = useState(false);

    const DrawerList = (
        <Box sx={{width: "200px"}}>
            <List>
                <ListItem onClick={() => setOpen(false)}>
                    <Link to="/"> <p> Home </p> <HomeIcon /> </Link>
                </ListItem>

                <ListItem onClick={() => setOpen(false)}>
                    <Link to="/habits/"> <p>Habits</p> <ChecklistIcon /> </Link>
                </ListItem>

                <ListItem onClick={() => setOpen(false)}>
                    <Link to="/toDoList"> <p>To Do List</p> <CheckIcon /> </Link>
                </ListItem>

                <ListItem onClick={() => setOpen(false)}>
                    <Link to="/profile"> <p>Profile</p> <AccountBoxIcon /></Link>
                </ListItem>

                <ListItem onClick={() => setOpen(false)}>
                    <Link to="/settings"> <p>Settings</p> <SettingsIcon /> </Link>
                </ListItem>
            </List>
        </Box>
    )

    return <>
        <Button onClick={ () => setOpen(true) }> <MenuIcon sx={{fontSize:"40px"}} /> </Button>
        <Drawer open={open} onClose={ () => setOpen(false) }>
            {DrawerList}
        </Drawer>
    </>
}