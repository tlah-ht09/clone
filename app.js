const menu_items = document.querySelectorAll("#menu_item li");

const head=document.getElementById("header2")

const menu_bar=document.getElementById("mb_con")

const item_con=document.getElementById("item_con")

const pi=document.getElementById("pens_img")
const pih=document.getElementById("pens_img_hover")

const ni=document.getElementById("notes_img")
const nih=document.getElementById("notes_img_hover")

const pci=document.getElementById("pen_case_img")
const pcih=document.getElementById("pci_hover")

const pci2=document.getElementById("pen_case_img2")
const pcih2=document.getElementById("pci_hover2")

const pci3=document.getElementById("pen_case_img3")
const pcih3=document.getElementById("pci_hover3")

const plus=document.getElementsByClassName("plus")

const sub_menu_items =document.getElementsByClassName("menu_sub")

const link_t=document.querySelectorAll(".menu_sub a")

const nav_con=document.getElementById("nav_container")

const nav_menu=document.getElementById("extra_menu")

const et_sub=document.querySelectorAll(".et_sub a")

const nc_hover=document.getElementById("nc_hover")

const bp_sort=document.querySelectorAll("#bp_sort li")
const bp_sort2=document.querySelectorAll("#bp_sort li a")


menu_items.forEach(function(item) {
    item.addEventListener("mouseover", function() {
        item.style.color='#C40F39'
        item.style.borderBottom="2px #C40F39 solid"
        
    });

    item.addEventListener("mouseout", function() {
        item.style.color='black'
        item.style.borderBottom="2px white solid"
        
        
    });
});

item_con.addEventListener("mouseover",function(){
    menu_bar.style.display="block";

})
item_con.addEventListener("mouseout",function(){
    
    menu_bar.style.display="none";
})

menu_bar.addEventListener("mouseover",function(){
    menu_bar.style.display="block";

})
menu_bar.addEventListener("mouseout",function(){
    
    menu_bar.style.display="none";
})



pi.addEventListener("mouseover",function(){
    pih.style.opacity="1";
    plus[0].style.transform="rotateZ(0deg)"
    

})
pi.addEventListener("mouseout",function(){
    pih.style.opacity="0"
    plus[0].style.transform="rotateZ(180deg)"
})

ni.addEventListener("mouseover",function(){
    nih.style.opacity="1";
    plus[1].style.transform="rotateZ(0deg)"
})
ni.addEventListener("mouseout",function(){
    nih.style.opacity="0"
    plus[1].style.transform="rotateZ(180deg)"
})

pci.addEventListener("mouseover",function(){
    pcih.style.opacity="1";
    plus[2].style.transform="rotateZ(0deg)"
})
pci.addEventListener("mouseout",function(){
    pcih.style.opacity="0"
    plus[2].style.transform="rotateZ(180deg)"
})

pci2.addEventListener("mouseover",function(){
    pcih2.style.opacity="1";
    plus[3].style.transform="rotateZ(0deg)"
})
pci2.addEventListener("mouseout",function(){
    pcih2.style.opacity="0"
    plus[3].style.transform="rotateZ(180deg)"
})

pci3.addEventListener("mouseover",function(){
    pcih3.style.opacity="1";
    plus[4].style.transform="rotateZ(0deg)"
})
pci3.addEventListener("mouseout",function(){
    pcih3.style.opacity="0"
    plus[4].style.transform="rotateZ(180deg)"
})


sub_menu_items[0].addEventListener("mouseover",function(){
    menu_items[0].style.color='#C40F39'
    menu_items[0].style.borderBottom="2px #C40F39 solid"
})

sub_menu_items[0].addEventListener("mouseout",function(){
    menu_items[0].style.color='black'
    menu_items[0].style.borderBottom="2px white solid"
})

sub_menu_items[1].addEventListener("mouseover",function(){
    menu_items[1].style.color='#C40F39'
    menu_items[1].style.borderBottom="2px #C40F39 solid"
})

sub_menu_items[1].addEventListener("mouseout",function(){
    menu_items[1].style.color='black'
    menu_items[1].style.borderBottom="2px white solid"
})

sub_menu_items[1].addEventListener("mouseover",function(){
    menu_items[1].style.color='#C40F39'
    menu_items[1].style.borderBottom="2px #C40F39 solid"
})

sub_menu_items[1].addEventListener("mouseout",function(){
    menu_items[1].style.color='black'
    menu_items[1].style.borderBottom="2px white solid"
})

sub_menu_items[2].addEventListener("mouseover",function(){
    menu_items[2].style.color='#C40F39'
    menu_items[2].style.borderBottom="2px #C40F39 solid"
})

sub_menu_items[2].addEventListener("mouseout",function(){
    menu_items[2].style.color='black'
    menu_items[2].style.borderBottom="2px white solid"
})

sub_menu_items[3].addEventListener("mouseover",function(){
    menu_items[3].style.color='#C40F39'
    menu_items[3].style.borderBottom="2px #C40F39 solid"
})

sub_menu_items[3].addEventListener("mouseout",function(){
    menu_items[3].style.color='black'
    menu_items[3].style.borderBottom="2px white solid"
})

sub_menu_items[4].addEventListener("mouseover",function(){
    menu_items[4].style.color='#C40F39'
    menu_items[4].style.borderBottom="2px #C40F39 solid"
})

sub_menu_items[4].addEventListener("mouseout",function(){
    menu_items[4].style.color='black'
    menu_items[4].style.borderBottom="2px white solid"
})

