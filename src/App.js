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
import OmniSupport from './pages/services/omni_support.js';
import VirtualLearning from './pages/services/virtual_learning.js';
import AccountingAndBookkeepingServices from './pages/services/accounting_and_bookkeeping_services.js';
import DataManagement from './pages/services/data_management.js';
import WebsiteDesignDevelopment from './pages/services/website-design_development.js';
import ContentWriting from './pages/services/content_writing.js';

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
						<Route path='/service-omni-support' element={<OmniSupport />} />
						<Route path='/service-virtual-learning' element={<VirtualLearning />} />
						<Route path='/service-accounting-and-bookkeeping-services' element={<AccountingAndBookkeepingServices />} />
						<Route path='/service-data-management' element={<DataManagement />} />
						<Route path='/service-website-design-development' element={<WebsiteDesignDevelopment />} />
						<Route path='/service-content-writing' element={<ContentWriting />} />
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
