import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import {Container, TextField, Grid, Button} from '@material-ui/core'
import SearchAppBar from './Appbar'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid: {
      padding: '48px 0',
      margin: '1% 20%',
      [theme.breakpoints.down('sm')]: {
        margin: '1% 3%',
      }
  }
}));

function Contact () {
    const classes = useStyles();

    return (
        <Container maxWidth="xl" className={classes.root}>
            <SearchAppBar />

            <Navbar />

            
            <Grid container spacing={1} direction="row" justify="center" alignItems="center">
                <Grid item xs={12} spacing={3} className={classes.grid}>
                    <h1>Contacto</h1>
                </Grid>

                <Grid item xs={12} spacing={3} className={classes.grid}>
                    <TextField fullWidth label="Email" variant="outlined" />
                </Grid>
                <Grid item xs={12} spacing={3} className={classes.grid}>
                    <TextField fullWidth label="Mensaje" variant="outlined" />
                </Grid>
                <Grid item xs={12} spacing={3} className={classes.grid}>
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                </Grid>
            </Grid>            
        </Container>
    )
}

export default Contact