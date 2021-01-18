import React, { lazy,useState,useEffect } from 'react'
import firebase from 'firebase'
import {db} from '../../firebase_config'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {

  const [todos,setTodos] = useState([])
  const [barbers,setBarbers] = useState([])
  const [completeOrder,setCompleteOrder] = useState([])
  const [acceptedOrder,setAcceptedOrder] = useState([])
  const [cancelOrder,setCancelOrder] = useState([])
  const [newOrder,setNewOrder] = useState([])
  const [todoInput,setTodoInput] = useState(" ")
  const [pushOrder,setPushOrder] = useState([])
  const [acceptedOrdernew,setAcceptedOrdernew] = useState([])

  useEffect(() => {
    getTodo()
    getBarber()
    getAcceptedOrder()
    getAcceptedOrdernew()
    getCancelledOrder()
    getCompletedOrder()
    getNewOrder()
  
  }, [])






  function getBarber (){
   

    db.collection("barbers").orderBy("user_name").limit(12).onSnapshot(function(querySnapshot){
      setBarbers(
        querySnapshot.docs.map((doc) =>({
          id:doc.id,
          name:doc.data().user_name,
          email:doc.data().email,
          mobile:doc.data().phone_number,
          
      
        }))
      )
    })
    console.log(barbers)

  }


  function getCompletedOrder(){

   

    db.collection("allOrderList").where('product_order.status', '==', "completed").orderBy("product_order.booking_date", "desc").limit(10).onSnapshot(function(querySnapshot){
      setCompleteOrder(
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


  function getAcceptedOrder (){

   

    db.collection("allOrderList").where('product_order.status', '==', "accepted").orderBy("product_order.booking_date", "desc").limit(10).onSnapshot(function(querySnapshot){
      setAcceptedOrder(
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
  
    
    console.log("complete", completeOrder)

  }


  function getAcceptedOrdernew (){

   

    db.collection("allOrderList").orderBy("product_order.booking_date", "desc").onSnapshot(function(querySnapshot){

       
      setAcceptedOrdernew(
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
  
    
    console.log("acceptedOrdernew", acceptedOrdernew)

  }

  function getCancelledOrder (){

   

    db.collection("allOrderList").where('product_order.status', '==', "cancelled").orderBy("product_order.booking_date", "desc").limit(10).onSnapshot(function(querySnapshot){
      setCancelOrder(
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
  
    
    console.log("complete", completeOrder)

  }

  function getNewOrder (){

   

    db.collection("allOrderList").where('product_order.status', '==', "waiting").orderBy("product_order.booking_date", "desc").limit(10).onSnapshot(function(querySnapshot){
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





  function getTodo (){
    

    
    db.collection("users").orderBy("name").limit(10).onSnapshot(function(querySnapshot){
      setTodos(
        querySnapshot.docs.map((doc) =>({
          id:doc.id,
          name:doc.data().name,
          email:doc.data().email,
          mobile:doc.data().mobile,
          image:doc.data().image,
          address:doc.data().address,
      
        }))
      )
    })
  }

 
  console.log("acceptedOrdernew", acceptedOrdernew)





  return (
    <>
      <WidgetsDropdown />
      <CCard>
     
        
      </CCard>

     

      <CRow>
        <CCol>
          <CCard>
          
            <CCardBody>
              
            
            <div class="row">

              <div className="col-md-8  "  >
                <h4>New Users</h4>
              

              <table className="table table-hover table-outline mb-0    d-none d-sm-table   ">
                <thead className="thead-light">
                  
                  <tr>
                     
                    
                    <th>User</th>
                    <th className="text-center">Name</th>
                    <th>Phone</th>
                    <th className="text-center">Address</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                {
      todos.map((user) =>(
            <tr key={user.id}>
            <td className="text-center">
              <div className="c-avatar">
                <img src={user.image} className="c-avatar-img" alt=" i" />
                <span className="c-avatar-status bg-success"></span>
              </div>
            </td>
          
            <td className="text-center">
              <strong>{user.name}</strong>
            </td>
           
            <td className="text-center">
              <strong>{user.mobile}</strong>
            </td>
            <td>
               
              <div className="small text-muted">
                <span>{user.address}</span> 
              </div>
            </td>

            <td className="text-center">
              <strong>{user.email}</strong>
            </td>
          </tr>


      ))
    }
                  
                  
                  
               
                </tbody>
              </table>

           
              </div>
             

              <div className="col-md-4  "  >
            
              <h4>New Barbers</h4>
              <table className="table table-hover table-outline mb-0 mr-2 d-none d-sm-table  ">
                <thead className="thead-light">
                  
                  
                  <tr>
                     
               
                    <th className="text-center">UserName</th>
                    <th className="text-center">Phone</th>
                    

                  </tr>

                </thead>
                <tbody>

                {
                  
                    barbers.map( bab =>(

                      <tr key={bab.id}>
                   
                  <td className="text-center">
                      <strong>{bab.name}</strong>
                    </td>
                    <td className="text-center">
                      <strong>{bab.mobile}</strong>
                    </td>
                   
                    
                  </tr>

                    ))
                  }
                  

                
               
                  
                  
                  
                  
               
                </tbody>
              </table>
               </div>
           </div>
           
            </CCardBody>


            
          </CCard>



          <CCard>
          
          <CCardBody>
            
          
          <div class="row">

            <div className="col-md-12  "  >
              <h4>New Orders  </h4>
            

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
                {newOrder.map( corder =>(
                     <tr>
                     <td className="text-center">
                         <strong>{corder.buyer}</strong>
                       </td>
                       <td className="text-center">
                         <strong>{corder.email}</strong>
                       </td>
                     
                     
                      
                       <td className="text-center">
                         <strong>{corder.phone}</strong>
                       </td>
                       <td>
                       <strong>{corder.booking_date}</strong>
                       </td>
     
                       <td>
                       <strong>{corder.booking_time}</strong>
                       </td>
     
                       <td>
                       <strong>{corder.total_fees} $</strong>
                       </td>
                       <td>
                       <strong>{corder.status}</strong>
                       </td>
     
                      
                     </tr>

                ))}
               
        
                 
        
              </tbody>
            </table>

         
            </div>
           

          
         </div>
         
          </CCardBody>


          
        </CCard>
       


        <CCard>
          
          <CCardBody>
            
          
          <div class="row">

            <div className="col-md-12  "  >
              <h4>Accepted Orders</h4>
            

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
                {acceptedOrder.map( corder =>(
                     <tr>
                     <td className="text-center">
                         <strong>{corder.buyer}</strong>
                       </td>
                       <td className="text-center">
                         <strong>{corder.email}</strong>
                       </td>
                     
                     
                      
                       <td className="text-center">
                         <strong>{corder.phone}</strong>
                       </td>
                       <td>
                       <strong>{corder.booking_date}</strong>
                       </td>
     
                       <td>
                       <strong>{corder.booking_time}</strong>
                       </td>
     
                       <td>
                       <strong>{corder.total_fees} $</strong>
                       </td>
                       <td>
                       <strong>{corder.status}</strong>
                       </td>
     
                      
                     </tr>

                ))}
               
        
                 
        
              </tbody>
            </table>

         
            </div>
           

          
         </div>
         
          </CCardBody>


          
        </CCard>
       
       


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
                {completeOrder.map( corder =>(
                     <tr>
                     <td className="text-center">
                         <strong>{corder.buyer}</strong>
                       </td>
                       <td className="text-center">
                         <strong>{corder.email}</strong>
                       </td>
                     
                     
                      
                       <td className="text-center">
                         <strong>{corder.phone}</strong>
                       </td>
                       <td>
                       <strong>{corder.booking_date}</strong>
                       </td>
     
                       <td>
                       <strong>{corder.booking_time}</strong>
                       </td>
     
                       <td>
                       <strong>{corder.total_fees} $</strong>
                       </td>
                       <td>
                       <strong>{corder.status}</strong>
                       </td>
     
                      
                     </tr>

                ))}
               
        
                 
        
              </tbody>
            </table>

         
            </div>
           

          
         </div>
         
          </CCardBody>


          
        </CCard>
       

        <CCard>
          
          <CCardBody>
            
          
          <div class="row">

            <div className="col-md-12  "  >
              <h4>Cancelled Orders</h4>
            

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
                {cancelOrder.map( corder =>(
                     <tr>
                     <td className="text-center">
                         <strong>{corder.buyer}</strong>
                       </td>
                       <td className="text-center">
                         <strong>{corder.email}</strong>
                       </td>
                     
                     
                      
                       <td className="text-center">
                         <strong>{corder.phone}</strong>
                       </td>
                       <td>
                       <strong>{corder.booking_date}</strong>
                       </td>
     
                       <td>
                       <strong>{corder.booking_time}</strong>
                       </td>
     
                       <td>
                       <strong>{corder.total_fees} $</strong>
                       </td>
                       <td>
                       <strong>{corder.status}</strong>
                       </td>
     
                      
                     </tr>

                ))}
               
        
                 
        
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

export default Dashboard
