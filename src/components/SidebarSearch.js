import React, { useState, useEffect } from 'react';
import './SidebarSearch.css'; // Import custom styles

const SidebarSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searchData, setSearchData] = useState([]); // Store full search data

  useEffect(() => {
    // Load search data from a JSON file
    const fetchData = async () => {
      try {
        const response = await fetch(`${window.location.origin}/Statescopeweb/search-index.json`, {
          headers: { 'Accept': 'application/json' },
        });
        ;

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("🔍 Fetched Search Data:", data); // Debugging log
        setSearchData(data);
      } catch (error) {
        console.error("❌ Failed to load search data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    setQuery(searchTerm);

    if (!searchTerm) {
      setResults([]); // Clear results if query is empty
      return;
    }

    const filteredResults = searchData.filter((result) =>
      result.title?.toLowerCase().includes(searchTerm) ||
      (result.content && result.content.toLowerCase().includes(searchTerm))
    );

    console.log("🔍 Filtered Results:", filteredResults); // Debugging log
    setResults(filteredResults);
  };

  return (
    <div className="sidebar-search">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        className="sidebar-search-input"
      />

      {/* Search Results */}
      <div className="sidebar-search-results">
        {console.log("📌 UI Rendering Results:", results)} {/* Debugging log */}
        {query && results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="sidebar-search-result-item">
              <a href={result.url} className="sidebar-search-result-link">
                <strong>{result.title}</strong>
              </a>
              <p>{result.content.slice(0, 100)}...</p>
            </div>
          ))
        ) : (
          query && <p> No results found</p>
        )}
      </div>
    </div>
  );
};

export default SidebarSearch;
