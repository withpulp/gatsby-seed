import PropTypes from 'prop-types';

import { captionPropTypes } from 'components/caption';
import { sectionPropTypes } from 'components/section';

const projectsPropTypes = {
    caption: PropTypes.shape({...captionPropTypes}),
    data: PropTypes.shape({
        projects: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            category: PropTypes.string,
                            client: PropTypes.string,
                            date: PropTypes.string,
                            description: PropTypes.string,
                            draft: PropTypes.bool,
                            featured: PropTypes.bool,
                            id: PropTypes.string,
                            logo: PropTypes.shape({
                                childImageSharp: PropTypes.shape({
                                    fluid: PropTypes.shape({
                                        aspectRatio: PropTypes.number,
                                        base64: PropTypes.string,
                                        src: PropTypes.string,
                                        srcSet: PropTypes.string,
                                        sizes: PropTypes.string,
                                    }),
                                }),
                            }),
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

export default projectsPropTypes;
