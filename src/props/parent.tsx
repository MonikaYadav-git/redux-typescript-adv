import { Child, ChildFC } from './child';
const Parent = () => {
  return (
    <>
      <Child color="Red" onClick={() => console.log('Hello')}></Child>
      <ChildFC color="Red" onClick={() => console.log('Hello')}></ChildFC>
    </>
  );
};
export default Parent;
