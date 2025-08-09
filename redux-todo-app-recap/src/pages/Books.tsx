// import Loading from "@/module/loading/Loading";
import BooksCard from "@/components/modules/tasks/BooksCard";
import { Button } from "@/components/ui/button";
import { useGetAllBooksQuery } from "@/redux/features/books/booksApi";
import { useEffect, useState } from "react";


export default function Books() {


    // const { data, error, isLoading } = useGetAllBooksQuery(undefined, {
    //     pollingInterval: 3000,
    //     refetchOnFocus: true,
    //     refetchOnMountOrArgChange: true,
    //     refetchOnReconnect: true,
    // });
    // console.log({data});
    // if (isLoading) {
    //     return <div className="text-2xl flex justify-center items-center">
    //         <h3>Loading...</h3>
    //     </div>
    // }

    const [data, setData] = useState(null);
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)


    const handlePrevious = () => {
        setPage((prev) => {
            if (prev === 1) return prev;
            return prev - 1;
        });
    }
    const handleNext = () => {
        setPage((prev) => {
            if (prev === pageCount) return prev;
            return prev + 1;
        });
    }

    useEffect(() => {
        const fetchBooksData = async (pageNumber, docLimit) => {
            const res = await fetch(`http://localhost:8080/api/books?page=${pageNumber}&limit=10`)
            const json = await res.json();
            // const data = await json.data;
            // setData(data.data);
            setData(json?.data);
            setPageCount(json?.totalPages)
            console.log(json);
        }
        fetchBooksData(page, 10);
    }, [page])


    return (
        <div>
            <div className="flex flex-col gap-4 mt-10">
                {/* {
        data?.data?.map(book => 
            <BooksCard book={book}></BooksCard>
        )
      } */}

                {
                    data?.map(book =>
                        <BooksCard book={book}></BooksCard>
                    )
                }

            </div>
            <footer className="mr-10 flex gap-4 justify-end mb-20">
                <Button disabled={page === 1} className="text-2xl" onClick={handlePrevious}>prev</Button>
                <Button disabled={page === pageCount} className="text-2xl " onClick={handleNext}>next</Button>

                <select
                    className="bg-black"
                    value={page}
                    onChange={(event) => {
                        setPage(event.target.value)
                    }}
                >
                    {Array(pageCount)
                        .fill(null)
                        .map( (_, index) => {
                            return <option key={index}>{index + 1}</option>
                        })
                    }
                </select>
            </footer>
        </div>
    );
}