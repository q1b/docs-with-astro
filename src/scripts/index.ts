// https://www.w3docs.com/snippets/javascript/how-to-create-smooth-scrolling-when-clicking-an-anchor-link.html

let elementsDetails = {};

let scrolling = 'down';

let prev_h1:HTMLElement;
let prev_h2:HTMLElement;
let prev_h3:HTMLElement;
let prev_h4:HTMLElement;

// Class to be applied H2,H3,H4 those are in viewport
const activeClass = {
  h1: ["text-white"],
  h2: ["text-white"],
  h3: ["text-white"],
  h4: ["text-white"],
};

// Classes to be applied when H2,H3,H4 are not in viewport
const inActiveClass = {
  h1: ["text-slate-500"],
  h2: ["text-slate-500"],
  h3: ["text-slate-500"],
  h4: ["text-slate-500"],
};

// Utility functions
function removeClass(elementId:string, Classes:string[]) {
  document.getElementById(elementId).classList.remove(...Classes);
}

function addClass(elementId:string, Classes:string[]) {
  document.getElementById(elementId).classList.add(...Classes);
}

function applyActiveClass(elementName, elementId) {
  removeClass(elementId, inActiveClass[elementName]);
  addClass(elementId, activeClass[elementName]);
  // Just a simple code to apply borderLeftColor to respective elements when in viewport
  // document.getElementById(elementId).parentElement.style.borderLeftColor =
  //   "var(--theme-accent)";
}

function applyInactiveClass(elementName, elementId) {
  removeClass(elementId, activeClass[elementName]);
  addClass(elementId, inActiveClass[elementName]);
  // document.getElementById(elementId).parentElement.style.borderLeftColor =
  //   "var(--theme-divider)";
}

// isUndefined
function isDefined(value) {
  return value !== undefined;
}

function unsetAppliedClass(...previousElements) {
  previousElements.forEach((previousElement) => {
    isDefined(previousElement)
      ? applyInactiveClass("h2", previousElement.id)
      : null;
  });
}

function getParentPTag(elementId) {
  return getRelativeLinkElement(elementId).parentElement.parentElement // `p` tag // `a` tag //  `li` tag
    .parentElement.previousElementSibling.firstElementChild; // `ul` tag // Parent `a` tag // Parent's `p` tag
}

function getRelativeLinkElement(elementId) {
  return document.getElementById(elementId + "-link");
}

function isChildless(elementId) {
  return (
    getRelativeLinkElement(elementId).parentElement.nextElementSibling === null
  );
}
/* Here, all static values are going to evalute then add to elementDetails */
for (let index = 0; index < headers.length; index++) {
  const element = headers[index];
  const id = element['slug'];
  let is_childless = isChildless(id);
  let current_element = getRelativeLinkElement(id);
  let y_pos = 20;
  let parent_element;
  if(element['depth'] === 2)
    parent_element = null;
  else
    parent_element = getParentPTag(id);
  elementsDetails[id] = {
    is_childless,
    current_element,
    y_pos,
    parent_element,
  };
    document.getElementById(id).classList.add('scroll-mt-16');
  // If want to make scroll smooth with javascript
  // current_element.parentElement.onclick = () => {
  //   document.getElementById(id).scrollIntoView({
  //     block: 'start',
  //     behavior: 'smooth',
  //   });
  // }
}

const observer = new IntersectionObserver(
  (entries, observer) => {
      for (let index = 0; index < entries.length; index++) {
        let entry = entries[index];
        if (entry.isIntersecting) {
          let { y_pos, is_childless,current_element,parent_element }:{
            y_pos:number,
            is_childless:boolean,
            current_element:HTMLElement,
            parent_element:HTMLElement
          } = elementsDetails[entry.target.id];

          y_pos > entry.boundingClientRect.y ? scrolling = 'up'  : scrolling = 'down';

          elementsDetails[entry.target.id]['y_pos'] = entry.boundingClientRect.y;

          switch (entry.target.tagName) {
            case "H2":
              // if (!is_childless) return;
              // If it's childless then return nothing
              if (prev_h2 !== current_element) {
                unsetAppliedClass(prev_h2, prev_h3,prev_h4);
                prev_h2 = current_element;
                applyActiveClass("h2", prev_h2.id);
              }
              break;
            case "H3":
              if (prev_h2 !== parent_element) {
                unsetAppliedClass(prev_h2, prev_h3, prev_h4);
                prev_h2 = parent_element;
                applyActiveClass("h2", prev_h2.id);
              }
              if (prev_h3 !== current_element) {
                unsetAppliedClass(prev_h3);
                prev_h3 = current_element;
                applyActiveClass("h3", prev_h3.id);
              }
              break;
            case "H4":
              if (prev_h3 !== parent_element) {
                unsetAppliedClass(prev_h3, prev_h4);
                prev_h3 = parent_element;
                applyActiveClass("h3", prev_h3.id);
              }
              if (prev_h4 !== current_element) {
                unsetAppliedClass(prev_h4);
                prev_h4 = current_element;
                applyActiveClass("h4", prev_h4.id);
              }
              break;
            default:
              break;
          }
        }else{
          
          switch (entry.target.tagName) {
            case "H2":
              if(elementsDetails[entry.target.id]['is_childless']){
              }
              break;
            case "H3":            
              break;
            case "H4":
              break;
            default:
              break;
          }
        }
      }
  },
  {
    root: document.querySelector("root"),
    rootMargin: "0px 0px",
    threshold: 0,
  }
);

for (let index = 0; index < headers.length; index++) {
  observer.observe(document.getElementById(headers[index]["slug"]));
}
