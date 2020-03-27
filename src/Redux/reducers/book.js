const initialValue = {
  bookData: [],
  errorMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const bookReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_Book_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_BOOK_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errorMsg: action.payload.data,
      };
    case 'GET_BOOK_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        bookData: action.payload.data,
      };
    default:
      return state;
  }
};

export default bookReducers;
