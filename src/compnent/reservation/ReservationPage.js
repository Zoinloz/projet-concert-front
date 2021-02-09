import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './reservationPage.css';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import concertApi from "../../services/concertApi";
import Cookies from 'js-cookie';

const ReservationPage = ({ history }) => {

    const [concertInfo, setConcertInfo] = useState(null);

    let chosenSeats = [];
    if (Cookies.get('listChosenSeats')) {
        chosenSeats = JSON.parse(Cookies.get('listChosenSeats'))
    }

    const [obtainingMethodChosen, setObtainingMethod] = useState(null);


    const [listObtainingMethod, setlistObtainingMethod] = useState([])

    const saveObtainingMethod = () => {
        let chosenObtainingMethod = JSON.stringify(obtainingMethodChosen)
        document.cookie = "chosenObtainingMethod=" + chosenObtainingMethod + ";path=/;";
        history.push('/shoppingCart')
    }

    // RADIO BUTTON
    const onChangeObtainingMethod = (e) => {
        setObtainingMethod({ ...obtainingMethodChosen, obtainingMethod: e.target.value });
    }

    useEffect(() => {
        concertApi.listObtainingMethod().then(response => {
            setlistObtainingMethod(response)
        })
        if (Cookies.get('concertId')) {
            let concertId = Cookies.get('concertId')
            concertApi.getConcert(concertId).then((concertInfo) => {
                setConcertInfo(concertInfo)
                let table = document.getElementById("seatArray");
                let activeRow = table.insertRow()
                activeRow.className = 'trSeat'
                concertInfo.seats.map((seat, i, array) => {
                    let next = array[i + 1];
                    if (next) {
                        if (seat.letter === next.letter) {
                            let cell = activeRow.insertCell()
                            cell.className = 'seatTd'
                            cell.id = seat.id
                            cell.innerHTML = "<td>" + seat.letter + " - " + seat.number + "</td>"
                            chosenSeats.forEach(chosenSeat => {
                                if (chosenSeat.id === seat.id) {
                                    cell.className += ' seatPicked';
                                }
                            })
                            return true
                        } else {
                            let cell = activeRow.insertCell()
                            cell.className = 'seatTd'
                            cell.id = seat.id
                            cell.innerHTML = "<td>" + seat.letter + " - " + seat.number + "</td>"
                            if (seat.letter === "C") {
                                activeRow = table.insertRow()
                                activeRow.className = 'trSeat'
                                activeRow = table.insertRow()
                                activeRow.className = 'trSeat'
                            }
                            activeRow = table.insertRow()
                            activeRow.className = 'trSeat'
                            return true;
                        }
                    } else {
                        let cell = activeRow.insertCell()
                        cell.className = 'seatTd'
                        cell.id = seat.id
                        cell.innerHTML = "<td>" + seat.letter + " - " + seat.number + "</td>"
                        return true;
                    }
                })
            })
        }
    }, []);
    return (
        <div>
            <Card className="w-75 mx-auto my-5 shadow-lg rounded">
                <Card.Header as="h3" className="titleCard">Réservation</Card.Header>

                <Card.Body>
                    <Breadcrumb>
                        <Breadcrumb.Item active href="/reservationpage">1. Réservation</Breadcrumb.Item>
                        <Breadcrumb.Item >2. Panier d'achat</Breadcrumb.Item>
                        <Breadcrumb.Item >3. Coordonnées</Breadcrumb.Item>
                        <Breadcrumb.Item>4. Paiement</Breadcrumb.Item>
                        <Breadcrumb.Item>5. Confirmation</Breadcrumb.Item>

                    </Breadcrumb>

                    <div className="container my-5 d-flex justify-content-center">
                        <table id="seatArray">
                        </table>
                    </div>
                    <div id="seatChosen">
                        Place choisies : {chosenSeats.map(chosenSeat => {
                        return (chosenSeat.letter + " - " + chosenSeat.number + " : " + chosenSeat.price + " €, ")
                    })}
                    </div>



                    <h2>2. Choisissez le mode d'obtention des billets : </h2>
                    <Form name="test">
                        <Table bordered >
                            <tbody>
                                {listObtainingMethod.map(obtainingMethod => {
                                    return (
                                        <tr>
                                            <td><input key={obtainingMethod.id} name="obtainingMethod" onChange={onChangeObtainingMethod} value={JSON.stringify(obtainingMethod)} type="radio" /> {obtainingMethod.name} - {obtainingMethod.price} €</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table >
                    </Form>

                    <div className="d-flex justify-content-end">
                        <Button className="m-3" variant="outline-secondary" >Annuler</Button>
                        <Button className="m-3" onClick={saveObtainingMethod} variant="outline-secondary" >Valider</Button>
                    </div>

                </Card.Body>
            </Card>
        </div>

    )
}

// state = {
//     loading: false
//   }

//   addSeatCallback = ({ row, number, id }, addCb) => {
//     this.setState({
//       loading: true
//     }, async () => {
//       await new Promise(resolve => setTimeout(resolve, 1500))
//       console.log(`Added seat ${number}, row ${row}, id ${id}`)
//       const newTooltip = `tooltip for id-${id} added by callback`
//       addCb(row, number, id, newTooltip)
//       this.setState({ loading: false })
//     })
//   }

//   addSeatCallbackContinousCase = ({ row, number, id }, addCb, params, removeCb) => {
//     this.setState({
//       loading: true
//     }, async () => {
//       if (removeCb) {
//         await new Promise(resolve => setTimeout(resolve, 750))
//         console.log(`Removed seat ${params.number}, row ${params.row}, id ${params.id}`)
//         removeCb(params.row, params.number)
//       }
//       await new Promise(resolve => setTimeout(resolve, 750))
//       console.log(`Added seat ${number}, row ${row}, id ${id}`)
//       const newTooltip = `tooltip for id-${id} added by callback`
//       addCb(row, number, id, newTooltip)
//       this.setState({ loading: false })
//     })
//   }

//   removeSeatCallback = ({ row, number, id }, removeCb) => {
//     this.setState({
//       loading: true
//     }, async () => {
//       await new Promise(resolve => setTimeout(resolve, 1500))
//       console.log(`Removed seat ${number}, row ${row}, id ${id}`)
//       // A value of null will reset the tooltip to the original while '' will hide the tooltip
//       const newTooltip = ['A', 'B', 'C'].includes(row) ? null : ''
//       removeCb(row, number, newTooltip)
//       this.setState({ loading: false })
//     })
//   }


// const reservationPage = () => {



//       const rows = [
//         [{id: 1, number: 1, isSelected: true, tooltip: 'Reserved by you'}, {id: 2, number: 2, tooltip: 'Cost: 15$'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Rogger'}, {id: 4, number: '4', orientation: 'west'}, null, {id: 5, number: 5}, {id: 6, number: 6}],
//         [{id: 7, number: 1, isReserved: true, tooltip: 'Reserved by Matthias Nadler'}, {id: 8, number: 2, isReserved: true}, null, {id: 9, number: '3', isReserved: true, orientation: 'east'}, {id: 10, number: '4', orientation: 'west'}, null, {id: 11, number: 5}, {id: 12, number: 6}],
//         [{id: 13, number: 1}, {id: 14, number: 2}, null, {id: 15, number: 3, isReserved: true, orientation: 'east'}, {id: 16, number: '4', orientation: 'west'}, null, {id: 17, number: 5}, {id: 18, number: 6}],
//         [{id: 19, number: 1, tooltip: 'Cost: 25$'}, {id: 20, number: 2}, null, {id: 21, number: 3, orientation: 'east'}, {id: 22, number: '4', orientation: 'west'}, null, {id: 23, number: 5}, {id: 24, number: 6}],
//         [{id: 25, number: 1, isReserved: true}, {id: 26, number: 2, orientation: 'east'}, null, {id: 27, number: '3', isReserved: true}, {id: 28, number: '4', orientation: 'west'}, null,{id: 29, number: 5, tooltip: 'Cost: 11$'}, {id: 30, number: 6, isReserved: true}]
//       ]
//       const {loading} = this.state

//     return (
//         <div>

//             <HeaderPageTitleReservation />
//             Card : nom de l'artiste, affiche, date et heure, lieu, catégorie de musique, carte 

//             <h2>1. Choisissez vos places sur le plan :</h2>
//             <TitleOnePageClassic title="1. Choisissez vos places sur le plan :"/>
//             <h1>Seat Picker Continuous Case</h1>
//         <div style={{ marginTop: '100px' }}>
//           <SeatPicker
//             addSeatCallback={this.addSeatCallbackContinousCase}
//             removeSeatCallback={this.removeSeatCallback}
//             rows={rows}
//             maxReservableSeats={3}
//             alpha
//             visible
//             selectedByDefault
//             loading={loading}
//             tooltipProps={{ multiline: true }}
//             continuous
//           />
//         </div>


//             Tableau présentant la scène<br></br>
//             cadre récapitualitif 

//             <h2>2. Choisissez le mode d'obtention des billets :</h2>
//             cadre option d'achat <br></br>
//             <br></br>

//             bouton annuler / valider


//         </div>
//     );
// }

export default ReservationPage;
