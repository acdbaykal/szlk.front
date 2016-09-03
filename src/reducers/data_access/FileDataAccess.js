import {getMessages as getMessagesFromFile,
  supportedLanguages as supported_languages} from 'szlk.messages';

/*eslint-disable */
const translations = [
  {"origin":{"main":"abbauen"},"type":"v","translation":"tasfiye etmek, azaltmak, sökmek"},
  {"origin":{"main":"abbauen des Gleises"},"type":"v","translation":"hattın sökülmesi"},
  {"origin":{"main":"abbeizen"},"type":"v","translation":"dekapaj, asitle temizlemek, örtü alım"},
  {"origin":{"main":"Abbeizmittel"},"type":"s","translation":"dekapaj maddesi, asitle temizleme malzemesi"},
  {"origin":{"main":"Abbiegestellung"},"type":"e","translation":"dönme, hareket yönünü değiştirme pozisyonu"},
  {"origin":{"main":"Abblätterung"},"type":"e","translation":"yapraklanma, pullanma (tekerleklerde)"},
  {"origin":{"main":"abblenden"},"type":"v","translation":"farı yakına ayarlamak"},
  {"origin":{"main":"Abblendung der Lichter"},"type":"e","translation":"aydınlatmanın kapatılması veya azaltılması, ışıkları köreltme, uzun farları kısaya alma"},
  {"origin":{"main":"Abblendvorrichtung"},"type":"e","translation":"aydınlatmayı azaltma veya kapatma düzeneği, ışıkları azaltma, uzun farları kısaya çevirme düzeneği"},
  {"origin":{"main":"abbrechen"},"type":"v","translation":"bir işlemi durdurmak, ara vermek veya bağlantıyı kesmek"},
  {"origin":{"main":"abbrennen"},"type":"v","translation":"yakarak temizlemek"},
  {"origin":{"main":"abbrenngeschweißter Stoß"},"type":"r","translation":"yakma alın kaynaklı conta"},
  {"origin":{"main":"Abbrennstumpfschweißung"},"type":"e","translation":"yakma alın kaynak"},
  {"origin":{"main":"Abbruch der Freileitung"},"type":"r","translation":"katener hattın sökülmesi, katener hatta kesiklik"},
  {"origin":{"main":"Abdampf"},"type":"r","translation":"buhar çıkışı, egzoz buhar çıkışı, atık buhar"},
  {"origin":{"main":"Abdampfinjektor"},"type":"r","translation":"egzoz buharı enjektörü, püskürtücüsü"},
  {"origin":{"main":"Abdampfstrahlpumpe"},"type":"e","translation":"egzoz buharı enjektörü, püskürtücüsü"},
  {"origin":{"main":"Abdechseln"},"type":"s","translation":"ahşap travers üzerindeki delikleri, çatlakları temizleme, düzeltme"},
  {"origin":{"main":"Abdeckhaube"},"type":"e","translation":"makine örtme kaportası; kablo ucu kapatma kutusu"},
  {"origin":{"main":"Abdeckplatte"},"type":"e","translation":"yassı döşeme taşı, kapama plakası"},
  {"origin":{"main":"Abdeckung"},"type":"e","translation":"kapak, örtü, harpuşta"},
  {"origin":{"main":"Abdichten des Planums"},"type":"s","translation":"platformun sağlamlaştırılması, sıkıştırılması"},
  {"origin":{"main":"Abdichtung"},"type":"e","translation":"contalama, kalafatlama"},
  {"origin":{"main":"abdrehen (Rad, Radreifen)"},"type":"v","translation":"tornalamak, tornadan geçirmek (tekerlek tabanı, tekerlek)"},
  {"origin":{"main":"Abdrückgeschwindigkeit"},"type":"e","translation":"vagon atma hızı, manevra hızı"},
  {"origin":{"main":"Abdrücklokomotive"},"type":"e","translation":"manevra lokomotifi"},
  {"origin":{"main":"Abdrücksignal"},"type":"s","translation":"manevra sinyali, atma sinyali"},
  {"origin":{"main":"Abfahrauftrag"},"type":"r","translation":"hareket talimatı, trenin trafikte durmasından sonra verilen hareket talimatı"},
  {"origin":{"main":"abfahrbereit"},"type":"aj","translation":"harekete hazır olma"},
  {"origin":{"main":"Abfahrlichtsignal"},"type":"s","translation":"ışıklı hareket sinyali"},
  {"origin":{"main":"Abfahrsignal"},"type":"s","translation":"hareket sinyali"},
  {"origin":{"main":"Abfahrt"},"type":"e","translation":"hareket (aracın, trenin hareketi)"},
  {"origin":{"main":"programmgesteuerte Abfahrt"},"type":"e","translation":"(metrolarda) programla yönlendirilen hareket"},
  {"origin":{"main":"Abfahrtsbahnsteig"},"type":"r","translation":"hareket peronu"},
  {"origin":{"main":"Abfahrtsgleis"},"type":"s","translation":"hareket hattı"},
  {"origin":{"main":"Abfahrtstafel"},"type":"e","translation":"kalkış tabelası"},
  {"origin":{"main":"Abfahrtszeit"},"type":"e","translation":"hareket saati"},
  {"origin":{"main":"Abfahrung"},"type":"e","translation":"(seyir dolayısıyla) aşınma"},
  {"origin":{"main":"mechanischer Abfall des Relaisankers"},"type":"r","translation":"röle bobininin mekanik düşüşü"},
  {"origin":{"main":"Abfall (Relais)"},"type":"r","translation":"düşme (röle)"},
  {"origin":{"main":"Abfallschotter"},"type":"r","translation":"hurda balast, atılacak balast"},
  {"origin":{"main":"Abfallspannung (Relais)"},"type":"e","translation":"düşme voltajı, kesme voltajı (rölede)"},
  {"origin":{"main":"Abfallstromstärke (Relais)"},"type":"e","translation":"düşme akım gücü, kesme akım gücü (rölede)"},
  {"origin":{"main":"Relais mit Abfallverzögerung"},"type":"pl","translation":"düşme geciktirmeli röle, yavaşlatmalı röle"},
  {"origin":{"main":"Abfallzeit (Relais)"},"type":"e","translation":"röle düşme zamanı"},
  {"origin":{"main":"Abfederung"},"type":"e","translation":"yaylanma, suspansiyon"},
  {"origin":{"main":"Abfertigung eines Zuges"},"type":"e","translation":"trenin kalkışa hazırlanması, gönderilmesi"},
  {"origin":{"main":"Abfertigung von Gütern"},"type":"e","translation":"sevkiyatı yapılacak yüklerin muamelesini yapmak"},
  {"origin":{"main":"Abfertigungsart"},"type":"e","translation":"trenin kalkışa hazırlanma şekli"},
  {"origin":{"main":"Abfertigungsgebühr"},"type":"e","translation":"geçiş sevk harcı"},
  {"origin":{"main":"Abfertigungspapiere"},"type":"e","translation":"sevk evrakı"},
  {"origin":{"main":"Abfertigungsvorschriften"},"type":"e","translation":"sevk talimatnameleri"},
  {"origin":{"main":"Abflachung"},"type":"e","translation":"yassılma, apleti"},
  {"origin":{"main":"ungehinderter Abfluss"},"type":"r","translation":"yağışın engellenmeden akışı"},
  {"origin":{"main":"Abflussganglinie"},"type":"e","translation":"su boşaltma eğrisi"},
  {"origin":{"main":"Abflussmenge"},"type":"e","translation":"boşalan su miktarı"},
  {"origin":{"main":"Abflussmenge pro Minute"},"type":"e","translation":"dakikada boşalan su miktarı"},
  {"origin":{"main":"Abflussöffnung"},"type":"e","translation":"boşalma, akma deliği"},
  {"origin":{"main":"Abflussventil"},"type":"s","translation":"boşaltma valfı"},
  {"origin":{"main":"Abfuhr"},"type":"r","translation":"kalkış"},
  {"origin":{"main":"Abfuhrprogramm"},"type":"s","translation":"kalkış tarifesi, hareket programı"},
  {"origin":{"main":"Abfuhrstrecke"},"type":"e","translation":"yoğun trafikli hat bölümü"},
  {"origin":{"main":"Abfülltrichter"},"type":"r","translation":"doldurma hunisi, doldurma süzgeci"},
  {"origin":{"main":"Abgang unterwegs"},"type":"r","translation":"malın sevkiyat sırasındaki ağırlık kaybı"},
  {"origin":{"main":"Abgangsbahnhof"},"type":"r","translation":"çıkış istasyonu"},
  {"origin":{"main":"Abgangszeit"},"type":"e","translation":"çıkış saati"},
  {"origin":{"main":"Abgasanlage"},"type":"e","translation":"atık gaz tesisi"},
  {"origin":{"main":"Abgasturbine"},"type":"e","translation":"egzoz gazı türbini"},
  {"origin":{"main":"Abgasturbolader"},"type":"r","translation":"egzoz gazı turbo şarjı"},
  {"origin":{"main":"Abgasventil"},"type":"s","translation":"egzoz gazı valfı"},
  {"origin":{"main":"abgebaute Strecke"},"type":"e","translation":"sökülmüş hat bölümü"},{"origin":{"main":"abgeblätterte Schiene"},"type":"e","translation":"yapraklanmış, çapaklanmış, pullanmış ray"},{"origin":{"main":"abgefallenes Signal"},"type":"s","translation":"düşmüş sinyal, kapalı pozisyonda sinyal"},{"origin":{"main":"abgefederte Masse"},"type":"e","translation":"yaylı kütle, suspansiyonlu kütle"},{"origin":{"main":"abgefedertes Gewicht"},"type":"s","translation":"yaylanmış ağırlık"},{"origin":{"main":"abgegebene Leistung"},"type":"e","translation":"motorun çıkış gücü"},{"origin":{"main":"abgelaufen"},"type":"aj","translation":"miadı dolmuş, kullanım süresi bitmiş"},{"origin":{"main":"abgenutzter Spurkranz"},"type":"r","translation":"aşınmış buden"},{"origin":{"main":"abgeschieferte Schiene"},"type":"e","translation":"pullanmş, yapraklanmış ray"},{"origin":{"main":"abgeschirmtes Kabel"},"type":"s","translation":"zırhlı kablo"},{"origin":{"main":"abgesenkte Fahrleitung"},"type":"e","translation":"çökük katener hat"},{"origin":{"main":"abgestellter Zug"},"type":"r","translation":"durdurulmuş, bekletilen tren"},{"origin":{"main":"abgestuftes Bremsen"},"type":"s","translation":"kademeli fren yapma"},{"origin":{"main":"abgestuftes Lösen"},"type":"s","translation":"kademeli bırakma, ayarlı bırakma"},
  {"origin":{"main":"Abgrabung"},"type":"e","translation":"kazılmış yer, malzemesi çıkarılmış yer"},{"origin":{"main":"Abgrenzung des Bahngeländes"},"type":"e","translation":"demiryolu alanı sınırları"},{"origin":{"main":"abhängige Verriegelung"},"type":"e","translation":"bağlantılı kilit"},{"origin":{"main":"abhängiger Verschluss (Weiche)"},"type":"r","translation":"bağlantılı kilit (makasta)"},{"origin":{"main":"abhängiger Weichenriegel"},"type":"r","translation":"bağlantılı makas sürgüsü"},{"origin":{"main":"abhängiges Signal"},"type":"s","translation":"bağlantılı sinyal"},{"origin":{"main":"Abhängigkeit"},"type":"e","translation":"birbirinden bağımlı olma, bağımlılık"},{"origin":{"main":"Abhängigkeitsblock"},"type":"r","translation":"bağlantılı blok"},{"origin":{"main":"abheben des Schweißgutes"},"type":"v","translation":"kaynak malzemesinin yükselmesi"},{"origin":{"main":"Abhebewelle"},"type":"e","translation":"yükselen, kaldıran dalga, sıcaktan uzayarak kalkan rayın oluşturduğu dalganın yükselen yanı"},{"origin":{"main":"Abholung von Gütern"},"type":"e","translation":"yükün yerinden alınması"},{"origin":{"main":"abklappbare Seitenwand"},"type":"e","translation":"yatabilen, menteşeli yan kapak"},{"origin":{"main":"Abkommen betreffend den internationalen Eisenbahngüterverkehr"},"type":"s","translation":"Uluslararası Demiryolu Mal Taşımacılığı Anlaşması"},{"origin":{"main":"Abkommen betreffend den internationalen Eisenbahn-Personen und Gepäckverkehr"},"type":"s","translation":"Uluslararası Demiryolu Yolcu ve Yolcu Eşyası Taşımacılığı Anlaşması"},{"origin":{"main":"abkuppeln"},"type":"v","translation":"kavramayı boşaltmak, açmak"},{"origin":{"main":"Abkühlhaube"},"type":"e","translation":"soğutma başlığı"},{"origin":{"main":"Abkühlintensität"},"type":"e","translation":"soğutma yoğunluğu, soğuma hızı"},{"origin":{"main":"Abkühlspannung"},"type":"e","translation":"soğuma gerilimi"},{"origin":{"main":"Abkühlung"},"type":"e","translation":"soğuma"},{"origin":{"main":"abladen von Gütern"},"type":"v","translation":"yükü boşaltmak, yükü indirmek"},{"origin":{"main":"ablaschen der Schiene"},"type":"v","translation":"rayın cebirelerini çıkartmak"},{"origin":{"main":"Ablasshahn"},"type":"r","translation":"boşaltma musluğu, tahliye musluğu"},{"origin":{"main":"Ablassöffnung"},"type":"e","translation":"boşaltma deliği"},{"origin":{"main":"Ablassschraube"},"type":"e","translation":"boşaltma cıvatası"},{"origin":{"main":"Ablassventil"},"type":"s","translation":"boşaltma valfı, tahliye valfı"},{"origin":{"main":"Ablauf der Geltungsdauer"},"type":"r","translation":"geçerlilik süresinin sona ermesi"},{"origin":{"main":"Ablauf"},"type":"r","translation":"süreç, yürütüm"},{"origin":{"main":"selbsttätige Ablaufanlage"},"type":"e","translation":"otomatik sallama manevra birimi"},{"origin":{"main":"Ablaufberg"},"type":"r","translation":"manevra yapılan meyilli bölüm, sallama manevra alanı, sallama manevra tepesi"},{"origin":{"main":"Ablaufbergsradius"},"type":"r","translation":"sallama manevra tepesi geçiş radyusu"},{"origin":{"main":"Ablaufbetrieb"},"type":"r","translation":"arazi meylinden yararlanılarak yapılan sıralama işletimi"},{"origin":{"main":"Ablaufbremse"},"type":"e","translation":"sallama manevra freni"},{"origin":{"main":"ablaufen"},"type":"v","translation":"sallama yapmak"},{"origin":{"main":"Ablaufen verboten"},"type":"d","translation":"sallama manevra yapmak yasaktır"},{"origin":{"main":"Ablaufgleis"},"type":"s","translation":"sallama manevra hattı"},{"origin":{"main":"Ablaufkriterium"},"type":"s","translation":"iş akışı kriteri"},{"origin":{"main":"Ablaufmanöver"},"type":"s","translation":"sallama manevra"},{"origin":{"main":"Ablaufrangierbetrieb"},"type":"r","translation":"sallama manevralı sıralama işletimi"},{"origin":{"main":"Ablaufrinne"},"type":"e","translation":"akma oluğu, boşalma oluğu"},{"origin":{"main":"Ablaufroutine"},"type":"e","translation":"alışılmış olan iş akışı"},{"origin":{"main":"Ablaufstellwerk"},"type":"s","translation":"sallama manevra tanzim düzeneği"},{"origin":{"main":"Ablaufverbot"},"type":"r","translation":"sallama manevra yasağı"},
  {"origin":{"main":"Ablaufzettel"},"type":"r","translation":"sallama manevra listesi"},{"origin":{"main":"Abläuten"},"type":"s","translation":"trenin gelişini haber veren zil, çan veya kampana"},{"origin":{"main":"Ableiten"},"type":"s","translation":"trafiğin yeniden yönlendirilmesi"},{"origin":{"main":"Ableitstrom"},"type":"r","translation":"sızıntı akım, dağılım akımı"},{"origin":{"main":"Ablenkbereich"},"type":"r","translation":"yön değiştirme alanı"},{"origin":{"main":"ablenkender Strang"},"type":"r","translation":"ana hattan ayrılan tali hat"},{"origin":{"main":"Ablenkpilz"},"type":"r","translation":"saptırıcı mantar, savak, deflektör"},{"origin":{"main":"Ablenkring"},"type":"r","translation":"saptırıcı halka, savak, deflektör"},{"origin":{"main":"Ablenkung"},"type":"e","translation":"rayın sapması, sapma"},{"origin":{"main":"Ablenkungsverlauf"},"type":"r","translation":"rayın sapma hareketi"},{"origin":{"main":"Ablieferung am Bahnhof"},"type":"e","translation":"istasyonda teslim"},{"origin":{"main":"Ablieferungsnachweis"},"type":"r","translation":"teslimat belgesi"},{"origin":{"main":"Ablieferungsschein"},"type":"r","translation":"tesellüm belgesi"},{"origin":{"main":"Abmaße"},"type":"pl","translation":"ölçüler, ebat"},{"origin":{"main":"Abmeldung"},"type":"e","translation":"trenin bir istasyondan hareketinin veya geçişinin bir sonraki noktaya bildirilmesi"},{"origin":{"main":"Abnahme"},"type":"e","translation":"tesellüm, bir makinenin veya benzerinin kabul edilmek üzere kontrolü; hatta ölçü alma"},{"origin":{"main":"Abnahmebericht"},"type":"r","translation":"tesellüm raporu"},{"origin":{"main":"Abnahmefrist"},"type":"e","translation":"tesellüm süresi"},{"origin":{"main":"Abnahmegenauigkeit"},"type":"e","translation":"tesellüm muayenesi ölçü hassasiyeti"},{"origin":{"main":"Abnahmegrenzwert"},"type":"r","translation":"tesellüm sınır değeri"},{"origin":{"main":"Abnahmeprüfung"},"type":"e","translation":"tesellüm muayenesi"},{"origin":{"main":"Abnahmestange"},"type":"e","translation":"algılama çubuğu, sensör çubuğu, nivelman ayağı"},{"origin":{"main":"Abnahmevorrichtung"},"type":"e","translation":"temaslı algılama ünitesi"},{"origin":{"main":"Abnehmen der Radsatzlagergehäuse"},"type":"s","translation":"teker takımı yatak mahfazalarının sökülmesi"},{"origin":{"main":"Abnehmer"},"type":"r","translation":"algılayıcı, sensör"},{"origin":{"main":"Abnutzung"},"type":"e","translation":"aşınma"},{"origin":{"main":"seitliche Abnutzung"},"type":"e","translation":"yanal aşınma"},{"origin":{"main":"Abnutzungsfläche (Fahrdraht)"},"type":"e","translation":"katener hatta aşınma yüzeyi"},{"origin":{"main":"Abnutzungsgrenze"},"type":"e","translation":"aşınma sınırı"},{"origin":{"main":"Abnutzungshöhe"},"type":"e","translation":"aşınma derinliği, aşınma yüksekliği"},{"origin":{"main":"Abnutzungsspielraum"},"type":"r","translation":"aşınma tolerans alanı"},{"origin":{"main":"Abnutzungsvorrat"},"type":"r","translation":"aşınma yedeği"},{"origin":{"main":"Abnutzungswiderstand"},"type":"r","translation":"aşınma direnci"},{"origin":{"main":"abpressen (die Räder eines Radsatzes)"},"type":"v","translation":"bir teker takımının tekerleklerinin presleme yoluyla dingilden çıkarılması"},{"origin":{"main":"abpumpen"},"type":"v","translation":"pompalama ile boşaltmak"},{"origin":{"main":"Abpumpsystem"},"type":"s","translation":"pompalayarak boşaltma sistemi"},{"origin":{"main":"Abrasionswiderstand"},"type":"r","translation":"kazınma direnci, aşınma direnci"},{"origin":{"main":"Abraum"},"type":"r","translation":"ıskarta malzeme, moloz"},{"origin":{"main":"Abraumband"},"type":"s","translation":"moloz taşıma bandı"},{"origin":{"main":"schwenkbares Abraumband"},"type":"s","translation":"yanlara doğru hareket edebilen, sapabilen moloz taşıma bandı"},{"origin":{"main":"Abraumdrehförderband"},"type":"s","translation":"döner moloz taşıma bandı"},{"origin":{"main":"Abräumen"},"type":"s","translation":"temizlemek, uzaklaştırmak"},{"origin":{"main":"Abraumförderband"},"type":"s","translation":"moloz taşıma bandı"},
  {"origin":{"main":"Abraumförderbandbremse"},"type":"e","translation":"moloz taşıma bandı freni"},{"origin":{"main":"Abraumförderbandsteuerung"},"type":"e","translation":"moloz taşıma bandı kumandası"},{"origin":{"main":"Abrechnungsbestimmungen"},"type":"pl","translation":"hesaplaşma kuralları"},{"origin":{"main":"Abrechnungsstelle"},"type":"e","translation":"hesaplaşma departmanı"},{"origin":{"main":"Abregelung"},"type":"e","translation":"sınırlama, hız ayarı"},{"origin":{"main":"Abreißfunke"},"type":"e","translation":"devre kesme kıvılcımı"},{"origin":{"main":"Abrieb"},"type":"r","translation":"ufalanmış malzeme, sürtünme ve aşınma sırasında ortaya çıkan malzeme"},{"origin":{"main":"Abrollcontainer"},"type":"r","translation":"tekerlekli konteyner, kamyon üzerinden kendi tekerlekleri üzerine indirilebilen konteyner"},{"origin":{"main":"abrollen"},"type":"v","translation":"tekerin yuvarlanması, bir makaranın boşaltılması, vagonun kaçması"},{"origin":{"main":"Abrüstung"},"type":"e","translation":"donanımın sökülmesi"},{"origin":{"main":"Abrüstzeit"},"type":"e","translation":"donanım sökme süresi"},{"origin":{"main":"Abschalter"},"type":"r","translation":"değiştirme şalteri"},{"origin":{"main":"Abschaltfunke"},"type":"e","translation":"devre kesme kıvılcımı"},{"origin":{"main":"Abschaltleistung"},"type":"e","translation":"kesme, kapama gücü"},{"origin":{"main":"Abschaltung"},"type":"e","translation":"kapama, devreden çıkarma"},{"origin":{"main":"Abschaltventil"},"type":"r","translation":"kapama vanası, tahliye vanası"},{"origin":{"main":"Abscheider"},"type":"r","translation":"ayırıcı, seperatör"},{"origin":{"main":"Abscherbolzen"},"type":"r","translation":"kesme pimi"},{"origin":{"main":"Abscherkontrolle"},"type":"e","translation":"kesme kontrolü"},{"origin":{"main":"Abscherstift"},"type":"r","translation":"kesme pimi"},{"origin":{"main":"Abschirmung"},"type":"e","translation":"blendaj, kalkanlama, zırhlama"},{"origin":{"main":"Abschlammen"},"type":"s","translation":"çamurunu temizlemek, yıkamak"},{"origin":{"main":"Abschlammventil"},"type":"s","translation":"çamur boşaltma valfı"},{"origin":{"main":"Abschleppgerät"},"type":"s","translation":"üzerine alarak yedekte taşıyan araç, çekici"},{"origin":{"main":"Abschlussblech"},"type":"s","translation":"koruyucu sac, uç sacı, köşe sacı, köşebent"},{"origin":{"main":"Abschlussstrecke"},"type":"e","translation":"yolculuğun tamamlayıcı etabı"},{"origin":{"main":"Abschlussventil"},"type":"s","translation":"kapama valfı"},{"origin":{"main":"Abschlusswiderstand"},"type":"r","translation":"sınırlama direnci"},{"origin":{"main":"Abschneiden der abgenutzten Schienenenden"},"type":"s","translation":"aşınmış, eskimiş olan ray uçlarının kesilmesi"},{"origin":{"main":"Abschnitt"},"type":"r","translation":"bölüm"},{"origin":{"main":"Abschnitt einer Geschwindigkeitsbegrenzung"},"type":"r","translation":"bir sürat tahdidi bölümü"},{"origin":{"main":"Abschnittslänge"},"type":"e","translation":"bölüm uzunluğu"},{"origin":{"main":"Abschnittssteuerung"},"type":"e","translation":"bölüm kontrolü, bölüm kumandası"},{"origin":{"main":"Abschnittswechsel"},"type":"r","translation":"bölüm değişikliği, bölüm takası"},{"origin":{"main":"abschnüren der Gleisbögen"},"type":"v","translation":"ekseni bozuk kurblu hatların fleş metoduyla düzeltilmesi"},{"origin":{"main":"abschrägen"},"type":"v","translation":"pahlamak"},{"origin":{"main":"Abschrägung der Weichenzunge"},"type":"e","translation":"makas dili ucunun eğimli kesimi"},{"origin":{"main":"Abschreibungskosten"},"type":"pl","translation":"amortisman giderleri"},{"origin":{"main":"abschwenken"},"type":"v","translation":"saptırmak"},{"origin":{"main":"absenken"},"type":"v","translation":"oturmak, çökmek, indirmek"},{"origin":{"main":"Absenkwinkel in Bögen"},"type":"r","translation":"kurblarda indirme açısı"},{"origin":{"main":"absetzen"},"type":"v","translation":"bırakmak, yerleştirmek, indirmek"},{"origin":{"main":"absetzen auf Bettung"},"type":"v","translation":"balast yatağı üzerine indirmek, bırakmak"},{"origin":{"main":"absolut"},"type":"aj","translation":"mutlak"},{"origin":{"main":"absoluter Block"},"type":"r","translation":"mutlak blok"},
  {"origin":{"main":"absoluter Bremswegabstand"},"type":"r","translation":"mutlak fren mesafesi aralığı"},{"origin":{"main":"absoluter Leistungspegel"},"type":"r","translation":"mutlak güç seviyesi"},{"origin":{"main":"absoluter Spannungspegel"},"type":"r","translation":"mutlak voltaj seviyesi"},{"origin":{"main":"absolutes Haltsignal"},"type":"s","translation":"mutlak stop sinyali"},{"origin":{"main":"absorbieren"},"type":"v","translation":"emmek, soğurmak, massetmek"},{"origin":{"main":"Absorbtionsbelag"},"type":"r","translation":"emme, soğurma, massetme tabakası"},{"origin":{"main":"Absorbtionsfaktor"},"type":"r","translation":"emme, soğurma massetme faktörü"},{"origin":{"main":"Abspannabschnitt"},"type":"r","translation":"iki germe noktası arasında kalan bölüm"},{"origin":{"main":"abspannen"},"type":"v","translation":"voltajı azaltmak, gerilimi azaltmak"},{"origin":{"main":"Abspanner"},"type":"r","translation":"voltaj düşürme transformatörü"},{"origin":{"main":"Abspannfeld"},"type":"s","translation":"iki germe noktası arasında kalan alan"},{"origin":{"main":"Abspannmast"},"type":"r","translation":"pilon"},{"origin":{"main":"Abspanntrafo"},"type":"r","translation":"voltaj düşürme transformatörü"},{"origin":{"main":"Abspannung (Fahrleitung)"},"type":"e","translation":"katener hattın gevşetilmesi"},{"origin":{"main":"absperrbar"},"type":"aj","translation":"kilitlenebilir"},{"origin":{"main":"Absperrhahn"},"type":"r","translation":"açma-kapama vanası, kesme vanası"},{"origin":{"main":"Absperrhebel"},"type":"r","translation":"kapama kolu"},{"origin":{"main":"Absperrschieber"},"type":"r","translation":"kapama supabı, kapama sürgüsü"},{"origin":{"main":"Absperrschranke"},"type":"e","translation":"kilitlemeli bariyer"},{"origin":{"main":"Absperrstellung"},"type":"e","translation":"kapalı durum"},{"origin":{"main":"Absperrventil"},"type":"s","translation":"kapama valfı"},{"origin":{"main":"Absplitterung"},"type":"e","translation":"pullar halinde parçalanıp dökülme"},{"origin":{"main":"Abspreizung"},"type":"e","translation":"destek, dayanak, gerdirme"},{"origin":{"main":"Abspritzreinigung"},"type":"e","translation":"püskürtme suyla temizlik"},{"origin":{"main":"Abstand"},"type":"r","translation":"mesafe, ara mesafe"},{"origin":{"main":"Abstand zwischen den Schienen eines Gleises"},"type":"r","translation":"hat açıklığı, iki ray dizisi ara açıklığı"}
].map((t, i)=>{return {...t, _id:(i+""), creationDate:new Date(), editDate:new Date()}});
/*eslint-enable */

