import search from './icons/search.svg';
import Select from 'react-select';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { db, database } from '../firebase';
import { ref, startAt, endAt } from 'firebase/database';
import { getDocs, collection, orderBy } from 'firebase/firestore';



const SelectCategory = () => {
   
    const [ data, setData ] = useState({});
    const [ selectedOption, setSelectedOption] = useState([null]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    
    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchTerm(value);

        // Perform the search query on Firebase Realtime Database
        
        ref(database, 'name') // Replace 'items' with the key of your Firebase database node where the data is stored
        .orderBy('items') // Replace 'name' with the key of the property you want to search
        .startAt(value)
        .endAt(value + '\uf8ff') // This is for a case-insensitive search
        .once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
            const data = snapshot.val();
            const results = Object.values(data);
            setSearchResults(results);
            } else {
            setSearchResults([]);
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    };
    useEffect(() => {
        const fetchData = async () => {
        const collectionRef = collection(db, "categories")
        try {
        const snapshot = await getDocs(collectionRef);
        const fecthedData = snapshot.docs.map((doc) => ({
            value: doc.id,
            label: doc.data().Gyms,
        }));
        setData(fecthedData);
    }catch (error) {
        console.error('Error fecthing data: ', error);
    }
    }
    fetchData();
    }, []);

    const handleChange = (selected) => {
        setSelectedOption(selected);
    };
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

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

            {/* this is the main search style */}
             {/* <div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search..."
                />
                <ul>
                    {searchResults.map((item) => (
                    <li key={item.id}>{item.name}</li>,
                    <li>Home Service</li>
                    ))}
                    
                </ul>
            </div> */}
                    
            <Select
                placeholder='Search anything...'
                components={{
                    DropdownIndicator:() => null, IndicatorSeparator:() => null
                }}
                className='w-full rounded-full '
                options={options}
                value={selectedOption}
                onChange={handleChange}
            />
        
            <Select 
                type="text"
                components={{
                    DropdownIndicator:() => null, IndicatorSeparator:() => null
                }}
                className="text-black w-full rounded-l-lg"
                placeholder="Location"
            />

            <button className=' flex bg-[#081E40] rounded-r-lg w-20 h-9 items-center justify-center'><img src={search}  alt="search" /></button>
        </WrapStyle>
    )
}
export default SelectCategory;