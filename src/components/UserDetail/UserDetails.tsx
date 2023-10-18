import '../../styles/UserDetail/UserDetail.css'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserDetailProps } from '../../interfaces/UserDetailProps/UserDetailProps';
import { fetchGitHubUserDetail } from '../../api/GitHubUserDetailApi';
import { useNavigate } from 'react-router-dom';

const UserDetails: React.FC = () => {
  const { username } = useParams();
  const [userDetail, setUserDetail] = useState<UserDetailProps | null>(null);

  const navigate = useNavigate(); 

  const handleReposClick = (username: string) => {
    navigate(`/repos/${username}`); 
  };

  const handleBackClick = () => {
    navigate(`/`); 
  };

  const fetchData = async () => {
    try {
      const data = await fetchGitHubUserDetail(username);
      setUserDetail(data);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='Container'>
      <h1>{username}</h1>
        {userDetail && (
          <div className='ContainerDetails'>
            <h2>ID: {userDetail.id}</h2>
            <h2>Login: {userDetail.login}</h2>
          <h2>
            URL: 
            <a href={userDetail.html_url} target="_blank" rel="noopener noreferrer">
               {userDetail.html_url}
            </a>
          </h2>            
          <h2>Created_at: {userDetail.created_at}</h2>
          </div>
        )}
      <button className='RepositoriesButton' onClick={() => handleReposClick(username ?? "")}>Access repositories</button>
      <button className='BackButton' onClick={() => handleBackClick()}> Back </button>
      </div>
  );
};

export default UserDetails;

