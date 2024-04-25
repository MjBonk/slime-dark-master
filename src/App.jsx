import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";



// import LandingPage from "./pages/LandingPage";
// import AboutPage from "./pages/AboutPage";
// import AllComposersPage from "./pages/AllComposersPage";
// import ProjectPage from "./pages/ProjectsPage";

// Lazy loading makes each component load asynchronously only when it's needed.
// this is new to me so we can test out the differences when the pages are more content heavy
// to see is we spot a difference
const LandingPage = lazy(() => import('./pages/LandingPage'));

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectPage = lazy(() => import('./pages/ProjectsPage'));
const ComposerPage = lazy(() => import('./pages/ComposerPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
import Header from './components/Header';

function App() {
	return (

		<main className=" min-h-screen w-screen overflow-hidden items-center justify-center">

			<Header />
			<Suspense fallback={<></>}>
				<Routes>
					<Route exact path="/" element={<LandingPage />} />
					<Route exact path="/about" element={<AboutPage />} />
					<Route exact path="/projects" element={<ProjectPage />} />
					<Route exact path="/composers" element={<LandingPage />} />
					<Route exact path="/contact" element={<ContactPage />} />
					<Route exact path="/composers/:name" element={<ComposerPage />} />
				</Routes>
			</Suspense>
		</main>
	);
}

export default App;
