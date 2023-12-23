import clsx from 'clsx';
import { useRecoilValue } from 'recoil';

import { AppControlAction } from '@app/modules/general';

import { configStore } from '~/stores/config';

import { TitlebarStyled } from './styled';

export interface TitlebarProps {
	className?: string;
}

const Titlebar = ({ className }: TitlebarProps) => {
	const {
		general: { developerMode },
	} = useRecoilValue(configStore);

	const appControl = (action: AppControlAction) => {
		window.electron.appControl(action);
	};

	return (
		<TitlebarStyled className={clsx('Titlebar', className)}>
			{developerMode && (
				<div onClick={() => appControl('devtools')}>
					<i className="bx bx-code-alt" />
				</div>
			)}
		</TitlebarStyled>
	);
};

export default Titlebar;
