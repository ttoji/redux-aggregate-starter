import { reducer } from './module';

describe('modules/counter', () => {
  test('should return the initial state', () => {
    let state;
    state = reducer(undefined, { type: undefined, payload: undefined });
    expect(state).toEqual({ count: 0 });
  });

  test('should handle INCREMENT', () => {
    let state;
    state = reducer(
      { count: 0 },
      { type: 'counter/increment', payload: { amount: 3 } },
    );
    expect(state).toEqual({ count: 3 });
  });

  test('should handle DECREMENT', () => {
    let state;
    state = reducer(
      { count: 5 },
      { type: 'counter/decrement', payload: { amount: 3 } },
    );
    expect(state).toEqual({ count: 2 });
  });
});