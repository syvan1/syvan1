const listBillsAPI = 'http://localhost:3000/DANHSACHDONHANG'
const total = new Map()

function totalCart(keyId) {
    let cart = app.getDataFromLocalStorage(keyId)
    return cart.reduce((a, b) => a + b.soLuong, 0)
}

function sumTotalCart(keyId1, keyId2) {
    let sumTotalCart = 0
    let cart = app.getDataFromLocalStorage(keyId1)
    let data = app.getDataFromLocalStorage(keyId2)
    cart.forEach((item) => {
        let indexOnLocal = data.findIndex(value => value.id === item.idSP)
        sumTotalCart += item.soLuong * data[indexOnLocal].price
    })
    return sumTotalCart
}

function turnDisplay() {
    let check = app.getDataFromLocalStorage(app.keyLocalStorageItemCart)
    if (check.length > 0) {
        $('.item-cart').style.display = "block"
        $('.empty-cart').style.display = 'none'
    }
    else {
        $('.item-cart').style.display = 'none'
        $('.empty-cart').style.display = 'block'
    }
}

function renderListCart() {
    turnDisplay()
    createHTML()
}

renderListCart()

function clearItemCart(id) {
    if (confirm("Bạn có muốn xóa sản phẩm không!")) {
        let cart = app.getDataFromLocalStorage(app.keyLocalStorageItemCart)
        let indexItem = cart.findIndex(item => item.idSP === id)
        cart.splice(indexItem, 1)
        app.upLoadDataToLocalStorage(app.keyLocalStorageItemCart, cart)
        if (cart.length > 0) { createHTML() }
        else {
            $('.item-cart').style.display = 'none'
            $('.empty-cart').style.display = 'block'
        }
    }
}

function onClickPlus(id) {
    app.addItems(id)
    createHTML()
}

function onClickMinus(id) {
    let cart = app.getDataFromLocalStorage(app.keyLocalStorageItemCart)
    let indexItem = cart.findIndex(item => item.idSP === id)
    if (cart[indexItem].soLuong > 1) {
        cart[indexItem].soLuong--
        app.upLoadDataToLocalStorage(app.keyLocalStorageItemCart, cart)
        createHTML()
    } else {
        clearItemCart(id)
    }
}

function switchBuyPopup() {
    let status = $('.buy-popup')
    if ((status.style.display === "") || (status.style.display == 'none')) {
        status.style.display = 'block'
        resetNotes()
        renderProvince()
        renderDistrict()
        renderWard()
    } else {
        status.style.display = 'none'
    }
}

let dataProvince = [];
let dataDistrict = [];
let dataWard = [];
const urlProvince = 'https://provinces.open-api.vn/api/p/';
const urlDistrict = 'https://provinces.open-api.vn/api/d/';
const urlWard = 'https://provinces.open-api.vn/api/w/';

let userId = []
let customerList = app.getDataFromLocalStorage("DANHSACHKHACHMUAHANG")

function createNewId() {
    let check = true
    let newUserId = Math.floor(Math.random() * 1000) + 1
    customerList.map((value) => {
        if (value.id === newUserId) { check = false }
    })
    if (check) {
        return newUserId
    } else {
        createNewId()
    }
}

function nowDate() {
    let date = new Date()
    let date1 = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    return date1;
}

function makeAddress() {
    let address = $('.address').value
    let idProvince = $('.province').value
    let idDistrict = $('.district').value
    let idWard = $('.ward').value
    let province = dataProvince.find(a => a.code === Number(idProvince))
    let district = dataDistrict.find(a => (a.code === Number(idDistrict)) && (a.province_code === Number(idProvince)))
    let ward = dataWard.find(a => (a.code === Number(idWard)) && (a.district_code === Number(idDistrict)))
    return address + " " + ward.name + " " + district.name + " " + province.name;
}

function makeFullName() {
    let firstName = $('.firstName').value
    let lastName = $('.lastName').value
    return firstName + ' ' + lastName
}

function createNewCustomer() {
    validateBuyAccept()
    if (checkNote().length === 0) {
        let email = $('.email').value
        let phoneNumber = $('.phoneNumber').value
        let newCustomer = {
            idUser: createNewId(),
            fullName: makeFullName(),
            address: makeAddress(),
            email: email,
            phone: phoneNumber,
            buyTime: nowDate(),
            itemNumber: total.get('Số mặt hàng'),
            totalQuantity: total.get('Tổng số lượng'),
            totalPrice: total.get('Tổng số tiền'),
            cart: app.getDataFromLocalStorage(app.keyLocalStorageItemCart)
        }
        app.postDataAPI(listBillsAPI, newCustomer)
        minusDataLocal(app.keyLocalStorageListSP, app.keyLocalStorageItemCart)
        switchBuyPopup()
        turnDisplay()
    }
}

function minusDataLocal(keyData, keyCart) {
    let data = app.getDataFromLocalStorage(keyData)
    let cart = app.getDataFromLocalStorage(keyCart)
    cart.forEach(a => {
        data.find(b => {
            if (b.id === a.idSP) {
                b.quantity -= a.soLuong
            }
        })
    })
    app.upLoadDataToLocalStorage(keyData, data)
    app.upLoadDataToLocalStorage(keyCart, [])
}