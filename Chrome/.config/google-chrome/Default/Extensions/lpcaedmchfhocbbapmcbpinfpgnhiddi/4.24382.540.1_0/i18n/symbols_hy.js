/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a=this||self,b=function(f,k){f=f.split(".");var e=a;f[0]in e||typeof e.execScript=="undefined"||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||k===void 0?e=e[g]&&e[g]!==Object.prototype[g]?e[g]:e[g]={}:e[g]=k};var c={i:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},h:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}};
c={i:{1E3:{other:"0\u00a0\u0570\u0566\u0580"},1E4:{other:"00\u00a0\u0570\u0566\u0580"},1E5:{other:"000\u00a0\u0570\u0566\u0580"},1E6:{other:"0\u00a0\u0574\u056c\u0576"},1E7:{other:"00\u00a0\u0574\u056c\u0576"},1E8:{other:"000\u00a0\u0574\u056c\u0576"},1E9:{other:"0\u00a0\u0574\u056c\u0580\u0564"},1E10:{other:"00\u00a0\u0574\u056c\u0580\u0564"},1E11:{other:"000\u00a0\u0574\u056c\u0580\u0564"},1E12:{other:"0\u00a0\u057f\u0580\u056c\u0576"},1E13:{other:"00\u00a0\u057f\u0580\u056c\u0576"},1E14:{other:"000\u00a0\u057f\u0580\u056c\u0576"}},
h:{1E3:{other:"0 \u0570\u0561\u0566\u0561\u0580"},1E4:{other:"00 \u0570\u0561\u0566\u0561\u0580"},1E5:{other:"000 \u0570\u0561\u0566\u0561\u0580"},1E6:{other:"0 \u0574\u056b\u056c\u056b\u0578\u0576"},1E7:{other:"00 \u0574\u056b\u056c\u056b\u0578\u0576"},1E8:{other:"000 \u0574\u056b\u056c\u056b\u0578\u0576"},1E9:{other:"0 \u0574\u056b\u056c\u056b\u0561\u0580\u0564"},1E10:{other:"00 \u0574\u056b\u056c\u056b\u0561\u0580\u0564"},1E11:{other:"000 \u0574\u056b\u056c\u056b\u0561\u0580\u0564"},1E12:{other:"0 \u057f\u0580\u056b\u056c\u056b\u0578\u0576"},
1E13:{other:"00 \u057f\u0580\u056b\u056c\u056b\u0578\u0576"},1E14:{other:"000 \u057f\u0580\u056b\u056c\u056b\u0578\u0576"}}};var d={la:"y",sa:"y G",ma:"MMM y",na:"MMMM y",ta:"MM/y",K:"MMM d",L:"MMMM dd",N:"M/d",M:"MMMM d",qa:"MMM d, y",ja:"EEE, MMM d",ra:"EEE, MMM d, y",o:"d",pa:"MMM d, h:mm\u202fa zzzz"};d={la:"y",sa:"G y \u0569.",ma:"y \u0569. LLL",na:"y \u0569\u2024 LLLL",ta:"MM.y",K:"d MMM",L:"MMMM dd",N:"dd.MM",M:"MMMM d",qa:"d MMM, y \u0569.",ja:"d MMM, EEE",ra:"y \u0569. MMM d, EEE",o:"d",pa:"d MMM, HH:mm zzzz"};var h={B:["BC","AD"],A:["Before Christ","Anno Domini"],P:"JFMAMJJASOND".split(""),ca:"JFMAMJJASOND".split(""),J:"January February March April May June July August September October November December".split(" "),ba:"January February March April May June July August September October November December".split(" "),Y:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ea:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ia:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ga:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),aa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),fa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),R:"SMTWTFS".split(""),da:"SMTWTFS".split(""),Z:["Q1","Q2","Q3","Q4"],W:["1st quarter","2nd quarter","3rd quarter","4th quarter"],g:["AM","PM"],l:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],ha:["h:mm:ss\u202fa zzzz","h:mm:ss\u202fa z","h:mm:ss\u202fa","h:mm\u202fa"],m:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],D:6,ka:[5,
6],F:5};
h={B:["\u0574.\u0569.\u0561.","\u0574.\u0569."],A:["\u0554\u0580\u056b\u057d\u057f\u0578\u057d\u056b\u0581 \u0561\u057c\u0561\u057b","\u0554\u0580\u056b\u057d\u057f\u0578\u057d\u056b\u0581 \u0570\u0565\u057f\u0578"],P:"\u0540\u0553\u0544\u0531\u0544\u0540\u0540\u0555\u054d\u0540\u0546\u0534".split(""),ca:"\u0540\u0553\u0544\u0531\u0544\u0540\u0540\u0555\u054d\u0540\u0546\u0534".split(""),J:"\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b \u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b \u0574\u0561\u0580\u057f\u056b \u0561\u057a\u0580\u056b\u056c\u056b \u0574\u0561\u0575\u056b\u057d\u056b \u0570\u0578\u0582\u0576\u056b\u057d\u056b \u0570\u0578\u0582\u056c\u056b\u057d\u056b \u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b \u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b \u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b \u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b \u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split(" "),ba:"\u0570\u0578\u0582\u0576\u057e\u0561\u0580 \u0583\u0565\u057f\u0580\u057e\u0561\u0580 \u0574\u0561\u0580\u057f \u0561\u057a\u0580\u056b\u056c \u0574\u0561\u0575\u056b\u057d \u0570\u0578\u0582\u0576\u056b\u057d \u0570\u0578\u0582\u056c\u056b\u057d \u0585\u0563\u0578\u057d\u057f\u0578\u057d \u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580 \u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580 \u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580 \u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split(" "),
Y:"\u0570\u0576\u057e \u0583\u057f\u057e \u0574\u0580\u057f \u0561\u057a\u0580 \u0574\u0575\u057d \u0570\u0576\u057d \u0570\u056c\u057d \u0585\u0563\u057d \u057d\u0565\u057a \u0570\u0578\u056f \u0576\u0578\u0575 \u0564\u0565\u056f".split(" "),ea:"\u0570\u0576\u057e \u0583\u057f\u057e \u0574\u0580\u057f \u0561\u057a\u0580 \u0574\u0575\u057d \u0570\u0576\u057d \u0570\u056c\u057d \u0585\u0563\u057d \u057d\u0565\u057a \u0570\u0578\u056f \u0576\u0578\u0575 \u0564\u0565\u056f".split(" "),ia:"\u056f\u056b\u0580\u0561\u056f\u056b \u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b \u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b \u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b \u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b \u0578\u0582\u0580\u0562\u0561\u0569 \u0577\u0561\u0562\u0561\u0569".split(" "),
ga:"\u056f\u056b\u0580\u0561\u056f\u056b \u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b \u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b \u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b \u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b \u0578\u0582\u0580\u0562\u0561\u0569 \u0577\u0561\u0562\u0561\u0569".split(" "),aa:"\u056f\u056b\u0580 \u0565\u0580\u056f \u0565\u0580\u0584 \u0579\u0580\u0584 \u0570\u0576\u0563 \u0578\u0582\u0580 \u0577\u0562\u0569".split(" "),
fa:"\u056f\u056b\u0580 \u0565\u0580\u056f \u0565\u0580\u0584 \u0579\u0580\u0584 \u0570\u0576\u0563 \u0578\u0582\u0580 \u0577\u0562\u0569".split(" "),R:"\u053f\u0535\u0535\u0549\u0540\u0548\u0547".split(""),da:"\u053f\u0535\u0535\u0549\u0540\u0548\u0547".split(""),Z:["1-\u056b\u0576 \u0565\u057c\u0574\u057d.","2-\u0580\u0564 \u0565\u057c\u0574\u057d.","3-\u0580\u0564 \u0565\u057c\u0574\u057d.","4-\u0580\u0564 \u0565\u057c\u0574\u057d."],W:["1-\u056b\u0576 \u0565\u057c\u0561\u0574\u057d\u0575\u0561\u056f",
"2-\u0580\u0564 \u0565\u057c\u0561\u0574\u057d\u0575\u0561\u056f","3-\u0580\u0564 \u0565\u057c\u0561\u0574\u057d\u0575\u0561\u056f","4-\u0580\u0564 \u0565\u057c\u0561\u0574\u057d\u0575\u0561\u056f"],g:["AM","PM"],l:["y \u0569. MMMM d, EEEE","dd MMMM, y \u0569.","dd MMM, y \u0569.","dd.MM.yy"],ha:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],m:["{1}, {0}","{1}, {0}","{1}, {0}","{1}, {0}"],D:0,ka:[5,6],F:6};var l={u:".",G:",",S:"%",oa:"0",V:"+",I:"-",C:"E",U:"\u2030",H:"\u221e",O:"NaN",s:"#,##0.###",X:"#E0",T:"#,##0%",j:"\u00a4#,##0.00",v:"USD"};l={u:",",G:"\u00a0",S:"%",oa:"0",V:"+",I:"-",C:"E",U:"\u2030",H:"\u221e",O:"\u0548\u0579\u0539",s:"#,##0.###",X:"#E0",T:"#,##0%",j:"#,##0.00\u00a0\u00a4",v:"AMD"};b("I18N_DATETIMESYMBOLS_ERAS",h.B);b("I18N_DATETIMESYMBOLS_ERANAMES",h.A);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.P);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.ca);b("I18N_DATETIMESYMBOLS_MONTHS",h.J);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.ba);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.Y);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.ea);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.ia);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.ga);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.aa);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.fa);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.R);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.da);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.Z);b("I18N_DATETIMESYMBOLS_QUARTERS",h.W);b("I18N_DATETIMESYMBOLS_AMPMS",h.g);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.l);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.ha);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.m);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.D);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ka);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.F);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.la);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.ma);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.na);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.K);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.L);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.N);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.M);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.ja);b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.o);
h.ua!==void 0&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.ua);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.u);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.G);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.S);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.oa);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.V);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.I);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.C);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.U);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.H);b("I18N_NUMBERFORMATSYMBOLS_NAN",l.O);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.s);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.X);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.T);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.j);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.v);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.i);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.h);
