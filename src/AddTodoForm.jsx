export default function AddTodoForm({ onAdd }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputText = e.target.elements.text;
        if (inputText.value.trim()){
            onAdd(inputText.value.trim());
            inputText.value = "";
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="text" placeholder="Add a todo..." />
            <button type="submit">Add</button>
        </form>
    )
}


