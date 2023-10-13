function renderBills(data) {
    let html = ''
    data.map(value => {
        html += `
        <div class="row list-bills-render">
            <div class="col">${value.idUser}</div>
            <div class="col-3">${value.fullName}</div>
            <div class="col">${value.buyTime}</div>
            <div class="col">${value.itemNumber}</div>
            <div class="col">${value.totalQuantity}</div>
            <div class="col">${value.totalPrice}</div>
            <div class="col " onclick="removeBill(${value.idUser})"><i class="fa-regular fa-circle-xmark"></i></div>
        </div>
        <div class="detail-list">        
            <div class="detail-button" onclick="showOrHideDetailList(event)">Detail <i class="fa-solid fa-caret-down"></i></div>
        `

        html += createDetailListHTML(value)
    })
    $('.list-bills').innerHTML = html
}

function createDetailListHTML(data) {
    let html = `
        
    <div class="detail-content content-close">
        <div class="row bill-detail-header">
            <div class="col">STT</div>
            <div class="col-3">Name</div>
            <div class="col">Quantity</div>
            <div class="col">Price</div>
            <div class="col">Total Price</div>
        </div>        
    `
    data.cart.map((a, i) => {
        const listDataLocal = app.getDataFromLocalStorage(app.keyLocalStorageListSP)
        const item = listDataLocal.find(b => b.id === a.idSP)
        html += `
        <div class="row bill-detail-render">
            <div class="col">${i + 1}</div>
            <div class="col-3">${item.name}</div>
            <div class="col">${a.soLuong}</div>
            <div class="col">${item.price}</div>
            <div class="col">${a.soLuong * item.price}</div>
        </div>
        `
    })
    html += `</div> </div>`
    return html
}