(function (window, document, undefined) {

  var factory = function ($, DataTable) {
    "use strict";

    $('.search-toggle').click(function () {
      if ($('.hiddensearch').css('display') == 'none')
        $('.hiddensearch').slideDown();
      else
        $('.hiddensearch').slideUp();
    });

    /* Set the defaults for DataTables initialisation */
    $.extend(true, DataTable.defaults, {
      dom: "<'hiddensearch'f'>" +
        "tr" +
        "<'table-footer'lip'>",
      renderer: 'material'
    });

    /* Default class modification */
    $.extend(DataTable.ext.classes, {
      sWrapper: "dataTables_wrapper",
      sFilterInput: "form-control input-sm",
      sLengthSelect: "form-control input-sm"
    });

    /* Bootstrap paging button renderer */
    DataTable.ext.renderer.pageButton.material = function (settings, host, idx, buttons, page, pages) {
      var api = new DataTable.Api(settings);
      var classes = settings.oClasses;
      var lang = settings.oLanguage.oPaginate;
      var btnDisplay, btnClass, counter = 0;

      var attach = function (container, buttons) {
        var i, ien, node, button;
        var clickHandler = function (e) {
          e.preventDefault();
          if (!$(e.currentTarget).hasClass('disabled')) {
            api.page(e.data.action).draw(false);
          }
        };

        for (i = 0, ien = buttons.length; i < ien; i++) {
          button = buttons[i];

          if ($.isArray(button)) {
            attach(container, button);
          } else {
            btnDisplay = '';
            btnClass = '';

            switch (button) {

              case 'first':
                btnDisplay = lang.sFirst;
                btnClass = button + (page > 0 ?
                  '' : ' disabled');
                break;

              case 'previous':
                btnDisplay = '<i class="material-icons">chevron_left</i>';
                btnClass = button + (page > 0 ?
                  '' : ' disabled');
                break;

              case 'next':
                btnDisplay = '<i class="material-icons">chevron_right</i>';
                btnClass = button + (page < pages - 1 ?
                  '' : ' disabled');
                break;

              case 'last':
                btnDisplay = lang.sLast;
                btnClass = button + (page < pages - 1 ?
                  '' : ' disabled');
                break;

            }

            if (btnDisplay) {
              node = $('<li>', {
                'class': classes.sPageButton + ' ' + btnClass,
                'id': idx === 0 && typeof button === 'string' ?
                  settings.sTableId + '_' + button : null
              })
                .append($('<a>', {
                  'href': '#',
                  'aria-controls': settings.sTableId,
                  'data-dt-idx': counter,
                  'tabindex': settings.iTabIndex
                })
                  .html(btnDisplay)
                )
                .appendTo(container);

              settings.oApi._fnBindAction(
                node, {
                action: button
              }, clickHandler
              );

              counter++;
            }
          }
        }
      };

      // IE9 throws an 'unknown error' if document.activeElement is used
      // inside an iframe or frame. 
      var activeEl;

      try {
        // Because this approach is destroying and recreating the paging
        // elements, focus is lost on the select button which is bad for
        // accessibility. So we want to restore focus once the draw has
        // completed
        activeEl = $(document.activeElement).data('dt-idx');
      } catch (e) { }

      attach(
        $(host).empty().html('<ul class="material-pagination"/>').children('ul'),
        buttons
      );

      if (activeEl) {
        $(host).find('[data-dt-idx=' + activeEl + ']').focus();
      }
    };

    /*
     * TableTools Bootstrap compatibility
     * Required TableTools 2.1+
     */
    if (DataTable.TableTools) {
      // Set the classes that TableTools uses to something suitable for Bootstrap
      $.extend(true, DataTable.TableTools.classes, {
        "container": "DTTT btn-group",
        "buttons": {
          "normal": "btn btn-default",
          "disabled": "disabled"
        },
        "collection": {
          "container": "DTTT_dropdown dropdown-menu",
          "buttons": {
            "normal": "",
            "disabled": "disabled"
          }
        },
        "print": {
          "info": "DTTT_print_info"
        },
        "select": {
          "row": "active"
        }
      });

      // Have the collection use a material compatible drop down
      $.extend(true, DataTable.TableTools.DEFAULTS.oTags, {
        "collection": {
          "container": "ul",
          "button": "li",
          "liner": "a"
        }
      });
    }

  }; // /factory

  // Define as an AMD module if possible
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'datatables'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'), require('datatables'));
  } else if (jQuery) {
    // Otherwise simply initialise as normal, stopping multiple evaluation
    factory(jQuery, jQuery.fn.dataTable);
  }

})(window, document);
function callMe() {

  $(document).ready(function () {
    $('#datatable').dataTable({
      destroy: true,
      responsive: true,
      "ajax": "/data",
      "autoWidth": false,
      "columns": [
        { "data": "Name", "class": "nameG" },
        { "data": "E-Mail", "class": "positionG" },
        { "data": "Department", "class": "officeG" },
        { "data": "Age", "class": "ageG" },
        { "data": "EnrollNo", "class": "startdateG" },
        { "data": "MobileNo", "class": "salaryG" },
        { "data": "compData", "class": "compData" }
      ],
      "oLanguage": {
        "sStripClasses": "",
        "sSearch": "",
        "sSearchPlaceholder": "Enter any keyword here to filter...",
        "sInfo": "_START_ -_END_ of _TOTAL_",
        "sLengthMenu": '<span>Rows per page:</span><select class="browser-default">' +
          '<option value="10">10</option>' +
          '<option value="20">20</option>' +
          '<option value="30">30</option>' +
          '<option value="40">40</option>' +
          '<option value="50">50</option>' +
          '<option value="-1">All</option>' +
          '</select></div>'
      },
      bAutoWidth: false
    });
  });
  // $('#dataTable').DataTable().destroy();

}
callMe()

