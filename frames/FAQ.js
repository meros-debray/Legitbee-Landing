// Dependencies
import { useState } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

// Components
import Container from '../components/Container';
import FAQCollapse from '../components/FAQCollapse';
import Title from '../components/Title';
import StyledLink from '../components/StyledLink';

// Style
const ImageContainer = styled(Col)`
	display: flex;
	justify-content: center;
`;

const Image = styled.img`
	width: 100%;
	max-width: 20rem;
	height: fit-content;
`;

// Data
import Content from '../public/assets/data/content.json';

// Render
export default function FAQ() {
	const [openId, setOpenId] = useState(-1);

	const handleFAQClick = (questionId) => {
		if (openId === questionId) {
			setOpenId(-1); // close all questions
		} else {
			setOpenId(questionId);
		}
	};

	return (
		<Container>
			<Title>
				Vos <mark>questions</mark>
			</Title>
			<Row>
				<Col xs={12} lg={8}>
					{Content.faq.map((item, i) => (
						<FAQCollapse
							key={i}
							questionId={i}
							openId={openId}
							question={item.question}
							answer={item.answer}
							handleFAQClick={handleFAQClick}
						/>
					))}
					<div className="d-flex justify-content-center d-lg-block">
						<StyledLink href="/faq" className="arrow mt-1 ml-lg-05">
							Accéder à la FAQ complète
						</StyledLink>
					</div>
				</Col>
				<ImageContainer>
					<Image
						src="/assets/images/faq.jpg"
						alt="faq illustration"
						className="d-none d-lg-block"
					/>
				</ImageContainer>
			</Row>
		</Container>
	);
}