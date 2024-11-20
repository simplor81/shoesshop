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

    function selectSize(button) {
        // Xóa class 'selected' khỏi tất cả các nút size
        document.querySelectorAll('.size-button').forEach(btn => {
            btn.classList.remove('selected');
        });
    
        // Thêm class 'selected' vào nút được nhấn
        button.classList.add('selected');
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
                                    <img class="card-image" src="${product.img[0]}" alt="${product.title}">
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
                                     <div class="product-buy">
                                        <button onclick="detailProduct(${product.id})" class="card-button order-item"><i class="fa-regular fa-cart-shopping-fast"></i> Đặt ngay </button>
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

  // Hiển thị chuyên mục
  function showCategory(category) {
    document.getElementById('trangchu').classList.remove('hide');
    let productSearch = productAll.filter(value => {
        return value.category.toString().toUpperCase().includes(category.toUpperCase());
    })
    let currentPageSeach = 1;
    displayList(productSearch, perPage, currentPageSeach);
    setupPagination(productSearch, perPage, currentPageSeach);
    document.getElementById("home-title").scrollIntoView();
}

function detailProduct(index) {
    let modal = document.querySelector('.modal.product-detail');
    let products = JSON.parse(localStorage.getItem('products'));
    event.preventDefault();

    // Tìm sản phẩm dựa trên id
    let infoProduct = products.find(sp => sp.id === index);

    // Xử lý hiển thị hình ảnh thu nhỏ
    let thumbnailsHtml = infoProduct.img.map((imgSrc, i) => `
        <img src="${imgSrc}" alt="Thumbnail ${i + 1}" class="thumbnail-image" onclick="document.querySelector('.main-image').src='${imgSrc}'">
    `).join('');

    // Xử lý hiển thị danh sách kích thước
    let sizesHtml = infoProduct.size.map(size => `
        <button class="size-button" onclick="selectSize(this)">${size}</button>
    `).join('');

    // Giao diện HTML của modal
    let modalHtml = `
        <div class="product-container">
            <!-- Phần bên trái: Hình ảnh -->
            <div class="product-images">
                <img src="${infoProduct.img[0]}" alt="${infoProduct.title}" class="main-image">
                <div class="thumbnails">${thumbnailsHtml}</div>
            </div>

            <!-- Phần bên phải: Thông tin sản phẩm -->
            <div class="product-details">
                <h1>${infoProduct.title}</h1>
                <p class="price">${vnd(infoProduct.price)}</p>
                <div class="sizes">
                    <p>Size </p>
                    ${sizesHtml}
                </div>
                <div class="buttons_added">
                    <input class="minus is-form" type="button" value="-" onclick="decreasingNumber(this)">
                    <input class="input-qty" max="100" min="1" name="" type="number" value="1">
                    <input class="plus is-form" type="button" value="+" onclick="increasingNumber(this)">
                </div>
                <div class="modal-footer-control">
                    <button class="button-dathangngay" data-product="${infoProduct.id}">Đặt ngay</button>
                    <button class="button-dat" id="add-cart" onclick="animationCart()"><i class="fa-light fa-basket-shopping"></i></button>
                </div>
            </div>
        </div>
    `;

    // Gắn HTML vào modal và hiển thị
    document.querySelector('#product-detail-content').innerHTML = modalHtml;
    modal.classList.add('open');
    document.body.style.overflow = "hidden";

    // Cập nhật giá tiền khi thay đổi số lượng
    let qtyInput = document.querySelector('.input-qty');
    let decrementBtn = document.querySelector('.decrement');
    let incrementBtn = document.querySelector('.increment');
    let priceText = document.querySelector('.price');

    const updatePrice = () => {
        let quantity = parseInt(qtyInput.value) || 1;
        let updatedPrice = infoProduct.price * quantity;
        priceText.innerHTML = `${updatedPrice.toLocaleString()} ₫`;
    };

    decrementBtn.addEventListener('click', () => {
        if (qtyInput.value > 1) {
            qtyInput.value = parseInt(qtyInput.value) - 1;
            updatePrice();
        }
    });

    incrementBtn.addEventListener('click', () => {
        qtyInput.value = parseInt(qtyInput.value) + 1;
        updatePrice();
    });

    qtyInput.addEventListener('input', updatePrice);

    // Thêm sản phẩm vào giỏ hàng
    let addToCartBtn = document.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', () => {
        if (localStorage.getItem('currentuser')) {
            addCart(infoProduct.id);
            toast({
                title: 'Success',
                message: 'Sản phẩm đã được thêm vào giỏ hàng!',
                type: 'success',
                duration: 3000
            });
        } else {
            toast({
                title: 'Warning',
                message: 'Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!',
                type: 'warning',
                duration: 3000
            });
        }
    });

    // Xử lý hành động mua ngay (cần định nghĩa `dathangngay`)
    dathangngay();
}


