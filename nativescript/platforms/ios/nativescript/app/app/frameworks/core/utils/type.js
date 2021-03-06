"use strict";
var typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unqiue\"");
    }
    typeCache[label] = true;
    return label;
}
exports.type = type;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVVBLElBQUksU0FBUyxHQUFpQyxFQUFFLENBQUM7QUFDakQsY0FBd0IsS0FBYTtJQUNuQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQWdCLEtBQUssdUJBQWtCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsU0FBUyxDQUFTLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztJQUVoQyxNQUFNLENBQUksS0FBSyxDQUFDO0FBQ2xCLENBQUM7QUFSRCxvQkFRQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBmdW5jdGlvbiBjb2VyY2VzIGEgc3RyaW5nIGludG8gYSBzdHJpbmcgbGl0ZXJhbCB0eXBlLlxuICogVXNpbmcgdGFnZ2VkIHVuaW9uIHR5cGVzIGluIFR5cGVTY3JpcHQgMi4wLCB0aGlzIGVuYWJsZXNcbiAqIHBvd2VyZnVsIHR5cGVjaGVja2luZyBvZiBvdXIgcmVkdWNlcnMuXG4gKiBcbiAqIFNpbmNlIGV2ZXJ5IGFjdGlvbiBsYWJlbCBwYXNzZXMgdGhyb3VnaCB0aGlzIGZ1bmN0aW9uIGl0XG4gKiBpcyBhIGdvb2QgcGxhY2UgdG8gZW5zdXJlIGFsbCBvZiBvdXIgYWN0aW9uIGxhYmVsc1xuICogYXJlIHVuaXF1ZS5cbiAqL1xuXG5sZXQgdHlwZUNhY2hlOiB7IFtsYWJlbDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG5leHBvcnQgZnVuY3Rpb24gdHlwZTxUPihsYWJlbDogVCB8ICcnKTogVCB7XG4gIGlmICh0eXBlQ2FjaGVbPHN0cmluZz5sYWJlbF0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFjdGlvbiB0eXBlIFwiJHtsYWJlbH1cIiBpcyBub3QgdW5xaXVlXCJgKTtcbiAgfVxuXG4gIHR5cGVDYWNoZVs8c3RyaW5nPmxhYmVsXSA9IHRydWU7XG5cbiAgcmV0dXJuIDxUPmxhYmVsO1xufVxuIl19