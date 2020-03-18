import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function LeftSideBar(props) {

  const classes = useStyles();
  // const [age, setAge] = React.useState('');



  return(<div className={"leftSide"}>there needs to be a drop down here to select what pokemon you need.
    <FormControl className={classes.formControl}>
      <InputLabel >Pokemon</InputLabel>
      <Select
        id="demo-simple-select"
        value={props.poke.body ? props.poke.body.name:""}
        onChange={props.handleChange}
      >
        {
          props.pokeIndex[0] ?
            props.pokeIndex[0].results.map((poke, idx) =>
              <MenuItem value={poke.name} key={idx}>{poke.name}</MenuItem>
            )
            : ""
        }

      </Select>
    </FormControl>
  </div>)
}

export default LeftSideBar;