import React, { useState } from 'react';
import AdminAddProduct from './AdminAddProduct/AdminAddProduct';
import AdminManegeProduct from './AdminManegeProduct/AdminManegeProduct';
import './AdminPanel.css'
const AdminPanel = () => {
     let firstSection=false;
     let secondSection=false;
     const [setSide, setSetSide] = useState({
          one:false,
          two:true
     })
     const handleManageEvent= n =>{
          if(n==1){
               const side = {...setSide}
               side.one = true;
               side.two= false;
               setSetSide(side)
               // firstSection=true;
               // secondSection=false;
               // console.log(n);
          }
          if(n==2){
               const side = {...setSide}
               side.one = false;
               side.two= true;
               setSetSide(side)
          }
     }
     return (
          <div className="container">
               <div className="row">
                    <div className="col-md-3 sidepanel">
                         <h4 onClick={()=> handleManageEvent(1)}>Mannage Product</h4>
                         <h4 onClick={()=>handleManageEvent(2)}>Add Product</h4>
                    </div>
                    <div className="col-md-9">
                         {setSide.one && <AdminManegeProduct></AdminManegeProduct>}
                         {setSide.two && <AdminAddProduct></AdminAddProduct>}
                    </div>
               </div>
          </div>
     );
};

export default AdminPanel;