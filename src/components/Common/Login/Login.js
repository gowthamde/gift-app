import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const Login = (props) => {

    const [open, setOpen] = useState(props.value);

    const handleClickClose = () => {
        setOpen(false)
    }

    return(
        <Dialog open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>

        </DialogContent>
            <DialogActions>
          <Button onClick={handleClickClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClickClose} color="primary">
            Login
          </Button>
        </DialogActions>
        </Dialog>
    )
}

export default Login;