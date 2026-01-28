# Project Blueprint

## Overview

This project is a web application that has been migrated from Cordova to Capacitor. It uses a variety of technologies, including jQuery, Alpine.js, and Stage.js. The project is configured for native builds on Android and iOS.

## Style, Design, and Features

### Style and Design

*   **Frameworks:** jQuery Mobile, Semantic UI
*   **Layout:** The application uses a single-page architecture with multiple "pages" managed by jQuery Mobile.
*   **Appearance:** The application has a custom theme and uses a variety of UI components from Semantic UI, including buttons and labels.

### Features

*   **Splash Screen:** A "curtain" element is displayed for 3 seconds when the application starts.
*   **Main Page:** The main page displays a header, a canvas element, and a footer.
*   **Test Page:** A separate page for testing purposes.
*   **Dynamic Content:** The application uses Alpine.js for data binding and dynamic content updates.
*   **Canvas:** The application uses Stage.js to create and manage a canvas element.

## Current Plan

This section documents the steps taken to prepare the project for native builds.

*   **Install Capacitor CLI:** The Capacitor CLI was installed to enable the migration process.
*   **Initialize Capacitor:** Capacitor was initialized in the project, creating the `capacitor.config.ts` file.
*   **Set Package Name:** The `appId` was updated to `com.polar.jellybo` in `capacitor.config.ts`.
*   **Add Native Platforms:** The Android and iOS platforms were added to the project by installing `@capacitor/android` and `@capacitor/ios` and running `npx cap add android` and `npx cap add ios`.

## Build Instructions

To generate the final application packages, you must use the native IDEs on your local machine.

### Android Build (`.apk`)

1.  **Open in Android Studio**: Open the `android` folder from your project in Android Studio.
2.  **Sync Gradle**: Wait for Android Studio to index the files and sync the project with Gradle.
3.  **Build**: Go to the menu and select **Build** > **Build Bundle(s) / APK(s)** > **Build APK(s)**.
4.  **Locate the file**: Your `.apk` file will be in the `android/app/build/outputs/apk/debug/` directory.

### iOS Build (`.ipa`)

You must have a Mac with Xcode and CocoaPods installed.

1.  **Install Dependencies**: In your terminal, navigate to the `ios` directory and run `pod install`.
2.  **Open in Xcode**: Open the `.xcworkspace` file from the `ios` directory in Xcode.
3.  **Configure Signing**: Select your project in the Xcode navigator, go to the "Signing & Capabilities" tab, and select your developer team.
4.  **Run/Build**: Select a target simulator or a connected iOS device and click the "Run" button.
5.  **Archive for Distribution**: To create an `.ipa` file, use the **Product** > **Archive** menu.
