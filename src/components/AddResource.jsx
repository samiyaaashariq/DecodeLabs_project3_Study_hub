import { useState } from "react";

export default function AddResource({ addResource }) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("OS");
  const [type, setType] = useState("Video");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newResource = {
      id: Date.now(),
      title,
      subject,
      type,
      url,
    };

    addResource(newResource);

    setTitle("");
    setUrl("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Resource Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <select value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option>OS</option>
        <option>DBMS</option>
        <option>DSA</option>
        <option>CN</option>
      </select>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Video</option>
        <option>Notes</option>
        <option>Link</option>
      </select>

      <input
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}
