import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Snackbar as MuiSnackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function Snackbar(props) {
  const { message, type, key } = props;
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  React.useEffect(() => {
    if (!message) return;
    setOpen(true);
  }, [message, type]);

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'fixed',
          bottom: '250px',
          left: '0',
          right: '0',
          zIndex: '6969',
        }}
      >
        <MuiSnackbar
          key={key}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
            {message}
          </Alert>
        </MuiSnackbar>
      </div>
    </Stack>
  );
}
