import { useState, useEffect } from 'react';
import { Items } from './utils';
const Test = () => {
  const [categorySelected, setCategorySelected] = useState<string>(
    Items[0].category
  );

  return (
    <div className="mainContainer">
      <nav className="headerMenu">
        {Items.map((itemCategory) => (
          <span
            className={
              itemCategory.category === categorySelected ? 'selected' : ''
            }
            key={itemCategory.category}
            onClick={() => {
              setCategorySelected(itemCategory.category);
            }}
          >
            {itemCategory.category}
          </span>
        ))}
      </nav>

      {Items.filter((item) => item.category === categorySelected).flatMap(
        (categoryItem) =>
          categoryItem.items.map((item) => (
            <article className="itemsContainer" key={item.name}>
              <div className="imageContainer">
                <img src={item.img} className="imgDescription" />
              </div>
              <div className="itemContainerDescriptions">
                <span>{item.name}</span>
                <div>{item.description}</div>
              </div>
            </article>
          ))
      )}
    </div>
  );
};

export default Test;
