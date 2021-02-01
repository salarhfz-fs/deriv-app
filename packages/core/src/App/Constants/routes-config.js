import React from 'react';
import { Redirect as RouterRedirect } from 'react-router-dom';
import { getUrlBase, routes } from '@deriv/shared';
import { localize } from '@deriv/translations';
import { makeLazyLoader } from '_common/lazy-load';
import { Redirect } from 'App/Containers/Redirect';
import Endpoint from 'Modules/Endpoint';

// Error Routes
const Page404 = React.lazy(() => import(/* webpackChunkName: "404" */ 'Modules/Page404'));

const Trader = React.lazy(() => {
    const el_head = document.querySelector('head');
    const el_main_css = document.createElement('link');
    el_main_css.href = getUrlBase('/css/trader.main.css');
    el_main_css.rel = 'stylesheet';
    el_main_css.type = 'text/css';
    el_head.appendChild(el_main_css);
    // eslint-disable-next-line import/no-unresolved
    return import(/* webpackChunkName: "trader" */ '@deriv/trader');
});

const Account = React.lazy(() => {
    const el_head = document.querySelector('head');
    const el_main_css = document.createElement('link');
    el_main_css.href = getUrlBase('/account/css/account.css');
    el_main_css.rel = 'stylesheet';
    el_main_css.type = 'text/css';
    el_head.appendChild(el_main_css);
    // eslint-disable-next-line import/no-unresolved
    return import(/* webpackChunkName: "account" */ '@deriv/account');
});

const Cashier = React.lazy(() => {
    const el_head = document.querySelector('head');
    const el_main_css = document.createElement('link');
    el_main_css.href = getUrlBase('/css/cashier.css');
    el_main_css.rel = 'stylesheet';
    el_main_css.type = 'text/css';
    el_head.appendChild(el_main_css);
    // eslint-disable-next-line import/no-unresolved
    return import(/* webpackChunkName: "cashier" */ '@deriv/cashier');
});

const Bot = React.lazy(() => {
    // eslint-disable-next-line import/no-unresolved
    return import(/* webpackChunkName: "bot" */ '@deriv/bot-web-ui');
});

const Dashboard = React.lazy(() => {
    // eslint-disable-next-line import/no-unresolved
    return import(/* webpackChunkName: "dashboard" */ 'Modules/Dashboard');
});

