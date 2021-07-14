import React from 'react';
import fakeData from '../../fakeData';

const DataInsert = () => {
     const handleAddProduct =()=>{
          
          fetch('https://boiling-ocean-62562.herokuapp.com/addProduct',{
               method:'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body:JSON.stringify(fakeData)
          })
     }
     return (
          <div>
               <button onClick={handleAddProduct}>Add product</button>
          </div>
     );
};

export default DataInsert;