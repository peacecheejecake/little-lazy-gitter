import { default as dayjs } from 'dayjs';
import { atom } from 'recoil';

export interface Branch {
	name: string;
}

export interface Release {
	id: number;
	name: string;
	description?: string;
	releaseDate?: DateType;
	createdAt?: DateType;
	branches: string[];
}

export interface ReleaseStoreValues {
	releases: Release[];
}

export const releaseStore = atom<ReleaseStoreValues>({
	key: 'branch',
	default: {
		releases: [
			{
				id: 0,
				description: 'This is a description',
				name: '20231226',
				releaseDate: dayjs('2023-12-26'),
				branches: ['bugfix', 'dev'],
			},
		],
	},
});
