BANRITNINGSVERKTYGET – WEBBPLATS FÖR GITHUB PAGES
==================================================

Innehåll
--------
index.html          Startsidan
kom-igang.html      Guide i fem steg + kortkommandon
exempel.html        Exempel per gren + lista över mallar
hjalp.html          Vanliga frågor
nytt.html           Release notes (1.5 + dina 1.1–1.4) och roadmap
404.html            Sida som visas om en länk är fel
verktyg/index.html  SJÄLVA PROGRAMMET (din senaste version)
assets/             Formgivning (style.css), script och bilder

Publicera på GitHub Pages
-------------------------
1. Gå till ditt repo på GitHub (t.ex. banbyggaren-mallar).
2. Välj "Add file" -> "Upload files" och dra in ALLT i den här mappen
   (alla filer och mapparna "assets" och "verktyg").
   Tips: filen ".nojekyll" är dold i vissa program – den behövs inte, men är bra att ha.
3. Klicka "Commit changes".
4. Gå till Settings -> Pages. Välj Branch: main och mapp: / (root). Klicka Save.
5. Efter ca en minut visas adressen, t.ex. https://asak1973-wq.github.io/banbyggaren-mallar/
   Programmet ligger på .../verktyg/

Dina mallar (manifest.json och .json-filerna) ligger kvar i samma repo och påverkas inte.

Länka från Google Sites
-----------------------
Låt knappen "Testa programmet" på din Google Sites-sida peka på adressen ovan
(kryssa i "Öppna länk i ny flik").

Uppdatera programmet
--------------------
Byt ut verktyg/index.html mot en ny version och gör "Commit changes".

Saker du bör kontrollera/ändra
------------------------------
* "Gratis": sidan säger att programmet är gratis. Ändra i index.html och hjalp.html om det inte stämmer.
* Mobil/surfplatta: texten i hjalp.html är försiktigt formulerad. Justera efter vad du har testat.
* Versionsnummer: nytt.html har "Version 1.5" för de senaste förändringarna. Byt namn vid behov och lägg till datum.
* Delningsbild: i varje HTML-fil pekar og:image på
  https://asak1973-wq.github.io/banbyggaren-mallar/assets/img/og-image.png
  Om sidan hamnar i ett annat repo eller på en egen domän: byt adressen (sök efter "og:image").
* Bilder: illustrationerna i assets/img/ är ritade exempel. Byt gärna ut dem mot egna skärmbilder eller
  exporterade banor (behåll filnamnen, eller ändra i HTML-filerna).
* Film: i index.html och kom-igang.html finns utkommenterade block för en YouTube-film (sök efter "VIDEO").
* Egen adress: vill du ha t.ex. banritning.smedstorpsrs.com kan den som sköter domänen peka den mot GitHub Pages
  (Settings -> Pages -> Custom domain).

Om "offline": programmet hämtar fabric.js, jsPDF, html2canvas och typsnittet från internet.
En nedladdad fil fungerar därför bara när datorn är uppkopplad. Säg till om du vill att biblioteken
bäddas in i filen så att den fungerar helt utan internet.

Sidan använder inga cookies och inga externa typsnitt eller spårning.
