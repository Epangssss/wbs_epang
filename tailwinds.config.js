

 function showText(image) {
    const paragraph = image.nextElementSibling;
    paragraph.classList.remove('hidden');
  }
  

    
  function hideText(image) {
    const paragraph = image.nextElementSibling;
    paragraph.classList.add('hidden');
  }

function typeText(text, paragraph) {
  let i = 0;
  const typingEffect = setInterval(() => {
    paragraph.innerText += text.charAt(i);
    i++;
    if (i > text.length) {
      clearInterval(typingEffect);
    }
  }, 50);
}

 document.querySelectorAll('.animate-click').forEach(function(element) {
      element.addEventListener('click', function() {
        element.classList.add('animate__animated', 'animate__bounce');
        setTimeout(function() {
          element.classList.remove('animate__animated', 'animate__bounce');
        }, 500);
      });
    });
function bounce(element) {
  var position = 0;
  var direction = 1;
  var timer;

  function animate() {
    position += direction * 2;
    element.style.transform = 'translateY(' + position + 'px)';
    if (position >= 20) {
      direction = -1;
    }
    if (position <= 0) {
      direction = 1;
    }

    timer = setTimeout(animate,30); // Mengulangi animasi setiap 10ms
  }

  animate();
}

window.addEventListener('load', function() {
  var element1 = document.getElementById('myElement1');
  var element2 = document.getElementById('myElement2');
  var element3 = document.getElementById('myElement3');
  var element4 = document.getElementById('myElement4');

  setTimeout(function() {
    bounce(element1);
  }, 0); // Animasi elemen pertama dimulai segera

  setTimeout(function() {
    bounce(element2);
  }, 500); // Animasi elemen kedua dimulai setelah 500ms

  setTimeout(function() {
    bounce(element3);
  }, 1000); // Animasi elemen ketiga dimulai setelah 1000ms

  setTimeout(function() {
    bounce(element4);
  }, 1500); // Animasi elemen keempat dimulai setelah 1500ms
});

 document.querySelectorAll('.animate-click').forEach(function(element) {
      element.addEventListener('click', function() {
        element.classList.add('animate__animated', 'animate__bounce');
        setTimeout(function() {
          element.classList.remove('animate__animated', 'animate__bounce');
        }, 500);
      });
    });

   

function handleClick(element) {
  element.classList.add('animate-Click'); // Menambahkan kelas untuk animasi klik
  setTimeout(function() {
    element.classList.remove('animate-Click'); // Menghapus kelas untuk menghentikan animasi klik setelah beberapa saat
  }, 500);
}

window.addEventListener('load', function() {
  var element1 = document.getElementById('myElement1');
  var element2 = document.getElementById('myElement2');
  var element3 = document.getElementById('myElement3');
  var element4 = document.getElementById('myElement4');

  setTimeout(function() {
    bounce(element1);
  }, 0); // Animasi elemen pertama dimulai segera

  setTimeout(function() {
    bounce(element2);
  }, 500); // Animasi elemen kedua dimulai setelah 500ms

  setTimeout(function() {
    bounce(element3);
  }, 1000); // Animasi elemen ketiga dimulai setelah 1000ms

  setTimeout(function() {
    bounce(element4);
  }, 1500); // Animasi elemen keempat dimulai setelah 1500ms

  element1.addEventListener('click', function() {
    handleClick(element1);
  });
  element2.addEventListener('click', function() {
    handleClick(element2);
  });
  element3.addEventListener('click', function() {
    handleClick(element3);
  });
  element4.addEventListener('click', function() {
    handleClick(element4);
  });
});