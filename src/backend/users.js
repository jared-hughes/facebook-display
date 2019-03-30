const users = {
  britain: {
    name: "Great Britain",
    photo: "images/profiles/britain.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fa%2Fae%2FFlag_of_the_United_Kingdom.svg%2F1280px-Flag_of_the_United_Kingdom.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FUnion_Jack&docid=IeEe5bBvPWSzDM&tbnid=loDVUIgaAvTIPM%3A&vet=1&w=1280&h=640&source=sh%2Fx%2Fim",
    pronoun: "it",
    possessivePronoun: "its",
  },
  churchill: {
    name: "Winston Churchill",
    photo: "images/profiles/churchill.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F97%2FChurchill_HU_90973.jpg%2F220px-Churchill_HU_90973.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FChurchill_Scholarship&docid=atUo6kmSoceraM&tbnid=vkANbCY7jZcZgM%3A&vet=1&w=220&h=308&source=sh%2Fx%2Fim",
  },
  usa: {
    name: "United States of America",
    photo: "images/profiles/usa.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fih0.redbubble.net%2Fimage.234735403.9065%2Fraf%2C750x1000%2C075%2Ct%2Cfafafa%3Aca443f4786.jpg&imgrefurl=https%3A%2F%2Fwww.redbubble.com%2Fpeople%2Ftomsredbubble%2Fworks%2F20799065-world-war-ii-flag-american-stars-and-stripes-us-flag-48-stars-used-47-years-july-4-1912-to-july-3-1959%3Fp%3Dt-shirt&docid=Xss3MmgI8iry2M&tbnid=zr0QNTH6ZHmKCM%3A&vet=1&w=750&h=1000&source=sh%2Fx%2Fim",
  },
  fdr: {
    name: "Franklin Delanor Roosevelt",
    photo: "images/profiles/fdr.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb8%2FFDR_in_1933.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AFDR_in_1933.jpg&docid=wg_clgQJ31nEyM&tbnid=ZMoh1nBFU8NnmM%3A&vet=1&w=2488&h=2928&source=sh%2Fx%2Fim",
  },
  ussr: {
    name: "Union of Soviet Socialist Republics",
    photo: "images/profiles/ussr.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F36%2F22536-004-9855C103.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fflag-of-Union-of-Soviet-Socialist-Republics&docid=gySaK0Lrn2vFjM&tbnid=ZS9cHtHXEzb60M%3A&vet=1&w=600&h=300&source=sh%2Fx%2Fim"
  },
  stalin: {
    name: "Joseph Stalin",
    photo: "images/profiles/stalin.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.tvtropes.org%2Fpmwiki%2Fpub%2Fimages%2Fstalin.jpg&imgrefurl=https%3A%2F%2Ftvtropes.org%2Fpmwiki%2Fpmwiki.php%2FUsefulNotes%2FJosephStalin&docid=LKiiGU4T2bAYEM&tbnid=udTW2VQMHOgm6M%3A&vet=1&w=350&h=520&source=sh%2Fx%2Fim",
  },
  france: {
    name: "Free France",
    photo: "images/profiles/france.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fc9%2FFlag_of_Free_France_%25281940-1944%2529.svg%2F1280px-Flag_of_Free_France_%25281940-1944%2529.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AFlag_of_Free_France_(1940-1944).svg&docid=kwb6OaIvleVf9M&tbnid=1Egp0B_wJ7DE2M%3A&vet=1&w=1280&h=853&source=sh%2Fx%2Fim",
  },
  gaulle: {
    name: "Charles de Gaulle",
    photo: "images/profiles/gaulle.png",
    photoSource: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fimg.timeinc.net%2Ftime%2Fphotoessays%2F2011%2Ficonic_leaders%2Ficon00000000009.jpg&imgrefurl=http%3A%2F%2Fcontent.time.com%2Ftime%2Fspecials%2Fpackages%2Farticle%2F0%2C28804%2C2046285_2045996_2046114%2C00.html&docid=4Sk13su69QvrRM&tbnid=7w0urN8QEqgNGM%3A&vet=1&w=307&h=409&source=sh%2Fx%2Fim",
  },
  poland: {
    name: "Poland",
    photo: "images/profiles/poland.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F52%2F3552-004-D849A1D3.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fflag-of-Poland&docid=E-NRs641gv5vmM&tbnid=elhpO06MBddZOM%3A&vet=1&w=404&h=250&source=sh%2Fx%2Fim",
  },
  sikorski: {
    name: "Wladyslaw Sikorski",
    photo: "images/profiles/sikorski.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.inspiringquotes.us%2Fdata%2Fimage%2F2017%2F13%2Fx%2F5028-wladyslaw-sikorski.jpg&imgrefurl=https%3A%2F%2Fwww.inspiringquotes.us%2Fauthor%2F5028-wladyslaw-sikorski&docid=Q8EBhgopau0jgM&tbnid=xcIHkBl_MSbrCM%3A&vet=1&w=240&h=240&itg=1&source=sh%2Fx%2Fim",
  },
  germany: {
    name: "Nazi Germany",
    photo: "images/profiles/germany.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fqph.fs.quoracdn.net%2Fmain-qimg-2c78e41a1738217b07f75f2b33905714.webp&imgrefurl=https%3A%2F%2Fwww.quora.com%2FWhat-was-the-official-flag-of-Germany-during-WW2&docid=J3mM-MOZurvToM&tbnid=OgDBTCOfWYGAUM%3A&vet=1&w=602&h=361&source=sh%2Fx%2Fim",
  },
  hitler: {
    name: "Adolf Hitler",
    photo: "images/profiles/hitler.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.historyonthenet.com%2Fwp-content%2Fuploads%2F2014%2F11%2FPROD-Adolf-Hitler-whrend-einer-Rede.jpg&imgrefurl=https%3A%2F%2Fwww.historyonthenet.com%2Fadolph-hitler&docid=Vs4kWWpBkU6ImM&tbnid=S2zdSEyH88AoYM%3A&vet=1&w=615&h=409&source=sh%2Fx%2Fim",
  },
  italy: {
    name: "Fascist Italy",
    photo: "images/profiles/italy.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb2%2FFlag_of_Italy_%25281860%2529.svg%2F1200px-Flag_of_Italy_%25281860%2529.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRoyal_Italian_Army_during_World_War_II&docid=4X6d1an0l_VDqM&tbnid=gV_W6y4GxUe99M%3A&vet=1&w=1200&h=1200&source=sh%2Fx%2Fim",
  },
  mussolini: {
    name: "Benito Mussolini",
    photo: "images/profiles/mussolini.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F8a%2FMussolini_mezzobusto.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBenito_Mussolini&docid=Wpr5VBnhjJY3uM&tbnid=wdtDddjAenghFM%3A&vet=1&w=339&h=506&source=sh%2Fx%2Fim",
  },
  japan: {
    name: "Imperial Japan",
    photo: "images/profiles/japan.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fflagpolefarm.com%2Fwp-content%2Fuploads%2F2018%2F01%2Fjapan-flag-2.jpg&imgrefurl=https%3A%2F%2Fflagpolefarm.com%2Fproduct%2Fjapan%2F&docid=ba9_MJCFP8281M&tbnid=zgW4xYoodGqJgM%3A&vet=1&w=1200&h=800&source=sh%2Fx%2Fim",
  },
  hediki: {
    name: "Tojo Hediki",
    photo: "images/profiles/hediki.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.historytoday.com%2Fsites%2Fdefault%2Ffiles%2Farticles%2FHideki_Tojo.jpg&imgrefurl=https%3A%2F%2Fwww.historytoday.com%2Farchive%2Ftojo-hideki-executed&docid=vhCMR22KANReCM&tbnid=YsbE8gTVXfj-GM%3A&vet=1&w=480&h=613&source=sh%2Fx%2Fim",
  },
  chinComm: {
    name: "Chinese Communists",
    photo: "images/profiles/chinComm.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F6d%2FFlag_of_the_Chinese_Communist_Party.svg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCommunist_Party_of_China&docid=iGPhEGpoE4oRkM&tbnid=9db2TONA5bUEbM%3A&vet=1&w=3600&h=2400&source=sh%2Fx%2Fim",
  },
  mao: {
    name: "Mao Zedong",
    photo: "images/profiles/mao.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fde%2FMao_Zedong_1963_%2528cropped%2529.jpg%2F220px-Mao_Zedong_1963_%2528cropped%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMao_Zedong&docid=QYmLTj-62v8ugM&tbnid=OK4ZecM_4U8CpM%3A&vet=1&w=220&h=291&source=sh%2Fx%2Fim",
  },
  chinNat: {
    name: "Chinese Nationalists",
    photo: "images/profiles/chinNat.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F7%2F72%2FFlag_of_the_Republic_of_China.svg%2F2000px-Flag_of_the_Republic_of_China.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_the_Republic_of_China&docid=xetq0r5-ZK906M&tbnid=xA4B0bEO-JaNRM%3A&vet=1&w=2000&h=1333&source=sh%2Fx%2Fim",
  },
  jieshi: {
    name: "Jiang Jieshi",
    photo: "images/profiles/jieshi.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Falphahistory.com%2Fchineserevolution%2Fwp-content%2Fuploads%2F2013%2F05%2Fchiangkaishek1.jpg&imgrefurl=https%3A%2F%2Falphahistory.com%2Fchineserevolution%2Fgeneralissimo-jiang-jieshi%2F&docid=iuMs6bRLccxijM&tbnid=8KpFp53M4HLJsM%3A&vet=1&w=399&h=300&source=sh%2Fx%2Fim",
  },
  phillipines: {
    name: "The Phillippines",
    photo: "images/profiles/phil.png",
    photoSource: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fmalacanang.gov.ph%2Fwp-content%2Fuploads%2F1919-1936.jpg&imgrefurl=http%3A%2F%2Fmalacanang.gov.ph%2Fhistory-of-the-philippine-flag%2F&docid=LXXexmS0NKOipM&tbnid=vJckl_3Sn9z7DM%3A&vet=1&w=674&h=300&source=sh%2Fx%2Fim",
  },
  santos: {
    name: "Alfredo Santos",
    photo: "images/profiles/santos.png",
    photoSource: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F4%2F44%2FAlfredosantos.jpg%2F220px-Alfredosantos.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAlfredo_M._Santos&docid=q3PO7Ojmsu4-lM&tbnid=ORFJaXZ8GD4fOM%3A&vet=1&w=220&h=255&source=sh%2Fx%2Fim",
  },
  theAllies: {
    name: "The Allies",
  },
  theAxis: {
    name: "The Rome-Berlin-Tokyo Axis",
  },
}

export default users;