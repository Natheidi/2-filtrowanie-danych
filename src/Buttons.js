const Buttons = (props) => {
    return (
        <div>
            <button onClick ={(e) => props.setFilteredUsers("Admin")}>Wyświetl tylko adminów</button>
            <button onClick ={(e) => props.setFilteredUsers("User")}>Wyświetl tylko userów</button>
            <button onClick ={(e) => props.setFilteredUsers("All")}>Wyświetl wszystkich</button>
        </div>
    )
}

export default Buttons;


