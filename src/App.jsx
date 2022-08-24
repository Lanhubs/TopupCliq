import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import AboutUsPage from './pages/AboutUs/AboutUsPage'
import FAQ_Page from './pages/FAQ_Page/FAQ_Page'
import HomePage from './pages/HomePage/HomePage'
import HowItWorksPage from './pages/HowItWorks/HowItWorksPage'
import LoginPage from "./pages/AuthenticationPages/LoginPage"
import RegisterPage from "./pages/AuthenticationPages/RegisterPage"

function App() {
  const [count, setCount] = useState(0)

  return (
		<div className="w-full p-0 m-0 bg-white">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} exact />
					<Route path="/howitworks" element={<HowItWorksPage />} />
					<Route path='/aboutus' element={<AboutUsPage/>}/>
					<Route path="/faq" element={<FAQ_Page/>}/>
					<Route path="/login" element={<LoginPage/>}/>
					<Route path="/register" element={<RegisterPage/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App
