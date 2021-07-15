// Dependencies
import Link from 'next/link';
import styled from 'styled-components';
import { fontSize } from '../Theme';

// Components

// Style
const SLink = styled.a`
	color: ${(props) => props.theme.primary};
	text-decoration: none;
	transition: all 0.2s;
	display: block;
	position: relative;
	width: fit-content;

	&.arrow::after {
		content: '▶';
		${fontSize(12)}
		transition: all 0.2s;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: -1.25rem;
	}

	&.arrow:hover::after {
		right: -1.5rem;
	}

	&.arrow:hover {
		color: ${(props) => props.theme.primary};
	}

	&.footer {
		color: ${(props) => props.theme.grey};
		margin: 1rem 0rem;
	}

	&.footer:hover {
		color: ${(props) => props.theme.secondary};
	}
`;

// Render
export default function StyledLink({ className, href, ...props }) {
	return (
		<Link href={href} passHref>
			<SLink className={className}>{props.children}</SLink>
		</Link>
	);
}