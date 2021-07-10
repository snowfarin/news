import { Route, BrowserRouter } from 'react-router-dom';
import Filterednews from './Filterednews.';
import Datamapping from './Datamapping';
import Searchresult from './Searchresult';
import Videoview from './Videoview';

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path={'/'}>
        <Datamapping />
      </Route>
      <Route exact path={'/news/:id'}>
        <Filterednews />
      </Route>
      <Route exact path={'/news/search/:date'}>
        <Searchresult />
      </Route>
      <Route exact path={'/video/:id'}>
        <Videoview />
      </Route>
    </BrowserRouter>
  );
};

export default Router;
