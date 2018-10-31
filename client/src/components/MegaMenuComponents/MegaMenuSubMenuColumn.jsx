import React from 'react';
import MegaMenuSubMenuColumnHeader from '../MegaMenuComponents/MegaMenuSubMenuColumnHeader';

class MegaMenuSubMenuColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { megaMenuSecondLevelCategory } = this.props;

    return (
      <div className="mega-menu-sub-menu-col">
        <ul>
          <MegaMenuSubMenuColumnHeader
            megaMenuSecondLevelCategory={megaMenuSecondLevelCategory}
          />
          {megaMenuSecondLevelCategory.subCategories.map((thirdLevelCategory, i) => {
            if (typeof thirdLevelCategory === 'string') {
              return <li key={i}><a href="#">{thirdLevelCategory}</a></li>;
            } else if (typeof thirdLevelCategory === 'object' && thirdLevelCategory !== null) {
              return <li className="emphasized" key={i} ><a href="#">{thirdLevelCategory.name}</a></li>;
            } else if (thirdLevelCategory === null) {
              return <li className="horizontal-separator" key={i}></li>;
            }
          })}
        </ul>
      </div>
    )
  }
}

module.exports = MegaMenuSubMenuColumn;