// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './pages/About';
// import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    // <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Layout />}> 
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    // </Provider>
  );
}

export default App;