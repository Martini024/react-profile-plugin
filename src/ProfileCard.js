import { Card } from "antd";
import DOMPurify from "dompurify";
import React from "react";

const { Meta } = Card;

export const ProfileCard = ({ profile }) => {
	console.log(profile);
	return (
		<div>
			{profile.name !== "" ? (
				<Card
					hoverable
					style={{ width: 240 }}
					cover={<img alt="example" src={profile.avatar} />}
				>
					<Meta
						title={profile.name}
						description={
							<div
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(profile.description),
								}}
							></div>
						}
					/>
				</Card>
			) : null}
		</div>
	);
};
