import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../components/ContextProvider";
import VideoThumbnail from "../components/VideoThumbnail";

export default function ComposerPage() {
	const { name } = useParams();
	const { projects, composers } = useContext(Context);
	const [composer, setComposer] = useState();

	const filteredProjects = projects.filter((project) => project.composer && project.composer.some((comp) => comp && comp.fields && comp.fields.name === name));

	useEffect(() => {
		const filteredComposers = composers.filter((composer) => composer.name === name);
		setComposer(filteredComposers[0]);
	}, [composers, name]);

	return (
		<>
			<div className=" p-8 min-h-screen py-32 text-white bg-black flex flex-col justify-between gap-24">
				{composer && (
					<div>
						<h1 className="text-3xl md:text-5xl lg:text-8xl font-extrabold uppercase text-white">{composer.name}</h1>
						<p className=" font-thin max-w-[40em] pl-2">{composer.bio}</p>
					</div>
				)}
				<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{filteredProjects.map((project, index) => (
						<VideoThumbnail project={project} showComposer={false} index={index} key={index} />
					))}
				</ul>
			</div>
		</>
	);
}
