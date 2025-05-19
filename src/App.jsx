import Cover from './components/cover/Cover';
import Invitation from './components/invitation/Invitation';
import Calendar from './components/calendar/Calendar';

const App = () => {
  return (
    <div className="main-container">
      <Cover />
      <Invitation />
      <Calendar />
    </div>
  );
};

export default App;
