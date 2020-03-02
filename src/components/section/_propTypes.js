import PropTypes from 'prop-types';
import { boxPropTypes } from 'components/box';

/**
 * sectionPropTypes - define propTypes used by Section component or extensions of SectionWrapper and SectionContainer components.
 * 
 * Since components can be extensions of other components with styled-components,
 * this means some components will share common props, this helps not to repeatedly rewrite propTypes.
 * to import sectionPropTypes do: `import { sectionPropTypes } from 'components/section';
 */
const sectionPropTypes = {
    ...boxPropTypes,
    background: PropTypes.shape({
        color: PropTypes.string,
        gradient: PropTypes.string,
        image: PropTypes.string,
        position: PropTypes.string,
        repeat: PropTypes.string,
        size: PropTypes.string,
    }),
    container: PropTypes.string,
    containerHeight: PropTypes.string,
    containerType: PropTypes.string,
    containerWidth: PropTypes.string,
    isCentered: PropTypes.bool,
    isCompact: PropTypes.bool,
    isFixed: PropTypes.bool,
    isFlex: PropTypes.bool,
    sectionType: PropTypes.string,
    wrapper: PropTypes.string,
    wrapperHeight: PropTypes.string,
    wrapperType: PropTypes.string,
    wrapperWidth: PropTypes.string,
}

export default sectionPropTypes;
