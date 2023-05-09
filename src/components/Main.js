import './App.css';
import search from './icons/search.svg';
import chevron from './icons/chevron.svg';
export default function Main() {
  return(
    <main>
      <div>
        <div class="search">
          <button class="Cate-button">Category <img src={chevron}  alt="chevron"/> </button>
          <div class = "search-ul">
              <input type="text" class="search-bar" placeholder="Location"/>
              <button class="searchbutton"> <img src={search}  alt="search" /> </button>
          </div>
        </div>
      </div>
    </main>
  )
}
