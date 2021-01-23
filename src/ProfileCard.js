import React, { useEffect, useState } from "react";

function Profile() {
	this.name = "";
	this.avatar = "";
	this.description = "";
}

export const ProfileCard = () => {
	const [profile, serProfile] = useState(new Profile());

	useEffect(() => {
		console.log("fetchProfileFromApi: No data exist yet");
	}, []);

	return <div></div>;
};
