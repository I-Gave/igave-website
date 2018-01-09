(function($) {
  if ($('#Metamask').length > 0) {
    window.addEventListener('load', () => {
      if (typeof web3 !== 'undefined') {
        // Metamask installed
        if (web3.eth.accounts.length > 0) {
          $('.good').toggle();
        } else {
          $('.unlock').toggle();
        }
      } else {
        $('.install').toggle();
      }
    });
  }
})($);
