import { useState } from 'react';

import clsx from 'clsx';

import Content from '../Content';
import Sidebar from '../Sidebar';
import { LayoutStyled } from './styled';

export interface LayoutProps {
	className?: string;
	children: React.ReactNode;
}

const Layout = ({ className, children }: LayoutProps) => {
	const [isFold, setIsFold] = useState(false);

	return (
		<LayoutStyled className={clsx('Layout', className, { isFold })}>
			<Sidebar />
			<Content>{children}</Content>
		</LayoutStyled>
	);
};

export default Layout;
