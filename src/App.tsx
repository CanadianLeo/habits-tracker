
import { HabitsList } from './components/habits-list';
import { Header } from './components/header';
import { NewHabit } from './components/new-habit';

export const App = () => {

  return (
    <div className="App">
      <Header />
      <NewHabit />
      <HabitsList />
    </div>
  );
}