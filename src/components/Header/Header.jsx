import './Header.css';

const Header = ({onCreate}) => {
  return (
    <header className='header'>
      <h1>Web Users</h1>
      <button onClick={() => onCreate()}>Create a new form</button>
    </header>
  );
}

export default Header;