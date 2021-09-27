const Header=()=>{
  const date = new Date().toLocaleString()
  return (
    <header>
      <h1>React Tidbits</h1>
      <p>Date: <span>{date}</span></p>
    </header>
  );
}

export default Header;
