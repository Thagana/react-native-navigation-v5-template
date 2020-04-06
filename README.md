# React Native Navigation Template

## Disclamer
Follow the instruction properly, so that the app/project will run correctly

## Check before proceeding
- [x] [Download Androind Studio](https://developer.android.com/studio)
- [x] [Download Node.js](https://nodejs.org/en/download/)
- [x] [Download VS Code](https://code.visualstudio.com/download) or [Sublime Text 3](https://www.sublimetext.com/3)
- [x] [Download git cli](https://developer.android.com/studio)
- [x] Download Home Brew for mac
```bash
	$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
- [x] Download Cocopods for mac
```bash
	$ sudo gem install cocoapods
```

## Download the prject
```bash
	$ git clone https://github.com/Thagana/react-native-navigation-v5-template.git
```

### Install Dependency
```bash
	$ cd react-native-navigation-v5-template
```
### Install Native Dependency for ios using cocopods
```bash
	$ cd ./ios && pod install && cd ..
```

### Run the application ios
```bash
	$ npx react-native run-ios
```

### Run the appliaction android
```bash
	$ npx react-native run-android
```
## Navigation Tree Structure

+ -- Root Navigation( Naviagtion Container)
|
+ -- RootStackNavigator (2)
|
+ --- *AuthenticationStack* || *Dashboard* -- Dependiang on authentication global state
|
+ - AuthenticationStack (3)
|
+ ----- *Authentication* && *SignIn* && *SignOut* --- Either One.
|
+ ------- Authentication (Screen) 
|
+ ------- SignIn (Screen)
|
+ ------- SignOut (Screen)
|
|
+ - Dashboard (2)
|
+ ----- *TabStack* && Profile \ Drawer Navigator (burger menu)
|
+ ------ TabStack (Tab Navigator) (3)
|
+ ------- *FeedStack* (StackNavigator) (2)
|
+ -------- Feed (Screen)
|
+ -------- Details (Screen)
|
+ ------- *SettingsStack* (StackNavigator) (1)
|
+ --------- Settings (Screen)
|
+ -------- Profile (Screen)

### Libraries used
- [react-native-vectoricons](https://github.com/oblador/react-native-vector-icons)
- [react-navigation](https://reactnavigation.org/docs/getting-started)
- [easy-peasy](https://easy-peasy.now.sh/)

### Extra Reading
- [allinonehomeschool](https://allinonehomeschool.com/easy-peasy-getting-started-videos/)
- [allinonehomeschool](https://allinonehomeschool.com/getting-ready-1/)
- [reactnavigation](https://reactnavigation.org/docs/hello-react-navigation)
- [Tabs](https://reactnavigation.org/docs/tab-based-navigation)
- [Drawer](https://reactnavigation.org/docs/drawer-based-navigation)