export default function SearchBar({ setSearch }) {
  return (
    <input
      className="search"
      placeholder="Search resources..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}