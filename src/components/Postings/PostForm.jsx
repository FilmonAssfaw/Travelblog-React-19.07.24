import "./PostForm.css";

export default function PostForm({ addPost }) {
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    addPost({ ...fields, votes: 0 });
    event.target.reset();
  }

  return (
    <form className="PostForm" onSubmit={handleFormSubmit}>
      <div className="PostForm--field">
        <label>Title:</label>
        <input name="title" type="text" required />
      </div>
      <div className="PostForm--field">
        <label>Author:</label>
        <input name="author" type="text" required />
      </div>
      <div className="PostForm--field">
        <label>Date:</label>
        <input name="date" type="date" required />
      </div>
      <div className="PostForm--field">
        <label>Summary:</label>
        <textarea name="summary" required />
      </div>
      <div className="PostForm--button">
        <button type="submit">Add new Post</button>
      </div>
    </form>
  );
}
