import search from './icons/search.svg';
import Select from 'react-select';
import styled from 'styled-components';
import { useEffect, useMemo, useState } from 'react';
import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Categories as cate  } from '../data/categories';




const SelectCategory = () => {
   
    const [ data, setData ] = useState({});
    const [ selectedOption, setSelectedOption] = useState([null]);
    

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