<<<<<<< HEAD
=======
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
//App.js

>>>>>>> 33dfacf6eaa830162cd66d60fb2c88d9f5afb184
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;