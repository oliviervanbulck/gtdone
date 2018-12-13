import React, {Component} from "react";
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles, Toolbar, IconButton, Typography, Button, AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider} from "@material-ui/core";
import * as PropTypes from "prop-types";
import {Dashboard as DashboardIcon, Folder as FolderIcon, Storage as StorageIcon, Delete as DeleteIcon, ChevronRight as ChevronRightIcon, ChevronLeft as ChevronLeftIcon, Add as AddIcon, HelpOutline as HelpOutlineIcon, Inbox as InboxIcon, List as ListIcon, WatchLater as WatchLaterIcon} from '@material-ui/icons';
import Fab from "@material-ui/core/Fab/Fab";

const styles = theme => ({
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
    fab: {
        margin: theme.spacing.unit,
        position: 'absolute',
        right: 20,
        bottom: 20,
    },
    menuBackButton: {
        marginLeft: 12,
        marginTop: 8,
        marginBottom: 8,
    },
});

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
                    <IconButton onClick={this.toggleDrawer} className={classes.menuBackButton}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <div className={classes.list}>
                    <List>
                        <ListItem button>
                            <ListItemIcon><DashboardIcon/></ListItemIcon>
                            <ListItemText primary={"Dashboard"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><InboxIcon/></ListItemIcon>
                            <ListItemText primary={"Inbox"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><ListIcon/></ListItemIcon>
                            <ListItemText primary={"Next Actions"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><FolderIcon/></ListItemIcon>
                            <ListItemText primary={"Projects"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><WatchLaterIcon/></ListItemIcon>
                            <ListItemText primary={"Waiting For"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><HelpOutlineIcon/></ListItemIcon>
                            <ListItemText primary={"Someday / Maybe"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><StorageIcon/></ListItemIcon>
                            <ListItemText primary={"Archive"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><DeleteIcon/></ListItemIcon>
                            <ListItemText primary={"Trash"} />
                        </ListItem>
                    </List>
                </div>
            </div>
        );

        return <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        GTDone
                    </Typography>
                    {/*<Button color="inherit">Login</Button>*/}
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
            </AppBar>
            <Fab color="primary" aria-label="Add" className={classes.fab}>
                <AddIcon />
            </Fab>
        </div>;
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Header);