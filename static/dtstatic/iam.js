// $(document).ready(function () {

//     function toTitleCase(input) {
//         return input.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
//     }

//     var me = false

//     $('#myBtn').on("click", function () {
//         btnWork()
//     })

//     $('#_myBtn').on("click", function () {
//         $(this).addClass('save')
//         if ($(this).hasClass('save')) {
//             $(this).html('Save Person')
//             var name = $('.name').val();
//             var position = $('.position').val();
//             var office = $('.office').val();
//             var age = $('.age').val();
//             var datestart = $('.datestart').val();
//             var salary = $('.salary').val();
//             var temp_array = { "Name": name = toTitleCase(name), "Position": position, "Office": office, "Age": age, "StartDate": datestart, "Salary": salary };
//             // hi.push(temp_array);
//             eel.get_random_enroll(name, position, office, age, datestart, salary)(callBack);
//             $('.name').val('')
//             $('.position').val('')
//             $('.office').val('')
//             $('.age').val('')
//             $('.datestart').val('')
//             $('.salary').val('')

//             function callBack(result) {
//                 alert(result);
//             }

//         } else {
//             $(this).addClass('save')
//         }

//     })

//     // // Get the modal
//     // var modal = document.getElementById("myModal");

//     // // Get the <span> element that closes the modal
//     // var span = document.getElementsByClassName("close")[0];

//     // // When the user clicks the button, open the modal
//     // function btnWork() {
//     //     modal.style.display = "flex";
//     // }

//     // // When the user clicks on <span> (x), close the modal
//     // span.onclick = function () {
//     //     modal.style.display = "none";
//     //     $(this).removeClass('save')
//     // }

//     // // When the user clicks anywhere outside of the modal, close it
//     // window.onclick = function (event) {
//     //     if (event.target == modal) {
//     //         modal.style.display = "none";
//     //         $(this).removeClass('save')
//     //     }
//     // }

// });
