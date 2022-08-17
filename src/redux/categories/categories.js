const CHECKSTATUS = 'bookStore/categories/CHECK_STATUS';

const beginState = {};

export const checkStatus = () => ({
  type: 'CHECKSTATUS',
});

const statusReducer = (state = beginState, action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default statusReducer;
