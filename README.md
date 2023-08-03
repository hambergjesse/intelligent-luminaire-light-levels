# Helvar Front-end Trainee Home Assignment

This repository contains the solution for the assignment completed by Jesse Hamberg. The task was to implement a component for setting light levels for an intelligent luminaire that has a PIR sensor to detect movement. The UI design should be similar to the reference provided, and the component should have 3 sliders representing different light levels.

## Implementation Details

This repository contains the solution for the assignment completed by Jesse Hamberg. The component was implemented using React and meets all the specified requirements.

### How to Use

1. Clone this repository to your local machine:

```bash
git clone https://github.com/hambergjesse/intelligent-luminaire-light-levels.git
```

2. Navigate to the project directory:

```bash
cd intelligent-luminaire-light-levels
```

3. Install the required dependencies:

```bash
npm install
```

Start the development server:¨

```bash
npm run dev
```

_Open your web browser and go to http://127.0.0.1:5173/ to view the component._

Drag the sliders to adjust the light levels for the luminaire. The UI will update in real-time as you drag the sliders.

**Press the "Apply" button to apply the selected levels.** An alert will display the applied levels.

**Press the "Cancel" button to reset the sliders to their default values.** An alert will indicate that the user does not want to update the luminaire light levels.

_Please note that the component enforces certain restrictions on the slider values to ensure consistency, as specified in the assignment requirements. Refer to the implementation code for more details._

### Dependencies

The implementation uses the following dependencies:

- [**react**](https://reactjs.org/): JavaScript library for building user interfaces.
- [**react-dom**](https://reactjs.org/docs/react-dom.html): Entry point to the React library for rendering components in the DOM.
- [**prop-types**](https://www.npmjs.com/package/prop-types): Runtime type checking for React props.
- [**sass**](https://sass-lang.com/): CSS preprocessor to style the component.
- [**@vitejs/plugin-react**](https://github.com/vitejs/vite/tree/main/packages/plugin-react): Vite plugin for React support.
- [**@vitest/coverage-v8**](https://www.npmjs.com/package/@vitest/coverage-v8): Test coverage reporting tool.
- [**concurrently**](https://www.npmjs.com/package/concurrently): Utility to run multiple npm scripts concurrently.
- [**eslint**](https://eslint.org/): JavaScript linter for code quality and style.
- [**husky**](https://typicode.github.io/husky/#/): Git hooks manager for enforcing pre-commit checks.
- [**lint-staged**](https://www.npmjs.com/package/lint-staged): Utility to run scripts on staged files before committing.
- [**prettier**](https://prettier.io/): Code formatter for consistent code style.
- [**vite**](https://vitejs.dev/): Fast and lightweight development server and build tool.
- [**vitest**](https://vitest.dev/): Testing framework for running and reporting tests.

### Contribution

This project is submitted as part of an assignment, and contributions are not expected. However, you are welcome to fork the repository and make improvements for your own use.
