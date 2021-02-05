import React, { useState,Component } from 'react';

import HeaderPageTitleReservation from './../../asset/HeaderPageTitleReservation.js';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './reservationPage.css'; 
import TitleOnePageClassic from './../../asset/TitleOnePageClassic';

import TodayIcon from '@material-ui/icons/Today';
import EventIcon from '@material-ui/icons/Event';
import InfiniteScroll from 'react-infinite-scroller';
import ConcertCardDeck from './../../asset/ConcertCardDeck'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import SeatPicker from 'react-seat-picker'


export default class reservationPage extends Component {

    state = {
      loading: false
    }
   

    addSeatCallbackContinousCase = ({ row, number, id }, addCb, params, removeCb) => {
      this.setState({
        loading: true
      }, async () => {
        if (removeCb) {
          await new Promise(resolve => setTimeout(resolve))
          console.log(`Removed seat ${params.number}, row ${params.row}, id ${params.id}`)
          removeCb(params.row, params.number)
        }
        await new Promise(resolve => setTimeout(resolve))
        console.log(`Added seat ${number}, row ${row}, id ${id}`)
        const newTooltip = `Vous avez sélectionné le siege ${number} ${row}, il est dans votre panier`
        addCb(row, number, id, newTooltip)
        this.setState({ loading: false })
      })
    }
   
    removeSeatCallback = ({ row, number, id }, removeCb) => {
      this.setState({
        loading: true
      }, async () => {
        await new Promise(resolve => setTimeout(resolve))
        console.log(`Removed seat ${number}, row ${row}, id ${id}`)
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ['A', 'B', 'C'].includes(row) ? null : ''
        removeCb(row, number, newTooltip)
        this.setState({ loading: false })
      })
    }
   
