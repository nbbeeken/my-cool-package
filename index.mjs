import myCoolFunctionHelper from './index.mjs'

const myCoolFunction = (i = 1) => {
    if (i === 0) return console.log('\u{d83d}\u{de0e}');
    return myCoolFunctionHelper(i - 1)
}

export { myCoolFunction as default };
