import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Monika', age: 20 },
  { name: 'Devesh', age: 24 },
  { name: 'Devika', age: 1 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((p) => {
      return p.name === name;
    });
    setUser(foundUser);
  };
  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
