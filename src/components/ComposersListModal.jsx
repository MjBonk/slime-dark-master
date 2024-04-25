import { useContext } from "react";
import { Context } from "./ContextProvider";
import { Link } from "react-router-dom";

export default function ComposersListModal() {
	const { composers, setDisplayComposersModal, displayComposersModal } = useContext(Context);

	return (
		<ul className={`${displayComposersModal ? "opacity-100" : " opacity-0 hidden"} backdrop-blur-sm min-h-screen w-screen absolute z-30 flex flex-col justify-center bg-black/60 transition-opacity duration-500 sm:p-8 `}>
			{/* map over the composers array and display the name of each composer */}
			{composers.map((composer, index) => (
				<li onClick={() => setDisplayComposersModal(false)} key={index} className=" font-thin hover:font-[900] text-white uppercase transition-all duration-200 ">
					<Link to={`/composers/${composer.name}`}>
						<h2 className={` text-2xl sm:text-4xl md:text-6xl animate-fadeIn p-2`}>{composer.name}</h2>
					</Link>
				</li>
			))}
		</ul>
	);
}
