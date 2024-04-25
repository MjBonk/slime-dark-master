// ProjectPage.js
import React, { useState, useContext } from "react";
import { Context } from "../components/ContextProvider";
import VideoThumbnail from "../components/VideoThumbnail";

export default function ProjectPage() {
	const { projects } = useContext(Context);

	return (
		<>
			<div className="text-center py-20 p-6">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{projects.map((project, index) => (
						<VideoThumbnail project={project} showComposer={true} index={index} key={index} />
					))}
				</div>
			</div>
		</>
	);
}