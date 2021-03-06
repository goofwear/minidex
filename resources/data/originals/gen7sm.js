var GEN7SM={
	generation:7,
	id:'sm',
	games:[
		{
			abbr:['S'],
			name:['Sun',,,,'Sol']
		},{
			abbr:['M',,,,'L'],
			name:['Moon',,,,'Luna']
		}
	],
	regionalDex:['Alola',[722,723,724,725,726,727,728,729,730,731,732,733,734,735,19,20,10,11,12,165,166,167,168,172,25,26,736,737,738,438,185,440,113,242,446,143,79,80,199,278,279,63,64,65,52,53,81,82,462,88,89,58,59,96,97,296,297,235,739,740,92,93,94,425,426,200,429,41,42,169,50,51,21,22,627,628,629,630,56,57,225,741,742,743,548,549,546,547,54,55,129,130,339,340,66,67,68,524,525,526,703,302,744,745,327,72,73,456,457,746,370,222,747,748,90,91,371,372,373,506,507,508,133,134,135,136,196,197,470,471,700,749,750,174,39,40,128,241,283,284,751,752,753,754,755,756,46,47,60,61,62,186,118,119,349,350,594,661,662,663,757,758,104,105,115,240,126,467,759,760,761,762,763,764,127,765,766,704,705,706,351,767,768,120,121,769,770,408,409,410,411,566,567,564,565,708,709,299,476,771,170,171,772,773,718,568,569,227,132,173,35,36,774,374,375,376,137,233,474,674,675,775,324,776,777,239,125,466,74,75,76,551,552,553,328,329,330,443,444,445,707,778,779,780,359,361,362,478,215,461,27,28,37,38,582,583,584,209,210,422,423,369,781,318,319,320,321,131,102,103,782,783,784,587,123,212,198,430,447,448,147,148,149,142,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,
	/* not regional */
	69,111,116,152,155,158,183,220,288,315,363,397,404,468,497,500,503,534,542,543,574,578,599,604,607,610,633,658,679],302
	],
	icons:[791,792],

	magneticField:'Vast Poni Canyon',
	mossRock:'Lush Jungle',
	iceRock:'Mount Lanakila',

	locations:[
		{
			name:['Iki Town',,,'Lili','Pueblo Lilii'],encounters:[
				[722,[0,1],'starter'],
				[725,[0,1],'starter'],
				[728,[0,1],'starter']
			]
		},{
			name:['Route 1',,,'Percorso 1','Ruta 1'],encounters:[
				{group:['East and north grass',,,,'Hierba este y norte'],encounters:[
					[10,[0,1],'grass',20],
					[alternateForm(19,1),[0,1],'grass',[,30]],
					[165,[0,1],'grass',[20]],
					[167,[0,1],'grass',[,20]],
					[731,[0,1],'grass',30],
					[734,[0,1],'grass',[30]]
				]},
				{group:'west',encounters:[
					[10,[0,1],'grass',10],
					[11,[0,1],'grass',10],
					[alternateForm(19,1),[0,1],'grass',[,30]],
					[165,[0,1],'grass',[15]],
					[167,[0,1],'grass',[,15]],
					[172,[0,1],'grass',5],
					[731,[0,1],'grass',20],
					[734,[0,1],'grass',[30]],
					[736,[0,1],'grass',10]
				]},
				{group:'south',encounters:[
					[10,[0,1],'grass',10],
					[11,[0,1],'grass',10],
					[alternateForm(19,1),[0,1],'grass',[,30]],
					[165,[0,1],'grass',[10]],
					[167,[0,1],'grass',[,10]],
					[438,[0,1],'grass',15],
					[446,[0,1],'grass',5],
					[731,[0,1],'grass',20],
					[734,[0,1],'grass',[30]]
				]},
				{group:['Hau\'oli Outskirts',,,,'Afueras de Hau\'oli'],encounters:[
					[alternateForm(19,1),[0,1],'grass',[,30]],
					[79,[0,1],'grass',20],
					[278,[0,1],'grass',50],
					[734,[0,1],'grass',[30]],
					[72,[0,1],'surf',40],
					[278,[0,1],'surf',20],
					[456,[0,1],'surf',40]
				]},
				[10,[0,1],['sos_ally',11]],
				[25,[0,1],['sos_ally',172]],
				[440,[0,1],['sos_ally',172]],
				[185,[0,1],['sos_ally',438]],
				[440,[0,1],['sos_ally',438]],
				[143,[0,1],['sos_ally',446]],
				[440,[0,1],['sos_ally',446]]
			]
		},{
			name:['Trainers\' School','École de Dresseurs','Trainerschule','Scuola Allenatori','Escuela Entrenadores'],encounters:[
				[alternateForm(52,1),[0,1],'grass',30],
				[81,[0,1],'grass',50],
				[alternateForm(88,1),[0,1],'grass',20]
			]
		},{
			name:['Hau\'oli City','Ekaeka','Hauholi City','Hau\'oli','Ciudad Hauoli'],encounters:[
				[alternateForm(19,1),[0,1],'grass',[,20]],
				[alternateForm(52,1),[0,1],'grass',10],
				[63,[0,1],'grass',25],
				[81,[0,1],'grass',10],
				[alternateForm(88,1),[0,1],'grass',10],
				[172,[0,1],'grass',5],
				[25,[0,1],['sos_ally',172]],
				[440,[0,1],['sos_ally',172]],
				[278,[0,1],'grass',20],
				[734,[0,1],'grass',[20]],
				[72,[0,1],'surf',40],
				[278,[0,1],'surf',20],
				[456,[0,1],'surf',40],
				[599,[0,1],['grass','thursday','island_scan']],
				[801,[0,1],['gift','after_champion']]
			]
		},{
			name:['Route 2',,,'Percorso 2','Ruta 2'],encounters:[
				[alternateForm(19,1),[0,1],'grass',[,10]],
				[734,[0,1],'grass',[10]],
				{group:'south',encounters:[
					[alternateForm(52,1),[0,1],'grass',30],
					[63,[0,1],'grass',20],
					[96,[0,1],'grass',20],
					[235,[0,1],'grass',20],
				]},
				{group:'north',encounters:[
					[21,[0,1],'grass',40],
					[58,[0,1],'grass',20],
					[235,[0,1],'grass',10],
					[742,[0,1],'grass',20]
				]},
				[alternateForm(19,1),[0,1],'grass_rustling',[,70]],
				[296,[0,1],'grass_rustling',30],
				[734,[0,1],'grass_rustling',[70]],
				[739,[0,1],'berry_pile',100],
				[66,[0,1],['trade',21]],
				[152,[0,1],['grass','friday','island_scan']]
			]
		},{
			name:['Hau\'oli Cemetery','Cimetière d\'Ekaeka','Hauholi-Friedhof','Cimitero di Hau\'oli','Cementerio de Hauoli'],encounters:[
				[41,[0,1],'grass',20],
				[92,[0,1],'grass',50],
				[200,[0,1],'grass',[,30]],
				[425,[0,1],'grass',[30]],
				[607,[0,1],['grass','saturday','island_scan']]
			]
		},{
			name:['Verdant Cavern','Grotte Verdoyante','Vegetationshöhle','Grotta Sottobosco','Cueva Sotobosque'],encounters:[
				[41,[0,1],'cave',70],
				[50,[0,1],'cave',30],
				[alternateForm(19,1),1,'dust_cloud',100],
				[734,0,'dust_cloud',100],
				[795,1,'cave']
			]
		},{
			name:['Route 3',,,'Percorso 3','Ruta 3'],encounters:[
				[alternateForm(19,1),[0,1],'grass',[,10]],
				[56,[0,1],'grass',20],
				[734,[0,1],'grass',[10]],
				[742,[0,1],'grass',20],
				{group:'north',encounters:[
					[21,[0,1],'grass',40],
					[225,[0,1],'grass',10]
				]},
				{group:'south',encounters:[
					[21,[0,1],'grass',49],
					[371,[0,1],'grass',1],
					[373,[0,1],['sos_ally',371]]
				]},
				[21,[0,1],'shadow',70],
				[627,0,'shadow',30],
				[629,1,'shadow',30],
				[739,[0,1],'berry_pile',100],
				[155,[0,1],['grass','sunday','island_scan']]
			]
		},{
			name:['Melemele Meadow','Jardin de Mele-Mele','Mele-Mele-Blumenmeer','Prato Mele Mele','Jardines de Melemele'],encounters:[
				[10,[0,1],'flowers_yellow',10],
				[12,[0,1],['sos_ally',10]],
				[11,[0,1],'flowers_yellow',9],
				[10,[0,1],['sos_ally',11]],
				[12,[0,1],['sos_ally',11]],
				[12,[0,1],'flowers_yellow',1],
				[546,0,'flowers_yellow',30],
				[548,1,'flowers_yellow',30],
				[alternateForm(741,1),[0,1],'flowers_yellow',20],
				[742,[0,1],'flowers_yellow',30],
				[794,0,'flowers_yellow']
			]
		},{
			name:['Seaward Cave','Grotte Verlamer','Meereshöhle','Grotta Pratomare','Gruta Unemar'],encounters:[
				[41,[0,1],'cave',70],
				[50,[0,1],'cave',30],
				[41,[0,1],'surf',80],
				[54,[0,1],'surf',20],
				[129,[0,1],'fish',99],
				[339,[0,1],'fish',1],
				[129,[0,1],'fish_special',50],
				[130,[0,1],['sos_ally',129]],
				[340,[0,1],['sos_ally',339]],
				[339,[0,1],'fish_special',50],
				[158,[0,1],['cave','monday','island_scan']]
			]
		},{
			name:['Ten Carat Hill','Colline Dicarat','Tenkarat-Hügel','Collina Diecicarati','Colina Dequilate'],encounters:[
				[41,[0,1],'cave',30],
				[50,[0,1],'cave',20],
				[524,[0,1],'cave',30],
				[703,[0,1],'cave',20],
				[302,[0,1],['sos_ally',703]],
				[41,[0,1],'surf',80],
				[54,[0,1],'surf',20],
				[633,[0,1],['cave','tuesday','island_scan']],
				[66,[0,1],'grass',30],
				[327,[0,1],'grass',10],
				[524,[0,1],'grass',20],
				[703,[0,1],'grass',20],
				[744,[0,1],'grass',20],
				[800,[0,1],'grass']
			]
		},{
			name:['Route 4',,,'Percorso 4','Ruta 4'],encounters:[
				[alternateForm(19,1),[0,1],'grass',[,10]],
				[133,[0,1],'grass',[5,5]],
				[174,[0,1],'grass',[10]],
				[196,[0,1],['sos_ally',133],[5]],
				[197,[0,1],['sos_ally',133],[,5]],
				[39,[0,1],['sos_ally',174]],
				[440,[0,1],['sos_ally',174]],
				[506,[0,1],'grass',30],
				[731,[0,1],'grass',[15,25]],
				[734,[0,1],'grass',[10]],
				[736,[0,1],'grass',10],
				[749,[0,1],'grass',20],
				[739,[0,1],'berry_pile',100],
				[543,[0,1],['grass','thursday','island_scan']]
			]
		},{
			name:['Paniola Town','Ohana','Ohana','Ohana','Pueblo Ohana'],encounters:[
				[129,[0,1],'fish',99],
				[339,[0,1],'fish',1],
				[129,[0,1],'fish_special',50],
				[339,[0,1],'fish_special',50],
				[130,[0,1],['sos_ally',129]],
				[340,[0,1],['sos_ally',339]]
			]
		},{
			name:['Paniola Ranch','Ranch Ohana','Ohana-Farm','Fattoria Ohana','Rancho Ohana'],encounters:[
				[128,[0,1],'grass',5],
				[241,[0,1],['sos_ally',128]],
				[241,[0,1],'grass',5],
				[128,[0,1],['sos_ally',241]],
				[506,[0,1],'grass',40],
				[749,[0,1],'grass',50],
				[133,[0,1],'gift_egg']
			]
		},{
			name:['Route 5',,,'Percorso 5','Ruta 5'],encounters:[
				[736,[0,1],'grass',10],
				{group:'south',encounters:[
					[10,[0,1],'grass',10],
					[11,[0,1],'grass',9],
					[12,[0,1],'grass',1],
					[506,[0,1],'grass',30],
					[731,[0,1],'grass',20],
					[753,[0,1],'grass',20],
					[739,[0,1],'berry_pile',100],
					[761,[0,1],['trade',506]]
				]},
				{group:'north',encounters:[
					[10,[0,1],'grass',15],
					[11,[0,1],'grass',10],
					[12,[0,1],'grass',5],
					[438,[0,1],'grass',10],
					[732,[0,1],'grass',20],
					[753,[0,1],'grass',30],
					[50,[0,1],'dust_cloud',100]
				]},
				[12,[0,1],['sos_ally',10]],
				[10,[0,1],['sos_ally',11]],
				[12,[0,1],['sos_ally',11]],
				[185,[0,1],['sos_ally',438]],
				[440,[0,1],['sos_ally',438]],
				[731,[0,1],['sos_ally',732]],
				[69,[0,1],['grass','friday','island_scan']]
			]
		},{
			name:['Brooklet Hill','Colline Clapotis','Plätscherhügel','Collina Scrosciante','Colina Saltagua'],encounters:[
				[54,[0,1],'grass',30],
				[54,[0,1],'grass',30],
				{group:'north',encounters:[
					[46,[0,1],'grass',[20]],
					[60,[0,1],'grass',10],
					[278,[0,1],'grass',10],
					[283,[0,1],'grass',[,10]],
					[506,[0,1],'grass',20],
					[751,[0,1],'grass',[10]],
					[755,[0,1],'grass',[,20]]
				]},
				{group:'south',encounters:[
					[60,[0,1],'grass',20],
					[278,[0,1],'grass',30],
					[283,[0,1],'grass',[,20]],
					[751,[0,1],'grass',[20]]
				]},
				[54,[0,1],'surf',20],
				[60,[0,1],'surf',40],
				[283,[0,1],'surf',[,40]],
				[751,[0,1],'surf',[40]],
				[118,[0,1],'fish',29],
				[119,[0,1],['sos_ally',118]],
				[129,[0,1],'fish',70],
				[130,[0,1],['sos_ally',129]],
				[349,[0,1],'fish',1],
				[118,[0,1],'fish_special',45],
				[119,[0,1],['fish_special','sos_ally',118]],
				[129,[0,1],'fish_special',50],
				[130,[0,1],['fish_special','sos_ally',129]],
				[349,[0,1],'fish_special',5],
				[183,[0,1],['grass','saturday','island_scan']],
				{group:['Totem\'s Den',,,,'Sala del dominante'],encounters:[
					[72,[0,1],'surf',40],
					[278,[0,1],'surf',20],
					[456,[0,1],'surf',40],
					[129,[0,1],'fish',79],
					[130,[0,1],['sos_ally',129]],
					[594,[0,1],'fish',1],
					[746,[0,1],'fish',20],
					[129,[0,1],'fish_special',50],
					[130,[0,1],['fish_special','sos_ally',129]],
					[594,[0,1],'fish_special',20],
					[746,[0,1],'fish_special',30]
				]}
			]
		},{
			name:['Route 6',,,'Percorso 6','Ruta 6'],encounters:[
				[alternateForm(19,1),[0,1],'grass',[,10]],
				[133,[0,1],'grass',5],
				[174,[0,1],'grass',[10]],
				[506,[0,1],'grass',30],
				[731,[0,1],'grass',[15,25]],
				[734,[0,1],'grass',[10]],
				[736,[0,1],'grass',10],
				{group:'north',encounters:[
					[749,[0,1],'grass',20]
				]},
				{group:'south',encounters:[
					[alternateForm(741,2),[0,1],'grass',20]
				]},
				[196,[0,1],['sos_ally',133],[5]],
				[197,[0,1],['sos_ally',133],[,5]],
				[39,[0,1],['sos_ally',174]],
				[440,[0,1],['sos_ally',174]],
				[574,[0,1],['grass','sunday','island_scan']]
			]
		},{
			name:['Route 7',,,'Percorso 7','Ruta 7'],encounters:[
				[50,[0,1],'dust_cloud',100],
				[72,[0,1],'surf',30],
				[278,[0,1],'surf',20],
				[456,[0,1],'surf',30],
				[771,[0,1],'surf',20],
				[120,[0,1],'fish',1],
				[129,[0,1],'fish',79],
				[746,[0,1],'fish',20],
				[120,[0,1],'fish_special',20],
				[129,[0,1],'fish_special',60],
				[746,[0,1],'fish_special',20],
				[121,[0,1],['sos_ally',120]],
				[130,[0,1],['sos_ally',129]],
				[363,[0,1],['surf','monday','island_scan']]
			]
		},{
			name:['Wela Volcano Park','Parc Volcanique','Wela-Vulkanpark','Parco Vulcano Wela','Área Volcánica Wela'],encounters:[
				[104,[0,1],'grass',24],
				[115,[0,1],['sos_ally',104]],
				[115,[0,1],'grass',1],
				[240,[0,1],'grass',15],
				[126,[0,1],['sos_ally',240]],
				[661,[0,1],'grass',30],
				[757,[0,1],'grass',30],
				[793,[0,1],'grass']
			]
		},{
			name:['Melemele Sea','Mer de Mele-Mele','Meer von Mele-Mele','Mare di Mele Mele','Mar de Melemele'],encounters:[
				[72,[0,1],'surf',40],
				[278,[0,1],'surf',20],
				[456,[0,1],'surf',40],
				[129,[0,1],'fish',78],
				[130,[0,1],['sos_ally',129]],
				[747,[0,1],['sos_ally',222]],
				[222,[0,1],'fish',1],
				[370,[0,1],'fish',1],
				[746,[0,1],'fish',20],
				[129,[0,1],'fish_special',20],
				[222,[0,1],'fish_special',20],
				[370,[0,1],'fish_special',40],
				[746,[0,1],'fish_special',20]
			]
		},{
			name:['Kala\'e Bay','Baie de Kala\'e','Kala\'e-Bucht','Baia Kala\'e','Bahía Kalae'],encounters:[
				[alternateForm(19,1),[0,1],'grass',[,30]],
				[79,[0,1],'grass',20],
				[80,[0,1],['sos_ally',79]],
				[278,[0,1],'grass',40],
				[371,[0,1],'grass',10],
				[372,[0,1],['sos_ally',371]],
				[734,[0,1],'grass',[30]],
				[72,[0,1],'surf',40],
				[278,[0,1],'surf',20],
				[456,[0,1],'surf',40],
				[90,[0,1],'fish',1],
				[129,[0,1],'fish',79],
				[130,[0,1],['sos_ally',129]],
				[746,[0,1],'fish',20],
				[90,[0,1],'fish_special',20],
				[129,[0,1],'fish_special',50],
				[746,[0,1],'fish_special',30],
				[116,[0,1],['surf','wednesday','island_scan']]
			]
		},{
			name:['Route 8',,,'Percorso 8','Ruta 8'],encounters:[
				[alternateForm(19,1),[0,1],'grass',[,30]],
				[662,[0,1],'grass',15],
				[732,[0,1],'grass',30],
				[731,[0,1],['sos_ally',732]],
				[734,[0,1],'grass',[30]],
				[757,[0,1],'grass',20],
				[759,[0,1],'grass',5],
				[739,[0,1],'berry_pile',100],
				[767,[0,1],'chase',100],
				[72,[0,1],'surf',40],
				[278,[0,1],'surf',20],
				[456,[0,1],'surf',40],
				[129,[0,1],'fish',79],
				[170,[0,1],'fish',1],
				[746,[0,1],'fish',20],
				[129,[0,1],'fish_special',60],
				[130,[0,1],['sos_ally',129]],
				[170,[0,1],'fish_special',20],
				[746,[0,1],'fish_special',20],
				[404,[0,1],['grass','tuesday','island_scan']],
				[408,[0,1],'revive_fossil'],
				[410,[0,1],'revive_fossil'],
				[564,[0,1],'revive_fossil'],
				[566,[0,1],'revive_fossil']
			]
		},{
			name:['Lush Jungle','Jungle Sombrefeuille','Schattendschungel','Giungla Ombrosa','Jungla Umbría'],encounters:[
				[764,[0,1],'grass',5],
				[765,1,'grass',5],
				[732,1,['sos_ally',765]],
				[766,0,'grass',5],
				[732,0,['sos_ally',766]],
				[704,[0,1],['sos_ally_weather','rain'],10],
				[351,[0,1],['sos_ally_weather','rain'],1],
				[351,[0,1],['sos_ally_weather','hail','sandstorm'],10],
				[753,[0,1],'rustling_tree',100],
				[796,[0,1],'grass'],
				{group:['Central area',,,,'Area central'],encounters:[
					[10,[0,1],'grass',10],
					[12,[0,1],['sos_ally',10]],
					[11,[0,1],'grass',10],
					[10,[0,1],['sos_ally',11]],
					[12,[0,1],['sos_ally',11]],
					[46,[0,1],'grass',[20]],
					[438,[0,1],'grass',10],
					[185,[0,1],['sos_ally',438]],
					[440,[0,1],['sos_ally',438]],
					[732,[0,1],'grass',20],
					[753,[0,1],'grass',20],
					[755,[0,1],'grass',[,20]]
				]},
				{group:['Northwest',,,,'Noroeste'],encounters:[
					[46,[0,1],'grass',[10]],
					[732,[0,1],'grass',20],
					[753,[0,1],'grass',20],
					[755,[0,1],'grass',[,10]],
					[761,[0,1],'grass',40]
				]},
				{group:'north',encounters:[
					[46,[0,1],'grass',[30]],
					[127,[0,1],'grass',10],
					[732,[0,1],'grass',20],
					[753,[0,1],'grass',30],
					[755,[0,1],'grass',[,30]]
				]},
				[41,[0,1],'cave',70],
				[50,[0,1],'cave',30],
				[796,[0,1],'cave']
			]
		},{
			name:['Diglett\'s Tunnel','Tunnel Taupiqueur','Digda-Tunnel','Tunnel Diglett','Túnel Diglett'],encounters:[
				[41,[0,1],'cave',70],
				[50,[0,1],'cave',30],
				[50,[0,1],'dust_cloud',100],
				[793,[0,1],'cave']
			]
		},{
			name:['Route 9',,,'Percorso 9','Ruta 9'],encounters:[
				[129,[0,1],'fish',15],
				[130,[0,1],['sos_ally',129]],
				[747,[0,1],['sos_ally',222]],
				[222,[0,1],'fish',5],
				[370,[0,1],'fish',70],
				[746,[0,1],'fish',10]
			]
		},{
			name:['Konikoni City',,,,'Ciudad Konikoni'],encounters:[
				[61,[0,1],['trade',41]]
			]
		},{
			name:['Memorial Hill','Colline Memento','Hügel des Gedenkens','Colle della Memoria','Colina del Recuerdo'],encounters:[
				[41,[0,1],'grass',20],
				[92,[0,1],'grass',50],
				[708,[0,1],'grass',30],
				[796,[0,1],'grass']
			]
		},{
			name:['Akala Outskirts','Côte Reculée d\'Akala','Akala-Küstenstreifen','Punta Akala','Afueras de Akala'],encounters:[
				[alternateForm(20,1),[0,1],'grass',[,30]],
				[278,[0,1],'grass',50],
				[299,[0,1],'grass',15],
				[735,[0,1],'grass',[30]],
				[759,[0,1],'grass',5],
				[129,[0,1],'fish',79],
				[130,[0,1],['sos_ally',129]],
				[170,[0,1],'fish',1],
				[746,[0,1],'fish',20],
				[129,[0,1],'fish_special',60],
				[130,[0,1],['fish_special','sos_ally',129]],
				[170,[0,1],'fish_special',20],
				[746,[0,1],'fish_special',20],
				[679,[0,1],['grass','wednesday','island_scan']]
			]
		},{
			name:['Ruins of Life','Ruines de l\'Éveil','Ruinen des Lebens','Tempio della Vita','Ruinas de la Vida'],encounters:[
				[786,[0,1],'interact']
			]
		},{
			name:['Hano Beach','Plage Hano-Hano','Hanohano-Strand','Spiaggia Hanu Hanu','Playa de Hanohano'],encounters:[
				[120,[0,1],'dust_cloud',80],
				[769,[0,1],'dust_cloud',20],
				[72,[0,1],'surf_special',100],
				[72,[0,1],'surf',30],
				[278,[0,1],'surf',20],
				[456,[0,1],'surf',30],
				[771,[0,1],'surf',20]
			]
		},{
			name:['Malie City','Malié','Malihe City','Malie','Ciudad Malíe'],encounters:[
				[alternateForm(20,1),[0,1],'grass',[,20]],
				[81,[0,1],'grass',20],
				[alternateForm(88,1),[0,1],'grass',30],
				[568,[0,1],'grass',30],
				[569,[0,1],['sos_ally',568]],
				[735,[0,1],'grass',[20]],
				[440,[0,1],['trade',674]]
			]
		},{
			name:['Malie Garden','Parc de Malié','Malihe-Ziergarten','Giardino di Malie','Parque de Malíe'],encounters:[
				[alternateForm(52,1),[0,1],'grass',20],
				[54,[0,1],'grass',10],
				[60,[0,1],'grass',20],
				[166,[0,1],'grass',[20]],
				[168,[0,1],'grass',[,20]],
				[284,[0,1],'grass',[,20]],
				[546,0,'grass',10],
				[548,1,'grass',10],
				[752,[0,1],'grass',[20]],
				[61,[0,1],['sos_ally_weather','rain'],10],
				[62,[0,1],['sos_ally_weather','rain'],1],
				[186,[0,1],['sos_ally_weather','rain']],
				[351,[0,1],['sos_ally_weather','hail','sandstorm'],10],
				[118,[0,1],'fish',60],
				[119,[0,1],['sos_ally',118]],
				[129,[0,1],'fish',40],
				[130,[0,1],['sos_ally',129]],
				[118,[0,1],'fish_special',50],
				[129,[0,1],'fish_special',50],
				[797,1,'grass'],
				[798,0,'grass']
			]
		},{
			name:['Route 10',,,'Percorso 10','Ruta 10'],encounters:[
				[alternateForm(20,1),[0,1],'grass',[,30]],
				[22,[0,1],'grass',30],
				[166,[0,1],'grass',[20]],
				[168,[0,1],'grass',[,20]],
				[227,[0,1],'grass',10],
				[674,[0,1],'grass',10],
				[675,[0,1],['sos_ally',674]],
				[735,[0,1],'grass',[30]],
				[22,[0,1],'rustling_tree',80],
				[227,[0,1],'rustling_tree',20],
				[739,[0,1],'berry_pile',100],
				[397,[0,1],['grass','thursday','island_scan']]
			]
		},{
			name:['Mount Hokulani','Mont Hokulani','Hokulani-Berg','Picco Hokulani','Pico Hokulani'],encounters:[
				[22,[0,1],'grass',[40,30]],
				[132,[0,1],'grass',10],
				[173,[0,1],'grass',[,10]],
				[35,[0,1],['sos_ally',173]],
				[113,[0,1],['sos_ally',173]],
				[227,[0,1],'grass',10],
				[374,[0,1],'grass',10],
				[774,[0,1],'grass',30],
				[610,[0,1],['grass','saturday','island_scan']]
			]
		},{
			name:['Route 11',,,'Percorso 11','Ruta 11'],encounters:[
				[alternateForm(20,1),[0,1],'grass',[,20]],
				[46,[0,1],'grass',[10]],
				[166,[0,1],'grass',[20]],
				[168,[0,1],'grass',[,20]],
				[674,[0,1],'grass',20],
				[675,[0,1],['sos_ally',674]],
				[732,[0,1],'grass',20],
				[735,[0,1],'grass',[20]],
				[755,[0,1],'grass',[,10]],
				[775,[0,1],'grass',10],
				[288,[0,1],['grass','friday','island_scan']]
			]
		},{
			name:['Route 12',,,'Percorso 12','Ruta 12'],encounters:[
				[alternateForm(74,1),[0,1],'grass',40],
				[239,[0,1],'grass',10],
				[324,[0,1],'grass',20],
				[749,[0,1],'grass',30],
				[125,[0,1],['sos_ally',239]],
				[113,[0,1],['sos_ally',239]]
			]
		},{
			name:['Ula\'ula Beach','Côte Sauvage','Küste von Ula-Ula','Lido di Ula Ula','Playa Menor'],encounters:[
				[739,[0,1],'berry_pile',100],
				[72,[0,1],'surf',40],
				[279,[0,1],'surf',20],
				[456,[0,1],'surf',40],
				[129,[0,1],'fish',79],
				[746,[0,1],'fish',20],
				[779,[0,1],'fish',1],
				[129,[0,1],'fish_special',50],
				[746,[0,1],'fish_special',30],
				[779,[0,1],'fish_special',20],
				[130,[0,1],['sos_ally',129]]
			]
		},{
			name:['Blush Mountain','Mont Ardent','Glühberg','Monte Tepore','Monte Rubor'],encounters:[
				[alternateForm(74,1),[0,1],'grass',30],
				[239,[0,1],'grass',10],
				[125,[0,1],['sos_ally',239]],
				[113,[0,1],['sos_ally',239]],
				[324,0,'grass',10],
				[324,1,'grass',20],
				[737,[0,1],'grass',10],
				[749,[0,1],'grass',20],
				[776,0,'grass',10],
				[777,[0,1],'grass',10],
				[111,[0,1],['grass','sunday','island_scan']]
			]
		},{
			name:['Route 13',,,'Percorso 13','Ruta 13'],encounters:[
				[129,[0,1],'fish',79],
				[746,[0,1],'fish',20],
				[779,[0,1],'fish',1],
				[129,[0,1],'fish_special',50],
				[746,[0,1],'fish_special',30],
				[779,[0,1],'fish_special',20],
				[130,[0,1],['sos_ally',129]]
			]
		},{
			name:['Tapu Village','Village Toko','Dorf der Kapu','Villaggio Tapu','Aldea Tapu'],encounters:[
				[alternateForm(20,1),[0,1],'grass',[,30]],
				[alternateForm(27,1),1,'grass',10],
				[alternateForm(37,1),0,'grass',10],
				[279,[0,1],'grass',30],
				[359,[0,1],'grass',10],
				[361,[0,1],'grass',20],
				[735,[0,1],'grass',[30]],
				[582,[0,1],['sos_ally_weather','hail'],10],
				[351,[0,1],['sos_ally_weather','hail'],1],
				[351,[0,1],['sos_ally_weather','rain','sandstorm'],10],
				[alternateForm(75,1),[0,1],['trade',93]],
				[220,[0,1],['grass','monday','island_scan']]
			]
		},{
			name:['Route 15',,,'Percorso 15','Ruta 15'],encounters:[
				[alternateForm(20,1),[0,1],'grass',[,30]],
				[79,[0,1],'grass',20],
				[279,[0,1],'grass',50],
				[735,[0,1],'grass',[30]],
				[72,[0,1],'surf',40],
				[279,[0,1],'surf',20],
				[456,[0,1],'surf',40],
				[129,[0,1],'fish',79],
				[746,[0,1],'fish',20],
				[779,[0,1],'fish',1],
				[129,[0,1],'fish_special',50],
				[746,[0,1],'fish_special',30],
				[779,[0,1],'fish_special',20],
				[130,[0,1],['sos_ally',129]]
			]
		},{
			name:['Aether House','Foyer Æther','Æther-Haus','Residenza Æther','Casa Æther'],encounters:[
				[137,[0,1],['gift','after_champion']]
			]
		},{
			name:['Route 14',,,'Percorso 14','Ruta 14'],encounters:[
				[72,[0,1],'surf',40],
				[279,[0,1],'surf',20],
				[456,[0,1],'surf',40],
				[129,[0,1],'fish',79],
				[746,[0,1],'fish',20],
				[779,[0,1],'fish',1],
				[129,[0,1],'fish_special',50],
				[746,[0,1],'fish_special',30],
				[779,[0,1],'fish_special',20],
				[130,[0,1],['sos_ally',129]]
			]
		},{
			name:['Thrifty Megamart (Abandoned Site)','Site désaffecté Bradley Prix','Verlassener Schnäppchenparadies','Supermarket Affaroni (Edificio Abbandonato)','Súper Ultraganga abandonado'],encounters:[
				[42,[0,1],'walk',40],
				[93,[0,1],'walk',40],
				[94,[0,1],['sos_ally',93]],
				[707,[0,1],'walk',15],
				[778,[0,1],'walk',5]
			]
		},{
			name:['Haina Desert','Désert Haina','Haina-Wüste','Deserto Haina','Desierto de Haina'],encounters:[
				[alternateForm(51,1),[0,1],'deep_sand',30],
				[551,[0,1],'deep_sand',70],
				[alternateForm(51,1),[0,1],'dust_cloud',20],
				[328,[0,1],'dust_cloud',10],
				[551,[0,1],'dust_cloud',70],
				[444,[0,1],['sos_ally_weather','sandstorm'],10],
				[351,[0,1],['sos_ally_weather','sandstorm'],1],
				[351,[0,1],['sos_ally_weather','rain'],10],
				[351,[0,1],['sos_ally_weather','hail'],10],
				[797,1,'deep_sand']
			]
		},{
			name:['Route 16',,,'Percorso 16','Ruta 16'],encounters:[
				[alternateForm(20,1),[0,1],'grass',[,30]],
				[79,[0,1],'grass',20],
				[279,[0,1],'grass',50],
				[735,[0,1],'grass',[30]],
				[739,[0,1],'berry_pile',100],
				[718,[0,1],'gift'],
				[578,[0,1],['grass','tuesday','island_scan']]
			]
		},{
			name:['Ula\'ula Meadow','Jardin d\'Ula-Ula','Ula-Ula-Blumenmeer','Prato Ula Ula','Jardines de Ula-Ula'],encounters:[
				[166,[0,1],'flowers_red',[20]],
				[168,[0,1],'flowers_red',[,20]],
				[546,0,'flowers_red',30],
				[548,1,'flowers_red',30],
				[741,[0,1],'flowers_red',20],
				[743,[0,1],'flowers_red',30],
				[166,[0,1],'grass_tall',[20]],
				[168,[0,1],'grass_tall',[,20]],
				[546,0,'grass_tall',30],
				[548,1,'grass_tall',30],
				[741,[0,1],'grass_tall',20],
				[743,[0,1],'grass_tall',30],
				[315,[0,1],['grass_tall','wednesday','island_scan']],
				[315,[0,1],['flowers_red','wednesday','island_scan']]
			]
		},{
			name:['Route 17',,,'Percorso 17','Ruta 17'],encounters:[
				[alternateForm(20,1),[0,1],'grass',[,30]],
				[22,[0,1],'grass',30],
				[166,[0,1],'grass',[20]],
				[168,[0,1],'grass',[,20]],
				[674,[0,1],'grass',20],
				[735,[0,1],'grass',[30]],
				{group:['Brown grass',,,,'Hierba marrón'],encounters:[
					[alternateForm(75,1),[0,1],'grass',20],
					[227,[0,1],'grass',10],
					[674,[0,1],'grass',10]
				]},
				[675,[0,1],['sos_ally',674]],
				[704,[0,1],['sos_ally_weather','rain'],10],
				[351,[0,1],['sos_ally_weather','rain'],1],
				[351,[0,1],['sos_ally_weather','hail','sandstorm'],10],
				[739,[0,1],'berry_pile',100],
				[798,0,'grass']
			]
		},{
			name:['Aether Paradise','Paradis Æther','Æther-Paradies','Æther Paradise','Paraíso Æther'],encounters:[
				[772,[0,1],['gift','after_champion']]
			]
		},{
			name:['Seafolk Village','Village Flottant','Dorf des Seevolkes','Villaggio del Mare','Aldea Marina'],encounters:[
				[129,[0,1],'fish',79],
				[320,[0,1],'fish',20],
				[781,[0,1],'fish',1],
				[129,[0,1],'fish_special',50],
				[320,[0,1],'fish_special',40],
				[781,[0,1],'fish_special',10],
				[130,[0,1],['sos_ally',129]],
				[321,[0,1],['sos_ally',320]],
				[142,[0,1],'gift'],
				[762,[0,1],['trade',210]]
			]
		},{
			name:['Poni Wilds','Prairie de Poni','Wildnis von Poni','Piana di Poni','Prado de Poni'],encounters:[
				[alternateForm(20,1),[0,1],'grass',[,30]],
				[102,[0,1],'grass',10],
				[210,[0,1],'grass',20],
				[279,[0,1],'grass',30],
				[alternateForm(423,1),[0,1],'grass',10],
				[735,[0,1],'grass',[30]],
				[739,[0,1],'berry_pile',100],
				[767,[0,1],'chase',100],
				[320,[0,1],'surf_special',90],
				[321,[0,1],'surf_special',10],
				[73,[0,1],'surf',30],
				[131,[0,1],'surf',5],
				[279,[0,1],'surf',20],
				[alternateForm(423,1),[0,1],'surf',20],
				[457,[0,1],'surf',25],
				[129,[0,1],'fish',79],
				[320,[0,1],'fish',20],
				[369,[0,1],'fish',1],
				[129,[0,1],'fish_special',50],
				[320,[0,1],'fish_special',40],
				[369,[0,1],'fish_special',10],
				[457,[0,1],['sos_ally',73]],
				[130,[0,1],['sos_ally',129]],
				[321,[0,1],['sos_ally',320]],
				[503,[0,1],['grass','friday','island_scan']]
			]
		},{
			name:['Ancient Poni Path','Vieille Route','Alter Pfad von Poni','Via Antica di Poni','Antiguo Paso de Poni'],encounters:[
				[alternateForm(20,1),[0,1],'grass',[,30]],
				[102,[0,1],'grass',10],
				[210,[0,1],'grass',20],
				[279,[0,1],'grass',30],
				[alternateForm(423,1),[0,1],'grass',10],
				[735,[0,1],'grass',[30]],
				[500,[0,1],['grass','saturday','island_scan']]
			]
		},{
			name:['Poni Breaker Coast','Récif de Poni','Felsenküste von Poni','Scogliera di Poni','Arrecife de Poni'],encounters:[
				[767,[0,1],'chase',100],
				[129,[0,1],'fish',79],
				[130,[0,1],['sos_ally',129]],
				[321,[0,1],['sos_ally',320]],
				[319,[0,1],'fish',1],
				[320,[0,1],'fish',20],
				[129,[0,1],'fish_special',50],
				[319,[0,1],'fish_special',10],
				[320,[0,1],'fish_special',40]
			]
		},{
			name:['Ruins of Hope','Ruines de l\'Au-Delà','Ruinen der Heimkehr','Tempio del Passaggio','Ruinas del Tránsito'],encounters:[
				[788,[0,1],'interact']
			]
		},{
			name:['Exeggutor Island','Île Noadkoko','Kokowei-Eiland','Isola Exeggutor','Isla Exeggutor'],encounters:[
				[102,[0,1],'grass',40],
				[alternateForm(103,1),[0,1],'grass',20],
				[279,[0,1],'grass',30],
				[alternateForm(423,1),[0,1],'grass',10],
				[705,[0,1],['sos_ally_weather','rain'],10],
				[351,[0,1],['sos_ally_weather','rain',],1],
				[351,[0,1],['sos_ally_weather','hail','sandstorm'],10],
				[alternateForm(103,1),[0,1],'interact'],
				[497,[0,1],['grass','thursday','island_scan']]
			]
		},{
			name:['Vast Poni Canyon','Grand Canyon de Poni','Canyon von Poni','Canyon di Poni','Cañón de Poni'],encounters:[
				[67,[0,1],'grass',30],
				[198,[0,1],'grass',10],
				[227,[0,1],'grass',10],
				[525,[0,1],'grass',10],
				[703,[0,1],'grass',15],
				[745,[0,1],'grass',[20]],
				[alternateForm(745,1),[0,1],'grass',[,20]],
				[782,[0,1],'grass',5],
				[784,[0,1],['sos_ally',782]],
				[783,[0,1],['sos_ally',782]],
				[42,[0,1],'cave',30],
				[alternateForm(51,1),[0,1],'cave',20],
				[525,[0,1],'cave',30],
				[703,[0,1],'cave',20],
				[302,[0,1],['sos_ally',703]],
				[alternateForm(51,1),[0,1],'dust_cloud',100],
				[42,[0,1],'surf',80],
				[55,[0,1],'surf',20],
				[129,[0,1],'fish',59],
				[147,[0,1],'fish',1],
				[339,[0,1],'fish',40],
				[129,[0,1],'fish_special',50],
				[147,[0,1],'fish_special',10],
				[339,[0,1],'fish_special',40],
				[130,[0,1],['sos_ally',129]],
				[148,[0,1],['sos_ally',147]],
				[340,[0,1],['sos_ally',339]]
			]
		},{
			name:['Lake of the Sunne','Lac du Halo Solaire','Sonnenkreis-See','Lago Solare','Lago Corosol'],encounters:[
				[789,0,'gift']
			]
		},{
			name:['Lake of the Moone','Lac du Halo Lunaire','Mondscheiben-See','Lago Lunare','Lago Coroluna'],encounters:[
				[789,1,'gift']
			]
		},{
			name:['Poni Grove','Forêt de Poni','Wald von Poni','Foresta di Poni','Bosque de Poni'],encounters:[
				[alternateForm(20,1),[0,1],'grass',[,30]],
				[127,[0,1],'grass',10],
				[210,[0,1],'grass',20],
				[447,[0,1],'grass',10],
				[448,[0,1],['sos_ally',447]],
				[113,[0,1],['sos_ally',447]],
				[732,[0,1],'grass',30],
				[735,[0,1],'grass',[30]],
				[604,[0,1],['grass','sunday','island_scan']]
			]
		},{
			name:['Poni Plains','Plaine de Poni','Ebene von Poni','Prateria di Poni','Llanura de Poni'],encounters:[
				[128,[0,1],'grass',10],
				[241,[0,1],'grass',10],
				[546,0,'grass',20],
				[548,1,'grass',20],
				{group:['Center',,,,'Centro'],encounters:[
					[alternateForm(20,1),[0,1],'grass',[,30]],
					[732,[0,1],'grass',30],
					[735,[0,1],'grass',[30]]
				]},
				{group:['Around central tree',,,,'Alrededor de árbol central'],encounters:[
					[alternateForm(20,1),[0,1],'grass',[,30]],
					[97,[0,1],'grass',20],
					[732,[0,1],'grass',10],
					[735,[0,1],'grass',[30]]
				]},
				{group:['By the mountains',,,,'Cerca de la montaña'],encounters:[
					[alternateForm(20,1),[0,1],'grass',[,10]],
					[22,[0,1],'grass',20],
					[732,[0,1],'grass',10],
					[735,[0,1],'grass',[10]],
					[750,[0,1],'grass',20]
				]},
				{group:'east',encounters:[
					[alternateForm(20,1),[0,1],'grass',[,30]],
					[279,[0,1],'grass',20],
					[732,[0,1],'grass',10],
					[735,[0,1],'grass',[30]]
				]},
				[241,[0,1],['sos_ally',128]],
				[128,[0,1],['sos_ally',241]],
				[alternateForm(20,1),[0,1],'grass_rustling',[,70]],
				[297,[0,1],'grass_rustling',30],
				[735,[0,1],'grass_rustling',[70]],
				[22,[0,1],'shadow',70],
				[628,0,'shadow',30],
				[630,1,'shadow',30],
				[57,[0,1],'rustling_tree',80],
				[587,[0,1],'rustling_tree',20],
				[123,[0,1],'bush',30],
				[546,0,'bush',70],
				[548,1,'bush',70],
				[739,[0,1],'berry_pile',100],
				[534,[0,1],['grass','monday','island_scan']]
			]
		},{
			name:['Poni Meadow','Jardin de Poni','Poni-Blumenmeer','Prato Poni','Jardines de Poni'],encounters:[
				[546,0,'grass',50],
				[548,1,'grass',50],
				[alternateForm(741,3),[0,1],'grass',20],
				[743,[0,1],'grass',30],
				[129,[0,1],'fish',59],
				[130,[0,1],['sos_ally',129]],
				[148,[0,1],['sos_ally',147]],
				[340,[0,1],['sos_ally',339]],
				[147,[0,1],'fish',1],
				[339,[0,1],'fish',40],
				[129,[0,1],'fish_special',50],
				[147,[0,1],'fish_special',10],
				[339,[0,1],'fish_special',40],
				[542,[0,1],['grass','wednesday','island_scan']]
			]
		},{
			name:['Resolution Cave','Caverne Coda','Finalhöhle','Caverna Climax','Gruta Desenlace'],encounters:[
				[42,[0,1],'cave',70],
				[alternateForm(51,1),[0,1],'cave',30],
				[169,[0,1],['sos_ally',42]],
				[799,[0,1],'cave']
			]
		},{
			name:['Poni Coast','Côte de Poni','Küste von Poni','Costa di Poni','Costa de Poni'],encounters:[
				[alternateForm(51,1),[0,1],'dust_cloud',100]
			]
		},{
			name:['Poni Gauntlet','Chemin du Défi','Beschwerlicher Pfad','Erta di Poni','Pendiente de Poni'],encounters:[
				[alternateForm(20,1),[0,1],'grass',[,30]],
				[55,[0,1],'grass',15],
				[210,[0,1],'grass',20],
				[279,[0,1],'grass',30],
				[735,[0,1],'grass',[30]],
				[760,[0,1],'grass',5],
				[129,[0,1],'fish',59],
				[130,[0,1],['sos_ally',129]],
				[148,[0,1],['sos_ally',147]],
				[149,[0,1],['sos_ally',147]],
				[340,[0,1],['sos_ally',339]],
				[147,[0,1],'fish',1],
				[339,[0,1],'fish',40],
				[129,[0,1],'fish_special',50],
				[147,[0,1],'fish_special',10],
				[339,[0,1],'fish_special',40],
				[663,[0,1],['trade',760]],
				[468,[0,1],['grass','tuesday','island_scan']]
			]
		},{
			name:['Mount Lanakila','Mont Lanakila',,'Monte Lanakila','Monte Lanakila'],encounters:[
				{group:'exterior',encounters:[
					[alternateForm(27,1),1,'grass',30],
					[alternateForm(37,1),0,'grass',30],
					[215,[0,1],'grass',20],
					[359,[0,1],'grass',20],
					[361,[0,1],'grass',30],
					[362,[0,1],['sos_ally',361]],
					[583,[0,1],['sos_ally_weather','hail'],10],
					[351,[0,1],['sos_ally_weather','hail'],1],
					[351,[0,1],['sos_ally_weather','rain','sandstorm'],10]
				]},
				{group:'interior',encounters:[
					[42,[0,1],'cave',30],
					[215,[0,1],'cave',20],
					[359,0,'cave',20],
					[359,1,'cave',10],
					[361,[0,1],'cave',30],
					[362,[0,1],['sos_ally',361]],
					[780,1,'cave',10]
				]}
			]
		},{
			name:['Altar of the Sunne','Autel du Soleil','Sonnenkreis-Podium','Altare Solare','Altar del Sol'],encounters:[
				[791,0,'interact']
			]
		},{
			name:['Altar of the Moone','Autel de la Lune','Mondscheiben-Podium','Altare Lunare','Altar de la Luna'],encounters:[
				[792,1,'interact']
			]
		},{
			name:['Ruins of Abundance','Ruines de l\'Essor','Ruinen des Gedeihens','Tempio del Raccolto','Ruinas de la Cosecha'],encounters:[
				[787,[0,1],'interact']
			]
		},{
			name:['Ruins of Conflict','Ruines du Conflit','Ruinen des Krieges','Tempio del Conflitto','Ruinas de la Guerra'],encounters:[
				[785,[0,1],'interact']
			]
		},{
			name:['Special Demo Version',,,,'Demo Especial'],encounters:[
				[alternateForm(658,1),[0,1],'gift']
			]
		},{
			name:['Poké Pelago','Poké Loisir','Pokémon-Resort','Poké Resort','Poké Resort'],encounters:[
				[21,[0,1],'gift',4.4],
				[41,[0,1],'gift',4.4],
				[60,[0,1],'gift',4.4],
				[64,[0,1],'gift',2.2],
				[81,[0,1],'gift',4.4],
				[90,[0,1],'gift',4.4],
				[92,[0,1],'gift',4.4],
				[120,[0,1],'gift',4.4],
				[123,[0,1],'gift',6.6],
				[127,[0,1],'gift',4.4],
				[131,[0,1],'gift',6.6],
				[198,[0,1],'gift',2.2],
				[227,[0,1],'gift',4.4],
				[278,[0,1],'gift',4.4],
				[375,[0,1],'gift',2.2],
				[426,[0,1],'gift',2.2],
				[429,[0,1],'gift',2.2],
				[587,[0,1],'gift',6.6],
				[627,0,'gift',2.2],
				[629,1,'gift',2.2],
				[661,[0,1],'gift',4.4],
				[703,[0,1],'gift',3.3],
				[707,[0,1],'gift',4.4],
				[709,[0,1],'gift',2.2],
				[731,[0,1],'gift',4.4],
				[771,[0,1],'gift',4.4]
			]
		}
	]
}