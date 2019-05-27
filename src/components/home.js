import React from "react";
export default () => (
  <>
    <h2>Demo App</h2>
    ✓ login page <br />
    ✓ automatic logout after N minutes (hardcoded client-side) <br />
    ✓ after login there is (main) menu with 2 positions (with access to 2
    modules) – this main menu is constant
    <br />
    → 3 more buttons added: toggle drawer (hamburder), home (accenture logo) and
    logout button <br />✓ when user clicks position/module 1 submenu should
    appear with 2 positions <br />
    ✓ when user clicks first position some table with few columns should appear
    <br />
    → list of nutrients <br />✓ when user clicks second position form should
    appear with few input fields <br />
    → "calculator" <br />
    ✓ when user clicks position/module 2 submenu should appear with 2 selections
    those selections should not work <br />✓ main menu should have 3 position –
    a button to enable or disable module 2 (if disabled link to module 2 should
    disappear from main menu) → implemented as switch "Show WIP"
    <br />✓ if user is not logged none of the views / pages should work except
    for login page
    <h4>bonuses: </h4>
    ✚ mobile-friendly <br />
    ✚ login form validation <br />
    ✚ "remember Me" checkbox implemented. Persisted auth token also expies
    correctly.
    <br />
    ✚ async auth request simulated with timer <br />
    ✚ spinner around logo at login page <br />
    ✚ "logout" button implemented <br />
    ✚ menu implemented as two synced variants:
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;- top app bar <br />
    &nbsp;&nbsp;&nbsp;&nbsp;- and side drawer <br />
    ✚ current route highlighted in the app bar and side drawer <br />
    <h4>technologies used: </h4>
    👍 react
    <br />
    👍 redux
    <br />
    👍 redux-form <br />
    👍 react router
    <br />
    👍 material-ui
    <br />
    <h4>
      Apart from application provide quick instruction for a developer how to
      add new module (module 3) to the application (in a way it matches
      requirements above, so with module enabling/disabling and session
      validation).
    </h4>
    To add new module:
    <br />
    <ul>
      <li>Add new route and navObject at components/nav.js</li>
      <li>
        Optionally, create separate presentational component in "components" and
        redux controlled container in "containers"
      </li>
      <li>
        If you need redux - add corresponding action creators and reducer in the
        "redux" folder.
      </li>
    </ul>
  </>
);
