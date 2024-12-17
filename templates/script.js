document.getElementById('search-input').addEventListener('keyup', function() {
    var input = document.getElementById('search-input').value.toLowerCase();
    var products = document.querySelectorAll('.product');
    products.forEach(function(product) {
        var name = product.getAttribute('data-name').toLowerCase();
        if (name.includes(input)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
});
