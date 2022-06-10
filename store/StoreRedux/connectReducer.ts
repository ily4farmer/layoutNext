interface StateBooks {
    books: any[],
    loading: boolean,
    error: null | string
}

// interface для action.type

enum BooksActionTypes {
    FETCH__BOOKS = "FETCH__BOOKS",
    FETCH__BOOKS__SUCCESS = "FETCH__BOOKS__SUCCESS",
    FETCH__BOOKS__ERROR = "FETCH__BOOKS__ERROR"
}

interface FetchBooksAction {
    type: BooksActionTypes.FETCH__BOOKS;
}

interface FetchBooksSuccessAction {
    type: BooksActionTypes.FETCH__BOOKS__SUCCESS;
    payload: any[]
}

interface FetchBooksErrorAction {
    type: BooksActionTypes.FETCH__BOOKS__ERROR;
    payload:  string
}

// 

const initialState: StateBooks = {
    books: [],
    loading: false,
    error: null 
}

type BooksAction = FetchBooksAction | FetchBooksSuccessAction | FetchBooksErrorAction

export const booksReducer = (state = initialState, action: BooksAction): StateBooks => {
    switch (action.type) {
        case BooksActionTypes.FETCH__BOOKS:
            return {loading: true, error: null, books: []}
        case BooksActionTypes.FETCH__BOOKS__SUCCESS:
                return {loading: false, error: null, books: action.payload}
        case BooksActionTypes.FETCH__BOOKS__ERROR:
            return {loading: false, error: action.payload, books: []}
        default:
            return state
    }
}