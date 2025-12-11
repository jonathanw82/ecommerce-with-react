import CategoryItem from "../../category-item/category-item.components"
import '../../directory-container/directorysContainer.styles.scss'

const Directory = ({categoriesList}) => {
  return (
    <div>
      <div className="categories-container">
        {categoriesList.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