// const popup = document.querySelector(".pop-up");
// const trigger = document.querySelector(".trigger");
// const closeButton = document.querySelector(".close-button");

// function toggleModal() {
//   popup.classList.toggle("show-pop-up");
// }

// function windowOnClick(event) {
//   if (event.target === popup) {
//     toggleModal();
//   }
// }

// trigger.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);
// function toTitleCase(input) {
//   return input.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
// }

var me = false

$('#myBtn').on("click", function () {
  $('#_myBtn').html('Save Person')
  var s = $('#datatable tbody tr .salaryG').html()
  // alert(s)
  btnWork()
})

$('#_myBtn').on("click", function () {
  $(this).addClass('save')
  if ($(this).hasClass('save')) {
    $(this).html('Save Person')
    var name = $('.name').val();
    var position = $('.position').val();
    var office = $('.office').val();
    var age = $('.age').val();
    var datestart = $('.datestart').val();
    var salary = $('.salary').val();

    if (name == '' || position == '' || office == '' || age == '' || datestart == '' || salary == '') {

      toggleModal()

    } else {
      var temp_array = { "Name": name = toTitleCase(name), "Position": position, "Office": office, "Age": age, "StartDate": datestart, "Salary": salary };
      // hi.push(temp_array);
      eel.get_random_enroll(name, position, office, age, datestart, salary)(callBack);
      $('.name').val('')
      $('.position').val('')
      $('.office').val('')
      $('.age').val('')
      $('.datestart').val('')
      $('.salary').val('')

      function callBack(result) {
        alert(result);
      }

    }
  }
  else {
    $(this).addClass('save')
  }

})




// Get the modal
// var modal = document.getElementById("myModal");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// function btnWork() {
//   modal.style.display = "flex";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
//   $(this).removeClass('save')
//   callMe()
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//     $(this).removeClass('save')
//     callMe()
//   }
// }









const tempInfo = document.querySelector(".tempInfo");

// const closeButton = document.querySelector(".close-button");


$('.finalbody').on('mouseover', '.compData', function () {

  var na = $(this).closest("tr").find(".nameG").text();;
  var pos = $(this).closest("tr").find('.positionG').text();
  var offfi = $(this).closest("tr").find('.officeG').text();
  var ager = $(this).closest("tr").find('.ageG').text();
  var sa = $(this).closest("tr").find('.startdateG').text();
  var sal = $(this).closest("tr").find('.salaryG').text();

  // var tempDataBlock = [na, pos, offfi, ager, sa, sal]
  var tempDataBlock = "<tr class='simpDataTr'><td class='simpDataTd1'>Name</td><td class='simpDataTd2' text-align='left' vertical-align='middle'>" + na + "</td></tr><tr class='simpDataTr'><td class='simpDataTd1'>E-Mail</td><td class='simpDataTd2'>" + pos + "</td></tr><tr class='simpDataTr'><td class='simpDataTd1'>Department</td><td class='simpDataTd2'>" + offfi + "</td></tr><tr class='simpDataTr'><td class='simpDataTd1'>Age</td><td class='simpDataTd2'>" + ager + "</td></tr><tr class='simpDataTr'><td class='simpDataTd1'>Enroll No.</td><td class='simpDataTd2'>" + sa + "</td></tr><tr class='simpDataTr'><td class='simpDataTd1'>Mobile No.</td><td class='simpDataTd2'>" + sal + "</td></tr>"
  if ($(this).hasClass('god')) {
    $('.compData').removeClass('god');
    $(this).addClass('god');
    // tempInfo.classList.add("show-tempInfo");
  } else {
    $('.compData').removeClass('god');
    $(this).addClass('god');
    $('.tempInfo').addClass("show-tempInfo");
  }
  $('.compData .tooltip').html(tempDataBlock)
});

$('.finalbody').on('mouseout', function () {
  if ($(this).hasClass('god')) {
    $('td').removeClass('god');
    $('.tempInfo').removeClass("show-tempInfo");
  } else {
    $('td').removeClass('god');
    // tempInfo.classList.remove("show-tempInfo");
  }
})

/* Storing user's device details in a variable*/
let details = navigator.userAgent;

/* Creating a regular expression
containing some mobile devices keywords
to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;

/* Using test() method to search regexp in details
it returns boolean value*/
let isMobileDevice = regexp.test(details);

if (isMobileDevice) {
  console.log("It is a Mobile Device !");
} else {
  // document.write("<h3>Its a Desktop !</h3>");
}