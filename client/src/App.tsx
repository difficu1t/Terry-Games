import React, { useEffect } from 'react';
import { BrowserRouter ,Routes, Route, Navigate } from 'react-router-dom';
import { useTableGamesAction } from './hooks/useTableGamesAction';
import { useUsersAction } from './hooks/useUsersAction';
import TableGamesList from './pages/TableGamesList';
import WelcomePage from './pages/WelcomePage';
import GamePage from './pages/GamePage';
import NavBar from './components/navbar/NavBar';
import CreateGame from './pages/CreateGame';
import UsersPage from './pages/UsersPage';
import CreateUser from './pages/CreateUser';
import "./styles/App.css"

function App() {
  const { fetchTableGames } = useTableGamesAction();
  const { fetchUsers } = useUsersAction();

  useEffect(() => {
    fetchTableGames();
    fetchUsers();
  }, [])

  return (
    <div className='App'>
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<WelcomePage />}/>
          <Route path='/tablegames' element={<TableGamesList />}/>
          <Route path='/tablegames/:title' element={<GamePage />}/>
          <Route path='/creategame' element={<CreateGame />}/>
          <Route path='/users' element={<UsersPage />  }/>
          <Route path='/adduser' element={<CreateUser />}></Route>
          <Route path='*' element={<Navigate to="/" replace />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
