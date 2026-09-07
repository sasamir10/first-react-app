import { useState } from "react";
import Greeting from "./components/Greeting";
import UserInfo from "./components/UserInfo";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>My First React App</h1>

            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>

            <Greeting name="Samir" profession="React Developer" />
            <UserInfo name="Virat" profession="Frontend Developer" />
        </div>
    );
}

export default App;
