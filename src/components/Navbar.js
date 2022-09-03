function Navbar() {
  const navbar = (
    <nav id='navbar'>
      <a href='#'>moja firma</a>

      <div className='links'>
        <a href='#o-nas'>o nas</a>
        <a href='#oferta'>oferta</a>

        <a className='disabled-link' href='#'>
          kontakt
        </a>
      </div>
    </nav>
  );

  return navbar;
}

export default Navbar;
