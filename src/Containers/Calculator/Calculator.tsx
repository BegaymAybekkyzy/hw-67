import OnScreenKeyboard from '../../components/OnScreenKeyboard/OnScreenKeyboard.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import { mathOperations } from './CalculatorSlice.ts';

const Calculator = () => {
  const calculatorReducer = useSelector((state: RootState) => {
    return state.calculator;
  });

  const dispatch = useDispatch();

  const keyboard = calculatorReducer.symbols.map((symbol) => (
    <button
      key={symbol}
      onClick={()=> dispatch(mathOperations(symbol))}
      type="button" >{symbol}</button>
  ));

  return (
    <div>
      <OnScreenKeyboard content={calculatorReducer.displayContent} children={keyboard} />
    </div>
  );
};

export default Calculator;