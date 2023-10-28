
/* calls the element anchor */

const anchor = document.getElementById('anchor')

/* with rekt we asign it as the anchor a box around it */

const rekt = anchor.getBoundingClientRect();

/* get the middle of the box */

const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;

/* now we create the event listener */

document.addEventListener('mousemove', (e) => {

     console.log(e)

    /* These values represent the position of the cursor */

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    /* we call the function on the eventlistener */

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    /* log it */

    console.log(angleDeg)

    /* this part loops the eyes */

    const eyes = document.querySelectorAll('.eye')

    /* loops each */

    eyes.forEach(eye => {

        /* this line rotates the eyes */

        eye.style.transform = `rotate(${90 + angleDeg}deg)`;

        /* this one changes the colors */

        anchor.style.filter = `hue-rotate(${angleDeg}deg)`;

    })
});

/* angle between the center of the anchor 
and the position of the mouse */

function angle(cx, cy, ex, ey) {

    /* normalize values */

    const dy = ey - cy;
    const dx = ex - cx;

    /* we get the angle between them in rad */

    const rad = Math.atan2(dy, dx);

    /* we transform it in deg for CSS to read */

    const deg = rad * 180 / Math.PI;

    /* return it now duh */

    return deg
}