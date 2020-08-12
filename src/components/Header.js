import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">
          Kanban board
        </Typography>
      </Toolbar>
    </AppBar>
  )
}