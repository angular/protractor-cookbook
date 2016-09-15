Contributing to Source Code (Pull Requests)
===========================================

Follow the [Angular contribution rules](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md).

 * If your PR changes any behavior or fixes an issue, it should have an associated test.
 * New features should be general and as simple as possible.
 * All pull requests require review. No PR will be submitted without a comment from a team member stating LGTM (Looks good to me).

Protractor-cookbook specific rules
----------------------------------

 * JavaScript style should generally follow the [Google JS style guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml).
 * Wrap code at 100 chars.
 * Document public methods with jsdoc.
 * Be consistent with the code around you!

Commit Messages
---------------

Please write meaningful commit messages - they are used to generate the changelog, so the commit message should tell a user everything they need to know about a commit. Protractor-cookbook follows AngularJS's [commit message format](https://docs.google.com/a/google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.z8a3t6ehl060).

In summary, this style is

    <type>(<scope>): <subject>
    <BLANK LINE>
    <body>

Where `<type>` is one of [feat, fix, docs, refactor, test, chore, deps] and
`<scope>` is a quick descriptor of the location of the change
