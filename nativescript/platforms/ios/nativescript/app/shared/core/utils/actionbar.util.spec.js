"use strict";
var index_1 = require("../../../app/frameworks/test/index");
var actionbar_util_1 = require("./actionbar.util");
function main() {
    index_1.t.describe('nativescript: ActionBarUtil', function () {
        index_1.t.it('sanity', function () {
            index_1.t.e(actionbar_util_1.ActionBarUtil.SET_TITLE).toBeDefined();
            index_1.t.e(actionbar_util_1.ActionBarUtil.ADD_BUTTON).toBeDefined();
            index_1.t.e(actionbar_util_1.ActionBarUtil.EMPTY_ITEMS).toBeDefined();
            index_1.t.e(actionbar_util_1.ActionBarUtil.STATUSBAR_STYLE).toBeDefined();
        });
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uYmFyLnV0aWwuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGlvbmJhci51dGlsLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDREQUF1RDtBQUN2RCxtREFBaUQ7QUFFakQ7SUFDRSxTQUFDLENBQUMsUUFBUSxDQUFDLDZCQUE2QixFQUFFO1FBRXhDLFNBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ2IsU0FBQyxDQUFDLENBQUMsQ0FBQyw4QkFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNDLFNBQUMsQ0FBQyxDQUFDLENBQUMsOEJBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QyxTQUFDLENBQUMsQ0FBQyxDQUFDLDhCQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0MsU0FBQyxDQUFDLENBQUMsQ0FBQyw4QkFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBVkQsb0JBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0IH0gZnJvbSAnLi4vLi4vLi4vYXBwL2ZyYW1ld29ya3MvdGVzdC9pbmRleCc7XG5pbXBvcnQgeyBBY3Rpb25CYXJVdGlsIH0gZnJvbSAnLi9hY3Rpb25iYXIudXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuICB0LmRlc2NyaWJlKCduYXRpdmVzY3JpcHQ6IEFjdGlvbkJhclV0aWwnLCAoKSA9PiB7XG4gICAgXG4gICAgdC5pdCgnc2FuaXR5JywgKCkgPT4geyAgIFxuICAgICAgdC5lKEFjdGlvbkJhclV0aWwuU0VUX1RJVExFKS50b0JlRGVmaW5lZCgpO1xuICAgICAgdC5lKEFjdGlvbkJhclV0aWwuQUREX0JVVFRPTikudG9CZURlZmluZWQoKTtcbiAgICAgIHQuZShBY3Rpb25CYXJVdGlsLkVNUFRZX0lURU1TKS50b0JlRGVmaW5lZCgpO1xuICAgICAgdC5lKEFjdGlvbkJhclV0aWwuU1RBVFVTQkFSX1NUWUxFKS50b0JlRGVmaW5lZCgpO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdfQ==