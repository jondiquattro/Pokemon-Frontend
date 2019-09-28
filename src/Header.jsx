import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const headerStyle = {
  width: '98vw'

};


function Header() {

  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

  function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setState({ ...state, [side]: open });
    };

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <List>
          {['Inbox', 'Starred'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{ <InboxIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
    return (
      <div>
        <Button onClick={toggleDrawer('left', true)}>Menu</Button>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {sideList('left')}
        </Drawer>
      </div>
    );
  }



  return (
    <div className={'header'} style={headerStyle} >
      <TemporaryDrawer/>
    </div>
      );

}

export default Header;