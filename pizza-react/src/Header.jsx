import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
function Header() {
    return (
        <header >
            <div class="container" >
                <div class="col-3">
                    <h1 id="Logo">
                        Pizza House
                    </h1>
                </div>
                <div class="col-3">
                    <ul >
                        <div id="ulist">
                            <li>
                                Home
                            </li>
                            <li>
                                About Us
                            </li>
                            <li>
                                Contact
                            </li>
                        </div>
                    </ul>
                </div>
                <form class="form-inline d-flex ms-auto col-4">
                    <div class="col-7">
                        <input class="form-control me-sm-4" type="search" placeholder="search" aria-label="Search" id="SearchBox" />
                    </div>
                    <div class="btn">
                        <button class="btn btn-danger" type="submit" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                color="white ">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            
        </header>
    );
}
export default Header