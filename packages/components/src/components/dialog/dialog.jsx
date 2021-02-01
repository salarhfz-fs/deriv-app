import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Button from '../button/button.jsx';
import Icon from '../icon/icon.jsx';
import Text from '../text';

const Dialog = ({
    disableApp,
    enableApp,
    is_closed_on_cancel,
    is_closed_on_confirm,
    is_visible,
    onCancel,
    onConfirm,
    ...other_props
}) => {
    React.useEffect(() => {
        if (is_visible && !!disableApp) {
            disableApp();
        }
    }, [is_visible, disableApp]);

    const handleCancel = () => {
        if (is_closed_on_cancel && enableApp) {
            enableApp();
        }
        onCancel();
    };

    const handleConfirm = () => {
        if (is_closed_on_confirm && enableApp) {
            enableApp();
        }
        onConfirm();
    };

    const {
        cancel_button_text,
        className,
        children,
        confirm_button_text,
        is_loading,
        is_mobile_full_width = true,
        is_content_centered,
        portal_element_id,
        title,
        has_close_icon,
    } = other_props;

    const content_classes = classNames('dc-dialog__content', {
        'dc-dialog__content--centered': is_content_centered,
    });

    const dialog = (
        <CSSTransition
            appear
            in={is_visible && !is_loading}
            timeout={50}
            classNames={{
                appear: 'dc-dialog__wrapper--enter',
                enter: 'dc-dialog__wrapper--enter',
                enterDone: 'dc-dialog__wrapper--enter-done',
                exit: 'dc-dialog__wrapper--exit',
            }}
            unmountOnExit
        >
            <div
                className={classNames('dc-dialog__wrapper', className, {
                    'dc-dialog__wrapper--has-portal': !!portal_element_id,
                })}
            >
                <div
                    className={classNames('dc-dialog__dialog', {
                        'dc-dialog__dialog--has-margin': !is_mobile_full_width,
                    })}
                >
                    <div className='dc-dialog__header-wrapper'>
                        {!!title && <h1 className='dc-dialog__header'>{title}</h1>}
                        {has_close_icon && (
                            <div onClick={onCancel ? handleCancel : handleConfirm} className='dc-dialog__header--close'>
                                <Icon icon='IcCross' />
                            </div>
                        )}
                    </div>
                    {typeof children === 'string' ? (
                        <Text as='p' size='xs' line_height='s' className={content_classes}>
                            {children}
                        </Text>
                    ) : (
                        <div className={content_classes}>{children}</div>
                    )}
                    <div className='dc-dialog__footer'>
                        {!!onCancel && (
                            <Button
                                className='dc-dialog__button'
                                has_effect
                                text={cancel_button_text}
                                onClick={handleCancel}
                                secondary
                                large
                            />
                        )}
                        {!!confirm_button_text && (
                            <Button
                                className='dc-dialog__button'
                                has_effect
                                text={confirm_button_text}
                                onClick={handleConfirm}
                                primary
                                large
                            />
                        )}
                    </div>
                </div>
            </div>
        </CSSTransition>
    );

    if (portal_element_id) {
        return ReactDOM.createPortal(dialog, document.getElementById(portal_element_id));
    }

    return dialog;
};

Dialog.defaultProps = {
    is_closed_on_cancel: true,
    is_closed_on_confirm: true,
};

Dialog.propTypes = {
    cancel_button_text: PropTypes.string,
    confirm_button_text: PropTypes.string,
    disableApp: PropTypes.func,
    enableApp: PropTypes.func,
    has_close_icon: PropTypes.bool,
    is_closed_on_cancel: PropTypes.bool,
    is_closed_on_confirm: PropTypes.bool,
    is_content_centered: PropTypes.bool,
    is_loading: PropTypes.bool,
    is_mobile_full_width: PropTypes.bool,
    is_visible: PropTypes.bool,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    portal_element_id: PropTypes.string,
    title: PropTypes.string,
};

export default Dialog;
