let currentPage;
let pages;
let hideTimeout;

// Not working for iframe
// let myCursor;
// let trailingDot;
// let trailX, trailY; 
// let easing = 0.18;

function setup() {
  noCanvas();
  pages = selectAll('.page');
  windowResized();
  updateCurrentPage();

  // Set currentPage based on scroll position
  currentPage = Math.floor(window.scrollY / windowHeight);

  // Add event listeners to buttons
  select('#upBtn').mousePressed(previousPage);
  select('#downBtn').mousePressed(nextPage);

  // Show buttons when mouse is moving
  document.addEventListener('mousemove', showButtons);

  // Update currentPage on scroll
  window.addEventListener('scroll', updateCurrentPage);

  // Hide buttons after a delay
  // setTimeout(hideButtons, 2000);

  trailX = windowWidth / 2;
  trailY = windowHeight / 2;

  // Reference custom cursor and trailing dot
  // myCursor = select('#myCursor');
  // trailingDot = select('#trailingDot');
  // document.addEventListener('mousemove', moveMyCursor);
  // window.addEventListener('scroll', updateCursorPosition);

  // Add hover event listeners for cornerBtn
  const cornerBtn = select('#cornerBtn');
  const cornerTooltip = select('#cornerTooltip');

  cornerBtn.mouseOver(() => {
      cornerTooltip.style('display', 'block');
  });

  cornerBtn.mouseOut(() => {
    cornerTooltip.style('display', 'none');
  });

  // Buttons always show in the beginning
  showButtons();
}

function draw() {
  // Not working for iframe

  // // Trailing circle: following cursor effect
  // trailX += (mouseX - trailX) * easing;
  // trailY += (mouseY - trailY) * easing;
  // trailingDot.position(trailX + window.scrollX, trailY + window.scrollY);
  
  // // Check if the cursor is hovering on the scroll button
  // let buttons = selectAll('.scrollBtn');
  // let isOverButton = false;
  // for (let button of buttons) {
  //   let buttonBounds = button.elt.getBoundingClientRect();
  //   if (
  //     mouseX >= buttonBounds.left &&
  //     mouseX <= buttonBounds.right &&
  //     mouseY >= buttonBounds.top &&
  //     mouseY <= buttonBounds.bottom
  //   ) {
  //     isOverButton = true;
  //     break;
  //   }
  // }

  // if (isOverButton) {
  //   myCursor.style('background-color', 'rgba(255, 69, 0)'); 
  //   trailingDot.style('width', '0px');
  //   trailingDot.style('height', '0px');
  // } else {
  //   myCursor.style('background-color', 'black');
  //   trailingDot.style('width', '30px');
  //   trailingDot.style('height', '30px');
  // }
}

// Not working for iframe
// function moveMyCursor(event) {
//   trailingDot.style('visibility', 'visible');
//   myCursor.position(event.clientX + window.scrollX, event.clientY + window.scrollY);
// }

// function updateCursorPosition() {
//   myCursor.position(trailX + window.scrollX, trailY + window.scrollY);
// }

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    scrollToPage(currentPage);
  }
}

function previousPage() {
  if (currentPage > 0) {
    currentPage--;
    scrollToPage(currentPage);
  }
}

function scrollToPage(pageIndex) {
  let pageHeight = windowHeight;
  window.scrollTo({
    top: pageIndex * pageHeight,
    behavior: 'smooth'
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  let pageHeight = windowHeight;
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.height = pageHeight + 'px';
  }
}

function showButtons() {
  select('#scrollBox').style('opacity', '1');
  // clearTimeout(hideTimeout);
  // hideTimeout = setTimeout(hideButtons, 2000);
}

// function hideButtons() {
//   select('#scrollBox').style('opacity', '0');
// }

function updateCurrentPage() {
  let pageHeight = windowHeight;
  currentPage = Math.floor(window.scrollY / pageHeight);
}