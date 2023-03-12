

$(document).ready(function () {
    // format money
    const prices = document.getElementsByClassName("price");
    for (let i = 0; i < prices.length; i++) {
        const money = prices[i].innerHTML;
        const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9}
        const formated = new Intl.NumberFormat('vi-VN', config).format(money);
        prices[i].innerText = formated;
    }
    //event listener for the button icon hãng điện thoại
    let cbAllPhones = document.querySelector("#cb-all-phone");
    cbAllPhones.checked = true;
    let cbAllPrices = document.querySelector("#cb-all-price");
    cbAllPrices.checked = true;
    eventNextPreviosIconPhones();
});

// Get the list of all the datasets
let list = localStorage.getItem("ds");
list = Array.from(JSON.parse(list));
// console.log(list);

//function event click button next and previous icon hãng điện thoại
function eventNextPreviosIconPhones() {
    let itemIconPhones = document.querySelectorAll(".ic-phone");
    itemIconPhones[7].style.display = "none";
    itemIconPhones[8].style.display = "none";
    itemIconPhones[9].style.display = "none";

    let btnnext = document.querySelector(".btnNext");
    let btnPrevious = document.querySelector(".btnPrevious");

    let n = -1;
    let p = 6;

    btnPrevious.addEventListener("click", function () {
        if (p <= 8) {
            n++;
            p++;
            itemIconPhones[p].style.display = "block";
            itemIconPhones[n].style.display = "none";
        }
    });

    btnnext.addEventListener("click", function () {
        if (p === 9) {
            itemIconPhones[p].style.display = "none";
            itemIconPhones[n].style.display = "block";
            p--;
            n--;
        } else {
            if (n >= 0) {
                itemIconPhones[p].style.display = "none";
                itemIconPhones[n].style.display = "block";
                p--;
                n--;
            }
        }
    });
}
//envent click checkbox phone
const brands = new Set();
let minPrice = 0;
let maxPrice = 0;
const prices = new Set();
let itemCbPhones = document.querySelectorAll(".cb-item-phone");
let cbAllPhones = document.querySelector("#cb-all-phone");
let iconPhones = document.querySelectorAll(".ic-phone");
let itemCbPrice = document.querySelectorAll(".cb-item-price");
let cbAllPrice = document.querySelector("#cb-all-price");

//event click checkbox price


cbAllPrice.addEventListener("click", function () {
    EnventCbAll('price');
});

itemCbPrice.forEach(function (item) {
    item.addEventListener("click", function () {
        EnventCbitemPrice(item);
    });
});

//function event click checkbox item price
function EnventCbitemPrice(item) {
    if (item.checked == true) {
        cbAllPrice.checked = false;
        let dataPrice = item.getAttribute("data-price");
        prices.add(dataPrice);
        minPrice = FunMinPrice();
        maxPrice = FunMaxPrice();
        AjaxFillterBrandPhone();
        ShowClickIconPhone();
    } else {
        if (SumCheckItemPrice() == 0) {
            cbAllPrice.checked = true;
            prices.clear();
            minPrice = 0;
            maxPrice = 0;
            AjaxFillterBrandPhone();
            ShowClickIconPhone();
        }else{
            prices.delete(item.getAttribute("data-price"));
            minPrice = FunMinPrice();
            maxPrice = FunMaxPrice();
            AjaxFillterBrandPhone();
            ShowClickIconPhone();
        }
    }
}

function SumCheckItemPrice() {
    let sum = 0;
    itemCbPrice.forEach(function (item) {
        if (item.checked == true) {
            sum++;
        }
    });
    return sum;
}

function FunMinPrice(){
    const minVal = new Set();
    prices.forEach(function(item){
        let Val = item.split("-")[0];
        minVal.add(parseInt(Val));
    });
    const maxInSet = Math.min(...minVal);
    return maxInSet;
}

function FunMaxPrice(){
    const maxVal = new Set();
    prices.forEach(function(item){
        let Val = item.split("-")[1];
        maxVal.add(parseInt(Val));
    });
    const maxInSet = Math.max(...maxVal);
    return maxInSet;
}


// event click icon hãng điện thoại

iconPhones.forEach(function (item) {
    item.addEventListener("click", function () {
        let Value = item.getAttribute("data-icon");
        brands.add(Value);
        ShowClickIconPhone();
        itemCbPhones.forEach(function (item) {
           if(item.getAttribute("data-brand") == Value){
               item.checked = true;
               EnventCbitemPhone(item);
           }
        });
    });
});

