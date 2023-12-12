const ratingInput = document.getElementById("rating");
const ratingValue = document.getElementById("rating-value");

ratingInput.addEventListener("input", () => {
    ratingValue.textContent = ratingInput.value;
});

const performanceInput = document.getElementById("performance");
const performanceValue = document.getElementById("performance-value");

performanceInput.addEventListener("input", () => {
    performanceValue.textContent = performanceInput.value;
});

const satisfactionInput = document.getElementById("satisfaction");
const satisfactionValue = document.getElementById("satisfaction-value");

satisfactionInput.addEventListener("input", () => {
    satisfactionValue.textContent = satisfactionInput.value;
});

function downloadCSV() {
  // Collect form data

  const genderRadioButtons = document.getElementsByName("gender");
  let selectedGenderRadioButton;

  const experienceRadioButtons = document.getElementsByName("experience");
  let selectedExperienceRadioButton;

  const frequencyRadioButtons = document.getElementsByName("frequency");
  let selectedFrequencyRadioButton;

  for (let i = 0; i < genderRadioButtons.length; i++) {
    if (genderRadioButtons[i].checked) {
      selectedGenderRadioButton = genderRadioButtons[i];

      break; 
    }
  }

  for (let i = 0; i < experienceRadioButtons.length; i++) {
    if (experienceRadioButtons[i].checked) {
      selectedExperienceRadioButton = experienceRadioButtons[i];

      break;
    }
  }

  for (let i = 0; i < frequencyRadioButtons.length; i++) {
    if (frequencyRadioButtons[i].checked) {
      selectedFrequencyRadioButton = frequencyRadioButtons[i];

      break; 
    }
  }

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    gender: selectedGenderRadioButton.value,
    experience: selectedExperienceRadioButton.value,
    frequency: selectedFrequencyRadioButton.value,
    rating: document.getElementById("rating").value,
    performance: document.getElementById("performance").value,
    satisfaction: document.getElementById("satisfaction").value,
    features: document.getElementById("features").value,
    compare: document.getElementById("compare").value,
    feedback: document.getElementById("feedback").value
  };
if(document.getElementById("name").value =="" || document.getElementById("email").value =="" ){

    alert("Please enter your name and a valid email address");
      
  
    
}else{
  const csvContent = Object.values(formData).join(",") + "\n";

  // Create Blob and csv download 
  const blob = new Blob([csvContent], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "form_data.csv";
  a.click();
}
}
