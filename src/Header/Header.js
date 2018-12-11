import React, {Component} from "react";
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles, Toolbar, IconButton, Typography, Button, AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider} from "@material-ui/core";
import * as PropTypes from "prop-types";
import {Inbox as InboxIcon, Mail as MailIcon, ChevronRight as ChevronRightIcon, ChevronLeft as ChevronLeftIcon} from '@material-ui/icons';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false
        }
    }

    toggleDrawer = () => {
        this.setState({drawerOpen: !this.state.drawerOpen});
    };

    render() {
        const { classes, theme } = this.props;

        const sideList = (
            <div>
                <div className={classes.toolbar}>
                    <IconButton onClick={this.toggleDrawer}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <div className={classes.list}>
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div>
        );

        return <AppBar position="static">
            <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    GTDone
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
            <Drawer open={this.state.drawerOpen} onClose={this.toggleDrawer}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer}
                    onKeyDown={this.toggleDrawer}
                >
                    {sideList}
                </div>
            </Drawer>
        </AppBar>;
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Header);