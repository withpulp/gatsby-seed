import PropTypes from 'prop-types';

import { captionPropTypes } from 'components/caption';
import { sectionPropTypes } from 'components/section';

const servicesPropTypes = {
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            link: PropTypes.string,
        }),
    ),
    caption: PropTypes.shape({...captionPropTypes}),
    content: PropTypes.string,
    data: PropTypes.shape({
        services: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            description: PropTypes.string,
                            draft: PropTypes.bool,
                            featured: PropTypes.bool,
                            id: PropTypes.string,
                            icon: PropTypes.string,
                            order: PropTypes.number,
                            path: PropTypes.string,
                            title: PropTypes.string,
                        }),
                    }),
                }),
            ),
        }),
    }),
    options: PropTypes.shape({...sectionPropTypes}),
};

export default servicesPropTypes;
