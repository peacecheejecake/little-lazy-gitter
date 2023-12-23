import { ShareAltOutlined } from '@ant-design/icons';

import { useMemo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

import clsx from 'clsx';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';

// import logo from '~/assets/images/logo@256.png';
import { configStore } from '~/stores/config';
import { type MenuGroup } from '~/stores/layout';
import { releaseStore } from '~/stores/release';

import SidebarIcon from './SidebarIcon';
import { SidebarStyled } from './styled';

export interface SidebarProps {
	className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
	const config = useRecoilValue(configStore);
	const { releases } = useRecoilValue(releaseStore);
	const { pathname } = useLocation();

	const makeIcon = useCallback((icon: React.ReactNode | string) => {
		if (typeof icon === 'string') {
			return <i className={`bx ${icon}`} />;
		}
		return icon;
	}, []);

	const menus = useMemo<MenuGroup[]>(
		() => [
			{
				groupId: 0,
				items: [
					{
						itemId: 0,
						icon: 'bx-home-alt-2',
						link: '/',
						text: '대시보드',
					},
				],
			},
			{
				groupId: 1,
				title: '릴리즈',
				items: [
					...releases.map((release, idx) => ({
						itemId: `release-${release.name}`,
						icon: ShareAltOutlined,
						link: `/release/${release.name}`,
						text: release.name,
					})),
				],
				// items: [
				// 	{
				// 		// icon: 'bx-home-alt-2',
				// 		link: '/',
				// 		text: '메인페이지',
				// 	},
				// 	{
				// 		link: '/testpage',
				// 		text: '404테스트',
				// 	},
				// ],
			},
			{
				groupId: 2,
				title: '설정',
				items: [
					{
						itemId: 0,
						icon: 'bx-cog',
						link: '/settings',
						text: '일반 설정',
					},
					...(config.general.developerMode
						? [
								{
									itemId: 99,
									icon: 'bx-code-alt',
									link: '/settings/developers',
									text: '개발자 옵션',
								},
						  ]
						: []),
				],
			},
		],
		[config.general.developerMode],
	);

	return (
		<SidebarStyled className={clsx('Sidebar', className)}>
			<div className="logo">
				{/* <img src={logo} alt="logo" width={35} /> */}
				__RELEASE
			</div>

			<LayoutGroup>
				<div className="menus">
					{menus.map((menuGroup) => (
						<div key={menuGroup.groupId} className="menuGroup">
							<div className="title">{menuGroup.title}</div>

							<div className="items">
								<AnimatePresence>
									{menuGroup.items.map((item) => {
										const isActive = pathname === item.link;

										return (
											<motion.div
												key={item.text}
												initial={{ opacity: 0, y: -5 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -5 }}
											>
												<Link
													key={item.text}
													to={item.link}
													className={clsx('item', isActive && 'active')}
												>
													{isActive && (
														<motion.div
															className="menuActiveBG"
															layoutId="menuActiveBG"
															initial={false}
															transition={{
																type: 'spring',
																stiffness: 500,
																damping: 35,
															}}
														/>
													)}

													{/* <i className={`bx ${item.icon}`} /> */}
													<SidebarIcon Icon={item.icon} />
													<span>{item.text}</span>
												</Link>
											</motion.div>
										);
									})}
								</AnimatePresence>
							</div>
						</div>
					))}
				</div>
			</LayoutGroup>
		</SidebarStyled>
	);
}
