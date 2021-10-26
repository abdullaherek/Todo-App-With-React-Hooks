import React from 'react'
import {Title, Completed, CompletedDiscovery} from "../styles/styles";

export  function TodoList({todoList, 
  updateCheckFoundation,
  updateCheckDiscovery,
  updateCheckDelivery,
  disabledCheckDiscovery,
  disabledCheckDelivery,
}) {
    return (
<div>
    <div> 
      <Title>Foundation<Completed disabledCheckDiscovery={disabledCheckDiscovery}>✔️</Completed></Title>
      {todoList.foundation.steps.map((item) => {
        return (
          <div>
            <input type="checkbox" defaultChecked={item.isDone} disabled={item.disabled}
             onClick={(event)=> updateCheckFoundation({
                 isDone:event.target.checked, 
                 key:item.key,
                 disabled:item.disabled
                 })
                }
                />
            <span>{item.title}</span>
          </div>
        );
      })}


      <Title>Discovery<CompletedDiscovery disabledCheckDelivery={disabledCheckDelivery}>✔️</CompletedDiscovery></Title>
      {todoList.discovery.steps.map((item) => {
        return (
          <div >
            <input type="checkbox" defaultChecked={item.isDone} disabled={disabledCheckDiscovery}
             onClick={(event)=> updateCheckDiscovery({
              isDone:event.target.checked, 
              key:item.key,
              disabled:item.disabled
              })
             }
            />
            <span>{item.title}</span>
          </div>
        );
      })}

      <Title>Delivery</Title>
      {todoList.delivery.steps.map((item) => {
        return (
          <div>
            <input type="checkbox" defaultChecked={item.isDone} disabled={disabledCheckDelivery}
             onClick={(event)=> updateCheckDelivery({
              isDone:event.target.checked, 
              key:item.key,
              disabled:item.disabled
              })
             }
            />
            <span>{item.title}</span>
          </div>
        );
      })}
    </div>
  
        </div>
    )
}
