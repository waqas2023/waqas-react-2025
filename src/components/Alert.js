// import React from 'react'
// import React, { useState } from 'react';
// import { Alert as RBAlert } from 'react-bootstrap';
// export default function Alert(props) {
//     const [showAlert, setShowAlert] = useState(true);
//   return (
//     <>
//     {showAlert && props.alert && (
//         <RBAlert variant={props.alert.type} dismissible onClose={() => setShowAlert(false)}>
//            <strong>{props.alert.type}</strong> : <p style={{marginBottom:"0px"}}>{props.alert.msg}</p>
//         </RBAlert>
//     )}
//     </>
//   )
// }

import React from 'react'

export default function Alert(props) {
    const capitilize = (words)=> {
        let lower = words.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
     }
  return (
    props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <p style={{marginBottom:"0px"}}><strong>{capitilize(props.alert.type)}</strong> : <span >{props.alert.msg}</span></p>
   </div>
  ) 
}

