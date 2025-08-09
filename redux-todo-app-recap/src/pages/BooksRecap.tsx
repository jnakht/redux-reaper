import BooksCard from "@/components/modules/tasks/BooksCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";



export default function BooksRecap() {


    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] =  useState(0);

    const handlePrevious = () => {
        setPage((prev) => {
            if (prev === 1) return prev;
            return prev - 1;
        })
    }
    const handleNext = () => {
        setPage((prev) => {
            if (prev === pageCount) return prev;
            return prev + 1;
        })
    }

    useEffect( () => {
        const fetchBooks = async (pageA, limitA) => {
        const res = await fetch(`http://localhost:8080/api/books?page=${pageA}&limit=${limitA}`)
        const json = await res.json();
        console.log(json);
        setData(json.data);
        setPageCount(json.totalPages);
        }
        fetchBooks(page, 10);
    }, [page])
  return (
    <div>
        {
            data?.map(book => 
                <BooksCard book={book}></BooksCard>
            )
        }
        <footer className="flex gap-4 items-center justify-end mr-10 mb-20">
            <Button disabled={page === 1} onClick={handlePrevious}>prev</Button>
            <Button disabled={page === pageCount} onClick={handleNext}>next</Button>
            <select
                className="bg-black"
                value={page}
                onChange={(e) => 
                    setPage(e.target.value)
                }
            >
                {
                    Array(pageCount)
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