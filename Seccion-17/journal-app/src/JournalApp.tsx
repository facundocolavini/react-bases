import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';
import { store } from './store';
import { Provider } from 'react-redux';
type Props = {};

export const JournalApp = (props: Props) => {
	return (
		<Provider store={store}>
			<AppTheme>
				<AppRouter />
			</AppTheme>
		</Provider>
	);
};
