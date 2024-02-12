import { useState } from 'react';

const users = [
  { name: 'Monika', age: 20 },
  { name: 'Devesh', age: 24 },
  { name: 'Devika', age: 1 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const onClick = () => {
    const foundUser = users.find((p) => {
      return p.name === name;
    });
    setUser(foundUser);
  };
  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user?.name}
        <br />
        {user?.age}
      </div>
    </div>
  );
};

export default UserSearch;
