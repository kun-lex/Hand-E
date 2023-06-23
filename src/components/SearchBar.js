import { useState } from "react";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };
    if (searchTerm.length > 0) {
        adddata.filter((data) => {
            return data.name.match(searchTerm);
        })
    }
    return (
        <div>
            <input
                type="search"
                placeholder="Resturants, Dentist, Gyms......."
                onChange={handleChange} 
                value={searchTerm}
            />
            <table>
                <tr>
                    <th>data</th>
                </tr>
                {adddata.map((data, index) =>{
                    <div>
                        <tr>
                            <td>{data.name}</td>
                        </tr>
                    </div>
                })}
            </table>
        </div>
    )
}
export default SearchBar;