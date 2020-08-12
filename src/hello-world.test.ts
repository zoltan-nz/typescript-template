import { hello } from './hello-world';

describe('./src/helloWorld', () => {
  it('should respond with a combined string', () => {
    expect(hello('Zoltan')).toEqual('Hello, Zoltan!');
  });
});
