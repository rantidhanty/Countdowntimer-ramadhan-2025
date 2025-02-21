function identify() {
  if (localStorage.getItem("theme") == "dark") {
    setDark(true);
    document.getElementById("switch").checked = true;
  } else {
    setDark(false);
  }
}

function setDark(Dark) {
  if (Dark) {
    document.body.setAttribute("id", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.setAttribute("id", "light");
    localStorage.removeItem("theme");
  }
}

function toggleCheck() {
  if (document.getElementById("switch").checked === true) {
    setDark(true);
  } else {
    setDark(false);
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   const music = document.getElementById("bg-music");

//   // Coba putar musik saat halaman dimuat
//   music.play().catch(() => {
//     console.log("Autoplay diblokir, menunggu interaksi pengguna...");
//   });

//   // Jika autoplay diblokir, jalankan saat pengguna berinteraksi pertama kali
//   document.body.addEventListener(
//     "click",
//     function () {
//       music.play();
//       console.log("Musik diputar setelah interaksi pengguna.");
//     },
//     { once: true }
//   ); // Hanya dijalankan sekali
// });

document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("bg-music");
  alert("Assalamu’alaikum! Selamat datang di TK Islam Harapan Sukatani 😊");
  music.play().catch(() => {
    console.log("Autoplay diblokir, menunggu interaksi pengguna...");
    document.body.addEventListener(
      "click",
      function () {
        music.play();
        console.log("Musik diputar setelah interaksi pengguna.");
      },
      { once: true }
    );
  });
});
