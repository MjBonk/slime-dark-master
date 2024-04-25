import React, { useState, useEffect } from "react";
import VideoPopup from "./VideoPopup";
import { IoPlaySharp } from "react-icons/io5";

// Cache to store fetched thumbnails to avoid refetching
const thumbnailCache = {};

export default function VideoThumbnail({ project, index, showComposer }) {
	const [thumbnailUrl, setThumbnailUrl] = useState("");
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const videoId = project.vimeoLink.substring(18);
	const composer = project.composer[0].fields;

	useEffect(() => {
		const fetchThumbnail = async () => {
			if (thumbnailCache[videoId]) {
				setThumbnailUrl(thumbnailCache[videoId]);
				return;
			}
			const url = `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`;
			try {
				const response = await fetch(url);
				const data = await response.json();
				const modifiedUrl = data.thumbnail_url.replace("295x166", "1024x576");
				thumbnailCache[videoId] = modifiedUrl; // Cache the modified URL
				setThumbnailUrl(modifiedUrl);
			} catch (error) {
				console.error("Error fetching Vimeo thumbnail:", error);
			}
		};

		if (videoId) {
			fetchThumbnail();
		}
	}, [videoId]);

	const onPopupClose = () => {
		setIsPopupOpen(false);
	};

	return (
		<div className=" text-left">
			<div key={project.vimeoLink} className=" group overflow-hidden cursor-pointer relative text-left" onClick={() => setIsPopupOpen(true)} data-tooltip-id={index + 1}>
				<div className="relative overflow-hidden *:transition-all *:duration-200  border-2 border-black group-hover:border-accent">
					<div className="opacity-0 group-hover:opacity-100 z-10 bg-black/40 w-full h-full absolute flex justify-center items-center text-accent text-6xl">
						<IoPlaySharp />
					</div>
					<img src={thumbnailUrl}  className="group-hover:scale-[1.1] group-hover:blur-md aspect-video animate-fadeInVideoPlaceholder bg-accent" />
				</div>
				<div className="text-accent md:text-white pl-1 md:group-hover:opacity-100 md:opacity-0 md:absolute md:bottom-0 md:left-1 z-20  flex flex-col md:flex-col-reverse transition-opacity duration-150 ">
					{composer && showComposer ? <p className="font-extrabold text-2xl uppercase -mb-2 md:mb-0 md:-mt-2"> {composer.name} </p> : null}
					<p className=" font-thin">
						<span className=" uppercase">{project.client} </span> {project.campaign ? `— ${project.campaign}` : null}
					</p>
				</div>
			</div>
			{isPopupOpen ? <VideoPopup onClose={onPopupClose} videoId={videoId} autoplay={true} /> : null}
		</div>
	);
}
