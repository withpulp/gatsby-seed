import PropTypes from 'prop-types';

const layoutPropTypes = {
    children: PropTypes.node.isRequired,
    head: PropTypes.shape({
        description: PropTypes.string,
        image: PropTypes.shape({
            aspectRatio: PropTypes.number,
            base64: PropTypes.string,
            src: PropTypes.string,
            srcSet: PropTypes.string,
            sizes: PropTypes.string,
        }),
        title: PropTypes.string,
    }),
    layoutType: PropTypes.string,
    themeOptions: PropTypes.shape({
        footer: PropTypes.shape({
            backgroundColor: PropTypes.string,
            contentColor: PropTypes.string,
        }),
        header: PropTypes.shape({
            backgroundColor: PropTypes.string,
            contentColor: PropTypes.string,
        }),
    }),
};

export default layoutPropTypes;
