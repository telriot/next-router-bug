import styled from "styled-components";
import ChangeLanguage from "./ChangeLanguage";

const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	flex: 1;
	align-items: center;
	font-size: ${({ theme }) => theme.typography.base};
	font-weight: 600;
`;

const NavItem = styled.li`
	cursor: pointer;
	list-style: none;
	position: relative;
	padding: 0 1rem;
`;

function NavMenu() {
	return (
		<NavContainer>
			<NavItem>
				<ChangeLanguage />
			</NavItem>
		</NavContainer>
	);
}

export default NavMenu;
