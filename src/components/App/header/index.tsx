import logo from '../../../logo.svg';
const Header = ({ children }: any) => (
    <header className="App-header">
        <div role="heading" aria-level={2}>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
        </p>
            <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="App-link"
            >
                Learn React
        </a>
        </div>
        {children}
    </header>
)
export default Header