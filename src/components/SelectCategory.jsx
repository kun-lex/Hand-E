import search from './icons/search.svg';
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
    return(
        <div className='flex flex-col justify-center items-center' >
            <div className='hidden lg:inline-flex' >
                <div>
                    <input 
                        type='text'
                        placeholder='Search anything......'
                        name='search'
                        value={list}
                        onChange={handleSearch}
                        className='h-9 w-64 rounded-l-lg'
                    />
                    <ul>
                        {results.map((items) => (
                            <li key={items.id}>
                                <h2>{items.name}</h2>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* location search */}
                <div>
                    <input 
                        type='text'
                        placeholder='Location'
                        name='Location'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className='h-9 w-64'
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

                <button className=' flex bg-[#1D5EBF] rounded-r-lg w-10 h-9 items-center justify-center'><img src={search}  alt="search" /></button>
            </div>
            <div className='space-y-2 lg:hidden' >
            <div>
                <input 
                    type='text'
                    placeholder='Search anything......'
                    name='search'
                    value={list}
                    onChange={handleSearch}
                    className='h-7 w-64 rounded-full'
                />
                <ul>
                    {results.map((items) => (
                        <li key={items.id}>
                            <h2>{items.name}</h2>
                        </li>
                    ))}
                </ul>
            </div>

            {/* location search */}
            <div className='flex'>
                <input 
                    type='text'
                    placeholder='Location'
                    name='Location'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className='h-7 w-52 rounded-l-full'
                />
                <ul>
                    {location.map((location) => (
                        <li key={location.id}>
                            <h2>{location.name}</h2>
                            <p> {location.description2} </p>
                        </li>
                    ))}
                </ul>
                <button className=' flex bg-[#1D5EBF] rounded-r-lg w-12 h-7 items-center justify-center'><img src={search}  alt="search" /></button>
            </div>
            </div>
        </div>
    )
}
export default SelectCategory;