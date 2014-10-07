# baudio-live

```
npm install baudio-live -g
```

## Usage

Given a file `music.js` like
```js
module.exports = function (t) {
    return sin(t, 300) + sin(t,309)
}
```

And the command:

```
baudio-live music.js
```

It will output the music and update it if you are changing that file.

You can save the sounds with the `-o` option:
```
baudio-live music.js -o awesome.wav
```