function addNewInput() {
    // Create a new input element
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'dynamicInput'; // You can set a unique name for each input if needed

    // Append the new div to the form
    document.getElementById('dynamicForm').insertBefore(newInput, document.getElementById('submitbutton'));
}