function search(partial){
  let resolve;
  const promise = new Promise((res) => {resolve = res;});

  const filter_result = () => {
    const regex = new RegExp(partial, ['i']);
    const result = []; //will be populated
    translations.filter((t) => regex.exec(t.origin.main) !== null).forEach((obj) => {
      try{
        result.push(createTranslation(obj));
      }catch(e){
        console.warn(e.message);
      }
    });

    resolve(result);
  };

  setTimeout(filter_result, 0); //make async

  return promise;
}

function logIn(user, pass){
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {resolve = res; reject = rej;});
  function logIn_inner(){
    if(user === 'test' && pass === 'test'){
      resolve({user, pass});
    }else{
      reject(new Error('Login attempt failed'));
    }
  }
  setTimeout(logIn_inner, 0);
  return promise;
}

function objectify(translation){
  return {
    origin: {
      main: translation.get('origin').get('main'),
      short: translation.get('origin').get('short'),
    },
    translation: translation.get('translation'),
    creationDate: translation.get('creationDate'),
    editDate: translation.get('editDate')
  };
}

function add(translation){
  let resolve;
  const promise = new Promise((res) => {resolve = res;});

  const add_inner = () => {
    const id = (() => {
      const count = translations.length;
      const last_id = translations[count - 1]._id;
      const last_id_num = parseInt(last_id, 10);
      return `${last_id_num + 50}`;
    })();
    const now = new Date();
    //add new entry to the translations array
    const to_add = objectify(translation);
    to_add.creationDate = to_add.editDate = now;
    to_add._id = id;
    translations.push(to_add);

    //set the nonset properties
    resolve(
      translation.set('_id', id)
        .set('creationDate', now)
        .set('editDate', now)
    );
  };

  setTimeout(add_inner, 0);
  return promise;
}

