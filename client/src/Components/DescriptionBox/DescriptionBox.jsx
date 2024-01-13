import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="discriptionbox-navigator">
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat officia fugit aperiam rerum impedit repellat quod quibusdam tempore voluptatem nihil ipsum, corrupti consequatur ipsa, velit hic, obcaecati expedita? Quidem, velit.
            Numquam recusandae minima repellendus fuga facere mollitia! Consectetur placeat id explicabo alias, suscipit repellat. Dolore ipsam nam quis, odio ab, aspernatur, quidem blanditiis dolorum tempora modi voluptatibus asperiores sed non!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore mollitia laborum dolores in voluptates! Nobis perspiciatis at cumque! Officiis, minus laudantium impedit corporis consequatur quidem cupiditate voluptate modi hic.</p>
        </div>
    </div>
  );
}

export default DescriptionBox;