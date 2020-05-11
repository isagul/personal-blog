import React from 'react';

const BlogContent = ({ title, thumbnail, link, content, categories }) => {
    let createdDiv = document.createElement('div');
    createdDiv.innerHTML = content;

    return (
        <div className="story-area">
            {!thumbnail.includes('stat') && <img className="thumbnail" src={require(`${thumbnail}`)} alt={categories.join(' ')} />}
            <div className="desc-area">
                <p className="title">{title}</p>
                <p className="content">{createdDiv.getElementsByTagName('p')[0].innerText}...</p>
                <a className="show-more" href={link} target="_blank" rel="noopener noreferrer">
                    <p>More</p>
                </a>
            </div>
        </div>
    )
};

export default BlogContent;