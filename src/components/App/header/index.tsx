import logo from '../../../logo.svg';
const Header = ({children}: any) => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            role="heading" aria-level={1}
        >
            Learn React
        </a>
        {children}
    </header>
)
export default Header