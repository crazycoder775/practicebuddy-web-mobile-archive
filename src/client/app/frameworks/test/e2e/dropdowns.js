"use strict";
function selectDropdownByNumber(selector, index, milliseconds) {
    element(by.css(selector)).all(by.tagName('option'))
        .then(function (options) {
        options[index].click();
    });
    if (typeof milliseconds !== 'undefined') {
        browser.sleep(milliseconds);
    }
}
exports.selectDropdownByNumber = selectDropdownByNumber;
function selectDropdownByValue(selector, item, milliseconds) {
    element(by.css(selector)).sendKeys(item);
    if (typeof milliseconds !== 'undefined') {
        browser.sleep(milliseconds);
    }
}
exports.selectDropdownByValue = selectDropdownByValue;
function selectRandomDropdownReturnText(selector, milliseconds) {
    element(by.css(selector)).all(by.tagName('option')).then(function (options) {
        var randomNumber = Math.floor((Math.random() * options.length));
        options[randomNumber].click();
        return options[randomNumber].getText().then(function (text) {
            return text;
        });
    });
    if (typeof milliseconds !== 'undefined') {
        browser.sleep(milliseconds);
    }
}
exports.selectRandomDropdownReturnText = selectRandomDropdownReturnText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHJvcGRvd25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFPQSxnQ0FBdUMsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsWUFBb0I7SUFDMUYsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRCxJQUFJLENBQUMsVUFBUyxPQUFZO1FBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLEVBQUUsQ0FBQyxDQUFDLE9BQU8sWUFBWSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0FBQ0gsQ0FBQztBQVJELHdEQVFDO0FBUUQsK0JBQXNDLFFBQWdCLEVBQUUsSUFBWSxFQUFFLFlBQW9CO0lBRXhGLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sWUFBWSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0FBQ0gsQ0FBQztBQU5ELHNEQU1DO0FBT0Qsd0NBQStDLFFBQWdCLEVBQUUsWUFBb0I7SUFDbkYsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLE9BQVk7UUFDNUUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUM1RCxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFZO1lBQy9ELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLENBQUMsT0FBTyxZQUFZLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7QUFDSCxDQUFDO0FBWkQsd0VBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBicm93c2VyOiBhbnksIGVsZW1lbnQ6IGFueSwgYnk6IGFueTtcblxuLyoqXG4qIFVzYWdlOiBzZWxlY3REcm9wZG93bkJ5TnVtYmVyICggc2VsZWN0b3IsIGluZGV4KVxuKiBzZWxlY3RvciA6IHNlbGVjdCBlbGVtZW50XG4qIGluZGV4IDogaW5kZXggaW4gdGhlIGRyb3Bkb3duLCAxIGJhc2UuXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERyb3Bkb3duQnlOdW1iZXIoc2VsZWN0b3I6IHN0cmluZywgaW5kZXg6IG51bWJlciwgbWlsbGlzZWNvbmRzOiBudW1iZXIpIHtcbiAgZWxlbWVudChieS5jc3Moc2VsZWN0b3IpKS5hbGwoYnkudGFnTmFtZSgnb3B0aW9uJykpXG4gICAgLnRoZW4oZnVuY3Rpb24ob3B0aW9uczogYW55KSB7XG4gICAgICBvcHRpb25zW2luZGV4XS5jbGljaygpO1xuICAgIH0pO1xuICBpZiAodHlwZW9mIG1pbGxpc2Vjb25kcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBicm93c2VyLnNsZWVwKG1pbGxpc2Vjb25kcyk7XG4gIH1cbn1cblxuXG4vKipcbiogVXNhZ2U6IHNlbGVjdERyb3Bkb3duQnlWYWx1ZSAoc2VsZWN0b3IsIGl0ZW0pXG4qIHNlbGVjdG9yIDogc2VsZWN0IGVsZW1lbnRcbiogaXRlbSA6IG9wdGlvbihzKSBpbiB0aGUgZHJvcGRvd24uXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERyb3Bkb3duQnlWYWx1ZShzZWxlY3Rvcjogc3RyaW5nLCBpdGVtOiBzdHJpbmcsIG1pbGxpc2Vjb25kczogbnVtYmVyKSB7XG4gIC8vIHZhciBkZXNpcmVkT3B0aW9uOiBhbnk7XG4gIGVsZW1lbnQoYnkuY3NzKHNlbGVjdG9yKSkuc2VuZEtleXMoaXRlbSk7XG4gIGlmICh0eXBlb2YgbWlsbGlzZWNvbmRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGJyb3dzZXIuc2xlZXAobWlsbGlzZWNvbmRzKTtcbiAgfVxufVxuXG4vKipcbiogVXNhZ2U6IHNlbGVjdFJhbmRvbURyb3Bkb3duUmV0dXJuVGV4dCAoIHNlbGVjdG9yLCBtaWxsaXNlY29uZHMpXG4qIHNlbGVjdG9yIDogc2VsZWN0IHJhbmRvbSBlbGVtZW50XG4qIGluZGV4IDogd2FpdCB0aW1lIHRvIHNlbGVjdCB2YWx1ZSBmb3IgZHJvcCBkb3duLlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RSYW5kb21Ecm9wZG93blJldHVyblRleHQoc2VsZWN0b3I6IHN0cmluZywgbWlsbGlzZWNvbmRzOiBudW1iZXIpIHtcbiAgZWxlbWVudChieS5jc3Moc2VsZWN0b3IpKS5hbGwoYnkudGFnTmFtZSgnb3B0aW9uJykpLnRoZW4oZnVuY3Rpb24ob3B0aW9uczogYW55KSB7XG4gICAgdmFyIHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiBvcHRpb25zLmxlbmd0aFxuICAgICkpO1xuICAgIG9wdGlvbnNbcmFuZG9tTnVtYmVyXS5jbGljaygpO1xuICAgIHJldHVybiBvcHRpb25zW3JhbmRvbU51bWJlcl0uZ2V0VGV4dCgpLnRoZW4oZnVuY3Rpb24odGV4dDogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9KTtcbiAgfSk7XG4gIGlmICh0eXBlb2YgbWlsbGlzZWNvbmRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGJyb3dzZXIuc2xlZXAobWlsbGlzZWNvbmRzKTtcbiAgfVxufVxuIl19