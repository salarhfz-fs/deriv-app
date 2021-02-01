import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { isEmptyObject } from '@deriv/shared';

const Text = ({ children, size, color, align, weight, line_height, as, className, styles, ...props }) => {
    const setStyle = () => {
        const class_styles = {
            '--text-size': `var(--text-size-${size || 's'})`,
            '--text-color': `var(--text-${color || 'general'})`,
            '--text-lh': `var(--text-lh-${line_height || 'm'})`,
            '--text-weight': `var(--text-weight-${weight || 'normal'})`,
            '--text-align': `var(--text-align-${align || 'start'})`,
        };
        if (!isEmptyObject(styles)) {
            return { ...class_styles, ...styles };
        }
        return class_styles;
    };

    const class_names = classNames('dc-text', className);
    return React.createElement(as || 'span', { className: class_names, style: setStyle(), ...props }, children);
};

Text.propTypes = {
    line_height: PropTypes.string,
    size: PropTypes.string,
};

export default Text;
