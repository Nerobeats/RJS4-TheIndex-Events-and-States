import React from "react";

const BookTable = props => {
  const book = props.book;
  return (
    <tr>
      <td>{book.title}</td>
      <td>{props.authorName}</td>
      <td>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  );
};
export default BookTable;
