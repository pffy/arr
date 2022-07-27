# arr
Arrays code sketch repo

# PURPOSE
  + This repo is designed to create fast access to test code via `git clone`.


### Fixed array vs. Array.push

## Details

Uses `console.time` to profile the creation of array with 1440 items.

Runs in NodeJS.
```bash
$ apt install nodejs
$ node test1.js
```

## Results

 Test | Fixed Array (ms) | Array.push (ms) 
:--: | :--: | :--:
1 | 2.989 | 1.230
2 | 4.915 | 1.564
3 | 4.254 | 1.225
4 | 3.232 | 1.243
5 | 5.519 | 1.209
6 | 3.087 | 1.177

# LICENSE
  + https://unlicense.org/
