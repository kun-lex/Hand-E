import './App.css';
import search from './icons/search.svg';
// import chevron from './icons/chevron.svg';
import { useEffect, useState } from 'react';
export default function Main() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selection, setSelection] = useState("");
  function Drpbtn(){
    const options = [
    {
      value: "Susan",
      label: "Susan",
    },
    {
      value: "Rahul",
      label: "Rahul",
    },
    {
      value: "Kamla",
      label: "Kamla",
    },
  ];
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    if (e.target.innerText !== selection && e.target.innertext !== ""){
      setSelection(e.target.innerText);
    }
    setSearchText("");
    setAnchorEl(null);
  };
  const handSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    setSelection(options[0],label);
  }, [])
  };
  function renderDashboardMenu(){
    const displayOptions = options
      .map((item) => {
        if (item.label.toLowerCase().includes(searchText.toLowerCase())){
          return item;
        }
      })
      .filter((item) => item !== undefined);
    function renderOption(value){
      if (selection === value) {
        return (
          <div className={classes.checkedItem}>
            <ChckIcon />
            {value}
          </div>
        );
      }
      return value;
    }
    return (
      <Menu 
      anchorEl={anchorEl}
      keepMounted={true}
      open={!!anchorEl}
      onClose={handleClose}
      className={classes.dashboardSelectMenu}
      anchorReference="anchorPosition"
      anchorPosition={{ top: 110, left: 240 }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      >
        <MenuItem
        className={classes.searchBarContainer}
        disableTouchRipple={true}
        >
          <div class={classes.search}>
            <div class={classes.searchIcon}>
              <i class="fas fa-search" />
            </div>
            <inputBase 
              placeholder="Search anything or place"
              class={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={handleSearchChange}
              value={searchText}
            />
          </div>
        </MenuItem>
        <Divider />
        {displayOptions.map((item, index) => {
          return (
            <div key={index}>
              <MenuItem onClick={(e) => handleClose(e)}>
                {renderOption(item.label)}
              </MenuItem>
              <Divider class={classes.menuDivider}/>
            </div>
          )
        })}
      </Menu>
    )
  }
  return(
    <main>
      <div>
        <div class="search">
          <button type="button" class={classes.DropDownButton} onClick={handleMenuOpen}> {selection} <i class="fas fa-chevron-down" /> </button>{renderDashboardMenu()}
          <div class = "search-ul">
              <input type="text" class="search-bar" placeholder="Location"/>
              <button class="searchbutton"> <img src={search}  alt="search" /> </button>
          </div>
        </div>
      </div>
    </main>
  )
}
