const capitalize = require ('./capitalize.js');

it('String Length', ()=>{
    expect(capitalize('ali')).toMatch('Ali')
})