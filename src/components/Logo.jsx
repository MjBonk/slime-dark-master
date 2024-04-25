import { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "./ContextProvider";

export default function Logo() {
	const { animationPlayed, setAnimationPlayed, isHeaderBlue } = useContext(Context);

	useEffect(() => {
		const animationPlayedBefore = sessionStorage.getItem("animationPlayed");
		if (animationPlayedBefore === "true") {
			setAnimationPlayed(true);
		}
	}, []);

	return (

		<NavLink to={"/"} className={`${animationPlayed ? "text-[50px] top-[-14px]" : "animate-onloadAnimation top-[30%] sm:top-[10%] text-[30.8vw] sm:text-[31.3vw]"}  text-white  font-clash px-2  font-bold fixed z-[9999]`}>
			SLIME
		</NavLink>
	);
}
