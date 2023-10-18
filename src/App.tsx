import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import UserList from './components/UserList/UserList';
import UserDetails from './components/UserDetail/UserDetails';
import ReposTable from './components/UserRepos/ReposTable';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/details/:username" element={<UserDetails />} />
          <Route path="/repos/:username" element={<ReposTable />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
