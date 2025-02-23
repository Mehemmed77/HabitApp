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
                <Link to="/">
                    <ListItem onClick={() => setOpen(false)}>
                        <p> Home </p> <HomeIcon />
                    </ListItem>
                </Link>

                <Link to="/habits/">
                    <ListItem onClick={() => setOpen(false)}>
                        <p>Habits</p> <ChecklistIcon />
                    </ListItem>
                </Link>

                <Link to="/toDoList">
                    <ListItem onClick={() => setOpen(false)}>
                        <p>To Do List</p> <CheckIcon />
                    </ListItem>
                </Link>

                <Link to="/profile">
                    <ListItem onClick={() => setOpen(false)}>
                        <p>Profile</p> <AccountBoxIcon />
                    </ListItem>
                </Link>

                <Link to="/settings">
                    <ListItem onClick={() => setOpen(false)}>
                        <p>Settings</p> <SettingsIcon />
                    </ListItem>
                </Link>
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