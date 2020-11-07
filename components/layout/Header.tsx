import styled from "styled-components";
import NavMenu from "@components/shared/NavMenu";
const Container = styled.header`
	top: 0;
	left: 0;
	right: 0;
	height: 8rem;
	max-width: ${({ theme }) => theme.screenMaxWidth};
	display: flex;
	margin: 0 auto;
	padding: 0.25em 2em;
	display: flex;
	align-items: center;
	justify-content: space-around;
	z-index: 1000;
	${({ theme }) => theme.breakpoints.down("md")} {
		padding: 0.375em 2em;
		height: 6rem;
	}
	${({ theme }) => theme.breakpoints.down("sm")} {
		height: 4rem;
	}
`;
function Header() {
	return (
		<Container>
			<NavMenu />
		</Container>
	);
}

export default Header;
