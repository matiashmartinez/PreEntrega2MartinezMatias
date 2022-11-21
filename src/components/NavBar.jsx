const NavBar = () => {
  return (
    <div className="z-10 navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">SmartHard</a>
      </div>
      <div className="flex fixed w-screen justify-center items-center text-center">
        <ul className="menu menu-horizontal bg-base-100 rounded-box p-2">
          <li>
            <a>Nosotros</a>
          </li>
          <li>
            <a>PC Gamers</a>
          </li>
          <li>
            <a>Consolas Gamers</a>
          </li>
          <li>
            <a>Videojuegos</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </div>
      <div className="flex-none">
      <h3>Carrito</h3>
        <div className="dropdown dropdown-end">
        
          <label tabIndex={0} className="btn btn-ghost btn-circle">
         
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">1</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">
                  Ver carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
