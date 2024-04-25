import React, { useState, useContext, useEffect } from "react";
import { Context } from "../components/ContextProvider";
import ComposersListModal from "../components/ComposersListModal";

function LandingPage() {
	const { landingPage, displayComposersModal, isLogoAnimationDone } = useContext(Context);
	const [showReel, setShowReel] = useState(null);

	// Check if landingPage is loaded and set initial showreel
	useEffect(() => {
		if (landingPage) {
			setShowReel(landingPage.showReelURL);
		}
	}, [landingPage]); // Dependency on landingPage to re-run this effect when landingPage updates

	return (
		<div className="relative w-full h-screen overflow-hidden">
			{showReel && (
				<>
					<video autoPlay muted loop preload="auto" playsInline className="absolute w-full h-full object-cover" src={`https:${showReel}`} onClick={() => setShowModal(true)}>
						<source src={`https:${showReel}`} type="video/mp4" />
					</video>
					<p
						className={`${displayComposersModal ? "hidden" : "block"}  ${
							isLogoAnimationDone ? "opacity-100" : "opacity-0"
						} transition-opacity duration-700   text-xl w-[12em] sm:w-full font-medium text-white absolute bottom-4 left-6 uppercase`}
					>
						{landingPage.tagline}
					</p>
				</>
			)}
			<ComposersListModal />
		</div>
	);
}
export default LandingPage;
