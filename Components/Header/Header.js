
const Header = () => {

    const menulist = <> 
        <li className="mr-[43px]">Home</li>
        <li className="mr-[43px]">Program</li>
        <li className="mr-[43px]">Blog</li>
        <li className="mr-[43px]">About us</li>
    </>
    return (
        <div className="navbar mt-[10px] w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menulist}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><span className="bg-blue-500 rounded-[10px] mr-2 p-1 text-white">Gym</span> <span className="text-blue-500">baran</span></a>
         
        </div>
        <div className="navbar-end hidden  lg:flex">
          <ul className="menu menu-horizontal px-3">
            {menulist}
          </ul>
        
          <button className="btn bg-[#264373]  capitalize text-[16px] h-[50px] w-[114px]">Log in</button>
        </div>
    
      </div>
    );
};

export default Header;