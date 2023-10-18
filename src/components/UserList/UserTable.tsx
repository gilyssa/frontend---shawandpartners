// UserTable.tsx
import React from 'react';
import { UserTableProps } from './../../interfaces/UserListProps/UserTableProps';
import { useNavigate } from 'react-router-dom';


const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const navigate = useNavigate(); 

  const handleDetailsClick = (username: string) => {
    navigate(`/details/${username}`); 
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Login</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td>
                <button onClick={() => handleDetailsClick(user.login)}>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
