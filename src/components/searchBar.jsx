import { useState } from "react";

const SearchBar = ({ books = [], setFilteredBooks }) => {
  const [filter, setFilter] = useState(""); // State to hold the filter query

  // Handle search functionality
  const handleSearch = (e) => {
    const query = e.target.value; // Getting the input 
    setFilter(query); // Updating the filter state

    const filtered = Array.isArray(books)
      ? books
          .filter(
            (book) => book.title.toLowerCase().includes(query.toLowerCase()) // Filtering books based on title
          )
          .sort((a, b) => {
            // Sorting books so that the filtered book appears at the top
            const aIncludes = a.title
              .toLowerCase()
              .startsWith(query.toLowerCase());
            const bIncludes = b.title
              .toLowerCase()
              .startsWith(query.toLowerCase());
            if (aIncludes && !bIncludes) return -1; // If 'a' includes the filter and 'b' doesn't, 'a' comes first
            if (!aIncludes && bIncludes) return 1; // If 'b' includes and 'a' doesn't, 'b' comes first
            return a.title.localeCompare(b.title); // Otherwise, sort alphabetically
          })
      : [];

    setFilteredBooks(filtered); // Setting the filtered books state to the parent component
  };

  return (
    <div className="mb-4">
      {/* Input field for the search bar */}
      <input
        type="text"
        placeholder="Search books..."
        value={filter}
        onChange={handleSearch} // Trigger search on input change
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
      />
    </div>
  );
};

export default SearchBar;
