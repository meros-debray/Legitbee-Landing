// Dependencies
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

// Components
import IconBox from '../components/IconBox';
import Container from '../components/Container';
import Title from '../components/Title';

// Style
const StyledCol = styled(Col)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const TextContainer = styled.div`
	text-align: center;
	margin: 2rem 0rem;
`;

// Render
export default function Problem() {
	return (
		<Container>
			<Title>
				Avez-vous pensé à tout pour <br className="d-none d-lg-block" />
				<mark>votre succession</mark> ?
			</Title>
			<Row>
				<StyledCol xs={12} md={4}>
					<IconBox
						src="/assets/images/money.svg"
						alt="Patrimoine diversifié"
						width="166.505"
						height="192.263"
						title="Patrimoine diversifié"
						caption="Comment vos héritiers vont-ils retrouver l'ensemble du patrimoine que vous avez constitué ?"
					/>
				</StyledCol>
				<StyledCol xs={12} md={4}>
					<IconBox
						src="/assets/images/memories.svg"
						alt="Héritage numérique"
						width="166.505"
						height="192.263"
						title="Héritage numérique"
						caption="Comment allez-vous transmettre vos actifs et fichiers captifs de vos comptes en ligne ?"
					/>
				</StyledCol>
				<StyledCol xs={12} md={4}>
					<IconBox
						src="/assets/images/infos.svg"
						alt="Informations personnelles"
						width="166.505"
						height="192.263"
						title="Informations personnelles"
						caption="Combien de jours passeront vos héritiers à chercher vos informations nécessaires aux démarches ?"
					/>
				</StyledCol>
			</Row>
			<TextContainer>
				<h2>
					Avec Legitbee, vous préparez votre transmission <mark>complète</mark>,{' '}
					<mark>facilement</mark> et en toute
					<mark> confidentialité</mark>.
				</h2>
			</TextContainer>
		</Container>
	);
}
