import Directory from './components/directory/directory.component/directory.component';
import categoriesList from './components/category-list/category-list';

const App = () => {

  return (
    <Directory categoriesList={categoriesList}/>
  );
};
export default App;
