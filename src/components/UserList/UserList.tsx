import '../../styles/UserList/UserList.css';
import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import Pagination from '../Pagination';
import { fetchGitHubUsers } from '../../api/GitHubUserApi';
import { GitHubUser } from './../../interfaces/UserListProps/GitHubUser';
import SinceInput from './SinceInput';

const usersPerPage = 10; // Número de itens por página

const UserList: React.FC = () => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [page, setPage] = useState(1);
  const [since, setSince] = useState(1);
  const [allUsers, setAllUsers] = useState<GitHubUser[]>([]);
  const [error, setError] =  useState('');
  const fetchData = async () => {
    try {
      const data = await fetchGitHubUsers(since);
      const allUsers = data.users;
      setAllUsers(allUsers);
      const startIndex = (page - 1) * usersPerPage;
      const endIndex = startIndex + usersPerPage;
      const usersToDisplay = allUsers.slice(startIndex, endIndex);
      setUsers(usersToDisplay);

    } catch (error) {
      setError('You have exceeded GitHub request limit');
    }
  };

  useEffect(() => {
    fetchData();
  }, [since]); 

  useEffect(() => {
    const startIndex = (page - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const usersToDisplay = allUsers.slice(startIndex, endIndex);

    setUsers(usersToDisplay);

  }, [page]); 

  return (
    <div className='Container'>
      <h1>List of GitHub Users</h1>
      <p>only users with highest id</p>
      <div className='ContainerSince'>
        <SinceInput since={since} setSince={setSince}></SinceInput>
      </div>
      {error ? 
        <h1 className='Error'>{error}</h1>
        :
        <>
        <UserTable users={users} />
          <Pagination page={page} setPage={setPage} maxPages={3} />
        </>
      }
    </div>
  );
};

export default UserList;
