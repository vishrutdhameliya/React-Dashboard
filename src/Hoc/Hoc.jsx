import { Link, useNavigate } from 'react-router-dom'
import '../css/style.css'

export const Hoc = (Component1) => {

	const NewComponent = (props) => {
		const Nav = useNavigate();
		const isLogout = () => {
			localStorage.removeItem('isLogin');
			props.setisLogin(false);
			Nav("/");
		}

		return (
			<>
				<div className='d-flex'>
					<div className='sidebar text-white '>
						<p className='fs-2 text-center mt-2'>Admin</p>
						<ul>
							<Link className='li' to='/about'>About</Link>
							<Link className='li' to='/register'>Register</Link>
							<Link className='li' to='/setting'>Setting</Link>
							<Link className='li' to='/contact'>Contact</Link>
						</ul>
					</div>
					<div className='header'>
						<div className="d-flex p-2 inp justify-content-end">
							<input type="text" className='w-25' placeholder='Search....' />
							<button className='btn btn-danger  ms-2' onClick={isLogout}>LogOut</button>
						</div>
						<div className='p-3 fs-1 m-1'>
							<Component1 />
						</div>
					</div>
				</div>
			</>
		)
	}
	return NewComponent
}