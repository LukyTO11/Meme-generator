import TrolFace from "./images/troll_face.png"

export default function Navbar() {
    return (
        <nav className="nav">
            <img src={TrolFace} alt="" className="troll_face"/>
          <h1 className="nav-title_first">Meme Generator</h1> 
          <h3 className="nav-title_second">React Course - Project 3</h3> 
        </nav>
    )
}