sub_menu_items[5].addEventListener("mouseover",function(){
    menu_items[5].style.color='#C40F39'
    menu_items[5].style.borderBottom="2px #C40F39 solid"
})

sub_menu_items[5].addEventListener("mouseout",function(){
    menu_items[5].style.color='black'
    menu_items[5].style.borderBottom="2px white solid"
})

link_t.forEach(function(item){
    item.addEventListener("mouseover",function(){
        console.log('lasdhfjkhsdf')
        item.style.color='#C40F39'
        

    })

    item.addEventListener("mouseout",function(){
        item.style.color='#595959'
    })
})

et_sub.forEach(function(item) {
    item.addEventListener("mouseover", function() {
        item.style.color='#C40F39'
    });

    item.addEventListener("mouseout", function() {
        item.style.color='#6e6e6e'
    });
});


nav_con.addEventListener("click",function(){
    nc_hover.style.opacity="1"
    nc_hover.style.pointerEvents="auto"
    nav_con.style.opacity="0"

    nav_menu.style.maxHeight="480px"

    menu_bar.style.opacity="0"
})      

nc_hover.addEventListener("click",function(){
    nc_hover.style.opacity="0"
    nc_hover.style.pointerEvents="none"
    nav_con.style.opacity="1"

    nav_menu.style.maxHeight="0px"

    menu_bar.style.opacity="1"
})



bp_sort.forEach(function(item){
    item.addEventListener("mouseover",function(){
        item.style.border="2px #c40f39 solid"
        item.style.color="#c40f39"
    
    })

    item.addEventListener("mouseout",function(){
        item.style.border="2px #bcbcbc solid"
        item.style.color="#bcbcbc"
    })
})



/**
 * 동영상 자동 재생
 */

  const video = document.getElementById("bg_video");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play();
        video.muted = false;
      } else {
        video.pause();
        video.muted = true;
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(video);


/**
 * 드래그 좌우 스크롤
 */

const best_p = document.getElementById('best_p');
const bp_list = document.getElementById('bp_list');
const ul = bp_list.querySelector('ul');
const aa=bp_list.querySelectorAll('a')

let isDragging = false;
let startX = 0;
let currentX = 0; // translateX 누적값 저장

best_p.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  best_p.style.cursor = 'grabbing';
  
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  aa.forEach(function(item){
    item.style.pointerEvents="none"
  })

  const deltaX = e.clientX - startX;
  let nextX = currentX + deltaX;

  // 제한 계산
  const containerWidth = bp_list.offsetWidth;
  const contentWidth = ul.scrollWidth;
  const minX = containerWidth - contentWidth; // 가장 왼쪽으로 이동할 수 있는 값 (음수)
  const maxX = 0; // 가장 오른쪽으로 이동할 수 있는 값

  // 범위 제한
  if (nextX < minX) nextX = minX;
  if (nextX > maxX) nextX = maxX;

  ul.style.transform = `translateX(${nextX}px)`;
});

document.addEventListener('mouseup', (e) => {
  aa.forEach(function(item){
    item.style.pointerEvents="auto"
  })
  
  if (isDragging) {
    // 현재 위치 갱신
    const deltaX = e.clientX - startX;
    currentX += deltaX;

    // 제한 적용
    const containerWidth = bp_list.offsetWidth;
    const contentWidth = ul.scrollWidth;
    const minX = containerWidth - contentWidth;
    const maxX = 0;
    if (currentX < minX) currentX = minX;
    if (currentX > maxX) currentX = maxX;
  }

  
  isDragging = false;
  best_p.style.cursor = 'grab';
});

document.addEventListener('mouseleave', () => {
  isDragging = false;
  best_p.style.cursor = 'grab';
});


const inquiry=document.getElementById("inquiry_hov")

inquiry.addEventListener("mouseover",function(){
    inquiry.style.backgroundColor="#c40f39"
    inquiry.style.color="white"
})

inquiry.addEventListener("mouseout",function(){
    inquiry.style.background="none"
    inquiry.style.color="#c40f39"
})


const store=document.getElementById("store_hov")

store.addEventListener("mouseover",function(){
    store.style.backgroundColor="#c40f39"
    store.style.color="white"
})

store.addEventListener("mouseout",function(){
    store.style.background="none"
    store.style.color="#c40f39"
})


const final=document.getElementById("final")
const ff=document.getElementById("ff")

var is_click=false

ff.addEventListener("click",function(){
    if (!is_click){
    
        final.style.transform="translateY(0)"
        ff.style.borderTop="none"
        is_click=true
    }

    else if (is_click){
        final.style.transform="translateY(299px)"
        ff.style.borderTop="1px rgba(66, 66, 66, 0.797) solid"
        is_click=false
    }
})


const personal=document.getElementById("personal_b")
const email=document.getElementById("email_b")

const personal_modal=document.getElementById("personal")
const email_modal=document.getElementById("email")
const all_modal=document.getElementById("modal")

const closes=document.getElementsByClassName("close")

personal.addEventListener("click",function(){
    console.log('인식')
    all_modal.style.display="block"
    personal_modal.style.display="block"
})

email.addEventListener("click",function(){
    all_modal.style.display="block"
    email_modal.style.display="block"
})

Array.from(closes).forEach(function(item){
    item.addEventListener("click",function(){
        all_modal.style.display="none"
        personal_modal.style.display="none"
        email_modal.style.display="none"
    })

})