document.getElementById("sparcles_on").addEventListener("click", () => {
    let sparkles = [];
    let rnd = myRandom(20, 40);
    for (let i = 0; i < rnd; i++) {
        var sparkEl = document.createElement("div");
        sparkEl.classList.add('sparkle');
        sparkEl.classList.add('glyphicon');
        sparkEl.classList.add('glyphicon-asterisk');
        sparkles.push(sparkEl);
    }

    let xRnd;
    let yRnd;
    sparkles.forEach((el) => {
        xRnd = myRandom(0, window.innerWidth);
        yRnd = myRandom(0, window.innerHeight);
        el.style.left = `${xRnd}px`;
        el.style.top = `${yRnd}px`;
        document.getElementById('sparcles').appendChild(el);
    });
});

$('#rotate-sparcles').click(() => {
    let $sparkles = $('.sparkle');
    var rotClasses = ['rot-slow', 'rot-med', 'rot-fast'];
    $sparkles.each((ind, el) => {
        let $el = $(el);
        let swRnd = myRandom(0, 1 + 1);
        if (swRnd === 1) {
            let hasRotation =
                $el
                    .attr("class")
                    .split(' ')
                    .filter((className) => {
                        return rotClasses.indexOf(className) >= 0;
                    })
                    .length > 0;
            if (hasRotation){
                rotClasses.forEach((className) => {
                    $el.removeClass(className);
                });
            }else {
                let rotRnd = myRandom(0, 2 + 1);
                $el.addClass(rotClasses[rotRnd]);
            }
        }
    });

    myRotate($sparkles);
});

let rotIntervals = [];

function myRotate($sparkles) {
    rotIntervals.forEach((interval) => {
        clearInterval(interval);
    });
    rotIntervals = [];

    let $slowSparcles = $sparkles.filter((ind, el) => {
        return $(el).hasClass('rot-slow');
    });
    let slowSpeed = 1;
    let slowAngle = 0;
    let slowTimer = setInterval(() => {
        slowAngle += slowSpeed;
        $slowSparcles.rotate(slowAngle)
    }, 20);

    let $medSparcles = $sparkles.filter((ind, el) => {
        return $(el).hasClass('rot-med');
    });
    let medSpeed = 2;
    let medAngle = 0;
    let medTimer = setInterval(() => {
        medAngle += medSpeed;
        $medSparcles.rotate(medAngle)
    }, 20);

    let $fastSparcles = $sparkles.filter((ind, el) => {
        return $(el).hasClass('rot-fast');
    });
    let fastSpeed = 3;
    let fastAngle = 0;
    let fastTimer = setInterval(() => {
        fastAngle += fastSpeed;
        $fastSparcles.rotate(fastAngle)
    }, 20);
    rotIntervals.push(slowTimer);
    rotIntervals.push(medTimer);
    rotIntervals.push(fastTimer);
}
function myRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}