function createHTML() {
    let cart = app.getDataFromLocalStorage(app.keyLocalStorageItemCart)
    let data = app.getDataFromLocalStorage(app.keyLocalStorageListSP)
    let html = ""
    cart.map((value) => {
        let i = data.findIndex(a => a.id === value.idSP)
        html += `
        <div class="row list-cart">
            <div class="col-2"><img src="${data[i].imgURL}" alt="pic-${i.id}"></div>
                <div class="col-4">
                    <h5>${data[i].name}</h5>
                    <p>Quality: ${data[i].quantity}</p>
                </div>
            <div class="col quantity-adjust">
                <i class="fa-regular fa-square-minus" onclick="onClickMinus(${value.idSP})"></i>
                <div>${value.soLuong}</div>
                <i class="fa-regular fa-square-plus" onclick="onClickPlus(${value.idSP})"></i>
            </div>
            <div class="col">${data[i].price}</div>
            <div class="col">${value.soLuong * data[i].price}</div>
            <div class="col clear-item-cart" onclick="clearItemCart(${value.idSP})"><i class="fa-regular fa-circle-xmark"></i></div>  
        </div>
        `
    })
    $('.list-cart-render').innerHTML = html
    total.set('Tổng số lượng', totalCart(app.keyLocalStorageItemCart))
    total.set('Tổng số tiền', sumTotalCart(app.keyLocalStorageItemCart, app.keyLocalStorageListSP))
    total.set('Số mặt hàng', cart.length)
    $('.total').innerHTML = `Total: ${total.get('Tổng số tiền')} $`
}

function renderProvince() {
    app.getDataAPI(urlProvince, renderProvinceHTML)
}

function renderProvinceHTML(data) {
    dataProvince = data
    let html = `
    <option selected value="0" >--Chọn Tỉnh/Thành phố--</option>
    `
    dataProvince.map(function (value) {
        html += `
        <option value="${value.code}">${value.name}</option>
        `
    })
    $('.province').innerHTML = html
}

function renderDistrict() {
    $('.noteProvince').innerHTML = ""
    app.getDataAPI(urlDistrict, renderDistrictHTML)
}

function renderDistrictHTML(data) {
    dataDistrict = data
    const id = $('.province').value
    let html = `
    <option selected value="0">--Chọn Quận/Huyện--</option>
    `
    dataDistrict.map((value) => {
        if (value.province_code === Number(id)) {
            html += `
            <option value="${value.code}">${value.name}</option>
            `
        }
    })
    $('.district').innerHTML = html
    $('.ward').innerHTML = `<option selected value="0">--Chọn Phường/Xã--</option>`
}

function renderWard() {
    $('.noteDistrict').innerHTML = ''
    app.getDataAPI(urlWard, renderWardHTML)
}

function renderWardHTML(data) {
    dataWard = data
    const id = $('.district').value
    let html = `
    <option selected value="0">--Chọn Phường/Xã--</option>
    `
    dataWard.map((value) => {
        if (value.district_code === Number(id)) {
            html += `
            <option value="${value.code}">${value.name}</option>
            `
        }
    })
    $('.ward').innerHTML = html
}