import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SignatureCanvas from 'react-signature-canvas'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class App extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['New Submission', 'My Submissions', 'Templates'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Account'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container spacing={16}>
            <Grid item xs={6}>
              <TextField
                label="Company"
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Date"
                type="date"
                margin="normal"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={16}>
            <Grid item xs={6}>
              <TextField
                label="Location"
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Shift"
                margin="normal"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                label="Equipment #"
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Type"
                margin="normal"
                fullWidth
              />
            </Grid>
          </Grid>
          <TextField
            label="Explanation of Defects"
            margin="normal"
            fullWidth
            multiline
            rowsMax="4"
          />

          <Grid container>
            <TextField
              label="Operator Name"
              margin="normal"
            />
            <FormLabel>
              Operator Signature
            </FormLabel>
            <SignatureCanvas
              penColor='green'
              canvasProps={{width: 400, height: 80, className: "canvas"}}
            />
          </Grid>

          <Grid container>
            <TextField
              label="Mechanic Name"
              margin="normal"
            />
            <FormLabel>
              Mechanic Signature
            </FormLabel>
            <SignatureCanvas
              penColor='green'
              canvasProps={{width: 400, height: 80, className: "canvas" }}
            />
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Button>
                Submit
              </Button>
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
