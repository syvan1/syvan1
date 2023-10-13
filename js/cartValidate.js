function validateBuyAccept() {
    let firstName = $('.firstName')
    let lastName = $('.lastName')
    let email = $('.email')
    let phoneNumber = $('.phoneNumber')
    let address = $('.address')
    let province = $('.province')
    let district = $('.district')
    let ward = $('.ward')

    if (firstName.value === "" || firstName.value === null) {
        $('.noteFirstName').innerHTML = 'Họ không được để trống'
    }

    if (lastName.value === "" || lastName.value === null) {
        $('noteLastName').innerHTML = "Tên không được để trống"
    }

    if (email.value === "" || email.value === null) {
        $('.noteEmail').innerHTML = "Email không được để trống"
    }

    if (phoneNumber.value === "" || phoneNumber.value === null) {
        $('.notePhoneNumber').innerHTML = "Mục điện thoại không được để trống"
    }

    if (address.value === "" || address.value === null) {
        $('.noteAddress').innerHTML = "Địa chỉ không được để trống"
    }

    if (province.value === "0" || province.value === null) {
        $('.noteProvince').innerHTML = "Chưa chọn Tỉnh/Thành phố"
    }

    if (district.value === "0" || district.value === null) {
        $('.noteDistrict').innerHTML = "Chưa chọn Quận/Huyện"
    }

    if (ward.value === "0" || ward.value === null) {
        $('.noteWard').innerHTML = "Chưa chọn Phường/Xã"
    }
}

function validateFirstName() {
    let reg = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀẾỂưăạảấầẩẫậắằẳẵặẹẻẽềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ\s]+$/g
    let firstName = $('.firstName').value
    let newString = firstName.trim()
    if (!reg.test(newString)) {
        $('.noteFirstName').innerHTML = "Họ không được có số và có ký tự đặc biệt"
    } else {
        $('.noteFirstName').innerHTML = ""
    }
}

function validateLastName() {
    let reg = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀẾỂưăạảấầẩẫậắằẳẵặẹẻẽềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ\s]+$/g
    let lastName = $('.lastName').value
    let newString = lastName.trim()
    if (!reg.test(newString)) {
        $('.noteLastName').innerHTML = "Tên không được có số và có ký tự đặc biệt"
    } else {
        $('.noteLastName').innerHTML = ''
    }
}

function validateEmail() {
    let reg = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]+$/g;
    let email = $('.email').value
    let newEmail = email.trim()
    if (!reg.test(newEmail)) {
        $('.noteEmail').innerHTML = "Email chưa hợp lệ"
    } else {
        $('.noteEmail').innerHTML = ""
    }
}

function validatePhoneNumber() {
    let reg = /^0[3,8,9][0-9]{8}$/g;
    let phone = $('.phoneNumber').value
    let newPhone = phone.trim()
    if (!reg.test(newPhone)) {
        $('.notePhoneNumber').innerHTML = "Số điện thoại chưa đúng"
    } else {
        $('.notePhoneNumber').innerHTML = ""
    }
}

function validateAddress() {
    let address = $('.address').value
    if (address.length > 0) {
        $('.noteAddress').innerHTML = ""
    } else {
        $('.noteAddress').innerHTML = "Nhập địa chỉ nhà"
    }
}

function validateWard() {
    $('.noteWard').innerHTML = ''
}