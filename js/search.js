/**
 * Search Functionality
 * Allows users to search for tools across the website
 */
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const toolsContainer = document.getElementById('tools-container');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                return;
            }
            
            // If we're on the home page, filter the tools
            if (toolsContainer) {
                filterTools(searchTerm);
            } else {
                // If we're on another page, redirect to home with search parameter
                window.location.href = `/?search=${encodeURIComponent(searchTerm)}`;
            }
        });
    }
    
    // Check for search parameter when page loads
    if (toolsContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchTerm = urlParams.get('search');
        
        if (searchTerm) {
            searchInput.value = searchTerm;
            filterTools(searchTerm);
        }
    }
    
    function filterTools(searchTerm) {
        const toolCards = document.querySelectorAll('.tool-card');
        let matchFound = false;
        
        toolCards.forEach(card => {
            const toolName = card.querySelector('.card-title').textContent.toLowerCase();
            const toolDescription = card.querySelector('.card-text').textContent.toLowerCase();
            
            if (toolName.includes(searchTerm) || toolDescription.includes(searchTerm)) {
                card.style.display = 'block';
                matchFound = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show message if no matches found
        const noResultsMessage = document.getElementById('no-results-message');
        if (noResultsMessage) {
            noResultsMessage.style.display = matchFound ? 'none' : 'block';
        }
    }
});
