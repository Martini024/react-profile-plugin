## React-Profile-Plugin

The problem this plugin try to solve is in ./doc/Coding Test ReactJS_JAN 2021.pdf, the following section will share my thoughts and explain my solution.

### Installation

Run following command will restore project dependencies and start the app in the development mode

    yarn install
    yarn start

### Solution

The wizard for creating profile can be built by a form component which accepts user input, description field can use a rich-text editor which allows formatting text. After use submitted the profile, data will be persisted in database with description field stored in html/markdown/file format.

Inside mobile application webview, initially when we load the page, component will fetch profile data through API, if there's no existing one, will display a empty hidden profile card component, otherwise, a profile card containing the avatar and name will shown, and just like a normal component, can be clicked and popup a modal displaying more details like description field. Through innerHtml insertion, rich-text format description can be parse and displayed on the screen.

### Remarks

The plugin is prototyped by ant design, using basic form component and grid system to briefly illustrate the solution.

The wysiwyg editor used is CKEditor5, inside **Bonus 1** text alignment and formatting can be easily implemented by selecting a combination of the plugins CKEditor provided. Cropping photo can also be done by various image processing tools on the market. But placement of the photo will require different solutions according to the requirement.
