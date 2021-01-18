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

 
import CommonTable2 from './Common/CommonTable2'

 

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

const Tables6 = () => {


  const [newOrder,setNewOrder] = useState([])
  const [todos,setTodos] = useState([]) 

  useEffect(() => {
   
    getNewOrder()
  }, [])




  function getNewOrder (){

   

      db.collection("users").orderBy("name").onSnapshot(function(querySnapshot){
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




  return (
    <>
    <CRow>
      <CCol>
       
      
      
      
      
      
        <CCard>
        
        <CCardBody>
          
        
        <div class="row">

          <div className="col-md-12  "  >
            <h4>Userlist</h4>
          

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
              <div>Sylhet</div>
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
         

        
       </div>
       
        </CCardBody>


        
      </CCard>
      
      
      
      
      
      </CCol>
    </CRow>
  </>
  )
}

export default Tables6
