import Directory from '../../components/directory/directory.component/directory.component';
import categoriesList from '../../components/category-list/category-list';
import { Outlet } from 'react-router-dom';

const Home = () => {

  return (
    <div>
     <Outlet/>
     <Directory categoriesList={categoriesList}/>
    </div>
  );
};
export default Home;