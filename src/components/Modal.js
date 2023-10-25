import { useState } from "react";
import Card from "./card";

export default function Modal(props) {

  function hideModal(e) {
    let target = e.target
    if (target.id == 'modal') {
      props.onHideModal()
    }
  }

  return (
    <div id='modal' onClick={hideModal} className={props.show ? 'modal' : 'hidden'}>
      <Card className='cardModal '>
        {props.children}
      </Card>
    </div>
  )
}