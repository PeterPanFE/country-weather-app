import { inputStyle, searchContainer, searchIcon } from "./styles"

interface SearchCountriesProps {
    value: string,
    onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void

};

const SearchCountries = ({
    value,
    onSearch
}: SearchCountriesProps) => {
    return (
        <div style={searchContainer}>
            <style>
                {`
                input::placeholder {
                    color: #ddd
                }
                `}
            </style>
            <input
                type="text"
                placeholder="Search countries"
                value={value}
                onChange={onSearch}
                style={inputStyle}
            />
            <span style={searchIcon}>&#128269;</span>
        </div>

    )
}

export default SearchCountries;