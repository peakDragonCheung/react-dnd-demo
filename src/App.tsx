import React from 'react';
import './App.css';
import Item from './component/Item';
import { DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import Borad from './component/Borad'
function App() {
  return (
        <DndProvider backend={HTML5Backend}>
          <Borad/>
        </DndProvider>
  );
}

export default App;
