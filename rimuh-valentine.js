emailjs.init("D--P5f2cDHlPhZvs7");

const press_no = document.getElementById("noo");
const press_yes = document.getElementById("yess");


const hero = document.getElementById("hero");
const hero_message = document.getElementById("hero-mess");
const hero_comm = document.getElementById("hero-comm");

const imageContainer = document.querySelector(".image-container");

const daysContainer = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");

let date = new Date(2026, 1, 1);
const minDate = new Date(2026, 0, 1);

let selectedDate = null;

const modal = document.getElementById("confirmModal");
const modalDateText = document.getElementById("modal-date-text");

// validation
const vsmModal = document.getElementById("vsm-modal");
const vsmModalOk = document.getElementById("validation-ok");


// miruh mess
const replyMessage = document.getElementById("replyMessage").value;
const miruhMessage = document.getElementById("mess-rimuh");

const lastMessage = document.getElementById("last-message");


const confirmMiruh = document.getElementById("confirmMiruh");

const images = [
  "s7.gif",
  "s5.gif",
  "s3.gif",
  "s6.gif",
  "Untitled design (1).gif",
  "s9.gif",
  "s4.gif"
];

let currentImage = 0;

let scale = 1;      
let dec_scale = 1.8;

const maxScale = 17;         
const increment = 1;    
const decrement = 0.1;

const set_date = document.getElementById("set-date");
const calen = document.getElementById("calendar-container");

const sec_mess = document.getElementById("second-mess");

window.addEventListener("load", () => {
   document.querySelector(".hero").classList.add("show");
});

press_no.addEventListener("click", () => {

  currentImage = (currentImage + 1) % images.length;
  
  imageContainer.style.backgroundImage = `url('${images[currentImage]}')`;

  if(!press_yes.classList.contains("explode-valen")){
      scale += increment;
      dec_scale -= decrement;
      
      press_yes.style.transform = `scale(${scale})`;

      if (scale < 0.2) {scale = 0.2;}

      press_no.style.transform = `scale(${dec_scale})`;
      

      if(scale >= maxScale){
        press_no.classList.add("explode-valen");
      }
  }

  const maxX = window.innerWidth - press_no.offsetWidth;
  const maxY = window.innerHeight - press_no.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  press_no.style.position = "absolute";
  press_no.style.left = randomX + "px";
  press_no.style.top = randomY + "px";
});

press_yes.addEventListener("click", () => {
    press_yes.classList.add("explode-valen");
    
    hero.style.display = "none";

    document.querySelector(".hero-commercial").classList.add("show");

    setTimeout(() => {
      hero_comm.style.display = "none";
      document.querySelector(".hero-message").classList.add("show");
    },3100)

});

function renderCalendar() {
  daysContainer.innerHTML = "";
  const year = date.getFullYear();
  const month = date.getMonth();

  const prevBtn = document.getElementById("prev");
  const testPrev = new Date(date);

  testPrev.setMonth(testPrev.getMonth() - 1);

  prevBtn.disabled = testPrev < minDate;
  prevBtn.style.opacity = prevBtn.disabled ? "0.4" : "1";
  prevBtn.style.cursor = prevBtn.disabled ? "not-allowed" : "pointer";


  monthYear.textContent = date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  

  for (let i = 0; i < firstDay; i++) {
    daysContainer.appendChild(document.createElement("div"));
  }

  for (let day = 1; day <= lastDate; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.textContent = day;

    const today = new Date();
    const dateObj = new Date(year, month, day);
    const dayOfWeek = dateObj.getDay();
    
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayDiv.classList.add("today");
    }

    if (
    selectedDate &&
    day === selectedDate.getDate() &&
    month === selectedDate.getMonth() &&
    year === selectedDate.getFullYear()
  ) {
    dayDiv.classList.add("selected");
  }

  if (dayOfWeek === 0) {
    dayDiv.classList.add("disabled");
    dayDiv.style.pointerEvents = "none";
    dayDiv.style.opacity = "0.3";
  }
  else if(dayOfWeek === 1){
        dayDiv.classList.add("disabled");
    dayDiv.style.pointerEvents = "none";
    dayDiv.style.opacity = "0.3";
  }
  else if(dayOfWeek === 3){
        dayDiv.classList.add("disabled");
    dayDiv.style.pointerEvents = "none";
    dayDiv.style.opacity = "0.3";
  }
  else if(dayOfWeek === 4){
        dayDiv.classList.add("disabled");
    dayDiv.style.pointerEvents = "none";
    dayDiv.style.opacity = "0.3";
  }
  else if(dayOfWeek === 5){
        dayDiv.classList.add("disabled");
    dayDiv.style.pointerEvents = "none";
    dayDiv.style.opacity = "0.3";
  }
  else{
  
    dayDiv.addEventListener("click", () => {
      document
        .querySelectorAll(".calendar-days div")
        .forEach(d => d.classList.remove("selected"));

      dayDiv.classList.add("selected");

      selectedDate = new Date(year, month, day);

      console.log(`Selected: ${year}-${month + 1}-${day}`);
    });
  }

    daysContainer.appendChild(dayDiv);
  }
}

document.getElementById("prev").onclick = () => {

  const previousMonth = new Date(date);
  previousMonth.setDate(1); 
  previousMonth.setMonth(previousMonth.getMonth() - 1);

  if (previousMonth < minDate) return;

  date = previousMonth;
  renderCalendar();
};

