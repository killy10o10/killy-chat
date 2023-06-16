import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

function Home() {
  return(
    <div className="home">
      <h1>Killy chat</h1>
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home;