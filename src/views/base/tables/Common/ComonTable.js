
import React, { lazy, useState, useEffect } from 'react'
import firebase from 'firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Modal } from 'react-bootstrap';
import { db } from '../../../../firebase_config'
import "../../../../App.css"
import "./style.css"
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
} from '@coreui/react'

toast.configure()

function ComonTable({ buyer, email, phone, booking_date, booking_time, total_fees, status, id, product_order_details }) {

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);



  const handleClose = () => {
    setShow(false);
  }


  const handleClose1 = () => {
    setShow1(false);

  }



  const handleClose2 = () => {
    setShow2(false);
  }

  const handleShow = () => {
    setShow(true);
  }

  const handleShow1 = () => {
    setShow1(true);
  }
  const handleShow2 = () => {
    setShow2(true);
  }

  function cancelledOrder() {

    db.collection("allOrderList").doc(id).update({
      "product_order.status": "cancelled"

    })
    setShow1(false);

    toast.error("the order successfully cancel!", {

      autoClose: 4000
    });


  }


  function acceptedOrder() {

    db.collection("allOrderList").doc(id).update({
      "product_order.status": "accepted"

    })
    setShow2(false);



    toast.success("The order successfully accept !", {

      autoClose: 4000
    });


  }














  return (

    <>





      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {
            product_order_details.map(product => (
              <div >

                <hr />
                <p col-md-4> <strong>Name: </strong> <span style={{ marginLeft: "10px" }}>{product.product_name}</span></p>
                <p col-md-4> <strong>Time: </strong> <span style={{ marginLeft: "10px" }}>{product.avg_time} minute</span></p>
                <p col-md-4> <strong>Amount: </strong> <span style={{ marginLeft: "10px" }}>{product.amount} $</span></p>

                <hr />
              </div>

            ))
          }




        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>



      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure ! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Do you want to cancel the order?</strong>

        </Modal.Body>


        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose1}>
            No
          </Button>

          <Button variant="primary" onClick={cancelledOrder}>
            Yes
          </Button>
        </Modal.Footer>

      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure ! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Do you want to accept the order?</strong>

        </Modal.Body>


        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose2}>
            No
          </Button>
          <Button variant="primary" onClick={acceptedOrder}>
            Yes
          </Button>
        </Modal.Footer>

      </Modal>



      <tr>
        <td className="text-center">
          <strong> {buyer} </strong>
        </td>
        <td className="text-center">
          <strong>{email}</strong>
        </td>



        <td className="text-center">
          <strong>{phone}</strong>
        </td>
        <td>
          <strong>{booking_date}</strong>
        </td>

        <td>
          <strong>{booking_time}</strong>
        </td>

        <td>
          <strong>{total_fees} $</strong>
        </td>
        <td>
          <strong>{status}</strong>
        </td>


        <td>
          <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
            <a className="btn btn-danger" style={{ margin: "5px", color: "white" }} onClick={handleShow1} >

              Cancel
           </a>
            <a className="btn btn-primary" style={{ margin: "5px", color: "white" }} onClick={handleShow2}>Accept</a>
          </CCol>
        </td>

        <td>
          <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">

            <a className="btn btn-warning" onClick={handleShow}>
              Details
      </a>

          </CCol>
        </td>


      </tr>





    </>


  )
}

export default ComonTable
