import React, { lazy,useState,useEffect } from 'react'
import firebase from 'firebase'
import {db} from '../../../firebase_config'
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
import { DocsLink } from 'src/reusable'

 
import CommonTable3 from './Common/CommonTable3'

 

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['name','registered', 'role', 'status']

const Tables3 = () => {


  const [newOrder,setNewOrder] = useState([])
 

  useEffect(() => {
   
    getNewOrder()
  }, [])




  function getNewOrder (){

   

    db.collection("allOrderList").where('product_order.status', '==', "completed").orderBy("product_order.booking_date", "desc").onSnapshot(function(querySnapshot){
      setNewOrder(
        querySnapshot.docs.map((doc) =>({
          id:doc.id,
          status:doc.data().product_order.status,
          booking_date:doc.data().product_order.booking_date,
          booking_time:doc.data().product_order.booking_time,
          buyer:doc.data().product_order.buyer,
          email:doc.data().product_order.email,
          phone:doc.data().product_order.phone,
          total_fees:doc.data().product_order.total_fees,
       
      
      
        }))
      )
    })
  
    
 

  }




  return (
    <>
    <CRow>
      <CCol>
       
      
      
      
      
      
        <CCard>
        
        <CCardBody>
          
        
        <div class="row">

          <div className="col-md-12  "  >
            <h4>Completed Orders</h4>
          

            <table className="table table-hover table-outline mb-0    d-none d-sm-table   ">
            <thead className="thead-light">
              
              <tr>
                 
                
                <th>Buyer</th>
                <th className="text-center">Email</th>
                <th>Phone</th>
                <th className="text-center">Booking Date</th>
                <th className="text-center">Booking 
                Time</th>
                <th className="text-center">Total-Fee</th>
                <th className="text-center">Status</th>
                
              </tr>


            </thead>
            <tbody>

            {
      newOrder.map((item) =>(
        <CommonTable3 key={item.id}
          buyer={item.buyer}
          email={item.email}
          phone={item.phone}
          booking_date={item.booking_date}
          booking_time={item.booking_time}
          total_fees={item.total_fees}
          status={item.status}
          id={item.id}
        />
      ))
    }
             
             
      
               
      
            </tbody>
          </table>

       
          </div>
         

        
       </div>
       
        </CCardBody>


        
      </CCard>
      
      
      
      
      
      </CCol>
    </CRow>
  </>
  )
}

export default Tables3
