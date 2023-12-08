const minutosId = document.querySelector("#minutes");
const segundosId = document.querySelector("#seconds");
const milisegundosId = document.querySelector("#milliseconds");
const star_btn = document.querySelector("#star_btn");
const resume_btn = document.querySelector("#resume_btn");
const reset_btn = document.querySelector("#reset_btn");
const pause_btn = document.querySelector("#pause_btn");

let interval;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let estaPausado = false;

star_btn.addEventListener("click", startTime);
pause_btn.addEventListener("click", pauseTimer);
resume_btn.addEventListener("click", resumeTimer);
reset_btn.addEventListener("click", resetTimer);


function startTime() {
    interval = setInterval (() => {

        if(!estaPausado) {
            milisegundos += 10;

            if(milisegundos === 1000) {
                segundos++;
                milisegundos = 0; 
            }

            if(segundos === 60) {
                minutos++;
                segundos = 0;
            }

            minutosId.textContent = formatarTime(minutos);
            segundosId.textContent = formatarTime(segundos);
            milisegundosId.textContent = formatarTimeMillisec(milisegundos);
        }
    }, 10)

    star_btn.style.display = "none";
    pause_btn.style.display = "block";
}

function pauseTimer() {
    estaPausado = true;
    pause_btn.style.display = "none";
    resume_btn.style.display = "block";
}

function resumeTimer() {
    estaPausado = false;
    resume_btn.style.display = "none";
    pause_btn.style.display = "block";
}

function resetTimer() {
    clearInterval(interval); ////////// pesquisar /////////////
    milisegundos = 0;
    segundos = 0;
    minutos = 0;

    minutosId.textContent = "00";
    segundosId.textContent = "00";
    milisegundosId.textContent = "000";

    star_btn.style.display = "block";
    pause_btn.style.display = "none";
    resume_btn.style.display = "none";
    estaPausado = false;
}

// O "time" dentro dos parenteses como parametro não representa nada, ele sera um vlaor substituido, como pode ver a algumas linhas acima.
// Os parametros são como numeros anonimos que serão substituidos por outros valores.
function formatarTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Aqui eu usei o parametro "milli", porém podemos repetir o mesmo nome do parametro anterior "time" e não teria problema nenhum.
function formatarTimeMillisec(milli) {
    // Esse "padStart" é para completar as (tres primeiras casa, com zero), nocomeço do cronômetro.
    return milli < 100 ? `0${milli}`.padStart(3, "0") : milli; //////// pesquisar //////////
}

