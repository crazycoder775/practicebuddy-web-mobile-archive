"use strict";
var index_1 = require('../states/index');
var actions = require('../actions/name-list.action');
function reducer(state, action) {
    if (state === void 0) { state = index_1.initialState; }
    switch (action.type) {
        case actions.ActionTypes.INITIALIZED:
            return Object.assign({}, state, {
                names: action.payload
            });
        case actions.ActionTypes.NAME_ADDED:
            return Object.assign({}, state, {
                names: state.names.concat([action.payload])
            });
        default:
            return state;
    }
}
exports.reducer = reducer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL3NhbXBsZS9yZWR1Y2Vycy9uYW1lLWxpc3QucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0JBQTJDLGlCQUFpQixDQUFDLENBQUE7QUFDN0QsSUFBWSxPQUFPLFdBQU0sNkJBQTZCLENBQUMsQ0FBQTtBQUV2RCxpQkFDSSxLQUFrQyxFQUNsQyxNQUF1QjtJQUR2QixxQkFBa0MsR0FBbEMsNEJBQWtDO0lBR3BDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXO1lBQ2xDLE1BQU0sQ0FBTyxNQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQ3JDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTzthQUN0QixDQUFDLENBQUM7UUFFTCxLQUFLLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUNqQyxNQUFNLENBQU8sTUFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO2dCQUNyQyxLQUFLLEVBQU0sS0FBSyxDQUFDLEtBQUssU0FBRSxNQUFNLENBQUMsT0FBTyxFQUFDO2FBQ3hDLENBQUMsQ0FBQztRQUVMO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQztBQWxCZSxlQUFPLFVBa0J0QixDQUFBIiwiZmlsZSI6ImFwcC9mcmFtZXdvcmtzL3NhbXBsZS9yZWR1Y2Vycy9uYW1lLWxpc3QucmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTYW1wbGVTdGF0ZSwgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL2luZGV4JztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9uYW1lLWxpc3QuYWN0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gICAgc3RhdGU6IElTYW1wbGVTdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgICBhY3Rpb246IGFjdGlvbnMuQWN0aW9uc1xuKTogSVNhbXBsZVN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYWN0aW9ucy5BY3Rpb25UeXBlcy5JTklUSUFMSVpFRDpcbiAgICAgIHJldHVybiAoPGFueT5PYmplY3QpLmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbmFtZXM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9KTtcblxuICAgIGNhc2UgYWN0aW9ucy5BY3Rpb25UeXBlcy5OQU1FX0FEREVEOlxuICAgICAgcmV0dXJuICg8YW55Pk9iamVjdCkuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBuYW1lczogWy4uLnN0YXRlLm5hbWVzLCBhY3Rpb24ucGF5bG9hZF1cbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl19
