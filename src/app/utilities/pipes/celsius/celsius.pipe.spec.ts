import { CelsiusPipe } from './celsius.pipe';

describe('CelsiusPipe', () => {
  it('create an instance', () => {
    const pipe = new CelsiusPipe();
    expect(pipe).toBeTruthy();
  });
});
