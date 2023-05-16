import './App.css';
import search from './icons/search.svg';
// import chevron from './icons/chevron.svg';
export default function Main() {
  return(
    <main>
      <div>
        <div class="search">
          <div class = "search-ul">
              <input type="text" class="search-bar" placeholder="Location"/>
              <button class="searchbutton"> <img src={search}  alt="search" /> </button>
          </div>
        </div>
      </div>
    </main>
  )
}
