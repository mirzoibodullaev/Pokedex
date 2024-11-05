import { memo } from "react";
import "./Search.scss";

interface SearchProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

export const Search = memo(({ searchTerm, onSearchChange }: SearchProps) => {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
            />
        </div>
    );
});
