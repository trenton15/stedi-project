import hello from './hello.js';
import assert from 'assert';

it('Should print hello',()=>{

    let helloResponse = hello();
    assert.equal(helloResponse, 'hello');
    
});