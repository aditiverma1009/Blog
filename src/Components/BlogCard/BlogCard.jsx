import React from 'react';
import PropTypes from 'prop-types';
import defaultBlogImage from '../../assets/rectangle.png';
import './BlogCard.scss';

const BlogCard = ({ details, id, deleteBlog }) => (
    <div className="blogCard">
        <div>{details.title}</div>
        <img
            className="card-image"
            src={details.imageUrl || defaultBlogImage}
            alt={details.imageAlt}
        />
        <div>{details.content}</div>
        <input type="button" onClick={() => deleteBlog(id)} value="Delete" />
    </div>
);

BlogCard.propTypes = {
    details: PropTypes.shape({
        title: PropTypes.string,
        imageAlt: PropTypes.string,
        imageUrl: PropTypes.string,
        content: PropTypes.string,
    }),
    id: PropTypes.number.isRequired,
    deleteBlog: PropTypes.func.isRequired,
};

BlogCard.defaultProps = {
    details: {
        title: '',
        imageAlt: '',
        imageUrl: '',
        content: '',
    },
};

export default BlogCard;
