import React from 'react';
import './preview-component.scss';
import CollectionItem from '../collection-item/collection-item';

const PreviewCollection = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, ind) => ind < 4)
                    .map(({ id, ...other})=> <CollectionItem key={id} {...other}/>)
                }
            </div>
        </div>
    )
}

export default PreviewCollection;