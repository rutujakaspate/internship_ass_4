import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialData = {
  columns: {
    todo: {
      name: 'Fresh Releases',
      items: [
        {
          id: '1',
          title: 'Beyond Strings',
          artist: 'Blueyes',
          image: 'https://i.pinimg.com/736x/fc/bb/76/fcbb76976e261bf6be07da7b8592fef7.jpg',
          audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        },
        {
          id: '4',
          title: 'Dreamscape',
          artist: 'Aurora Skies',
          image: 'https://i.pinimg.com/564x/36/0b/46/360b46b8128b18c46be02cf9a579e3c7.jpg',
          audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
        },
        {
          id: '5',
          title: 'Golden Horizon',
          artist: 'Sunset Beats',
          image: 'https://i.pinimg.com/736x/f2/e2/24/f2e224a9f3c9612a3a0a17e5c8bbf5b1.jpg',
          audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
        },
      ],
    },
    inProgress: {
      name: 'Trending Now',
      items: [
        {
          id: '2',
          title: 'Midnight Echoes',
          artist: 'Lana Ray',
          image: 'https://i.pinimg.com/originals/4b/c3/5f/4bc35f565fe593cf3702b3b2a749fa69.jpg',
          audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        },
        {
          id: '6',
          title: 'Velvet Sky',
          artist: 'Dream Walkers',
          image: 'https://i.pinimg.com/736x/ae/37/aa/ae37aa8ac5e7b1c4d68f46ec0cb78527.jpg',
          audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
        },
        {
          id: '9',
          title: 'Stardust Dreams',
          artist: 'Nova Waves',
          image: 'https://i.pinimg.com/736x/eb/33/c2/eb33c2d0ee7b88b4e0569aa6b11688fc.jpg',
          audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
        },
      ],
    },
    done: {
      name: 'Top Picks',
      items: [
        {
          id: '3',
          title: 'Ocean Drive',
          artist: 'Nightfall',
          image: 'https://i.pinimg.com/originals/5d/4a/01/5d4a015b0736d4f3d9cb3beedc0f3a4a.jpg',
          audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        },
        {
          id: '7',
          title: 'Neon Rain',
          artist: 'Electric Moods',
          image: 'https://i.pinimg.com/736x/8f/9c/2d/8f9c2dfdc0905d585db9375412a8e537.jpg',
          audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
        },
        {
          id: '10',
          title: 'Celestial Voyage',
          artist: 'Skyline Harmony',
          image: 'https://i.pinimg.com/736x/91/6e/54/916e5481ebdd4df19c4b68c823df378c.jpg',
          audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
        },
      ],
    },
  },
  columnOrder: ['todo', 'inProgress', 'done'],
};

const Albums = () => {
  const [columns, setColumns] = useState(initialData.columns);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    } else {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%', padding: '20px', gap: '20px' }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {initialData.columnOrder.map((columnId) => {
          const column = columns[columnId];
          return (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    background: snapshot.isDraggingOver ? '#2a2a2a' : '#1f1f1f',
                    padding: 16,
                    width: 280,
                    minHeight: 500,
                    borderRadius: 12,
                    color: 'white',
                  }}
                >
                  <h2 style={{ textAlign: 'center', marginBottom: '16px', fontWeight: 'bold' }}>{column.name}</h2>
                  {column.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            userSelect: 'none',
                            margin: '0 0 16px 0',
                            backgroundColor: '#1f1f1f',
                            borderRadius: 10,
                            overflow: 'hidden',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                            color: 'white',
                            ...provided.draggableProps.style,
                          }}
                        >
                          <img src={item.image} alt={item.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                          <div style={{ padding: 12 }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{item.title}</h3>
                            <p style={{ color: '#bbb', marginBottom: 8 }}>{item.artist}</p>
                            <audio controls style={{ width: '100%', accentColor: 'green' }}>
                              <source src={item.audio} type="audio/mp3" />
                              Your browser does not support the audio element.
                            </audio>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default Albums;
