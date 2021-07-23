import React from 'react'
import {Card, CardGroup} from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SendIcon from '@material-ui/icons/Send';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2.5),
    borderRadius: "20px",
    marginLeft: "5vw",
    marginRight: "4vw",
    marginTop: "4vh",
    width: "10rem",
  },
}));

const useStyless = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        marginTop: "10px",
        marginLeft: "20px",
        borderRadius: "20px",
        fontSize: "0px",
    }
}));

export default function Cardcomponent() {

    let width = window.innerWidth;
    const classes = useStyles();
    const classess = useStyless();

    function mobileview() {
        return (
            <>
            <CardGroup>
            <Card bg="primary" text="white" style={{ height: '15rem' }}>
                {/* <Card.Header>Header</Card.Header> */}
                <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>SERVICES</Card.Title>
                {/* <Card.Text>
                </Card.Text> */}
                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    className={classess.button}
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classess.button}
                    endIcon={<SendIcon/>}
                >
                    Send
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    color="default"
                    className={classess.button}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload
                </Button>
                <Button
                    variant="contained"
                     size="large"
                    color="secondary"
                    className={classess.button}
                    startIcon={<KeyboardVoiceIcon />}
                >
                    Talk
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classess.button}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classess.button}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
                </Card.Body>
            </Card>
            <Card bg="secondary" text="white" style={{ height: '15rem' }}>
                {/* <Card.Header>Header</Card.Header> */}
                <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>OFFER CATEGORIES</Card.Title>
                {/* <Card.Text>
                </Card.Text> */}
                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    className={classess.button}
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classess.button}
                    endIcon={<SendIcon/>}
                >
                    Send
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    color="default"
                    className={classess.button}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload
                </Button>
                <Button
                    variant="contained"
                     size="large"
                    color="secondary"
                    className={classess.button}
                    startIcon={<KeyboardVoiceIcon />}
                >
                    Talk
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classess.button}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classess.button}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
                </Card.Body>
            </Card>
            </CardGroup>
            </>
        )
    }

    function desktopview() {
        return (
            <>
            <CardGroup className="mx-5">
            <Card text="white" style={{ height: '20rem' }}>
                {/* <Card.Header style={{textAlign: 'center'}}>SERVICES</Card.Header> */}
                <Card.Body style={{backgroundColor: "#3bb78f"}}>
                <Card.Title style={{textAlign: 'center'}}>SERVICES</Card.Title>
                {/* <Card.Text>
                </Card.Text> */}
                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    endIcon={<SendIcon/>}
                >
                    Send
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload
                </Button>
                <Button
                    variant="contained"
                     size="large"
                    color="secondary"
                    className={classes.button}
                    startIcon={<KeyboardVoiceIcon />}
                >
                    Talk
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
                </Card.Body>
            </Card>

            <Card text="white" style={{ height: '20rem' }}>
                {/* <Card.Header style={{textAlign: 'center'}}>OFFER CATEGORIES</Card.Header> */}
                <Card.Body style={{backgroundColor: "#3bb78f"}}>
                <Card.Title style={{textAlign: 'center'}}>OFFER CATEGORIES</Card.Title>
                {/* <Card.Text>
                </Card.Text> */}
                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    endIcon={<SendIcon/>}
                >
                    Send
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload
                </Button>
                <Button
                    variant="contained"
                     size="large"
                    color="secondary"
                    className={classes.button}
                    startIcon={<KeyboardVoiceIcon />}
                >
                    Talk
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
                </Card.Body>
            </Card>
            </CardGroup>
            </>
        )
    }

    return (
        width>800 ? desktopview() : mobileview()
    )
    
}