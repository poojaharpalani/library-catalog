import { useEffect, useState } from "react";

import SearchBar from "./searchBar";
import SortButton from "./SortButton";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
//imports

const Table = () => {
  // State to hold books data
  const [books, setBooks] = useState([]);
  // State to manage sorting order
  const [sortOrder, setSortOrder] = useState("asc");

  // Fetching books data when the component mounts
  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data)) // Set the fetched books data to state
      .catch((err) => console.error("Error fetching books:", err)); // Catch any errors while fetching
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  // Sort the books based on the selected order (ascending or descending)
  const sortedBooks = [...books].sort(
    (a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title) // Sort in ascending order if 'asc'
        : b.title.localeCompare(a.title) // Sort in descending order if not 'asc'
  );

  return (
    <div className="p-5 max-w-6xl mx-auto bg-gray-50 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Library Catalog</h2>
        <SortButton setSortOrder={setSortOrder} />{" "}
        {/* Sort button to toggle sort order */}
      </div>
      <SearchBar /> {/* Search bar component to filter books */}
      <div className="overflow-hidden shadow-lg rounded-xl border border-gray-200">
        <table className="min-w-full bg-white">
          <TableHeader /> {/* Table header with column names */}
          <tbody className="divide-y divide-gray-200">
            {sortedBooks.map((book) => (
              <TableRow key={book.id} book={book} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-gray-500 text-sm">
        {/* total number of books in the catalog */}
        Showing {sortedBooks.length} books in the catalog
      </div>
    </div>
  );
};

export default Table;
