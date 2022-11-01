import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('courseActionCreators tests', () => {

  it('Verifies that selectCourse function returns correct action', () => {
    const action = selectCourse(1);
    expect(action).toEqual({
      type: 'SELECT_COURSE',
      index: 1,
    });
  });

  it('Verifies that unSelectCourse function returns correct action', () => {
    expect(unSelectCourse(1)).toEqual({
      type: 'UNSELECT_COURSE',
      index: 1,
    });
  });
});
