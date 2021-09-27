import './App.css';
import Header from './Header.js'
import Counter from './Counter.js'
import Button from './Button.js'
import Link from './Link.js'
import Footer from './Footer.js'

function App() {
  return (
    <div className="app">
      <Header />
      <section className="container">
        <Counter />
        <Button />
        <Link />
      </section>
      <Footer />
    </div>
  );
}

export default App;
