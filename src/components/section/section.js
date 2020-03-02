import React from 'react';

import _defaultProps from './_defaultProps';
import _propTypes from './_propTypes';
import { SectionWrapper, SectionContainer } from './section.css';

// TODO:
// - define more box props and pass to wrapper and container (i.e. margin, padding, border, flex, etc...)
// - refactor section component to use context - https://reactjs.org/docs/context.html
// - create container to render different sectionTypes and propDefaults (i.e. hero, topbar, actions, cta, etc)
// - set containerType as grid (maybe box and grid can be merged into a single component)

const Section = ({
    alignContent,
    alignItems,
    background,
    backgroundColor,
    children,
    container,
    containerHeight,
    containerType,
    containerWidth,
    isCentered,
    isCompact,
    isFixed,
    isFlex,
    justifyContent,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    sectionType,
    wrapper,
    wrapperHeight,
    wrapperType,
    wrapperWidth,
    zIndex,
}) => (
    <SectionWrapper
        as={wrapper}
        background={background}
        backgroundColor={backgroundColor}
        boxHeight={wrapperHeight}
        boxType={wrapperType}
        boxWidth={wrapperWidth}
        isFixed={isFixed}
        maxHeight={maxHeight}
        minHeight={minHeight}
        sectionType={sectionType}
        zIndex={zIndex}
    >
        <SectionContainer
            as={container}
            alignContent={alignContent}
            alignItems={alignItems}
            boxHeight={containerHeight}
            boxType={containerType}
            boxWidth={containerWidth}
            containerType={containerType}
            isCentered={isCentered}
            isCompact={isCompact}
            isFlex={isFlex}
            justifyContent={justifyContent}
            maxWidth={maxWidth}
            minWidth={minWidth}
            sectionType={sectionType}
        >
            {children}
        </SectionContainer>
    </SectionWrapper>
);

Section.propTypes = _propTypes;
Section.defaultProps = _defaultProps;

export const sectionPropTypes = _propTypes;
export const sectionDefaultProps = _defaultProps;

export default Section;
