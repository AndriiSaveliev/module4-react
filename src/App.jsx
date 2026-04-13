import { useState } from "react";
import "./App.css";

function App() {
    const [name, setName] = useState("Andrii Saveliev");
    const [isOriginal, setIsOriginal] = useState(true);

    const toggleName = () => {
        if (isOriginal) {
            setName("React Student");
        } else {
            setName("Andrii Saveliev");
        }
        setIsOriginal(!isOriginal);
    };

    return (
        <div className="container">
            <h1>Hello, {name}</h1>
            <button onClick={toggleName}>
                Change / Reset Name
            </button>
        </div>
    );
}

export default App;