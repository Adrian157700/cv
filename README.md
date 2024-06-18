Projekt zakłada stworzenie prostego, responsywnego CV w formie strony internetowej. Strona zawiera podstawowe informacje o użytkowniku, takie jak dane osobowe, wykształcenie, doświadczenie zawodowe, znajomość języków, umiejętności, szkolenia oraz zainteresowania. Projekt ma na celu prezentację tych informacji w czytelny i estetyczny sposób.

Hasło do pokazania danych:1234

Zawartość strony

  HTML: Strona składa się z następujących sekcji:
  
    Nagłówek (header): Zawiera zdjęcie użytkownika, przycisk do wyświetlenia ukrytych danych oraz sekcję z rozmytymi danymi osobowymi.
  
    Sekcje główne (main): 
    Wykształcenie
    Doświadczenie zawodowe
    Znajomość języków
    Umiejętności
    Szkolenia, kursy, certyfikaty
    Zainteresowania
  
    Pasek boczny (aside): Dwa puste paski boczne po lewej i prawej stronie dla lepszego rozłożenia treści.


  CSS: Stylizacja strony jest realizowana za pomocą arkusza stylów style.css. Główne cechy stylizacji:
  
    Responsywność: Strona jest zaprojektowana tak, aby dobrze wyglądała na różnych urządzeniach.
    Animacje i efekty: Efekty takie jak powiększanie zdjęć przy najechaniu oraz zmiana kolorów nagłówków sekcji.
    Modalne okno: Stylizacja okna modalnego do wprowadzania hasła.


  JavaScript i jQuery: Strona korzysta z JavaScript i jQuery do realizacji dynamicznych funkcji:
  
  jQuery:

    1.	Animacja Fade In: cały kontener jest stopniowo wyświetlany po załadowaniu strony.
    2.	Kliknięcie przycisku "Pokaż dane": wyświetlenie okna modalnego po kliknięciu przycisku.
    3.	Zamknięcie okna modalnego: zamknięcie okna modalnego po kliknięciu przycisku zamknięcia.
    4.	Weryfikacja hasła i odblokowanie danych: sprawdzenie wprowadzonego hasła i usunięcie rozmycia danych oraz zamknięcie okna modalnego.
    5.	Zamknięcie okna modalnego po kliknięciu poza jego obszarem: zamknięcie okna modalnego, gdy użytkownik kliknie poza jego obszarem.
    
    
    Czysty JavaScript:
    
    1.	Pobieranie elementów daty i godziny za pomocą selektorów.
    2.	Wartości godzin, minut i sekund.
    3.	Ustawianie aktualnego czasu i daty, aktualizacja wartości elementów daty i godziny.


  Technologie użyte w projekcie

    HTML5
    Struktura strony jest zbudowana przy użyciu HTML5.
  
    CSS3
    Stylizacja strony jest zrealizowana przy użyciu CSS3.
  
    JavaScript
    Wykorzystanie czystego JavaScriptu do obsługi aktualizacji daty i godziny oraz formatowania wartości czasu.
  
    jQuery
    Użycie jQuery do obsługi zdarzeń, animacji oraz manipulacji DOM, co upraszcza i przyspiesza rozwój interaktywnych elementów na stronie.
    
    
  Pliki w projekcie:

    index.html: Plik HTML zawierający strukturę strony.
    style.css: Plik CSS zawierający stylizację strony.
    script.js: Plik JavaScript zawierający logikę aktualizacji czasu, obsługę modalnego okna oraz animacje.
 







