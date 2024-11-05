import { memo } from "react";
import "./Pagination.scss";

interface PaginationProps {
    page: number;
    onPrevious: () => void;
    onNext: () => void;
}

export const Pagination = memo(
    ({ page, onPrevious, onNext }: PaginationProps) => {
        return (
            <div className="pagination">
                <button
                    className="pagination-btn__previous"
                    onClick={onPrevious}
                    disabled={page === 0}
                >
                    Previous
                </button>
                <p>{page + 1}</p>
                <button className="pagination-btn__next" onClick={onNext}>
                    Next
                </button>
            </div>
        );
    }
);
