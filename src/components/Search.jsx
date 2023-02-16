import displayPicture from '../assets/images/dp.png';

const Search = () => (
    <div className="search">
        <div className="searchForm">
            <input placeholder="Find User"/>
        </div>
        <div className="userChat">
            <img src={displayPicture} alt=""/>
            <div className="userChatInfo">
                <span className="displayName">Criss Waddle</span>
            </div>
        </div>
    </div>
);

export default Search;