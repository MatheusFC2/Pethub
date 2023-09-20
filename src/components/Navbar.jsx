function NavBar(){
    return(
        <>
            <header className="flex w-screen items-center justify-between px-20 py-7 shadow-md">
                <div className="flex align-middle">
                    <div className="w-48 h-10">
                        <img src="./src/images/logo.svg" alt="" />
                    </div>
                    <div id="menu" className="pl-4 flex">
                        <ul className="flex text-lg font-semibold space-x-4 text-gray-500 ">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Encontrar Herói</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Como funciona</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ajuda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Quero ser herói</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="conta" className="">
                    <a href="">
                        <span className="text-xl font-semibold transition ease-in-out delay-150 text-gray-400 hover:text-gray-600 duration-300">Criar conta ou entrar</span>
                    </a>
                </div>
            </header>
        </>
    )
}

export default NavBar;