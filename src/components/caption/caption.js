import React from 'react';

import Content from 'components/content'

import _defaultProps from './_defaultProps';
import _propTypes from './_propTypes';
import { CaptionContainer } from './caption.css';

// TODO:
// - refactor caption component to use context - https://reactjs.org/docs/context.html
// - create container to render different captionTypes and propDefaults

const Caption = ({
    alignContent,
    alignItems,
    as,
    backgroundColor,
    borderBottom,
    borderColor,
    borderLeft,
    borderRadius,
    borderRight,
    borderTop,
    boxBorder,
    boxDisplay,
    boxHeight,
    boxShadow,
    boxTransform,
    boxTransition,
    boxType,
    boxWidth,
    captionType,
    children,
    context,
    contextAlign,
    contextAs,
    contextBackgroundColor,
    contextBorder,
    contextBorderBottom,
    contextBorderColor,
    contextBorderLeft,
    contextBorderRadius,
    contextBorderRight,
    contextBorderTop,
    contextBoxShadow,
    contextBoxTransform,
    contextColor,
    contextDecoration,
    contextFont,
    contextKerning,
    contextMargin,
    contextMarginBottom,
    contextMarginLeft,
    contextMarginRight,
    contextMarginTop,
    contextMaxWidth,
    contextMinWidth,
    contextOpacity,
    contextOrder,
    contextPadding,
    contextPaddingBottom,
    contextPaddingLeft,
    contextPaddingRight,
    contextPaddingTop,
    contextShadow,
    contextSize,
    contextTracking,
    contextTransform,
    contextTransition,
    contextType,
    contextWeight,
    contextWidth,
    contextZIndex,
    flex,
    flexFlow,
    heading,
    headingAlign,
    headingAs,
    headingBackgroundColor,
    headingBorder,
    headingBorderBottom,
    headingBorderColor,
    headingBorderLeft,
    headingBorderRadius,
    headingBorderRight,
    headingBorderTop,
    headingBoxShadow,
    headingBoxTransform,
    headingColor,
    headingDecoration,
    headingFont,
    headingKerning,
    headingMargin,
    headingMarginBottom,
    headingMarginLeft,
    headingMarginRight,
    headingMarginTop,
    headingMaxWidth,
    headingMinWidth,
    headingOpacity,
    headingOrder,
    headingPadding,
    headingPaddingBottom,
    headingPaddingLeft,
    headingPaddingRight,
    headingPaddingTop,
    headingShadow,
    headingSize,
    headingTracking,
    headingTransform,
    headingTransition,
    headingType,
    headingWeight,
    headingWidth,
    headingZIndex,
    justifyContent,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    opacity,
    order,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    position,
    positionBottom,
    poitionLeft,
    positionRight,
    positionTop,
    zIndex,
}) => (
    <CaptionContainer
        alignContent={alignContent}
        alignItems={alignItems}
        as={as}
        backgroundColor={backgroundColor}
        borderBottom={borderBottom}
        borderColor={borderColor}
        borderLeft={borderLeft}
        borderRadius={borderRadius}
        borderRight={borderRight}
        borderTop={borderTop}
        boxBorder={boxBorder}
        boxDisplay={boxDisplay}
        boxHeight={boxHeight}
        boxShadow={boxShadow}
        boxTransform={boxTransform}
        boxTransition={boxTransition}
        boxType={boxType}
        boxWidth={boxWidth}
        captionType={captionType}
        flex={flex}
        flexFlow={flexFlow}
        justifyContent={justifyContent}
        margin={margin}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginTop={marginTop}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        minHeight={minHeight}
        minWidth={minWidth}
        opacity={opacity}
        order={order}
        padding={padding}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        position={position}
        positionBottom={positionBottom}
        poitionLeft={poitionLeft}
        positionRight={positionRight}
        positionTop={positionTop}
        zIndex={zIndex}
    >
        {heading && (
            <Content
                as={headingAs}
                backgroundColor={headingBackgroundColor}
                borderBottom={headingBorderBottom}
                borderColor={headingBorderColor}
                borderLeft={headingBorderLeft}
                borderRadius={headingBorderRadius}
                borderRight={headingBorderRight}
                borderTop={headingBorderTop}
                boxBorder={headingBorder}
                boxShadow={headingBoxShadow}
                boxTransform={headingBoxTransform}
                boxTransition={headingTransition}
                boxWidth={headingWidth}
                contentAlign={headingAlign}
                contentColor={headingColor}
                contentDecoration={headingDecoration}
                contentFont={headingFont}
                contentKerning={headingKerning}
                contentShadow={headingShadow}
                contentSize={headingSize}
                contentTracking={headingTracking}
                contentTransform={headingTransform}
                contentType={headingType}
                contentWeight={headingWeight}
                margin={headingMargin}
                marginBottom={headingMarginBottom}
                marginLeft={headingMarginLeft}
                marginRight={headingMarginRight}
                marginTop={headingMarginTop}
                maxWidth={headingMaxWidth}
                minWidth={headingMinWidth}
                opacity={headingOpacity}
                order={headingOrder}
                padding={headingPadding}
                paddingBottom={headingPaddingBottom}
                padingLeft={headingPaddingLeft}
                paddingRight={headingPaddingRight}
                paddingTop={headingPaddingTop}
                zIndex={headingZIndex}
            >
                {heading}
            </Content>
        )}
        {context && (
            <Content
                as={contextAs}
                backgroundColor={contextBackgroundColor}
                borderBottom={contextBorderBottom}
                borderColor={contextBorderColor}
                borderLeft={contextBorderLeft}
                borderRadius={contextBorderRadius}
                borderRight={contextBorderRight}
                borderTop={contextBorderTop}
                boxBorder={contextBorder}
                boxShadow={contextBoxShadow}
                boxTransform={contextBoxTransform}
                boxTransition={contextTransition}
                boxWidth={contextWidth}
                contentAlign={contextAlign}
                contentColor={contextColor}
                contentDecoration={contextDecoration}
                contentFont={contextFont}
                contentKerning={contextKerning}
                contentShadow={contextShadow}
                contentSize={contextSize}
                contentTracking={contextTracking}
                contentTransform={contextTransform}
                contentType={contextType}
                contentWeight={contextWeight}
                margin={contextMargin}
                marginBottom={contextMarginBottom}
                marginLeft={contextMarginLeft}
                marginRight={contextMarginRight}
                marginTop={contextMarginTop}
                maxWidth={contextMaxWidth}
                minWidth={contextMinWidth}
                opacity={contextOpacity}
                order={contextOrder}
                padding={contextPadding}
                paddingBottom={contextPaddingBottom}
                padingLeft={contextPaddingLeft}
                paddingRight={contextPaddingRight}
                paddingTop={contextPaddingTop}
                zIndex={contextZIndex}
            >
                {context}
            </Content>
        )}
        {children}
    </CaptionContainer>
);

Caption.propTypes = _propTypes;
Caption.defaultProps = _defaultProps;

export const captionPropTypes = _propTypes;
export const captionDefaultProps = _defaultProps;
export default Caption;