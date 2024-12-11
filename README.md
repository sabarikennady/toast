This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start
```

# Toast Notifications App

This project is a simple Toast Notification application built using React Native. The app demonstrates how to display four types of toast notifications (Info, Warning, Success, and Error) with custom messages and styles. It uses **React Native Reanimated** for smooth animations and transitions, making the notifications more engaging. The app features a modern, minimalist UI with pastel background colors for each toast type.

## Features

- **Four Types of Toast Notifications**:
  - **Info**: Light blue background with an informational message.
  - **Warning**: Yellow background to alert the user about potential issues.
  - **Success**: Green background to celebrate successful actions.
  - **Error**: Red background to notify the user of errors.

- **Customizable Text and Background Colors**: 
  - Text color is a neutral dark shade for all notifications.
  - Pastel background colors with slight hints of the original color for each toast type.

- **Smooth Animations with React Native Reanimated**: Toast notifications fade in and fade out smoothly, providing a visually pleasant user experience.

- **Toast Icon/Gif**: Added a gif animation to illustrate toast behavior in the `assets` folder, showcasing the different toast types.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sabarikennady/toast.git
   ```

2. Navigate to the project folder:
   ```bash
   cd toast
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Install `react-native-reanimated`:
   ```bash
   npm install react-native-reanimated
   ```

5. Make sure to configure Reanimated in your project by following [this setup guide](https://docs.swmansion.com/react-native-reanimated/docs/installation/) (if you haven’t already).

6. Run the app:
   ```bash
   npx react-native run-android   # For Android
   npx react-native run-ios       # For iOS (macOS only)
   ```

## Usage

- To display a toast notification, simply call the `showToast` function with the desired type and message:
  
  ```javascript
  showToast('info', 'This is an info toast!');
  showToast('warning', 'Be careful, something is not right!');
  showToast('success', 'You did it! Success!');
  showToast('error', 'Oops! Something went wrong.');
  ```

- The toast notifications will automatically disappear after a short duration.

## React Native Reanimated

This project uses **React Native Reanimated** to add smooth and high-performance animations to the toast notifications. Reanimated helps create fluid animations for elements like the fade-in and fade-out effects of the toast notifications, enhancing the overall user experience.

### Installation and Configuration for Reanimated:
- After running `npm install react-native-reanimated`, ensure that you've correctly linked and configured Reanimated by following the [official setup documentation](https://docs.swmansion.com/react-native-reanimated/docs/installation/).
- If you're using Expo, you can also follow their [integration guide for Reanimated](https://docs.expo.dev/versions/latest/sdk/reanimated/).

## Customization

- **Toast Types**: You can modify the toast types, background colors, and text styles according to your needs.
- **Text Color**: The default text color is set to dark gray (`#333333`), but you can change it to any color you prefer in the app’s styles.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements

- [React Native](https://reactnative.dev/) for providing the framework for building cross-platform mobile apps.
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) for adding high-performance animations.
- [React Native Toast](https://github.com/kevinresol/react-native-toast) for inspiration on creating toast notifications.

---

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
