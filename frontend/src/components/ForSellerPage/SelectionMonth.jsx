import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectionMonth() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="id1">Age</InputLabel>
            <Select
            labelId="id1"
            id="idCarisky"
            value={1}
            onChange={handleChange}
            label="Місяць">
                <MenuItem value={1}>Січень</MenuItem>
                <MenuItem value={2}>Лютий</MenuItem>
                <MenuItem value={3}>Березень</MenuItem>
                <MenuItem value={4}>Квітень</MenuItem>
                <MenuItem value={5}>Травень</MenuItem>
                <MenuItem value={6}>Червень</MenuItem>
                <MenuItem value={7}>Липень</MenuItem>
                <MenuItem value={8}>Серпень</MenuItem>
                <MenuItem value={9}>Вересень</MenuItem>
                <MenuItem value={10}>Жовтень</MenuItem>
                <MenuItem value={11}>Листопад</MenuItem>
                <MenuItem value={12}>Грудень</MenuItem>
            </Select>
        </FormControl>
    </>
    )
}