import '../../styles/UserRepos/UserRepos.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGitHubUsersRepos } from '../../api/GitHubUserReposApi'; // Importe a função da API
import { UserReposProps } from '../../interfaces/UserReposProps/UserReposProps'
import Pagination from '../Pagination';
import { useNavigate } from 'react-router-dom';


function ReposTable() {
  const [userRepos, setUserRepos] = useState<UserReposProps[] | null>(null);
  const { username } = useParams();
  const [userAllRepos, setUserAllRepos] = useState<UserReposProps[] | null>(null);
  const [page, setPage] = useState(1);
  const reposPerPage = 10;
  const navigate = useNavigate(); 

  const handleDetailsClick = (username?: string) => {
    navigate(`/details/${username}`);
  };

  const fetchData = async () => {
    try {
      const data = await fetchGitHubUsersRepos(username);
      const allRepos = data.repos;
      setUserAllRepos(allRepos);
      const startIndex = (page - 1) * reposPerPage;
      const endIndex = startIndex + reposPerPage;
      const reposToDisplay = allRepos.slice(startIndex, endIndex);

      setUserRepos(reposToDisplay);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData(); 
  }, [username]); 

  useEffect(() => {
    if (userAllRepos) {
      const startIndex = (page - 1) * reposPerPage;
      const endIndex = startIndex + reposPerPage;
      const reposToDisplay = userAllRepos.slice(startIndex, endIndex);

      setUserRepos(reposToDisplay);
    }
  }, [page]);

  return (
    <div className='Container'>
      <h1>Repos by: {username}</h1>
      {userRepos ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>URL do Repositório</th>
            </tr>
          </thead>
          <tbody>
            {userRepos.map((repo) => (
              <tr key={repo.id}>
                <td>{repo.id}</td>
                <td>
                  <a href={repo.html_url}>{repo.html_url}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Carregando...</p>
      )}
      <div className="ContainerButtons">
        <Pagination page={page} setPage={setPage} maxPages={0} />
        <button onClick={() => handleDetailsClick(username)}>Back Details</button>
      </div>
    </div>
  );
}

export default ReposTable;
