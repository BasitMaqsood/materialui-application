import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import { Home, Book, AccountBox } from '@material-ui/icons'
import { NavLink } from 'react-router-dom';
import {Spring,config} from "react-spring/renderprops";


function NavBar(props) {

    return (
        <Spring from={{ number: 0 }} to={{ number: 100 }} config={config.slow}>
            {props =>(
            <div style={{ width: props.number + "%" }}>
                <List component="nav">
                    <ListItem component="div" >

                        <NavLink to="/" style={{ color:"white" }}>
                        <ListItemText inset>
                            <TypoGraphy color="inherit" variant="title">
                                Home  <Home />
                            </TypoGraphy>
                        </ListItemText>
                        </NavLink>
                        
                        <NavLink to="/posts"  style={{ color:"white" }}>
                            <ListItemText inset>
                                <TypoGraphy color="inherit" variant="title">
                                    Posts <Book />
                                </TypoGraphy>
                            </ListItemText>
                        </NavLink>

                        <NavLink to="/contact-us" style={{ color:"white" }}>
                            <ListItemText inset>
                                <TypoGraphy color="inherit" variant="title">
                                    Contact <AccountBox />
                                </TypoGraphy>
                            </ListItemText>
                        </NavLink>
                    </ListItem >

                </List>
            </div>
            ) }

        </Spring>
    )
}


export default NavBar;