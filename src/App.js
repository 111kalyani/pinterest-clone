import MenuContainer from './components/MenuContainer';
import './App.css';
import { Chat, FavoriteRounded, Person, QuestionMark, Notifications } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react';
import Pin from './components/Pin';
import Data from './components/Data';


function App() {

  useEffect(() => {
    const iconAll = document.querySelectorAll(".icon");
    // console.log(iconAll);
    function setMenuActive() {
      iconAll.forEach((n) => n.classList.remove("active")
      );
      this.classList.add('active');
    }
    iconAll.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);

  return (
    <div className="App">
      <div className='menu-container'>
        <img src='https://proofmart.com/wp-content/uploads/2021/06/600-2-1.png'
          alt=''
          className='logo'></img>

        <div className='sub-menu'>
          <div>
            <MenuContainer icon={<Person></Person>} />
            <MenuContainer icon={<Notifications></Notifications>} />
            <MenuContainer icon={<Chat></Chat>} />
          </div>

          <div>
            <MenuContainer icon={<FavoriteRounded></FavoriteRounded>} />
          </div>

          <div>
            <MenuContainer icon={<QuestionMark></QuestionMark>} />
            <MenuContainer icon={<AddIcon></AddIcon>} />
          </div>

        </div>
      </div>
      <main>
        <div className='search-box'>
          <input type="text" placeholder='Search' />
          <SearchIcon></SearchIcon>
        </div>

        <div className='main-container'>
          {
            Data && Data.map((data) => (
              <Pin key={data.id}
                pinSize={data.size}
                imgSrc={data.imgSrc}
                name={data.name}
                link={data.link}></Pin>
            ))
          }


        </div>
      </main>
    </div>
  );
}

export default App;