function delete_translation(translation){
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {resolve = res; reject = rej;});
  const param_id = translation.get("_id");

  const delete_inner = () => {
    let found = false;

    for(let i = 0, iLimit = translations.length; i < iLimit && !found; i++){
      const item = translations[i];
      const id = item._id;
      found = param_id === id;
      if(found){
        translations.splice(i, 1);
      }
    }

    if(found){
      resolve(translation);
    }else{
      reject(new Error('Translation not found'));
    }
  };

  setTimeout(delete_inner, 0);
  return promise;
}

function update(translation){
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {resolve = res; reject = rej;});
  const new_translation = translation.set('editDate', new Date());

  const update_inner = () => {
    const entry = translations.filter((t) => t._id === new_translation.get('_id'));

    if(entry.length > 0){
      const to_update = entry[0];
      const updated = objectify(translation);
      Object.assign(to_update, updated);
      resolve(translation);
    }else{
      reject(new Error('Translation not found'));
    }
  };

  setTimeout(update_inner, 0);
  return promise;
}

function getSupportedLanguages(){
  let resolve;
  const promise = new Promise((res) => {resolve = res;});
  const get_supported_inner = () => {
    resolve(supported_languages);
  };
  setTimeout(get_supported_inner, 0);
  return promise;
}

function getMessages(lang){
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {resolve = res; reject = rej;});
  const get_messages_inner = () => {
    try{
      const messages = getMessagesFromFile(lang);
      resolve({language: lang, messages});
    }catch(err){
      reject(err);
    }
  };
  setTimeout(get_messages_inner, 0);
  return promise;
}

//eslint-disable-next-line arrow-body-style
export default (() => {
  return {
    getSupportedLanguages,
    getMessages,
    add,
    search,
    logIn,
    update,
    //eslint-disable-next-line quote-props
    'delete': delete_translation
  };
});
