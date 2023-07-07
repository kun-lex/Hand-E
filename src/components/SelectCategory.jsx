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
                className='w-full '
            />
        
            <Select 
                type="text"
                components={{
                    DropdownIndicator:() => null, IndicatorSeparator:() => null
                }}
                className="text-black w-full rounded-[5px]"
                placeholder="Location"
            />

            <button className=' flex bg-[#081E40] rounded-[5px] w-9 h-9 items-center justify-center'><img src={search}  alt="search" /></button>
        </WrapStyle>
    )
}
export default SelectCategory;