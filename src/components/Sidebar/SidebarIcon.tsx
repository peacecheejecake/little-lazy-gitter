import { type MenuItemIcon } from '~/stores/layout';

interface SidebarIconProps extends React.AllHTMLAttributes<HTMLElement> {
	Icon?: MenuItemIcon;
}

export default function SidebarIcon({ Icon }: SidebarIconProps) {
	if (!Icon) {
		return null;
	}

	if (typeof Icon === 'string') {
		return <i className={`bx ${Icon}`} />;
	}

	return <Icon className="bx" />;
}
