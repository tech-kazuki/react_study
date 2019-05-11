import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Kazuki", age: 25 },
    { name: "Koki", age: 22 },
    { name: "NoName", }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) =>{
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hello, I am {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

// User.defaultProps = {
//   age: 1
// }

export default App; //Appを出力してね！
