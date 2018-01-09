// This script runs on every page

(function() {
  window.addEventListener('load', () => {
    if (typeof web3 !== 'undefined') {
      window.web3 = new Web3(web3.currentProvider);
    } else {
      $('html').addClass('getmeta');
    }
  });
})();
