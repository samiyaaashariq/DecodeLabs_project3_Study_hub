import { useEffect, useState } from "react";
import AddResource from "../components/AddResource";
import ResourceCard from "../components/ResourceCard";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";

export default function Dashboard() {
  const [resources, setResources] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  {filteredData?.map((item) => (
  <ResourceCard key={item.id} item={item} />
))}

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("resources"));
    if (saved) setResources(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("resources", JSON.stringify(resources));
  }, [resources]);

  // Add resource
  const addResource = (resource) => {
    setResources([...resources, resource]);
  };

  // Filter + Search logic
  const filteredData = resources.filter((item) => {
    const matchFilter = filter === "All" || item.subject === filter;
    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  return (
    <div className="container">
      <h1>📚 Study Resources Hub</h1>

      <AddResource addResource={addResource} />

      <SearchBar setSearch={setSearch} />

      <FilterBar setFilter={setFilter} />

      <div className="grid">
        {filteredData.map((item) => (
          <ResourceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
