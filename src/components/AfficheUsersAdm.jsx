import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Modal from 'react-modal';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import '../styles/afficheUsersAdm.css';
import moment from 'moment';


const AfficheUsersAdm = () => {

    const [allUser, setAllUser] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [infoUser, setInfoUser] = useState(0)

    const [nameUser, setNameUser] = useState("")
    const [surnameUser, setSurnameUser] = useState("")
    const [activityUser, setActivityUser] = useState("")
    const [personalAd, setPersonalAd] = useState("")
    const [activityAd, setActivityAd] = useState("")
    const [userBirth, setUserBirth] = useState("")
    const [userID, setUserID] = useState("")

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    useEffect(async () => {

        const response = await axios.get("http://localhost:9001/users")
        console.log("response kxzlk:", response);

        const userList = response.data.userList
        const usersActivity = userList[0].activityID

        setAllUser(userList)


        console.log("response usersAdm :", response);
        console.log(" userList :", userList);
        console.log(" usersActivity :", usersActivity);


    }, []);

    const setStateOnclick = (telephone) => {

        setIsOpen(true)

        setInfoUser(telephone)

    }

    useEffect(async () => {

        console.log("infoUser :", infoUser);

        if (infoUser !== 0) {

            const response = await axios.get('http://localhost:9001/telephone/' + infoUser)

            console.log("response x state infoUser :", response);

            setNameUser(response.data.validUser.firstname)
            setSurnameUser(response.data.validUser.surname)
            setUserBirth(response.data.validUser.dateofbirth)
            setPersonalAd(response.data.validUser.address_personal)
            setActivityAd(response.data.validUser.address_activity)
            setUserID(response.data.validUser._id)
            setActivityUser(response.data.userActivity)
        }

    }, [infoUser]);

    console.log("allUser state :", allUser);

    const supprimerUser = async (id) => {
        console.log("elem id supprimer: ", id)

        await axios.delete('http://localhost:9001/deleteuser/' + id)

        window.location.reload();
    }

    const useStylesTable = makeStyles({
        table: {
            minWidth: 400,
        },
    });
    const useStylesList = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },

    }));

    const classes = useStylesTable();
    const classes2 = useStylesList();

    return (

        <div>
            {console.log(" infoUser 2 :", infoUser)}
            {console.log("nameUser :", nameUser)}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Nom</StyledTableCell>
                            <StyledTableCell align="right">Activité</StyledTableCell>
                            <StyledTableCell align="right">Telephone</StyledTableCell>
                            <StyledTableCell align="right">supprimer user</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allUser.map((elem) => (
                            <StyledTableRow key={elem.surname}>
                                <StyledTableCell component="th" onClick={() => setStateOnclick(elem.telephone)}>{elem.surname}</StyledTableCell>
                                <StyledTableCell align="right">{elem.activityID.name}</StyledTableCell>
                                <StyledTableCell align="right">{elem.telephone}</StyledTableCell>
                                <StyledTableCell align="right"><button className="btn btn-danger" onClick={() => supprimerUser(elem._id)}>Supprimer</button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal isOpen={modalIsOpen} style={customStyles}>
                <List component="nav" className={classes2.root} aria-label="mailbox folders">
                    <ListItem button>
                        <ListItemText>Nom: {surnameUser}</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                        <ListItemText >Prenom: {nameUser}</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>Date de naissance: {moment(userBirth).add(10, 'days').calendar()}</ListItemText>
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <ListItemText>Address personal: {personalAd}</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>Activité: {activityUser}</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>Address activité: {activityAd}</ListItemText>
                    </ListItem>
                </List>
                <button className="btn btn-secondary" onClick={() => setIsOpen(false)}>Sortir</button>
            </Modal>
        </div>
    );
}
export default AfficheUsersAdm;