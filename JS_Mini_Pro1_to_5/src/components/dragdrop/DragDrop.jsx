import React from 'react'
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function DragDrop() {
  return (
    <div className='drag'>
      <DndProvider backend={HTML5Backend}>
        <h1>heading</h1>
      </DndProvider>
    </div>
  )
}

export default DragDrop
