COMSCORE.SiteRecruit.Broker.config={sv:"scor",cddsDomains:"microsoftstore.com|windowsphone.com|xbox.com|adnxs.com|office.com",cddsInProgress:"cddsinprogress",domainSwitch:"tracking3p",domainMatch:"([\\da-z\.-]+\.com)",delay:0,cddsIntervalMax:10,crossDomainCheck:function(){if(this.cddsIntervalMax>1){this.cddsIntervalMax--;
if(COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue(this.cddsInProgress)!=false){setInterval(function(){COMSCORE.SiteRecruit.DDKeepAlive.setDDTrackerCookie();
},1000);COMSCORE.SiteRecruit._halt=true;this.clearCrossDomainCheck();}}else{this.clearCrossDomainCheck();
}},clearCrossDomainCheck:function(){window.clearInterval(crossDomainInterval);},isolateDomain:function(A){A=A.substring(A.indexOf("//")+2,A.length);
A=A.substring(0,A.indexOf("/"));return A;},testMode:false,addEventDelay:1000,cookie:{name:"msresearch",path:"/",domain:".microsoft.com",duration:90,rapidDuration:0,expireDate:""},tracker:{std:"",ssl:""},mobile:{match:"iphone|ipad|ipod|android|opera mini|blackberry|windows (phone|ce)|iemobile|htc|nokia|bb10|mobile safari|mobile|wpdesktop|lumia|playbook|tablet",kmatch:"(?:; ([^;)]+) Build/.*)?\bSilk/([0-9._-]+)\b(.*\bMobile Safari\b)?",halt:true},graceIncr:{name:"graceIncr",initDelay:0,clickDelay:5000,match:"^http(s)?://((account|accounts|billing|commerce|support|login|live|www).(live|microsoftstore|amazon|flipkart).(com|in))|silverleafsolutions.com|office.com/myaccount",altTag:"class",htmlMatch:"sign in|Se connecter|Anmelden|登入|サインイン|Přihlásit se|Zaloguj się|Oturum aç|היכנס"},prefixUrl:"",mapping:[
{m: 'microsoft.com/cs-cz/store', c: 'inv_c_p222566077-cs-cz.js', f: 0.5, p: 1 }
,{m: 'microsoft.com/de-de/store', c: 'inv_c_p222566077-de-de.js', f: 0.0333, p: 1 }
,{m: 'microsoft.com/en-au/store', c: 'inv_c_p222566077-en-au.js', f: 0.1046, p: 1 }
,{m: 'microsoft.com/en-gb/store', c: 'inv_c_p222566077-en-gb.js', f: 0.0262, p: 1 }
,{m: 'microsoft.com/en-sg/store', c: 'inv_c_p222566077-en-sg.js', f: 0.5, p: 1 }
,{m: 'microsoft.com/en-ca/store', c: 'inv_c_p222566077-en-ca.js', f: 0.0429, p: 1 }
,{m: 'microsoft.com/en-in/store', c: 'inv_c_p222566077-en-in.js', f: 0.0469, p: 1 }
,{m: 'microsoft.com/en-us/store', c: 'inv_c_p222566077-en-us.js', f: 0.0134, p: 1 }
,{m: 'microsoft.com/en-us/store', c: 'inv_c_p222566077-m-en-us.js', f: 0.0082, p: 5,prereqs:{content:[],cookie:[{'name':'srM','value':'1'} ]}}
,{m: 'microsoft.com/en-za/store', c: 'inv_c_p222566077-en-za.js', f: 0.5, p: 1 }
,{m: 'microsoft.com/fr-ca/store', c: 'inv_c_p222566077-fr-ca.js', f: 0.1736, p: 1 }
,{m: 'microsoft.com/fr-fr/store', c: 'inv_c_p222566077-fr-fr.js', f: 0.039, p: 1 }
,{m: 'microsoft.com/ja-jp/store', c: 'inv_c_p222566077-ja-jp.js', f: 0.0627, p: 1 }
,{m: 'microsoft.com/he-il/store', c: 'inv_c_p222566077-he-il.js', f: 0.5, p: 1 }
,{m: 'microsoft.com/pl-pl/store', c: 'inv_c_p222566077-pl-pl.js', f: 0.2359, p: 1 }
,{m: 'microsoft.com/tr-tr/store', c: 'inv_c_p222566077-tr-tr.js', f: 0.5, p: 1 }
,{m: 'microsoft.com/zh-tw/store', c: 'inv_c_p222566077-zh-tw.js', f: 0.2598, p: 1 }
,{m: 'cart|checkout|congrat', c: 'inv_c_blank.js', f: 0.0, p: 5, halt:true }
//,{m: 'microsoft.com/(cs-cz|de-de|en-sg|en-au|en-gb|en-ca|en-in|en-us|en-za|fr-ca|fr-fr|ja-jp|he-il|pl-pl|tr-tr|zh-tw)/store/buy/(cart|checkout|congrat)', c: 'inv_c_blank.js', f: 0.0, p: 5, halt:true }
],Events:{beforeRecruit:function(){var G=COMSCORE.SiteRecruit.Broker.config;
var K=COMSCORE.SiteRecruit.Utils.UserPersistence;
if(/cart|checkout|congrat/i.test(window.location)) {
  COMSCORE.SiteRecruit._halt=true;
}
if (/en\-us/i.test(window.location) && COMSCORE.SiteRecruit.device.type != 1) {
				G.mobile.halt = false;
				K.createCookie("srM", "1", + {path:'/',domain:G.cookie.domain,duration:'s'});
}
if(/cart|checkout|additem|interstitial/i.test(window.location)) {
 var cs_int = setInterval(function() {
 if(document.getElementById('order-help-order-id')) {
 if(document.getElementById('order-help-order-id').innerHTML && /\w+/i.test(document.getElementById('order-help-order-id').innerHTML)) {
   if(/checkout/i.test(window.location)){
    K.createCookie("CheckoutORDERID",document.getElementById('order-help-order-id').innerHTML,{path:"/",domain:G.cookie.domain,duration:"s"});
    clearInterval(cs_int);
   }else{
    K.createCookie("sr_orderNo",document.getElementById('order-help-order-id').innerHTML,{path:"/",domain:G.cookie.domain,duration:"s"});
   }
}}},1000);}
if(/additem|interstitial/i.test(window.location)) {
 var cs_int = setInterval(function() {
    COMSCORE.SiteRecruit.Broker.custom.allTags(G.graceIncr.altTag,"ember-view btn theme-default btn-primary cli-begin-checkout","Checkout|Validation|Kasse|Passer la commande|Passer à la caisse|結帳",2);
  },1000);
}
if(/(cs\-cz|pl\-pl|tr\-tr|he\-il)\/store/i.test(window.location)) {
 var cs_int = setInterval(function() {
    COMSCORE.SiteRecruit.Broker.custom.allTags(G.graceIncr.altTag,"btn theme-default btn-primary cli-begin-checkout ember-view","Pokladna|Finalizuj zakup|Alış verişi bitir|שלם",2);
  },1000);
}
if(/en\-in\/store/i.test(window.location)) {
 var cs_int = setInterval(function() {
    COMSCORE.SiteRecruit.Broker.custom.allTags(G.graceIncr.altTag,"c-button cli_pdp-buy-button cli_webblend store-override-primary-button","Buy|Join now",2);
  },1000);
}
if(/en\-in\/store\/p\/(earth-3d|minecraft-windows-10-edition)/i.test(window.location)) {
 var cs_int = setInterval(function() {
    COMSCORE.SiteRecruit.Broker.custom.allTags(G.graceIncr.altTag,"srv_purchaseButton get-link-adjustment c-call-to-action c-glyph","Get the app|Get the game",2);
  },1000);
}
if(/microsoftstore\.com\.cn/i.test(document.domain)){G.cookie.domain=".microsoftstore.com.cn";
G.tracker.std="http://www.microsoftstore.com.cn/SiteRecruit_Tracker.htm";G.tracker.ssl="https://www.microsoftstore.com.cn/SiteRecruit_Tracker.htm";
}else{if(/microsoftstore\.com\.hk/i.test(document.domain)){G.cookie.domain=".microsoftstore.com.hk";
G.tracker.std="http://www.microsoftstore.com.hk/SiteRecruit_Tracker.htm";G.tracker.ssl="https://www.microsoftstore.com.hk/SiteRecruit_Tracker.htm";
}else{if(/microsoftstore\.com\.tw/i.test(document.domain)){G.cookie.domain=".microsoftstore.com.tw";
G.tracker.std="http://www.microsoftstore.com.tw/SiteRecruit_Tracker.htm";G.tracker.ssl="https://www.microsoftstore.com.tw/SiteRecruit_Tracker.htm";
}}}if(typeof _TM!=="undefined"){if(/checkout/i.test(window.location)&&/cart/i.test(window.location)){var H=document.getElementsByTagName("p");
var D,N,F;for(var L=0,M=H.length;L<M;L++){if(/(Your order number)|(Order \#)/i.test(H[L].innerHTML)){if(/(\d+)/i.test(H[L].innerHTML)){D=RegExp.$1;
}}}N=_TM.sku?_TM.sku:"none";F=_TM.pnames?_TM.pnames:"none";K.createCookie("srCO","onum="+D+"---sku="+N+"---pnames="+F,{path:"/",domain:G.cookie.domain,duration:"s"});
}if(typeof _TM.checkoutType!=="undefined"){if(/guest/i.test(_TM.checkoutType)){K.createCookie("srCT","guest",{path:"/",domain:G.cookie.domain,duration:"s"});
}else{if(/msa/i.test(_TM.checkoutType)){K.createCookie("srCT","msa",{path:"/",domain:G.cookie.domain,duration:"s"});
}}}if(typeof _TM.pagetype!=="undefined"){if(/Checkout_Order_Thank_You/i.test(_TM.pagetype)){K.createCookie("srPT","1",+{path:"/",domain:G.cookie.domain,duration:"s"});
}}K.createCookie("srTM","ll="+_TM.ll+",geo="+_TM.geo,{path:"/",domain:G.cookie.domain,duration:"s"});
}if(/id=ThankYouPage/i.test(window.location.toString())){K.createCookie("srPT","1",+{path:"/",domain:G.cookie.domain,duration:"s"});
}if(/en\_us/i.test(window.location)&&COMSCORE.SiteRecruit.device.type!=1){K.createCookie("srM","1",+{path:"/",domain:G.cookie.domain,duration:"s"});
}var J=document.body,E=J.attributes,A=[];for(var L=0,I=E.length;L<I;L++){var C=E[L];
if(C.nodeName=="class"){if(/deferred\-popup/i.test(C.nodeValue)){COMSCORE.SiteRecruit._halt=true;
}}}if(/%E6%94%AF%E6%8C%81%E4%B8%8E%E5%B8%AE%E5%8A%A9/i.test(window.location)||/VDKDR1/i.test(document.cookie)){COMSCORE.SiteRecruit._halt=true;
}COMSCORE.SiteRecruit.Broker.custom={captlinks:function(Q){var P=K.getCookieValue("captlinks");
var O="";if(P==false){O=escape(Q)+";";}else{if(O.length+P.length<1440){O=P+escape(Q)+";";
}}if(O!=""){K.createCookie("captlinks",O,{path:"/",domain:G.cookie.domain,duration:"s"});
}},allTags:function(S,U,T,R){if(S=="class"){if(/msie (8|7)/i.test(navigator.userAgent)){return;
}var O=document.getElementsByClassName(U);}else{var O=document.getElementsByTagName(S);
}var P=new RegExp(T,"i");for(var Q=0;Q<O.length;Q++){if((S=="a"&&P.test(O[Q].href))||(S=="class"&&P.test(O[Q].innerHTML))){if(O[Q].addEventListener){if(R==1){if(!(/privacystatement/i.test(O[Q].href))){O[Q].addEventListener("click",function(V){if(P.test(this.href)){K.createCookie(G.domainSwitch,G.isolateDomain(this.href),{path:"/",domain:G.cookie.domain,duration:"s"});
}},false);}}else{if(R==2){ var gVal=2;if(S=="class"||/silverleafsolutions|amazon|flipkart|myaccount/i.test(G.graceIncr.match)){ gVal=1;} O[Q].addEventListener("click",function(V){ K.createCookie("graceIncr",gVal,{path:"/",domain:G.cookie.domain,duration:"s"});
},false);}else{if(R==3&&COMSCORE.isDDInProgress()){O[Q].addEventListener("click",function(V){COMSCORE.SiteRecruit.Broker.custom.captlinks(this.href);
},false);}}}}else{hrefURL=O[Q].href;if(R==1){if(!(/privacystatement/i.test(hrefURL))){O[Q].attachEvent("onclick",function(){K.createCookie(G.domainSwitch,G.isolateDomain(hrefURL),{path:"/",domain:G.cookie.domain,duration:"s"});
});}}else{if(R==2){ var gVal=2;if(S=="class"||/silverleafsolutions|amazon|flipkart|myaccount/i.test(G.graceIncr.match)){ gVal=1;} O[Q].attachEvent("onclick",function(){K.createCookie("graceIncr",gVal,{path:"/",domain:G.cookie.domain,duration:"s"});});
}else{if(R==3&&COMSCORE.isDDInProgress()){O[Q].attachEvent("onclick",function(){COMSCORE.SiteRecruit.Broker.custom.captlinks(this.href);
});}}}}}}},_TMIntervalCheck:function(){if(typeof _TM!=="undefined"){if(typeof _TM.checkoutType!=="undefined"){if(/guest/i.test(_TM.checkoutType)){var O="sr_guest=1; path=/; domain="+document.domain;
document.cookie=O;}else{if(/msa/i.test(_TM.checkoutType)){var O="sr_msa=1; path=/; domain="+document.domain;
document.cookie=O;}}}if(typeof _TM.pagetype!=="undefined"){if(/Checkout_Order_Thank_You/i.test(_TM.pagetype)){var O="sr_hpurchase=1; path=/; domain="+document.domain;
document.cookie=O;clear_TMIntervalCheck();}}}if(/id=ThankYouPage/i.test(window.location.toString())){var O="sr_hpurchase=1; path=/; domain="+document.domain;
document.cookie=O;clear_TMIntervalCheck();}},clear_TMIntervalCheck:function(){window.clearInterval(_TMInterval);
},};var B=0;if(COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue("graceIncr")!=0){B=5000;
}setTimeout(function(){COMSCORE.SiteRecruit.Utils.UserPersistence.createCookie("graceIncr",0,{path:"/",domain:G.cookie.domain,duration:"s"});
},B);setTimeout(function(){COMSCORE.SiteRecruit.Broker.custom.allTags("a","",G.cddsDomains,1);
},G.addEventDelay);setTimeout(function(){COMSCORE.SiteRecruit.Broker.custom.allTags("a","auth.alipay.com|www.silverleafsolutions.com|www.amazon.in|www.flipkart.com|office.com/myaccount",G.graceIncr.match,2);
},G.addEventDelay);setTimeout(function(){COMSCORE.SiteRecruit.Broker.custom.allTags(G.graceIncr.altTag,"msame_Header_name msame_TxtTrunc",G.graceIncr.htmlMatch,2);
},G.addEventDelay);setTimeout(function(){COMSCORE.SiteRecruit.Broker.custom.allTags(G.graceIncr.altTag,"ember-view btn theme-default btn-primary cli-begin-checkout","Checkout|Kasse|Passer la commande|Passer à la caisse|結帳|Join now|Buy",2);
},G.addEventDelay);setTimeout(function(){COMSCORE.SiteRecruit.Broker.custom.allTags(G.graceIncr.altTag,"btn theme-default btn-primary cli-begin-checkout ember-view","Pokladna|Finalizuj zakup|Alış verişi bitir|שלם",2);
},G.addEventDelay);setTimeout(function(){COMSCORE.SiteRecruit.Broker.custom.allTags(G.graceIncr.altTag,"c-button cli_pdp-buy-button cli_webblend store-override-primary-button","Buy|Join now",2);
},G.addEventDelay);setTimeout(function(){COMSCORE.SiteRecruit.Broker.custom.allTags(G.graceIncr.altTag,"srv_purchaseButton get-link-adjustment c-call-to-action c-glyph","Get the app|Get the game",2);
},G.addEventDelay);setTimeout(function(){COMSCORE.SiteRecruit.Broker.custom.allTags("a","","CheckOfferEligibility|ForceAVECheckout|DisplayEditProfilePage|DisplayThreePgCheckoutAddressPaymentInfoPage|msacademicverify|(o15.officeredir|office).microsoft.com|(cn|hk)/login|LiveLogin|office.com|(office|office.microsoft|live|skype|windowsphone|xbox|onedrive).com|(auth.alipay.com)|((www|windows).microsoft.com)",3);
},G.addEventDelay);}}};var crossDomainInterval=window.setInterval("COMSCORE.SiteRecruit.Broker.config.crossDomainCheck()","1000");
if(COMSCORE.SiteRecruit.Broker.delayConfig==true){COMSCORE.SiteRecruit.Broker.config.delay=5000;
}else{COMSCORE.SiteRecruit.Broker.config.delay=1000;}window.setTimeout("COMSCORE.SiteRecruit.Broker.run()",COMSCORE.SiteRecruit.Broker.config.delay);
