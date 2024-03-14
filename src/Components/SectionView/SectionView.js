import React from 'react';

import './SectionView.css';

const SectionView = (props) => {
    return (
        <div style={props.style} className='section-view-container'>
            {
                props.children
            }
        </div>
    )
}

export default SectionView