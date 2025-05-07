import { memo } from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../ItemTypes'

const style = {
  padding: '0.5rem 1rem',
  cursor: 'move',
  float: 'left',
}
export const Box = memo(function Box({ option, id, name, isDropped }) {
  const [{ opacity }, drag] = useDrag(
    () => ({
            type: ItemTypes.BOX,
            item: { ...option, id, name },
            collect: (monitor) => ({
              opacity: monitor.isDragging() ? 0.4 : 1,
            }),
          }),[option,name]);

  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid="box">
      {isDropped ? <s>{name}</s> : name}
    </div>
  )
})