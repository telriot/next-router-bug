import React from "react";
import { HTMLAttributes, ReactFragment } from "react";
import styled from "styled-components";
import Head from "next/head";
import Header from "@components/layout/Header";

interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
	invert?: boolean;
}

const LayoutContainer = styled.div<IContainerProps>``;

function Layout({ children }: { children: ReactFragment }) {
	return (
		<>
			<LayoutContainer>
				<Head>
					<meta name="description" content="Bug repo" />
				</Head>
				<Header />
			</LayoutContainer>
		</>
	);
}

export default Layout;
