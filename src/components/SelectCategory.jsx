import search from './icons/search.svg';
import Select from 'react-select';
import styled from 'styled-components';
import { useEffect, useMemo, useState } from 'react';
import { db } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';


const SelectCategory = () => {
    const [ val, setVal ] = useState([]);
    // const handleCategoryChoice = (selected) => {
       
    // }

    const options = useMemo(()=> 
    onSnapshot(collection(db, "categories"), (snapshot) => 
      setVal(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    )
  , [])


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