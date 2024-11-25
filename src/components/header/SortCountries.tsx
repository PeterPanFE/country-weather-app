import { dropdownIcon, selectContainer, selectLabel, selectStyle } from "./styles";

interface SortCountriesProps {
    onSortBy: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SortCountries = ({
    onSortBy
}: SortCountriesProps) => {
    return (
        <div style={selectContainer}>
            <label style={selectLabel}>Sort by: </label>
            <select onChange={onSortBy} style={selectStyle}>
                <option value="name">Name</option>
                <option value="capital">Capital</option>
                <option value="awsRegion">awsRegion</option>
            </select>
            <span style={dropdownIcon}>&#9662;</span> 
        </div>

    )
}

export default SortCountries
