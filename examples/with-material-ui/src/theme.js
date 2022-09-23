
import { createMuiTheme } from '@mui/material/styles';
import { indigo, orange } from '@mui/material/colors';

// Configure Material UI theme
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    accent: orange,
    type: 'light',
  },
});

export default theme;
