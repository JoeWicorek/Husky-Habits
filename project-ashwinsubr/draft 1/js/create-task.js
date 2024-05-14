'use strict';

const dayColors = {
  monday: "orange",
  tuesday: "darkgoldenrod",
  wednesday: "green",
  thursday: "blue",
  friday: "purple",
  saturday: "palevioletred",
  sunday: "orange"
};

let days = document.querySelectorAll(".select-day img");

days.forEach((img) => {
  img.addEventListener("click", function() {
    toggleDay(img);
  });
});

function toggleDay(img) {
  const dayName = img.alt.toLowerCase(); 
  const hiddenInput = document.querySelector('input[name="' + dayName + '"]');
  const isSelected = hiddenInput.value === "1";
  if (isSelected) {
    hiddenInput.value = "0";
    img.classList.remove('day-selected');
    img.style.filter = "";
  } else {
      hiddenInput.value = "1";
      img.classList.add('day-selected');
      img.style.filter = `drop-shadow(0px 0px 1px white)
                          drop-shadow(0px 0px 2px white)
                          drop-shadow(0px 0px 3px white)
                          drop-shadow(0px 0px 4px white)
                          drop-shadow(0px 0px 5px white)
                          drop-shadow(0px 0px 6px ${dayColors[dayName]})`;
  }
}
