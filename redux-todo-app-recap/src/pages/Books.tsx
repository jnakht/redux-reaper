// import Loading from "@/module/loading/Loading";
import BooksCard from "@/components/modules/tasks/BooksCard";
import { useGetAllBooksQuery } from "@/redux/features/books/booksApi";


export default function Books() {

    
    const { data, error, isLoading } = useGetAllBooksQuery(undefined, {
        pollingInterval: 3000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
    });
    console.log({data});
    if (isLoading) {
        return <div className="text-2xl flex justify-center items-center">
            <h3>Loading...</h3>
        </div>
    }

  return (
    <div>
      <div className="flex flex-col gap-4 mt-10">
        {
        data?.data?.map(book => 
            <BooksCard book={book}></BooksCard>
        )
      }
      </div>
    </div>
  );
}