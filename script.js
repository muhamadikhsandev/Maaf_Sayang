// --- MUSIK BG LOGIC ---
const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');
const iconOn = document.getElementById('icon-music-on');
const iconOff = document.getElementById('icon-music-off');
const musicStatus = document.getElementById('music-status');

let isPlaying = false;

function playMusic() {
  music.volume = 0.72;
  music.play().then(() => {
    isPlaying = true;
    iconOn.style.display = '';
    iconOff.style.display = 'none';
    musicStatus.textContent = 'Musik On';
  }).catch(()=>{});
}
function pauseMusic() {
  music.pause();
  isPlaying = false;
  iconOn.style.display = 'none';
  iconOff.style.display = '';
  musicStatus.textContent = 'Musik Off';
}
toggleBtn.addEventListener('click', function(){
  if(isPlaying){ pauseMusic(); } else { playMusic(); }
});
document.body.addEventListener('click', function autoPlayBg(){
  if(!isPlaying){ playMusic(); }
  document.body.removeEventListener('click', autoPlayBg);
});

// --- SWEETALERT LOADING ---
window.onload = function() {
  Swal.fire({
    title: '',
    html: `<div class="flex flex-col items-center">
      <img src="images/loading-cute.gif" width="200" class="mb-3 rounded-xl" />
      <img src="images/panda-love.png" width="170" class="mb-2" style="border-radius: 1rem" />
      <span class="text-pink-500 font-semibold" style="font-size:1.1rem">
        Lagi nyiapin kata-kata paling bucin buat kamu...
      </span>
    </div>`,  
    allowOutsideClick: false,  
    showConfirmButton: false,  
    background: '#ffe4ef',  
    timer: 1800,  
  });  
};


// --- SURAT PANJANG CUTE ---
const isiSurat = `
<div class="romantic" style="font-size:1.2rem; line-height:1.8; padding: 1rem 0 0.5rem 0;">  
  Sayangku, maaf ya kalau aku selama ini belum bisa jadi cowok yang sempurna buat kamu. Aku sering salah, kadang sikapku bikin kamu kesel, tapi percayalah semua itu bukan berarti aku nggak peduli atau nggak marah. Justru aku marah karena aku terlalu sayang sama kamu, karena aku takut kehilanganmu, takut kalau aku nggak bisa lagi bikin kamu tersenyum seperti biasanya.<br><br>  

  Aku harap kamu ngerti, kalau kamu bener-bener mau putus, aku nggak bisa melarang. Aku akan terima dengan lapang dada, walaupun pasti sakit banget buatku. Tapi kalau kamu masih punya sedikit aja rasa untuk kita lanjut, ayo kita sama-sama turunkan ego, saling memahami, saling ngalah, karena aku yakin hubungan ini masih bisa kita jaga dan rawat sampai jauh ke depan.<br><br>  

  Aku bukannya nggak mau ngobrol sama kamu, justru aku selalu pengen cerita, pengen dengerin kamu cerita. Tapi kadang aku ngerasa kamu nggak mau ngerti apa yang aku rasain. Aku berusaha keras ngerti kamu, ngerti perasaanmu, ngerti setiap marah dan sedihmu, tapi waktu aku minta sedikit aja dimengerti, kamu langsung marah, atau tiba-tiba pergi, off, bahkan telponku kamu matiin. Itu bikin aku sedih, sayang… seakan-akan aku nggak ada di hatimu.<br><br>  

  Padahal aku percaya banget, kita bisa saling melengkapi. Aku yakin kamu juga nggak bisa tanpa aku, sama halnya aku nggak bisa tanpa kamu. Aku cuma minta sedikit kebebasan, sedikit ruang buat diriku sendiri, karena aku juga manusia yang butuh waktu buat nenangin diri. Tapi yakinlah, walau aku lagi main PS atau ML, itu cuma buat hiburan, bukan berarti aku ngelupain kamu. Justru setiap detik aku main, aku tetep mikirin kamu, tetep sayang sama kamu.<br><br>  

  Kamu itu bagian paling indah dari hidupku, alasan aku kuat setiap hari. Aku nggak mau kita hancur cuma gara-gara hal kecil yang seharusnya bisa kita bicarakan dengan baik. Aku nggak mau kehilanganmu cuma karena salah paham yang seharusnya bisa kita selesaikan dengan sabar dan pengertian.<br><br>  

  Jadi, kalau kamu masih mau jalanin hubungan ini sama aku, ayo sama-sama berusaha, sama-sama belajar jadi dewasa, sama-sama saling percaya. Aku janji, aku akan terus belajar jadi cowok yang lebih baik buat kamu, bukan sempurna, tapi cukup buat bikin kamu bahagia. <br><br>  

  Aku sayang banget sama kamu, lebih dari yang bisa aku tulis di sini, lebih dari yang bisa aku tunjukkan dengan kata-kata. Tolong jangan pernah ragu soal itu ya, cintaku tulus, serius, dan cuma buat kamu. <br><br>  

  Kekasihmu yang selalu mencintaimu,<br>  
  <span style="font-size:1.5rem;color:#e11d48;font-weight:bold;">Ican</span>  
</div>  
`;