function animationCart() {
    document.querySelector(".count-product-cart").style.animation = "slidein ease 1s"
    setTimeout(()=>{
        document.querySelector(".count-product-cart").style.animation = "none"
    },1000)
}

    

//Signup && Login Form

    // Chuyen doi qua lai SignUp & Login 
    let signup = document.querySelector('.signup-link');
    let login = document.querySelector('.login-link');
    let container = document.querySelector('.signup-login .modal-container');
    login.addEventListener('click', () => {
        container.classList.add('active');
    })

    signup.addEventListener('click', () => {
        container.classList.remove('active');
    })

    let signupbtn = document.getElementById('signup');
    let loginbtn = document.getElementById('login');
    let formsg = document.querySelector('.modal.signup-login')
    signupbtn.addEventListener('click', () => {
        formsg.classList.add('open');
        container.classList.remove('active');
        body.style.overflow = "hidden";
    })

    loginbtn.addEventListener('click', () => {
        document.querySelector('.form-message-check-login').innerHTML = '';
        formsg.classList.add('open');
        container.classList.add('active');
        body.style.overflow = "hidden";
    })

    // Dang nhap & Dang ky

    // Chức năng đăng ký
    let signupButton = document.getElementById('signup-button');
    let loginButton = document.getElementById('login-button');
    signupButton.addEventListener('click', () => {
        event.preventDefault();
        let fullNameUser = document.getElementById('fullname').value;
        let phoneUser = document.getElementById('phone').value;
        let passwordUser = document.getElementById('password').value;
        let passwordConfirmation = document.getElementById('password_confirmation').value;
        let checkSignup = document.getElementById('checkbox-signup').checked;
        // Check validate
        if (fullNameUser.length == 0) {
            document.querySelector('.form-message-name').innerHTML = 'Vui lòng nhập họ vâ tên';
            document.getElementById('fullname').focus();
        } else if (fullNameUser.length < 3) {
            document.getElementById('fullname').value = '';
            document.querySelector('.form-message-name').innerHTML = 'Vui lòng nhập họ và tên lớn hơn 3 kí tự';
        } else {
            document.querySelector('.form-message-name').innerHTML = '';
        }
        if (phoneUser.length == 0) {
            document.querySelector('.form-message-phone').innerHTML = 'Vui lòng nhập vào số điện thoại';
        } else if (phoneUser.length != 10) {
            document.querySelector('.form-message-phone').innerHTML = 'Vui lòng nhập vào số điện thoại 10 số';
            document.getElementById('phone').value = '';
        } else {
            document.querySelector('.form-message-phone').innerHTML = '';
        }
        if (passwordUser.length == 0) {
            document.querySelector('.form-message-password').innerHTML = 'Vui lòng nhập mật khẩu';
        } else if (passwordUser.length < 6) {
            document.querySelector('.form-message-password').innerHTML = 'Vui lòng nhập mật khẩu lớn hơn 6 kí tự';
            document.getElementById('password').value = '';
        } else {
            document.querySelector('.form-message-password').innerHTML = '';
        }
        if (passwordConfirmation.length == 0) {
            document.querySelector('.form-message-password-confi').innerHTML = 'Vui lòng nhập lại mật khẩu';
        } else if (passwordConfirmation !== passwordUser) {
            document.querySelector('.form-message-password-confi').innerHTML = 'Mật khẩu không khớp';
            document.getElementById('password_confirmation').value = '';
        } else {
            document.querySelector('.form-message-password-confi').innerHTML = '';
        }
        if (checkSignup != true) {
            document.querySelector('.form-message-checkbox').innerHTML = 'Vui lòng check đăng ký';
        } else {
            document.querySelector('.form-message-checkbox').innerHTML = '';
        }

        if (fullNameUser && phoneUser && passwordUser && passwordConfirmation && checkSignup) {
            if (passwordConfirmation == passwordUser) {
                let user = {
                    fullname: fullNameUser,
                    phone: phoneUser,
                    password: passwordUser,
                    address: '',
                    email: '',
                    status: 1,
                    join: new Date(),
                    cart: [],
                    userType: 0
                }
                let accounts = localStorage.getItem('accounts') ? JSON.parse(localStorage.getItem('accounts')) : [];
                let checkloop = accounts.some(account => {
                    return account.phone == user.phone;
                })
                if (!checkloop) {
                    accounts.push(user);
                    localStorage.setItem('accounts', JSON.stringify(accounts));
                    localStorage.setItem('currentuser', JSON.stringify(user));
                    toast({ title: 'Thành công', message: 'Tạo thành công tài khoản !', type: 'success', duration: 3000 });
                    closeModal();
                    kiemtradangnhap();
                    updateAmount();
                } else {
                    toast({ title: 'Thất bại', message: 'Tài khoản đã tồn tại !', type: 'error', duration: 3000 });
                }
            } else {
                toast({ title: 'Thất bại', message: 'Sai mật khẩu !', type: 'error', duration: 3000 });
            }
        }
    }
    )

    // Dang nhap
    loginButton.addEventListener('click', () => {
        event.preventDefault();
        let phonelog = document.getElementById('phone-login').value;
        let passlog = document.getElementById('password-login').value;
        let accounts = JSON.parse(localStorage.getItem('accounts'));

        if (phonelog.length == 0) {
            document.querySelector('.form-message.phonelog').innerHTML = 'Vui lòng nhập vào số điện thoại';
        } else if (phonelog.length != 10) {
            document.querySelector('.form-message.phonelog').innerHTML = 'Vui lòng nhập vào số điện thoại 10 số';
            document.getElementById('phone-login').value = '';
        } else {
            document.querySelector('.form-message.phonelog').innerHTML = '';
        }

        if (passlog.length == 0) {
            document.querySelector('.form-message-check-login').innerHTML = 'Vui lòng nhập mật khẩu';
        } else if (passlog.length < 6) {
            document.querySelector('.form-message-check-login').innerHTML = 'Vui lòng nhập mật khẩu lớn hơn 6 kí tự';
            document.getElementById('passwordlogin').value = '';
        } else {
            document.querySelector('.form-message-check-login').innerHTML = '';
        }

        if (phonelog && passlog) {
            let vitri = accounts.findIndex(item => item.phone == phonelog);
            if (vitri == -1) {
                toast({ title: 'Error', message: 'Tài khoản của bạn không tồn tại', type: 'error', duration: 3000 });
            } else if (accounts[vitri].password == passlog) {
                if(accounts[vitri].status == 0) {
                    toast({ title: 'Warning', message: 'Tài khoản của bạn đã bị khóa', type: 'warning', duration: 3000 });
                } else {
                    localStorage.setItem('currentuser', JSON.stringify(accounts[vitri]));
                    toast({ title: 'Success', message: 'Đăng nhập thành công', type: 'success', duration: 3000 });
                    closeModal();
                    kiemtradangnhap();
                    checkAdmin();
                    updateAmount();
                }
            } else {
                toast({ title: 'Warning', message: 'Sai mật khẩu', type: 'warning', duration: 3000 });
            }
        }
    })

    // Kiểm tra xem có tài khoản đăng nhập không ?
    function kiemtradangnhap() {
        let currentUser = localStorage.getItem('currentuser');
        if (currentUser != null) {
            let user = JSON.parse(currentUser);
            document.querySelector('.auth-container').innerHTML = `<span class="text-dndk">Tài khoản</span>
                <span class="text-tk">${user.fullname} <i class="fa-sharp fa-solid fa-caret-down"></span>`
            document.querySelector('.header-middle-right-menu').innerHTML = `<li><a href="javascript:;" onclick="myAccount()"><i class="fa-light fa-circle-user"></i> Tài khoản của tôi</a></li>
                <li><a href="javascript:;" onclick="orderHistory()"><i class="fa-regular fa-bags-shopping"></i> Đơn hàng đã mua</a></li>
                <li class="border"><a id="logout" href="javascript:;"><i class="fa-light fa-right-from-bracket"></i> Thoát tài khoản</a></li>`
            document.querySelector('#logout').addEventListener('click',logOut)
        }
    }

    function logOut() {
        let accounts = JSON.parse(localStorage.getItem('accounts'));
        user = JSON.parse(localStorage.getItem('currentuser'));
        let vitri = accounts.findIndex(item => item.phone == user.phone)
        accounts[vitri].cart.length = 0;
        for (let i = 0; i < user.cart.length; i++) {
            accounts[vitri].cart[i] = user.cart[i];
        }
        localStorage.setItem('accounts', JSON.stringify(accounts));
        localStorage.removeItem('currentuser');
        window.location = "/";
    }

    function checkAdmin() {
        let user = JSON.parse(localStorage.getItem('currentuser'));
        if(user && user.userType == 1) {
            let node = document.createElement(`li`);
            node.innerHTML = `<a href="./admin.html"><i class="fa-light fa-gear"></i> Quản lý cửa hàng</a>`
            document.querySelector('.header-middle-right-menu').prepend(node);
        } 
    }

    window.onload = kiemtradangnhap();
    window.onload = checkAdmin();

    // Chuyển đổi trang chủ và trang thông tin tài khoản
    function myAccount() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.getElementById('trangchu').classList.add('hide');
        document.getElementById('order-history').classList.remove('open');
        document.getElementById('account-user').classList.add('open');
        userInfo();
    }

