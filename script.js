document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const trackName = document.getElementById("trackName");
  const albumArt = document.getElementById("albumArt");
  const progressBar = document.getElementById("progress");
  const currentTimeDisplay = document.getElementById("currentTime");
  const durationDisplay = document.getElementById("duration");
  const volumeSlider = document.getElementById("volume");
  const trackDesc = document.getElementById("trackDesc");

  const playlist = [
    {
      name: "The Day it all Started",
      file: "assets/gh.mp3",
      image: "assets/img1.jpg",
      desc: `<p>Naman, it Feels like Yesterday when we first decided to meet.... Both nervous Yet Curious about what might happen at the date 🫣(Little Did we know what's gonna happen)

So I was just Standing Near Irani wadi.. where I saw a Short cute Girl wearing Blue top with tiny flowers + silver boondi wali earings, black jeans with Open Hair and nose ring on 😁
...And Yeah a silver watch in Your Left Hand (Ye the hand I holded for The first time)

Naman Do You Remember the moment when We were roaming Around Like idiots visiting Cafe's and restaurant Just To Get Somewhere to sit 😂

In that Vast Heat I shoot my Shot before that Garden 🫣(I am a shy Guy believe me )

Then Our Golden Hour Started 💫💫
Listen To the Songs Which Actually Defined Our Evening Together ✨
Mild warm air near that Garden with wind blowing near Us... And stroms Within 😁
My arms were Around You... Joy in the Air and Lips Fairly Connected ❤ 
- We Realised Soon Enough That The Golden Hour wasn't the Sky ☀ IT WAS YOU WALKING TOWARDS ME 💖



Just Asking Each Other Not To Leave... Kinda Curious as Well ❤‍🩹

I heard Some where- "Some meetings aren't Coincidences. They're whispers from the Univer Saying: 'Here. This one's Yours."

~And That's How It All Started ❤✨</p>`
    },
    {
      name: "The Day That Lasted Forever",
      file: "assets/tb.mp3",
      image: "assets/img2.jpg",
      desc:`<p>The Longest Day: Joy, Love, chaos 🤒

Dec 23, 2024. One Of The Most Precious Day Of Our Life ❤
That Day I saw my Bauni Standing with a bouquet In the Hand waiting for me ❤ 
(Damnnn Babe You Literally Did that 😭😭😭)

That Wasn't Just A Normal Day..  first I got tons of Gifts From You 🥹 💟 

So We Met and went To Our Place As Soon As Possible... Me carrying Joy in my Hands As well as in Heart 💞 

I Clearly Remember we Were in Bed carrying The- unexplainable Urge to Just Hug Each other and Be 'ONE' 

I REMEMBER YOU STARTED SING THIS SONG 🤌💖
AND BOTH OF OUR EYES FLUSHED IN TEARS... THAT DAY WE JUST DIDNT SHARED TEARS BUT OUR SOULS TOO ✨
(We both missed Each Other didn't we ??)

Well Well Well 😁
Then The Night Approach We were Sitting On The Side Of A Bridge...
     Then I told You Close Your Eyes and I Went on My Knees and Proposed You Ring 💍 
(Actually We both were wear on Our Knees ) Asked You To Be My Girlfriend 💖 
(My dumbass Literally Got You engaged With A Paper Ring 💍 😭... And I Got You 10 of  those )


POV- 
 You were watching Me Eat Like a Gorilla 😭 😂


THE CHAOS 😳
I Clearly Remember How God Tested Our Love In The Same Day🌟
(In The Worst Possible Way)
I remember Telling Your Father- " HAA PAPA SHADI KARUNGA" 

Till Now I Haven't Forgotten the Sacrifices You Made For Our relationship 🤌🥹

NAMAN I PROMISE I WILL STAY ON MY DAMN WORDS.. THE WORDS I GAVE TO YOUR FATHER💗
</p>` 
    },
    {
      name: "The Fire 🔥 That Never Burnt Us",
      file: "assets/red.mp3",
      image: "assets/img3.jpg",
      desc: `<p>
" Some Loves Are Calm Like Rivers. Ours Is Lightning- WILD, LOUD, ALIVE 😳🤯" ( BOLD LETTERS)

Sooo Yess Babyyy Girl We Damn Made It Even After Sooo Muchhh Damnnnn Chaos 😎
(Sabse Ladh Liya.. abbb Finally Sabko Pata Chal hi Gaya hai 😁)

Babe Likeeee What The Amazing Journey Was It... Hello Yessss 🔥🔥🔥🔥

NAMAN KITNI MAST JODI HAI YAAR APNI.. EK SAAL NE BC KITNA KUCH HO GAYA YAAR EK SAAL ME 😁😁😁😁😁

SEE BABE NOT GONNA LEAVE YOU 🫣🫣
Maza Aata Teko Cheedne me 😙
Kalesh Kar Kuch Bhii Kar Not Leaving Youuu ❤🗣

I JUST LOVEEE YOUUUU MYYYY SHAWTYYYY 😋
A.K.A BAUNI </p>`
    },
    {
      name: "IN EVERY MULTIVERSE I'd STILL CHOOSE'YOU'",
      file: "assets/love.mp3",
      image: "assets/img4.jpg",
      desc: `<p>There is a Japanese Concept Of red String Of Fate 赤い糸, "akai ito" ❤🧵
 It's a legend that an invisible red string connects people destined to be soulmates, regardless of time, place, or circumstances ❤


Naman We might Be Miles Away ... But actually Connected Through This String which Binds Our Soul ✨

I Have Told You A Million Times that- This Universe Isn't Random.. Everything Is a Part Of Bigger Plan Bacha ❤❤

Universe Doesn't Make coincidences 🫴🌊

There Was Never a "Right Time" 
There was Just 'OUR TIME'. ALWAYSSS 💖✨✨

NAMAN IN THIS ENTIRE COSMIC OCEAN DIDN'T CONNECTED OUR SOULS WITH THIS RED THREAD... RANDOMLY... WE ARE MEANT TO BEND THIS TIME TOWARDS OUR CONVENIENCE 🫂🫂🫂

I LOVE YOU NAMASHVI 💖💖💖
I AM GREATFUL TO KANHA JI THAT I GOT YOU 😁

Just Know That- 
"YOU WILL ALWAYSSS HAVE ME"
ARIGATO 🫂</p>
      <p><b>Forever and again, I'll choose you—every time.</b></p>`
    }
  ];

  let currentTrack = 0;

  function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.file;
    trackName.textContent = track.name;
    albumArt.src = track.image;
    playPauseBtn.textContent = "▶️";
    // Note: desc is trusted HTML—only use if you control the content
    if (trackDesc) {
      trackDesc.innerHTML = track.desc; // Use innerHTML for rich content
    }
    // Reset progress
    progressBar.value = 0;
    currentTimeDisplay.textContent = "0:00";
    durationDisplay.textContent = "0:00";
  }

  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "⏸️";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▶️";
    }
  }

  function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
    audio.play();
    playPauseBtn.textContent = "⏸️";
  }

  function prevTrack() {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
    audio.play();
    playPauseBtn.textContent = "⏸️";
  }

  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  }

  // Update progress
  audio.addEventListener("timeupdate", () => {
    progressBar.max = audio.duration || 0;
    progressBar.value = audio.currentTime || 0;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    durationDisplay.textContent = formatTime(audio.duration);
  });

  // Allow seeking
  progressBar.addEventListener("input", () => {
    audio.currentTime = progressBar.value;
  });

  // Volume control
  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });

  playPauseBtn.addEventListener("click", togglePlayPause);
  nextBtn.addEventListener("click", nextTrack);
  prevBtn.addEventListener("click", prevTrack);
  audio.addEventListener("ended", nextTrack);

  // Load first track
  loadTrack(currentTrack);
});