function ShowClickIconPhone() {
    let html = '';
    $('.showIconClick').html(html);
    $('.showIconClick').removeClass('d-none');
    brands.forEach(function (item) {
        html += 
        `<div class="col shadow-lg p-3 bg-body rounded itemIconShow" style="cursor: pointer" onclick="RemoveIconShow('${item}')">
            <i class="fas fa-times-circle" style="color: red"></i>
            <span>${item}</span>
        </div>`;
    });
    prices.forEach(function (item) {
        html +=
        `<div class="col shadow-lg p-3 bg-body rounded itemIconShow" style="cursor: pointer" onclick="RemoveIconShow('${item}')">
            <i class="fas fa-times-circle" style="color: red"></i>
            <span>${item}</span>
        </div>`;
    });
    $('.showIconClick').html(html);
}

function RemoveIconShow(value) {
    itemCbPhones.forEach(function (item) {
        if(item.getAttribute("data-brand") == value){
            item.checked = false;
            EnventCbitemPhone(item);
        }
    });
    itemCbPrice.forEach(function (item) {
        if(item.getAttribute("data-price") == value){
            item.checked = false;
            EnventCbitemPrice(item);
        }
    });
}



cbAllPhones.addEventListener("click", function () {
    EnventCbAll('brand');
});

itemCbPhones.forEach(function (item) {
    item.addEventListener("click", function () {
        EnventCbitemPhone(item);
    });
});

//function event click checkbox all
function EnventCbAll(option) {
   if(option == "brand"){
        if (cbAllPhones.checked == true) {
            brands.clear();
            AjaxFillterBrandPhone();
            ShowClickIconPhone();
            itemCbPhones.forEach(function (item) {
                item.checked = false;
            });
        }
    }else if(option == "price"){
        if (cbAllPrice.checked == true) {
            minPrice = 0;
            maxPrice = 0;
            AjaxFillterBrandPhone();
            itemCbPrice.forEach(function (item) {
                item.checked = false;
            });
        }
    }
}
//function event click checkbox item phone
function EnventCbitemPhone(item){
    if (item.checked == true) {
        cbAllPhones.checked = false;
        brands.add(item.getAttribute("data-brand"));
        ShowClickIconPhone();
        AjaxFillterBrandPhone();
       
    } else {
        if (SumCheckItemPhone() == 0) {
            cbAllPhones.checked = true;
            brands.clear();
            AjaxFillterBrandPhone();
            ShowClickIconPhone();
        }else{
            brands.delete(item.getAttribute("data-brand"));
            ShowClickIconPhone();
            AjaxFillterBrandPhone();
        }
    }
}
//function sum checkbox item phone
function SumCheckItemPhone() {
    let sum = 0;
    itemCbPhones.forEach(function (item) {
        if (item.checked == true) {
            sum++;
        }
    });
    return sum;
}

function AjaxFillterBrandPhone() {
   sessionStorage.setItem("brands", JSON.stringify(Array.from(brands)));
    let url = "/san-pham/fillter?brandAscii=dienthoai&hang-san-xuat=";

    if(Array.from(brands).length == 0){
        url += "all";
    }else{
        Array.from(brands).forEach(function (item) {
            url += item + ",";
        });
        url = url.substring(0, url.length - 1);
    }
    if(minPrice == 0 && maxPrice == 0){
        url = url;
    }else{
        url += "&minPrice=" + minPrice + "&maxPrice=" + maxPrice;
    }
    
    $.ajax({
        url: url,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            window.history.pushState(null, null, url);
            GenerateHtmlPhone(data);
            list = data;
        }
    });
}

