import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const stats = [
  { id: 1, title: 'Users', value: 1200, bgColor: '#4f46e5' },
  { id: 2, title: 'Orders', value: 305, bgColor: '#059669' },
  { id: 3, title: 'Revenue', value: '$12,450', bgColor: '#d97706' },
  { id: 4, title: 'Feedbacks', value: 85, bgColor: '#db2777' },
];

const initialData = [
  {
    name: 'Rutuja',
    role: 'Admin',
    status: 'Active',
    email: 'rutuja@email.com',
    location: 'Pune',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Yuvraj',
    role: 'Editor',
    status: 'Inactive',
    email: 'yuvraj@email.com',
    location: 'Mumbai',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Amit',
    role: 'Viewer',
    status: 'Active',
    email: 'amit@email.com',
    location: 'Delhi',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Sneha',
    role: 'Admin',
    status: 'Inactive',
    email: 'sneha@email.com',
    location: 'Bangalore',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'Nikhil',
    role: 'Viewer',
    status: 'Active',
    email: 'nikhil@email.com',
    location: 'Chennai',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
];

const Dashboard = () => {
  const [data, setData] = useState(initialData);
  const [editIndex, setEditIndex] = useState(null);
  const [editedRow, setEditedRow] = useState({});

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedRow({ ...data[index] });
  };

  const handleChange = (field, value) => {
    setEditedRow({ ...editedRow, [field]: value });
  };

  const handleSave = () => {
    const updatedData = [...data];
    updatedData[editIndex] = editedRow;
    setData(updatedData);
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      const updated = [...data];
      updated.splice(index, 1);
      setData(updated);
    }
  };

  const getStatusStyle = (status) => ({
    fontWeight: 'bold',
    color: status === 'Active' ? 'green' : status === 'Inactive' ? 'red' : 'orange',
  });

  return (
    <div style={{ padding: 24, fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>📊 Dashboard</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 24, color: '#555' }}>
        Welcome to your admin dashboard. Here is the quick overview of your system:
      </p>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 40 }}>
        {stats.map(({ id, title, value, bgColor }) => (
          <div
            key={id}
            style={{
              flex: '1 1 200px',
              backgroundColor: bgColor,
              color: '#fff',
              borderRadius: 12,
              padding: 20,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              minWidth: 200,
            }}
          >
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{title}</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: 8 }}>{value}</p>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: 16, color: '#1e3a8a' }}>
        📋 Users Table
      </h2>
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          overflowX: 'auto',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Name', 'Role', 'Status', 'Email', 'Location', 'Actions'].map((col) => (
                <th
                  key={col}
                  style={{
                    backgroundColor: '#1e3a8a',
                    color: '#ffffff',
                    padding: '14px 20px',
                    textAlign: 'left',
                    fontWeight: 500,
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9fafb' : '#ffffff' }}>
                {editIndex === index ? (
                  <>
                    <td style={cellStyle}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img
                          src={editedRow.image}
                          alt="avatar"
                          style={avatarStyle}
                          onError={(e) => (e.target.src = 'https://via.placeholder.com/40x40?text=?')}
                        />
                        <input
                          value={editedRow.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          style={inputStyle}
                        />
                      </div>
                    </td>
                    <td style={cellStyle}>
                      <input
                        value={editedRow.role}
                        onChange={(e) => handleChange('role', e.target.value)}
                        style={inputStyle}
                      />
                    </td>
                    <td style={cellStyle}>
                      <select
                        value={editedRow.status}
                        onChange={(e) => handleChange('status', e.target.value)}
                        style={inputStyle}
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Pending">Pending</option>
                      </select>
                    </td>
                    <td style={cellStyle}>
                      <input
                        value={editedRow.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        style={inputStyle}
                      />
                    </td>
                    <td style={cellStyle}>
                      <input
                        value={editedRow.location}
                        onChange={(e) => handleChange('location', e.target.value)}
                        style={inputStyle}
                      />
                    </td>
                    <td style={cellStyle}>
                      <button onClick={handleSave} style={saveButtonStyle}>
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td style={cellStyle}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img
                          src={row.image}
                          alt="avatar"
                          style={avatarStyle}
                          onError={(e) => (e.target.src = 'https://via.placeholder.com/40x40?text=?')}
                        />
                        <span style={{ fontWeight: 500, color: '#111827' }}>{row.name}</span>
                      </div>
                    </td>
                    <td style={{ ...cellStyle, color: '#111827', fontWeight: 500 }}>{row.role}</td>
                    <td style={{ ...cellStyle, ...getStatusStyle(row.status) }}>{row.status}</td>
                    <td style={{ ...cellStyle, color: '#374151' }}>{row.email}</td>
                    <td style={{ ...cellStyle, color: '#374151' }}>{row.location}</td>
                    <td style={cellStyle}>
                      <FaEdit
                        onClick={() => handleEdit(index)}
                        style={{ color: '#2563eb', cursor: 'pointer', marginRight: 12 }}
                      />
                      <FaTrash
                        onClick={() => handleDelete(index)}
                        style={{ color: '#dc2626', cursor: 'pointer' }}
                      />
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const cellStyle = {
  padding: '14px 20px',
  borderBottom: '1px solid #e5e7eb',
  verticalAlign: 'middle',
};

const inputStyle = {
  padding: '6px 10px',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  fontSize: '14px',
};

const saveButtonStyle = {
  backgroundColor: '#2563eb',
  color: 'white',
  padding: '6px 12px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

const avatarStyle = {
  width: 40,
  height: 40,
  borderRadius: '50%',
  objectFit: 'cover',
  border: '1px solid #ccc',
};

export default Dashboard;