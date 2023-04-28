import "./TopBar.css"

export default function TopBar() {
  return (
    <div className='topbar'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="toplist">
          <li className="toplistItem">HOME</li>
          <li className="toplistItem">ABOUT US</li>
          <li className="toplistItem">CONTACT</li>
          <li className="toplistItem">WRITE</li>
          <li className="toplistItem">LOG OUT</li>
          

        </ul>
      </div>
      <div className="topRight">
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        <img className = "topImage" src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt=""/>
      </div>
    </div>
  )
}
