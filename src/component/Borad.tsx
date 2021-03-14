import React from 'react';
import Item from './Item';
import { useDrop } from 'react-dnd'
const initData = [{
  text: 0,
  isBlock: false
},{
  text: 1,
  isBlock: false
},{
  text: 2,
  isBlock: false
},{
  text: 3,
  isBlock: false
},{
  text: 4,
  isBlock: false
},{
  text: 5,
  isBlock: true
},{
  text: 6,
  isBlock: true
},{
  text: 7,
  isBlock: true
}]
function App() {
  const [ data, setData ] = React.useState(initData);

  const moveItem = (dragId: number, id: number) => {
    const indexItem = data.filter((ele, lIndex) => (ele.text === id ))[0];
    const originItem = data.filter((ele, lIndex) => (ele.text === dragId ))[0];
    const oIndex = data.indexOf(originItem);
    const index = data.indexOf(indexItem);
    data[oIndex] = indexItem;
    data[index] = originItem;
    setTimeout(() => {
      setData([...data]);
    },100)
  }
  return (
            <div className="App">
              {data.map((ele, index) => {
                return <Item moveItem={moveItem} index={index} key={index} text={ele.text} isBlock={ele.isBlock} />
              })}
          </div>
  );
}

export default App;
