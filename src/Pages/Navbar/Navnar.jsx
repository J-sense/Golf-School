import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logos from '../../assets/logox1.png'
import logo from '../../assets/footer-logo-1.png'
import { CgProfile } from 'react-icons/cg';
import { AuthContext } from '../../Provider/AuthProvider';
const Navnar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const handelLogOut = () => {
        logOut()
            .then(() => { })
        //  .catch(err =>console.log(err))
    }
    const navOption = <>
        <li className='text-white'><Link to='/'>Home</Link></li>
        <li className='text-white'><Link to='/instractors'>Instructors</Link></li>
        <li className='text-white'><Link to='/classes'>Classes</Link></li>
        {
             user &&
            <li className='text-white'><Link to='/dashboard'>Dashboard</Link></li>

        }
  
    </>
    return (
        <div className=''>
            <div className="navbar fixed text-black z-50 bg-opacity-30 font-bold px-8" >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><Link to='/'><img className=' hidden sm:block' src={logo} alt="" /></Link></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                {user &&
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    src={user.photoURL}
                                    alt=""
                                    title={user.displayName}
                                    className="avatar-img"
                                />
                            </div>
                        </label>
                    }

                {
            user ? (
                <button onClick={handelLogOut} className="btn btn-info">
                    <CgProfile className='text-white' size={30}/>
                </button>
            ) : (
                <li>
                    <Link to="/login">Login</Link>
                </li>
            )
        }
                   
                </div>
            </div>
        </div>
    );
};

export default Navnar;