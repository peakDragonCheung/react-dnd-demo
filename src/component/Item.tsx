
import { useDrag, useDrop } from 'react-dnd'
import React from 'react'
interface ItemProps {
    text: number,
    isBlock?: boolean,
    moveItem?: (id: number, dragId: number) => void,
    index: number
}
export default function Item(props: ItemProps) {
    const { text } = props;
    const myRef = React.useRef<HTMLDivElement>(null);
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'knight',
        item: {
            id: text,
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
      }),[text]);

    const [, drop] = useDrop({
		accept: 'knight',
		hover({ id: draggedId}: { id: number}) {
            console.log('props.text', text);
            if(draggedId !== text) {
			    props.moveItem && props.moveItem(draggedId, text)
            }
		},
	},[text])
    drag(drop(myRef))
    return <div style={{display: 'inline-block', opacity: isDragging?0:1}} ref={myRef} className="dropzone">{text}</div>
}