interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Hi {color}
      <br></br>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export const ChildFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div style={{ color }}>
      Hi
      <br />
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
