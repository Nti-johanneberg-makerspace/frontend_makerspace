import {
    Routes,
    Route,
} from 'react-router-dom';
import Api from './Api';
import TableReviews from './table';
//import StatsRingCard from './cards';

function RoutesApp() {
  Api()
  return (
  <Routes>
    <Route path="/table" element={<TableReviews />} />
  </Routes>)
}

export default RoutesApp;
  