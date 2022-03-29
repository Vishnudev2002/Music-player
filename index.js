var songs=[

    {
        id:1,
        imageSrc:"./thumbnails/thumb_-_murder_-_3_-_2013_-_300.jpg",
        audioSrc:"./audio/Teri_Jhuki_Nazar-Murder3_128Kbps.mp3",
        title:"Teri Jhuki Nazar - Murder 3"
    },

    {
        id:2,
        imageSrc:"./thumbnails/128Dheere_Dheere_Se_Meri_Zindagi_Mein_Aana_-_Aashiqui_128_Kbps.jpg",
        audioSrc:"./audio/Dheere_Dheere_Se_Meri_Zindagi_me_Aana-Aashiqui_320_Kbps.mp3",
        title:"Dheere Dheere Se - Aashiqui"
    },

    {
        id:3,
        imageSrc:"./thumbnails/Unstopabble.jpg",
        audioSrc:"./audio/Unstoppable_320(PaglaSongs).mp3",
        title:"Unstopabble - This Is Acting"
    },

    {
        id:4,
        imageSrc:"./thumbnails/bhar_do_jholi.jpg",
        audioSrc:"./audio/Bhar_Do_Jholi_Meri(Adnan_Sami)320Kbps.mp3",
        title:"Bhar Do Jholi - Bajrangi Bhaijaan"
    },

    {
        id:5,
        imageSrc:"./thumbnails/Tere_bin.jpg",
        audioSrc:"./audio/Tere_Bin_-_Bas_Ek_Pal_320_Kbps.mp3",
        title:"Tere Bin - Bas Ek Pal"
    },

    {
        id:6,
        imageSrc:"./thumbnails/Tera_Mera.jpg",
        audioSrc:"./audio/Tera-Mera-Rishta-(pagalworldsongs.co.in).mp3",
        title:"Tera Mera Rishta - Awarapan"
    },

    {
        id:7,
        imageSrc:"./thumbnails/kehndi.jpg",
        audioSrc:"./audio/Kehndi_Hundi_Si.mp3",
        title:"Kehndi Hundi Si - Excuses"
    },

    {
        id:8,
        imageSrc:"./thumbnails/Kar_Har_Maidan_Fateh.jpg",
        audioSrc:"./audio/Kar_Har_Maidaan_Fateh(Sanju)320 Kbps.mp3",
        title:"Kar Har Maidaan Fateh - Sanju"
    },

    {
        id:9,
        imageSrc:"./thumbnails/Bhool_Bhulaiya.jpg",
        audioSrc:"./audio/Labon_Ko(Bhool Bhulaiyaa)-K.K-320Kbps.mp3",
        title:"Labon Ko - Bhool Bhulaiyaa"
    }
]


function playAudio(songid)
{
    var song=songs.find(function(song,index){
        return song.id===songid
    });

    document.getElementById("thumbnail").src=song.imageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player_title").innerText = song.title;
    document.getElementById("audio_player").play();

    
}

