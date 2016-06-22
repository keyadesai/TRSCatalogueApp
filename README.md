# catelogue app
This project was generated with Generator-M-Ionic v1.8.0. For more info visit the [repository](https://github.com/mwaylabs/generator-m-ionic) or check out the README below.

# After you cloned a project from a repository, run
npm install # install node packages
bower install # install bower packages
gulp --cordova 'prepare' # install Cordova platforms and plugins
gulp watch


### Run in browser

```sh
gulp watch
# add --no-open to avoid browser opening
gulp watch --no-build
```
#### Build, run on the device/emulators

```sh
# both implicitly run gulp build which builds the Ionic app into www/
gulp --cordova 'run ios --device'
gulp --cordova 'emulate ios'
# run the version currently in the www/ folder, without a new build
gulp --cordova 'run ios --device' --no-build
# build Options
gulp --cordova 'run ios --device' --minify --force-build
# Use specific target (e.g. iPhone-6)
gulp --cordova 'emulate ios --target=iPhone-6'
# to list available targets on your machine, run:
`./platforms/ios/cordova/lib/list-emulator-images`
# these will need to be installed in Xcode before ready to use
```

#### Handle Cordova platforms/plugins
```sh
# platforms, use --save to add to config.xml
gulp --cordova 'platform ls' # list
gulp --cordova 'platform add android --save' # add
gulp --cordova 'platform rm android --save' # remove
# plugins, use --save to add to config.xml
gulp --cordova 'plugins ls' # list
gulp --cordova 'plugins add org.apache.cordova.camera --save' # add
gulp --cordova 'plugins rm org.apache.cordova.camera ---save' # remove
```




