export default {
(19431425,'<ac:layout><ac:layout-section ac:type=\"two_right_sidebar\"><ac:layout-cell><h1>Digitale Musikanalyse mit den XML-Techniken der Music Encoding Initiative (MEI) am Beispiel der Kompositionsstudien Anton Bruckners</h1><p>Das am Institut f&uuml;r kunst- und musikhistorische Forschung der <a href=\"https://www.oeaw.ac.at/ikm/home/\">&Ouml;sterreichischen Akademie der Wissenschaften</a> angesiedelte Projekt &bdquo;Digitale Musikanalyse mit den XML-Techniken der <a href=\"http://music-encoding.org/\"><em>Music Encoding Initiative</em></a> (MEI) am Beispiel der Kompositionsstudien Anton Bruckners&ldquo;, das von <a href=\"https://www.oeaw.ac.at/stipendien-foerderungen/foerderprogramme/godigital/\">Go!Digital</a> von 2017 bis 2019 gef&ouml;rdert wird, verfolgt zwei Ziele. Zun&auml;chst soll Anton Bruckners &bdquo;Kitzler&ldquo;-Studienbuch, das er w&auml;hrend der Zeit seines Unterrichts beim Dirigenten und Violoncellisten Otto Kitzler (1834&ndash;1915) in Linz zwischen 1861 und 1863 anlegte, in zeitgem&auml;&szlig;er Weise digital erschlossen werden. S&auml;mtliche Inhalte werden dazu im XML-basierten Codierungsformat MEI codiert und auf Taktebene mit den Digitalisaten der Handschrift verkn&uuml;pft, um sie anschlie&szlig;end in einer Edirom-basierten, digitalen Musikedition anzeigen zu k&ouml;nnen. Die MEI-Codierungen k&ouml;nnen dann mittels <a href=\"http://www.verovio.org/\"><em>Verovio</em></a> wieder als Notentext angezeigt werden.</p></ac:layout-cell><ac:layout-cell><p class=\"auto-cursor-target\"><br /></p><ac:structured-macro ac:name=\"divbox\" ac:schema-version=\"1\" ac:macro-id=\"797a6671-dc05-4ff0-b3b8-2d457a953eaa\"><ac:parameter ac:name=\"style\">background:#eeeeee; border: 1px solid #aaaaaa;</ac:parameter><ac:rich-text-body><p><strong>Steckbrief:</strong></p><p>Projektleitung: <a href=\"https://www.oeaw.ac.at/ikm/das-institut/mitarbeiterinnen-mitarbeiter/musikwissenschaft/robert-klugseder/\">Robert Klugseder</a><br />Ansprechpartner im ZenMEM: <span class=\"confluence-link\"><ac:link><ri:page ri:content-title=\"Leitung\" /><ac:plain-text-link-body><![CDATA[Daniel Röwenstrunk]]></ac:plain-text-link-body></ac:link></span></p><p>Mitarbeiterin im ZenMEM: <a href=\"http://www.muwi-detmold-paderborn.de/personen/mitarbeiterinnen-und-mitarbeiter/agnes-seipelt-ma/\">Agnes Seipelt</a></p><p>F&ouml;rderer: <a href=\"https://www.oeaw.ac.at/ikm/home/\">&Ouml;sterreichische Akademie der Wissenschaften</a><br />Laufzeit: 2017 bis 2019<br /><br />Links:<a href=\"http://www.bruckner-online.at/\"><br />https://www.oeaw.ac.at/ikm/forschung/digital-musicology/digitale-musikanalyse-mit-mei/</a> und <a href=\"http://www.bruckner-online.at/\">http://www.bruckner-online.at/</a></p></ac:rich-text-body></ac:structured-macro><p class=\"auto-cursor-target\"><br /></p></ac:layout-cell></ac:layout-section><ac:layout-section ac:type=\"two_left_sidebar\"><ac:layout-cell><p style=\"text-align: center;\"><ac:image ac:queryparams=\"effects=border-simple,shadow-kn\" ac:height=\"250\"><ri:attachment ri:filename=\"A-WnMus.Hs.44706-008.jpg\" /></ac:image></p><p style=\"text-align: center;\"><em>Abbildung 1: &quot;Kitzler Studienbuch&quot;, &copy; &Ouml;sterreichische Nationalbibliothek, Mus.Hs. 44706, S. 8</em></p></ac:layout-cell><ac:layout-cell><p>Die Handschrift enth&auml;lt 326 Seiten eigenh&auml;ndige Entw&uuml;rfe von Bruckner mit vielen Eintragungen Kitzlers (siehe Abbildung 1). Am Anfang stehen &Uuml;bungen zu verschiedenen Kadenzausf&uuml;hrungen und zum Periodenbau, danach folgen zwei- und dreiteilige Liedformen, Klavier-Et&uuml;den, Themen mit Variationen, Rondo, Sonatenform und &ndash; neben anderen &Uuml;bungen f&uuml;r diese Besetzung &ndash; das vollst&auml;ndige <em>Streichquartett in c-Moll</em>. Fortgesetzt wurden die Studien mit Instrumentations&uuml;bungen und vier vollst&auml;ndigen Orchesterst&uuml;cken (<em>Marsch in d-Moll</em>, <em>Drei Orchesterst&uuml;cke</em>). Der Band schlie&szlig;t mit Skizzen zur <em>Ouvert&uuml;re in g-Moll und zur Symphonie in f-Moll</em> (<em>Studiensymphonie</em>).</p><p>Im ersten Projektjahr wird die Handschrift in MEI tief erschlossen, das hei&szlig;t, dass neben der Codierung der Musiknotation auch alle vorgenommenen &Auml;nderungen wie Streichungen, Einf&uuml;gungen (Ersetzungen), unsichere oder mehrere Lesarten und schlie&szlig;lich auch textliche Anmerkungen in die Codierung aufgenommen werden. Hierf&uuml;r wird die Handschrift zun&auml;chst mit einem Notensatzprogramm transkribiert und &uuml;ber ein XSLT-Plugin nach MEI konvertiert, daraufhin mit einem weiteren XSLT von unn&ouml;tigen Midi- und Layoutinformationen gereinigt und schlie&szlig;lich h&auml;ndisch mit MEI-Elementen wie &lt;add/&gt; (Hinzuf&uuml;gung) oder &lt;del/&gt; (Tilgung) angereichert (siehe Abbildungen 2&ndash;4).</p></ac:layout-cell></ac:layout-section><ac:layout-section ac:type=\"two_right_sidebar\"><ac:layout-cell><p>Kern des Projekts ist die f&uuml;r das zweite Projektjahr angelegte harmonische Analyse. Da sich MEI inzwischen als Standard f&uuml;r digitale Musikeditionen durchgesetzt hat und damit ein wachsender Fundus an sehr tief erschlossenen Daten in diesem Format zur Verf&uuml;gung steht, eignet es sich in besonderer Weise als Ausgangspunkt f&uuml;r eine analytische Auswertung von Musikcodierungen. Gleichzeitig bietet MEI selbst umfangreiche M&ouml;glichkeiten, die Ergebnisse einer musikalischen Analyse in die Codierungen selbst zu &uuml;bernehmen und diese so anzureichern. Dieser Teil des Projekts hat daher zum Ziel, anhand der Brucknerschen Kompositionsstudien ein Verfahren f&uuml;r eine automatisierte, harmonische Analyse zu entwickeln, deren Ergebnisse einerseits in die genutzten MEI-Codierungen r&uuml;ck&uuml;berf&uuml;hrt werden k&ouml;nnen, andererseits aber durch Einblendung entsprechender Symbole, Einf&auml;rbung und &auml;hnliche Darstellungsformen intuitiv nachvollziehbar im Notentext visualisiert werden sollen. Hierf&uuml;r bietet sich das &bdquo;Kitzler&ldquo;-Studienbuch als ideales Testfeld, da es zahlreiche kleine Studien enth&auml;lt, die weitgehend ohne gr&ouml;&szlig;eren musikalischen Rahmen eine Vielzahl an harmonischen Entwicklungen abdecken und so eine gro&szlig;e inhaltliche Bandbreite zur Verf&uuml;gung stellen kann.</p><p><br /></p><p><br /></p></ac:layout-cell><ac:layout-cell><p><ac:image ac:align=\"center\" ac:queryparams=\"effects=border-simple,shadow-kn\" ac:thumbnail=\"true\" ac:height=\"250\"><ri:attachment ri:filename=\"008_ausschnitt.jpg\" /></ac:image></p><p style=\"text-align: center;\"><em>Abbildung 2: &quot;Kitzler Studienbuch&quot;, &copy; &Ouml;sterreichische Nationalbibliothek, Mus.Hs. 44706, S. 8, T. 24</em></p></ac:layout-cell></ac:layout-section><ac:layout-section ac:type=\"two_left_sidebar\"><ac:layout-cell><p style=\"text-align: center;\"><ac:image ac:queryparams=\"effects=border-simple,blur-border\" ac:height=\"250\"><ri:attachment ri:filename=\"MEI1.png\" /></ac:image></p><p style=\"text-align: center;\"><em>Abbildung 3: MEI-Codierung von Takt 24, erstes System</em></p><p style=\"text-align: center;\"><ac:image ac:queryparams=\"effects=border-simple,blur-border\" ac:thumbnail=\"true\" ac:height=\"250\"><ri:attachment ri:filename=\"MEI2.png\" /></ac:image></p><p style=\"text-align: center;\"><em>Abbildung 4: MEI-Codierung von T. 24, zweites System</em></p></ac:layout-cell><ac:layout-cell><p>Daf&uuml;r werden die MEI-Daten in Zwischenformate &uuml;berf&uuml;hrt, die nur die f&uuml;r die harmonische Analyse notwendigen Elemente in einfacher zu prozessierenden Strukturen enth&auml;lt. In erster Linie geht es darum, die zu jeder Z&auml;hlzeit gleichzeitig erklingenden T&ouml;ne zu bestimmen und mit einer XSLT Akkordstrukturen zu erkennen, in die Codierung r&uuml;ckzu&uuml;berf&uuml;hren und schlie&szlig;lich farblich markiert oder mit einem entsprechenden Symbol im edierten Notentext anzeigen zu k&ouml;nnen.</p><p>PD Dr. Robert Klugseder ist als Projektleiter neben dem Projektmanagement vor allem f&uuml;r die Koordination und Kommunikation der Kooperationspartner und die fachliche Betreuung der Mitarbeiter zust&auml;ndig. <a href=\"https://www.oeaw.ac.at/ikm/das-institut/mitarbeiterinnen-mitarbeiter/musikwissenschaft/paul-gulewycz/\">Paul Gulewycz B.A.</a> (&Ouml;AW) und <a href=\"http://www.uni-paderborn.de/person/24239/\">Agnes Seipelt M.A.</a> (ZenMEM) sind als musikwissenschaftliche Mitarbeiter f&uuml;r die Erstellung und Anreicherung der MEI- und Edirom-Daten zust&auml;ndig (1. Jahr) sowie Agnes Seipelt im zweiten Jahr vor allem f&uuml;r die Konzeption, Kontrolle und Anwendung der Harmonischen Analyse. In Verbindung damit erstellt <a href=\"https://www.oeaw.ac.at/acdh/team/current-team/marek-cupak/\">Marek Cup&aacute;k</a> vom Austrian Center for Digital Humanities (ACDH) der &Ouml;AW die XSL-Transformationen und Analyseapplikationen f&uuml;r die harmonische Analyse sowie die Verovio- und Ediromapplikationen auf der Projektwebseite. Die Kooperation der &Ouml;AW mit dem ZenMEM erm&ouml;glicht dar&uuml;ber hinaus eine fachliche Beratung durch Dr. Johannes Kepper im Science Board des Projekts, der seit 2014 Mitarbeiter des von der Mainzer Akademie der Wissenschaften gef&ouml;rderten Projekts Beethovens Werkstatt ist und den Administrative Chair des Boards der MEI innehat.</p><p>Website: <a href=\"https://www.oeaw.ac.at/ikm/forschung/digital-musicology/digitale-musikanalyse-mit-mei/\">https://www.oeaw.ac.at/ikm/forschung/digital-musicology/digitale-musikanalyse-mit-mei/</a><br /><br /></p></ac:layout-cell></ac:layout-section></ac:layout>',19333121,2),
};