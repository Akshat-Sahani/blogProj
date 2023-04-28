import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className="sidebarItem">
        <span className="sidebartitle">ABOUT ME</span>
        <img src="" alt="" />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Qui officia adipisci, autem ducimus repudiandae 
        </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebartitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebartitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i></div>
      </div>
    </div>
  )
}
