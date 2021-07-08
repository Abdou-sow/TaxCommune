import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

//pour material-ui
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import moment from 'moment';



const AffichePayementAdm = () => {
    const [payements, setPayements] = useState([])
    const [chercheUser, setChercheUser] = useState("")
    const [changeReturn, setChangeReturn] = useState(false)
    const [payementsUsers, setPayementUsers] = useState([])
    const [listNumber, setListNumber] = useState([])

    useEffect(async () => {

        const response = await axios.get("http://localhost:9001/paymentlist/")
        
        setListNumber(response.data.userPaymentList2.map((elem)=> elem.userId.telephone));

        setPayements(response.data.userPaymentList2)
        console.log("response :", response);




    }, [])

    const checheUser = async () => {
        
        // console.log("typeof listNumber[0]", listNumber[0]);
        // console.log("typeof chercheUser", typeof(chercheUser));
        // console.log("typeof element de lisNumber", typeof(chercheUser));
        console.log("si le numero existe :",listNumber.includes(parseInt(chercheUser)));

        if(listNumber.includes(parseInt(chercheUser))){


            const response = await axios.get("http://localhost:9001/payment/" + chercheUser)
            console.log("response de cherccheUser :", response.data.userPaymentList)
            setPayementUsers(response.data.userPaymentList)
            // console.log("response 12165:", response);
            setChangeReturn(true)
        }else{
            alert("le numero n'existe pas!!")
        }
    }
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

    function createData(surname, prix, telephone) {
        return { surname, prix, telephone };
    }
    const rows = payements.map((elem) => {
        return createData(elem.userId.surname, elem.amount, elem.userId.telephone)
    })

    //lafiche payement du user
    function createData2(prix, date) {
        return { prix, date };
    }

    const rowsPayement = payementsUsers.map((elem) => {
        return createData2(elem.amount, moment(elem.paidon).format("LLLL"))
    })
    // console.log("rows:", rows);
    console.log("payementsUsers:", payementsUsers);
    console.log("rowsPayement:", rowsPayement);
    const useStyles = makeStyles({
        table: {
            minWidth: 400,
            maxHeight: 250,
        }
    });
    const classes = useStyles();
    console.log("chercheUser :", chercheUser);
    if (changeReturn === false) {

        return (
            <div>
                <div className="row b-2">
                    <div className="col-6 offset-3">
                    </div>
                    <div className="col-6">
                        <input placeholder="numero de telephone" onChange={(e) => { setChercheUser(e.target.value) }} type="text" />
                    </div>
                    <div className="col-3 offset-2">
                        <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={checheUser}> chercher... </Button>
                        {/* <button onClick={checheUser}>chercher...</button> */}
                    </div>
                </div>
                <TableContainer component={Paper} style={{ height: 400 }}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>name</StyledTableCell>
                                <StyledTableCell align="right">telephone</StyledTableCell>
                                {/* <StyledTableCell align="right">activite</StyledTableCell> */}
                                <StyledTableCell align="right">prix payer</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.surname}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.telephone}</StyledTableCell>
                                    <StyledTableCell align="right">{row.prix}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    } else {
        return (
            <div>
                <div className="row border border-dark b-2">
                    <div className="col-6 offset-3">
                        <h5>filtrer par telephone</h5>
                    </div>
                    <div className="col-6">
                        <input onChange={(e) => { setChercheUser(e.target.value) }} type="text" />
                    </div>
                    <div className="col-3 offset-3">

                        <button onClick={checheUser}>chercher...</button>
                    </div>
                </div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>prix</StyledTableCell>
                                <StyledTableCell align="right">date</StyledTableCell>
                                {/* <StyledTableCell align="right">activite</StyledTableCell> */}
                                {/* <StyledTableCell align="right">prix payer</StyledTableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rowsPayement.map((rowsPayement) => (
                                <StyledTableRow key={rowsPayement.name}>
                                    <StyledTableCell component="th" scope="row"> {rowsPayement.prix}</StyledTableCell>
                                    <StyledTableCell align="right">{rowsPayement.date}</StyledTableCell>
                                    {/* <StyledTableCell align="right">{row.prix}</StyledTableCell> */}
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button variant="contained" color="secondary" onClick={() => setChangeReturn(false)}>
                    retour
                </Button>
                {/* <button onClick={() => setChangeReturn(false)}>clique moi</button> */}
            </div>
        )
    }
}
export default AffichePayementAdm;