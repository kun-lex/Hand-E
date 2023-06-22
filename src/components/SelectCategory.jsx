import search from './icons/search.svg';
import Select from 'react-select'


const SelectCategory = () => {
    return(
        <div className='flex justify-center items-center flex-wrap mt-10'>
            <Select
            style={{

            }}
            placeholder='Search anything'
            className='w-[20%] h-9'
            />
            <input 
            type="text"
            className="text-black w-[20%] h-9 rounded -[2px]"
            placeholder="Location"
            />
            <button className='bg-[#081E40] hover: bg-[#081E40] ease-in-out duration-200 w-9 h-9 items-center justify-center'> <img src={search}  alt="search" /> </button>
        </div>
    )
}
export default SelectCategory;