// history.js
import { createBrowserHistory } from 'history';

export default createBrowserHistory({
    /* pass a configuration object here if needed */
    basename: process.env.PUBLIC_URL || '', // The base URL of the app (see below)
    forceRefresh: false, // Set true to force full page refreshes
    keyLength: 6, // The length of location.key
})
