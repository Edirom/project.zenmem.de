<template>
    <div class="imprint">

        <div class="container grid-lg mainContent">
            <div class="columns">
                <div class="column col-12 margin-bottom">
                    <h1>{{ $t('imprint') }}</h1>
                </div>
                <div class="column col-6 col-md-12">
                    <h2>{{ $t('resp_content') }}</h2>
                    <h4>Prof. Dr. Joachim Veit</h4><p>Universität Paderborn<br/>Musikwissenschaftliches Seminar Detmold/Paderborn</p>
                    <p v-html="$t('coordinator_contact')"></p>
                </div>
                <div class="column col-6 col-md-12">
                    <h4 style="margin-top: 2.7rem;">Dipl. Wirt.-Inf. Daniel Röwenstrunk</h4><p>Universität Paderborn<br/>Musikwissenschaftliches Seminar Detmold/Paderborn</p>
                    <p v-html="$t('project_manager_contact')"></p>
                </div>
                <div class="column col-12 margin-top">
                    <h2>{{ $t('resp_technical') }}</h2>
                    <p>{{ $t('ZenMEM') }}</p>
                    <p>Hornsche Strasse 39<br/>32756 Detmold</p>
                </div>
                <div class="column col-12 margin-top">
                    <h2>{{ $t('privacy') }}</h2>
                    <h3>§1 Angaben zu den verarbeiteten personenbezogenen Daten</h3>
                    <p>
                        <strong>Speicherung von Browserdaten</strong><br/>
                        Beim Aufruf einer Webseite übermittelt Ihr Browser an den Webserver grundsätzlich Daten Ihres abrufenden Geräts, bspw. die IP-Adresse, an die die Webseite zurückgeschickt werden soll.<br/>
                        Folgende Daten werden von der Universität Paderborn zum Zweck der Identifikation und Nachverfolgung unzulässiger Zugriffsversuche und Zugriffe auf das Webangebot in gesicherten Logfiles gespeichert:<br/>
                    <ul>
                        <li>abgerufene Webseite/-adresse</li>
                        <li>Datum und Uhrzeit des Zugriffs</li>
                        <li>IP-Adresse der Nutzerin / des Nutzers</li>
                        <li>HTTP-Statuscode</li>
                        <li>abgerufene Datenmenge</li>
                        <li>Browsertyp und -version, verwendetes Betriebssystem der Nutzerin / des Nutzers</li>
                    </ul>
                    Ein Abgleich mit anderen Datenbeständen oder eine Weitergabe an Dritte erfolgen nicht. Die Daten werden für eine Dauer von längstens 7 Tagen gespeichert und dann gelöscht. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.
                    </p>
                    <!--<p>
                        <strong>Google Web Fonts</strong><br/>
                        Diese Webseite nutzt Google Web Fonts zur Darstellung von Schriftarten. Die Fonts werden von Servern von Google geladen und in Ihrem Browser zwischengespeichert. Hierdurch kann Google erkennen, dass Sie diese Webseite aufgerufen haben.<br/>
                        Die einheitliche und ästhetisch anspruchsvolle Darstellung der Schrift auf dieser Seite stellt ein berechtigtes Interesse im Sinne des Artikels 6, Absatz 1, Ziffer f der DSGVO dar.<br/>
                        Weitere Informationen zu Google Web Fonts finden Sie unter https://developers.google.com/fonts/faq und in der Datenschutzerklärung von Google: https://www.google.com/policies/privacy/.
                    </p>-->
                    <p>
                        <strong>Cookies</strong><br/>
                        Cookies sind Dateien, die von dem Anbieter einer Webseite im Verzeichnis des Browserprogramms auf dem Rechner der Nutzerin / des Nutzers abgelegt werden können. Diese Dateien enthalten Textinformationen und können bei einem erneuten Seitenaufruf vom Anbieter wieder gelesen werden. Der Anbieter kann diese Cookies bspw. dazu nutzen, Seiten immer in der von der Nutzerin / dem Nutzer gewählten Sprache auszuliefern.<br/>
                        Cookies können mit einer Verfallszeit versehen werden. So werden bspw. Cookies, die nur in einer Sitzung verwendet werden oder deren Verfallszeit abgelaufen ist, beim Beenden des Browsers automatisch gelöscht. Das Speichern von Cookies können Sie in den Einstellungen des Browsers ausschalten, allerdings lassen sich die über die Cookies gesteuerten Funktionen dann nicht mehr nutzen. Sie können die im Browser gespeicherten Cookies einsehen und jederzeit auch einzelne Cookies löschen.<br/>
                        Diese Webseite verwendet Cookies für folgende Zwecke:<br/>
                    <ul>
                        <li>Speicherung der durch den Nutzer gesetzten Sprache</li>
                    </ul>
                    </p><br/>
                    <h3>§2 Rechtsgrundlagen</h3>
                    <p>
                        Das Musikwissenschaftliche Seminar Detmold/Paderborn erhebt und verarbeitet die oben genannten für den technischen Betrieb erforderlichen Daten, Logfiles zur Wahrung der technischen Sicherheit der Systeme zur Wahrung berechtigter Interessen des Musikwissenschaftliche Seminars Detmold/Paderborn gemäß Art. 6 Abs. 1 lit. f. EU-DSGVO. Die Daten sind für die Auslieferung von Webseiten, für den sicheren Betrieb der Webserver sowie die Verbesserung des Webangebots erforderlich und werden nur für die jeweils genannten Zwecke genutzt.
                    </p><br/>
                    <h3>§3 Datenübermittlungen</h3>
                    <p>
                        Personenbezogene Daten, die im Rahmen der Nutzung dieser Webseite verarbeitet werden, übermitteln wir grundsätzlich nicht an Dritte. In Einzelfällen kann dies auf Grundlage einer gesetzlichen Erlaubnis erfolgen, zum Beispiel eine Übermittlung an Strafverfolgungsbehörden zur Aufklärung von Straftaten im Rahmen der Regelungen der Strafprozessordnung (StPO) oder zwecks Geltendmachung von Schadensersatzansprüchen bei Urheberrechtsverletzungen. Sofern technische Dienstleister Zugang zu personenbezogenen Daten erhalten, geschieht dies auf Grundlage eines Vertrags gemäß Art. 28 DSGVO.<br/>
                        Es werden grundsätzlich keine personenbezogenen Daten in Länder außerhalb des europäischen Wirtschaftsraums und assoziierter Länder übermittelt (kein „Drittlandtransfer“). Sofern dies erforderlich sein sollte, informieren wir Sie gesondert.
                    </p><br/>
                    <h3>§4 Kontaktdaten</h3>
                    <p>
                        Technisch verantwortlich für diese Webseite ist das Musikwissenschaftliche Seminar Detmold/Paderborn, eine geimeinsame wissenschaftliche Einrchtung der Universität Paderborn und der Hochschule für Musik Demtold. Vertreten wird das Musikwissenschaftliche Seminar Detmold/Paderborn durch die jeweilige geschäftsführende Leitung.<br/>
                    </p>
                    <p>
                        <strong>Kontaktdaten des Verantwortlichen</strong><br/>
                        Musikwissenschaftliches Seminar Detmold/Paderborn<br/>
                        Hornsche Straße 39<br/>
                        32756 Detmold<br/>
                        Tel.: 05231 / 975 - 667<br/>
                        http://www.muwi-detmold-paderborn.de<br/>
                    </p>
                    <p>
                        <strong>Kontaktdaten des Datenschutzbeauftragten</strong><br/>
                        Den behördlichen Datenschutzbeauftragten der Universität Paderborn – als Trägerin des Musikwissenschaftlichen Seminars – erreichen Sie wie folgt:<br/>
                        Warburger Straße 100<br/>
                        33098 Paderborn<br/>
                        E-Mail: datenschutz@uni-paderborn.de<br/>
                        Tel.: 05251 / 60 - 2400<br/>
                        http://www.uni-paderborn.de/datenschutz/<br/>
                    </p><br/>
                    <h3>§5 Ihre Rechte als Betroffene/r</h3>
                    <p>
                        Sie können als betroffene Person jederzeit die Ihnen durch die EU-DSGVO gewährten Rechte geltend machen, soweit diese für die Verarbeitung zutreffen:<br/>
                    <ul>
                        <li>das Recht auf Auskunft, ob und welche Daten von Ihnen verarbeitet werden (Art. 15 DSGVO);</li>
                        <li>das Recht, die Berichtigung oder Vervollständigung der Sie betreffenden Daten zu verlangen (Art. 16 DSGVO);</li>
                        <li>das Recht auf Löschung der Sie betreffenden Daten nach Maßgabe des Art. 17 DSGVO</li>
                        <li>das Recht, nach Maßgabe des Art. 18 DSGVO eine Einschränkung der Verarbeitung der Daten zu verlangen;</li>
                        <li>das Recht auf Widerspruch gegen eine künftige Verarbeitung der Sie betreffenden Daten nach Maßgabe des Art. 21 DSGVO.</li>
                    </ul>
                    </p>
                    <p>
                        Die Erfassung der Daten zur Bereitstellung des Webangebots und die Speicherung der Daten in Logfiles ist für den Betrieb der Webseiten zwingend erforderlich. Es besteht folglich seitens der Nutzerin / des Nutzers keine Widerspruchsmöglichkeit. Obwohl IP-Adressen als personenbezogene Daten gelten, so werden diese vom Musikwissenschaftlichen Seminar Detmold/Paderborn keinen Personen zugeordnet, können also bei Auskunftsanfragen von Nutzerinnen / Nutzern nicht zugeordnet und damit nicht beauskunftet werden.
                    </p>
                    <p>
                        Sie haben über die genannten Rechte hinaus das Recht, eine Beschwerde bei der datenschutzrechtlichen Aufsichtsbehörde einzureichen (Art. 77 DSGVO), zum Beispiel bei der für das Musikwissenschaftliche Seminar Detmold/Paderborn zuständigen
                    </p>
                    <p>
                        Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen<br/>
                        Kavalleriestr. 2-4<br/>
                        40213 Düsseldorf<br/>
                        Telefon: 0211/38424-0<br/>
                        E-Mail: poststelle@ldi.nrw.de
                    </p>
                    <br/>
                    <h3>§6 Gültigkeit dieser Datenschutzerklärung</h3>
                    <p>
                        Wir behalten uns das Recht vor, diese Datenschutzerklärungen abzuändern, um sie gegebenenfalls an Änderungen relevanter Gesetzte bzw. Vorschriften anzupassen oder Ihren Bedürfnissen besser gerecht zu werden. Bitte beachten Sie daher die aktuelle Versionsnummer der Datenschutzerklärung.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "cooperation"
    }
</script>

<style scoped>
    .imprint .mainContent {
        margin-top: 5rem;
    }

    .margin-bottom {
        margin-bottom: 3rem;
    }

    .margin-top {
        margin-top: 3rem;
    }
</style>