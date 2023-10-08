function toggleDropDown() {
    var customizeGroup = document.getElementById('customize-group');

    // Get the computed style to check the actual display state
    var computedStyle = window.getComputedStyle(customizeGroup);

    // Check the current display style of customizeGroup
    if (computedStyle.display === 'none' || computedStyle.display === '') {
        customizeGroup.style.display = 'block'; // Show the element
    } else {
        customizeGroup.style.display = 'none'; // Hide the element
    }
}

// Attach the toggleDropDown function to the click event of the dropdownIcon
const dropdownIcon = document.getElementById('dropdown-icon');
dropdownIcon.addEventListener('click', toggleDropDown);

