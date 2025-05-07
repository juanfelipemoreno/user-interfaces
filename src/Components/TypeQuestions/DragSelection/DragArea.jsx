import { memo } from 'react'
import { useDrop } from 'react-dnd'


export const DragArea = memo(function DragArea({
  accept,
  lastDroppedItem,
  onDrop,
}) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = isOver && canDrop
  let statusClass = 'default'

  isActive ? statusClass = 'active' : (canDrop) ? statusClass = 'hover' : 'default' ;
  
  return (
    <div ref={drop} className={`dragArea ${statusClass}`} data-testid="dustbin">
      {!lastDroppedItem && (  
        <>
          {isActive ? 'Suelte'  : `Arrastre acá su respuesta`}
        </>
      )}
      {lastDroppedItem && (
        <>
          <div className="selected">
            <p>Respuesta Seleccionada:</p> 
            <p>{lastDroppedItem.text}</p>
          </div>
        </>
      )}
    </div>
  )
})
