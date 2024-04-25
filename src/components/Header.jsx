
import { useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ComposersListModal from "./ComposersListModal";
import { Context } from "./ContextProvider";
import Logo from "./Logo";

export default function Header() {
	const { setDisplayComposersModal, isLogoAnimationDone, animationPlayed, isHeaderBlue, setIsHeaderBlue } = useContext(Context);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/composers") {
			setDisplayComposersModal(true);
		} else {
			setDisplayComposersModal(false);
		}
		if (location.pathname.startsWith("/composers/") || location.pathname.startsWith("/projects")) {
			setIsHeaderBlue(true);
		} else {
			setIsHeaderBlue(false);
		}
	}, [location]);

	const styleNavLink = {
		active: "font-black",
		notActive: "font-thin",
	};

	return (
		<div>
			<Logo />
			<nav
				className={` ${
					isLogoAnimationDone || animationPlayed ? "opacity-100" : "opacity-0"
				}  ${
					isHeaderBlue ? "bg-black/20 border-accent " : ""
				} border-white text-white transition-opacity duration-700  *:uppercase *:px-2 border-solid border-b-[1px]  w-full h-[2.8em] mx-auto fixed justify-end flex z-50 px-2 items-end backdrop-blur-md`}
			>
				<NavLink to={"/"} className={({ isActive }) => (isActive ? styleNavLink.active : styleNavLink.notActive)}>
					Home
				</NavLink>
				<NavLink to={"/composers"} className={({ isActive }) => (isActive ? styleNavLink.active : styleNavLink.notActive)}>
					Composers
				</NavLink>
				<NavLink to={"/projects"} className={({ isActive }) => (isActive ? styleNavLink.active : styleNavLink.notActive)}>
					Projects
				</NavLink>
				<NavLink to={"/about"} className={({ isActive }) => (isActive ? styleNavLink.active : styleNavLink.notActive)}>
					About
				</NavLink>
				<NavLink to={"/contact"} className={({ isActive }) => (isActive ? styleNavLink.active : styleNavLink.notActive)}>
					Contact
				</NavLink>
			</nav>
		</div>
	);
}
