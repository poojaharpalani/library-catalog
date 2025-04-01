const TableHeader = () => {
  return (
    <thead>
      <tr className="bg-gray-100 border-b">
        {/*  columns for the table */}
        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Title
        </th>
        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Author
        </th>
        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Genre
        </th>
        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Availability
        </th>
        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Borrow Count
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
