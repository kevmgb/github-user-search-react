import { useState } from "react"


function Form({onSubmit}) {
    const [userName, setUserName] = useState("");
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${userName}`);
        onSubmit(resp.data);
        setUserName("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={userName}
                onChange={event => setUserName(event.target.value)}
                placeholder="Enter Github username"
                required
            />
            <button>Search</button>
        </form>
    )
}