function checkUpLoadData(key) {
    const checkData = localStorage.getItem(key)
    if (checkData === null) { return true }
    else { return false }
}

if (checkUpLoadData(app.keyLocalStorageListSP)) {
    app.upLoadDataToLocalStorage(app.keyLocalStorageListSP, listData)
}

if (checkUpLoadData(app.keyLocalStorageItemCart)) {
    app.upLoadDataToLocalStorage(app.keyLocalStorageItemCart, [])
}

renderListData()

function addSP(id) {
    app.addItems(id)
    showNumberItemCart()
}

function showNumberItemCart() {
    let data = app.getDataFromLocalStorage(app.keyLocalStorageItemCart)
    if (data.length > 0) {
        let number = data.reduce((a, b) => a + b.soLuong, 0)
        $('.show-item-cart').innerHTML = data.length
    } else {
        $('.show-item-cart').innerHTML = ''
    }
}

showNumberItemCart()