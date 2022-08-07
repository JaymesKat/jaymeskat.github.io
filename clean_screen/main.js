let circleWidth, growthRate, growthAmount;
            let circle = document.querySelector('.circle');
            const form = document.querySelector("#form");
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                circleWidth = Number.parseFloat(document.querySelector('#form #width').value.trim());
                growthAmount = Number.parseFloat(document.querySelector('#form #growth_amount').value.trim());
                growthRate = Number.parseFloat(document.querySelector('#form #growth_rate').value.trim());
                circle.style.width = circleWidth;
                circle.style.height = circleWidth;
                circle.style.display = "block";
                start();
            });
            function start(){
                let width, height;
                setInterval(() => {
                    width = Number.parseFloat(circle.style.width);
                    height = Number.parseFloat(circle.style.height);
                    circle.style.width = `${width+growthAmount||10}px` ;
                    circle.style.height = `${height + growthAmount||10}px`;
                }, growthRate||250);
            }
            circle.addEventListener('click', ()=>{
                circle.style.display = "none";
            })