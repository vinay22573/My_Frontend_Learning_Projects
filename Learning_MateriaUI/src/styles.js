import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

// Create a theme instance first
const theme = createTheme({
    palette: {
        primary: {
            main: '#4CAF50', // vibrant medium green
            light: '#80E27E',
            dark: '#087f23',
          contrastText: '#ffffff',
        },
        secondary: {
            main: '#8BC34A', // lime green
            light: '#bef67a',
            dark: '#5a9216',
          contrastText: '#000000',
        },
      },
});

const useStyles = makeStyles({
    container: {
        marginTop: '16px',
        backgroundColor: '#f5f5f5',
        padding: '64px 0 48px'
    },
    icon: {
        marginRight: '20px',
    },
    buttons: {
        marginTop: '40px',
    },
    cardGrid: {
        padding: '20px 0',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
      
    },
    cardContent: {
        flexGrow: 1,
    },
    footer:{
        backgroundColor: theme.palette.background.paper,
        padding:'50px 0'
    }
});
export { theme };
export default useStyles;