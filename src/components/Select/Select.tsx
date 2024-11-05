import { useEffect, useState, memo } from "react";
import axios from "axios";
import { __API__ } from "../../api";
import "./Select.scss";

interface TypeOption {
    name: string;
    url: string;
}

interface SelectProps {
    selectedType: string;
    onSelectType: (type: string) => void;
}

export const Select = memo(({ selectedType, onSelectType }: SelectProps) => {
    const [types, setTypes] = useState<TypeOption[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await axios.get(`${__API__}type`);
                setTypes(response.data.results);
            } catch (error) {
                console.error("Error loading pokemon types", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTypes();
    }, []);

    return (
        <div className="custom-select">
            {isLoading ? (
                <p>Loading types...</p>
            ) : (
                <select
                    value={selectedType}
                    onChange={(e) => onSelectType(e.target.value)}
                >
                    <option value="">Select Pokemon type</option>
                    {types.map((type) => (
                        <option key={type.name} value={type.name}>
                            {type.name}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
});
