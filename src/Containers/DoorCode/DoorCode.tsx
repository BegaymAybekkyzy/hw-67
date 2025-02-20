
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import OnScreenKeyboard from '../../components/OnScreenKeyboard/OnScreenKeyboard.tsx';
import { verification } from './DoorCodeSlice.ts';

const DoorCode = () => {
  const doorCodeReducer = useSelector((state: RootState) => {
    return state.doorCode;
  });

  const dispatch = useDispatch();

  let variableClass: string = "";

  if (doorCodeReducer.correctInput === false) {
    variableClass = "incorrect ";
  } else if (doorCodeReducer.correctInput === true) {
    variableClass = "correct";
  }

  const content = doorCodeReducer.symbols.map((symbol) => (
    <button key={symbol} onClick={()=> dispatch(verification(symbol))} type="button" >{symbol}</button>
  ));

  return (
    <div>
      <OnScreenKeyboard
        variableClass={variableClass}
        children={content}
        content={doorCodeReducer.displayContent}/>
    </div>
  );
};

export default DoorCode;