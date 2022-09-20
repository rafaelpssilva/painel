import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://63294a0cd2c97d8c52643c66.mockapi.io/users")
            .then((res) => setDataUsers(res.data));
    }, []);

    function postUser() {
        axios.post("https://63294a0cd2c97d8c52643c66.mockapi.io/users", {
            name: "Cassio",
            idade: "33",
            cidade: "Porto alegre",
            email: "cassioRamos@gmailcom",
        });
    }

    return (
        <>
            <div className="App my-10 bg-black flex gap-3 flex-wrap justify-center items-center">
                {dataUsers.map(({ id, name, idade, cidade, email }) => (
                    <div
                        key={id}
                        className="border-red-700 border p-3 text-center"
                    >
                        <h2 className="text-lg">{name}</h2>
                        <p>{idade}</p>
                        <p>{cidade}</p>
                        <p>{email}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center flex-col">
                <h2>Adicionar user</h2>
                <button
                    className="bg-violet-500 px-3 py-2 my-2"
                    onClick={() => postUser()}
                >
                    Enviar
                </button>
            </div>
        </>
    );
}

export default App;
