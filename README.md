# The base structure of the project.

# Composition: Vue 2 (with class decorators and singefile components), Typescript, VueX (with decorators), Sass (in components), moment.js, vuelidate, vuetify, vue-toastification, jsonRPC requests

## Folder structure

- **/api** - contains endpoints grouped by category
- **/assets** -

- **/components** - contains component files. The application pages are collected from them
- **/components/atoms** - contains component files. The application pages are collected from them
- **/components/molecules** - contains component files. The application pages are collected from them
- **/components/organisms** - contains component files. The application pages are collected from them

- **/models** - contains information about the types enums used in the application
- **/models/enums** - contains information about the enums used in the application
- **/models/objects** - contains static application data (strings, objects, arrays)

- **/pages** - contains the application page files. One file - one page (with a unique url)
- **/plugins** - contains
- **/router** - contains the routing settings in the application
- **/store** - contains state manager files (in this case MobX)
- **/styles** - contains application style files. Structured according to the "components" and "pages" folders
- **/utils** - contains additional and auxiliary methods for application components

> ESLint and Prettier are also configured in the application
