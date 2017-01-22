"use strict";
var multilingual_state_1 = require('../states/multilingual.state');
var multilingual_action_1 = require('../actions/multilingual.action');
function reducer(state, action) {
    if (state === void 0) { state = multilingual_state_1.initialState; }
    switch (action.type) {
        case multilingual_action_1.ActionTypes.LANG_CHANGED:
            return Object.assign({}, state, {
                lang: action.payload
            });
        default:
            return state;
    }
}
exports.reducer = reducer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL2kxOG4vcmVkdWNlcnMvbXVsdGlsaW5ndWFsLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG1DQUFpRCw4QkFBOEIsQ0FBQyxDQUFBO0FBQ2hGLG9DQUFxQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBRXRFLGlCQUNJLEtBQXdDLEVBQ3hDLE1BQWU7SUFEZixxQkFBd0MsR0FBeEMseUNBQXdDO0lBRzFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssaUNBQVcsQ0FBQyxZQUFZO1lBQzNCLE1BQU0sQ0FBTyxNQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQ3JDLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTzthQUNyQixDQUFDLENBQUM7UUFFTDtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUM7QUFiZSxlQUFPLFVBYXRCLENBQUEiLCJmaWxlIjoiYXBwL2ZyYW1ld29ya3MvaTE4bi9yZWR1Y2Vycy9tdWx0aWxpbmd1YWwucmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1vZHVsZVxuaW1wb3J0IHsgSU11bHRpbGluZ3VhbFN0YXRlLCBpbml0aWFsU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvbXVsdGlsaW5ndWFsLnN0YXRlJztcbmltcG9ydCB7IEFjdGlvbnMsIEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9tdWx0aWxpbmd1YWwuYWN0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gICAgc3RhdGU6IElNdWx0aWxpbmd1YWxTdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgICBhY3Rpb246IEFjdGlvbnNcbik6IElNdWx0aWxpbmd1YWxTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFjdGlvblR5cGVzLkxBTkdfQ0hBTkdFRDpcbiAgICAgIHJldHVybiAoPGFueT5PYmplY3QpLmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbGFuZzogYWN0aW9uLnBheWxvYWRcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl19
