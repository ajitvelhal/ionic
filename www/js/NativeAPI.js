var NativeAPI = {
callNativeFunction: function (success, fail, resultType) {
    console.log ("Welcome");
    return Cordova.exec( success, fail, "NativeAPI", "nativeFunction", [resultType]);
} };