'use strict';

(function ($) {
  let sourceURL;

  if ($('#AddSource').length > 0) {
    sourceURL = $('#AddSource').attr('data-url');
    addListeners();
  }

  function addListeners() {
    addKeypressListeners();
    addRemoveListeners();
  }

  function addKeypressListeners() {
    $('.add').keypress((event) => {
      // On enter press
      if (event.which === 13) {
        const data = $('.add').val();
        console.log(data);
        $('.add').val('');
        // Add new feed
        $.ajax({
          url: sourceURL,
          method: 'POST',
          data: {
            data
          },
          success: (res) => {
            // Show success toast, add to list
            $('.alert-success').text(`Added ${data} to twitter database`);
            $('.alert-success').show().delay(5000).fadeOut();
            makeList(res);
          },
          error: (xhr, status, err) => {
            // Show fail toast
            $('.alert-danger').text('Failed to add user');
            $('.alert-danger').show().delay(5000).fadeOut();
          }
        });
      }
    });
  }

  function addRemoveListeners() {
    $('.remove').on('click', function (evt) {
      const value = $(this).attr('data-val');

      $.ajax({
        url: `${sourceURL}/${value}`,
        method: 'DELETE',
        success: (res) => {
          $('.alert-success').text(`Deleted ${value} from database`);
          $('.alert-success').show().delay(5000).fadeOut();
          makeList(res);
        },
        error: () => {
          $('.alert-danger').text(`Failed to delete ${value}`);
          $('.alert-danger').show().delay(5000).fadeOut();
        }
      });
    });
  }

  function makeList(res) {
    $('.list').empty();

    res.data.forEach((data) => {
      const row = `<div class="row list-row">
         <span class="glyphicon glyphicon-remove remove" data-val="${data.value}"></span>
         <span class="list-title">${data.value}</span>
      </div>`;

      $('.list').append(row);
    });
    addRemoveListeners();
  }
})($);
