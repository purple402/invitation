import Cover from './components/cover/Cover';
import Invitation from './components/invitation/Invitation';
import Calendar from './components/calendar/Calendar';
import PhotoSlide from './components/photo_slide/PhotoSlide';
import Location from './components/location/Location';

const App = () => {
  return (
    <div className="main-container">
      <Cover />
      <Invitation />
      <Calendar />
      <PhotoSlide />
      <Location />
    </div>
  );
};

export default App;
