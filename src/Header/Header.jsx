import './Header.css'
export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="headerTitles">
          <span className='headerTitleSm'>React and Node</span>
          <span className='headerTitleLg'>Blog</span>
        </div>
        <img className = 'headerImg' src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=
                                          MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
      </div>
    </div>
  )
}
