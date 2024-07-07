document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const categorySelect = document.getElementById('category-select');
    
    dropdown.addEventListener('click', function(event) {
        event.preventDefault();
        dropdown.classList.toggle('active');
    });
    
    categorySelect.addEventListener('change', function() {
        const selectedCategory = categorySelect.value;
        filterProducts(selectedCategory);
    });

    function filterProducts(category) {
        const productItems = document.querySelectorAll('.product-item');
        
        productItems.forEach(function(item) {
            const itemCategory = item.dataset.category;
            if (category === 'all' || category === itemCategory) {
                item.style.display = 'block'; // Show product item
            } else {
                item.style.display = 'none'; // Hide product item
            }
        });
    }
});
