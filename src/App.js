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
import E_CommerceServices from './pages/services/e-commerce_services.js';
import VoiceSupport from './pages/services/voice_support.js';
import DigitalMarketing from './pages/services/digital_marketing.js';

import How_digital_marketing_is_different_from_traditional_marketing from './pages/blog/how_digital_marketing_is_different_from_traditional_marketing.js';
import How_digital_marketing_helps_in_business_growth from './pages/blog/how_digital_marketing_helps_in_business_growth.js';
import Top_digital_marketing_strategies_for_gym from './pages/blog/top_digital_marketing_strategies_for_gym.js';
import Top_10_digital_marketing_strategies_for_the_startups from './pages/blog/top_10_digital_marketing_strategies_for_the_startups.js';
import Top_digital_marketing_strategies_for_the_product_launch from './pages/blog/top_digital_marketing_strategies_for_the_product_launch.js';
import How_does_digital_marketing_help_small_businesses from './pages/blog/how_does_digital_marketing_help_small_businesses.js';
import PrivacyPolicy from './pages/policy/privacy_policy.js';


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
						<Route path='/service-accounting-and-bookkeeping' element={<AccountingAndBookkeepingServices />} />
						<Route path='/service-data-management' element={<DataManagement />} />
						<Route path='/service-website-design-development' element={<WebsiteDesignDevelopment />} />
						<Route path='/service-content-writing' element={<ContentWriting />} />
						<Route path='/service-e-commerce' element={<E_CommerceServices />} />
						<Route path='/service-voice-support' element={<VoiceSupport />} />
						<Route path='/service-digital-marketing' element={<DigitalMarketing />} />
						<Route path='/blog' element={<Blog />} />
						<Route path='/how-digital-marketing-is-different-from-traditional-marketing' element={<How_digital_marketing_is_different_from_traditional_marketing />} />
						<Route path='/how-digital-marketing-helps-in-business-growth' element={<How_digital_marketing_helps_in_business_growth />} />
						<Route path='/top-digital-marketing-strategies-for-gym' element={<Top_digital_marketing_strategies_for_gym />} />
						<Route path='/top-10-digital-marketing-strategies-for-the-startups' element={<Top_10_digital_marketing_strategies_for_the_startups />} />
						<Route path='/top-digital-marketing-strategies-for-the-product-launch' element={<Top_digital_marketing_strategies_for_the_product_launch/>} />
						<Route path='/how-does-digital-marketing-help-small-businesses' element={<How_does_digital_marketing_help_small_businesses/>} />
						
						<Route path='/gallery' element={<Gallery />} />
						
						<Route path='/career' element={<Career />} />
						<Route path='/privacy-policy' element={<PrivacyPolicy />} />
						<Route path='*' element={<Error />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
