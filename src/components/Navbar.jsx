import displayPicture from '../assets/images/dp.png';

const Navbar = () => (
    <div className="navbar">
        <span className="logo">Killy chat</span>
        <div className="user">
            <img src={displayPicture} alt="display picture"/>
            <span>Quami</span>
            <button>Logout</button>
        </div>
    </div>
);

export default Navbar;