        // // Doi sang dinh dang tien VND
        function vnd(price) {
            return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        }

    // // Close popup 
    const body = document.querySelector("body");
    let     modalContainer = document.querySelectorAll('.modal');
    let modalBox = document.querySelectorAll('.mdl-cnt');
    let formLogSign = document.querySelector('.forms');

    // Click vùng ngoài sẽ tắt Popup
    modalContainer.forEach(item => {
        item.addEventListener('click', closeModal);
    });

    modalBox.forEach(item => {
        item.addEventListener('click', function (event) {
            event.stopPropagation();
        })
    });

    function closeModal() {
        modalContainer.forEach(item => {
            item.classList.remove('open');
        });
        console.log(modalContainer)
        body.style.overflow = "auto";
    }

    function increasingNumber(e) {
        let qty = e.parentNode.querySelector('.input-qty');
        if (parseInt(qty.value) < qty.max) {
            qty.value = parseInt(qty.value) + 1;
        } else {
            qty.value = qty.max;
        }
    }

    function decreasingNumber(e) {
        let qty = e.parentNode.querySelector('.input-qty');
        if (qty.value > qty.min) {
            qty.value = parseInt(qty.value) - 1;
        } else {
            qty.value = qty.min;
        }
    }


    // // Open Search Advanced
    document.querySelector(".filter-btn").addEventListener("click",(e) => {
        e.preventDefault();
        document.querySelector(".advanced-search").classList.toggle("open");
        document.getElementById("home-service").scrollIntoView();
    })

    document.querySelector(".form-search-input").addEventListener("click",(e) => {
        e.preventDefault();
        document.getElementById("home-service").scrollIntoView();
    })

    function closeSearchAdvanced() {
        document.querySelector(".advanced-search").classList.toggle("open");
    }

    // //Open Search Mobile 
    function openSearchMb() {
        document.querySelector(".header-middle-left").style.display = "none";
        document.querySelector(".header-middle-center").style.display = "block";
        document.querySelector(".header-middle-right-item.close").style.display = "block";
        let liItem = document.querySelectorAll(".header-middle-right-item.open");
        for(let i = 0; i < liItem.length; i++) {
            liItem[i].style.setProperty("display", "none", "important")
        }
    }

    // //Close Search Mobile 
    function closeSearchMb() {
        document.querySelector(".header-middle-left").style.display = "block";
        document.querySelector(".header-middle-center").style.display = "none";
        document.querySelector(".header-middle-right-item.close").style.display = "none";
        let liItem = document.querySelectorAll(".header-middle-right-item.open");
        for(let i = 0; i < liItem.length; i++) {
            liItem[i].style.setProperty("display", "block", "important")
        }
    }
    
    // Back to top
    window.onscroll = () => {
        let backtopTop = document.querySelector(".back-to-top")
        if (document.documentElement.scrollTop > 100) {
            backtopTop.classList.add("active");
        } else {
            backtopTop.classList.remove("active");
        }
    }

    // Auto hide header on scroll
    const headerNav = document.querySelector(".header-bottom");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if(lastScrollY < window.scrollY) {
            headerNav.classList.add("hide")
        } else {
            headerNav.classList.remove("hide")
        }
        lastScrollY = window.scrollY;
    })


    function renderProducts(showProduct) {
        let productHtml = '';
    
        if (showProduct.length === 0) {
            document.getElementById("home-title").style.display = "none";
            productHtml = `
                <div class="no-result">
                    <div class="no-result-h">Tìm kiếm không có kết quả</div>
                    <div class="no-result-p">Xin lỗi, chúng tôi không thể tìm được kết quả hợp với tìm kiếm của bạn</div>
                    <div class="no-result-i"><i class="fa-light fa-face-sad-cry"></i></div>
                </div>`;
        } else {
            document.getElementById("home-title").style.display = "block";
            showProduct.forEach((product) => {
                productHtml += `
                    <div class="col-product">
                        <article class="card-product">
                            <div class="card-header">
                                <a href="#" class="card-image-link" onclick="detailProduct(${product.id})">
                                    <img class="card-image" src="${product.img}" alt="${product.title}">
                                </a>
                            </div>
                            <div class="shoes-info">
                                <div class="card-content">
                                    <div class="card-title">
                                        <a href="#" class="card-title-link" onclick="detailProduct(${product.id})">${product.title}</a>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="product-price">
                                        <span class="current-price">${vnd(product.price)}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>`;
            });
        }
        document.getElementById('home-products').innerHTML = productHtml;
    }


    // Find Product
    function createProduct() {
        if (localStorage.getItem('products') == null) {
            let products = [
                // [Your list of product objects as defined above]
            ];
            localStorage.setItem('products', JSON.stringify(products));
        }
    }
    
    window.onload = createProduct;
    
    let productAll = JSON.parse(localStorage.getItem('products')).filter(item => item.status === 1);
    
    function searchProducts(mode) {
        let valeSearchInput = document.querySelector('.form-search-input').value.trim();
        let valueCategory = document.getElementById("advanced-search-category-select").value;
        let sizeS = parseInt(document.getElementById("size").value);
        let minPrice = parseInt(document.getElementById("min-price").value);
        let maxPrice = parseInt(document.getElementById("max-price").value);
    
        // Check price range
        if (minPrice && maxPrice && minPrice > maxPrice) {
            alert("Giá đã nhập sai!");
            return;
        }
    
        // Check size range
        if (sizeS && (sizeS < 30 || sizeS > 45)) {
            alert("Size không hợp lệ! Vui lòng chọn từ 30 đến 45.");
            return;
        }
    
        // Filter by category
        let result = valueCategory === "Tất cả" ? productAll : productAll.filter(item => item.category.includes(valueCategory));
    
        // Filter by title search input
        if (valeSearchInput) {
            result = result.filter(item => item.title.toUpperCase().includes(valeSearchInput.toUpperCase()));
        }
    
        // Filter by price range
        if (minPrice && !maxPrice) {
            result = result.filter(item => item.price >= minPrice);
        } else if (!minPrice && maxPrice) {
            result = result.filter(item => item.price <= maxPrice);
        } else if (minPrice && maxPrice) {
            result = result.filter(item => item.price >= minPrice && item.price <= maxPrice);
        }
    
        // Filter by size
        if (sizeS) {
            result = result.filter(item => item.size.includes(sizeS));
        }
    
        // Scroll to home-service section
        document.getElementById("home-service").scrollIntoView();
    
        // Sort results based on mode
        switch (mode) {
            case 0: // Reset search filters
                result = productAll;
                document.querySelector('.form-search-input').value = "";
                document.getElementById("advanced-search-category-select").value = "Tất cả";
                document.getElementById("size").value = "";
                document.getElementById("min-price").value = "";
                document.getElementById("max-price").value = "";
                break;
            case 1: // Sort by ascending price
                result.sort((a, b) => a.price - b.price);
                break;
            case 2: // Sort by descending price
                result.sort((a, b) => b.price - a.price);
                break;
        }
    
        // Display filtered products
        showHomeProduct(result);
    }
    
    // Phân trang 
    let perPage = 10 ;  
    let currentPage = 1;
    let totalPage = 0;
    let perProducts = [];

    function displayList(productAll, perPage, currentPage) {
        let start = (currentPage - 1) * perPage;
        let end = (currentPage - 1) * perPage + perPage;
        let productShow = productAll.slice(start, end);
        renderProducts(productShow);
    }

    function showHomeProduct(products) {
        let productAll = products.filter(item => item.status == 1)
        displayList(productAll, perPage, currentPage);
        setupPagination(productAll, perPage, currentPage);
    }

    window.onload = showHomeProduct(JSON.parse(localStorage.getItem('products')))

    function setupPagination(productAll, perPage) {
        document.querySelector('.page-nav-list').innerHTML = '';
        let page_count = Math.ceil(productAll.length / perPage);
        for (let i = 1; i <= page_count; i++) {
            let li = paginationChange(i, productAll, currentPage);
            document.querySelector('.page-nav-list').appendChild(li);
        }
    }

    function paginationChange(page, productAll, currentPage) {
        let node = document.createElement(`li`);
        node.classList.add('page-nav-item');
        node.innerHTML = `<a href="javascript:;">${page}</a>`;
        if (currentPage == page) node.classList.add('active');
        node.addEventListener('click', function () {
            currentPage = page;
            displayList(productAll, perPage, currentPage);
            let t = document.querySelectorAll('.page-nav-item.active');
            for (let i = 0; i < t.length; i++) {
                t[i].classList.remove('active');
            }
            node.classList.add('active');
            document.getElementById("home-service").scrollIntoView();
        })
        return node;
    }


    
    function showCategory(category) {
        // Lấy danh sách tất cả sản phẩm từ localStorage
        let productAll = JSON.parse(localStorage.getItem('products')) || [];
    
        // Lọc danh sách sản phẩm dựa trên category được chọn
        let productSearch = productAll.filter(product =>
            product.category.some(cat => cat.toUpperCase().includes(category.toUpperCase()))
        );
    
        // Kiểm tra kết quả lọc
        console.log("Category selected:", category);
        console.log("Filtered products:", productSearch);
    
        // Thiết lập trang hiện tại và hiển thị kết quả
        let currentPageSearch = 1;
        displayList(productSearch, perPage, currentPageSearch);
        setupPagination(productSearch, perPage, currentPageSearch);
    
        // Hiển thị kết quả và di chuyển màn hình tới vị trí của danh sách sản phẩm
        document.getElementById('trangchu').classList.remove('hide');
        document.getElementById("home-title").scrollIntoView();
    }
    
    


