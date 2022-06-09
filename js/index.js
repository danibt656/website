
$(document).ready(function(){
    updateAgeDiv();
});

/**
 * Copy email to clipboard
 */
function cpyEmail() {
    let cpy = document.getElementById("emailTx");
  
    const final = cpy.textContent.replace(/['"]+/g, '');
    navigator.clipboard.writeText(final);
}

/**
 * Calculates difference between today and birthday date
 * @param {*} birthday 
 * @returns Date difference in years
 */
function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

/**
 * Update 'age' div on index page (dynamically updated age)
 */
function updateAgeDiv() {
    const bd_y = 2001;
    const bd_m = 5;
    const bd_d = 3;
    $('#age').text(`${bd_y}/0${bd_m}/0${bd_d} (age ${calculateAge(new Date(bd_y,bd_m,bd_d))})`);
}