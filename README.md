## Running project steps on local devices

## P.S. Developed on Windows machine and tested only on Android devices due to time limitation.

1. Clone this repo
2. Go to project's root directory, `cd <your project name>`
3. Run `yarn` or `npm install` to install dependencies

4. Start the packager with `npm start`
5. Connect a mobile device to your development machine
6. Run the test application:

- On Android:
  - Run `react-native run-android` or Use Android Studio (Recommended)
- On iOS:
  - Open `ios/YourReactProject.xcworkspace` in Xcode
  - Hit `Run` after selecting the desired device

## Attention

Due to react-native-vector-icons bug if icons doesn't shows up on your device/emulator run `react-native link react-native-vector-icons`
