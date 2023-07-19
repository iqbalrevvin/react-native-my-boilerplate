
# React Native Boilerplate 2023

My React Native Boilerplate refers to [TheCodingMachine](https://github.com/thecodingmachine/react-native-boilerplate) boilerplate with some coding style adjustments that I applied.


## 🚀 From TheCodingMachine
This project is a React Native boilerplate that can be used to kickstart a mobile application.

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kickstart a mobile application.

The boilerplate provides **an optimized architecture for building solid cross-platform mobile applications** through separation of concerns between the UI and business logic. It is fully documented so that each piece of code that lands in your application can be understood and used.

To learn more about TheCodingMachine boilerplate, go to [thecodingmachine documentation](https://thecodingmachine.github.io/react-native-boilerplate)


## Requirements

Node 14 or greater is required. Development for iOS requires a Mac and Xcode 10 or up, and will target iOS 11 and up.

You also need to install the dependencies required by React Native.  
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `React Native CLI Quickstart` tab.  
Follow instructions for your given `development OS` and `target OS`.

## Running Project

After you clone this project, follow the steps below.

```bash
  cd to-this-project
  yarn install
```
Assuming you have all the requirements installed, you can run the project by running:

- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn <platform>` to run the *platform* application (remember to start a simulator or connect a device)

    
## Code Health

In my future projects, I pay a lot of attention to code quality and code health, so I tighten up my coding a bit with linter rules and also use typescript.

To check codehealth simply run the command below.

`yarn code-health` This will run a linter check as well as a typescript to make sure there are no error codes.



## License

This project is released under the [MIT License](LICENSE).
