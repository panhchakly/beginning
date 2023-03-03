import { useEffect, useState } from "react";
import Child from "./child";

const App = () => {
  // state name //
  const [name, setName] = useState("Chheng Panhchakly");
  //console.log(name); //Chheng Panhchakly
  //if u need to set new name, u must to create function
  const set = () => {
    setName("My nick name: Wu Lee")
  }
  // console.log(name); //My nick name: Wu Lee
  //==================//

  // state boolen //
  const [checkBoolen, setCheckBoolen] = useState(false);
  //console.log(checkBoolen);
  //if u need to set new name, u must to create function
  const setBoolen = () => {
    setCheckBoolen(!checkBoolen)
  }
  console.log(checkBoolen);
  //==================//

  // React Props //
  const [prop] = useState("data prop")
  //=============//

  // [Hook] //
  const [useHook, setUseHook] = useState("PAPA");
  // useEffect run firstly
  useEffect(() => {
    setUseHook("MAMA");
  }, [])


  return (
    <>
      <h1>{useHook}</h1>
      <h1>{name}</h1>
      <SubApp />
      <Child prop={prop} pp={'Phnom Penh City'} />
      <br />
      <h4>Click Set now to change name</h4>
      <button onClick={set}>Set Now</button>
      <h4>Click Set boolen toggle</h4>
      <button onClick={setBoolen}>Set Boolen</button>
    </>
  );
}

export default App;

const SubApp = () => {
  return (
    <p>React makes it painless to create interactive UIs.</p>
  );
}