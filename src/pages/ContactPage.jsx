import { Link } from "react-router-dom";
import { useState } from "react";
import { GiCompactDisc } from "react-icons/gi";
import SpotifyPlaylist from "../components/SpotifyPlaylist";

export default function ContactPage() {
	const [showSpotifyPlaylist, setShowSpotifyPlaylist] = useState(false);

	const handleToggleSpotifyPlaylist = () => {
		setShowSpotifyPlaylist(!showSpotifyPlaylist);
	};

	const handleCloseSpotifyPlaylist = () => {
		setShowSpotifyPlaylist(false);
	};

	return (
		<div className=" flex flex-col justify-center min-h-screen text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-thin p-4 md:p-10 md:gap-10 bg-black text-white ">
			<p>anna@slimeagency.com</p>
			<p>+46 735 030 699</p>

			{/* Container for CD icon and Spotify Playlist */}
			<div className="fixed bottom-4 right-4 md:right-8">
				<div className="inline-block animate-spin-slow cursor-pointer " onClick={handleToggleSpotifyPlaylist}>
					<GiCompactDisc className="text-5xl" />
				</div>
				{/* Position the SpotifyPlaylist component next to the CD icon */}
				{showSpotifyPlaylist && (
					<div className="absolute bottom-16 right-0   rounded-lg transition-all duration-0" onClick={handleCloseSpotifyPlaylist}>
						<SpotifyPlaylist link="1O0QU98B6Sy0yYNpCya4aJ?si=897c1797fcad4ad1" />
					</div>
				)}
			</div>
		</div>
	);
}