// --- PESAN WA ---
const pesanWA = encodeURIComponent(
  `Hai sayangku 🌷\n\nAku cuma mau bilang maaf banget ya kalau aku kadang bikin kamu bete atau marah. Aku nggak pernah niat bikin kamu sedih, beneran. Aku janji bakal belajar jadi pasangan yang lebih baik buat kamu, biar kamu makin sayang dan nggak nyesel punya aku 😚💕\n\nBtw, aku kangen! Kalo kamu juga kangen, jangan gengsi balas ya! Love youu 🐼❤️`
);

// --- POPUP FLOW ---
function showMaafPopup() {
  Swal.fire({
    title: '<span class="romantic">Terakhir nih...</span>',
    html: `<div style="font-size:1.23rem"><b>Maafin aku yah?</b> <br>
      <img src="images/panda-plis.png" width="140" class="mx-auto my-2" /><br>
      <i style="color:#e11d48;">Aku janji bakal jadi pasangan yang lebih baik buat kamu. Love youu 😚💕</i>
    </div>`,  
    showCancelButton: true,  
    confirmButtonText: 'Maafin 😚',  
    cancelButtonText: 'Nggak Dulu 😒',  
    background: '#ffe4ef'  
  }).then((res) => {  
    if (res.isConfirmed) {  
      showSuratCinta();  
    } else if (res.dismiss === Swal.DismissReason.cancel) {  
      showPelukDulu();  
    }  
  });  
}

function showSuratCinta() {
  Swal.fire({
    title: '<span class="romantic" style="font-size:2rem;">💌 Surat Buat Kamu</span>',
    html: `<div style="max-height:320px;overflow-y:auto;scrollbar-width:thin;padding-right:2px;">
      ${isiSurat}
    </div>`,  
    confirmButtonText: 'Sudah Dibaca',  
    background: '#fff6fa',  
    customClass: {  
      popup: 'rounded-3xl',  
      htmlContainer: 'pt-2 pb-0'  
    },  
    showCloseButton: false,  
    allowOutsideClick: false  
  }).then(() => {  
    showThanksToast();
    setTimeout(() => {
      showCuteCalculator();
    }, 1800);
  });  
}

// --- TOAST UCAPAN TERIMAKASIH ---
function showThanksToast() {
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Terima kasih sayang 💖',
    text: 'Pesanmu berhasil terkirim ke hati aku 😚',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    background: '#ffe4ef'
  });
}

// --- KALKULATOR CUTE ---
// --- KALKULATOR CINTA DENGAN ANIMASI & VALIDASI HASIL ---
function showCuteCalculator() {
  Swal.fire({
    title: '<span class="romantic">🧮 Kalkulator Cinta</span>',
    html: `
      <div style="font-size:1.2rem; color:#e11d48; margin-bottom:12px;">
        Pertanyaan: <b>500 + 500 = ?</b>
      </div>
      <div id="calc-display" 
           style="width:100%; padding:10px; margin-bottom:10px; 
           font-size:1.4rem; font-weight:bold; 
           text-align:right; background:#fff; 
           border-radius:10px; border:2px solid #f48fb1; color:#d63384;">
        0
      </div>
      <div id="calc-buttons" 
           style="display:grid; grid-template-columns: repeat(3,70px); gap:10px; justify-content:center;">
        <button class="btn-calc">7</button>
        <button class="btn-calc">8</button>
        <button class="btn-calc">9</button>
        <button class="btn-calc">4</button>
        <button class="btn-calc">5</button>
        <button class="btn-calc">6</button>
        <button class="btn-calc">1</button>
        <button class="btn-calc">2</button>
        <button class="btn-calc">3</button>
        <button class="btn-calc">0</button>
        <button class="btn-calc">+</button>
        <button class="btn-calc">=</button>
        <button class="btn-calc" style="grid-column: span 3; background:#f8d7da !important;">C</button>
      </div>
      <div id="calc-result" style="margin-top:15px; font-size:1.3rem; font-weight:bold; color:#e11d48;"></div>
    `,
    background: '#fff0f6',
    confirmButtonText: 'Cute 😳',
    customClass: { popup: 'rounded-3xl' },
    didOpen: () => {
      const display = document.getElementById('calc-display');
      const result = document.getElementById('calc-result');
      let expression = '';

      document.querySelectorAll('.btn-calc').forEach(btn => {
        btn.style.cssText = `
          background:#fce4ec; border:1px solid #f48fb1; 
          border-radius:12px; padding:12px; font-size:1.2rem; 
          font-weight:bold; color:#d63384; cursor:pointer;
          transition: all 0.2s;
        `;
        btn.addEventListener('mouseover', () => btn.style.background = "#f8bbd0");
        btn.addEventListener('mouseout', () => btn.style.background = "#fce4ec");

        btn.addEventListener('click', () => {
          const val = btn.textContent;

          if(val === 'C') {
            expression = '';
            display.textContent = '0';
            result.textContent = '';
          } else if(val === '=') {
            try {
              let hasil = eval(expression); // hitung ekspresi
              if(hasil === 1000) {
                // animasi menghitung
                let steps = ["500 + 500", "=", "1000 ❤️"];
                let i = 0;
                result.textContent = '';
                let interval = setInterval(() => {
                  display.textContent = steps[i];
                  i++;
                  if(i === steps.length) {
                    clearInterval(interval);
                    result.innerHTML = "😍 <b>I Love You Seribu 💕</b>";
                  }
                }, 800);
              } else {
                display.textContent = hasil;
                result.innerHTML = "Eh salah 😅 coba lagi ya";
              }
            } catch {
              display.textContent = 'Error';
              result.innerHTML = "Eh salah 😅 coba lagi ya";
            }
          } else {
            expression += val;
            display.textContent = expression;
          }
        });
      });
    }
  }).then(() => {
    showWAButton(); 
  });
}


