const initialValue = {
  bookData: [],
  errorMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const bookReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_BOOK_PENDING':
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

    case 'GET_BOOK_BY_ID_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_BOOK_BY_ID_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errorMsg: action.payload.data,
      };
    case 'GET_BOOK_BY_ID_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        bookData: action.payload.data,
      };
    case 'GET_BOOK_RETURN_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_BOOK_RETURN_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errorMsg: action.payload.data,
      };
    case 'GET_BOOK_RETURN_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        bookData: action.payload.data,
      };

    case 'RENT_BOOK_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'RENT_BOOK_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errorMsg: action.payload.data,
      };
    case 'RENT_BOOK_FULFILLED':
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
