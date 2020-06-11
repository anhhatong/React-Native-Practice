const initialState = {
    info: {
        username: '',
        password: ''
    },
    data: {
        isSearching: false,
        todosUnmatched: [],
        todoListsUnmatched: [],
        isShowingOverdue: true,
        isShowingDueToday: true,
        isShowingDueTomorrow: true,
        searchStr: '',
        todoInput: '',
        currentDate: '',
        todos: [
            { listId: 0, id: 0, title: "Todo 1", done: false, date: '' },
            { listId: 0, id: 1, title: "Todo 2", done: false, date: '' }
        ],
        lists: [
            {
                id: 0, title: "List 1", list: [
                    { listId: 0, id: 0, title: "Todo 1", done: false, date: '1986-12-14' },
                    { listId: 0, id: 1, title: "Todo 2", done: false, date: '1986-12-14' }
                ]
            },
            {
                id: 1, title: "List 2", list: [
                    { listId: 1, id: 0, title: "Todo 1", done: false, date: '2020-06-05' },
                    { listId: 1, id: 1, title: "Todo 2", done: false, date: '2020-06-06' }
                ]
            }
        ],
        listId: 0,
        todoId: 0
    }
}

export default initialState;