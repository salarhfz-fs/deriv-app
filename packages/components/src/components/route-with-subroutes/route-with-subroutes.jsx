import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
    redirectToLogin,
    redirectToSignUp,
    removeBranchName,
    routes as shared_routes,
    isEmptyObject,
    default_title,
    PlatformContext,
} from '@deriv/shared';

const RouteWithSubRoutes = ({
    component: Component,
    exact,
    getTitle,
    is_authenticated,
    is_logged_in,
    path,
    routes,
    to,
    language,
    Component404,
    LoginPrompt,
}) => {
    const { is_deriv_crypto } = React.useContext(PlatformContext);

    const validateRoute = pathname => {
        if (pathname === '') return true;

        if (path?.includes(':')) {
            const static_pathname = pathname.substring(0, pathname.lastIndexOf('/') + 1);
            return static_pathname === path.substring(0, path.indexOf(':'));
        }

        return path === pathname || !!(routes && routes.find(route => pathname === route.path));
    };

    const renderFactory = props => {
        let result = null;

        if (Component === Redirect) {
            let redirect_to = to;

            // This if clause has been added just to remove '/index' from url in localhost env.
            if (path === shared_routes.index) {
                const { location } = props;
                redirect_to = location.pathname.toLowerCase().replace(path, '');
            }

            result = <Redirect to={redirect_to} />;
        } else if (is_authenticated && !is_logged_in) {
            if (LoginPrompt) {
                result = (
                    <LoginPrompt
                        onLogin={() => redirectToLogin(is_logged_in, language)}
                        onSignup={() => redirectToSignUp({ is_deriv_crypto })}
                        page_title={getTitle()}
                    />
                );
            } else {
                result = <Redirect to={shared_routes.root} />;
            }
        } else {
            const default_subroute = routes ? routes.find(r => r.default) : {};
            const has_default_subroute = !isEmptyObject(default_subroute);
            const pathname = removeBranchName(location.pathname).replace(/\/$/, '');
            const is_valid_route = validateRoute(pathname);
            const should_redirect = !Component404;

            result = (
                <React.Fragment>
                    {has_default_subroute && pathname === path && <Redirect to={default_subroute.path} />}
                    {is_valid_route ? (
                        <Component {...props} routes={routes} />
                    ) : (
                        <React.Fragment>
                            {should_redirect ? <Redirect to={shared_routes.root} /> : <Component404 />}
                        </React.Fragment>
                    )}
                </React.Fragment>
            );
        }

        const title = getTitle?.() || '';
        document.title = `${title} | ${default_title}`;
        return result;
    };

    return <Route exact={exact} path={path} render={renderFactory} />;
};

export { RouteWithSubRoutes as RouteWithSubRoutesRender }; // For tests

export default RouteWithSubRoutes;
