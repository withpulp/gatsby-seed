import PropTypes from 'prop-types';

import { captionPropTypes } from 'components/caption';
import { sectionPropTypes } from 'components/section';

const postsPropTypes = {
    caption: PropTypes.shape({...captionPropTypes}),
    data: PropTypes.shape({
        posts: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            authorId: PropTypes.string,
                            category: PropTypes.string,
                            date: PropTypes.string,
                            description: PropTypes.string,
                            draft: PropTypes.bool,
                            id: PropTypes.string,
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

export default postsPropTypes;
