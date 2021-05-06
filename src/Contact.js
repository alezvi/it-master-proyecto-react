import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import {Container, TextField, Grid, Button} from '@material-ui/core'
import SearchAppBar from './Appbar'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid: {
      padding: '48px 0'
  }
}));

function Contact () {
    const classes = useStyles();

    return (
        <Container>
            <SearchAppBar />

            <Navbar />

            <h1>Contacto</h1>
            

            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3} className={classes.grid}>
                    <Paper className={classes.paper}>
                        <TextField label="Email" variant="outlined" />
                    </Paper>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Paper className={classes.paper}>
                        <TextField label="Mensaje" variant="outlined" />
                    </Paper>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Paper className={classes.paper}>
                        <Button variant="contained" color="primary">
                            Primary
                        </Button>
                    </Paper>
                </Grid>
            </Grid>

            <form>
            </form>

            
        </Container>
    )
}

export default Contact