import React ,{useState,useEffect,useRef,useCallback,useMemo,useImperativeHandle,forwardRef,useDebugValue}from 'react'
import randomcolor from 'randomcolor'
import './App.css';

function Playground() {
  const[count,setCount] =useState(0)
  const inputref=useRef()
  const[color,setColor] =useState(null)
  useCallback(()=>console.log('useCallback'))
  useMemo(()=>()=>console.log('useMemo'))
  useEffect(()=>{
    setColor(randomcolor())
    inputref.current.focus()
  },[count])
  
  return (

    <div className="App" > 
    <div style={{ borderTop:`10px solid ${color}`}}>
    <h1>{count}</h1>
     <button onClick={()=>setCount(count+1)}>+</button>
     <button onClick={()=>setCount(count-1)}>-</button>
     <button onClick={() =>setColor(randomcolor())}>Change Color</button>
    </div>
     <input ref={inputref} type='range' onChange={e=> setCount(e.target.value) } value={count}/>
     
    </div>
  );
  const Calculate = React.memo(({cb,num})=>{
    cb(num)
    const rendercount=useRef(1)
  return <div>{rendercount.current++}</div>
  })
}


export default Playground;
/**
 * useCallback() - process function
 * const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
 * useMemo() - function's result
 const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
 */
/**
 * useDebugValue(date, date => date.toDateString());
 * Syntax : useDebugValue(value, function to format a value)
 */
/**
 * useLayoutEffect() The signature is identical to useEffect()
 */

/**    useImperativeHandle(ref, createHandle, [deps])
 * function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
 */

/**           useRef()
 * function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
 */



 /** useReducer() Hook   is  probably same as useState
  * const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
  */