const getModules = ({ is_deriv_crypto }) => {
    const modules = [
        {
            path: routes.bot,
            component: Bot,
            // Don't use `Localize` component since native html tag like `option` cannot render them
            getTitle: () => localize('Bot'),
        },
        {
            path: routes.dashboard,
            component: Dashboard,
            getTitle: () => localize('Dashboard'),
            routes: [
                {
                    path: routes.explore,
                    component: Dashboard,
                    getTitle: () => localize('Explore'),
                },
                {
                    path: routes.about_us,
                    component: Dashboard,
                    getTitle: () => localize('About Us'),
                },
                {
                    path: routes.resources,
                    component: Dashboard,
                    getTitle: () => localize('Resources'),
                },
                {
                    path: routes.platform_dmt5_synthetic,
                    component: Dashboard,
                    getTitle: () => localize('DMT5 Synthetic'),
                },
            ],
        },
        {
            path: routes.account_deactivated,
            component: Account,
            getTitle: () => localize('Account deactivated'),
        },
        {
            path: routes.account,
            component: Account,
            getTitle: () => localize('Account Settings'),
            icon_component: 'IcUserOutline',
            is_authenticated: true,
            // TODO: Revisit this workaround for subroutes [app-routing]
            routes: [
                {
                    getTitle: () => localize('Profile'),
                    icon: 'IcUserOutline',
                    subroutes: [
                        {
                            path: routes.personal_details,
                            component: Account,
                            getTitle: () => localize('Personal details'),
                            default: true,
                        },
                        ...(is_deriv_crypto
                            ? []
                            : [
                                  {
                                      path: routes.financial_assessment,
                                      component: Account,
                                      getTitle: () => localize('Financial assessment'),
                                  },
                              ]),
                    ],
                },
                ...(is_deriv_crypto
                    ? []
                    : [
                          {
                              getTitle: () => localize('Verification'),
                              icon: 'IcVerification',
                              subroutes: [
                                  {
                                      path: routes.proof_of_identity,
                                      component: Account,
                                      getTitle: () => localize('Proof of identity'),
                                  },
                                  {
                                      path: routes.proof_of_address,
                                      component: Account,
                                      getTitle: () => localize('Proof of address'),
                                  },
                              ],
                          },
                      ]),
                {
                    getTitle: () => localize('Security and safety'),
                    icon: 'IcSecurity',
                    subroutes: [
                        {
                            path: routes.deriv_password,
                            component: Account,
                            getTitle: () => localize('Deriv password'),
                        },
                        {
                            path: routes.self_exclusion,
                            component: Account,
                            getTitle: () => localize('Self exclusion'),
                        },
                        {
                            path: routes.account_limits,
                            component: Account,
                            getTitle: () => localize('Account limits'),
                        },
                        {
                            path: routes.login_history,
                            component: Account,
                            getTitle: () => localize('Login history'),
                        },
                        {
                            path: routes.api_token,
                            component: Account,
                            getTitle: () => localize('API token'),
                        },
                        {
                            path: routes.connected_apps,
                            component: Account,
                            getTitle: () => localize('Connected apps'),
                        },
                        {
                            path: routes.two_factor_authentication,
                            component: Account,
                            getTitle: () => localize('Two-factor authentication'),
                        },
                        {
                            path: routes.deactivate_account,
                            component: Account,
                            getTitle: () => localize('Deactivate account'),
                        },
                    ],
                },
            ],
        },
        {
            path: routes.cashier,
            component: Cashier,
            is_modal: true,
            is_authenticated: true,
            getTitle: () => localize('Cashier'),
            icon_component: 'IcCashier',
            routes: [
                {
                    path: routes.cashier_deposit,
                    component: Cashier,
                    getTitle: () => localize('Deposit'),
                    icon_component: 'IcWalletAdd',
                    default: true,
                },
                {
                    path: routes.cashier_withdrawal,
                    component: Cashier,
                    getTitle: () => localize('Withdrawal'),
                    icon_component: 'IcWalletMinus',
                },
                ...(is_deriv_crypto
                    ? []
                    : [
                          {
                              path: routes.cashier_pa,
                              component: Cashier,
                              getTitle: () => localize('Payment agents'),
                              icon_component: 'IcPaymentAgent',
                          },
                      ]),
                {
                    path: routes.cashier_acc_transfer,
                    component: Cashier,
                    getTitle: () => localize('Transfer'),
                    icon_component: 'IcAccountTransfer',
                },
                ...(is_deriv_crypto
                    ? []
                    : [
                          {
                              path: routes.cashier_pa_transfer,
                              component: Cashier,
                              getTitle: () => localize('Transfer to client'),
                              icon_component: 'IcAccountTransfer',
                          },
                          {
                              path: routes.cashier_p2p,
                              component: Cashier,
                              getTitle: () => localize('DP2P'),
                              icon_component: 'IcDp2p',
                          },
                      ]),
                {
                    id: 'gtm-onramp-tab',
                    path: routes.cashier_onramp,
                    component: Cashier,
                    getTitle: () => localize('Fiat onramp'),
                    icon_component: 'IcCashierOnRamp',
                },
            ],
        },
        {
            path: routes.root,
            component: Trader,
            getTitle: () => localize('Trader'),
            routes: [
                { path: routes.mt5, component: Trader, getTitle: () => localize('MT5'), is_authenticated: false },
                {
                    path: routes.reports,
                    component: Trader,
                    getTitle: () => localize('Reports'),
                    icon_component: 'IcReports',
                    is_authenticated: true,
                    routes: [
                        {
                            path: routes.positions,
                            component: Trader,
                            getTitle: () => localize('Open positions'),
                            icon_component: 'IcOpenPositions',
                            default: true,
                        },
                        {
                            path: routes.profit,
                            component: Trader,
                            getTitle: () => localize('Profit table'),
                            icon_component: 'IcProfitTable',
                        },
                        {
                            path: routes.statement,
                            component: Trader,
                            getTitle: () => localize('Statement'),
                            icon_component: 'IcStatement',
                        },
                    ],
                },
                {
                    path: routes.contract,
                    component: Trader,
                    getTitle: () => localize('Contract Details'),
                    is_authenticated: true,
                },
                { path: routes.error404, component: Trader, getTitle: () => localize('Error 404') },
            ],
        },
    ];

    return modules;
};

const lazyLoadComplaintsPolicy = makeLazyLoader(() =>
    import(/* webpackChunkName: "complaints-policy" */ 'Modules/ComplaintsPolicy')
);

// Order matters
// TODO: search tag: test-route-parent-info -> Enable test for getting route parent info when there are nested routes
const initRoutesConfig = ({ is_deriv_crypto }) => [
    { path: routes.index, component: RouterRedirect, getTitle: () => '', to: routes.root },
    { path: routes.endpoint, component: Endpoint, getTitle: () => 'Endpoint' }, // doesn't need localization as it's for internal use
    { path: routes.redirect, component: Redirect, getTitle: () => localize('Redirect') },
    {
        path: routes.complaints_policy,
        component: lazyLoadComplaintsPolicy(),
        getTitle: () => localize('Complaints policy'),
        icon_component: 'IcComplaintsPolicy',
        is_authenticated: true,
    },
    ...getModules({ is_deriv_crypto }),
];

let routesConfig;

// For default page route if page/path is not found, must be kept at the end of routes_config array
const route_default = { component: Page404, getTitle: () => localize('Error 404') };

// is_deriv_crypto = true as default to prevent route ui blinking
const getRoutesConfig = ({ is_deriv_crypto = true }) => {
    if (!routesConfig) {
        routesConfig = initRoutesConfig({ is_deriv_crypto });
        routesConfig.push(route_default);
    }
    return routesConfig;
};

export default getRoutesConfig;
