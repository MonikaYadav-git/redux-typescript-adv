import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreaters, dispatch);
};
