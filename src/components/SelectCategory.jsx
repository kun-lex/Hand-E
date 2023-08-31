import search from './icons/search.svg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';



const SelectCategory = () => {
    const [ query, setQuery ] = useState('');
    const [ list, setList ] = useState('');
    const [ location, setLocation] = useState([]);
    const [ results, setResults ] = useState([]);

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setList(searchTerm);

        axios.get(`/api/search-item/?q=${searchTerm}`)
        .then((Response) => {
            setResults(Response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    }
    
    useEffect(() => {
        axios.get(`/api/locations/?search${query}`)
            .then((Response) => {
                setLocation(Response.data);
            })
            .catch ((error) => {
                console.log(error);
            })
    }, [query]);


   
    const WrapStyle = styled.div`
        @media (max-width : 700px) {
            display : flex;
            flex-wrap : wrap;
            flex-direction : column;
            align-items : center;
            justify-content : center;
        }
        @media (min-width: 700px ){
            display : flex;
            align-items : center;
            justify-content : center;
        }
    `;
    return(
        <WrapStyle>

            {/* location search */}
            <div>
                <input 
                    type='text'
                    placeholder='Location'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <ul>
                    {location.map((location) => (
                        <li key={location.id}>
                            <h2>{location.name}</h2>
                            <p> {location.description2} </p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <input 
                    type='text'
                    placeholder='Search anything......'
                    value={list}
                    onChange={handleSearch}
                />
                <ul>
                    {results.map((items) => (
                        <li key={items.id}>
                            <h2>{items.name}</h2>
                        </li>
                    ))}
                </ul>
            </div>

            <button className=' flex bg-[#081E40] rounded-r-lg w-20 h-9 items-center justify-center'><img src={search}  alt="search" /></button>
        </WrapStyle>
    )
}
export default SelectCategory;