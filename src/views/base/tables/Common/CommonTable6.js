 
import React, { lazy,useState,useEffect } from 'react'
import firebase from 'firebase'
import {db} from '../../../../firebase_config'
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


function CommonTable2({buyer,email,phone,booking_date,booking_time,total_fees,status,id}) {

      function cancelledOrder () {
            db.collection("allOrderList").doc(id).update({
                  "product_order.status":"refundable"
  
            })
      }


      function acceptedOrder(){
            db.collection("allOrderList").doc(id).update({
                  "product_order.status":"accepted"
  
            }) 
      }
      function refundedOrder(){
            db.collection("allOrderList").doc(id).update({
                  "product_order.status":"refunded"
  
            }) 
      }
      return (
            
                  <tr>
                  <td className="text-center">
                      <strong> {buyer}</strong>
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
           <CButton block color="secondary" onClick={cancelledOrder} >
             
         Refundable
           </CButton>
           <CButton block color="primary" onClick={acceptedOrder}>Accepted</CButton>
           <CButton block color="danger" onClick={refundedOrder}>Refunded</CButton>
         </CCol>
                    </td>
  
                   
                  </tr>

            
      )
}

export default CommonTable2
