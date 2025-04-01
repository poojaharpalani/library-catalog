import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const BookDetails = () => {
  const { id } = useParams(); // Getting book id from the URL
  const [book, setBook] = useState(null); // State to hold the book data
  const navigate = useNavigate();

  // Fetch book details when the component mounts
  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBook = data.find((b) => b.id.toString() === id); // condition to check id
        setBook(foundBook); // Setting the book data
      })
      .catch((err) => console.error("Error fetching book details:", err)); // exception handling
  }, [id]); // Re-run the effect if the id changes

  if (!book) return <p>Loading book details...</p>; // loading message until data is available

  return (
    <div className="p-5">
      {/* Back button to navigate to the homepage */}
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        Back to Home
      </button>

      {/* Displaying book details */}
      <h2 className="text-2xl font-bold">{book.title}</h2>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Genre:</strong> {book.genre}
      </p>
      <p>
        <strong>Availability:</strong> {book.available}
      </p>
      <p>
        <strong>Borrow Count:</strong> {book.borrowCount}
      </p>
      <p>
        <strong>ISBN:</strong> {book.isbn}
      </p>
      <p>
        <strong>Publisher:</strong> {book.publisher}
      </p>

      <div>
        <strong className="text-lg font-semibold">Borrowing History:</strong>
        {/* Displaying the borrowing history if available */}
        {book.borrowingHistory && book.borrowingHistory.length > 0 ? (
          <ul>
            {book.borrowingHistory.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        ) : (
          <p>No borrowing history available for this book.</p>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
