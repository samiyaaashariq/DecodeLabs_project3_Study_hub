export default function ResourceCard({ item }) {
  return (
    <div className="card">
      <h3>{item.title}</h3>

      <p className="tag">{item.subject}</p>
      <p className="type">{item.type}</p>

      <a href={item.url} target="_blank">
        Open Resource
      </a>
    </div>
  );
}