const {login} = require('./login.js')

it('Should print hello',()=>{

    const helloResponse = hello();
    expect(helloResponse).toBe('hello');
    
});