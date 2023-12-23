import { atom } from 'recoil';

export interface MenuGroup {
	groupId: number;
	title?: string;
	items: MenuItem[];
}

export interface MenuItem {
	itemId: number | string;
	link: string;
	text: string;
	icon?: MenuItemIcon;
}

export type MenuItemIcon = string | React.ComponentType<{ className?: string }>;

export interface LayoutStoreValues {
	breadcrumbs: string[];
	menus: MenuGroup[];
}

export const layoutStore = atom<LayoutStoreValues>({
	key: 'layout',
	default: {
		breadcrumbs: [],
		menus: [],
	},
});
