import { SamplepipePipe } from './samplepipe.pipe';
const pipe = new SamplepipePipe();
describe('SamplepipePipe', () => {
  it('create an instance', () => {
    
    expect(pipe).toBeTruthy();
  });

  it('display message', () => {
    expect(pipe.transform("Ram")).toBe("Have a nice day Ram:)");
  })
});
