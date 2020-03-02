import { captionDefaultProps } from 'components/caption';
import { sectionDefaultProps } from 'components/section';

// TODO:
// - default props don't get reset when nested inside a shape/object
//   - use a CaptionSection component instead (or set the captionType and render through a container/wrapper)

const postsDefaultProps = {
    caption: {
        ...captionDefaultProps,
        captionType: 'section',
        contextAs: 'h3',
        contextType: 'body',
        headingAs: 'h2',
        headingType: 'h3',
    },
    data: undefined,
    options: {
        ...sectionDefaultProps,
    },
};

export default postsDefaultProps;
