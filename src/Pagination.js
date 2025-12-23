import { useEffect, useState } from "react";

function SearchResults() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(`/api/search?page=${page}&limit=10`);
    const data = await res.json();

    setItems(prev => [...prev, ...data.results]);
    setHasMore(data.results.length > 0);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      {items.map(item => (
        <div key={item.id} className="card">{item.title}</div>
      ))}

      {hasMore && (
        <button
          onClick={() => setPage(p => p + 1)}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}
export default SearchResults;