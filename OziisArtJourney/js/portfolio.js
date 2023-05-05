//  let sortBtn= document.querySelector('.filter-menu').children;
//  let sortItem= document.querySelectorAll('.filter-item');
// let galleryImages = document.querySelectorAll('gallery-image');



// for (let i=0; i <sortItem.length; i++){
//   sortItem[i].addEventListener('click', function(){
//     alert( galleryImages[i]. );
//     let getElementCss = window.getComputedStyle
   
//   });
// }

const filterContainer = document.querySelector(".gallery-filter"),
 galleryItems = document.querySelectorAll(".gallery-item");

 filterContainer.addEventListener('click', (event) =>{
   if(event.target.classList.contains("filter-item")){
     // deactivate existing active 'filter-item'
     filterContainer.querySelector(".active").classList.remove("active");
     // activate new 'filter-item'
     event.target.classList.add("active");
     const filterValue = event.target.getAttribute("data-filter");
     galleryItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
        item.classList.remove("hide");
         item.classList.add("show");
       }
       else{
        item.classList.remove("show");
        item.classList.add("hide");
       }
     });
   }
 });


let galleryContainer = document.getElementById("lightgallery");

lightGallery(galleryContainer, {
    speed: 500,
    download: false,
    licenseKey: 'your_license_key',
    
    
  
  });



window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = 'block';
      
    } else {
      backToTopButton.style.display = 'none';
      
    }
  }

  // for (let i=0; i< sortBtn.length; i++){
  //   sortBtn[i].addEventListener('click', function(){

  //     for(let j=0; j < sortBtn.length; j++){
  //       sortBtn[j].classList.remove('current');
  //     }

  //     this.classList.add('current');

  //     let targetData = this.getAttribute('data-target');

  //     for(let k =0; k < sortItem.length; k++){
  //       sortItem[k].classList.remove('active');
  //       sortItem[k].classList.add('delete');

  //       if(sortItem[k].getAttribute('data-item') == targetData || targetData == 'all'){
  //         sortItem[k].classList.remove('delete');
  //         sortItem[k].classList.add('active');
  //       }
  //     }

  //   });
  // }


 