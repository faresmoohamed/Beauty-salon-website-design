// brands
$('.brands').owlCarousel({
    loop:true,
    // autoplay:true,
    // autoplayTimeout:20000,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1

        },
        400:{
            items:3
        },

        600:{
            items:5

        },
        1000:{
            items:5
            
        }
    }
})


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Testimonials section

$('.articles').owlCarousel({
    loop:false,
    center: false,
    items:4,
    margin:10,
    nav:true,
    responsive:{
        0: {
            items: 1,
            nav: false
          },
          680: {
            items: 1,
            nav: true,
            loop: false
          },
          1000: {
            items: 2,
            nav: true
          }
    }
    })


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// our work section

    let galleryBtns = document.querySelectorAll(".gallery-btns li");
    let items = document.querySelectorAll(".item");

    galleryBtns.forEach((li)=> {
        li.addEventListener("click", manageWork);
        li.addEventListener("click", function removeActive()
        {
            galleryBtns.forEach((li) => {
                li.classList.remove("active");
                this.classList.add("active");
            })
        })
    });

    function manageWork(){
        items.forEach((item) => {

            if (item.style.display = "none"){
                item.classList.add("hide-item");
                
            }
        });
        document.querySelectorAll(this.dataset.work).forEach((el) => {

            if (el.style.display = "block"){
                el.classList.remove("hide-item");
                el.classList.add("show-item");
            }
        })
    }



