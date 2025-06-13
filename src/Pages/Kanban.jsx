import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const defaultData = {
  columns: {
    todo: {
      name: 'To Do',
      items: [
        { id: '1', content: 'Design homepage' },
        { id: '2', content: 'Setup project repo' },
      ],
    },
    inProgress: {
      name: 'In Progress',
      items: [
        { id: '3', content: 'Develop login feature' },
      ],
    },
    done: {
      name: 'Done',
      items: [
        { id: '4', content: 'Project kickoff meeting' },
      ],
    },
  },
  columnOrder: ['todo', 'inProgress', 'done'],
};

const Kanban = () => {
  const [columns, setColumns] = useState(defaultData.columns);
  const [columnOrder, setColumnOrder] = useState(defaultData.columnOrder);
  const [showModal, setShowModal] = useState(false);
  const [taskText, setTaskText] = useState('');
  const [taskColumn, setTaskColumn] = useState('todo');

  // Load from localStorage
  useEffect(() => {
    const storedColumns = localStorage.getItem('kanbanColumns');
    const storedOrder = localStorage.getItem('kanbanColumnOrder');

    if (storedColumns && storedOrder) {
      setColumns(JSON.parse(storedColumns));
      setColumnOrder(JSON.parse(storedOrder));
    }
  }, []);

  // Save to localStorage when either columns or order change
  useEffect(() => {
    localStorage.setItem('kanbanColumns', JSON.stringify(columns));
    localStorage.setItem('kanbanColumnOrder', JSON.stringify(columnOrder));
  }, [columns, columnOrder]);

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

  const handleAddTask = () => {
    if (!taskText.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      content: taskText.trim(),
    };

    const updatedColumn = {
      ...columns[taskColumn],
      items: [...columns[taskColumn].items, newTask],
    };

    setColumns({
      ...columns,
      [taskColumn]: updatedColumn,
    });

    setTaskText('');
    setTaskColumn('todo');
    setShowModal(false);
  };

  return (
    <div style={{ position: 'relative', padding: '20px' }}>
      {/* Add Task Button */}
      <div style={{ textAlign: 'right', marginBottom: '10px' }}>
        <button
          onClick={() => setShowModal(true)}
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '10px 16px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          + Add Task
        </button>
      </div>

      {/* Kanban Columns */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {columnOrder.map((columnId) => {
            const column = columns[columnId];
            return (
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver ? '#d3d3d3' : '#f0f0f0',
                      padding: 10,
                      width: 250,
                      minHeight: 500,
                      borderRadius: 6,
                    }}
                  >
                    <h2 style={{ textAlign: 'center' }}>{column.name}</h2>
                    {column.items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              userSelect: 'none',
                              padding: 16,
                              margin: '0 0 8px 0',
                              minHeight: '50px',
                              backgroundColor: snapshot.isDragging ? '#4a90e2' : '#fff',
                              color: snapshot.isDragging ? 'white' : 'black',
                              borderRadius: 4,
                              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                              ...provided.draggableProps.style,
                            }}
                          >
                            {item.content}
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

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '6px', width: '300px' }}>
            <h3 style={{ marginBottom: '10px' }}>Add New Task</h3>
            <input
              type="text"
              placeholder="Task description"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
            <select
              value={taskColumn}
              onChange={(e) => setTaskColumn(e.target.value)}
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            >
              <option value="todo">To Do</option>
              <option value="inProgress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button onClick={() => setShowModal(false)} style={{ padding: '8px 12px' }}>
                Cancel
              </button>
              <button onClick={handleAddTask} style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 12px' }}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kanban;
