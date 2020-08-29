import React from 'react'
import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  inputAddCard: {
    marginBottom: theme.spacing(1)
  }
}))

const InputAdd = ({ handleClose }) => {
  const classes = useStyles()

  return (
    <TextField
      label='Card title'
      variant='outlined'
      fullWidth
      className={classes.inputAddCard}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => handleClose(false)}>
              <Close />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default InputAdd