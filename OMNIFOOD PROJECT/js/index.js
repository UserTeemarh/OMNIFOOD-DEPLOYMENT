console.log('Hello world');

const myName = 'Fatimah Sulaimon';
const h1 = document.querySelector('.heading-primary')
console.log(myName);
console.log(h1);

// console.log(h1.textContent);
// h1.style.color = '#5facb1';
// h1.style.backgroundColor = 'pink';
// h1.style.padding = '5rem'

// h1.addEventListener('click', ()=> {
    
// h1.style.color = '#5cae3d';
// h1.style.backgroundColor = 'green';
// });

// SET CURRENT YEAR
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;


// MAKE MOBILE NAVIGATION WORK

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', ()=> {
    const timeout = setTimeout(()=> {
        headerEl.classList.toggle('nav-open');
    }, 1000);
})

// 'nav-open'


// ///////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        console.log(href)

        // Scroll back to top
        if(href === "#") window.scrollBy({
            top: 20,
            behaviour: "smooth",
        })

        if (href !== "#" && href.startsWith("#")){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({
                behavior: "smooth"
            })
        }

        if (link.classList.contains('main-nav-link')) {
            headerEl.classList.toggle('nav-open');
        }
    })
});


// /////////////////////////////
// Sticky navigation

const sectionHeroEL = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        if (!ent.isIntersecting) {
            document.body.classList.add('sticky');
        }
        if(ent.isIntersecting === true) {
            document.body.classList.remove('sticky');
        }
    },
    {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: '-40px',
    }
)
obs.observe(sectionHeroEL);


///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();


// openIcon.addEventListener('click', function() {
//     h1.style.color = 'yellow';
//     navOpen.style.opacity = '1';
//     navOpen.style.pointerEvents = 'auto';
//     navOpen.style.visibility = 'visible';
//     navOpen.style.transform = 'translateX(0)'; 
// })


