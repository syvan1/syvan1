function resetNotes() {
    $('.noteFirstName').innerHTML = ""
    $('.noteLastName').innerHTML = ""
    $('.noteEmail').innerHTML = ""
    $('.notePhoneNumber').innerHTML = ""
    $('.noteAddress').innerHTML = ""
    $('.noteProvince').innerHTML = ""
    $('.noteDistrict').innerHTML = ""
    $('.noteWard').innerHTML = ""
}

function checkNote() {
    let noteFirstName = $('.noteFirstName').innerHTML
    let noteLastName = $('.noteLastName').innerHTML
    let noteEmail = $('.noteEmail').innerHTML
    let notePhoneNumber = $('.notePhoneNumber').innerHTML
    let noteAddress = $('.noteAddress').innerHTML
    let noteProvince = $('.noteProvince').innerHTML
    let noteDistrict = $('.noteDistrict').innerHTML
    let noteWard = $('.noteWard').innerHTML
    let checkNote = noteFirstName + noteLastName + noteEmail + notePhoneNumber + noteAddress + noteProvince + noteDistrict + noteWard
    return checkNote
}