document.getElementById("next").onclick = () => {
   const nextMonth = new Date(date);
  nextMonth.setDate(1);  
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};

renderCalendar();

set_date.addEventListener("click", () => {

  
    document.querySelector(".second-message").classList.add("hide");
    setTimeout(() => {
      sec_mess.style.display = "none";
      calen.style.display = "flex";
      setTimeout(() => {
        document.querySelector(".calendar-container").classList.add("show");

      }, 800);
      
    },900);
});


document.getElementById("send-date").addEventListener("click", () => {
  if (!selectedDate) {
    alert("Please select a date first baby! 💖");
    return;
  }

  const formattedDate = selectedDate.toDateString();
  modalDateText.textContent = `Selected Date: ${formattedDate}.`;

  modal.style.display ="flex";
  
  modal.classList.add("show");
  // const templateParams = {
  //   selectedDate: formattedDate,
  //   message: "I'm Looking forward to seeing you again babyy! ❤",      
  //   time: new Date().toLocaleTimeString()
  // };

  // emailjs.send("service_0aq2la9", "template_q2mq3wb", templateParams)
  //   .then((response) => {
  //     console.log("Email sent!", response.status, response.text);
  //     alert("DATE IS SET! SEE YOU MAHAL! <3");
  //   })
  //   .catch((error) => {
  //     console.error("Failed to send email:", error);
  //     alert("Email failed to send 😢");
  //   });

});

// INIGO INPUT
document.getElementById("confirmSend").addEventListener("click", () => {

  if (!selectedDate) return;
  const formattedDate = selectedDate.toDateString();

  const templateParams = {
    selectedDate: formattedDate,
    message: "I'm looking forward to seeing you again babyy! ❤",
    time: new Date().toLocaleTimeString()
  };

  emailjs
    .send("service_0aq2la9", "template_q2mq3wb", templateParams)
    .then(() => {
      modal.classList.remove("show");
      modal.classList.add("hide");
      modal.addEventListener(
      "animationend",
      () => {
      modal.style.display = "none";
      modal.classList.remove("hide");

      vsmModal.style.display = "flex";

      vsmModal.classList.add("show");

    },
    { once: true }
  );
    })
    .catch(() => {
      alert("Email failed baby! 😢");
      modal.classList.remove("show");
      modal.classList.add("hide");
      modal.addEventListener(
      "animationend",
      () => {
      modal.style.display = "none";
      modal.classList.remove("hide");
    },
    { once: true }
  );
    });
});


vsmModalOk.addEventListener("click", () => {

  vsmModal.classList.remove("show");
      vsmModal.classList.add("hide");
      vsmModal.addEventListener(
      "animationend",
      () => {
      vsmModal.style.display = "none";
      vsmModal.classList.remove("hide");

      confirmMiruh.style.display = "flex";

      confirmMiruh.classList.add("show");

    },
    { once: true }
  );
});

// Pre-Miruh message
document.getElementById("confirmMessage").addEventListener("click", () => {

      confirmMiruh.classList.remove("show");
      confirmMiruh.classList.add("hide");
      confirmMiruh.addEventListener(
      "animationend",
      () => {
      confirmMiruh.style.display = "none";
      confirmMiruh.classList.remove("hide");

      calen.style.display = "none";

      miruhMessage.style.display = "flex";

      miruhMessage.classList.add("show");

    },
    { once: true }
  );
});

// MIRUH INPUT
document.getElementById("sendReply").addEventListener("click", () => {
  const replyMessage = document.getElementById("replyMessage").value;

  const templateParamsRimuh = {
    message: replyMessage,
    time: new Date().toLocaleTimeString()
  };

  emailjs
    .send("service_0aq2la9", "template_vek2mfb", templateParamsRimuh)
    .then(() => {
      miruhMessage.classList.remove("show");
      miruhMessage.classList.add("hide");
      miruhMessage.addEventListener(
      "animationend",
      () => {
      miruhMessage.style.display = "none";
      miruhMessage.classList.remove("hide");
    },
    { once: true }
  );
    })
    .catch(() => {
      alert("Failed to send baby! 😢");
      miruhMessage.classList.remove("show");
      miruhMessage.classList.add("hide");
      miruhMessage.addEventListener(
      "animationend",
      () => {
      miruhMessage.style.display = "none";
      miruhMessage.classList.remove("hide");
    },
    { once: true }
  );
    });
});

document.getElementById("cancelModal").addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("hide");
   modal.addEventListener(
    "animationend",
    () => {
      modal.style.display = "none";
      modal.classList.remove("hide");
    },
    { once: true }
  );
});

document.getElementById("cancelMessage").addEventListener("click", () => {
  confirmMiruh.classList.remove("show");
  confirmMiruh.classList.add("hide");
   confirmMiruh.addEventListener(
    "animationend",
    () => {
      confirmMiruh.style.display = "none";
      confirmMiruh.classList.remove("hide");

      calen.style.display = "none";

      lastMessage.style.display = "flex";
      lastMessage.classList.add("show");

    },
    { once: true }
  );
});

new QRCode(document.getElementById("qrcode2"), {
    text: "https://gqllahad.github.io/rimuh/rimuh-valentine.html",
    width: 200,
    height: 200,
    colorDark: "#cf3d81",
    colorLight: "#a11313",
    correctLevel: QRCode.CorrectLevel.H
  });