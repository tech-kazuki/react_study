import React from 'react';

function App() {
  // const greeting = "React!!"
  // const dom = <h1 className="hoge">{greeting}</h1>
  return (
  <React.Fragment>
    <label htmlFor="foo">bar</label>
    <input type="text" onChange={() => {console.log("Hello!")}} />
  </React.Fragment>
  )
}

export default App;