// --- TOMBOL WA ---
function showWAButton() {
  Swal.fire({
    title: '<span class="romantic">Makasih udah baca 💗</span>',
    html: `
      <div style="font-size:1.13rem">  
        Kalau kamu mau jawab atau chat aku, klik tombol di bawah ini ya!<br>  
        <a href="https://wa.me/628989379116?text=${pesanWA}" target="_blank" class="wa-btn-pop mt-4">  
          <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WA" width="27" height="27" style="display:inline-block;">  
          Kirim Pesan Cinta ke WhatsApp  
        </a>  
      </div>  
    `,
    showConfirmButton: false,
    background: '#e0f7fa'
  });
}

// --- PELUK DULU ---
function showPelukDulu() {
  Swal.fire({
    title: '<span class="romantic">Peluk Dulu 🐼💕</span>',
    html: `<div style="font-size:1.15rem">
      <img src="images/panda-peluk.png" width="170" class="mx-auto my-2" alt="Panda peluk">
      <br>
      Nih peluk sayang dulu, biar adem~ 🤗
    </div>`,  
    confirmButtonText: 'Kembali',  
    background: '#fce4ec',  
    showCancelButton: false,  
    allowOutsideClick: false  
  }).then(() => {  
    showMaafPopup();  
  });  
}

// --- STEP SWEETALERT ---
const steps = [
  {
    title: '<span class="romantic">Hai Cinta!</span>',
    html: '<div style="font-size:1.22rem">Aku sadar, kadang aku nyebelin banget, ya 😔<br>Aku cuma mau bilang...</div>',
    imageUrl: 'images/panda-hai.png',
    imageWidth: 170,
    imageHeight: 170,
    confirmButtonText: 'Lanjut 🥺',
    background: '#fff0f6'
  },
  {
    title: '<span class="romantic">Maaf ya, Sayangku</span>',
    html: '<div style="font-size:1.18rem">Aku nggak pernah mau bikin kamu sedih.<br>Aku suka ngelakuin hal bodoh, tapi aku janji bakal berubah, demi kamu! 💖</div>',
    imageUrl: 'images/panda-maaf.png',
    imageWidth: 170,
    imageHeight: 170,
    confirmButtonText: 'Lanjut Lagi 😚',
    background: '#ffe4ef'
  },
  {
    title: '<span class="romantic">Aku Kangen Kamu</span>',
    html: '<div style="font-size:1.17rem">Tanpa kamu tuh, kayak donat tanpa meses... Nggak lengkap 😢</div>',
    imageUrl: 'images/panda-kangen.png',
    imageWidth: 170,
    imageHeight: 170,
    confirmButtonText: 'Aku Juga Kangen 🥰',
    background: '#fff7fa'
  },
  {
    title: '<span class="romantic">Makasih Udah Sabar</span>',
    html: '<div style="font-size:1.16rem">Kamu tuh super sabar dan selalu ngerti aku. Aku bersyukur banget punya kamu 💕</div>',
    imageUrl: 'images/panda-makasih.png',
    imageWidth: 170,
    imageHeight: 170,
    confirmButtonText: 'Lanjut Terakhir 😳',
    background: '#fffde7'
  }
];

// --- RUN FLOW ---
document.getElementById('openMaaf').addEventListener('click', async function() {
  let i = 0;
  while (i < steps.length) {
    await Swal.fire(steps[i]);
    i++;
  }
  showMaafPopup();
});
