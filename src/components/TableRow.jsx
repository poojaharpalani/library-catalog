import { Link } from "react-router-dom";

const TableRow = ({ book }) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors duration-150">
      {/*  book title with a link to the details page */}
      <td className="px-6 py-4 whitespace-nowrap">
        <Link
          to={`/books/${book.id}`} // Navigating to the book details page
          className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
        >
          {book.title}
        </Link>
      </td>
      {/*  author of the book */}
      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
        {book.author}
      </td>
      {/*  genre of the book */}
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700">
          {book.genre}
        </span>
      </td>
      {/*  availability status of the book */}
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            book.available === "Available" || book.available === "Yes"
              ? "bg-green-100 text-green-800" // Green background if available 
              : "bg-red-100 text-red-800" // Red background if not available 
          }`}
        >
          {book.available}
        </span>
      </td>

      {/*  borrow count for the book */}
      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
        {book.borrowCount}
      </td>
    </tr>
  );
};

export default TableRow;
