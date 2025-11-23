import { createTheme } from '@mui/material/styles';

const MUITheme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small'
      },
    },
  },
  palette: {
    primary: {
      main: "#2C3E50", // Use your CSS variable here
    },
  },

});

export default MUITheme;
