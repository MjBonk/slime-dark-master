import { createContext, useState, useEffect } from "react";
import useContentful from "../services/useContentful";

export const Context = createContext();

const ContextProvider = ({ children }) => {
	const [composers, setComposers] = useState([]); //composers is gray because it is not used
	const [landingPage, setLandingPage] = useState([]);
	const [projects, setProjects] = useState([]);
	const [displayComposersModal, setDisplayComposersModal] = useState(false);
	const [isLogoAnimationDone, setIsLogoAnimationDone] = useState(false);
	const { getComposers, getAllProjects, getLandingPage } = useContentful();
	const [animationPlayed, setAnimationPlayed] = useState(false);
	const [isHeaderBlue, setIsHeaderBlue] = useState(false);

	useEffect(() => {
		getComposers().then((composers) => setComposers(composers));
		getAllProjects().then((projects) => setProjects(projects));
		getLandingPage().then((landingPageObject) => setLandingPage(landingPageObject));
	}, []);

	setTimeout(() => {
		setIsLogoAnimationDone(true);
		sessionStorage.setItem("animationPlayed", "true");
	}, 2000);

	// put all values here
	const value = {
		composers,
		setDisplayComposersModal,
		displayComposersModal,
		landingPage,
		projects,
		isLogoAnimationDone,
		animationPlayed,
		setAnimationPlayed,
		isHeaderBlue,
		setIsHeaderBlue,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
