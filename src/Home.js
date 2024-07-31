import { useState } from "react";


const Home = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(23)
    
    const handleClick = () => {
        setName('Saint');
        setAge(24);
    }

  return (
    <div className="home">
        <h2>Homepage</h2>
        <p>{ name } will be { age } years old next year </p>
        <button onClick={handleClick}> Click me </button>
    </div>
  )
}

export default Home