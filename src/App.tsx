import { HabitsList } from 'modules/habits-list';
import { Header } from 'components/header';
import { LoaderProvider } from 'components/loader/loader-context';

export const App = () => {
  return (
    <div className='App'>
      <Header />
      <LoaderProvider>
        <HabitsList />
      </LoaderProvider>
    </div>
  );
};
