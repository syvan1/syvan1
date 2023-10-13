const listBillsAPI = 'http://localhost:3000/DANHSACHDONHANG'

app.getDataAPI(listBillsAPI, renderBills)

function showOrHideDetailList(event) {
    let check = event.target.parentElement.childNodes[3].style.display
    if (check === 'none' || check === '') { 
        event.target.parentElement.childNodes[3].style.display = 'block'
        $('.detail-content').classList.add('content-open')
        $('.detail-content').classList.remove('content-close')
    }
    else {
        
        $('.detail-content').classList.remove('content-open')
        $('.detail-content').classList.add('content-close')
        event.target.parentElement.childNodes[3].style.display = 'none'
    }

}

async function removeBill(id) {
    if (window.confirm("Bạn chắc có muốn xóa hóa đơn này không?")) {
      const response = await fetch(listBillsAPI);
      const data = await response.json();
      const customer = data.find(b => b.idUser === id);
  
      const url = listBillsAPI + '/' + customer.id;
  
      await app.deleteDataAPI(url);
      await rePayBillToLocal(customer.cart);
    }
  }

async function editCustomer(edit) {
    const url = listBillsAPI + '/' + '1'
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edit),
    }
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error: ", error);
      return "Error";
    }
  }
  
function rePayBillToLocal(payBack) {
    let data = app.getDataFromLocalStorage(app.keyLocalStorageListSP)
    payBack.forEach(a => {
        data.find(b => {
            if (b.id === a.idSP) {
                b.quantity += a.soLuong
            }
        })
    })
    app.upLoadDataToLocalStorage(app.keyLocalStorageListSP, data)
}