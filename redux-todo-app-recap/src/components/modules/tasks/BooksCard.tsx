

export default function BooksCard({book}) {
  return (
    <div className="flex justify-center items-center border-2 border-green-500">
        <div className="flex flex-col text-2xl justify-between items-center">
            <h3>{book.title}</h3>
            <h3>{book.description}</h3>
            <h3>{book.author}</h3>
            <h3>{book.isbn}</h3>
            <h3>{book.isCompleted}</h3>
        </div>
    </div>
  );
}