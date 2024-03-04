import React from 'react'
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import './drag.css'
import DragImg from './DragImg';
import { useDrag } from 'react-dnd'
import { DragSource, DragPreviewImage } from 'react-dnd'

function DragDrop() {
  return (
    <div className='drag'>
      <DndProvider backend={HTML5Backend}>
        <DragImg/>
      </DndProvider>
    </div>
  )
}

export default DragDrop
