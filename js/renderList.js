function renderListData() {
    let getListData = app.getDataFromLocalStorage(app.keyLocalStorageListSP)
    let html = ''
    getListData.map((value) => {
        html += `
        <div class="col-12 col-sm-6 col-lg-3 item">
            <div class="warper">
                <div class="pic">
                    <img class="item-pic" src="${value.imgURL}" alt="pic-${value.id}">
                    <div class="add-item-button" onclick="addSP(${value.id})">
                        <i class="fa-solid fa-cart-plus"></i>
                    </div>
                </div>
                <h4 class="item-title d-flex align-items-center justify-content-center">${value.name}</h4>
                <div class="item-detail">
                    <p class="item-price">$: ${value.price}</p>
                    <p class="item-quantity">Quantity: ${value.quantity}</p>
                </div>
            </div>
        </div>
        `
    })
    document.querySelector('.list-item').innerHTML = html
}