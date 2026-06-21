export default function FilterBar({ setFilter }) {
  return (
    <div className="filters">
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("OS")}>OS</button>
      <button onClick={() => setFilter("DBMS")}>DBMS</button>
      <button onClick={() => setFilter("DSA")}>DSA</button>
      <button onClick={() => setFilter("CN")}>CN</button>
    </div>
  );
}