import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Services from './pages/services';
import FrontEnd from './component/Layout/Frontend/FrontEnd';
import Error from './pages/error.js';
import Blog from './pages/blog.js';
import Gallery from './pages/gallery.js';
import Career from './pages/career.js';

function App() {
	return (
		<div className="App">
			
			<Router>
				<Routes>
					<Route path='/' element={<FrontEnd />}>
						<Route path='/' element={<Index />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/services' element={<Services />} />
						<Route path='/blog' element={<Blog />} />
						<Route path='/gallery' element={<Gallery />} />
						<Route path='/career' element={<Career />} />
						
						<Route path='*' element={<Error />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
