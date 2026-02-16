import React, { useEffect, useMemo, useRef, useState } from 'react';
import './SearchButton.css';

function SearchButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [searchData, setSearchData] = useState([]);

  const rootRef = useRef(null);

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const response = await fetch(
          `${window.location.origin}/Statescopeweb/search-index.json`,
          { headers: { Accept: 'application/json' } }
        );
        const data = await response.json();
        setSearchData(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to load search data:', error);
        setSearchData([]);
      }
    };

    fetchSearchData();
  }, []);

  // Close dropdown on outside click + ESC
  useEffect(() => {
    if (!isOpen) return;

    const onMouseDown = (e) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setIsOpen(false);
    };

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const results = useMemo(() => {
    const t = query.trim().toLowerCase();
    if (!t) return [];

    return searchData.filter((r) => {
      const title = (r?.title ?? '').toLowerCase();
      const content = (r?.content ?? '').toLowerCase();
      return title.includes(t) || content.includes(t);
    });
  }, [query, searchData]);

  return (
    <div className="ssSearchRoot" ref={rootRef}>
      {/* Icon button */}
      <button
        type="button"
        className="ssIconButton"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Search"
        aria-expanded={isOpen}
      >
        <span className="ssIconGlyph" aria-hidden="true">
          🔍
        </span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="ssSearchDropdown" role="dialog" aria-label="Search">
          <input
            className="ssSearchInput"
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />

          {query.trim() && (
            <div className="ssSearchResults">
              {results.length > 0 ? (
                results.map((r, idx) => (
                  <div key={idx} className="ssSearchResultItem">
                    <a className="ssSearchResultLink" href={r.url}>
                      {r.title}
                    </a>
                    {r.content && (
                      <p className="ssSearchResultSnippet">
                        {r.content.slice(0, 120)}…
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <p className="ssSearchResultEmpty">No results found.</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchButton;
