// #1 - mouseover event on header intro image
const headerImg = document.querySelector('header img')
headerImg.addEventListener('mouseover', event => event.target.style.border = 'solid red 3px')

//#2 mouseout on header intro image
headerImg.addEventListener('mouseout', event => event.target.style.border = '')


//#3 - keydown event on body
const bodyEvent = document.querySelector('body')
bodyEvent.addEventListener('keydown', event => event.target.style.backgroundColor = 'purple')

//#4 keyup event on body
bodyEvent.addEventListener('keyup', event => event.target.style.backgroundColor = 'blue')

//#5 - dblclick event on html
const dblclickBodyEvent = document.querySelector('body')
dblclickBodyEvent.addEventListener('dblclick', event => {
    window.alert('You have reset the background color')
    event.target.style.backgroundColor = 'white'
})

//#6 load event on window
window.addEventListener('load', event => window.alert('Page is fully loaded!') )

//#7 click even for 'Sign Me Up' buttons'
const signMeUp = document.querySelectorAll('.btn')
signMeUp.forEach(item => item.addEventListener('click', event => prompt('Please Enter Your Name')))

//#8 - dragstart event
const dragOverEvent = document.querySelector('.inverse-content')
dragOverEvent.addEventListener('dragstart', event => {
    alert('Hey! Dont touch that!')
    event.stopImmediatePropagation()
})

//#9 - resize event
const bodyBackground = document.querySelector('body')
window.addEventListener('resize', () => bodyBackground.style.color = 'green')

 //#10 - mousedown on content section image
const contentImg = document.querySelector('.content-section img')
contentImg.addEventListener('mousedown', event => event.target.style.transform = 'scale(2)')

//#11 - mouseup on content section
contentImg.addEventListener('mouseup', event => event.target.style.transform = 'scale(1)')


//#12 - wheel event on 'Welcome to fun bus!'
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    introH2.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  const introH2 = document.querySelector('.intro h2');
  introH2.addEventListener('wheel', zoom)

  //nav prevent default
  const navItems = document.querySelectorAll(nav)
  navItems.forEach(item => item.addEventListener(event => event.preventDefault()))

  //nested items

  const nestedDiv1 = document.querySelector('#nest1')
  nestedDiv1.addEventListener('click', alert1)

  const nestedDiv2 = document.querySelector('#nest2')
  nestedDiv2.addEventListener('click', alert2)


  function alert1 (){
      window.alert('div1')
  }

  function alert2(event){
      window.alert('div2')
    event.stopPropogation();
  }