import { useState, useEffect, useCallback } from "react";

export const usePagination = (initialPage: number) => {
    const [page, setPage] = useState(() => {
        const savedPage = localStorage.getItem("currentPage");
        return savedPage ? parseInt(savedPage, 10) : initialPage;
    });

    useEffect(() => {
        localStorage.setItem("currentPage", page.toString());
    }, [page]);

    const handlePrevious = useCallback(() => {
        if (page > 0) setPage((prev) => prev - 1);
    }, [page]);

    const handleNext = useCallback(() => {
        setPage((prev) => prev + 1);
    }, []);

    return { page, handlePrevious, handleNext };
};