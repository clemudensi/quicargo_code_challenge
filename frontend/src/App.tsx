import { VFC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DeliveryRoutes } from './routes/routes';
import { SideBar } from './components/sidebar/sidebar';
import { Navbar } from './components/navbar/navbar';

const App: VFC = () => {
	return (
		<BrowserRouter>
			<SideBar/>
			<div className="relative md:ml-64 bg-blueGray-100">
				<Navbar
					title='Quicargo'
					bgColor='bg-indigo-900'
				/>
				<div className="px-4 md:px-10 mx-auto w-full">
					<DeliveryRoutes/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
