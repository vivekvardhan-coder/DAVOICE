 // Create floating letters
 const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
 const floatingLetters = document.getElementById("floatingLetters");
 
 for (let i = 0; i < 50; i++) {
   const letter = document.createElement("div");
   letter.className = "letter";
   letter.textContent = letters[Math.floor(Math.random() * letters.length)];
   letter.style.left = `${Math.random() * 100}%`;
   letter.style.animationDuration = `${15 + Math.random() * 10}s`;
   letter.style.animationDelay = `${Math.random() * 5}s`;
   letter.style.opacity = Math.random() * 0.2;
   letter.style.fontSize = `${Math.random() * 3 + 1}rem`;
   floatingLetters.appendChild(letter);
 }

 // Testimonial carousel scrolling
 const scrollLeftBtn = document.getElementById("scrollLeft");
 const scrollRightBtn = document.getElementById("scrollRight");
 const testimonialContainer = document.getElementById("testimonialContainer");
 
 scrollLeftBtn.addEventListener("click", () => {
   testimonialContainer.scrollBy({ left: -350, behavior: "smooth" });
 });
 
 scrollRightBtn.addEventListener("click", () => {
   testimonialContainer.scrollBy({ left: 350, behavior: "smooth" });
 });

 // Language selector
 const languageOptions = document.querySelectorAll(".language-option");
 languageOptions.forEach(option => {
   option.addEventListener("click", () => {
     languageOptions.forEach(opt => opt.classList.remove("active"));
     option.classList.add("active");
   });
 });

 // Play button animation
 const playButton = document.querySelector(".btn-play");
 const soundwave = document.querySelector(".soundwave");
 
 playButton.addEventListener("click", () => {
   playButton.classList.toggle("playing");
   
   // Here you would actually trigger the text-to-speech
   // For demo, we'll just show/hide the soundwave
   if (playButton.classList.contains("playing")) {
     soundwave.style.display = "flex";
     setTimeout(() => {
       soundwave.style.display = "none";
       playButton.classList.remove("playing");
     }, 5000);
   } else {
     soundwave.style.display = "none";
   }
 });