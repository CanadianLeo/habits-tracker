
import { HabbitsList } from '../../components/habbits-list';
import { Header } from '../../components/header';
import './Main.css';

export const Main = () => {

  return (
    <div className="App">
      <Header />
      <HabbitsList />
    </div>
  );
}