function GenerateHtmlPhone(data) {
    let html = "";
    $('.product').html(html);
    if (data.length == 0) {
       html += `<h1>Không còn sản phẩm này</h1>`;
    } else {
        data.forEach(function (item) {
            const money = item.price;
			const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9}
			const formated = new Intl.NumberFormat('vi-VN', config).format(money);
            html += `
            <div class="card m-1 animation-card" style="max-width: 17rem;">
            <img src="${item.img[0]}" style="max-width: 80%" class="rounded mx-auto d-block mt-2" alt="..." />
            <div class="card-body">
                <h5 class="card-title fw-bold lh-1 font-monospace" style="font-size: 1.2vw; color: #474c51">${item.name}</h5>
                <h5 class="card-title rounded-pill p-1" style="max-width: 20vh;font-size: 1.2vw;color: rgba(255, 255, 255, 0.925);background-color: #cb1c22;text-align: center;">
                    ${formated}
                </h5>
                <div class="row shadow-sm p-3 mb-5 bg-body rounded"
                style="margin: 0px 0px !important;padding: 1rem 0.5rem !important;">
                   <div class="row pb-2">
                       <i 
                          style="color: #6c757d;cursor: help;font-size: 1vw;"
                          class="fas fa-microchip">
                           <i class="fw-normal fst-normal lh-1">${' '+ item.chip}</i>
                       </i>
                   </div>
                   <div class="row pb-2">
                       <i 
                          style="color: #6c757d;cursor: help;font-size: 1vw;"
                          class="fas fa-memory">
                          <i class="fw-normal fst-normal lh-1">${' ' + item.ram + 'GB'}</i>
                       </i>
                   </div>
                   <div class="row pb-2">
                       <i 
                          style=" color: #6c757d;cursor: help; font-size: 1vw;"
                          class="fas fa-mobile-alt">
                          <i class="fw-normal fst-normal lh-1">${' ' + item.screen + 'inch'}</i>
                       </i>
                   </div>
                   <div class="row pb-2">
                       <i 
                          style="color: #6c757d;cursor: help;font-size: 1vw;"
                          class="fas fa-hdd">
                          <i class="fw-normal fst-normal lh-1">${' ' + item.rom + 'GB'}</i>
                       </i>
                   </div>
                </div>
            </div>
            <div class="d-flex justify-content-center pb-3">
                <div class="col-6">
                    <button style="font-size: 1vw" type="button" class="btn btn-danger">
                        Mua ngay
                    </button>
                </div>
                <div class="col-6">
                    <button style="font-size: 1vw" type="button" class="btn btn-dark">
                        Xem chi tiết
                    </button>
                </div>
            </div>
            </div>`;
        });
    }
    $('.product').html(html);
}

function GenerateHtmlPhoneList(data) {
    let html = "";
    $('.product').html(html);
    if (data.length == 0) {
       html += `<h1>Không còn sản phẩm này</h1>`;
    } else {
        html += `<ul class="list-group bg-light">`;
        data.forEach(function (item) {
            const money = item.price;
			const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9}
			const formated = new Intl.NumberFormat('vi-VN', config).format(money);
            html += `
            <li class="list-group-item list-group-item-primary h-auto animation-card bg-light">
                <div class="d-flex">
                    <img src="${item.img[0]}" style="max-width: 70%;max-height: 70%"
                         class="rounded mx-auto d-block mt-2" alt="..."/> 
                    <div class="card-body d">
                        <h5 class="card-title fw-bold lh-1 font-monospace text-break"style="font-size: 1.2vw; color: #474c51">${item.name}</h5>
                        <h5 class="card-title rounded-pill p-1 price"
                            style="max-width: 20vh;font-size: 1.2vw;color: rgba(255, 255, 255, 0.925);background-color: #cb1c22;text-align: center;">${item.price}
                        </h5>
                        <div class="row shadow-sm p-3 mb-5 bg-body rounded"
                             style="margin: 0px 0px !important;padding: 1rem 0.5rem !important;">
                                <div class="row pb-2">
                                    <i 
                                       style="color: #6c757d;cursor: help;font-size: 1vw;"
                                       class="fas fa-microchip">
                                        <i class="fw-normal fst-normal lh-1">${' '+ item.chip}</i>
                                    </i>
                                </div>
                                <div class="row pb-2">
                                    <i 
                                       style="color: #6c757d;cursor: help;font-size: 1vw;"
                                       class="fas fa-memory">
                                       <i class="fw-normal fst-normal lh-1">${' ' + item.ram + 'GB'}</i>
                                    </i>
                                </div>
                                <div class="row pb-2">
                                    <i 
                                       style=" color: #6c757d;cursor: help; font-size: 1vw;"
                                       class="fas fa-mobile-alt">
                                       <i class="fw-normal fst-normal lh-1">${' ' + item.screen + 'inch'}</i>
                                    </i>
                                </div>
                                <div class="row pb-2">
                                    <i 
                                       style="color: #6c757d;cursor: help;font-size: 1vw;"
                                       class="fas fa-hdd">
                                       <i class="fw-normal fst-normal lh-1">${' ' + item.rom + 'GB'}</i>
                                    </i>
                                </div>
                        </div>
                        <div class="d-flex p-0 m-0">
                            <button style="font-size: 1vw" type="button" class="btn btn-danger m-lg-2">
                                 Mua ngay
                            </button>
                            <button style="font-size: 1vw" type="button" class="btn btn-dark m-lg-2">
                                Xem chi tiết
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            `;
        });
        html += `</ul>`;
    }
    $('.product').html(html);
}


//change display product

let btndisplayth = document.getElementById("displayth");
let btndisplaylist = document.getElementById("displaylist");

btndisplayth.addEventListener("click", function () {
    btndisplayth.classList.add("active");
    btndisplaylist.classList.remove("active");
    GenerateHtmlPhone(list);
});

btndisplaylist.addEventListener("click", function () {
    btndisplaylist.classList.add("active");
    btndisplayth.classList.remove("active");
    GenerateHtmlPhoneList(list);
});