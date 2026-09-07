import Greeting from "./components/Greeting";

function App() {
    const name = "Samir";
    const age = 25;
    const city = "Sylhet";
    const profession = "React Developer";

    return (
        <div>
            <h1>Hello, {name}!</h1>

            <Greeting name="Samir" profession="React Development" />

            <p>I'm learning React.</p>
            <p>I'm {age + 1} years old</p>
            <p>I lived in {city}</p>
            <p>I want to be {profession}</p>
        </div>
    );
}

export default App;