    render() {
      const rows = [
        [{id: 1, number: 1}, {id: 2, number: 2, tooltip: 'Cost: 15$'}, {id: 3, number: '3', isReserved: true}, {id: 4, number: '4',  isReserved: true}, {id: 5, number: 5}, {id: 6, number: 6}, {id: 7, number: 7}, {id: 8, number: 8}, {id: 9, number: 9}, {id: 10, number: 10}, {id: 11, number: 11}, {id: 12, number: 12}],
        [{id: 13, number: 1}, {id: 14, number: 2, tooltip: 'Libre'}, {id: 15, number: '3'}, {id: 16, number: '4'}, {id: 17, number: 5}, {id: 18, number: 6}, {id: 19, number: 7}, {id: 20, number: 8}, {id: 21, number: 9}, {id: 22, number: 10}, {id: 23, number: 11}, {id: 24, number: 12}],
        [{id: 25, number: 1}, {id: 26, number: 2, tooltip: 'Libre'}, {id: 27, number: '3'}, {id: 28, number: '4'}, {id: 29, number: 5}, {id: 30, number: 6}, {id: 31, number: 7}, {id: 32, number: 8}, {id: 33, number: 9}, {id: 34, number: 10}, {id: 35, number: 11}, {id: 36, number: 12}],
        [{id: 37, number: 1}, {id: 38, number: 2, tooltip: 'Libre'}, {id: 39, number: '3'}, {id: 40, number: '4',  isReserved: true}, {id: 41, number: 5}, {id: 42, number: 6}, {id: 43, number: 7}, {id: 44, number: 8}, {id: 45, number: 9}, {id: 46, number: 10}, {id: 47, number: 11}, {id: 48, number: 12}],
        [{id: 49, number: 1}, {id: 50, number: 2}, {id: 51, number: '3'}, {id: 52, number: '4',  }, {id: 53, number: 5}, {id: 54, number: 6}, {id: 55, number: 7}, {id: 56, number: 8}, {id: 57, number: 9}, {id: 58, number: 10}, {id: 59, number: 11}, {id: 60, number: 12}],
        [{id: 61, number: 1}, {id: 62, number: 2}, {id: 63, number: '3'}, {id: 64, number: '4',  }, {id: 65, number: 5}, {id: 66, number: 6}, {id: 67, number: 7}, {id: 68, number: 8}, {id: 69, number: 9}, {id: 70, number: 10}, {id: 71, number: 11}, {id: 72, number: 12}],
        [{id: 73, number: 1}, {id: 74, number: 2}, {id: 75, number: '3'}, {id: 76, number: '4',  }, {id: 77, number: 5}, {id: 78, number: 6}, {id: 79, number: 7}, {id: 80, number: 8}, {id: 81, number: 9}, {id: 82, number: 10}, {id: 83, number: 11}, {id: 84, number: 12}],
        [{id: 85, number: 1}, {id: 86, number: 2}, {id: 87, number: '3'}, {id: 88, number: '4',  }, {id: 89, number: 5}, {id: 90, number: 6}, {id: 91, number: 7}, {id: 91, number: 8}, {id: 92, number: 9}, {id: 93, number: 10}, {id: 94, number: 11}, {id: 95, number: 12}],
        [{id: 96, number: 1}, {id: 97, number: 2}, {id: 98, number: '3'}, {id: 99, number: '4',  }, {id: 100, number: 5}, {id: 101, number: 6}, {id: 102, number: 7}, {id: 103, number: 8}, {id: 104, number: 9}, {id: 105, number: 10}, {id: 106, number: 11}, {id: 107, number: 12}]
      ]
      const {loading} = this.state

      return (
        <div>
            <Card className="w-75 mx-auto my-5 shadow-lg rounded">
                <Card.Header as="h3" className="titleCard">Réservation</Card.Header>
            
                <Card.Body> 
                <Breadcrumb>
                    <Breadcrumb.Item href="/reservationStepOne">1. Réservation</Breadcrumb.Item>
                    <Breadcrumb.Item active >2. Panier d'achat</Breadcrumb.Item>
                    <Breadcrumb.Item active href="#" >3. Coordonnées</Breadcrumb.Item>
                    <Breadcrumb.Item active href="#">4. Paiement</Breadcrumb.Item>
                    <Breadcrumb.Item active href="#">5. Confirmation</Breadcrumb.Item>

                </Breadcrumb>

                    <h2>1. Choissisez vos places sur le plan</h2>
                        <div className="container my-5 d-flex justify-content-center">
                            <SeatPicker
                                addSeatCallback={this.addSeatCallbackContinousCase}
                                removeSeatCallback={this.removeSeatCallback}
                                rows={rows}
                                maxReservableSeats={10}
                                alpha
                                visible
                                selectedByDefault
                                loading={loading}
                                tooltipProps={{ multiline: true }}
                                continuous
                            />
                        </div> 
                        <p>Nombre de places choisies</p>
                        <p>1. Place 9, Rang A 89,00 €
                             2. Place 10, Rang A 89,00 €
                                    Total 178,00 €</p>
                        <p>Vous avez choisi 2 places pour un montant total de 178 €.</p> 

                        <h2>2. Choisissez le mode d'obtention des billets : </h2>
                        <Form name="test">
                            <Table bordered >
                            <tbody>
                                <tr>
                                    <th>E-Ticket gratuit</th>
                                    <th>Imprimez vos billets chez vous dès la fin de votre commande et recevez-les également par e-mail en format pdf.</th>
                                </tr>
                                <tr>
                                    <th>Retrait au guichet 1,80 €</th>
                                    <th>Retirez vos billets auprès de nos guichets (comprend des frais de transaction).</th>
                                </tr>
                                <tr>
                                    <th>Envoi postal 8,00 €</th>
                                    <th>Recevez vos billets à votre domicile ou sur votre lieu de travail. Envoi suivi avec remise contre signature. Livraison sous 24 à 48h.</th>
                                </tr>
                            </tbody>
                        </Table >      
                        </Form>

                        <div className="d-flex justify-content-end">
                            <Button className="m-3" variant="outline-secondary" >Annuler</Button>
                            <Button className="m-3" variant="outline-secondary" >Valider</Button>  
                        </div>
                                         
                </Card.Body>
            </Card>
        </div>

      )
    }
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

// export default reservationPage;
