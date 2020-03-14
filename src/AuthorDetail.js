import React from "react";
import BookTable from "./BookTable";

const AuthorDetail = props => {
  const author = props.author;
  const authorName = `${author.first_name} ${author.last_name}`;
  const tableRows = author.books.map(book => (
    <BookTable key={book.title} book={book} authorName={authorName} />
  ));
  return (
    <div className="author col-xs-10">
      <div>
        <h3>{authorName}</h3>
        <img src={author.imageUrl} className="img-thumbnail" alt={authorName} />
      </div>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};
export default AuthorDetail;
