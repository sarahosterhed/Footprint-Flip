import React from 'react';
import { useDraggable, closestCenter } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const DraggableCard = ({ id, name, co2, img }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({
        id,
    });

    return (
        <div
            ref={setNodeRef}
            style={{
                width: '20%',
                transform: CSS.Transform.toString(transform),
                transition,
                cursor: 'grab',
                marginBottom: '10px',
                border: '2px solid transparent',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'lightblue',
            }}
            {...attributes}
            {...listeners}
        >
            <p>{name}</p>
            <p>{co2}</p>
            <img src={img} alt={name} style={{ width: '100%' }} />
        </div>
    );
};

export default DraggableCard;
