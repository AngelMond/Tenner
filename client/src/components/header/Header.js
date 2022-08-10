export default function Header() {
    return (

        <header class="row">
            <nav id='nav' class="navbar navbar-expand-sm fixed-top justify-content-center">
                <div class="container row d-flex flex-wrap  justify-content-between">  {/* <!--div centrado centrar contenido dentro --> */}
                    <div className='col-2'>
                        {/* <!--LOGO Tenner--> */}
                        <a href="/" id="logo-tenner" class="navbar-links fs-1 fw-bold navbar-brand col-auto">Tenner</a>
                        
                        {/* <!--Button to collapse navbar--> */}
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbar-container"
                            aria-controls="navbar-container"
                            aria-expanded="false"
                            aria-label="show / hide navbar-container"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    {/* Search Input
                    <div className='search-input-container d-flex  rounded col-auto p-0 align-items-center ps-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search " viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        <form className='search-form col-auto h-100'>
                            <input id='search-input' className='ps-3 pe-2 ms-2' type='search' name='' placeholder='prueba' />
                            <button className='fw-bold px-3 h-100 search-button rounded-end text-white' type='submit'>
                                Search
                            </button>
                        </form>
                    </div> */}

                    <div className='col-auto'>
                        {/* <!--Navbar--> */}
                        <div class="row  collapse navbar-collapse" id="navbar-container">
                            <ul class="col-12 col-sm-6 col-md-3 navbar-nav fs-3 ">
                                <li class="nav-item"><a href='/home' class="navbar-links nav-link fs-4">Home</a></li>
                                <li class="nav-item"><a href='/login' class="navbar-links nav-link fs-4">Login</a></li>
                                <li class="nav-item"><a href='/sign up' class="navbar-links nav-link fs-4">SignUp</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}