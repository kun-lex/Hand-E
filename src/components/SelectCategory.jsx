import search from './icons/search.svg';
import Select from 'react-select';
import styled from 'styled-components';


const SelectCategory = () => {
    const WrapStyle = styled.div`
        @media (max-width : 700px) {
            display : flex;
            flex-wrap : wrap;
            flex-direction : column;
            align-items : center;
            justify-content : center;
            width : 100%;
        }
        @media (min-width: 700px ){
            display : flex;
            align-items : center;
            justify-content : center;
            width : 100%;
        }
    `;
    return(
        <WrapStyle>
            
            <Select
            placeholder='Search anything'
            className=''
            />
        
            <input 
                type="text"
                className="text-black  rounded-[2px]"
                placeholder="Location"
            />

            <button className='bg-[#081E40] hover: bg-[#081E40] ease-in-out duration-200 w-9 h-9 items-center justify-center'> <img src={search}  alt="search" /> </button>
        </WrapStyle>
    )
}
export default SelectCategory;