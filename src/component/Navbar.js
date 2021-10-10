import './Navbar.css';

function Navbar() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a className='svg' href="#">
                            <svg viewBox="0 0 162 52" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M43.6437 -3.57699e-07C48.1632 -1.60147e-07 51.8269 3.66374 51.8269 8.1832L51.8269 25.9135C51.8269 40.2251 40.225 51.8269 25.9134 51.8269C11.6018 51.8269 -2.08318e-05 40.2251 -2.02062e-05 25.9135C-1.95806e-05 11.6019 11.6018 -1.75829e-06 25.9134 -1.13271e-06L43.6437 -3.57699e-07Z" fill="#0052CC" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8606 21.6515C12.7869 19.5778 12.7869 16.2155 14.8606 14.1418C16.9344 12.068 20.2966 12.068 22.3704 14.1418L37.429 29.2003C39.5028 31.2741 39.5028 34.6363 37.429 36.7101C35.3552 38.7839 31.993 38.7839 29.9192 36.7101L14.8606 21.6515ZM21.4711 36.9039C21.4711 37.7899 20.7529 38.5081 19.867 38.5081H16.6586C14.0008 38.5081 11.8461 36.3535 11.8461 33.6956C11.8461 31.0377 14.0008 28.8831 16.6586 28.8831C19.3165 28.8831 21.4711 31.0377 21.4711 33.6956V36.9039ZM31.9599 12.5946C31.074 12.5946 30.3557 13.3129 30.3557 14.1988V17.4071C30.3557 20.065 32.5104 22.2196 35.1682 22.2196C37.8261 22.2196 39.9807 20.065 39.9807 17.4071C39.9807 14.7493 37.8261 12.5946 35.1682 12.5946H31.9599Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                    <div className="col-6">
                        <nav className="navbar navbar-expand-lg navbar-white ">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link nav-text" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-text" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-text" href="#">Downloads</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-text" href='#'>Contact us</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col social">
                        <a className="social" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="social" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="social" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
