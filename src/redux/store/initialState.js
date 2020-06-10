const initialState = {
    isSearching: false,
    todoEdit: '',
    todosUnmatched: [],
    todoListsUnmatched: [],
    isShowingOverdue: false,
    isShowingDueToday: false,
    isShowingDueTomorrow: false,
    searchStr: '',
    todoInput: '',
    currentDate: '',
    todos: [
        { listId: 0, id: 1, title: "Todo 2", done: false, date: '' },
        { listId: 0, id: 0, title: "Todo 1", done: false, date: '' }
    ],
    lists: [
        {
            id: 1, title: "List 2", list: [
                { listId: 1, id: 1, title: "Todo 2", done: false, date: '2020-06-06' },
                { listId: 1, id: 0, title: "Todo 1", done: false, date: '2020-06-05' }
            ]
        },
        {
            id: 0, title: "List 1", list: [
                { listId: 0, id: 1, title: "Todo 2", done: false, date: '1986-12-14' },
                { listId: 0, id: 0, title: "Todo 1", done: false, date: '1986-12-14' }
            ]
        }
    ],
    listId: 0,
    todoId: 0
}

export default initialState;