import React, { useEffect, useState } from 'react';
import { http } from '../../services/api';
import { Title } from './styles';

const App: React.FC = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    http.get('/users').then(({ data }) => setUsers(data.users));
  }, []);

  return (
    <div>
      <Title>{JSON.stringify(users)}</Title>
    </div>
  );
};

export default App;
