import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';
import Button from '@material-ui/core/Button';



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

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

function Agent() {
    const classes = useStyles();
    const [allUser, setAllUser] = useState([]);
    const [User, setUser] = useState([]);
    const [userChercher, setUserChercher] = useState("");
    const [changeReturn, setChangeReturn] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [ifPay, setIfpay] = useState(false)

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

    function createData2(surname, firstname, telephone, activite, prix) {
        return { surname, firstname, telephone, activite, prix };
    }

    const rows2 = allUser.map((elem) => {
        return createData2(elem.surname, elem.firstname, elem.telephone, elem.activityID.name, elem.activityID.prix)
    });


    function createData3(surname, firstname, telephone, activite,prix) {
        return { surname, firstname, telephone, activite,prix };
    }
    console.log("User:",User);
    const rows3 = User.map((elem) => {
        return createData3(elem.validUser.surname, elem.validUser.firstname, elem.validUser.telephone, elem.userActivity ,elem.userActivityPrix)
    })

    useEffect(async () => {

        const response = await axios.get("http://localhost:9001/users")

        const userList = response.data.userList
        const usersActivity = userList[0].activityID

        setAllUser(userList)

    }, []);

    const valideRecherche = async () => {

        const response = await axios.get("http://localhost:9001/telephone/" + userChercher)

        setUser([response.data])
        setChangeReturn(true)

    }

    const paye = async (num, prix, firsname, surname) => {

        const validePaye = {
            telephone: num,
            amount: prix

        }

        alert(`tu valide le payement de ${prix} pour ${firsname} ${surname}`)


        const response = await axios.post("http://localhost:9001/payment", validePaye)
        console.log(response);
        alert(`vous avez effectuer un payement de ${prix} pour ${firsname} ${surname}`)
    }

    if (changeReturn === false) {

        return (
            <div>
                <div className="row b-2">
                    <div className="col-12">
                    </div>
                    <div className="col-6 offset-2">
                        <input placeholder="numero de telephone" type="text" onChange={(e) => setUserChercher(e.target.value)} />
                    </div>
                    <div className="col-2 offset-1  ">
                        <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={valideRecherche}> chercher... </Button>
                    </div>
                </div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Firstname</StyledTableCell>
                                <StyledTableCell align="right">Surname</StyledTableCell>
                                <StyledTableCell align="right">telephone</StyledTableCell>
                                <StyledTableCell align="right">Activite</StyledTableCell>
                                <StyledTableCell align="right">validation</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows2.map((row) => (
                                <StyledTableRow key={row.surname}>
                                    <StyledTableCell component="th" scope="row">{row.firstname}</StyledTableCell>
                                    <StyledTableCell align="right">{row.surname}</StyledTableCell>
                                    <StyledTableCell align="right">{row.telephone}</StyledTableCell>
                                    <StyledTableCell align="right">{row.activite}</StyledTableCell>
                                    <StyledTableCell align="right"><button onClick={() => paye(row.telephone, row.prix, row.firstname, row.surname)}>valider</button></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>

        )
    }
    else {
        return (
            <div><h2>je suis dans recherche agent</h2>
                <div className="row b-2">
                    <div className="col-12">
                    </div>
                    <div className="col-6 offset-2">
                        <input placeholder="numero de telephone" type="text" onChange={(e) => setUserChercher(e.target.value)} />
                    </div>
                    <div className="col-2 offset-1  ">
                        <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={valideRecherche}> chercher... </Button>
                    </div>
                </div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Firstname</StyledTableCell>
                                <StyledTableCell align="right">Surname</StyledTableCell>
                                <StyledTableCell align="right">telephone</StyledTableCell>
                                <StyledTableCell align="right">Activite</StyledTableCell>
                                <StyledTableCell align="right">validation</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows3.map((row) => (
                                <StyledTableRow key={row.surname}>
                                    <StyledTableCell component="th" scope="row">{row.firstname}</StyledTableCell>
                                    <StyledTableCell align="right">{row.surname}</StyledTableCell>
                                    <StyledTableCell align="right">{row.telephone}</StyledTableCell>
                                    <StyledTableCell align="right">{row.activite}</StyledTableCell>
                                    <StyledTableCell align="right"><button onClick={() => paye(row.telephone, row.prix, row.firstname, row.surname)}>valider</button></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <button onClick={() => setChangeReturn(false)}>sortir</button></div>
        )
    }


}
export default Agent;