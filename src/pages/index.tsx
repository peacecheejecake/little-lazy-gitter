import LayoutConfig from '~/components/LayoutConfig';
import { IndexPageStyled } from '~/styles/pageStyled/indexPageStyled';

const Index = () => {
	return (
		<IndexPageStyled>
			<LayoutConfig breadcrumbs={['테스트', '메인페이지']} />
			<h1>대시보드</h1>
		</IndexPageStyled>
	);
};

export default Index;
