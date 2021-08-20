
/**
 * Copy email to clipboard
 */
function cpyEmail() {
    let cpy = document.getElementById("emailTx");
  
    const final = cpy.textContent.replace(/['"]+/g, '');
    navigator.clipboard.writeText(final);
}

/**
 * Copy telephone to clipboard
 */
 function cpyTlf() {
    let cpy = document.getElementById("tlfTx");
    
    const final = cpy.textContent.replace(/['"]+/g, '');
    navigator.clipboard.writeText(final);
}