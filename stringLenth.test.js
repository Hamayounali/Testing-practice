const stringlength = require ('./string.js');
const reverse = require ('./reverseString.js');

it('String Length', ()=>{
    expect(stringlength("ali")).toEqual(3)
})

it('String to be greater than 1', ()=>{
    expect(stringlength("ali")).toBeGreaterThan(1)
})
it('String to smaller than 10', ()=>{
    expect(stringlength("ali")).toBeLessThan(10)
})

it('Reverse String', () => {
    expect(reverse('ali')).toMatch('ila')
})
