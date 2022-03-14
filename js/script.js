// What we do section 

$(document).ready(function () {
    $('.showed').click(function () {
        $('.showed').css('display', 'none');
        $('.hidden').css('display', 'inline');
    })
    $('.hidden').click(function () {
        $('.showed').css('display', 'inline');
        $('.hidden').css('display', 'none');
    });
    //two
    $('.showed2').click(function () {
        $('.showed2').css('display', 'none');
        $('.hidden2').css('display', 'inline');
    });
    $('.hidden2').click(function () {
        $('.showed2').css('display', 'inline');
        $('.hidden2').css('display', 'none');
    });
    //three
    $('.showed3').click(function () {
        $('.showed3').css('display', 'none');
        $('.hidden3').css('display', 'inline');
    });
    $('.hidden3').click(function () {
        $('.showed3').css('display', 'inline');
        $('.hidden3').css('display', 'none');
    });


//portfolio section
    let image = document.querySelectorAll(".image")
    let itemsArray = ["one", "two", "three", "four", "five", "six", "seven", "eight"]

    for (i = 0; i < image.length; i++) {
        image[i].addEventListener("mouseover", (e) => {
            let hoverTextClass = e.target.lastElementChild.className.split(" ")[1]
            let backImage = e.target.firstElementChild
            for (j = 0; j < itemsArray.length; j++) {
                if (hoverTextClass === itemsArray[j]) {
                    $(`.${hoverTextClass}`).css({
                        'display': 'flex'
                    })
                    backImage.style.filter = 'brightness(50%)'
                }
            }
        })
    }

    for (i = 0; i < image.length; i++) {
        image[i].addEventListener("mouseout", (e) => {
            let hoverTextClass = e.target.lastElementChild.className.split(" ")[1]
            let backImage = e.target.firstElementChild
            for (j = 0; j < itemsArray.length; j++) {
                if (hoverTextClass === itemsArray[j]) {
                    $(`.${hoverTextClass}`).css({
                        'display': 'none'
                    })
                    backImage.style.filter = 'brightness(100%)'
                }
            }
        })
    }



    //contact section

function validate(user, email, message){
    let emailRegex = /^[a-z\S\d]+@[a-z\d\S]+.[\Sa-z\d]$/
    if(user.value === ""){
        return ("You have to fill in your name")
    } else if (email.value === ""){
        return "You must fill in your email"
    } else if (message.value === ""){
        return "Please include a message"
    } else if(emailRegex.test(email.value) === false) {
        return "Please include a valid email"
    } else {
        return ""
    }
  }
  
  // submission function
  let form = document.querySelector("#subscribe-form")
  let userName = document.querySelector("#name")
  let userEmail = document.querySelector("#email")
  let message = document.querySelector("#message")
  form.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(validate(userName, userEmail, message) !== ""){
        alert(validate(userName, userEmail, message))
    } else {
        console.log(userEmail.value, userName.value, message.value)
        form.style.display="none"
        $(".successful").css("display", "block")
    }
  })
  
  $(".successful").click(()=> {
    $(".successful").css("display", "none")
    form.style.display="block"
    form.reset()
  })
});