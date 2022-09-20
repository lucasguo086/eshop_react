import {AppBar, Badge, IconButton, List, ListItem, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {AddShoppingCartSharp} from "@mui/icons-material";

const midLinks = [
    {title:'catalog',path:'/catalog'},
    {title:'about',path:'/about'},
]

const rightLinks = [
    {title:'login',path:'/login'},
    {title:'register',path:'/register'},
]
export default function Header(){
    return(
        <AppBar position = 'static' sx={{mb:4}}>
            <Toolbar>
                <Typography variant = 'h6' component={NavLink} to={'/'} sx={{color:'inherit',textDecoration:'none'}}>
                    Eshop
                </Typography>
                <List sx={{display:'flex'}}>
                    {midLinks.map(({title,path})=>(
                        <ListItem
                            component = {NavLink}
                            to={path}
                            key={path}
                            sx={{color:'inherit',typography:'h6','&:hover':{color:'secondary.main'}}}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <IconButton size={'large'} sx={{color:'inherit'}}>
                    <Badge badgeContent={4} color={'secondary'}>
                       <AddShoppingCartSharp />
                    </Badge>
                </IconButton>
                <List sx={{display:'flex'}}>
                    {rightLinks.map(({title,path})=>(
                        <ListItem
                            component = {NavLink}
                            to={path}
                            key={path}
                            sx={{color:'inherit',typography:'h6'}}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
            </Toolbar>
        </AppBar>
    )
}