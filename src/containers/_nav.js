import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['HairShare']
  },
   
 
 
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Total Order',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [


      {
        _tag: 'CSidebarNavItem',
        name: 'New Order',
        to: '/base/new_orders',
      },
      
       
     
      {
        _tag: 'CSidebarNavItem',
        name: 'Accepted Order',
        to: '/base/accepted_orders',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cancelled Order',
        to: '/base/cancle_orders',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Completed Order',
        to: '/base/completed_orders',
      },
     
      
       
  
     
      
      
      
     
       
    ],
  },
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Pending Refund',
    to: '/base/pending_refund_orders',
    icon: 'cil-chart-pie'
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Refunded',
    to: '/base/refunded_orders',
    icon: 'cil-chart-pie'
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Userlist',
    to: '/base/userlist',
    icon: 'cil-chart-pie'
  },


   
   
   
 
 
 
 
  
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
