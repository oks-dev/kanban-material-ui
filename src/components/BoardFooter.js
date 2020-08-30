import React, { useState } from 'react';
import {
  Button,
  CardActionArea,
  CardContent,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdd } from './InputAdd'

const useStyles = makeStyles((theme) => ({
  boardButton: {
    padding: theme.spacing(2),
    justifyContent: 'center'
  }
}))

export const BoardFooter = () => {
  const classes = useStyles();
  const [showInput, setShowInput] = useState(false)

  const handleAddCard = () => {
    setShowInput(true)
  }
  const handleCloseInput = () => {
    setShowInput(false)
  }

  if (!showInput) {
    return (
      <CardActionArea>
        <CardContent onClick={handleAddCard}>
          <Typography component='span' variant='h6'>
            Add another card
        </Typography>
        </CardContent>
      </CardActionArea>
    )
  } else {
    return (
      <form className={classes.boardButton}>
        <InputAdd handleClose={handleCloseInput} />
        <Button color="primary">Add</Button>
      </form>
    )
  }
}