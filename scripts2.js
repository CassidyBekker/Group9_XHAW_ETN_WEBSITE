document.addEventListener('DOMContentLoaded', function() {
    // Get the search input element
    const searchInput = document.getElementById('search');
    
    // Add an event listener for input changes
    searchInput.addEventListener('input', function() {
        // Get the search input and convert it to lowercase
        const searchTerm = this.value.toLowerCase();
        
        // Select all course-box elements
        const courses = document.querySelectorAll('.course-box');
        
        // Loop through each course and check if the title matches the search term
        courses.forEach(function(course) {
            // Get the course title
            const courseTitle = course.querySelector('h2').textContent.toLowerCase();
            
            // Check if the course title includes the search term
            if (courseTitle.includes(searchTerm)) {
                course.style.display = 'block';  // Show course if it matches
            } else {
                course.style.display = 'none';  // Hide course if it doesn't match
            }
        });
    });A
});
