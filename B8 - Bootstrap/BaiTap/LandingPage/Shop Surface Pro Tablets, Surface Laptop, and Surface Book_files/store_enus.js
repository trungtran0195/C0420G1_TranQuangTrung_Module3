!(function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)})([(function(e,t,n){function i(){function e(e){var t=n(140),i=[t];i.push(n(142)),i.push(n(148)),i.push(n(151)),i.push(n(154)),i.push(n(156)),i.push(n(166)),i.push(n(170)),i.push(n(173)),i.push(n(176)),i.push(n(180)),i.push(n(184)),i.push(n(188)),i.push(n(193)),i.push(n(195)),i.push(n(196)),i.push(n(199)),i.push(n(203)),i.push(n(207)),i.push(n(208)),g.initialize({clientData:e,plugins:i})}function t(e,t,n){return"/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",e).replace("__PROJECT_ID__",t).replace("__PREVIEW_LAYER_IDS__",n.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0)}window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin");var i=n(1);i.initialize();var r=n(74),a=n(11),o=n(17);n(85);var s=o.get("stores/directive"),u=n(83);if(!u.isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var c,l=n(87),d=n(90),f=n(91),p={"layers": [{"holdback": 0, "activation": {}, "integrationSettings": {"clicktale": {}}, "integrationStringVersion": 2, "viewIds": ["8386951810"], "experiments": [{"weightDistributions": [{"entityId": "8743974866", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "[CLONED 100% Challenger] Office Category: Original vs In-Page Sub-Category [13170949] - AdamG", "bucketingStrategy": null, "variations": [{"id": "8780161728", "actions": [{"viewId": "8386951810", "changes": [{"dependencies": [], "type": "custom_code", "id": "8383B5C9-909B-4613-8D42-D16BDB60A569", "value": function($){var utils = window['optimizely'].get('utils');

utils.waitUntil(function() {
  if(window.jQuery) return true;
}).then(function() { 
	var $ = jQuery;

	// HOME OR PERSONAL
	jQuery('#ContentPlacement1Region div[data-grid="col-4 pad-6x"]:nth-child(1) section.m-content-placement-item').on('click', function(){ 
	    window['optimizely'].push({
	      type: "event",
	      eventName: "store_us_cat_homeorpersonal"
	    });
	});
	// BUSINESS
	jQuery('#ContentPlacement1Region div[data-grid="col-4 pad-6x"]:nth-child(2) section.m-content-placement-item').on('click', function(){ 
	    window['optimizely'].push({
	      type: "event",
	      eventName: "store_us_cat_business"
	    });
	});

	// STUDENTS OR EDUCATORS
	jQuery('#ContentPlacement1Region div[data-grid="col-4 pad-6x"]:nth-child(3) section.m-content-placement-item').on('click', function(){ 
	    window['optimizely'].push({
	      type: "event",
	      eventName: "store_us_cat_studentoreducators"
	    });
	});

	// FOR MAC	    
	jQuery('#ContentPlacement2Region div[data-grid="col-4 pad-6x"]:nth-child(1) section.m-content-placement-item').on('click', function(){ 
	    window['optimizely'].push({
	      type: "event",
	      eventName: "store_us_cat_formac"
	    });
	});

	// RENEW    
	jQuery('#ContentPlacement2Region div[data-grid="col-4 pad-6x"]:nth-child(2) section.m-content-placement-item').on('click', function(){ 
	    window['optimizely'].push({
	      type: "event",
	      eventName: "store_us_cat_renew"
	    });
	});
});
}}]}], "name": "Original"}, {"id": "8743974866", "actions": [{"viewId": "8386951810", "changes": [{"dependencies": [], "type": "custom_code", "id": "835C9B90-F031-4F43-AA17-69FB0AF37485", "value": function($){var htmlTag = document.getElementsByTagName('html')[0];
htmlTag.className += (htmlTag.className ? ' ' : '') + 'exp-office-sub-category';

jQuery('head').append('<link rel="stylesheet" href="//statics-onestore-wcus-ms-com.akamaized.net/en-us/store/_scrf/css/themes=store-web-default.device=uplevel_web_pc_webkit_chrome/9c-63a440/f7-e5901a/36-9da61d/80-94f1da/49-b72cf7/ad-f27762/5a-35b57b/9d-08cdc0/33-c045b2/76-bfbbeb/db-525717/48-83e822/30-29a033/78-78f760/db-901841/5f-bf04f8/65-a45147/d3-db40ac/d5-edafd8/f7-deb19e?ver=2.0" type="text/css" media="all">');

var officelHtmlFor5Pages = ['<div class="tab-content-officeforhomeorpersonal show" data-m="{&quot;cN&quot;:&quot;ExpOfficeTabOfficeForHomeOrPersonal&quot;}">',
'<div id="OptionalCompareChartV2Region-1" class="pad-compare-chart" data-region-key="optionalcomparechartv2region-1" data-grid="container" data-m="{&quot;cN&quot;:&quot;OptionalCompareChartV2Region-1 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r2a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-comparechartv2-mcgwhf1" data-m="{&quot;cN&quot;:&quot;compareChartV2 1&quot;,&quot;cT&quot;:&quot;Module_coreui-comparechartv2&quot;,&quot;id&quot;:&quot;m1r2a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r2a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;1dn8mh1&quot;}}" data-module-id="Office Sub-Category Page|OptionalCompareChartV2Region-1|OptionalCompareChartV2Region-1|coreui-comparechartv2-mcgwhf1|coreui-comparechartv2">',
'<div data-grid="col-12" class="m-compare-chart" style="display: block;">',
'<section>',
'<div class="f-column" data-grid="col-3">',
'<div class="f-row" style="height: 366px;">',
'<section itemscope="itemscope" itemtype="http://schema.org/Product" class="m-product-placement-item f-size-medium context-app f-clean" style="width:auto">',
'<a data-m="{&quot;cS&quot;:&quot;DisplayCatalog&quot;,&quot;cN&quot;:&quot;compare-picture&quot;,&quot;cT&quot;:&quot;pdp&quot;,&quot;id&quot;:&quot;n1m1r2a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="/en-us/store/p/office-365-home/cfq7ttc0k5dm">',
'<div class="f-default-image">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1iIy?ver=b54f&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1iIy?ver=b54f&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyload" alt="Office 365 Home" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1iIy?ver=b54f&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1iIy?ver=b54f&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f">',
'</picture>',
'</div>',
'</a>',
'<div>',
'<h3 class="c-heading-4">Office 365 Home</h3>',
'<div class="c-rating" data-value="4" data-max="5" itemscope="itemscope" itemtype="https://schema.org/AggregateRating">',
'<p class="x-screen-reader">',
'Rating: <span itemprop="ratingValue">4</span>/<span itemprop="bestRating">5</span>',
'</p>',
'<div></div>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$99.99 per year</span>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$9.99 per month</span>',
'</div>',
'</div>',
'</section>',
'<button data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n2m1r2a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;m1r2a2&quot;}" name="button" class="c-button" onclick="location.href=\'/en-us/store/p/office-365-home/cfq7ttc0k5dm\'">',
'Shop now',
'</button>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 44px;">',
'<p class="c-paragraph-0">Save 16% with a yearly subscription.</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 84px;">',
'<p class="c-paragraph-3">Best for households. Includes always up-to-date Office applications and extra OneDrive storage for up to 5 users.<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 64px;">',
'<p class="c-paragraph-3">Fully installed Office on your PCs, Macs, tablets, and phones <br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 188px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="Word app icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Excel app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Powerpoint app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="OneNote app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Outlook app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Publisher app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Access app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4"></p><div>Word, Excel, PowerPoint, OneNote, &#8203;Outlook, Publisher (PC only), Access (PC only) </div><div><br></div><div> </div><div><sup>Application availability and features vary by device, platform, and language. Publisher and Access are available on PC only.</sup></div><p></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 128px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="OneDrive app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Skype icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4"></p><div>1TB OneDrive cloud storage per user </div><div>60 minutes per month Skype calls per user[1]</div><p></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 368px;">',
'<b>Subscription benefits for 5 users:</b><br>',
'<ul class="c-list">',
'<li>Annual or monthly subscription available</li>',
'<li>Install on 5 PCs or Macs, 5 tablets, and 5 phones</li>',
'<li>1TB OneDrive cloud storage per user for up to 5 users</li>',
'<li>Applications are always up to date, plus exclusive new features</li>',
'<li>Microsoft support via chat or phone at no extra cost</li>',
'<li>Skype calls to mobile phones and landlines, includes 60 minutes per month per user, for up to 5 users[1]</li>',
'</ul>',
'</div>',
'</div>',
'<div class="f-column" data-grid="col-3">',
'<div class="f-row" style="height: 366px;">',
'<section itemscope="itemscope" itemtype="http://schema.org/Product" class="m-product-placement-item f-size-medium context-app f-clean" style="width:auto">',
'<a data-m="{&quot;cS&quot;:&quot;DisplayCatalog&quot;,&quot;cN&quot;:&quot;compare-picture&quot;,&quot;cT&quot;:&quot;pdp&quot;,&quot;id&quot;:&quot;n3m1r2a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="/en-us/store/p/office-365-personal/cfq7ttc0k5bf">',
'<div class="f-default-image">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyload" alt="Office 365 Personal" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f">',
'</picture>',
'</div>',
'</a>',
'<div>',
'<h3 class="c-heading-4">Office 365 Personal</h3>',
'<div class="c-rating" data-value="4" data-max="5" itemscope="itemscope" itemtype="https://schema.org/AggregateRating">',
'<p class="x-screen-reader">',
'Rating: <span itemprop="ratingValue">3.9</span>/<span itemprop="bestRating">5</span>',
'</p>',
'<div></div>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$69.99 per year</span>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$6.99 per month</span>',
'</div>',
'</div>',
'</section>',
'<button data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n4m1r2a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;m1r2a2&quot;}" name="button" class="c-button" onclick="location.href=\'/en-us/store/p/office-365-personal/cfq7ttc0k5bf\'">',
'Shop now',
'</button>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 44px;">',
'<p class="c-paragraph-0">Save 16% with a yearly subscription. </p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 84px;">',
'<p class="c-paragraph-3">Best for individuals. Includes always up-to-date Office applications and extra OneDrive storage for 1 user.<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 64px;">',
'<p class="c-paragraph-3">Fully installed Office on your PC or Mac, tablet, and phone<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 188px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="Word app icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Excel app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Powerpoint app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="OneNote app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Outlook app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Publisher app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Access app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4"></p><div>Word, Excel, PowerPoint, OneNote, &#8203;Outlook, Publisher (PC only), Access (PC only) </div><div><br></div><div> </div><div><sup>Application availability and features vary by device, platform, and language. Publisher and Access are available on PC only.</sup></div><p></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 128px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="OneDrive app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Skype icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4"></p><div>1TB OneDrive cloud storage </div><div>60 minutes per month Skype calls[1]</div><p></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 368px;">',
'<b>Subscription benefits for 1 user:</b><br>',
'<ul class="c-list">',
'<li>Annual or monthly subscription available</li>',
'<li>Install on 1 PC or Mac, 1 tablet, and 1 phone</li>',
'<li>1TB OneDrive cloud storage</li>',
'<li>Applications are always up to date, plus exclusive new features</li>',
'<li>Microsoft support via chat or phone at no extra cost</li>',
'<li>Skype calls to mobile phones and landlines, includes 60 minutes per month[1]</li>',
'</ul>',
'</div>',
'</div>',
'<div class="f-column" data-grid="col-3">',
'<div class="f-row" style="height: 366px;">',
'<section itemscope="itemscope" itemtype="http://schema.org/Product" class="m-product-placement-item f-size-medium context-app f-clean" style="width:auto">',
'<a data-m="{&quot;cS&quot;:&quot;DisplayCatalog&quot;,&quot;cN&quot;:&quot;compare-picture&quot;,&quot;cT&quot;:&quot;pdp&quot;,&quot;id&quot;:&quot;n5m1r2a2&quot;,&quot;sN&quot;:5,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="/en-us/store/p/office-home-student-2016-for-pc/cfq7ttc0k5fc">',
'<div class="f-default-image">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1duh?ver=3326&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1duh?ver=3326&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyload" alt="Office Home &amp; Student 2016" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1duh?ver=3326&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1duh?ver=3326&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f">',
'</picture>',
'</div>',
'</a>',
'<div>',
'<h3 class="c-heading-4">Office Home &amp; Student 2016 for PC</h3>',
'<div class="c-rating" data-value="3.5" data-max="5" itemscope="itemscope" itemtype="https://schema.org/AggregateRating">',
'<p class="x-screen-reader">',
'Rating: <span itemprop="ratingValue">3.7</span>/<span itemprop="bestRating">5</span>',
'</p>',
'<div></div>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$149.99</span>',
'</div>',
'</div>',
'</section>',
'<button data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n6m1r2a2&quot;,&quot;sN&quot;:6,&quot;aN&quot;:&quot;m1r2a2&quot;}" name="button" class="c-button" onclick="location.href=\'/en-us/store/p/office-home-student-2016-for-pc/cfq7ttc0k5fc\'">',
'Shop now',
'</button>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 44px;">',
'<p class="c-paragraph-0">--</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 84px;">',
'<p class="c-paragraph-3">For individuals who want basic Office applications for 1 user on 1 Windows PC<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 64px;">',
'<p class="c-paragraph-3">Fully installed Office on your PC<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 188px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="Word app icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Excel app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Powerpoint app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="OneNote app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4"> Word, Excel, PowerPoint, OneNote<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 128px;">',
'<p class="c-paragraph-3">&nbsp;</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 368px;">',
'<b>Benefits for 1 user:</b><br>',
'<ul class="c-list">',
'<li>Install on 1 Windows PC</li>',
'<li>Upgrades not included</li>',
'</ul>',
'</div>',
'</div>',
'<div class="f-column" data-grid="col-3">',
'<div class="f-row" style="height: 366px;">',
'<section itemscope="itemscope" itemtype="http://schema.org/Product" class="m-product-placement-item f-size-medium context-app f-clean" style="width:auto">',
'<a data-m="{&quot;cS&quot;:&quot;DisplayCatalog&quot;,&quot;cN&quot;:&quot;compare-picture&quot;,&quot;cT&quot;:&quot;pdp&quot;,&quot;id&quot;:&quot;n7m1r2a2&quot;,&quot;sN&quot;:7,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="/en-us/store/p/office-home-student-2016-for-mac/cfq7ttc0k5fb">',
'<div class="f-default-image">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10FR?ver=da39&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10FR?ver=da39&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyload" alt="Office Home &amp; Student 2016 for Mac" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10FR?ver=da39&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10FR?ver=da39&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f">',
'</picture>',
'</div>',
'</a>',
'<div>',
'<h3 class="c-heading-4">Office Home &amp; Student 2016 for Mac</h3>',
'<div class="c-rating" data-value="3" data-max="5" itemscope="itemscope" itemtype="https://schema.org/AggregateRating">',
'<p class="x-screen-reader">',
'Rating: <span itemprop="ratingValue">2.9</span>/<span itemprop="bestRating">5</span>',
'</p>',
'<div></div>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$149.99</span>',
'</div>',
'</div>',
'</section>',
'<button data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n8m1r2a2&quot;,&quot;sN&quot;:8,&quot;aN&quot;:&quot;m1r2a2&quot;}" name="button" class="c-button" onclick="location.href=\'/en-us/store/p/office-home-student-2016-for-mac/cfq7ttc0k5fb\'">',
'Shop now',
'</button>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 44px;">',
'<p class="c-paragraph-0">--</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 84px;">',
'<p class="c-paragraph-3">For individuals who want basic Office applications for 1 user on 1 Mac<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 64px;">',
'<p class="c-paragraph-3">Fully installed Office on your Mac<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 188px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="Word app icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Excel app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Powerpoint app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="OneNote app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4">Word, Excel, PowerPoint, OneNote</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 128px;">',
'<p class="c-paragraph-3">&nbsp;</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 368px;">',
'<b>Benefits for 1 user:</b><br>',
'<ul class="c-list">',
'<li>Install on 1 Mac</li>',
'<li>Upgrades not included</li>',
'</ul>',
'</div>',
'</div>',
'</section>',
'</div>',
'</div>',
'</div>',
'<div id="ValuePropContentPlacementRegion" class="pad-content-placement" data-region-key="valuepropcontentplacementregion" data-grid="container" data-m="{&quot;cN&quot;:&quot;ValuePropContentPlacementRegion 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r3a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-contentplacement-397o7fu" data-m="{&quot;cN&quot;:&quot;ValuePropContentPlacement 1&quot;,&quot;cT&quot;:&quot;Module_coreui-contentplacement&quot;,&quot;id&quot;:&quot;m1r3a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r3a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;kitwju7&quot;}}" data-module-id="Office Sub-Category Page|ValuePropContentPlacementRegion|ValuePropContentPlacementRegion|coreui-contentplacement-397o7fu|coreui-contentplacement">',
'<header class="m-heading-4">',
'<h2 class="c-heading">Get started with Office</h2>',
'</header>',
'<div class="m-content-placement" data-grid="col-12">',
'<div data-grid="col-12 stack-3">',
'<div data-grid="col-6 pad-6x">',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="contact us get live help" href="https://support.microsoft.com/en-us/contactus/" data-m="{&quot;cN&quot;:&quot;CONTACT US&quot;,&quot;id&quot;:&quot;n1m1r3a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;m1r3a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class=" lazyload" alt="Live support icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Get live help</h3>            <div class="c-paragraph"><p>Need help choosing the right Office? Questions about installation? We\'re here to help.</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="contact us get live help" data-m="{&quot;cN&quot;:&quot;CONTACT US&quot;,&quot;id&quot;:&quot;n2m1r3a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;m1r3a2&quot;}" href="https://support.microsoft.com/en-us/contactus/">',
'<span>CONTACT US</span>',
'</a>',
'</section>',
'</div>',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="learn more satisfaction guaranteed" href="https://support.microsoft.com/en-us/products/store?category=returns-refunds?Cat-Officeforhome-marketing_2-satisfactionguaranteed-051717-US" data-m="{&quot;cN&quot;:&quot;LEARN MORE&quot;,&quot;id&quot;:&quot;n3m1r3a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;m1r3a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class=" lazyload" alt="Woman working in office on Surface Book" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Satisfaction guaranteed</h3>            <div class="c-paragraph"><p>Cancel your Office 365 subscription at any time, or return within 30 days of purchase for a full refund.<br></p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="learn more satisfaction guaranteed" data-m="{&quot;cN&quot;:&quot;LEARN MORE&quot;,&quot;id&quot;:&quot;n4m1r3a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;m1r3a2&quot;}" href="https://support.microsoft.com/en-us/products/store?category=returns-refunds?Cat-Officeforhome-marketing_2-satisfactionguaranteed-051717-US">',
'<span>LEARN MORE</span>',
'</a>',
'</section>',
'</div>',
'</div>',
'<div data-grid="col-6 pad-6x">',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="renew now renew your subscription" href="https://www.microsoft.com/en-us/store/b/officerenewal?Cat-Officeforhome-marketing_3-renew-051717-U" data-m="{&quot;cN&quot;:&quot;RENEW NOW&quot;,&quot;id&quot;:&quot;n5m1r3a2&quot;,&quot;sN&quot;:5,&quot;aN&quot;:&quot;m1r3a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class=" lazyload" alt="Office renew icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Renew your subscription</h3>            <div class="c-paragraph"><p>Renew Office 365 today and you won\'t lose any remaining time on your existing subscription.</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="renew now renew your subscription" data-m="{&quot;cN&quot;:&quot;RENEW NOW&quot;,&quot;id&quot;:&quot;n6m1r3a2&quot;,&quot;sN&quot;:6,&quot;aN&quot;:&quot;m1r3a2&quot;}" href="https://www.microsoft.com/en-us/store/b/officerenewal?Cat-Officeforhome-marketing_3-renew-051717-U">',
'<span>RENEW NOW</span>',
'</a>',
'</section>',
'</div>',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="see plans and pricing get office 365 for your business" href="https://products.office.com/en-us/compare-all-microsoft-office-products?tab=2&amp;Cat-Office-subNav_1-SMBofficebusiness-062117-en_US" data-m="{&quot;cN&quot;:&quot;SEE PLANS AND PRICING&quot;,&quot;id&quot;:&quot;n7m1r3a2&quot;,&quot;sN&quot;:7,&quot;aN&quot;:&quot;m1r3a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbxsq?ver=45a6&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbxsq?ver=45a6&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbxsq?ver=45a6&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbxsq?ver=45a6&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbxsq?ver=45a6&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbxsq?ver=45a6&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbxsq?ver=45a6&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbxsq?ver=45a6&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbxsq?ver=45a6&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbxsq?ver=45a6&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbxsq?ver=45a6&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbxsq?ver=45a6&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class=" lazyload" alt="A man working on his laptop at work using Office" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbxsq?ver=45a6&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbxsq?ver=45a6&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Get Office 365 for your business</h3>            <div class="c-paragraph"><p>Always up-to-date Office apps, plus world class security and services.</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="see plans and pricing get office 365 for your business" data-m="{&quot;cN&quot;:&quot;SEE PLANS AND PRICING&quot;,&quot;id&quot;:&quot;n8m1r3a2&quot;,&quot;sN&quot;:8,&quot;aN&quot;:&quot;m1r3a2&quot;}" href="https://products.office.com/en-us/compare-all-microsoft-office-products?tab=2&amp;Cat-Office-subNav_1-SMBofficebusiness-062117-en_US">',
'<span>SEE PLANS AND PRICING</span>',
'</a>',
'</section>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>',
'<div id="OptionalSeoTitleRegion" class="pad-heading-1" data-region-key="optionalseotitleregion" data-grid="container" data-m="{&quot;cN&quot;:&quot;OptionalSeoTitleRegion 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r4a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-heading-vzljd4t" data-m="{&quot;cN&quot;:&quot;SeoTitle 1&quot;,&quot;cT&quot;:&quot;Module_coreui-heading&quot;,&quot;id&quot;:&quot;m1r4a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r4a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;ggplfk7&quot;}}" data-module-id="Office Sub-Category Page|OptionalSeoTitleRegion|OptionalSeoTitleRegion|coreui-heading-vzljd4t|coreui-heading">',
'<header class="m-heading-1">',
'<h2 class="c-heading-4">Office 365</h2>',
'</header>',
'</div>',
'</div>',
'<div id="OptionalSeoTextRegion" class="pad-rich-content-block" data-region-key="optionalseotextregion" data-grid="container" data-m="{&quot;cN&quot;:&quot;OptionalSeoTextRegion 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r5a2&quot;,&quot;sN&quot;:5,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-contentrichblock-rqkc4er" data-m="{&quot;cN&quot;:&quot;Seo Text 1&quot;,&quot;cT&quot;:&quot;Module_coreui-contentrichblock&quot;,&quot;id&quot;:&quot;m1r5a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r5a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;tjfcv90&quot;}}" data-module-id="Office Sub-Category Page|OptionalSeoTextRegion|OptionalSeoTextRegion|coreui-contentrichblock-rqkc4er|coreui-contentrichblock">',
'<div data-grid="col-12" class="m-rich-content-block context-ucx x-hidden-focus">',
'Microsoft Office 365 now includes Office 2016 and gives you the full Microsoft Office experience. With access to the latest Office applications as well as other cloud-based productivity services, whether you need Office for home, school, or business, there is an Office 365 plan to meet your needs. <br><br>Our Office 365 subscription plans include Office 365 Home, Office 365 Personal, Office 365 University and Office 365 for Mac. With each plan, you can install the 2016 versions of Word, Excel, PowerPoint, Outlook, and OneNote (Access, and Publisher are also included only for PC users). When a new version of Microsoft Office is released, you’ll get instant access to it so your applications are always up-to-date - and because Office 365 is optimized across your devices it\'s easy to get anywhere access to your stuff on your laptop, phone, tablet and more. <br><br>Along with the latest software, you\'ll also get 1TB of OneDrive cloud storage, which lets you keep documents in one place, and access them anywhere on any device, making it easier than ever to create, edit, and share your documents on the go. In addition, Office 365 subscribers will get 60 minutes of Skype calling per month so you can stay in touch with friends and colleagues around the globe. Best of all, you can get tech support from the Microsoft Answer Desk experts, by phone or chat - at no extra charge. <br><br>Office 365 Home lets you install Office on up to 5 PCs or Macs, as well as 5 Windows, Android, or iPad tablets - an ideal solution for homes with more than one user. See the latest Microsoft Office 365 subscriptions, and do more everywhere. <br><br>[1] Skype account required. Excludes special, premium and non-geographic numbers. Calls to phones are for select countries only. Skype minutes available in select countries. See <a href="https://support.office.com/" class="c-hyperlink" style="background-color: rgb(255, 255, 255);">FAQ</a> for details.',
'</div>',
'</div>',
'</div>',
'</div>',

























'<div class="tab-content-officeforbusiness" data-m="{&quot;cN&quot;:&quot;ExpOfficeTabOfficeForBusiness&quot;}">',
'<div id="OptionalContentPlacementRegion1" class="pad-content-placement" data-region-key="optionalcontentplacementregion1" data-grid="container" data-m="{&quot;cN&quot;:&quot;OptionalContentPlacementRegion1 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r2a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-contentplacement-ckjkvc3" data-m="{&quot;cN&quot;:&quot;OptionalContentPlacement1 1&quot;,&quot;cT&quot;:&quot;Module_coreui-contentplacement&quot;,&quot;id&quot;:&quot;m1r2a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r2a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;bt6ydjy&quot;}}" data-module-id="Office Sub-Category Page|OptionalContentPlacementRegion1|OptionalContentPlacementRegion1|coreui-contentplacement-ckjkvc3|coreui-contentplacement">',
'<header class="m-heading-4">',
'<h2 class="c-heading">Always up-to-date Office 365 solutions for your growing business</h2>',
'</header>',
'<div class="m-content-placement" data-grid="col-12">',
'<div data-grid="col-12 stack-2">',
'<div data-grid="col-4 pad-6x">',
'<div data-grid="col-12">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="shop now office 365 business" href="https://products.office.com/en-us/business/office-365-business" data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n1m1r2a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;m1r2a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcu?ver=148e&amp;q=90&amp;m=6&amp;h=276&amp;w=491&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcu?ver=148e&amp;q=90&amp;m=6&amp;h=276&amp;w=491&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcu?ver=148e&amp;q=90&amp;m=6&amp;h=405&amp;w=720&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcu?ver=148e&amp;q=90&amp;m=6&amp;h=405&amp;w=720&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcu?ver=148e&amp;q=90&amp;m=6&amp;h=180&amp;w=321&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcu?ver=148e&amp;q=90&amp;m=6&amp;h=180&amp;w=321&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcu?ver=148e&amp;q=90&amp;m=6&amp;h=214&amp;w=380&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcu?ver=148e&amp;q=90&amp;m=6&amp;h=214&amp;w=380&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcu?ver=148e&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcu?ver=148e&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcu?ver=148e&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcu?ver=148e&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class=" lazyload" alt="Office 365 Business" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcu?ver=148e&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcu?ver=148e&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Office 365 Business</h3>            <div class="c-paragraph"><p>• Business-class email not included <br>• HD video conferencing not included <br>• Desktop versions of Outlook, Word, Excel, PowerPoint, OneNote, plus Access and Publisher for PC only<br>• 1TB of OneDrive storage<br>• Starting from $8.25 user/month on office365.com</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="shop now office 365 business" data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n2m1r2a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="https://products.office.com/en-us/business/office-365-business">',
'<span>SHOP NOW</span>',
'</a>',
'</section>',
'</div>',
'</div>',
'<div data-grid="col-4 pad-6x">',
'<div data-grid="col-12">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="shop now office 365 business premium" href="https://products.office.com/en-us/business/office-365-business-premium" data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n3m1r2a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;m1r2a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcs?ver=ec71&amp;q=90&amp;m=6&amp;h=276&amp;w=491&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcs?ver=ec71&amp;q=90&amp;m=6&amp;h=276&amp;w=491&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcs?ver=ec71&amp;q=90&amp;m=6&amp;h=405&amp;w=720&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcs?ver=ec71&amp;q=90&amp;m=6&amp;h=405&amp;w=720&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcs?ver=ec71&amp;q=90&amp;m=6&amp;h=180&amp;w=321&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcs?ver=ec71&amp;q=90&amp;m=6&amp;h=180&amp;w=321&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcs?ver=ec71&amp;q=90&amp;m=6&amp;h=214&amp;w=380&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcs?ver=ec71&amp;q=90&amp;m=6&amp;h=214&amp;w=380&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcs?ver=ec71&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcs?ver=ec71&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcs?ver=ec71&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcs?ver=ec71&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class=" lazyload" alt="Office 365 Business Premium" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcs?ver=ec71&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbMcs?ver=ec71&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Office 365 Business Premium</h3>            <div class="c-paragraph"><p>• Business-class email with 50GB mailbox<br>• HD video conferencing <br>• Desktop versions of Outlook, Word, Excel, PowerPoint, OneNote, plus Access and Publisher for PC only<br>• 1TB of OneDrive storage<br>• Starting from $12.50 user/month on office365.com</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="shop now office 365 business premium" data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n4m1r2a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="https://products.office.com/en-us/business/office-365-business-premium">',
'<span>SHOP NOW</span>',
'</a>',
'</section>',
'</div>',
'</div>',
'<div data-grid="col-4 pad-6x">',
'<div data-grid="col-12">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="shop now office 365 business essentials" href="https://products.office.com/en-us/business/office-365-business-essentials" data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n5m1r2a2&quot;,&quot;sN&quot;:5,&quot;aN&quot;:&quot;m1r2a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbZap?ver=1774&amp;q=90&amp;m=6&amp;h=276&amp;w=491&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbZap?ver=1774&amp;q=90&amp;m=6&amp;h=276&amp;w=491&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbZap?ver=1774&amp;q=90&amp;m=6&amp;h=405&amp;w=720&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbZap?ver=1774&amp;q=90&amp;m=6&amp;h=405&amp;w=720&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbZap?ver=1774&amp;q=90&amp;m=6&amp;h=180&amp;w=321&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbZap?ver=1774&amp;q=90&amp;m=6&amp;h=180&amp;w=321&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbZap?ver=1774&amp;q=90&amp;m=6&amp;h=214&amp;w=380&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbZap?ver=1774&amp;q=90&amp;m=6&amp;h=214&amp;w=380&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbZap?ver=1774&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbZap?ver=1774&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbZap?ver=1774&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbZap?ver=1774&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class=" lazyload" alt="Office 365 Business essentionals " src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbZap?ver=1774&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbZap?ver=1774&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Office 365 Business Essentials</h3>            <div class="c-paragraph"><p>• Business-class email with 50GB mailbox<br>• HD video conferencing <br>• Desktop Office applications not included<br>• 1TB of OneDrive storage<br>• Starting from $5.00 user/month on office365.com</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="shop now office 365 business essentials" data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n6m1r2a2&quot;,&quot;sN&quot;:6,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="https://products.office.com/en-us/business/office-365-business-essentials">',
'<span>SHOP NOW</span>',
'</a>',
'</section>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>',
'<div id="OptionalContentPlacementRegion2" class="pad-content-placement" data-region-key="optionalcontentplacementregion2" data-grid="container" data-m="{&quot;cN&quot;:&quot;OptionalContentPlacementRegion2 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r3a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-contentplacement-mgvwkg0" data-m="{&quot;cN&quot;:&quot;OptionalContentPlacement2 1&quot;,&quot;cT&quot;:&quot;Module_coreui-contentplacement&quot;,&quot;id&quot;:&quot;m1r3a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r3a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;qer5sj7&quot;}}" data-module-id="Office Sub-Category Page|OptionalContentPlacementRegion2|OptionalContentPlacementRegion2|coreui-contentplacement-mgvwkg0|coreui-contentplacement">',
'<header class="m-heading-4">',
'<h2 class="c-heading">Other Office products for professionals and home based businesses</h2>',
'</header>',
'<div class="m-content-placement" data-grid="col-12">',
'<div data-grid="col-12 stack-2">',
'<div data-grid="col-4 pad-6x">',
'<div data-grid="col-12">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="shop now office home &amp; business 2016 for pc" href="https://www.microsoft.com/en-us/store/d/office-home-business-2016/cfq7ttc0k5ff?icid=OfficeH_B_080317-en_US" data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n1m1r3a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;m1r3a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRkc?ver=0062&amp;q=90&amp;m=6&amp;h=276&amp;w=491&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRkc?ver=0062&amp;q=90&amp;m=6&amp;h=276&amp;w=491&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRkc?ver=0062&amp;q=90&amp;m=6&amp;h=405&amp;w=720&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRkc?ver=0062&amp;q=90&amp;m=6&amp;h=405&amp;w=720&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRkc?ver=0062&amp;q=90&amp;m=6&amp;h=180&amp;w=321&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRkc?ver=0062&amp;q=90&amp;m=6&amp;h=180&amp;w=321&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRkc?ver=0062&amp;q=90&amp;m=6&amp;h=214&amp;w=380&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRkc?ver=0062&amp;q=90&amp;m=6&amp;h=214&amp;w=380&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRkc?ver=0062&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRkc?ver=0062&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRkc?ver=0062&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRkc?ver=0062&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class=" lazyload" alt="Office Home and Business 2016 for PC" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRkc?ver=0062&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRkc?ver=0062&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Office Home &amp; Business 2016 for PC</h3>            <div class="c-paragraph"><p>$229.99<br>• Fully installed versions of Outlook, Word, Excel, PowerPoint, and OneNote<br>• For 1 PC<br>• Store files in the cloud with OneDrive</p><p><br>Compatible with Windows 7 or later<br>All languages included</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="shop now office home &amp; business 2016 for pc" data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n2m1r3a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;m1r3a2&quot;}" href="https://www.microsoft.com/en-us/store/d/office-home-business-2016/cfq7ttc0k5ff?icid=OfficeH_B_080317-en_US">',
'<span>SHOP NOW</span>',
'</a>',
'</section>',
'</div>',
'</div>',
'<div data-grid="col-4 pad-6x">',
'<div data-grid="col-12">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="shop now office home &amp; business 2016 for mac" href="https://www.microsoft.com/en-us/store/d/office-home-business-2016-for-mac/cfq7ttc0k5fd?icid=OfficeH_BMac_080317-en_US" data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n3m1r3a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;m1r3a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRk9?ver=18c9&amp;q=90&amp;m=6&amp;h=276&amp;w=491&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRk9?ver=18c9&amp;q=90&amp;m=6&amp;h=276&amp;w=491&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRk9?ver=18c9&amp;q=90&amp;m=6&amp;h=405&amp;w=720&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRk9?ver=18c9&amp;q=90&amp;m=6&amp;h=405&amp;w=720&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRk9?ver=18c9&amp;q=90&amp;m=6&amp;h=180&amp;w=321&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRk9?ver=18c9&amp;q=90&amp;m=6&amp;h=180&amp;w=321&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRk9?ver=18c9&amp;q=90&amp;m=6&amp;h=214&amp;w=380&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRk9?ver=18c9&amp;q=90&amp;m=6&amp;h=214&amp;w=380&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRk9?ver=18c9&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRk9?ver=18c9&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRk9?ver=18c9&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRk9?ver=18c9&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class=" lazyload" alt="Office Home and Business 2016 for Mac" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRk9?ver=18c9&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbRk9?ver=18c9&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Office Home &amp; Business 2016 for Mac</h3>            <div class="c-paragraph"><p>$229.99<br>• Fully installed versions of Outlook, Word, Excel, PowerPoint, and OneNote<br>• For 1 Mac<br>• Store files in the cloud with OneDrive<br><br>Compatible with Mac OS X 10.10<br>All languages included</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="shop now office home &amp; business 2016 for mac" data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n4m1r3a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;m1r3a2&quot;}" href="https://www.microsoft.com/en-us/store/d/office-home-business-2016-for-mac/cfq7ttc0k5fd?icid=OfficeH_BMac_080317-en_US">',
'<span>SHOP NOW</span>',
'</a>',
'</section>',
'</div>',
'</div>',
'<div data-grid="col-4 pad-6x">',
'<div data-grid="col-12">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="shop now office professional 2016 for pc" href="https://www.microsoft.com/en-us/store/d/office-professional-2016/cfq7ttc0k5f8?icid=OfficeProf_080317-en_US" data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n5m1r3a2&quot;,&quot;sN&quot;:5,&quot;aN&quot;:&quot;m1r3a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbTXx?ver=c310&amp;q=90&amp;m=6&amp;h=276&amp;w=491&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbTXx?ver=c310&amp;q=90&amp;m=6&amp;h=276&amp;w=491&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbTXx?ver=c310&amp;q=90&amp;m=6&amp;h=405&amp;w=720&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbTXx?ver=c310&amp;q=90&amp;m=6&amp;h=405&amp;w=720&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbTXx?ver=c310&amp;q=90&amp;m=6&amp;h=180&amp;w=321&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbTXx?ver=c310&amp;q=90&amp;m=6&amp;h=180&amp;w=321&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbTXx?ver=c310&amp;q=90&amp;m=6&amp;h=214&amp;w=380&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbTXx?ver=c310&amp;q=90&amp;m=6&amp;h=214&amp;w=380&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbTXx?ver=c310&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbTXx?ver=c310&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbTXx?ver=c310&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbTXx?ver=c310&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class=" lazyload" alt="Office Professional 2016 for PC" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbTXx?ver=c310&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbTXx?ver=c310&amp;q=90&amp;m=6&amp;h=273&amp;w=485&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Office Professional 2016 for PC</h3>            <div class="c-paragraph"><p>$399.99<br>• Fully installed versions of Outlook, Publisher, Access, Word, Excel, PowerPoint, and OneNote<br>• For 1 PC<br>• Store files in the cloud with OneDrive<br><br>Compatible with Windows 7 or later<br>All languages included</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="shop now office professional 2016 for pc" data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n6m1r3a2&quot;,&quot;sN&quot;:6,&quot;aN&quot;:&quot;m1r3a2&quot;}" href="https://www.microsoft.com/en-us/store/d/office-professional-2016/cfq7ttc0k5f8?icid=OfficeProf_080317-en_US">',
'<span>SHOP NOW</span>',
'</a>',
'</section>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>',
'<div id="ValuePropContentPlacementRegion" class="pad-content-placement" data-region-key="valuepropcontentplacementregion" data-grid="container" data-m="{&quot;cN&quot;:&quot;ValuePropContentPlacementRegion 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r4a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-contentplacement-f6f103h" data-m="{&quot;cN&quot;:&quot;ValuePropContentPlacement 1&quot;,&quot;cT&quot;:&quot;Module_coreui-contentplacement&quot;,&quot;id&quot;:&quot;m1r4a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r4a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;9503ihq&quot;}}" data-module-id="Office Sub-Category Page|ValuePropContentPlacementRegion|ValuePropContentPlacementRegion|coreui-contentplacement-f6f103h|coreui-contentplacement">',
'<header class="m-heading-4">',
'<h2 class="c-heading">Get started with Office</h2>',
'</header>',
'<div class="m-content-placement" data-grid="col-12">',
'<div data-grid="col-12 stack-3">',
'<div data-grid="col-6 pad-6x">',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="contact us get live help" href="https://support.microsoft.com/en-us/contactus/?icid=Cat-Business-marketing_1-getlivehelp-051717-US" data-m="{&quot;cN&quot;:&quot;CONTACT US&quot;,&quot;id&quot;:&quot;n1m1r4a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;m1r4a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sAyu?ver=71eb&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sAyu?ver=71eb&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sAyu?ver=71eb&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sAyu?ver=71eb&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sAyu?ver=71eb&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sAyu?ver=71eb&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" alt="Training support icon" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sAyu?ver=71eb&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Get live help</h3>            <div class="c-paragraph"><p>Need help choosing the right Office? Questions about installation? We\'re here to help.</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="contact us get live help" data-m="{&quot;cN&quot;:&quot;CONTACT US&quot;,&quot;id&quot;:&quot;n2m1r4a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;m1r4a2&quot;}" href="https://support.microsoft.com/en-us/contactus/?icid=Cat-Business-marketing_1-getlivehelp-051717-US">',
'<span>CONTACT US</span>',
'</a>',
'</section>',
'</div>',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="learn more satisfaction guaranteed" href="https://support.microsoft.com/en-us/products/store?category=returns-refunds?icid=Cat-Business-marketing_2-satisfactionguaranteed-051717-US" data-m="{&quot;cN&quot;:&quot;LEARN MORE&quot;,&quot;id&quot;:&quot;n3m1r4a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;m1r4a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" alt="Woman working in office on Surface Book" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Satisfaction guaranteed</h3>            <div class="c-paragraph"><p>Cancel your Office 365 subscription at any time, or return within 30 days of purchase for a full refund.</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="learn more satisfaction guaranteed" data-m="{&quot;cN&quot;:&quot;LEARN MORE&quot;,&quot;id&quot;:&quot;n4m1r4a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;m1r4a2&quot;}" href="https://support.microsoft.com/en-us/products/store?category=returns-refunds?icid=Cat-Business-marketing_2-satisfactionguaranteed-051717-US">',
'<span>LEARN MORE</span>',
'</a>',
'</section>',
'</div>',
'</div>',
'<div data-grid="col-6 pad-6x">',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="compare enterprise plans looking for enterprise plans?" href="https://products.office.com/en-us/business/compare-more-office-365-for-business-plans?icid=Cat-Business-marketing_3-enterprise-051717-US" data-m="{&quot;cN&quot;:&quot;COMPARE ENTERPRISE PLANS&quot;,&quot;id&quot;:&quot;n5m1r4a2&quot;,&quot;sN&quot;:5,&quot;aN&quot;:&quot;m1r4a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW5hW2?ver=5164&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW5hW2?ver=5164&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW5hW2?ver=5164&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW5hW2?ver=5164&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW5hW2?ver=5164&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW5hW2?ver=5164&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW5hW2?ver=5164&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Looking for enterprise plans?</h3>            <div class="c-paragraph"><p>Move your business ahead and get the IT control and flexibility you need with Office 365 Enterprise.</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="compare enterprise plans looking for enterprise plans?" data-m="{&quot;cN&quot;:&quot;COMPARE ENTERPRISE PLANS&quot;,&quot;id&quot;:&quot;n6m1r4a2&quot;,&quot;sN&quot;:6,&quot;aN&quot;:&quot;m1r4a2&quot;}" href="https://products.office.com/en-us/business/compare-more-office-365-for-business-plans?icid=Cat-Business-marketing_3-enterprise-051717-US">',
'<span>COMPARE ENTERPRISE PLANS</span>',
'</a>',
'</section>',
'</div>',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="explore office support find training and support" href="https://support.office.com?icid=Cat-OfficeNew-marketing_4-training-051717-US" data-m="{&quot;cN&quot;:&quot;EXPLORE OFFICE SUPPORT&quot;,&quot;id&quot;:&quot;n7m1r4a2&quot;,&quot;sN&quot;:7,&quot;aN&quot;:&quot;m1r4a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" alt="Office install icon" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Find training and support</h3>            <div class="c-paragraph"><p>Get up to speed with new Office features, find tutorials, get help with installation, and more.</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="explore office support find training and support" data-m="{&quot;cN&quot;:&quot;EXPLORE OFFICE SUPPORT&quot;,&quot;id&quot;:&quot;n8m1r4a2&quot;,&quot;sN&quot;:8,&quot;aN&quot;:&quot;m1r4a2&quot;}" href="https://support.office.com?icid=Cat-OfficeNew-marketing_4-training-051717-US">',
'<span>EXPLORE OFFICE SUPPORT</span>',
'</a>',
'</section>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>',





















'<div class="tab-content-officeforstudents" data-m="{&quot;cN&quot;:&quot;ExpOfficeTabOfficeForStudents&quot;}">',
'<div id="OptionalCompareChartV2Region-1" class="pad-compare-chart" data-region-key="optionalcomparechartv2region-1" data-grid="container" data-m="{&quot;cN&quot;:&quot;OptionalCompareChartV2Region-1 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r2a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-comparechartv2-6552xth" data-m="{&quot;cN&quot;:&quot;compareChartV2 1&quot;,&quot;cT&quot;:&quot;Module_coreui-comparechartv2&quot;,&quot;id&quot;:&quot;m1r2a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r2a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;h3xq8ip&quot;}}" data-module-id="Office Sub-Category Page|OptionalCompareChartV2Region-1|OptionalCompareChartV2Region-1|coreui-comparechartv2-6552xth|coreui-comparechartv2">',
'<div data-grid="col-12" class="m-compare-chart" style="display: block;">',
'<section>',
'<div class="f-column" data-grid="col-3">',
'<div class="f-row" style="height: 366px;">',
'<section itemscope="itemscope" itemtype="http://schema.org/Product" class="m-product-placement-item f-size-medium context-app f-clean" style="width:auto">',
'<a data-m="{&quot;cS&quot;:&quot;DisplayCatalog&quot;,&quot;cN&quot;:&quot;compare-picture&quot;,&quot;cT&quot;:&quot;pdp&quot;,&quot;id&quot;:&quot;n1m1r2a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="/en-us/store/p/office-365-university/cfq7ttc0k5bb">',
'<div class="f-default-image">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6y5A?ver=bc57&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6y5A?ver=bc57&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyload" alt="Office 365 University" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6y5A?ver=bc57&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6y5A?ver=bc57&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f">',
'</picture>',
'</div>',
'</a>',
'<div>',
'<h3 class="c-heading-4">Office 365 University</h3>',
'<div class="c-rating" data-value="4" data-max="5" itemscope="itemscope" itemtype="https://schema.org/AggregateRating">',
'<p class="x-screen-reader">',
'Rating: <span itemprop="ratingValue">4.1</span>/<span itemprop="bestRating">5</span>',
'</p>',
'<div></div>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$79.99</span>',
'</div>',
'</div>',
'</section>',
'<button data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n2m1r2a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;m1r2a2&quot;}" name="button" class="c-button" onclick="location.href=\'/en-us/store/p/office-365-university/cfq7ttc0k5bb\'">',
'Shop now',
'</button>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 84px;">',
'<p class="c-paragraph-3">Exclusive 4-year subscription for eligible students and educators.<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 64px;">',
'<p class="c-paragraph-3">Fully',
'installed Office on your PCs, Macs, tablets, and phones <br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 188px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="Word app icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Excel app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Powerpoint app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="OneNote app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Outlook app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Publisher app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Access app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4"></p><div>Word, Excel, PowerPoint, OneNote, &#8203;Outlook, Publisher (PC only), Access (PC only)</div><div><br></div><div><sup>Application availability and features vary by device, platform, and language. Publisher and Access are available on PC only. </sup></div><p></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 128px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="OneDrive app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Skype icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4"></p><div>1TB OneDrive cloud storage   </div><div>60 minutes per month Skype calls[1]</div><p></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 328px;">',
'<b>Subscription',
'benefits for 1 user</b><br>',
'<ul class="c-list">',
'<li>4-year subscription</li>',
'<li>Install on 2 PCs or Macs, 2 tablets, and 2 phones</li>',
'<li>1TB OneDrive cloud storage</li>',
'<li>Applications are always up to date, plus exclusive new features</li>',
'<li>Microsoft support via chat or phone at no extra cost&nbsp;</li>',
'<li>Skype calls to mobile phones and landlines, includes 60 minutes per month[1]</li>',
'</ul>',
'</div>',
'</div>',
'<div class="f-column" data-grid="col-3">',
'<div class="f-row" style="height: 366px;">',
'<section itemscope="itemscope" itemtype="http://schema.org/Product" class="m-product-placement-item f-size-medium context-app f-clean" style="width:auto">',
'<a data-m="{&quot;cS&quot;:&quot;DisplayCatalog&quot;,&quot;cN&quot;:&quot;compare-picture&quot;,&quot;cT&quot;:&quot;pdp&quot;,&quot;id&quot;:&quot;n3m1r2a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="/en-us/store/p/office-365-personal/cfq7ttc0k5bf">',
'<div class="f-default-image">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyload" alt="Office 365 Personal" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f">',
'</picture>',
'</div>',
'</a>',
'<div>',
'<h3 class="c-heading-4">Office 365 Personal</h3>',
'<div class="c-rating" data-value="4" data-max="5" itemscope="itemscope" itemtype="https://schema.org/AggregateRating">',
'<p class="x-screen-reader">',
'Rating: <span itemprop="ratingValue">3.9</span>/<span itemprop="bestRating">5</span>',
'</p>',
'<div></div>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$69.99 per year</span>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$6.99 per month</span>',
'</div>',
'</div>',
'</section>',
'<button data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n4m1r2a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;m1r2a2&quot;}" name="button" class="c-button" onclick="location.href=\'/en-us/store/p/office-365-personal/cfq7ttc0k5bf\'">',
'Shop now',
'</button>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 84px;">',
'<p class="c-paragraph-3">Best',
'for individuals. Includes always up-to-date Office applications and extra',
'OneDrive storage for 1 user. <br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 64px;">',
'<p class="c-paragraph-3">Fully',
'installed Office on your PC or Mac, tablet, and phone<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 188px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="Word app icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Excel app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Powerpoint app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="OneNote app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Outlook app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Publisher app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Access app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4"></p><div>Word, Excel, PowerPoint, OneNote, &#8203;Outlook, Publisher (PC only), Access (PC only)</div><div><br></div><div><sup>Application availability and features vary by device, platform, and language. Publisher and Access are available on PC only. </sup></div><p></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 128px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="OneDrive app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Skype icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4"></p><div style="margin: 0in;"><div style="margin: 0in;">1TB OneDrive cloud storage  </div><div style="margin: 0in;">60 minutes per month Skype calls[1]</div></div><p></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 328px;">',
'<b>Subscription',
'benefits for 1 user</b><br>',
'<ul class="c-list">',
'<li>Annual or monthly subscription available&nbsp;</li>',
'<li>Install on 1 PC or Mac, 1 tablet, and 1 phone</li>',
'<li>1TB OneDrive cloud storage</li>',
'<li>Applications are always up to date, plus exclusive new features&nbsp;&nbsp;</li>',
'<li>Microsoft support via chat or phone at no extra cost</li>',
'<li>Skype calls to mobile phones and landlines, includes 60 minutes per month[1]</li>',
'</ul>',
'</div>',
'</div>',
'<div class="f-column" data-grid="col-3">',
'<div class="f-row" style="height: 366px;">',
'<section itemscope="itemscope" itemtype="http://schema.org/Product" class="m-product-placement-item f-size-medium context-app f-clean" style="width:auto">',
'<a data-m="{&quot;cS&quot;:&quot;DisplayCatalog&quot;,&quot;cN&quot;:&quot;compare-picture&quot;,&quot;cT&quot;:&quot;pdp&quot;,&quot;id&quot;:&quot;n5m1r2a2&quot;,&quot;sN&quot;:5,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="/en-us/store/p/office-home-student-2016-for-pc/cfq7ttc0k5fc">',
'<div class="f-default-image">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1duh?ver=3326&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1duh?ver=3326&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyload" alt="Office Home &amp; Student 2016" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1duh?ver=3326&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1duh?ver=3326&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f">',
'</picture>',
'</div>',
'</a>',
'<div>',
'<h3 class="c-heading-4">Office Home &amp; Student 2016 for PC</h3>',
'<div class="c-rating" data-value="3.5" data-max="5" itemscope="itemscope" itemtype="https://schema.org/AggregateRating">',
'<p class="x-screen-reader">',
'Rating: <span itemprop="ratingValue">3.7</span>/<span itemprop="bestRating">5</span>',
'</p>',
'<div></div>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$149.99</span>',
'</div>',
'</div>',
'</section>',
'<button data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n6m1r2a2&quot;,&quot;sN&quot;:6,&quot;aN&quot;:&quot;m1r2a2&quot;}" name="button" class="c-button" onclick="location.href=\'/en-us/store/p/office-home-student-2016-for-pc/cfq7ttc0k5fc\'">',
'Shop now',
'</button>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 84px;">',
'<p class="c-paragraph-3">For individuals who want basic Office applications for 1 user on 1 Windows PC<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 64px;">',
'<p class="c-paragraph-3">Fully installed Office on your PC  <br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 188px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="Word app icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Excel app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Powerpoint app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="OneNote app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4">Word, Excel, PowerPoint, OneNote<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 128px;">',
'<p class="c-paragraph-0">Not included</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 328px;">',
'<b>Benefits',
'for 1 user:</b><br>',
'<ul class="c-list">',
'<li>Install on 1 Windows PC</li>',
'<li>Upgrades not included&nbsp;</li>',
'</ul>',
'</div>',
'</div>',
'<div class="f-column" data-grid="col-3">',
'<div class="f-row" style="height: 366px;">',
'<section itemscope="itemscope" itemtype="http://schema.org/Product" class="m-product-placement-item f-size-medium context-app f-clean" style="width:auto">',
'<a data-m="{&quot;cS&quot;:&quot;DisplayCatalog&quot;,&quot;cN&quot;:&quot;compare-picture&quot;,&quot;cT&quot;:&quot;pdp&quot;,&quot;id&quot;:&quot;n7m1r2a2&quot;,&quot;sN&quot;:7,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="/en-us/store/p/office-home-student-2016-for-mac/cfq7ttc0k5fb">',
'<div class="f-default-image">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10FR?ver=da39&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10FR?ver=da39&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyload" alt="Office Home &amp; Student 2016 for Mac" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10FR?ver=da39&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10FR?ver=da39&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f">',
'</picture>',
'</div>',
'</a>',
'<div>',
'<h3 class="c-heading-4">Office Home &amp; Student 2016 for Mac</h3>',
'<div class="c-rating" data-value="3" data-max="5" itemscope="itemscope" itemtype="https://schema.org/AggregateRating">',
'<p class="x-screen-reader">',
'Rating: <span itemprop="ratingValue">2.9</span>/<span itemprop="bestRating">5</span>',
'</p>',
'<div></div>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$149.99</span>',
'</div>',
'</div>',
'</section>',
'<button data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n8m1r2a2&quot;,&quot;sN&quot;:8,&quot;aN&quot;:&quot;m1r2a2&quot;}" name="button" class="c-button" onclick="location.href=\'/en-us/store/p/office-home-student-2016-for-mac/cfq7ttc0k5fb\'">',
'Shop now',
'</button>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 84px;">',
'<p class="c-paragraph-3">For',
'individuals who want basic Office applications for 1 user on 1 Mac.<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 64px;">',
'<p class="c-paragraph-3">Fully',
'installed Office on your Mac<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 188px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="Word app icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Excel app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Powerpoint app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="OneNote app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4">Word, Excel, PowerPoint, OneNote<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 128px;">',
'<p class="c-paragraph-3">Not included</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 328px;">',
'<b>Benefits',
'for 1 user:</b><br>',
'<ul class="c-list">',
'<li>Install on 1 Mac</li>',
'<li>Upgrades not included</li>',
'</ul>',
'</div>',
'</div>',
'</section>',
'</div>',
'</div>',
'</div>',
'<div id="OptionalFeature3Region" class="pad-feature" data-region-key="optionalfeature3region" data-grid="container" data-m="{&quot;cN&quot;:&quot;OptionalFeature3Region 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r3a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-feature-1tx1p1k" data-m="{&quot;cN&quot;:&quot;Feature3 1&quot;,&quot;cT&quot;:&quot;Module_coreui-feature&quot;,&quot;id&quot;:&quot;m1r3a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r3a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;fxl22mf&quot;}}" class="m-feature" data-grid="col-12" data-module-id="Office Sub-Category Page|OptionalFeature3Region|OptionalFeature3Region|coreui-feature-1tx1p1k|coreui-feature">',
'<section class="c-feature f-align-left  ">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6KZN?ver=73ac&amp;q=90&amp;m=6&amp;h=303&amp;w=539&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;x=921&amp;y=352" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6KZN?ver=73ac&amp;q=90&amp;m=6&amp;h=431&amp;w=767&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;x=921&amp;y=352" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6KZN?ver=73ac&amp;q=90&amp;m=6&amp;h=406&amp;w=542&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;x=921&amp;y=352" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6KZN?ver=73ac&amp;q=90&amp;m=6&amp;h=472&amp;w=630&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;x=921&amp;y=352" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6KZN?ver=73ac&amp;q=90&amp;m=6&amp;h=450&amp;w=800&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;x=921&amp;y=352" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6KZN?ver=73ac&amp;q=90&amp;m=6&amp;h=450&amp;w=800&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;x=921&amp;y=352"><img class="lazyload" alt="Female student talking on phone in cafe" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6KZN?ver=73ac&amp;q=90&amp;m=6&amp;h=450&amp;w=800&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;x=921&amp;y=352">',
'</picture>',
'<div>',
'<h2 class="c-heading">Get Office 365 for free</h2>',
'<div class="c-paragraph"><p>It\'s not a trial! Students and teachers are eligible for Office 365 for Education, which includes Word, Excel, PowerPoint, OneNote, and now Microsoft Teams, plus additional classroom tools.</p></div>',
'<a class="c-call-to-action c-glyph" data-m="{&quot;cN&quot;:&quot;LEARN MORE&quot;,&quot;id&quot;:&quot;n1m1r3a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;m1r3a2&quot;}" href="https://products.office.com/en-us/student/office-in-education?icid=Cat-Officeforstudents-_feature-business-051717-en_US">',
'<span>LEARN MORE</span>',
'</a>',
'</div>',
'</section>',
'</div>',
'</div>',
'<div id="ValuePropContentPlacementRegion" class="pad-content-placement" data-region-key="valuepropcontentplacementregion" data-grid="container" data-m="{&quot;cN&quot;:&quot;ValuePropContentPlacementRegion 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r4a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-contentplacement-fsjmaxq" data-m="{&quot;cN&quot;:&quot;ValuePropContentPlacement 1&quot;,&quot;cT&quot;:&quot;Module_coreui-contentplacement&quot;,&quot;id&quot;:&quot;m1r4a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r4a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;m70cuea&quot;}}" data-module-id="Office Sub-Category Page|ValuePropContentPlacementRegion|ValuePropContentPlacementRegion|coreui-contentplacement-fsjmaxq|coreui-contentplacement">',
'<header class="m-heading-4">',
'<h2 class="c-heading">Get started with Office</h2>',
'</header>',
'<div class="m-content-placement" data-grid="col-12">',
'<div data-grid="col-12 stack-3">',
'<div data-grid="col-6 pad-6x">',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="contact us get live help" href="https://support.microsoft.com/en-us/contactus/" data-m="{&quot;cN&quot;:&quot;CONTACT US&quot;,&quot;id&quot;:&quot;n1m1r4a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;m1r4a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" alt="Live support icon" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Get live help</h3>            <div class="c-paragraph"><p>Need',
'help choosing the right Office? Questions about installation? We\'re here to',
'help. </p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="contact us get live help" data-m="{&quot;cN&quot;:&quot;CONTACT US&quot;,&quot;id&quot;:&quot;n2m1r4a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;m1r4a2&quot;}" href="https://support.microsoft.com/en-us/contactus/">',
'<span>CONTACT US</span>',
'</a>',
'</section>',
'</div>',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="learn more satisfaction guaranteed" href="https://support.microsoft.com/en-us/products/store?category=returns-refunds&amp;icid=Cat-Officeforstudents-marketing_2-satisfactionguaranteed-051717-US" data-m="{&quot;cN&quot;:&quot;LEARN MORE&quot;,&quot;id&quot;:&quot;n3m1r4a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;m1r4a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" alt="Woman working in office on Surface Book" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Satisfaction guaranteed</h3>            <div class="c-paragraph"><p>Cancel',
'your Office 365 subscription at any time, or return within 30 days of purchase',
'for a full refund. </p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="learn more satisfaction guaranteed" data-m="{&quot;cN&quot;:&quot;LEARN MORE&quot;,&quot;id&quot;:&quot;n4m1r4a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;m1r4a2&quot;}" href="https://support.microsoft.com/en-us/products/store?category=returns-refunds&amp;icid=Cat-Officeforstudents-marketing_2-satisfactionguaranteed-051717-US">',
'<span>LEARN MORE</span>',
'</a>',
'</section>',
'</div>',
'</div>',
'<div data-grid="col-6 pad-6x">',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="renew now renew your subscription" href="https://www.microsoft.com/en-us/store/b/officerenewal?icid=Cat-Officeforstudents-marketing_3-renew-051717-US" data-m="{&quot;cN&quot;:&quot;RENEW NOW&quot;,&quot;id&quot;:&quot;n5m1r4a2&quot;,&quot;sN&quot;:5,&quot;aN&quot;:&quot;m1r4a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" alt="Office renew icon" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Renew your subscription</h3>            <div class="c-paragraph"><p>Renew',
'Office 365 today and you won\'t lose any time remaining on your existing',
'subscription.</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="renew now renew your subscription" data-m="{&quot;cN&quot;:&quot;RENEW NOW&quot;,&quot;id&quot;:&quot;n6m1r4a2&quot;,&quot;sN&quot;:6,&quot;aN&quot;:&quot;m1r4a2&quot;}" href="https://www.microsoft.com/en-us/store/b/officerenewal?icid=Cat-Officeforstudents-marketing_3-renew-051717-US">',
'<span>RENEW NOW</span>',
'</a>',
'</section>',
'</div>',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="go to my account get the most out of office" href="https://office.com/myaccount?icid=Cat-Officeforstudents-marketing_4-myaccount-051717-US" data-m="{&quot;cN&quot;:&quot;GO TO MY ACCOUNT&quot;,&quot;id&quot;:&quot;n7m1r4a2&quot;,&quot;sN&quot;:7,&quot;aN&quot;:&quot;m1r4a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" alt="Office install icon" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Get the most out of Office</h3>            <div class="c-paragraph"><p>Install',
'Office, start using OneDrive cloud storage, and get additional support. </p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="go to my account get the most out of office" data-m="{&quot;cN&quot;:&quot;GO TO MY ACCOUNT&quot;,&quot;id&quot;:&quot;n8m1r4a2&quot;,&quot;sN&quot;:8,&quot;aN&quot;:&quot;m1r4a2&quot;}" href="https://office.com/myaccount?icid=Cat-Officeforstudents-marketing_4-myaccount-051717-US">',
'<span>GO TO MY ACCOUNT</span>',
'</a>',
'</section>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>',
'<div id="OptionalSeoTitleRegion" class="pad-heading-1" data-region-key="optionalseotitleregion" data-grid="container" data-m="{&quot;cN&quot;:&quot;OptionalSeoTitleRegion 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r5a2&quot;,&quot;sN&quot;:5,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-heading-s82at4o" data-m="{&quot;cN&quot;:&quot;SeoTitle 1&quot;,&quot;cT&quot;:&quot;Module_coreui-heading&quot;,&quot;id&quot;:&quot;m1r5a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r5a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;c01dzpf&quot;}}" data-module-id="Office Sub-Category Page|OptionalSeoTitleRegion|OptionalSeoTitleRegion|coreui-heading-s82at4o|coreui-heading">',
'<header class="m-heading-1">',
'<h2 class="c-heading-4">Office 365</h2>',
'</header>',
'</div>',
'</div>',
'<div id="OptionalSeoTextRegion" class="pad-rich-content-block" data-region-key="optionalseotextregion" data-grid="container" data-m="{&quot;cN&quot;:&quot;OptionalSeoTextRegion 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r6a2&quot;,&quot;sN&quot;:6,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-contentrichblock-ryuifwn" data-m="{&quot;cN&quot;:&quot;Seo Text 1&quot;,&quot;cT&quot;:&quot;Module_coreui-contentrichblock&quot;,&quot;id&quot;:&quot;m1r6a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r6a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;pige0p8&quot;}}" data-module-id="Office Sub-Category Page|OptionalSeoTextRegion|OptionalSeoTextRegion|coreui-contentrichblock-ryuifwn|coreui-contentrichblock">',
'<div data-grid="col-12" class="m-rich-content-block context-ucx">',
'<div>Microsoft Office 365 now includes Office 2016 and gives you the full Microsoft Office experience. With access to the latest Office applications as well as other cloud-based productivity services, whether you need Office for home, school, or business, there is an Office 365 plan to meet your needs.</div><div><br></div><div></div><div>Our Office 365 subscription plans include Office 365 Home, Office 365 Personal, Office 365 University and Office 365 for Mac. With each plan, you can install the 2016 versions of Word, Excel, PowerPoint, Outlook, and OneNote (Access, and Publisher are also included only for PC users).</div><div><br></div><div>When a new version of Microsoft Office is released, you’ll get instant access to it so your applications are always up-to-date - and because Office 365 is optimized across your devices it\'s easy to get anywhere access to your stuff on your laptop, phone, tablet and more.</div><div><br></div><div></div><div>Along with the latest software, you\'ll also get 1TB of OneDrive cloud storage, which lets you keep documents in one place, and access them anywhere on any device, making it easier than ever to create, edit, and share your documents on the go. In addition, Office 365 subscribers will get 60 minutes of Skype calling per month so you can stay in touch with friends and colleagues around the globe. Best of all, you can get tech support from the Microsoft Answer Desk experts, by phone or chat - at no extra charge.</div><div><br></div><div></div><div>Office 365 Home lets you install Office on up to 5 PCs or Macs, as well as 5 Windows, Android, or iPad tablets - an ideal solution for homes with more than one user. See the latest Microsoft Office 365 subscriptions, and do more everywhere.</div><div><br></div><div></div><div>[1] Skype account required. Excludes special, premium and non-geographic numbers. Calls to phones are for select countries only. Skype minutes available in select countries. See <a href="https://support.office.com/" class="c-hyperlink">FAQ</a> for details.</div>',
'</div>',
'</div>',
'</div>',
'</div>',

















'<div class="tab-content-officeformac" data-m="{&quot;cN&quot;:&quot;ExpOfficeTabOfficeForMac&quot;}">',
'<div id="OptionalCompareChartV2Region-1" class="pad-compare-chart" data-region-key="optionalcomparechartv2region-1" data-grid="container" data-m="{&quot;cN&quot;:&quot;OptionalCompareChartV2Region-1 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r2a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-comparechartv2-qfgk2wm" data-m="{&quot;cN&quot;:&quot;compareChartV2 1&quot;,&quot;cT&quot;:&quot;Module_coreui-comparechartv2&quot;,&quot;id&quot;:&quot;m1r2a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r2a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;zj3qncq&quot;}}" data-module-id="Office Sub-Category Page|OptionalCompareChartV2Region-1|OptionalCompareChartV2Region-1|coreui-comparechartv2-qfgk2wm|coreui-comparechartv2">',
'<div data-grid="col-12" class="m-compare-chart" style="display: block;">',
'<section>',
'<div class="f-column" data-grid="col-3">',
'<div class="f-row" style="height: 366px;">',
'<section itemscope="itemscope" itemtype="http://schema.org/Product" class="m-product-placement-item f-size-medium context-app f-clean" style="width:auto">',
'<a data-m="{&quot;cS&quot;:&quot;DisplayCatalog&quot;,&quot;cN&quot;:&quot;compare-picture&quot;,&quot;cT&quot;:&quot;pdp&quot;,&quot;id&quot;:&quot;n1m1r2a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="/en-us/store/p/office-365-home/cfq7ttc0k5dm">',
'<div class="f-default-image">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1iIy?ver=b54f&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1iIy?ver=b54f&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyload" alt="Office 365 Home" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1iIy?ver=b54f&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1iIy?ver=b54f&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f">',
'</picture>',
'</div>',
'</a>',
'<div>',
'<h3 class="c-heading-4">Office 365 Home</h3>',
'<div class="c-rating" data-value="4" data-max="5" itemscope="itemscope" itemtype="https://schema.org/AggregateRating">',
'<p class="x-screen-reader">',
'Rating: <span itemprop="ratingValue">4</span>/<span itemprop="bestRating">5</span>',
'</p>',
'<div></div>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$99.99 per year</span>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$9.99 per month</span>',
'</div>',
'</div>',
'</section>',
'<button data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n2m1r2a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;m1r2a2&quot;}" name="button" class="c-button" onclick="location.href=\'/en-us/store/p/office-365-home/cfq7ttc0k5dm\'">',
'Shop now',
'</button>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 44px;">',
'<p class="c-paragraph-3">Save 16% with a yearly subscription.</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 84px;">',
'<p class="c-paragraph-3">Best for households. Includes always up-to-date Office applications and extra OneDrive storage for up to 5 users. </p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 45px;">',
'<p class="c-paragraph-3"><span style="font-size: 12px;"><b>Fully installed Office on your Macs, PCs, iPads, and iPhones</b></span></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 212px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="Word app icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Excel app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Powerpoint app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="OneNote app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Outlook app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Publisher app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Access app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4">Word, Excel, PowerPoint, OneNote, &#8203;Outlook, Publisher (PC only), Access (PC only) </p><div><br></div><div><sup>Application availability and features vary by device, platform, and language. Publisher and Access are available on PC only.</sup><br></div><p></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 128px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="OneDrive app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Skype icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4"></p><div>1TB OneDrive cloud storage per user</div><div>60 minutes per month Skype calls per user[1]</div><p></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 368px;">',
'<b>Subscription benefits for 5 users:</b>',
'<ul class="c-list">',
'<li>Annual or monthly subscription available</li>',
'<li>Install on 5 Macs or PCs, 5 iPads and 5 iPhones</li>',
'<li>1TB OneDrive cloud storage per user for up to 5 users</li>',
'<li>Applications are always up to date, plus exclusive new features</li>',
'<li>Microsoft support via chat or phone at no extra cost</li>',
'<li>Skype calls to mobile phones and landlines. Includes 60 minutes per month per user, for up to 5 users.[1]</li>',
'</ul>',
'</div>',
'</div>',
'<div class="f-column" data-grid="col-3">',
'<div class="f-row" style="height: 366px;">',
'<section itemscope="itemscope" itemtype="http://schema.org/Product" class="m-product-placement-item f-size-medium context-app f-clean" style="width:auto">',
'<a data-m="{&quot;cS&quot;:&quot;DisplayCatalog&quot;,&quot;cN&quot;:&quot;compare-picture&quot;,&quot;cT&quot;:&quot;pdp&quot;,&quot;id&quot;:&quot;n3m1r2a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="/en-us/store/p/office-365-personal/cfq7ttc0k5bf">',
'<div class="f-default-image">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyload" alt="Office 365 Personal" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f">',
'</picture>',
'</div>',
'</a>',
'<div>',
'<h3 class="c-heading-4">Office 365 Personal</h3>',
'<div class="c-rating" data-value="4" data-max="5" itemscope="itemscope" itemtype="https://schema.org/AggregateRating">',
'<p class="x-screen-reader">',
'Rating: <span itemprop="ratingValue">3.9</span>/<span itemprop="bestRating">5</span>',
'</p>',
'<div></div>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$69.99 per year</span>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$6.99 per month</span>',
'</div>',
'</div>',
'</section>',
'<button data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n4m1r2a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;m1r2a2&quot;}" name="button" class="c-button" onclick="location.href=\'/en-us/store/p/office-365-personal/cfq7ttc0k5bf\'">',
'Shop now',
'</button>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 44px;">',
'<p class="c-paragraph-3">Save 16% with a yearly subscription.</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 84px;">',
'<p class="c-paragraph-3">Best for individuals. Includes always up-to-date Office applications and extra OneDrive storage for 1 user.? </p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 45px;">',
'<p class="c-paragraph-3"><span style="font-size: 12px;"><b>Fully installed Office on your Mac or PC, iPad, and iPhone</b></span></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 212px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="Word app icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Excel app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Powerpoint app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="OneNote app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Outlook app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Publisher app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Access app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4">Word, Excel, PowerPoint, OneNote, &#8203;Outlook, Publisher (PC only), Access (PC only)</p><div><br></div><div><sup>Application availability and features vary by device, platform, and language. Publisher and Access are available on PC only.</sup><br></div><p></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 128px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="OneDrive app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Skype icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4"></p><div>1TB OneDrive cloud storage</div><div>60 minutes per month Skype calls[1]</div><p></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 368px;">',
'<b>Subscription benefits for 1 user:</b>',
'<ul class="c-list">',
'<li>Annual or monthly subscription available</li>',
'<li>Install on 1 Mac or PC, 1 iPad and 1 iPhone</li>',
'<li>1TB OneDrive cloud storage</li>',
'<li>Applications are always up to date, plus exclusive new features</li>',
'<li>Microsoft support via chat or phone at no extra cost</li>',
'<li>Skype calls to mobile phones and landlines. Includes 60 minutes per month.[1]</li>',
'</ul>',
'</div>',
'</div>',
'<div class="f-column" data-grid="col-3">',
'<div class="f-row" style="height: 366px;">',
'<section itemscope="itemscope" itemtype="http://schema.org/Product" class="m-product-placement-item f-size-medium context-app f-clean" style="width:auto">',
'<a data-m="{&quot;cS&quot;:&quot;DisplayCatalog&quot;,&quot;cN&quot;:&quot;compare-picture&quot;,&quot;cT&quot;:&quot;pdp&quot;,&quot;id&quot;:&quot;n5m1r2a2&quot;,&quot;sN&quot;:5,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="/en-us/store/p/office-home-student-2016-for-mac/cfq7ttc0k5fb">',
'<div class="f-default-image">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10FR?ver=da39&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10FR?ver=da39&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyload" alt="Office Home &amp; Student 2016 for Mac" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10FR?ver=da39&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10FR?ver=da39&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f">',
'</picture>',
'</div>',
'</a>',
'<div>',
'<h3 class="c-heading-4">Office Home &amp; Student 2016 for Mac</h3>',
'<div class="c-rating" data-value="3" data-max="5" itemscope="itemscope" itemtype="https://schema.org/AggregateRating">',
'<p class="x-screen-reader">',
'Rating: <span itemprop="ratingValue">2.9</span>/<span itemprop="bestRating">5</span>',
'</p>',
'<div></div>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$149.99</span>',
'</div>',
'</div>',
'</section>',
'<button data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n6m1r2a2&quot;,&quot;sN&quot;:6,&quot;aN&quot;:&quot;m1r2a2&quot;}" name="button" class="c-button" onclick="location.href=\'/en-us/store/p/office-home-student-2016-for-mac/cfq7ttc0k5fb\'">',
'Shop now',
'</button>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 44px;">',
'<p class="c-paragraph-3">--</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 84px;">',
'<p class="c-paragraph-3">For individuals who want basic Office applications for 1 user on 1 Mac.</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 45px;">',
'<p class="c-paragraph-3"><span style="font-size: 12px;"><b>Fully installed Office on your Mac</b></span></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 212px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="Word app icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Excel app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Powerpoint app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="OneNote app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4">Word, Excel, PowerPoint, OneNote</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 128px;">',
'<p class="c-paragraph-3">Not included</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 368px;">',
'<b>Benefits for 1 user:</b>',
'<ul class="c-list">',
'<li>Install on 1 Mac</li>',
'<li>Upgrades not included</li>',
'</ul>',
'</div>',
'</div>',
'<div class="f-column" data-grid="col-3">',
'<div class="f-row" style="height: 366px;">',
'<section itemscope="itemscope" itemtype="http://schema.org/Product" class="m-product-placement-item f-size-medium context-app f-clean" style="width:auto">',
'<a data-m="{&quot;cS&quot;:&quot;DisplayCatalog&quot;,&quot;cN&quot;:&quot;compare-picture&quot;,&quot;cT&quot;:&quot;pdp&quot;,&quot;id&quot;:&quot;n7m1r2a2&quot;,&quot;sN&quot;:7,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="/en-us/store/p/office-home-business-2016-for-mac/cfq7ttc0k5fd">',
'<div class="f-default-image">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1duj?ver=d136&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1duj?ver=d136&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyload" alt="Office Home &amp; Business 2016 for Mac" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1duj?ver=d136&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1duj?ver=d136&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f">',
'</picture>',
'</div>',
'</a>',
'<div>',
'<h3 class="c-heading-4">Office Home &amp; Business 2016 for Mac</h3>',
'<div class="c-rating" data-value="2.5" data-max="5" itemscope="itemscope" itemtype="https://schema.org/AggregateRating">',
'<p class="x-screen-reader">',
'Rating: <span itemprop="ratingValue">2.4</span>/<span itemprop="bestRating">5</span>',
'</p>',
'<div></div>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$229.99</span>',
'</div>',
'</div>',
'</section>',
'<button data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n8m1r2a2&quot;,&quot;sN&quot;:8,&quot;aN&quot;:&quot;m1r2a2&quot;}" name="button" class="c-button" onclick="location.href=\'/en-us/store/p/office-home-business-2016-for-mac/cfq7ttc0k5fd\'">',
'Shop now',
'</button>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 44px;">',
'<p class="c-paragraph-3">--</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 84px;">',
'<p class="c-paragraph-3">For 1 user and 1 Mac.</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 45px;">',
'<p class="c-paragraph-3"><span style="font-size: 12px;"><b>Fully installed Office on your Mac</b></span></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 212px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="Word app icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Excel app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Powerpoint app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="OneNote app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Outlook app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4">Word, Excel, PowerPoint, OneNote, &#8203;Outlook</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 128px;">',
'<p class="c-paragraph-3">Not included</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 368px;">',
'<b>Benefits for 1 user:</b>',
'<ul class="c-list">',
'<li>Install on 1 Mac</li>',
'<li>Upgrades not included</li>',
'</ul>',
'</div>',
'</div>',
'</section>',
'</div>',
'</div>',
'</div>',
'<div id="OptionalFeature3Region" class="pad-feature" data-region-key="optionalfeature3region" data-grid="container" data-m="{&quot;cN&quot;:&quot;OptionalFeature3Region 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r3a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-feature-evafuoz" data-m="{&quot;cN&quot;:&quot;Feature3 1&quot;,&quot;cT&quot;:&quot;Module_coreui-feature&quot;,&quot;id&quot;:&quot;m1r3a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r3a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;wgt5x5o&quot;}}" class="m-feature" data-grid="col-12" data-module-id="Office Sub-Category Page|OptionalFeature3Region|OptionalFeature3Region|coreui-feature-evafuoz|coreui-feature">',
'<section class="c-feature f-align-right  ">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6KZM?ver=086a&amp;q=90&amp;m=6&amp;h=303&amp;w=539&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6KZM?ver=086a&amp;q=90&amp;m=6&amp;h=431&amp;w=767&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6KZM?ver=086a&amp;q=90&amp;m=6&amp;h=406&amp;w=542&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6KZM?ver=086a&amp;q=90&amp;m=6&amp;h=472&amp;w=630&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6KZM?ver=086a&amp;q=90&amp;m=6&amp;h=450&amp;w=800&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6KZM?ver=086a&amp;q=90&amp;m=6&amp;h=450&amp;w=800&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" alt="iMac and Macbook showing Office screenfills" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6KZM?ver=086a&amp;q=90&amp;m=6&amp;h=450&amp;w=800&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<div>',
'<h2 class="c-heading">Get it all with Office 365</h2>',
'<div class="c-paragraph"><p>The best way to get Office for Mac is with Office 365. Install the latest Office 2016 applications on up to 5 Macs and iPads, get instant access to the latest versions so your applications are always up-to-date, and 1TB OneDrive cloud storage.</p></div>',
'<a class="c-call-to-action c-glyph" data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n1m1r3a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;m1r3a2&quot;}" href="https://www.microsoft.com/en-us/store/d/product/CFQ7TTC0K5DM?icid=Cat-Mac_feature1_O365_051717-en_US">',
'<span>SHOP NOW</span>',
'</a>',
'</div>',
'</section>',
'</div>',
'</div>',
'<div id="ValuePropContentPlacementRegion" class="pad-content-placement" data-region-key="valuepropcontentplacementregion" data-grid="container" data-m="{&quot;cN&quot;:&quot;ValuePropContentPlacementRegion 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r4a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-contentplacement-9rk2yhv" data-m="{&quot;cN&quot;:&quot;ValuePropContentPlacement 1&quot;,&quot;cT&quot;:&quot;Module_coreui-contentplacement&quot;,&quot;id&quot;:&quot;m1r4a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r4a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;lo6fucx&quot;}}" data-module-id="Office Sub-Category Page|ValuePropContentPlacementRegion|ValuePropContentPlacementRegion|coreui-contentplacement-9rk2yhv|coreui-contentplacement">',
'<header class="m-heading-4">',
'<h2 class="c-heading">Get started with Office</h2>',
'</header>',
'<div class="m-content-placement" data-grid="col-12">',
'<div data-grid="col-12 stack-3">',
'<div data-grid="col-6 pad-6x">',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="contact us get live help" href="https://support.microsoft.com/en-us/contactus/" data-m="{&quot;cN&quot;:&quot;CONTACT US&quot;,&quot;id&quot;:&quot;n1m1r4a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;m1r4a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" alt="Live support icon" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Get live help</h3>            <div class="c-paragraph"><p>Need help choosing the right Office? Questions about installation? We\'re here to help.</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="contact us get live help" data-m="{&quot;cN&quot;:&quot;CONTACT US&quot;,&quot;id&quot;:&quot;n2m1r4a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;m1r4a2&quot;}" href="https://support.microsoft.com/en-us/contactus/">',
'<span>CONTACT US</span>',
'</a>',
'</section>',
'</div>',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="learn more satisfaction guaranteed" href="https://support.microsoft.com/en-us/products/store?category=returns-refunds?icid=Cat-Mac-marketing_2-satisfactionguaranteed-051717-US" data-m="{&quot;cN&quot;:&quot;LEARN MORE&quot;,&quot;id&quot;:&quot;n3m1r4a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;m1r4a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" alt="Woman working in office on Surface Book" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sInl?ver=969e&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Satisfaction guaranteed</h3>            <div class="c-paragraph"><p>Cancel your Office 365 subscription at any time, or return within 30 days of purchase for a full refund.</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="learn more satisfaction guaranteed" data-m="{&quot;cN&quot;:&quot;LEARN MORE&quot;,&quot;id&quot;:&quot;n4m1r4a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;m1r4a2&quot;}" href="https://support.microsoft.com/en-us/products/store?category=returns-refunds?icid=Cat-Mac-marketing_2-satisfactionguaranteed-051717-US">',
'<span>LEARN MORE</span>',
'</a>',
'</section>',
'</div>',
'</div>',
'<div data-grid="col-6 pad-6x">',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="renew now renew your subscription" href="https://www.microsoft.com/en-us/store/b/officerenewal?icid=Cat-Mac-marketing_3-renew-051717-US" data-m="{&quot;cN&quot;:&quot;RENEW NOW&quot;,&quot;id&quot;:&quot;n5m1r4a2&quot;,&quot;sN&quot;:5,&quot;aN&quot;:&quot;m1r4a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" alt="Office renew icon" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AC?ver=5718&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Renew your subscription</h3>            <div class="c-paragraph"><p>Renew Office 365 today and you won\'t lose any remaining time on your existing subscription. </p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="renew now renew your subscription" data-m="{&quot;cN&quot;:&quot;RENEW NOW&quot;,&quot;id&quot;:&quot;n6m1r4a2&quot;,&quot;sN&quot;:6,&quot;aN&quot;:&quot;m1r4a2&quot;}" href="https://www.microsoft.com/en-us/store/b/officerenewal?icid=Cat-Mac-marketing_3-renew-051717-US">',
'<span>RENEW NOW</span>',
'</a>',
'</section>',
'</div>',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="go to my account get the most out of office" href="https://office.com/myaccount?icid=Cat-Mac-marketing_4-myaccount-051717-US" data-m="{&quot;cN&quot;:&quot;GO TO MY ACCOUNT&quot;,&quot;id&quot;:&quot;n7m1r4a2&quot;,&quot;sN&quot;:7,&quot;aN&quot;:&quot;m1r4a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" alt="Office install icon" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW70AB?ver=2d16&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Get the most out of Office</h3>            <div class="c-paragraph"><p>Install Office on your devices, start using OneDrive cloud storage, and get additional support.</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="go to my account get the most out of office" data-m="{&quot;cN&quot;:&quot;GO TO MY ACCOUNT&quot;,&quot;id&quot;:&quot;n8m1r4a2&quot;,&quot;sN&quot;:8,&quot;aN&quot;:&quot;m1r4a2&quot;}" href="https://office.com/myaccount?icid=Cat-Mac-marketing_4-myaccount-051717-US">',
'<span>GO TO MY ACCOUNT</span>',
'</a>',
'</section>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>',
'<div id="OptionalSeoTitleRegion" class="pad-heading-1" data-region-key="optionalseotitleregion" data-grid="container" data-m="{&quot;cN&quot;:&quot;OptionalSeoTitleRegion 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r5a2&quot;,&quot;sN&quot;:5,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-heading-o7ddf3p" data-m="{&quot;cN&quot;:&quot;SeoTitle 1&quot;,&quot;cT&quot;:&quot;Module_coreui-heading&quot;,&quot;id&quot;:&quot;m1r5a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r5a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;u1lpwwv&quot;}}" data-module-id="Office Sub-Category Page|OptionalSeoTitleRegion|OptionalSeoTitleRegion|coreui-heading-o7ddf3p|coreui-heading">',
'<header class="m-heading-1">',
'<h2 class="c-heading-4">Office for Mac</h2>',
'</header>',
'</div>',
'</div>',
'<div id="OptionalSeoTextRegion" class="pad-rich-content-block" data-region-key="optionalseotextregion" data-grid="container" data-m="{&quot;cN&quot;:&quot;OptionalSeoTextRegion 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r6a2&quot;,&quot;sN&quot;:6,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-contentrichblock-0vk32sg" data-m="{&quot;cN&quot;:&quot;Seo Text 1&quot;,&quot;cT&quot;:&quot;Module_coreui-contentrichblock&quot;,&quot;id&quot;:&quot;m1r6a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r6a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;qepiiom&quot;}}" data-module-id="Office Sub-Category Page|OptionalSeoTextRegion|OptionalSeoTextRegion|coreui-contentrichblock-0vk32sg|coreui-contentrichblock">',
'<div data-grid="col-12" class="m-rich-content-block context-ucx">',
'<div>Do your best work – anywhere, anytime, and with anyone. Microsoft Office for Mac gives you the latest versions of Word, Excel, PowerPoint, Outlook and OneNote, thoughtfully designed for Mac.</div><div><br></div><div></div><div>When you purchase Office for Mac, you\'ll get the functionality of Office as well as the unique Mac features you love. With Word, Excel, PowerPoint, and OneNote, you can create great-looking documents and get more done. And thanks to the integration with OneDrive, you can access your files whenever you need to. Plus with roaming recent files, you can pick up from where you left off on any device.</div><div><br></div><div></div><div>In addition, Office for Mac gives users a re-designed Ribbon menu that organizes features in a similar way for Windows and iPad - making it easy to find what you need quickly. And the new task pane makes even complex jobs, like formatting images in Word, designing animations in PowerPoint, and inserting formulas in Excel a snap. For those times when collaboration is critical, Microsoft Office for Mac also gives you the ability to share documents, as well as co-authoring and threaded comments (in Word and PowerPoint) so you can work on documents simultaneously and have useful conversations right next to the relevant text.</div><div><br></div><div></div><div>The Microsoft Office for Mac download is available as a one-time purchase or as an Office 365 subscription, which includes the new Office 2016 for Mac as well as the latest updates. Browse your download options and get everything you need to work on your own, collaborate with colleagues, and make the most of your Mac.</div><div><br></div><div></div><div>[1] Skype account required. Excludes special, premium and non-geographic numbers. Calls to phones are for select countries only. Skype minutes available in select countries. See <a href="https://support.office.com/" class="c-hyperlink">FAQ</a> for details.</div>',
'</div>',
'</div>',
'</div>',
'</div>',



















'<div class="tab-content-officerenewal" data-m="{&quot;cN&quot;:&quot;ExpOfficeTabOfficeRenewal&quot;}">',
'<div id="OptionalCompareChartV2Region-1" class="pad-compare-chart" data-region-key="optionalcomparechartv2region-1" data-grid="container" data-m="{&quot;cN&quot;:&quot;OptionalCompareChartV2Region-1 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r2a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-comparechartv2-s7z5q3j" data-m="{&quot;cN&quot;:&quot;compareChartV2 1&quot;,&quot;cT&quot;:&quot;Module_coreui-comparechartv2&quot;,&quot;id&quot;:&quot;m1r2a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r2a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;4n4b0fs&quot;}}" data-module-id="Office Sub-Category Page|OptionalCompareChartV2Region-1|OptionalCompareChartV2Region-1|coreui-comparechartv2-s7z5q3j|coreui-comparechartv2">',
'<header class="m-heading-4">',
'<h2 class="c-heading x-hidden-focus">Choose the plan you want to renew</h2>',
'</header>',
'<div data-grid="col-12" class="m-compare-chart" style="display: block;">',
'<section>',
'<div class="f-column" data-grid="col-6">',
'<div class="f-row" style="height: 366px;">',
'<section itemscope="itemscope" itemtype="http://schema.org/Product" class="m-product-placement-item f-size-medium context-app f-clean" style="width:auto">',
'<a data-m="{&quot;cS&quot;:&quot;DisplayCatalog&quot;,&quot;cN&quot;:&quot;compare-picture&quot;,&quot;cT&quot;:&quot;pdp&quot;,&quot;id&quot;:&quot;n1m1r2a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="/en-us/store/p/office-365-home/cfq7ttc0k5dm">',
'<div class="f-default-image">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1iIy?ver=b54f&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1iIy?ver=b54f&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyload" alt="Office 365 Home" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1iIy?ver=b54f&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1iIy?ver=b54f&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f">',
'</picture>',
'</div>',
'</a>',
'<div>',
'<h3 class="c-heading-4">Office 365 Home</h3>',
'<div class="c-rating" data-value="4" data-max="5" itemscope="itemscope" itemtype="https://schema.org/AggregateRating">',
'<p class="x-screen-reader">',
'Rating: <span itemprop="ratingValue">4</span>/<span itemprop="bestRating">5</span>',
'</p>',
'<div></div>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$99.99 per year</span>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$9.99 per month</span>',
'</div>',
'</div>',
'</section>',
'<button data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n2m1r2a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;m1r2a2&quot;}" name="button" class="c-button" onclick="location.href=\'/en-us/store/p/office-365-home/cfq7ttc0k5dm\'">',
'Shop now',
'</button>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 44px;">',
'<p class="c-paragraph-3">Save 16% with a yearly subscription</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 64px;">',
'<p class="c-paragraph-3">Best for households. Includes always up-to-date Office applications and extra OneDrive storage for up to 5 users.<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 44px;">',
'<p class="c-paragraph-3">Fully installed Office on your PCs and Macs </p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 148px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="Word app icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Excel app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Powerpoint app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="OneNote app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Outlook app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Publisher app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Access app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4"></p><div>Word, Excel, PowerPoint, OneNote, &#8203;Outlook, Publisher (PC only), Access (PC only)</div><div><span style="font-size: 10.5px;">Application availability and features vary by device, platform, and language. </span></div><div><span style="font-size: 10.5px;">Publisher and Access are available on PC only.</span></div><p></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 148px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="OneDrive app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Skype icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4"></p><div>1TB OneDrive cloud storage per user </div><div><br></div><div>60 Skype minutes per month  per user[1]</div><p></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 268px;">',
'Subscription benefits for 5 users:<br>',
'<ul class="c-list">',
'<li>Yearly or monthly subscription</li>',
'<li>Install on 5 PCs or Macs, 5 tablets, and 5 phones</li>',
'<li>1TB OneDrive cloud storage per user for up to 5 users</li>',
'<li>Applications are always up to date, plus exclusive new features</li>',
'<li>Microsoft support via chat or phone at no extra cost</li>',
'<li>Skype calls to mobile phones and landlines, includes 60 minutes per month per user, for up to 5 users[1]</li>',
'</ul>',
'</div>',
'</div>',
'<div class="f-column" data-grid="col-6">',
'<div class="f-row" style="height: 366px;">',
'<section itemscope="itemscope" itemtype="http://schema.org/Product" class="m-product-placement-item f-size-medium context-app f-clean" style="width:auto">',
'<a data-m="{&quot;cS&quot;:&quot;DisplayCatalog&quot;,&quot;cN&quot;:&quot;compare-picture&quot;,&quot;cT&quot;:&quot;pdp&quot;,&quot;id&quot;:&quot;n3m1r2a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;m1r2a2&quot;}" href="/en-us/store/p/office-365-personal/cfq7ttc0k5bf">',
'<div class="f-default-image">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyload" alt="Office 365 Personal" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&amp;w=124&amp;h=124&amp;q=90&amp;m=6&amp;b=%23FFFFFFFF&amp;o=f">',
'</picture>',
'</div>',
'</a>',
'<div>',
'<h3 class="c-heading-4">Office 365 Personal</h3>',
'<div class="c-rating" data-value="4" data-max="5" itemscope="itemscope" itemtype="https://schema.org/AggregateRating">',
'<p class="x-screen-reader">',
'Rating: <span itemprop="ratingValue">3.9</span>/<span itemprop="bestRating">5</span>',
'</p>',
'<div></div>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$69.99 per year</span>',
'</div>',
'<div class="c-price" itemprop="offers" itemscope="itemscope" itemtype="http://schema.org/Offer">',
'<span itemprop="price">$6.99 per month</span>',
'</div>',
'</div>',
'</section>',
'<button data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;id&quot;:&quot;n4m1r2a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;m1r2a2&quot;}" name="button" class="c-button" onclick="location.href=\'/en-us/store/p/office-365-personal/cfq7ttc0k5bf\'">',
'Shop now',
'</button>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 44px;">',
'<p class="c-paragraph-3">Save 16% with a yearly subscription</p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 64px;">',
'<p class="c-paragraph-3">Best for individuals. Includes always up-to-date Office applications and extra OneDrive storage for 1 user.<br></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 44px;">',
'<p class="c-paragraph-3">Fully installed Office on your PC or Mac </p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 148px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="Word app icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Excel app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Powerpoint app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="OneNote app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Outlook app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Publisher app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Access app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4"></p><div>Word, Excel, PowerPoint, OneNote, &#8203;Outlook, Publisher (PC only), Access (PC only)</div><div><span style="font-size: 10.5px;">Application availability and features vary by device, platform, and language. </span></div><div><span style="font-size: 10.5px;">Publisher and Access are available on PC only.</span></div><p></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 148px;">',
'<div class="f-icons">',
'<img class="c-image lazyload" alt="OneDrive app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="c-image lazyload" alt="Skype icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=30&amp;w=30&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">                                                        </div>',
'<p class="c-caption-4"></p><div>1TB OneDrive cloud storage</div><div><br></div><div>60 minutes per month Skype calls[1]</div><p></p>',
'</div>',
'<hr class="c-divider">',
'<div class="f-row" style="height: 268px;">',
'Subscription benefits for 1 user:<br>',
'<ul class="c-list">',
'<li>Yearly or monthly subscription</li>',
'<li>Install on 1 PC or Mac, 1 tablet, and 1 phone</li>',
'<li>1TB OneDrive cloud storage</li>',
'<li>Applications are always up to date, plus exclusive new features</li>',
'<li>Microsoft support via chat or phone at no extra cost</li>',
'<li>Skype calls to mobile phones and landlines, includes 60 minutes per month per user[1]</li>',
'</ul>',
'</div>',
'</div>',
'</section>',
'</div>',
'</div>',
'</div>',
'<div id="ValuePropContentPlacementRegion" class="pad-content-placement" data-region-key="valuepropcontentplacementregion" data-grid="container" data-m="{&quot;cN&quot;:&quot;ValuePropContentPlacementRegion 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r3a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-contentplacement-luthtkv" data-m="{&quot;cN&quot;:&quot;ValuePropContentPlacement 1&quot;,&quot;cT&quot;:&quot;Module_coreui-contentplacement&quot;,&quot;id&quot;:&quot;m1r3a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r3a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;ruh2568&quot;}}" data-module-id="Office Sub-Category Page|ValuePropContentPlacementRegion|ValuePropContentPlacementRegion|coreui-contentplacement-luthtkv|coreui-contentplacement">',
'<header class="m-heading-4">',
'<h2 class="c-heading">Office 365 subscribers</h2>',
'</header>',
'<div class="m-content-placement" data-grid="col-12">',
'<div data-grid="col-12 stack-3">',
'<div data-grid="col-6 pad-6x">',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="contact us get live help at no additional cost" href="https://support.microsoft.com/en-us/contactus/" data-m="{&quot;cN&quot;:&quot;CONTACT US&quot;,&quot;id&quot;:&quot;n1m1r3a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;m1r3a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" alt="Live support icon" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sFLi?ver=56a8&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Get live help at no additional cost</h3>            <div class="c-paragraph"><p>Questions about how to renew or how to install on more devices?  Get support via chat or phone as part of your Office 365 subscription.</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="contact us get live help at no additional cost" data-m="{&quot;cN&quot;:&quot;CONTACT US&quot;,&quot;id&quot;:&quot;n2m1r3a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;m1r3a2&quot;}" href="https://support.microsoft.com/en-us/contactus/">',
'<span>CONTACT US</span>',
'</a>',
'</section>',
'</div>',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="go to my account check your renewal date" href="https://office.com/myaccount?icid=Cat-Renew-marketing_2-renew-051717-en_US" data-m="{&quot;cN&quot;:&quot;GO TO MY ACCOUNT&quot;,&quot;id&quot;:&quot;n3m1r3a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;m1r3a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sQb7?ver=d241&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sQb7?ver=d241&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sQb7?ver=d241&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sQb7?ver=d241&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sQb7?ver=d241&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sQb7?ver=d241&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" alt="Laptop with Office 365 logo on the screen" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sQb7?ver=d241&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Check your renewal date</h3>            <div class="c-paragraph"><p>To find out how much time you have left on your subscription, sign in to My Account, and look under Manage account to see when your current subscription expires or automatically renews. </p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="go to my account check your renewal date" data-m="{&quot;cN&quot;:&quot;GO TO MY ACCOUNT&quot;,&quot;id&quot;:&quot;n4m1r3a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;m1r3a2&quot;}" href="https://office.com/myaccount?icid=Cat-Renew-marketing_2-renew-051717-en_US">',
'<span>GO TO MY ACCOUNT</span>',
'</a>',
'</section>',
'</div>',
'</div>',
'<div data-grid="col-6 pad-6x">',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="learn more cancel anytime" href="https://support.microsoft.com/en-us/products/store?category=returns-refunds?icid=Cat-Renew-marketing_3-cancel-051717-en_US" data-m="{&quot;cN&quot;:&quot;LEARN MORE&quot;,&quot;id&quot;:&quot;n5m1r3a2&quot;,&quot;sN&quot;:5,&quot;aN&quot;:&quot;m1r3a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sDaY?ver=b070&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sDaY?ver=b070&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sDaY?ver=b070&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sDaY?ver=b070&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sDaY?ver=b070&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sDaY?ver=b070&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" alt="Device icon" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sDaY?ver=b070&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Cancel anytime</h3>            <div class="c-paragraph"><p>Cancel your Office 365 subscription at any time or return within 30 days of renewal for a full refund.</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="learn more cancel anytime" data-m="{&quot;cN&quot;:&quot;LEARN MORE&quot;,&quot;id&quot;:&quot;n6m1r3a2&quot;,&quot;sN&quot;:6,&quot;aN&quot;:&quot;m1r3a2&quot;}" href="https://support.microsoft.com/en-us/products/store?category=returns-refunds?icid=Cat-Renew-marketing_3-cancel-051717-en_US">',
'<span>LEARN MORE</span>',
'</a>',
'</section>',
'</div>',
'<div data-grid="col-6">',
'<section class="m-content-placement-item f-size-medium">',
'<a aria-label="go to my account get the most out of office" href="https://office.com/myaccount?icid=Cat-Renew-marketing_4-myaccount-051717-en_US" data-m="{&quot;cN&quot;:&quot;GO TO MY ACCOUNT&quot;,&quot;id&quot;:&quot;n7m1r3a2&quot;,&quot;sN&quot;:7,&quot;aN&quot;:&quot;m1r3a2&quot;}">',
'<picture>',
'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sQb6?ver=ed2d&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(max-width:539px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sQb6?ver=ed2d&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:540px) and (max-width:767px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sQb6?ver=ed2d&amp;q=90&amp;m=6&amp;h=132&amp;w=235&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:768px) and (max-width:1083px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sQb6?ver=ed2d&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1084px) and (max-width:1399px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sQb6?ver=ed2d&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t" media="(min-width:1400px) and (max-width:1778px)"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sQb6?ver=ed2d&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t"><img class="lazyload" alt="Multiple devices running Office 365" src="//statics-onestore-wcus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1sQb6?ver=ed2d&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
'</picture>',
'<h3 class="c-heading">Get the most out of Office</h3>            <div class="c-paragraph"><p>Install Office on your devices, start using OneDrive cloud storage, and get additional support.</p></div>',
'</a>',
'<a class="c-call-to-action c-glyph" aria-label="go to my account get the most out of office" data-m="{&quot;cN&quot;:&quot;GO TO MY ACCOUNT&quot;,&quot;id&quot;:&quot;n8m1r3a2&quot;,&quot;sN&quot;:8,&quot;aN&quot;:&quot;m1r3a2&quot;}" href="https://office.com/myaccount?icid=Cat-Renew-marketing_4-myaccount-051717-en_US">',
'<span>GO TO MY ACCOUNT</span>',
'</a>',
'</section>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>',
'<div id="OptionalSeoTextRegion" class="pad-rich-content-block" data-region-key="optionalseotextregion" data-grid="container" data-m="{&quot;cN&quot;:&quot;OptionalSeoTextRegion 1&quot;,&quot;cT&quot;:&quot;Region_coreui-region&quot;,&quot;id&quot;:&quot;r4a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;a2&quot;}">',
'<div id="coreui-contentrichblock-2wxds7u" data-m="{&quot;cN&quot;:&quot;Seo Text 1&quot;,&quot;cT&quot;:&quot;Module_coreui-contentrichblock&quot;,&quot;id&quot;:&quot;m1r4a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;r4a2&quot;,&quot;tags&quot;:{&quot;varId&quot;:&quot;j5qjnk7&quot;}}" data-module-id="Office Sub-Category Page|OptionalSeoTextRegion|OptionalSeoTextRegion|coreui-contentrichblock-2wxds7u|coreui-contentrichblock">',
'<div data-grid="col-12" class="m-rich-content-block context-ucx">',
'<h2><b>Office 365 Frequently Asked Questions</b></h2><div><br></div><div><div>Q: How do I renew my Office 365 Home or Personal subscription? </div><div><br></div><div> </div><div>A: First, check your auto renewal setting by signing in to <a href="https://www.office.com/myaccount" class="c-hyperlink">www.office.com/myaccount</a>. Look under “Payment and Billing” to see if automatic renewal is set to "On." If it is, your subscription will renew automatically. If automatic renewal is set to “Off,” select the Office 365 version from this page, that you want to renew.  </div><div><br></div><div><i>Important note:</i> Make sure that you use the same Microsoft account that you used when setting up your original subscription. Any  time you have remaining will automatically be added to your existing subscription. If you use a different Microsoft account, you will be creating a new subscription.  </div><div>  </div><div><br></div><div><br></div><div>Q: Will I lose any time if I renew early? </div><div><br></div><div> </div><div>A: No. Any additional time will be added to your existing subscription. For example, if you have two months left on your current subscription to Office 365 Home and you buy a 1 year renewal, your subscription will be good for 14 months.  </div><div><i>Important note:</i> Make sure you use the same Microsoft account you used when you set up your original subscription. Any time you have remaining will automatically be added to your existing subscription. If you use a different Microsoft account, you will be creating a new subscription.  </div><div>  </div><div><br></div><div><br></div><div>Q: If I am renewing an existing subscription, do I need to re-download or re-install Office on my devices? </div><div><br></div><div> </div><div>A: No, but if you want to add Office on a new device or deactivate it on a device you already own, you can do so from <a href="https://www.office.com/myaccount" class="c-hyperlink">www.office.com/myaccount</a>.  </div><div>  </div><div><br></div><div><br></div><div>Q: Can I switch from a yearly to a monthly subscription plan when I renew? </div><div><br></div><div> </div><div>A: Yes. You’ll be immediately charged for 1 month of service, which will be added to your remaining subscription. Once your remaining subscription time is over, you’ll be charged monthly.  </div><div>  </div><div><br></div><div><br></div><div>Q: Can I switch from Office 365 Home to Office 365 Personal when I renew?  </div><div><br></div><div>A: If you have a subscription to Office 365 Home that has not yet expired and you renew by purchasing Office 365 Personal, your Office 365 Home subscription will immediately switch to Office 365 Personal. You will not lose any subscription time, but you will only be allowed to install Office on as many devices as your new Office 365 Personal subscription allows —1 PC or Mac, plus 1 tablet. As a result, you may be required to deactivate Office 365 on devices that cause you to exceed that limit.  </div><div><i>Important note:</i> You will not be provided a refund or extra time when you convert from Office 365 Home to Office 365 Personal before your Office 365 Home subscription has ended. You can choose to wait until your Office 365 Home subscription expires before renewing with Office 365 Personal.  </div><div>  </div><div><br></div><div><br></div><div>Q: How do I find out how much time I have left on my current subscription? </div><div><br></div><div> </div><div>A: Go to <a href="https://www.office.com/myaccount" class="c-hyperlink">www.office.com/myaccount</a> and sign in. Look in the Manage account section to see when your current subscription expires or automatically renews.  </div><div>  </div><div><br></div><div><br></div><div>Q: How do I manage my Office 365 subscription, including payment information and devices?  </div><div><br></div><div>A: Visit <a href="https://www.office.com/myaccount" class="c-hyperlink">www.office.com/myaccount</a> to manage your subscription, change payment information, install or remove Office from PCs or Macs, and manage your installations of Office on other devices.  </div><div><br></div><div><br></div><div>Q: What happens if I buy or renew multiple Office 365 subscriptions using the same Microsoft account?  </div><div><br></div><div>A: Your Microsoft account can have only one subscription associated with it. If you use the same Microsoft account to buy or renew multiple Office 365 subscriptions before each one has expired, you will add the cumulative time to your subscription, up to a maximum of 5 years. Note that doing so does not increase the number of devices that you can install Office on or increase the amount of online storage that is available with the subscription.  </div><div>  </div><div><br></div><div><br></div><div>Q: What happens if my subscription ends and I haven’t renewed yet?  </div><div><br></div><div>A: If auto-renew is not enabled for your subscription, as the expiration date approaches, you will receive notifications in the Office applications and via email, alerting you to the upcoming expiration. If you choose to let your subscription expire, the Office software applications enter read-only mode, which means that you can view or print existing documents, but you can’t edit them or create new ones. To return to full Office functionality, you can purchase a new version of Office at <a href="https://www.office.com/myaccount" class="c-hyperlink">www.office.com/myaccount</a>. You could also use Office Online for free for basic editing.  </div><div>  </div><div><br></div><div><br></div><div>Q: If my subscription is set to automatically renew, will I be notified before I’m charged?  </div><div><br></div><div>A: If you have a yearly subscription, you’ll get an email from us before you’re charged. If you have a monthly subscription, your payment will be automatically debited each month, and you will not be notified in advance. You can change your payment method or cancel your subscription at any time by signing in to <a href="https://www.office.com/myaccount" class="c-hyperlink">www.office.com/myaccount</a> with the Microsoft account you used to set up the subscription.  </div><div>  </div><div><br></div><div><br></div><div>Q: What do I do if I need help?  </div><div><br></div><div>A: Just call us at 1-877-696-7786. We’re happy to help with renewal, download, installation and more.  </div></div><div><br></div><div><br></div><div><h4 style="font-family: &quot;Segoe UI&quot;, Helvetica, sans-serif; color: rgb(85, 85, 85);">Office 365 Renewal</h4></div><div><br></div><div>  </div><div>Renew your Office 365 subscription with ease at Microsoft. Get access to always-updated software, including Word, Excel, PowerPoint, and Outlook, that\'s optimized across your devices -- you can get anywhere access to your stuff and do more on the go. </div><div><br></div><div>Whether you need to create professional documents for work, school, or personal use, Microsoft has the tools to help. When you renew your Office 365 subscription, you\'ll get the full Microsoft Office experience, including Office 2016 for PC and Mac. With your favorite Office applications, like Word, PowerPoint, and Excel, plus 1TB of OneDrive cloud storage and every new upgrade included, you\'ll always have the most up-to-date versions of applications as soon as they\'re available. To help you stay connected, your Office 365 renewal also gives you 60 minutes of Skype calling per month. And with expert Office technical support from Microsoft Answer Desk included, you can get the help you need when you need it.  </div><div><br></div><div>Best of all, renewing Office 365 is a snap. With the option to renew your Office 365 subscription monthly or annually, finding the right solution for the way you work is simple. And because Office 365 renewal notices are sent via email, we make it easy to know when it\'s time to renew your subscription. Of course, you can always sign into your Microsoft account to see how much time is left on your subscription and renew when it suits you best. If you have trouble renewing, our Microsoft help team members are always here to help. </div><div><br></div><div>[1] Skype account required. Excludes special, premium and non-geographic numbers. Calls to phones are for select countries only. Skype minutes available in select countries. See <a href="https://support.office.com" class="c-hyperlink">FAQ</a> for details. </div>',
'</div>',
'</div>',
'</div>',
'</div>'].join('\n');

var officeTabHtmls = ['<section class="exp-office-tab-control" data-m="{&quot;cN&quot;:&quot;ExpOfficeTabControl&quot;}">',
'<header class="m-heading-4">',
'<h2 class="c-heading x-hidden-focus">Choose your Office</h2>',
'</header>',
'<p>Need Office for home, business or school? There is an Office version that’s right for you.</a>',
'<div class="tabs-container">',
'<a class="tab-officeforhomeorpersonal active x-hidden-focus" data-m="{&quot;cN&quot;:&quot;home_pers&quot;}" data-tab="tab-content-officeforhomeorpersonal" role="tab" tabindex="0">For home or personal​</a>',
'<a class="tab-officeforbusiness x-hidden-focus" data-m="{&quot;cN&quot;:&quot;business&quot;}" data-tab="tab-content-officeforbusiness" role="tab" tabindex="0">For business​</a>',
'<a class="tab-officeforstudents x-hidden-focus" data-m="{&quot;cN&quot;:&quot;edu&quot;}" data-tab="tab-content-officeforstudents" role="tab" tabindex="0">For students and educators​</a>',
'<a class="tab-officeformac x-hidden-focus" data-m="{&quot;cN&quot;:&quot;mac&quot;}" data-tab="tab-content-officeformac" role="tab" tabindex="0">For Mac​</a>',
'<a class="tab-officerenewal x-hidden-focus" data-m="{&quot;cN&quot;:&quot;renew&quot;}" data-tab="tab-content-officerenewal" role="tab" tabindex="0">Renew​</a>',
'</div>',
'<hr class="c-divider x-hidden-focus">',
'</section>'].join('\n');

var utils = window['optimizely'].get('utils');

utils.waitUntil(function() {
  if(window.jQuery) return true;
}).then(function() { 
	var $ = jQuery;

	$('#HeroRegion').nextAll().remove();

	$(officeTabHtmls).insertAfter('#HeroRegion').promise().done(function(){
	    $(officelHtmlFor5Pages).insertAfter('.exp-office-tab-control').promise().done(function(){
	      	// TAB CONTROL 
			$('.exp-office-tab-control a').on('click keypress', function(e){
				e.preventDefault();
        
        if(e && e.type === 'keypress' && e.keyCode !== 13){
          return false;
        }
        
				if(!$(this).hasClass('active')) {
					$('.exp-office-tab-control a').removeClass('active');
					$(this).addClass('active');
					
					$('div[class*=tab-content]').removeClass('show');
					var tabClass = $(this).data('tab');
					$('.' + tabClass).addClass('show');

					// RESIZING CHART
					setTimeout(function(){
						expPivotMeasurement('#mainArea .' + tabClass);
					}, 50);
					
					//Once all assets load, re-measure table
					var _colProdImages = '#mainArea .' + tabClass,
						_chartColumns = $('.f-column', _colProdImages).length,
						_imageCount = 0;
					
					$('.m-product-placement-item img', _colProdImages).load(function(){
						_imageCount++;
						
						if($('.m-product-placement-item img', _colProdImages).length === _imageCount){
							expPivotMeasurement('#mainArea .' + tabClass);
						}
					});
				}
			});

			// DECORATE DOM ELEMENTS
			utils.waitUntil(function() {
			  return typeof awa != 'undefined' && awa.isInitialized === true;
			}).then(function() {
				try {
					var triggerDecoration = function(target){
						if(window.CustomEvent){
							event = new CustomEvent('decorate', {'bubbles': true });
						} else {
							event = document.createEvent('CustomEvent');
							event.initCustomEvent('decorate', true, true, { some: 'data' });
						}

						target.dispatchEvent(event);
						
						require(['jsll'], function(jsll) {
							jsll.ct.captureContentUpdate({ timings: { didDeferExecTimeout: window._pageTimings.didDeferExecTimeout } });
						});
					};
					triggerDecoration(document.getElementById('mainArea'));
				}catch(e) {
					console.log(e);
				}
			});

		// HASH REDIRECT
		  if(window.location.hash && window.location.hash.toLowerCase() === '#business'){
		    $('.tabs-container .tab-officeforbusiness').trigger('click');
		  }
		  if(window.location.hash && window.location.hash.toLowerCase() === '#edu'){
		    $('.tabs-container .tab-officeforstudents').trigger('click');
		  }
		  if(window.location.hash && window.location.hash.toLowerCase() === '#mac'){
		    $('.tabs-container .tab-officeformac').trigger('click');
		  }
		  if(window.location.hash && window.location.hash.toLowerCase() === '#renew'){
		    $('.tabs-container .tab-officerenewal').trigger('click');
		  }

			/* FN to resize chart */
			function expPivotMeasurement(chartid){
				//Remove any existing styles
				$('.f-row', chartid).removeAttr('style');
				
				//Store vars
				var _compareChart = $(chartid),
					_numberCols = $('.f-column', _compareChart).length,
					_maxTimeout = 20,
					_currentHeight = 0,
					_itemToMeasure = null,
					_rowIndex = 0,
					_rowIndexArray = [],
					i, x;
				

				$('.f-column:eq(0) .f-row', _compareChart).each(function(){
					_currentHeight = $(this).height();
					_rowIndexArray.push($(this).index());
					_rowIndex = (_rowIndexArray.length -1);
					
					for(i = 1;i < _numberCols; i++){
						//Fail if > max
						if(i > _maxTimeout){
							break;
						}
						
						_itemToMeasure = $('.f-column:eq(' + [i] + ') .f-row:eq(' + _rowIndex + ')', _compareChart);
						
						if(_itemToMeasure.height() > _currentHeight){
							_currentHeight = _itemToMeasure.height();
						}
					}
					
					for(x = 0; x < _numberCols; x++){
						//Fail if > max
						if(x > _maxTimeout){
							break;
						}
						
						$('.f-column:eq(' + [x] + ') .f-row:eq(' + _rowIndex + ')', _compareChart).css({'height': _currentHeight + 'px'});
					}
				});
			}

			jQuery(window).resize(function() {
				expPivotMeasurement('.' + $('.exp-office-tab-control .tabs-container > a.active').data('tab'));
			});

			// FIXES ISSUE WITH IMAGES NOT BEING LOADED WHEN RESIZED
			var imageCount = $('.' + $('.exp-office-tab-control .tabs-container > a.active').data('tab') + ' img.lazyload').length,
				imagesLoaded = 0;
			$('.' + $('.exp-office-tab-control .tabs-container > a.active').data('tab') + ' img.lazyload').on('load',function(){
				imagesLoaded++;
				if(imagesLoaded >= imageCount) {
					expPivotMeasurement('.' + $('.exp-office-tab-control .tabs-container > a.active').data('tab'));		
				}
			});

			
			// EVENT: DOM INSERTED COMPLETE
			window.optimizely.push({
		        type: "event",
		        eventName: "store_us_dominsertcomplete"
		      });

			// BY DEFAULT SO IT WON'T CALC CORRECTLY
			// HOME OR PERSONAL
 			$('.exp-office-tab-control .tab-officeforhomeorpersonal').on('click', function(){ 
			    window['optimizely'].push({
			      type: "event",
			      eventName: "store_us_cat_homeorpersonal"
			    });
			});
			// BUSINESS
			$('.exp-office-tab-control .tab-officeforbusiness').on('click', function(){ 
			    window['optimizely'].push({
			      type: "event",
			      eventName: "store_us_cat_business"
			    });
			});

			// STUDENTS OR EDUCATORS
			$('.exp-office-tab-control .tab-officeforstudents').on('click', function(){ 
			    window['optimizely'].push({
			      type: "event",
			      eventName: "store_us_cat_studentoreducators"
			    });
			});

			// FOR MAC	    
			$('.exp-office-tab-control .tab-officeformac').on('click', function(){ 
			    window['optimizely'].push({
			      type: "event",
			      eventName: "store_us_cat_formac"
			    });
			});

			// RENEW    
			$('.exp-office-tab-control .tab-officerenewal').on('click', function(){ 
			    window['optimizely'].push({
			      type: "event",
			      eventName: "store_us_cat_renew"
			    });
			});

	    });   	
	});

});
}}, {"value": "<style>#HeroRegion .m-hero {\n\tpadding-left: 0;\n\tpadding-right: 0;\n\tpadding-top: 0;\n}\n/* TAB CONTROL */\n.exp-office-tab-control {\n    max-width: calc(1600px + 10%);\n    margin: 0 auto;\n    padding-left: 5%;\n    padding-right: 5%;\n    margin-top: 30px;\n}\n.exp-office-tab-control .tabs-container a {\n\tcursor: pointer;\n\twhite-space: nowrap;\n   \tmargin: 10px 23px;\n    font-size: 16px;\n    display: inline-block;\n    outline: transparent;\n}\n.exp-office-tab-control .tabs-container a.active {\n\tfont-weight: bold;\n    border-bottom: 2px solid #0078D7;\n    padding-bottom: 2px;\n}\n.exp-office-tab-control .tabs-container a:focus{\n  outline: 1px dotted #000;\n}\n.exp-office-tab-control .tabs-container a.active:focus{\n  outline: none; \n}\n.exp-office-tab-control header,\n.exp-office-tab-control p,\n.exp-office-tab-control .tabs-container {\n\tmargin: 0 auto;\n\ttext-align: center;\n}\n.exp-office-tab-control .tabs-container {\n\tmargin-top: 20px;\n\tmargin-bottom: 5px;\n}\n.exp-office-tab-control header {\n\tpadding: 0;\n\tmargin-bottom: 5px;\n}\n/* TAB CONTENT */\n.exp-office-sub-category .tab-content-officeforhomeorpersonal,\n.exp-office-sub-category .tab-content-officeforbusiness,\n.exp-office-sub-category .tab-content-officeforstudents,\n.exp-office-sub-category .tab-content-officeformac,\n.exp-office-sub-category .tab-content-officerenewal {\n\tdisplay:none;\n}\n.exp-office-sub-category div.show {\n\tdisplay: block;\n}\n\n/* MOBILE FIXES */\n@media only screen and (max-width: 539px) {\n\t.c-compare-chart [data-grid*=\"col-\"], .m-compare-chart [data-grid*=\"col-\"] {\n\t    width: 100%;\n\t}\n\n\t.m-compare-chart section .f-row {\n\t\theight: auto !important;\n\t}\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "A3B169AE-EB11-470F-8A68-D0BDD1656CC4"}]}], "name": "Tabbed Sub-Category"}], "audienceIds": null, "changes": null, "id": "8749032426", "integrationSettings": null}], "id": "8759783216", "weightDistributions": null, "name": "[CLONED 100% Challenger] Office Category: Original vs In-Page Sub-Category [13170949] - AdamG", "groupId": null, "commitId": "8784912096", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"dependencies": [], "type": "custom_code", "id": "3A0AE8B3-E00B-4047-9B24-27597A901A2C", "value": function($){window.optimizely = window.optimizely || [];

// EVENT: EXPERIMENT FIRED
window.optimizely.push({
  type: "event",
  eventName: "store_us_experimentfired"
});

var utils = window['optimizely'].get('utils');

utils.waitUntil(function() {
  if(window.jQuery) return true;
}).then(function() { 
	var $ = jQuery;

	// EVENT: BODY ENGAGEMENT 
	// DOES NOT TRACK AREA IN HERO EXCLUDING BUTTON
	jQuery('body').on('click', '#mainArea a, #mainArea button, #mainContent a, #mainContent button', function(){
	  window['optimizely'].push({
	    type: "event",
	    eventName: "store_us_body-ctr"
	  });
	});

	// EVENT: PAGE CTR
	// VERIFY ALL LINKS
	jQuery('body').on('click', 'a, button, .m-hero .c-carousel .c-hero', function(){
	  window['optimizely'].push({
	    type: "event",
	    eventName: "store_us_ctr"
	  });
	});

	// EVENT: UHF Navigation Link Click
	jQuery('body').on('click.exp-navlinkclicks', '#uhf-g-nav a, #uhf-c-nav a', function(){
	  window['optimizely'].push({
	    type: "event",
	    eventName: "store_us_universal-header-navigationlink"
	  });
	});

	// EVENT: UHF Footer Link Click
	jQuery('body').on('click.exp-footerlinkclicks', '#uhf-footer a', function(){
	  window['optimizely'].push({
	    type: "event",
	    eventName: "store_us_universal-footer-navigationlink"
	  });
	});

	// EVENT: SEARCH SUBMITTED 
	var searchSubmitted = false;
	jQuery('body').on('keypress.expsearch', '#cli_shellHeaderSearchInput', function(e){
	  if (searchSubmitted) return;
	  if (e.which == 13) {
	    searchSubmitted = true;
	    window['optimizely'].push({
	      type: "event",
	      eventName: "store_us_search_submitted"
	    });
	  }
	});
	jQuery('body').on('click.expsearch', '#search', function(e){
	  if (searchSubmitted) return;
	  if(window.innerWidth > 1083){
	  	searchSubmitted = true;
	    window['optimizely'].push({
	      type: "event",
	      eventName: "store_us_search_submitted"
	    });
	  }
	});
	jQuery('body').on('click.expautosuggest', '.m-auto-suggest .c-menu-item span, .m-auto-suggest .c-menu-item a', function(e){
		if (searchSubmitted) return;
	  	searchSubmitted = true;
	    window['optimizely'].push({
	      type: "event",
	      eventName: "store_us_search_submitted"
	    });
	});

	// CUSTOM ADDED
	// EVENT: HERO CLICKED
	jQuery('#HeroRegion').on('click', function(){ 
	    window['optimizely'].push({
	      type: "event",
	      eventName: "store_us_hero_region"
	    });
	});

});
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {"clicktale": {}}, "integrationStringVersion": 2, "viewIds": ["8466196703", "8637413135"], "experiments": [{"weightDistributions": [{"entityId": "8654200122", "endOfRange": 3333}, {"entityId": "8650600092", "endOfRange": 6666}, {"entityId": "8649630060", "endOfRange": 10000}], "audienceName": "Cookie: Optly_Test", "name": "Immersive Hero (Surface Book & Pro) [13378998] - JustinW", "bucketingStrategy": null, "variations": [{"id": "8654200122", "actions": [{"viewId": "8466196703", "changes": [{"dependencies": [], "type": "custom_code", "id": "40782F57-CA97-4A72-94EB-374C672BB184", "value": function($){//Utilities
var tabClassList = [];

$.fn.scrollComplete = function(callback, timeout) {          
  $(this).on('scroll', function() {
    var _this = $(this);

    if (_this.data('timeout')) {
      clearTimeout(_this.data('timeout'));
    }

    _this.data('timeout', setTimeout(callback, timeout));
  });
};

var stickyBar = function(navigation){
	var origPrice = (_pageBITags.pageContracts.ProductInfo.rtPrice != _pageBITags.pageContracts.ProductInfo.lstPrice ? _pageBITags.pageContracts.ProductInfo.rtPrice : null),
		curPrice = (_pageBITags.pageContracts.ProductInfo.lstPrice ? _pageBITags.pageContracts.ProductInfo.lstPrice : null),
		key,
		tabList = [],
		tabDropdown = [],
		addToCartButtonWidth = $('.m-product-detail-hero .cli_pdp-buy-button').outerWidth(),
		addToCartAreaWidth = (addToCartButtonWidth + 75),
		addToCartButtonText = $('.m-product-detail-hero .cli_pdp-buy-button').text(),
    skuSelectorButtonsLen = $('.cli_sku-select-button').length;
	
	if(navigation){
		for(key in navigation){
			tabClassList.push(navigation[key].tabclass);
			tabList.push('<a class="' + (navigation[key].tabselected ? 'f-active' : '') + '" role="tab" tabindex="0" data-tabclass="' + (navigation[key].tabclass ? navigation[key].tabclass : '') + '">' + (navigation[key].tabname ? navigation[key].tabname : '') + '</a>');
			tabDropdown.push('<li class="c-menu-item" role="presentation"><span tabindex="-1" role="option" aria-selected="' + (navigation[key].tabselected ? 'true' : 'false') + '">' + navigation[key].tabname + '</span></li>');	
		}
	}
	
	return ['<div style="clear:both;"></div><section id="exp-optly-stickyBar" class="' + (origPrice ? 'has-discount' : '') + '">',
				  '<div class="c-pivot">',
					'<div class="exp-skuinfo">',
						'<div class="exp-skuinfo-wrapper">',
								'<h5>' + _pageBITags.pageContracts.ProductInfo.title + '</h5>',
							'<p style="' + (skuSelectorButtonsLen < 2 ? 'display:none' : '') + '">' +  $.trim(($('.cli_skuMenuItems').length ? $('.cli_skuMenuItems a[aria-selected="true"]').text() : $('.cli_skuSelector button.active').attr('data-button-title'))) + '</h5>',
						 '</div>',
					'</div>',           
					'<div role="tablist">',
						tabList.join('\n'),
					'</div>',
					'<div class="exp-tabselector c-select">',
					  '<div class="c-select-menu f-persist"><button aria-haspopup="true" aria-expanded="false" tabindex="0" class="x-hidden-focus">Overview</button>',
						  '<ul class="c-menu" aria-hidden="true" role="listbox" tabindex="0">',
							  tabDropdown.join('\n'),
						  '</ul>',
					  '</div>',
					'</div>',           
					'<div class="exp-addtocart">',
						 '<div class="exp-addtocart-price">',
							'<s class="' + (origPrice ? 'has-discount' : '') + '">$<span class="origprice">' + (origPrice ? origPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '') + '</span></s>',
							'<div class="' + (curPrice ? '' : 'out-of-stock') + '">$<span class="curprice">' + (curPrice ? curPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '') + '</span></div>',
						  '</div>',
						 '<button class="c-button cli_pdp-buy-button pdp-action-buttons" type="submit">' + addToCartButtonText + '</button>',           
					'</div>',
			  '</div></section>'].join('\n');
};

var domElements = {};


var utils = window['optimizely'].get('utils');

utils.waitUntil(function() {
  if(window.jQuery) return true;
}).then(function() {
	var $ = window.jQuery;
  
  
    utils.waitForElement('.m-product-detail-hero-product-placement .cli_skuSelector').then(function(){
      $('#mainArea').addClass('exp-overview-tab');
      
      //Clear float fixes for base page
			$('#RequirementsStructuredList, #IncludesStructuredListDualColumn, #RatingReview, #FAQ, #TechSpec').before('<div class="exp-clearfloat"></div>');
      
      
      /* Sticky Bar */
      var tabModule = stickyBar([
					{
						tabclass : 'exp-overview-tab',
						tabname : 'Overview',
						tabselected : true
					},
					{
						tabclass : 'exp-techspecs-tab',
						tabname : 'Tech Specs'
					},
					{
						tabclass : 'exp-reviews-tab',
						tabname : 'Reviews'
					}
				]);
			//}
			
      utils.waitForElement('#mainRegion1').then(function(){
          $('#mainRegion1').prepend(tabModule).promise().done(function(){
            var paddingOffset = 0,
                 component = $('#exp-optly-stickyBar'),
                 componentOffset = component.offset().top;

                //Sticky Controller
                $(window).on('scroll', function(){
                  componentOffset = component.offset().top;

                  var scrollTop = $(window).scrollTop(),
                    distance = (componentOffset - scrollTop);

                  if(distance <= paddingOffset && !component.hasClass('exp-stuck')){
                    component.addClass('exp-stuck');
                  } else if(distance > paddingOffset && component.hasClass('exp-stuck')){
                    component.removeClass('exp-stuck');
                  }
                });

                $(window).on('resize', function(){
                  componentOffset = component.offset().top;
                });

                //Tab Controller
                $('#exp-optly-stickyBar a').on('click.toggleclass, keypress.toggleclass', function(e){
                  if(e && e.type === 'keypress' && e.keyCode !== 13){
                    return false;
                  }

                  componentOffset = component.offset().top;

                  var componentClickOffset = 0;

                  //Update tab class
                  $('#exp-optly-stickyBar a').removeClass('f-active');
                  $(this).addClass('f-active');

                  //Update parent wrapper
                  tabClassList.map(function(classname){
                    if($('#mainArea').hasClass(classname)){
                    $('#mainArea').removeClass(classname);
                    }
                  });

                  $('#mainArea').addClass($(this).data('tabclass'));

                  if(window.innerWidth > 850){
                    componentClickOffset = 30;
                  } else {
                    componentClickOffset = 10;
                  }

                  /* Update Mobile Nav */
                  var activeElm = $('#exp-optly-stickyBar a[data-tabclass="' + $(this).data('tabclass') + '"]'),
                    activeElmIndex = activeElm.index(),
                    activeElmText = activeElm.text();

                  $('#exp-optly-stickyBar .exp-tabselector span[aria-selected="true"]').attr('aria-selected', 'false');
                  $('#exp-optly-stickyBar .exp-tabselector button').text(activeElmText);
                  $('#exp-optly-stickyBar .exp-tabselector li:eq(' + activeElmIndex + ') span').attr('aria-selected', 'true');

                  $('html, body').animate({scrollTop: (componentOffset + componentClickOffset) + 'px'}, 'slow');

                  window['optimizely'].push({
                    type: "event",
                    eventName: "store_us_pivot_clicks"
                  });
                });

                $('body').on('click.addtocart','#exp-optly-stickyBar .cli_pdp-buy-button', function(){
                  window['optimizely'].push({
                    type: "event",
                    eventName: "store_us_expControl_StickyBar_addedToCart"
                  });

                   $('.m-product-detail-hero .cli_pdp-buy-button:visible').trigger('click');
                });

                //Update When Selected Vid Changes
                $('.m-product-detail-hero').on('click', '.cli_skuMenuItems a, .cli_skuSelector button', function(){
                  var origPrice = $.trim($('.price-info .srv_saleprice').text()),
                    curPrice = $.trim($('.price-info .price-text span').text());

                  $('.exp-skuinfo p').text( $.trim(($('.cli_skuMenuItems').length ? $('.cli_skuMenuItems a[aria-selected="true"]').text() : $('.cli_skuSelector button.active').attr('data-button-title'))));

                  if(origPrice.length){
                    $('.exp-addtocart-price s').addClass('has-discount');
                  } else {
                    $('.exp-addtocart-price s').removeClass('has-discount');
                  }

                  if(curPrice.length){
                    $('.exp-addtocart-price > div').removeClass('out-of-stock');
                  } else {
                    $('.exp-addtocart-price > div').addClass('out-of-stock');
                  }

                  $('.exp-addtocart-price span.origprice').text(origPrice.replace(/[^,.0-9]/g,''));
                  $('.exp-addtocart-price span.curprice').text(curPrice.replace(/[^,.0-9]/g,''));
                });

          });
      
			
          var elementsByProduct = domElements[(_pageBITags && _pageBITags.pageContracts && _pageBITags.pageContracts.ProductInfo ? _pageBITags.pageContracts.ProductInfo.id : '')];

          var insertModule = function(){
            if(elementsByProduct[0].action.toLowerCase() === 'prepend'){
              $(elementsByProduct[0].target).prepend(elementsByProduct[0].module);
            } else if(elementsByProduct[0].action.toLowerCase() === 'after'){
              $(elementsByProduct[0].target).after(elementsByProduct[0].module);
            } else if(elementsByProduct[0].action.toLowerCase() === 'before'){
              $(elementsByProduct[0].target).before(elementsByProduct[0].module);
            } else if(elementsByProduct[0].action.toLowerCase() === 'replacewith'){
              $(elementsByProduct[0].target).replaceWith(elementsByProduct[0].module);
            }	

            //Callback, if one exists
            if(elementsByProduct[0].callback){
              elementsByProduct[0].callback();
            }

            elementsByProduct.shift();

            if(elementsByProduct.length){
              insertModule();
            }
          };

          if(elementsByProduct && elementsByProduct.length){
            insertModule();
          }		  
	  });
			
        /* Mobile Click Events */
        $('body').on('click.exp_selectmenu_button', '.exp-tabselector button', function(){
          //$(this).attr('aria-expanded', 'true').next('ul').attr('aria-hidden', 'false');
        });

        $('body').on('click.exp_selectmenu_option', '.exp-tabselector .c-menu span', function(){
          var value = $(this).data('value'),
              index = $(this).closest('li').index(),
              selectedText = $.trim($(this).text());

          //Click hidden nav links
          $('#exp-optly-stickyBar div[role="tablist"] a:eq(' + index + ')').trigger('click');

          //Update custom list
          $('span[aria-selected="true"]').attr('aria-selected', 'false');
          $(this).attr('aria-selected', 'true');	

          //Update label & close dropdown
          $('button', $(this).closest('.c-select-menu')).text(selectedText).attr('aria-expanded', 'false').next('ul').attr('aria-hidden', 'true');
        });

    	
        //Trigger click on review tab
        if(window.location.hash && window.location.hash.toLowerCase() === '#ratings-reviews'){
          $(window).scrollTop(($('#RatingReview').position().top + 15));
        }

      	$('body').on('click', '.m-product-detail-hero-product-placement .c-rating a', function(){
          $('#exp-optly-stickyBar a[data-tabclass="exp-reviews-tab"]').trigger('click');
        });
      
      
      
      
      /* End Sticky Bar */
    });  
  
  
	  utils.waitForElement('#RatingReview').then(function(){
		setTimeout(function(){
			$('#mainArea').addClass('exp-reviews-loaded');
		}, 1500);

		setTimeout(function(){
			if(!$('#mainArea.exp-reviews-loaded').length){
			$('#mainArea').addClass('exp-reviews-loaded');
		  }
		}, 2500);
	  });  
  
  
    var skuChanged = false;
    $('html').on('click', '.cli_sku-select-button', function(){
      if($(this).data('sku-id') != _pageBITags.pageContracts.ProductInfo.sku){
        skuChanged = true;
      }
    });

    $('html').on('click.optly_nondefaultsku', '.cli_pdp-buy-button', function(){
      if(!skuChanged){
        window['optimizely'].push({
          type: "event",
          eventName: "store_us_addtocart_defaultsku"
        });
      }
    });
  
});
}}, {"value": "<style>#mainRegion1 [id^=\"Feature\"],\n#Feature2CenteredRegion,\n#mainRegion2 [id^=\"Feature\"],\n#mainRegion2 #TechSpec{\n\tdisplay: none;\n}\n#mainRegion2 #RatingReview{\n height: 0;\n overflow: hidden;\n width: 100%;\n}\n.exp-overview-tab #mainRegion1 [id^=\"Feature\"],\n.exp-overview-tab #Feature2CenteredRegion,\n.exp-overview-tab #mainRegion2 [id^=\"Feature\"],\n.exp-reviews-tab #mainRegion2 #RatingReview,\n.exp-techspecs-tab #mainRegion2 #TechSpec{\n display: block; \n}\n.exp-reviews-tab.exp-reviews-loaded #mainRegion2 #RatingReview{\n height: inherit;\n overflow: visible;\n}\n\n.exp-clearfloat{\n clear: both; \n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "31D5E7C9-D504-4071-897A-4F86DFA95659"}]}, {"viewId": "8637413135", "changes": [{"dependencies": [], "type": "custom_code", "id": "051CF526-05EF-4A29-86A6-FF7585319120", "value": function($){var addCssFile = function(file){
	var head = document.getElementsByTagName('head')[0], 
		stylesheet = document.createElement('link');

		stylesheet.type = 'text/css';
		stylesheet.rel = 'stylesheet';
		stylesheet.href = file;

		head.appendChild(stylesheet);
};

addCssFile('//statics-onestore-eus-ms-com.akamaized.net/west-european/store/_scrf/css/themes=store-web-default.device=uplevel_web_pc_webkit_chrome/a1-377e40/99-08b2bc/ef-2ed113/b5-dcc9d1/2c-557c86/aa-5d2157/33-542bbe/f7-eb8c6a/6c-d0e0d3/7a-882889/ab-d4792e/da-5468e7?ver=2.0');
addCssFile('https://statics-onestore-eus-ms-com.akamaized.net/west-european/store/_scrf/css/themes=store-web-default.device=uplevel_web_pc_webkit_chrome/a1-377e40/99-08b2bc/ef-2ed113/b5-dcc9d1/2c-557c86/aa-5d2157/33-542bbe/f7-eb8c6a/6c-d0e0d3/7a-882889/ab-d4792e/da-5468e7?ver=2.0');

/* _pageBITags object doesn't exist, so need to check QS */
var productId = null;
if(window.location.pathname.toUpperCase().indexOf('/8TXJ08Q9LXDT') !== -1){
	productId = '8TXJ08Q9LXDT';
} else if(window.location.pathname.toUpperCase().indexOf('/8NKT9WTTRBJK') !== -1){
	productId = '8NKT9WTTRBJK';
}



var checkInventoryStatus = function(obj, callback){  
	var pid = (obj.pid ? obj.pid : null), 
		sku = (obj.sid ? obj.sid : null), 
		distributorid = (obj.did ? obj.did : null), 
		availabilityid = (obj.aid ? obj.aid : null),
		pathNameArray = window.location.pathname.split('/').filter(Boolean),
		locale = (pathNameArray && pathNameArray.length ? pathNameArray[0].split('-') : null),
		countryRegion = (locale && locale.length ? locale[1] : null);
	
	try {
		$.ajax({
		  type: "POST",
		  url: 'https://inv.mp.microsoft.com/v2.0/inventory/' + countryRegion + '?mode=continueOnError',
		  data: JSON.stringify([{
			productId: pid, 
			skuId: sku, 
			availabilityid: availabilityid, 
			distributorid: distributorid
		  }]),
		success: function(data){
			(callback ? callback(data) : '');
		},
		  dataType: 'json',
		  contentType: 'application/json'
		}); 
	} catch (e) {
		//Error
	}
};

// VARS
var utility = {
		object : {
			find : function(obj, prop) {
				//Prop must be child of passed obj
				var testObj = (typeof(obj) == 'string' ? JSON.parse(obj) : obj);
				
				var iterate = function(obj, prop){
					var nested = prop.indexOf('.');	
					
					if(!obj){
						return null;
					}
					
					if(nested != -1){
						return iterate(obj[prop.substring(0, nested)], prop.substr(nested +1));
					}
					
					return obj[prop];
				};
			
				if(prop){
					return iterate(testObj, prop);
				} else {
					return testObj;
				}
			}
		}
};

var configuratorPathObj = {
	'processor' : '0',
	'memory' : '0',
	'storage' : '0'
};

var configuratorSelectedArray = [];
var skuChanged = false;

var availabilityObj = {
	'8TXJ08Q9LXDT' : {
		'90L2' : {
			'aid' : '8W4NX0R3BFWZ',
			'title' : 'Microsoft Surface Book - 128GB / Intel Core i5'
		},
		'GXPZ' : {
			'aid' : '8W36C4K4N8ZB',
			'title' : 'Microsoft Surface Book - 256GB / Intel Core i5'
		},
		'04KS' : {
			'aid' : '8WCN1TNLKS7H',
			'title' : 'Microsoft Surface Book - 256GB / Intel Core i5'
		},
		'1ZDH' : {
			'aid' : '8WC93XWJR9F9',
			'title' : 'Microsoft Surface Book - 512GB / Intel Core i5'
		},
		'BW3T' : {
			'aid' : '8MK7ZN37QFN1',
			'title' : 'Microsoft Surface Book - 512GB / Intel Core i7'
		}
	},
	'8NKT9WTTRBJK' : {
		'H3CS' : {
			'aid' : '8WB2L3RX5RHT',
			'title' : 'Surface Pro - Intel Core m3 / 128GB SSD / 4GB RAM'
		},
		'LHL3' : {
			'aid' : '8WFW33T52MN8',
			'title' : 'Surface Pro - Intel Core i5 / 128GB SSD / 4GB RAM'
		},
		'1TSK' : {
			'aid' : '8W5RRMSJ0L7P',
			'title' : 'Surface Pro - Intel Core i5 / 256GB SSD / 8GB RAM'
		},
		'BV89' : {
			'aid' : '8WFCVL5RH1VN',
			'title' : 'Surface Pro - Intel Core i7 / 256GB SSD / 8GB RAM'
		},
		'L6FV' : {
			'aid' : '8W7VR9DD6NNV',
			'title' : 'Surface Pro - Intel Core i7 / 512GB SSD / 16GB RAM'
		},
		'C2HQ' : {
			'aid' : '8W1WNR6VNSLM',
			'title' : 'Surface Pro - Intel Core i7 / 1TB SSD / 16GB RAM'
		}
	}
	
};

var configuratorMapping = {
	'8TXJ08Q9LXDT' : {
		'processor' : [
			{
				'name' : 'Intel Core i5',
				'price' : '1499.00',
				'shortdesc' : '',
				'key' : 'Corei5',
				'sid' : '90L2',
				'options' : {
					'memory' : [
						{
							'name' : '8GB',
							'price' : '1499.00',
							'key' : '8GB',
							'sid' : '90L2',
							'options' : {
								'storage' : [
									{
										'name' : '128GB',
										'price' : '1499.00',
										'key' : '128GB',
										'sid' : '90L2'
									},
									{
										'name' : '256GB',
										'price' : '1699.00',
										'key' : '256GB',
										'sid' : 'GXPZ'
									},
									{
										'name' : '256GB / dGPU',
										'price' : '1899.00',
										'key' : '256GBdGPU',
										'sid' : '04KS'
									},
									{
										'name' : '512GB',
										'price' : '1999.00',
										'key' : '512GB',
										'sid' : '1ZDH'
									}
								
								]
							}
						}
					]
				
				}
			},
			{
				'name' : 'Intel Core i7',
				'price' : '2499.00',
				'shortdesc' : '',
				'key' : 'Corei7',
				'sid' : 'BW3T',			
				'options' : {
					'memory' : [
						{
							'name' : '16GB',
							'price' : '2499.00',
							'key' : '16GB',
							'sid' : 'BW3T',
							'options' : {
								'storage' : [
									{
										'name' : '512GB',
										'price' : '2499.00',
										'key' : '512GB',
										'sid' : 'BW3T'
									}
								]
							}
						}
					]
				}
			}
		]
	},
	'8NKT9WTTRBJK' : {
		'processor' : [
			{
				'name' : 'Intel Core m3',
				'price' : '799.00',
				'shortdesc' : '',
				'key' : 'Corem3',
				'sid' : 'H3CS',			
				'options' : {
					'memory' : [
						{
							'name' : '4GB',
							'price' : '799.00',
							'key' : '4GB',
							'sid' : 'H3CS',
							'options' : {
								'storage' : [
									{
										'name' : '128GB',
										'price' : '799.00',
										'key' : '128GB',
										'sid' : 'H3CS'
									}
								]
							}
						}
					]
				}
			},
			{
				'name' : 'Intel Core i5',
				'price' : '999.00',
				'shortdesc' : '',
				'key' : 'Corei5',
				'sid' : 'LHL3',
				'options' : {
					'memory' : [
						{
							'name' : '4GB',
							'price' : '999.00',
							'key' : '4GB',
							'sid' : 'LHL3',
							'options' : {
								'storage' : [
									{
										'name' : '128GB',
										'price' : '999.00',
										'key' : '128GB',
										'sid' : 'LHL3'
									}								
								]
							}
						},
						{
							'name' : '8GB',
							'price' : '1299.00',
							'key' : '8GB',
							'sid' : '1TSK',
							'options' : {
								'storage' : [
									{
										'name' : '256GB',
										'price' : '1299.00',
										'key' : '256GB',
										'sid' : '1TSK'
									}								
								]
							}
						}
					]
				
				}
			},
			{
				'name' : 'Intel Core i7',
				'price' : '1599.00',
				'shortdesc' : '',
				'key' : 'Corei7',
				'sid' : 'BV89',			
				'options' : {
					'memory' : [
						{
							'name' : '8GB',
							'price' : '1599.00',
							'key' : '8GB',
							'sid' : 'BV89',
							'options' : {
								'storage' : [
									{
										'name' : '256GB',
										'price' : '1599.00',
										'key' : '256GB',
										'sid' : 'BV89'
									}
								]
							}
						},
						{
							'name' : '16GB',
							'price' : '2199.00',
							'key' : '16GB',
							'sid' : 'L6FV',
							'options' : {
								'storage' : [
									{
										'name' : '512GB',
										'price' : '2199.00',
										'key' : '512GB',
										'sid' : 'L6FV'
									},
									{
										'name' : '1TB',
										'price' : '2699.00',
										'key' : '1TB',
										'sid' : 'C2HQ'
									}
								]
							}
						}
					]
				}
			}
		]
	}	
};



var reviewBar = ['<div data-grid="col-12" class="m-page-bar m-bundle-review" data-js-page-bar-target="in-page" data-cc="" id="in-page">',
					'<div data-grid="col-8">',
						'<div>',
							'<div class="context-menu hide-pagebarsummary">',
								'<div class="bundle-review-summary" data-grid="col-12">',
									'<div>',
										'<h4 class="c-heading-4 x-hidden-focus">Configure your device</h4>',
									'</div>',
									'<div class="c-subheading-5">Choose from the options below.</div>',
								'</div>',
								   '<div class="add-info-container" data-grid="col-12">',
									'<span class="additionalinfo c-paragraph-4" style="display: inline;">Microsoft Surface Pro 4 - 128GB / Intel Core i5</span></div>',
							'</div>',
							'<div class="c1-price-container price-container x-hidden-vp4 x-hidden-vp5 x-hidden-vp6">',
								'<div>',
									'<div class="c-price ">',
									'<div class="c-price">',
											'<div class="price-text srv_price">',
												'<span>$999.00</span>',
											'</div>',
										'<div class="srv_microdata" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">',
											'<meta itemprop="price" content="999">',
											'<meta itemprop="priceCurrency" content="USD">',
										'</div>',
									'</div>',
								'</div>',
									'<div class="c-caption-1 cli_promiseDate x-hidden">',
										'<p class="cli_promiseRelease release-date">',
											'Release date:',
											'<span class="cli_promiseReleaseDate"></span>',
										'</p>',
									'</div>',
								'</div>',
								'<div class="checkout-button">',
									'<button class="c-button c1-bundle-review" type="submit">Add to cart</button>',
								'</div>',
							'</div>',
						'</div>',
					'</div>',
					'<div class="price-container full-price-container x-hidden-vp1 x-hidden-vp2 x-hidden-vp3" data-grid="col-4">',
						'<div>',
							'<div class="c-price f-lean">',
								 '<div class="c-price">',
										'<div class="price-text srv_price">',
											'<span>$999.00</span>',
										'</div>',
									'<div class="srv_microdata" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">',
										'<meta itemprop="price" content="999">',
										'<meta itemprop="priceCurrency" content="USD">',
									'</div>',
								'</div>',
								'</div>',
							'<div class="c-caption-1 cli_promiseDate x-hidden">',
								'<p class="cli_promiseRelease release-date">',
									'Release date:',
									'<span class="cli_promiseReleaseDate"></span>',
								'</p>',
							'</div>',
						'</div>',
						'<div class="checkout-button">',
							'<button class="c-button review-button-margin-top" type="submit">Add to cart</button>',
						'</div>',
					'</div>',
				'</div>'].join('');

var prodCarousel_SurfaceBook = ['<div class="m-product-detail-hero-carousel" data-grid="col-12""><div class="c-carousel f-multi-slide f-scrollable-previous f-scrollable-next cli_skuMediaBrowser" data-sku-id="90L2" role="region" aria-label="Product images" style="touch-action: pan-y; -webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">',
        '<div class="c-sequence-indicator" role="radiogroup" aria-hidden="false">',
            '<button role="radio" aria-checked="true" aria-label="View Image 0" aria-controls="hero-slide-0" title="Image 0" tabindex="0" class="f-active"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 1" aria-controls="hero-slide-1" title="Image 1" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 2" aria-controls="hero-slide-2" title="Image 2" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 3" aria-controls="hero-slide-3" title="Image 3" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 4" aria-controls="hero-slide-4" title="Image 4" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 5" aria-controls="hero-slide-5" title="Image 5" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 6" aria-controls="hero-slide-6" title="Image 6" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 7" aria-controls="hero-slide-7" title="Image 7" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 8" aria-controls="hero-slide-8" title="Image 8" tabindex="-1"></button>',
        '</div>',
        '<button data-m="{&quot;cN&quot;:&quot;PreviousSlide&quot;,&quot;id&quot;:&quot;nn10c1c2c1m1r1a2&quot;,&quot;sN&quot;:10,&quot;aN&quot;:&quot;c1c2c1m1r1a2&quot;}" class="c-flipper f-previous" aria-label="View previous" title="View previous" tabindex="-1"></button>',
        '<button data-m="{&quot;cN&quot;:&quot;NextSlide&quot;,&quot;id&quot;:&quot;nn11c1c2c1m1r1a2&quot;,&quot;sN&quot;:11,&quot;aN&quot;:&quot;c1c2c1m1r1a2&quot;}" class="c-flipper f-next" aria-label="View next" title="View next" tabindex="-1"></button>',
    '<div>',
        '<ul class="c-group">',
                '<li id="hero-slide-0" data-f-theme="" class="f-active">',
                    '<picture class="c-image">',
						'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)"><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)"><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)"><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)"><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)"><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyloaded x-hidden-focus" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-1" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-2" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-3" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-4" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-5" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-6" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-7" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-8" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
        '</ul>',
    '</div>',
'</div></div>'].join('');

var prodCarousel_SurfacePro = ['<div class="m-product-detail-hero-carousel" data-grid="col-12""><div class="c-carousel f-multi-slide f-scrollable-previous f-scrollable-next cli_skuMediaBrowser" data-sku-id="90L2" role="region" aria-label="Product images" style="touch-action: pan-y; -webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">',
												'<div class="c-sequence-indicator" role="radiogroup" aria-hidden="false">',
													'<button role="radio" aria-checked="true" aria-label="View Image 0" aria-controls="hero-slide-0" title="Image 0" tabindex="0" class="f-active"></button>',
													'<button role="radio" aria-checked="false" aria-label="View Image 1" aria-controls="hero-slide-1" title="Image 1" tabindex="-1"></button>',
													'<button role="radio" aria-checked="false" aria-label="View Image 2" aria-controls="hero-slide-2" title="Image 2" tabindex="-1"></button>',
													'<button role="radio" aria-checked="false" aria-label="View Image 3" aria-controls="hero-slide-3" title="Image 3" tabindex="-1"></button>',
												'</div>',
												'<button data-m="{&quot;cN&quot;:&quot;PreviousSlide&quot;,&quot;id&quot;:&quot;nn10c1c2c1m1r1a2&quot;,&quot;sN&quot;:10,&quot;aN&quot;:&quot;c1c2c1m1r1a2&quot;}" class="c-flipper f-previous" aria-label="View previous" title="View previous" tabindex="-1"></button>',
												'<button data-m="{&quot;cN&quot;:&quot;NextSlide&quot;,&quot;id&quot;:&quot;nn11c1c2c1m1r1a2&quot;,&quot;sN&quot;:11,&quot;aN&quot;:&quot;c1c2c1m1r1a2&quot;}" class="c-flipper f-next" aria-label="View next" title="View next" tabindex="-1"></button>',
											'<div>',
											'<ul class="c-group">',
												'<li id="hero-slide-0" data-f-theme="" class="f-active">',
													'<picture class="c-image">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyloaded" alt="Surface Pro" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
													'</picture>',
												'</li>',
												'<li id="hero-slide-1" data-f-theme="">',
													'<picture class="c-image">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Surface Pro" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
													'</picture>',
												'</li>',
												'<li id="hero-slide-2" data-f-theme="">',
													'<picture class="c-image">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Surface Pro" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
													'</picture>',
												'</li>',
												'<li id="hero-slide-3" data-f-theme="">',
													'<picture class="c-image">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Surface Pro" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
													'</picture>',
												'</li>',
											'</ul>',
										'</div>',
									'</div></div>'].join('');

var configHtml_SurfaceBook = ['<div id="ProductConfigurator">',
    '<div data-grid="container" class="configroot" data-id="8TXJ08Q9LXDT" data-culture="en-US" data-market="US" data-aurl="https://inv.mp.microsoft.com/v2.0/inventory/US?MS-CorrelationId=adeb77ec-849a-47cd-aae8-cafe832dbdde&amp;MS-RequestId=adeb77ec-849a-47cd-aae8-cafe832dbdde&amp;mode=continueOnError">',
        '<div class="" data-grid="col-4">',
						prodCarousel_SurfaceBook,
        '</div>',
      '<div class="m-configdata" data-grid="col-8">',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Processor</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_0" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_0" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">You can upgrade the processor to an Intel Core i5 for stronger performance, or an Intel Core i7 for the highest performance. The Intel Core i7 option includes Intel Iris graphics, making your photo, video, and 3D applications run faster. It also gives you the ability to play more PC games.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Processor" data-rh="RichText" role="group" aria-labelledby="Processor_Label" id="processor-row">',
                  '<button class="c-select-button" name="Processor" data-key="Corei5" aria-pressed="true" data-js-selected-text="Intel Core i5 has been selected">',
                  '<h6 class="c-heading-6 x-type-left">Intel Core i5</h6>',
        '<p class="c-paragraph-6 short_desc x-type-left">Create and edit large databases or documents with Office. Make music with professional-grade apps. Do advanced photo editing with programs like Adobe Creative Cloud.</p>            </button>',
                  '<button class="c-select-button" name="Processor" data-key="Corei7" aria-pressed="false" data-js-selected-text="Intel Core i7 has been selected">',
                  '<h6 class="c-heading-6 x-type-left">Intel Core i7</h6>',
        '<p class="c-paragraph-6 short_desc x-type-left">Make professional HD video edits with programs like Adobe Premier Pro CC3. Run professional-grade apps like Visual Studio, or design and build 3D models with programs like AutoCAD. Run power-intensive software with ease.</p>            </button>',
              '</div>',
          '</div>',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Memory</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_1" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_1" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">If you’re interested in performing more intensive tasks, it’s important to upgrade your memory now so you are prepared. 16GB allows your device to run more apps at the same time, edit high-resolution photos/videos with amazing smoothness, and develop applications more easily.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Memory" data-rh="RichText" role="group" aria-labelledby="Memory_Label" id="memory-row">',
			  '<button class="c-select-button" name="Memory" data-key="8GB" aria-pressed="false" data-js-selected-text="8GB has been selected">',
                  '<h6 class="c-heading-6 x-type-left">8GB</h6>',
              '</button>',
                  '<button class="c-select-button" name="Memory" data-key="16GB" aria-pressed="false" data-js-selected-text="16GB has been selected">',
                  '<h6 class="c-heading-6 x-type-left">16GB</h6>',
              '</button>',
              '</div>',
          '</div>',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Storage</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_2" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_2" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">If you think you might want room for more applications, documents, and music, you should consider upgrading to at least 256GB of storage. If you plan to store a lot of high-resolution photos/videos or play the latest PC games, consider choosing 512GB or 1TB for the most flexibility.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Storage" data-rh="RichText" role="group" aria-labelledby="Storage_Label" id="storage-row">',
                  '<button class="c-select-button" name="Storage" data-key="128GB" data-def="true">',
                  '<h6 class="c-heading-6 x-type-left">128GB</h6>',
              '</button>',
                  '<button class="c-select-button" name="Storage" data-key="256GB" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">256GB</h6>',
              '</button>',
			  '<button class="c-select-button" name="Storage" data-key="256GBdGPU" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">256GB / dGPU</h6>',
              '</button>',
                  '<button class="c-select-button" name="Storage" data-key="512GB" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">512GB</h6>',
              '</button>',
              '</div>',
          '</div>',
      '</div>',
'</div>',
'</div>'].join('');

var configHtml_SurfacePro = ['<div id="ProductConfigurator">',
    '<div data-grid="container" class="configroot" data-id="8NKT9WTTRBJK" data-culture="en-US" data-market="US" data-aurl="https://inv.mp.microsoft.com/v2.0/inventory/US?MS-CorrelationId=adeb77ec-849a-47cd-aae8-cafe832dbdde&amp;MS-RequestId=adeb77ec-849a-47cd-aae8-cafe832dbdde&amp;mode=continueOnError">',
        '<div class="" data-grid="col-4">',
						prodCarousel_SurfacePro,
        '</div>',
      '<div class="m-configdata" data-grid="col-8">',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Processor</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_0" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_0" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">You can upgrade the processor to an Intel Core i5 for stronger performance, or an Intel Core i7 for the highest performance. The Intel Core i7 option includes Intel Iris graphics, making your photo, video, and 3D applications run faster. It also gives you the ability to play more PC games.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Processor" data-rh="RichText" role="group" aria-labelledby="Processor_Label" id="processor-row">',
                  '<button class="c-select-button" name="Processor" data-key="Corem3" aria-pressed="true" data-js-selected-text="Intel Core m3 has been selected">',
                  '<h6 class="c-heading-6 x-type-left">Intel Core M</h6>',
        '<p class="c-paragraph-6 short_desc x-type-left">Runs desktop software just like a laptop. Draw and sketch on screen. Stream music and shows with iTunes and Netflix.</p>',
		'</button>',
				  '<button class="c-select-button" name="Processor" data-key="Corei5" aria-pressed="false" data-js-selected-text="Intel Core i5 has been selected">',
                  '<h6 class="c-heading-6 x-type-left">Intel Core i5</h6>',
        '<p class="c-paragraph-6 short_desc x-type-left">Create and edit large databases or documents with Office. Make music with professional-grade apps. Do advanced photo editing with programs like Adobe Creative Cloud.</p>            </button>',
                  '<button class="c-select-button" name="Processor" data-key="Corei7" aria-pressed="false" data-js-selected-text="Intel Core i7 has been selected">',
                  '<h6 class="c-heading-6 x-type-left">Intel Core i7</h6>',
        '<p class="c-paragraph-6 short_desc x-type-left">Make professional HD video edits with programs like Adobe Premier Pro CC3. Run professional-grade apps like Visual Studio, or design and build 3D models with programs like AutoCAD. Run power-intensive software with ease.</p>            </button>',
              '</div>',
          '</div>',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Memory</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_1" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_1" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">If you’re interested in performing more intensive tasks, it’s important to upgrade your memory now so you are prepared. 16GB allows your device to run more apps at the same time, edit high-resolution photos/videos with amazing smoothness, and develop applications more easily.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Memory" data-rh="RichText" role="group" aria-labelledby="Memory_Label" id="memory-row">',
			  '<button class="c-select-button" name="Memory" data-key="4GB" aria-pressed="false" data-js-selected-text="4GB has been selected">',
                  '<h6 class="c-heading-6 x-type-left">4GB</h6>',
              '</button>',
			  '<button class="c-select-button" name="Memory" data-key="8GB" aria-pressed="false" data-js-selected-text="8GB has been selected">',
                  '<h6 class="c-heading-6 x-type-left">8GB</h6>',
              '</button>',
                  '<button class="c-select-button" name="Memory" data-key="16GB" aria-pressed="false" data-js-selected-text="16GB has been selected">',
                  '<h6 class="c-heading-6 x-type-left">16GB</h6>',
              '</button>',
              '</div>',
          '</div>',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Storage</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_2" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_2" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">If you think you might want room for more applications, documents, and music, you should consider upgrading to at least 256GB of storage. If you plan to store a lot of high-resolution photos/videos or play the latest PC games, consider choosing 512GB or 1TB for the most flexibility.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Storage" data-rh="RichText" role="group" aria-labelledby="Storage_Label" id="storage-row">',
                  '<button class="c-select-button" name="Storage" data-key="128GB" data-def="true">',
                  '<h6 class="c-heading-6 x-type-left">128GB</h6>',
              '</button>',
                  '<button class="c-select-button" name="Storage" data-key="256GB" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">256GB</h6>',
              '</button>',
                  '<button class="c-select-button" name="Storage" data-key="512GB" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">512GB</h6>',
              '</button>',
			  '<button class="c-select-button" name="Storage" data-key="1TB" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">1TB</h6>',
              '</button>',
              '</div>',
          '</div>',
      '</div>',
'</div>',
'</div>'].join('');

var pageHTML = ['<section id="mainArea"><div id="mainProdPlace">',
           '<div id="SurfaceConfigurator">',     
            '<div>',
              reviewBar,
            '</div>',
            	(productId === '8TXJ08Q9LXDT' ? configHtml_SurfaceBook : configHtml_SurfacePro),
           '</div>',
           '</div>',
        '</section>'].join('');
			
var utils = window['optimizely'].get('utils');

utils.waitUntil(function() {
  if(window.jQuery) return true;
}).then(function() {
	var $ = window.jQuery;
  
  utils.waitForElement('#headerArea').then(function(){

	  //Utility Functions
	  var updateSummaryPanel = function(price, title, atcurl, invstatus){
			$('.m-bundle-review .srv_price span').html((price ? ('$' + price.replace(/[^,.0-9]/g,'')) : '$0.00'));
			
			$('.m-bundle-review .add-info-container .additionalinfo').html(title);
			
			if(invstatus){
				$('.m-bundle-review .checkout-button .c-button').removeAttr('disabled').text('Add to cart').attr('addtocarturl', atcurl).removeClass('disabled');	
			} else {
				$('.m-bundle-review .checkout-button .c-button').attr('disabled', 'disabled').text('Out of stock').addClass('disabled');
			}
			
	  };
	  
	  var stickyController = function(){
			var scrollAnchor = $('#mainProdPlace'),
				stickyBar = $('.m-page-bar'),
				componentOffset = 0,
				paddingOffset = 0;
			
			$(window).on('scroll', function(){
				componentOffset = scrollAnchor.offset().top;

				var scrollTop = $(window).scrollTop(),
					distance = (componentOffset - scrollTop);

				if(distance <= paddingOffset && !stickyBar.hasClass('f-sticky')){
				  stickyBar.addClass('f-sticky f-show');
				} else if(distance > paddingOffset && stickyBar.hasClass('f-sticky')){
				  stickyBar.removeClass('f-sticky f-show');
				}
			});	
	  };
	  
	  var updateRowPricing = function(target){
		  var selectedPrice = ($('.c-select-button[aria-pressed="true"]', target).length ? $('.c-select-button[aria-pressed="true"]', target).data('price') : $('.c-select-button:eq(0)', target).data('price')),
			  priceDiff = null;
		  
		  $('.c-select-button', target).each(function(){
				priceDiff = (parseFloat($(this).data('price')) - parseFloat(selectedPrice));
				
				$('.price-diff', this).html((priceDiff >= 0 ? '+' : '-') + ' $' + Math.abs(priceDiff).toFixed(2));
		  });
		  
	  };
	  
	  var resetOptions = function(){
		  $('#ProductConfigurator button.c-select-button').attr('disabled','disabled').attr('aria-pressed', 'false');
		  
		  $('#processor-row button.c-select-button').each(function(index){
			$(this).data('indexkey', index);
		  });
		  
		  $('#memory-row button.c-select-button').each(function(index){
			$(this).data('indexkey', index);
		  });
		  
		  $('#storage-row button.c-select-button').each(function(index){
			$(this).data('indexkey', index);
		  });
	  };
	  
	  //Inject new config layout
	  var processorRow = function(){
			var processorIndex = (configuratorPathObj.processor ? configuratorPathObj.processor : '0'),
				dataObj = utility.object.find(configuratorMapping[productId], 'processor'),
				htmlChunk = [],
				defaultPrice = null;
			
			if(!dataObj){		
				return false;
			}

			dataObj.map(function(value, index){
				if(!index){
					//Set default
					$('#processor-row button.c-select-button[data-key="' + value.key + '"]').attr('aria-pressed', 'true');
					
					var _thisPrice = value.price,
						_thisSid = value.sid,
						_thisPid = productId,
						_thisObj = availabilityObj[_thisPid],
						addToCartURL = '/en-us/store/buy?pid=' + _thisPid + '&sid=' + _thisSid + '&aid=' + _thisObj[_thisSid].aid,
						productTitle = _thisObj[_thisSid].title;
					
					checkInventoryStatus({
						'pid' : _thisPid,
						'sid' : _thisSid,
						'did' : '9000000013',
						'aid' : _thisObj[_thisSid].aid
					}, function(data){
						var invStatus = (data.inStock === "True" ? true : false);
						
						$('#processor-row button.c-select-button:eq(0)').data('instock', invStatus);
						updateSummaryPanel(_thisPrice, productTitle, addToCartURL, invStatus);
					});
				}
				
				$('#processor-row button.c-select-button[data-key="' + value.key + '"]').removeAttr('disabled').data('price', value.price).data('sid', value.sid);
			});
		};
		
		var memoryRow = function(){
			var processorIndex = (configuratorPathObj.processor ? configuratorPathObj.processor : '0'),
				memoryIndex = (configuratorPathObj.memory ? configuratorPathObj.memory : '0'),
				dataObj = utility.object.find(configuratorMapping[productId], 'processor.' + processorIndex + '.options.memory'),
				htmlChunk = [];
				
			if(!dataObj){
				return false;
			}
			
			//Reset options
			$('#memory-row button.c-select-button').attr('disabled','disabled');
			$('#memory-row button.c-select-button[aria-pressed="true"]').attr('aria-pressed', 'false');
			
			//Enable available options
			dataObj.map(function(value, index){
				if(!index){
					$('#memory-row button.c-select-button[data-key="' + value.key + '"]').attr('aria-pressed', 'true');
				}
				
				$('#memory-row button.c-select-button[data-key="' + value.key + '"]').removeAttr('disabled').data('price', value.price).data('sid', value.sid).data('indexkey', index);
			});
		};
		
		var storageRow = function(){
			var processorIndex = (configuratorPathObj.processor ? configuratorPathObj.processor : '0'),
				memoryIndex = (configuratorPathObj.memory ? configuratorPathObj.memory : '0'),
				dataObj = utility.object.find(configuratorMapping[productId], 'processor.' + processorIndex + '.options.memory.' + memoryIndex + '.options.storage'),
				htmlChunk = [];
			
			if(!dataObj){
				return false;
			}

			//Reset options
			$('#storage-row button.c-select-button').attr('disabled','disabled');
			$('#storage-row button.c-select-button[aria-pressed="true"]').attr('aria-pressed', 'false');
			
			//Enable available options			
			dataObj.map(function(value, index){
				if(!index){
					$('#storage-row button.c-select-button[data-key="' + value.key + '"]').attr('aria-pressed', 'true');
				}
				
				$('#storage-row button.c-select-button[data-key="' + value.key + '"]').removeAttr('disabled').data('price', value.price).data('sid', value.sid).data('indexkey', index);
			});
		};
				
		//Add configurator
		if(configuratorMapping[productId]){
			$('#headerArea').after(pageHTML).promise().done(function(){
				//Option reset
				resetOptions();
				
				//Processor Row
				processorRow();
				
				//Memory Row
				memoryRow();
				
				//Storage Row
				storageRow();
				
				//Sticky bar
				stickyController();
			});
		}
	
    
		$('body').on('click.exp-processor', '#processor-row .c-select-button', function(){
			if($(this).attr('aria-pressed') === 'true'){
				return false;
			}
      
      //Flag for add to cart goal
      skuChanged = true;      
			
			var _this = $(this),
				_thisPrice = $(this).data('price'),
				_thisSid = $(this).data('sid'),
				_thisPid = productId,
				_thisObj = availabilityObj[_thisPid],
				addToCartURL = '/en-us/store/buy?pid=' + _thisPid + '&sid=' + _thisSid + '&aid=' + _thisObj[_thisSid].aid,
				productTitle = _thisObj[_thisSid].title;
			
			$('.c-select-button', $(this).closest('.configparent')).attr('aria-pressed', 'false');
			$(this).attr('aria-pressed', 'true');
			
			if($(this).data('instock') === undefined){
				checkInventoryStatus({
					'pid' : _thisPid,
					'sid' : _thisSid,
					'did' : '9000000013',
					'aid' : _thisObj[_thisSid].aid
				}, function(data){
					var invStatus = (data.inStock === "True" ? true : false);
					
					_this.data('instock', invStatus);
					updateSummaryPanel(_thisPrice, productTitle, addToCartURL, invStatus);
				});
			} else {
				updateSummaryPanel(_thisPrice, productTitle, addToCartURL, _this.data('instock'));
			}
			
			configuratorPathObj = {
				'processor' : $(this).data('indexkey')
			};
			
			//Memory Row
			memoryRow();
			
			//Storage Row
			storageRow();
		});
		
		$('body').on('click.exp-memory', '#memory-row .c-select-button', function(){
			if($(this).attr('aria-pressed') === 'true'){
				return false;
			}
			
      //Flag for add to cart goal
      skuChanged = true;
      
			var _this = $(this),
				_thisPrice = $(this).data('price'),
				_thisSid = $(this).data('sid'),
				_thisPid = productId,
				_thisObj = availabilityObj[_thisPid],
				addToCartURL = '/en-us/store/buy?pid=' + _thisPid + '&sid=' + _thisSid + '&aid=' + _thisObj[_thisSid].aid,
				productTitle = _thisObj[_thisSid].title;
			
			$('.c-select-button', $(this).closest('.configparent')).attr('aria-pressed', 'false');
			$(this).attr('aria-pressed', 'true');
			
			if($(this).data('instock') === undefined){
				checkInventoryStatus({
					'pid' : _thisPid,
					'sid' : _thisSid,
					'did' : '9000000013',
					'aid' : _thisObj[_thisSid].aid
				}, function(data){
					var invStatus = (data.inStock === "True" ? true : false);
					
					_this.data('instock', invStatus);
					updateSummaryPanel(_thisPrice, productTitle, addToCartURL, invStatus);
				});
			} else {
				updateSummaryPanel(_thisPrice, productTitle, addToCartURL, _this.data('instock'));
			}
		
			configuratorPathObj.memory = $(this).data('indexkey');
			configuratorPathObj.storage = '0';
			
			//Storage Row
			storageRow();
			
		});
		
		$('body').on('click.exp-storage', '#storage-row .c-select-button', function(){
			if($(this).attr('aria-pressed') === 'true'){
				return false;
			}
      
      //Flag for add to cart goal
      skuChanged = true;
			
			var _this = $(this),
				_thisPrice = $(this).data('price'),
				_thisSid = $(this).data('sid'),
				_thisPid = productId,
				_thisObj = availabilityObj[_thisPid],
				addToCartURL = '/en-us/store/buy?pid=' + _thisPid + '&sid=' + _thisSid + '&aid=' + _thisObj[_thisSid].aid,
				productTitle = _thisObj[_thisSid].title;
			
			$('.c-select-button', $(this).closest('.configparent')).attr('aria-pressed', 'false');
			$(this).attr('aria-pressed', 'true');
			
			if($(this).data('instock') === undefined){
				checkInventoryStatus({
					'pid' : _thisPid,
					'sid' : _thisSid,
					'did' : '9000000013',
					'aid' : _thisObj[_thisSid].aid
				}, function(data){
					var invStatus = (data.inStock === "True" ? true : false);
					
					_this.data('instock', invStatus);
					updateSummaryPanel(_thisPrice, productTitle, addToCartURL, invStatus);
				});
			} else {
				updateSummaryPanel(_thisPrice, productTitle, addToCartURL, _this.data('instock'));
			}
			
			configuratorPathObj.storage = $(this).data('indexkey');
			
		});
		
		//Trigger add to cart click
		$('body').on('click.exp-addtocart', '.m-bundle-review .checkout-button .c-button:not(.disabled)', function(){
      window['optimizely'].push({
        type: "event",
        eventName: "store_us_expControl_StickyBar_addedToCart"
      });
      
      if(!skuChanged){
        window['optimizely'].push({
          type: "event",
          eventName: "store_us_addtocart_defaultsku"
        });
      }
      
      //Page level Book & Pro Add to Cart Metric.
      window['optimizely'].push({
        type: "event",
        eventName: "7855979098_added_to_cart"
      });
      
			window.location = $(this).attr('addtocarturl');			
		});
		
		$('#ProductConfigurator').on('click.carousel-flippers', '.m-product-detail-hero-carousel .c-flipper', function(){
			var _parent = $(this).closest('.c-carousel'),
				_activeSlide = $('.c-group > li.f-active', _parent),
				_activeSequenceButton = $('.c-sequence-indicator > button[aria-checked="true"]', _parent);
			
			//Remove active states
			_activeSlide.removeClass('f-active f-animate-previous f-animate-next');
			_activeSequenceButton.attr('aria-checked', 'false').removeClass('f-active');
				
			if($(this).hasClass('f-previous')){
				//Select next slide
				if(!_activeSlide.index()){
					$('.c-group > li:last', _parent).addClass('f-active f-animate-previous');
					$('.c-sequence-indicator > button:last', _parent).attr('aria-checked', 'true').addClass('f-active');
				} else {
					_activeSlide.prev('li').addClass('f-active f-animate-previous');
					_activeSequenceButton.prev('button').attr('aria-checked', 'true').addClass('f-active');
				}
			} else {
				//Select next slide
				if((_activeSlide.index() == ($('.c-group > li', _parent).length -1))){
					$('.c-group > li:eq(0)', _parent).addClass('f-active f-animate-next');
					$('.c-sequence-indicator > button:eq(0)', _parent).attr('aria-checked', 'true').addClass('f-active');
				} else {
					_activeSlide.next('li').addClass('f-active f-animate-next');
					_activeSequenceButton.next('button').attr('aria-checked', 'true').addClass('f-active');
				}	
			}
		});
    
    // DECORATE DOM ELEMENTS
    utils.waitUntil(function() {
      return typeof awa != 'undefined' && awa.isInitialized === true;
    }).then(function() {
      try {
        var triggerDecoration = function(target){
          if(window.CustomEvent){
            event = new CustomEvent('decorate', {'bubbles': true });
          } else {
            event = document.createEvent('CustomEvent');
            event.initCustomEvent('decorate', true, true, { some: 'data' });
          }

          target.dispatchEvent(event);

          require(['jsll'], function(jsll) {
            jsll.ct.captureContentUpdate({ timings: { didDeferExecTimeout: window._pageTimings.didDeferExecTimeout } });
          });
        };
        triggerDecoration(document.getElementById('mainArea'));
      }catch(e) {
        console.log(e);
      }
    });
    
    
  });
});
}}, {"value": "<style>@media screen and (max-width: 540px){\n  .m-bundle-review .hide-pagebarsummary{\n    display: block !important; \n  }\n}\n@media screen and (max-width: 1084px){\n\t#ProductConfigurator .configroot > div[data-grid=\"col-4\"]{\n\t\twidth: 100% !important;\n\t}\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "87AF2155-089C-49FB-B78F-7F0E905F9883"}]}], "name": "Original"}, {"id": "8650600092", "actions": [{"viewId": "8466196703", "changes": [{"dependencies": [], "type": "custom_code", "id": "372C3DDA-3170-423F-89D9-37F06C5D74B1", "value": function($){//Utilities
var tabClassList = [];

$.fn.scrollComplete = function(callback, timeout) {          
  $(this).on('scroll', function() {
    var _this = $(this);

    if (_this.data('timeout')) {
      clearTimeout(_this.data('timeout'));
    }

    _this.data('timeout', setTimeout(callback, timeout));
  });
};

var resizeHero = function(){
  var immersiveHeroItemElement = $('#expImmersiveHero'),
      immersiveHeroTopOffset = $('> div', immersiveHeroItemElement).css('top'),
      immersiveHeroTopOffsetNumber = (immersiveHeroTopOffset ? immersiveHeroTopOffset.replace('px') : 0),
      immersiveHeroHeight = (immersiveHeroItemElement.height() - parseFloat(immersiveHeroTopOffsetNumber)),
      immersiveHeroCTAHeight = $('#expImmersiveHero > div > div').height();

  var imageHeight = Math.round(immersiveHeroHeight - immersiveHeroCTAHeight) + "px";

  $('.exp-prodboxshot img', immersiveHeroItemElement).css('height', imageHeight);
};

var stickyBar = function(navigation){
	var origPrice = (_pageBITags.pageContracts.ProductInfo.rtPrice != _pageBITags.pageContracts.ProductInfo.lstPrice ? _pageBITags.pageContracts.ProductInfo.rtPrice : null),
		curPrice = (_pageBITags.pageContracts.ProductInfo.lstPrice ? _pageBITags.pageContracts.ProductInfo.lstPrice : null),
		key,
		tabList = [],
		tabDropdown = [],
		addToCartButtonWidth = $('.m-product-detail-hero .cli_pdp-buy-button').outerWidth(),
		addToCartAreaWidth = (addToCartButtonWidth + 75),
		addToCartButtonText = 'Configure',
		skuSelectorButtonsLen = $('.cli_sku-select-button').length,
		configureButtonURL = '';
		
	if(_pageBITags.pageContracts.ProductInfo.id == '8NKT9WTTRBJK'){
		configureButtonURL = '/en-us/store/config/surface-laptop/8NKT9WTTRBJK';
	} else if(_pageBITags.pageContracts.ProductInfo.id == '8TXJ08Q9LXDT'){
		configureButtonURL = '/en-us/store/config/surface-book/8TXJ08Q9LXDT';
	}		
	
	if(navigation){
		for(key in navigation){
			tabClassList.push(navigation[key].tabclass);
			tabList.push('<a class="' + (navigation[key].tabselected ? 'f-active' : '') + '" role="tab" tabindex="0" data-tabclass="' + (navigation[key].tabclass ? navigation[key].tabclass : '') + '">' + (navigation[key].tabname ? navigation[key].tabname : '') + '</a>');
			tabDropdown.push('<li class="c-menu-item" role="presentation"><span tabindex="-1" role="option" aria-selected="' + (navigation[key].tabselected ? 'true' : 'false') + '">' + navigation[key].tabname + '</span></li>');	
		}
	}
	
	return ['<div style="clear:both;"></div><section id="exp-optly-stickyBar" class="' + (origPrice ? 'has-discount' : '') + '">',
				  '<div class="c-pivot">',
					'<div class="exp-skuinfo">',
						'<div class="exp-skuinfo-wrapper">',
								'<h5>' + _pageBITags.pageContracts.ProductInfo.title + '</h5>',
							'<p style="' + (skuSelectorButtonsLen < 2 ? 'display:none' : '') + '">' +  $.trim(($('.cli_skuMenuItems').length ? $('.cli_skuMenuItems a[aria-selected="true"]').text() : $('.cli_skuSelector button.active').attr('data-button-title'))) + '</h5>',
						 '</div>',
					'</div>',           
					'<div role="tablist">',
						tabList.join('\n'),
					'</div>',
					'<div class="exp-tabselector c-select">',
					  '<div class="c-select-menu f-persist"><button aria-haspopup="true" aria-expanded="false" tabindex="0" class="x-hidden-focus">Overview</button>',
						  '<ul class="c-menu" aria-hidden="true" role="listbox" tabindex="0">',
							  tabDropdown.join('\n'),
						  '</ul>',
					  '</div>',
					'</div>',           
					'<div class="exp-addtocart">',
						 '<div class="exp-addtocart-price">',
							'<s class="' + (origPrice ? 'has-discount' : '') + '">$<span class="origprice">' + (origPrice ? origPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '') + '</span></s>',
							'<div class="' + (curPrice ? '' : 'out-of-stock') + '">$<span class="curprice">' + (curPrice ? curPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '') + '</span></div>',
						  '</div>',
						 '<a href="' + configureButtonURL + '" class="c-button exp-configure f-primary" role="button"><span class="x-hidden-focus">Configure</span></a>',           
					'</div>',
			  '</div></section>'].join('\n');
};

var surfaceBook_hero = function(){
	var priceArray = [],
            lowestPrice = null;

	  $('.cli_skuSelector button').each(function(){
		priceArray.push($(this).data('list-price'));
	  });

	  priceArray.sort(function(a, b){return a-b;});

	  lowestPrice = (priceArray.length ? priceArray[0] : null);
	  
	return ['<section class="m-immersive-hero-item theme-light f-align-bottom" id="expImmersiveHero">',
          '<picture class="c-image exp-hidden">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/086ac056096841758d9b40e04f72beb7.gif" media="(min-width: 1779px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/1bb6687b81344d039641ebced21adb44.gif" media="(min-width:1400px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/5aa8bde93db64c489ed9abe2baa7b2d7.gif" media="(min-width:1084px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/5492567758fa47b3ad1e8db27a329873.gif" media="(min-width:768px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/8c7da1b94bc1480688948cdb5b6dc4db.gif" media="(min-width:540px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/708eb2c686a349de9e208860ce424563.gif" media="(min-width:0)">',
              '<img srcset="//cdn.optimizely.com/img/3698060313/1bb6687b81344d039641ebced21adb44.gif" alt="">',
          '</picture>',
          '<div>',
              '<picture class="c-image exp-prodboxshot">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/e2a8f5225e614df689ca70d00eb326c2.png" media="(min-width: 1779px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/e48bf1e6f99740a6b1ea70fb4d5d1be8.png" media="(min-width:1400px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/0ea5df6210874354b40a243fb8c1318f.png" media="(min-width:1084px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/ec9785a2bf4d4f9b8d2ca92d4eaf7ead.png" media="(min-width:768px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/e17468f86ac547cb925ca1ced7ca8602.png" media="(min-width:540px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/0cd519de11ad41ff948cf713f4d68328.png" media="(min-width:0)">',
                  '<img class="lazyload" srcset="//cdn.optimizely.com/img/3698060313/e48bf1e6f99740a6b1ea70fb4d5d1be8.png" alt="Surface Book">',
              '</picture>',
              '<div>',
                  '<h1 class="c-heading">Surface Book</h1>',
                  '<p class="c-subheading">The ultimate laptop. Now more powerful than ever.</p>',
                  '<p class="exp-price c-subheading">Starting at $' + (lowestPrice ? lowestPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '1,499.00' ) + '</p>',                
                  '<div class="c-group">',
                      '<a href="/en-us/store/config/surface-book/8TXJ08Q9LXDT" class="c-button exp-configure f-primary" role="button">',
                          '<span>Configure</span>',
                      '</a>',
                      '<a href="javascript:void(0);" class="c-button exp-findinstore" role="button">',
                          '<span>Find in store</span>',
                      '</a>',
                  '</div>',
              '</div>',
          '</div>',
      '</section>'].join('');
};

var surfacePro_hero = function(){
	var priceArray = [],
            lowestPrice = null;

	  $('.cli_skuSelector button').each(function(){
		priceArray.push($(this).data('list-price'));
	  });

	  priceArray.sort(function(a, b){return a-b;});

	  lowestPrice = (priceArray.length ? priceArray[0] : null);
	  
	return ['<section class="m-immersive-hero-item theme-light f-align-bottom" id="expImmersiveHero">',
          '<picture class="c-image exp-hidden">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/086ac056096841758d9b40e04f72beb7.gif" media="(min-width: 1779px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/1bb6687b81344d039641ebced21adb44.gif" media="(min-width:1400px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/5aa8bde93db64c489ed9abe2baa7b2d7.gif" media="(min-width:1084px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/5492567758fa47b3ad1e8db27a329873.gif" media="(min-width:768px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/8c7da1b94bc1480688948cdb5b6dc4db.gif" media="(min-width:540px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/708eb2c686a349de9e208860ce424563.gif" media="(min-width:0)">',
              '<img srcset="//cdn.optimizely.com/img/3698060313/1bb6687b81344d039641ebced21adb44.gif" alt="">',
          '</picture>',
          '<div>',
              '<picture class="c-image exp-prodboxshot">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/93e3d47674ac41e5aec3450444b2cadf.png" media="(min-width: 1779px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/afa4254c8c6444ed86bfeb0152f1c440.png" media="(min-width:1400px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/4628e6458c7243f283e7f515e76ef04a.png" media="(min-width:1084px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/ed5bb44c85084377a423e7a09c43c349.png" media="(min-width:768px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/28d892e74bc94429930d635b7d110f70.png" media="(min-width:540px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/3bd7f72ad74c4bd9831c134328392564.png" media="(min-width:0)">',
                  '<img class="lazyload" srcset="//cdn.optimizely.com/img/3698060313/afa4254c8c6444ed86bfeb0152f1c440.png" alt="Surface Pro">',
              '</picture>',
              '<div>',
                  '<h1 class="c-heading">Surface Pro</h1>',
                  '<p class="c-subheading">The most versatile laptop. Now more powerful than ever.</p>',
                  '<p class="exp-price c-subheading">starting at $' + (lowestPrice ? lowestPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '799.00' ) + '</p>',                
                  '<div class="c-group">',
                      '<a href="/en-us/store/config/surface-laptop/8NKT9WTTRBJK" class="c-button exp-configure f-primary" role="button">',
                          '<span>Configure</span>',
                      '</a>',
                      '<a href="javascript:void(0);" class="c-button exp-findinstore" role="button">',
                          '<span>Find in store</span>',
                      '</a>',
                  '</div>',
              '</div>',
          '</div>',
      '</section>'].join('');
};

var domElements = {
	"8TXJ08Q9LXDT" : [
		{
			"module" : surfaceBook_hero,
			"target" : "#mainArea",
			"action" : "prepend",
			"callback" : function(){
				lazySizes.init();
        
        $('.exp-prodboxshot img').on('load', function(){
        	resizeHero();
        });

        $(window).on('resize.immsersiveHero', function(){
          resizeHero();
        });


				$('.exp-findinstore').on('click', function(){
				  $('.cli_pdp-findinstore-button').trigger('click');
				});


				// DECORATE DOM ELEMENTS
				utils.waitUntil(function() {
				  return typeof awa != 'undefined' && awa.isInitialized === true;
				}).then(function() {
				  try {
					var triggerDecoration = function(target){
					  if(window.CustomEvent){
						event = new CustomEvent('decorate', {'bubbles': true });
					  } else {
						event = document.createEvent('CustomEvent');
						event.initCustomEvent('decorate', true, true, { some: 'data' });
					  }

					  target.dispatchEvent(event);

					  require(['jsll'], function(jsll) {
						jsll.ct.captureContentUpdate({ timings: { didDeferExecTimeout: window._pageTimings.didDeferExecTimeout } });
					  });
					};
					triggerDecoration(document.getElementById('expImmersiveHero'));
				  }catch(e) {
					console.log(e);
				  }
				});


			}
		}
	],
	"8NKT9WTTRBJK" : [
		{
			"module" : surfacePro_hero,
			"target" : "#mainArea",
			"action" : "prepend",
			"callback" : function(){
				lazySizes.init();

        $('.exp-prodboxshot img').on('load', function(){
        	resizeHero();
        });
        

        $(window).on('resize.immsersiveHero', function(){
          resizeHero();
        });
        
				$('.exp-findinstore').on('click', function(){
				  $('.cli_pdp-findinstore-button').trigger('click');
				});


				// DECORATE DOM ELEMENTS
				utils.waitUntil(function() {
				  return typeof awa != 'undefined' && awa.isInitialized === true;
				}).then(function() {
				  try {
					var triggerDecoration = function(target){
					  if(window.CustomEvent){
						event = new CustomEvent('decorate', {'bubbles': true });
					  } else {
						event = document.createEvent('CustomEvent');
						event.initCustomEvent('decorate', true, true, { some: 'data' });
					  }

					  target.dispatchEvent(event);

					  require(['jsll'], function(jsll) {
						jsll.ct.captureContentUpdate({ timings: { didDeferExecTimeout: window._pageTimings.didDeferExecTimeout } });
					  });
					};
					triggerDecoration(document.getElementById('expImmersiveHero'));
				  }catch(e) {
					console.log(e);
				  }
				});


			}
		}
	]
	
};


var utils = window['optimizely'].get('utils');

utils.waitUntil(function() {
  if(window.jQuery) return true;
}).then(function() {
	var $ = window.jQuery;
  
  
    utils.waitForElement('.m-product-detail-hero-product-placement .cli_skuSelector').then(function(){
      $('#mainArea').addClass('exp-overview-tab');
      
      //Clear float fixes for base page
			$('#RequirementsStructuredList, #IncludesStructuredListDualColumn, #RatingReview, #FAQ, #TechSpec').before('<div class="exp-clearfloat"></div>');
      
      
      /* Sticky Bar */
      var tabModule = stickyBar([
					{
						tabclass : 'exp-overview-tab',
						tabname : 'Overview',
						tabselected : true
					},
					{
						tabclass : 'exp-techspecs-tab',
						tabname : 'Tech Specs'
					},
					{
						tabclass : 'exp-reviews-tab',
						tabname : 'Reviews'
					}
				]);
			//}
			
      utils.waitForElement('#mainRegion1').then(function(){
          $('#mainRegion1').prepend(tabModule).promise().done(function(){
            var paddingOffset = 0,
                 component = $('#exp-optly-stickyBar'),
                 componentOffset = component.offset().top;

                //Sticky Controller
                $(window).on('scroll', function(){
                  componentOffset = component.offset().top;

                  var scrollTop = $(window).scrollTop(),
                    distance = (componentOffset - scrollTop);

                  if(distance <= paddingOffset && !component.hasClass('exp-stuck')){
                    component.addClass('exp-stuck');
                  } else if(distance > paddingOffset && component.hasClass('exp-stuck')){
                    component.removeClass('exp-stuck');
                  }
                });

                $(window).on('resize', function(){
                  componentOffset = component.offset().top;
                });

                //Tab Controller
                $('#exp-optly-stickyBar a').on('click.toggleclass, keypress.toggleclass', function(e){
                  if(e && e.type === 'keypress' && e.keyCode !== 13){
                    return false;
                  }

                  componentOffset = component.offset().top;

                  var componentClickOffset = 0;

                  //Update tab class
                  $('#exp-optly-stickyBar a').removeClass('f-active');
                  $(this).addClass('f-active');

                  //Update parent wrapper
                  tabClassList.map(function(classname){
                    if($('#mainArea').hasClass(classname)){
                    $('#mainArea').removeClass(classname);
                    }
                  });

                  $('#mainArea').addClass($(this).data('tabclass'));

                  if(window.innerWidth > 850){
                    componentClickOffset = 30;
                  } else {
                    componentClickOffset = 10;
                  }

                  /* Update Mobile Nav */
                  var activeElm = $('#exp-optly-stickyBar a[data-tabclass="' + $(this).data('tabclass') + '"]'),
                    activeElmIndex = activeElm.index(),
                    activeElmText = activeElm.text();

                  $('#exp-optly-stickyBar .exp-tabselector span[aria-selected="true"]').attr('aria-selected', 'false');
                  $('#exp-optly-stickyBar .exp-tabselector button').text(activeElmText);
                  $('#exp-optly-stickyBar .exp-tabselector li:eq(' + activeElmIndex + ') span').attr('aria-selected', 'true');

                  $('html, body').animate({scrollTop: (componentOffset + componentClickOffset) + 'px'}, 'slow');

                  window['optimizely'].push({
                    type: "event",
                    eventName: "store_us_pivot_clicks"
                  });
                });

                $('body').on('click.addtocart','#exp-optly-stickyBar .cli_pdp-buy-button', function(){
                  window['optimizely'].push({
                    type: "event",
                    eventName: "store_us_expControl_StickyBar_addedToCart"
                  });

                   $('.m-product-detail-hero .cli_pdp-buy-button:visible').trigger('click');
                });

                //Update When Selected Vid Changes
                $('.m-product-detail-hero').on('click', '.cli_skuMenuItems a, .cli_skuSelector button', function(){
                  var origPrice = $.trim($('.price-info .srv_saleprice').text()),
                    curPrice = $.trim($('.price-info .price-text span').text());

                  $('.exp-skuinfo p').text( $.trim(($('.cli_skuMenuItems').length ? $('.cli_skuMenuItems a[aria-selected="true"]').text() : $('.cli_skuSelector button.active').attr('data-button-title'))));

                  if(origPrice.length){
                    $('.exp-addtocart-price s').addClass('has-discount');
                  } else {
                    $('.exp-addtocart-price s').removeClass('has-discount');
                  }

                  if(curPrice.length){
                    $('.exp-addtocart-price > div').removeClass('out-of-stock');
                  } else {
                    $('.exp-addtocart-price > div').addClass('out-of-stock');
                  }

                  $('.exp-addtocart-price span.origprice').text(origPrice.replace(/[^,.0-9]/g,''));
                  $('.exp-addtocart-price span.curprice').text(curPrice.replace(/[^,.0-9]/g,''));
                });

          });
      
			
          var elementsByProduct = domElements[(_pageBITags && _pageBITags.pageContracts && _pageBITags.pageContracts.ProductInfo ? _pageBITags.pageContracts.ProductInfo.id : '')];

          var insertModule = function(){
            if(elementsByProduct[0].action.toLowerCase() === 'prepend'){
              $(elementsByProduct[0].target).prepend(elementsByProduct[0].module);
            } else if(elementsByProduct[0].action.toLowerCase() === 'after'){
              $(elementsByProduct[0].target).after(elementsByProduct[0].module);
            } else if(elementsByProduct[0].action.toLowerCase() === 'before'){
              $(elementsByProduct[0].target).before(elementsByProduct[0].module);
            } else if(elementsByProduct[0].action.toLowerCase() === 'replacewith'){
              $(elementsByProduct[0].target).replaceWith(elementsByProduct[0].module);
            }	

            //Callback, if one exists
            if(elementsByProduct[0].callback){
              elementsByProduct[0].callback();
            }

            elementsByProduct.shift();

            if(elementsByProduct.length){
              insertModule();
            }
          };

          if(elementsByProduct && elementsByProduct.length){
            insertModule();
          }		  
	  });
			
        /* Mobile Click Events */
        $('body').on('click.exp_selectmenu_button', '.exp-tabselector button', function(){
          //$(this).attr('aria-expanded', 'true').next('ul').attr('aria-hidden', 'false');
        });

        $('body').on('click.exp_selectmenu_option', '.exp-tabselector .c-menu span', function(){
          var value = $(this).data('value'),
              index = $(this).closest('li').index(),
              selectedText = $.trim($(this).text());

          //Click hidden nav links
          $('#exp-optly-stickyBar div[role="tablist"] a:eq(' + index + ')').trigger('click');

          //Update custom list
          $('span[aria-selected="true"]').attr('aria-selected', 'false');
          $(this).attr('aria-selected', 'true');	

          //Update label & close dropdown
          $('button', $(this).closest('.c-select-menu')).text(selectedText).attr('aria-expanded', 'false').next('ul').attr('aria-hidden', 'true');
        });

    	
        //Trigger click on review tab
        if(window.location.hash && window.location.hash.toLowerCase() === '#ratings-reviews'){
          $(window).scrollTop(($('#RatingReview').position().top + 15));
        }

      	$('body').on('click', '.m-product-detail-hero-product-placement .c-rating a', function(){
          $('#exp-optly-stickyBar a[data-tabclass="exp-reviews-tab"]').trigger('click');
        });
      
      
      
      
      /* End Sticky Bar */
    });  
  
  
	  utils.waitForElement('#RatingReview').then(function(){
		setTimeout(function(){
			$('#mainArea').addClass('exp-reviews-loaded');
		}, 1500);

		setTimeout(function(){
			if(!$('#mainArea.exp-reviews-loaded').length){
			$('#mainArea').addClass('exp-reviews-loaded');
		  }
		}, 2500);
	  });  
  
});
}}, {"value": "<style>.m-immersive-hero-item {\n  position: relative;\n  min-height: 600px;\n  max-height: calc(100vh - 130px);\n  overflow: hidden;\n  padding: 0; }\n  /* line 13, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item:hover {\n    cursor: default; }\n  /* line 19, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item[data-js-href]:hover {\n    cursor: pointer; }\n  /* line 24, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item > picture.c-image {\n    display: block;\n    width: 100%;\n    max-width: 100%; }\n    /* line 29, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n    .m-immersive-hero-item > picture.c-image img {\n      width: 100%;\n      overflow-y: hidden; }\n  /* line 35, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item > div {\n    position: absolute;\n    display: block;\n    text-align: center;\n    width: 100%; }\n    /* line 41, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n    .m-immersive-hero-item > div > div {\n      padding-left: 12px;\n      padding-right: 12px;\n      opacity: 0;\n      animation: fadeIn ease-in 1;\n      animation-fill-mode: forwards;\n      animation-duration: 1s;\n      animation-delay: 600ms;\n      max-width: 100%;\n      margin: 0 auto; }\n      /* line 47, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div .c-heading {\n        font-size: 34px;\n        line-height: 40px;\n        padding: 38px 0 2px;\n        font-weight: 100;\n        font-weight: 700;\n        opacity: 0.95; }\n      /* line 52, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div .c-subheading {\n        font-size: 20px;\n        line-height: 24px;\n        padding: 8px 0 4px;\n        font-weight: 400;\n        padding-top: 8px; }\n      /* line 57, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div .c-call-to-action {\n        margin: 24px 0; }\n      /* line 61, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div .c-group {\n        -ms-flex-pack: center;\n            justify-content: center;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        margin: 24px 0; }\n        /* line 66, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n        .m-immersive-hero-item > div > div .c-group > .c-call-to-action {\n          margin: 0 24px 0 0; }\n          /* line 69, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n          .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action {\n            background: transparent;\n            color: #0067B8;\n            border-color: transparent;\n            border-width: 2px;\n            padding: 10px 0 7px 0;\n            margin-left: 0;\n            transition: none;\n            margin-top: 0; }\n            /* line 10, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n            .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus), .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover, .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:active {\n              background: transparent;\n              outline: transparent;\n              border-color: transparent; }\n            /* line 18, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n            .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus) {\n              background: rgba(0, 103, 184, 0.1) content-box; }\n            /* line 22, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n            .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus), .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover {\n              color: #005da6; }\n              /* line 26, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus) span, .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover span {\n                text-decoration: underline; }\n            /* line 31, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n            .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:active {\n              background: none;\n              color: #005293;\n              text-decoration: none;\n              -ms-transform: none;\n                  transform: none; }\n            /* line 38, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n            .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action[aria-disabled=\"true\"] {\n              cursor: not-allowed;\n              color: #cce1f1; }\n            /* line 43, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n            .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action, .theme-dark .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action {\n              color: #000;\n              background: transparent;\n              border-color: transparent; }\n              /* line 48, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus), .theme-dark .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus) {\n                background: rgba(0, 0, 0, 0.1) content-box; }\n              /* line 52, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus), .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover, .theme-dark .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus), .theme-dark .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover {\n                color: rgba(0, 0, 0, 0.9); }\n              /* line 59, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover, .theme-dark .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover {\n                background: transparent; }\n              /* line 63, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:active, .theme-dark .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:active {\n                color: rgba(0, 0, 0, 0.8); }\n              /* line 67, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action[aria-disabled=\"true\"], .theme-dark .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action[aria-disabled=\"true\"] {\n                background: transparent;\n                color: #999999; }\n            /* line 73, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n            .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action, .theme-light .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action {\n              color: #FFF;\n              background: transparent;\n              border-color: transparent; }\n              /* line 78, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus), .theme-light .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus) {\n                background: rgba(255, 255, 255, 0.1) content-box; }\n              /* line 82, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus), .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover, .theme-light .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus), .theme-light .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover {\n                color: #e6e6e6; }\n              /* line 89, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover, .theme-light .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover {\n                background: transparent; }\n              /* line 93, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:active, .theme-light .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:active {\n                color: #cccccc; }\n              /* line 97, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action[aria-disabled=\"true\"], .theme-light .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action[aria-disabled=\"true\"] {\n                background: transparent;\n                color: #666666; }\n            @media only screen and (max-width: 539px) {\n              /* line 69, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n              .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action {\n                padding: 10px 43px 7px; } }\n    /* line 81, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n    .m-immersive-hero-item > div > picture.c-image {\n      margin: 0 auto; }\n      /* line 84, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > picture.c-image img {\n        opacity: 0;\n        animation: fadeIn ease-in 1;\n        animation-fill-mode: forwards;\n        animation-duration: 1s;\n        animation-delay: 600ms;\n        max-width: none;\n        display: block;\n        margin: 0 auto;\n        width: auto;\n        height: 0; }\n    @media only screen and (min-width: 540px) {\n      /* line 95, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div {\n        padding-left: 24px;\n        padding-right: 24px;\n        max-width: 80%; } }\n    @media only screen and (min-width: 768px) {\n      /* line 102, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div {\n        max-width: 60%; }\n      /* line 108, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > picture.c-image + div .c-heading {\n        padding-top: 24px; } }\n    @media only screen and (min-width: 1084px) {\n      /* line 117, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > picture.c-image img {\n        max-width: 100%; } }\n    @media only screen and (min-width: 1400px) {\n      /* line 124, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div {\n        max-width: 50%; }\n        /* line 127, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n        .m-immersive-hero-item > div > div .c-heading {\n          font-size: 46px;\n          line-height: 56px;\n          padding: 37px 0 3px;\n          font-weight: 100;\n          letter-spacing: -0.01em;\n          font-weight: 700; }\n        /* line 132, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n        .m-immersive-hero-item > div > div .c-subheading {\n          font-size: 24px;\n          line-height: 28px;\n          padding: 4px 0 8px;\n          font-weight: 200; } }\n    @media only screen and (min-width: 1779px) {\n      /* line 140, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div .c-heading {\n        font-size: 62px;\n        line-height: 72px;\n        padding: 38px 0 6px;\n        font-weight: 100;\n        letter-spacing: -0.01em; }\n      /* line 144, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div .c-subheading {\n        font-size: 34px;\n        line-height: 40px;\n        padding: 12px 0 2px;\n        font-weight: 100;\n        padding-top: 8px; } }\n  /* line 154, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item.f-align-top > div, .m-immersive-hero-item.f-align-bottom > div {\n    top: 72px; }\n    @media only screen and (min-width: 768px) {\n      /* line 154, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item.f-align-top > div, .m-immersive-hero-item.f-align-bottom > div {\n        top: 120px; } }\n    @media only screen and (min-width: 1084px) {\n      /* line 154, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item.f-align-top > div, .m-immersive-hero-item.f-align-bottom > div {\n        top: 148px; } }\n  /* line 168, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item.f-align-top > div {\n    top: 0;\n    bottom: 0; }\n    /* line 172, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n    .m-immersive-hero-item.f-align-top > div > div {\n      position: absolute;\n      top: 72px;\n      left: 50%;\n      -ms-transform: translateX(-50%);\n          transform: translateX(-50%);\n      width: 100%; }\n      @media only screen and (min-width: 768px) {\n        /* line 172, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n        .m-immersive-hero-item.f-align-top > div > div {\n          top: 120px; } }\n      @media only screen and (min-width: 1084px) {\n        /* line 172, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n        .m-immersive-hero-item.f-align-top > div > div {\n          top: 148px; } }\n    /* line 189, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n    .m-immersive-hero-item.f-align-top > div > picture.c-image img {\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      -ms-transform: translateX(-50%);\n          transform: translateX(-50%); }\n  /* line 200, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item.f-align-bottom > div {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center; }\n    /* line 205, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n    .m-immersive-hero-item.f-align-bottom > div > picture.c-image {\n      margin: 0; }\n  /* line 213, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .no-js .m-immersive-hero-item > div picture.c-image {\n    display: none; }\n  /* line 222, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item.theme-dark .c-group > a.c-call-to-action + a.c-call-to-action {\n    color: #FFF; }\n    /* line 225, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n    .m-immersive-hero-item.theme-dark .c-group > a.c-call-to-action + a.c-call-to-action:focus:not(.x-hidden-focus) {\n      color: #FFF;\n      background: rgba(255, 255, 255, 0.1) content-box; }\n  /* line 237, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item.theme-light .c-group > a.c-call-to-action + a.c-call-to-action {\n    color: #000; }\n    /* line 240, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n    .m-immersive-hero-item.theme-light .c-group > a.c-call-to-action + a.c-call-to-action:focus:not(.x-hidden-focus) {\n      color: #000;\n      background: rgba(0, 0, 0, 0.1) content-box; }\n\n\n/* CSS Corrections */\n.m-immersive-hero-item .exp-hidden{\n  visibility: hidden;\n}\n.m-immersive-hero-item .exp-findinstore{\n \tbackground: rgba(0,0,0,.2) !important;\n  border: solid 1px transparent !important;\n}\n.m-immersive-hero-item .exp-findinstore:hover,\n.m-immersive-hero-item .exp-findinstore:active{\n background: rgba(0,0,0,.3) !important;\n}\n\n.m-immersive-hero-item .exp-configure{\n\tbackground: #0067b8 !important;\n}\n.m-immersive-hero-item .exp-configure:hover,\n.m-immersive-hero-item .exp-configure:active{\n\tbackground: #005293 !important;\n}\n.m-immersive-hero-item h1.c-heading{\n  font-size: 24px !important;\n  font-weight: bold !important;\n  line-height: 24px !important;\n}\n.m-immersive-hero-item p.c-subheading{\n  font-size: 22px !important;\n    line-height: 22px !important;\n    padding-top: 0 !important;\n    max-width: 300px !important;\n    margin-bottom: 10px !important;\n}\n#purchaseRegion{\n display: none !important; \n}\n\n\n\n\n\n@media only screen and (min-width: 956px){\n  .m-product-detail-hero-carousel{\n    width: 63%;\n  }\n  .m-product-detail-hero-product-placement{\n    width: 37%;\n  }\n}\n@media only screen and (min-width: 768px){\n  .m-product-detail-hero .m-product-detail-hero-carousel{\n\t\tfloat: right;\n\t}\n  .m-product-detail-hero-carousel{\n    float: right;\n  }\n  .c-carousel li>picture.c-image img{\n   width: 100% !important; \n   background-color: #fff !important; \n  }\n  .c-carousel li>picture.c-image img[src*=\"1x1clear.gif\"]{\n    width: auto !important;\n  }  \n}\n.m-product-detail-hero-product-placement .cli_skuSelector{\n\tdisplay: none !important; \n}\n.m-product-detail-hero-product-placement.exp_norollup .cli_skuSelector{\n\tdisplay: block !important; \n}\n.c-select-menu > .exp-c-select-button{\n\ttransform: initial;\n  margin-left: 0 !important;\n}\n.c-select-menu > .exp-c-select-button span{\n display: none; \n}\n.c-select.exp-c-select:after{\n\tdisplay: none !important;\t\n}\n.c-select-menu > .exp-c-select-button:after{\n \tpadding-top: 0 !important;\n  top: 16px; \n}\n.c-select-menu.f-border [aria-expanded]:hover{\n\tborder: 1px solid rgba(0,0,0,.8);\n}\n.c-select-menu .c-menu{\n \twidth: inherit;\n  min-width: 296px;\n}\n.c-select-menu .c-menu li span{\n white-space: nowrap; \n}\n.m-product-detail-hero-product-placement > .c-heading-5,\n.m-product-detail-hero-product-placement > .cli_short-description{\n\tdisplay: none !important;\n}\n.m-product-detail-hero-product-placement .store-offer-image{\n width: 50%; \n}\n.m-product-detail-hero-product-placement .store-offer-image + div{\n width: 50% !important;\n  float: left !important;\n}\n.m-product-detail-hero .m-product-detail-hero-carousel{\n\tdisplay: block !important;\n}\n.m-product-detail-hero .m-product-detail-hero-product-placement .c-carousel{\n\tdisplay: none !important;\n}\n@media only screen and (max-width: 768px){\n\t.m-product-detail-hero-carousel,\n\t.m-product-detail-hero-product-placement{\n\t\twidth: 100% !important;\n\t\tfloat: none !important;\n\t}\t\n}\n@media only screen and (max-width: 1083px) and (min-width: 768px){\n\t.m-product-detail-hero .m-product-detail-hero-carousel{\n\t\tmargin-top: 0 !important;\n\t}\t\n}\n\n/* Fade in for sticky bar */\n@-webkit-keyframes expFadeIn {\n  0%   { opacity: 0; }\n  100% { opacity: 1; }\n}\n@-moz-keyframes expFadeIn {\n  0%   { opacity: 0; }\n  100% { opacity: 1; }\n}\n@-o-keyframes expFadeIn {\n  0%   { opacity: 0; }\n  100% { opacity: 1; }\n}\n@keyframes expFadeIn {\n  0%   { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n\n/*\n#mainRegion1 [id^=\"Feature\"],\n#mainRegion2 #TechSpec,\n#mainRegion2 #RatingReview{\n\t-moz-transition: all 0.5s ease;\n    -o-transition: all 0.5s ease;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n}\n.exp-overview-tab #mainRegion1 [id^=\"Feature\"]{\n\t-webkit-animation: expFadeIn 0.5s forwards;\n\t-moz-animation:    expFadeIn 0.5s forwards;\n\t-o-animation:      expFadeIn 0.5s forwards;\n\tanimation:         expFadeIn 0.5s forwards;\n}\n.exp-reviews-tab #mainRegion2 #RatingReview{\n\t-webkit-animation: expFadeIn 0.5s forwards;\n\t-moz-animation:    expFadeIn 0.5s forwards;\n\t-o-animation:      expFadeIn 0.5s forwards;\n\tanimation:         expFadeIn 0.5s forwards;\n}\n.exp-techspecs-tab #mainRegion2 #TechSpec{\n\t-webkit-animation: expFadeIn 0.5s forwards;\n\t-moz-animation:    expFadeIn 0.5s forwards;\n\t-o-animation:      expFadeIn 0.5s forwards;\n\tanimation:         expFadeIn 0.5s forwards;\n}\n*/\n\n#mainRegion1 [id^=\"Feature\"],\n#Feature2CenteredRegion,\n#mainRegion2 [id^=\"Feature\"],\n#mainRegion2 #TechSpec{\n\tdisplay: none;\n}\n#mainRegion2 #RatingReview{\n height: 0;\n overflow: hidden;\n width: 100%;\n}\n.exp-overview-tab #mainRegion1 [id^=\"Feature\"],\n.exp-overview-tab #Feature2CenteredRegion,\n.exp-overview-tab #mainRegion2 [id^=\"Feature\"],\n.exp-reviews-tab #mainRegion2 #RatingReview,\n.exp-techspecs-tab #mainRegion2 #TechSpec{\n display: block; \n}\n.exp-reviews-tab.exp-reviews-loaded #mainRegion2 #RatingReview{\n height: inherit;\n overflow: visible;\n}\n\n.exp-clearfloat{\n clear: both; \n}\n\n\n.m-immersive-hero-item.f-align-bottom > div{\n top: 75px; \n}\n\n.m-immersive-hero-item .exp-price.c-subheading{\n  font-size: 18px !important; \n}\n#exp-optly-stickyBar .c-pivot > div > a.exp-configure{\n  height: 36px;\n    margin-top: 20px;\n    float: right;\n    line-height: 34px;\n}\n#exp-optly-stickyBar .c-pivot > div > a.exp-configure:hover{\n  color: #fff; \n}\n\n#exp-optly-stickyBar .exp-skuinfo p,\n#exp-optly-stickyBar .exp-addtocart-price{\n  display: none !important;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "FC9F412D-17FC-437F-8B49-5035CB4D8BCA"}]}, {"viewId": "8637413135", "changes": [{"dependencies": [], "type": "custom_code", "id": "B68026AF-2680-41B4-987D-9E82B9A4D706", "value": function($){var addCssFile = function(file){
	var head = document.getElementsByTagName('head')[0], 
		stylesheet = document.createElement('link');

		stylesheet.type = 'text/css';
		stylesheet.rel = 'stylesheet';
		stylesheet.href = file;

		head.appendChild(stylesheet);
};

addCssFile('//statics-onestore-eus-ms-com.akamaized.net/west-european/store/_scrf/css/themes=store-web-default.device=uplevel_web_pc_webkit_chrome/a1-377e40/99-08b2bc/ef-2ed113/b5-dcc9d1/2c-557c86/aa-5d2157/33-542bbe/f7-eb8c6a/6c-d0e0d3/7a-882889/ab-d4792e/da-5468e7?ver=2.0');
addCssFile('https://statics-onestore-eus-ms-com.akamaized.net/west-european/store/_scrf/css/themes=store-web-default.device=uplevel_web_pc_webkit_chrome/a1-377e40/99-08b2bc/ef-2ed113/b5-dcc9d1/2c-557c86/aa-5d2157/33-542bbe/f7-eb8c6a/6c-d0e0d3/7a-882889/ab-d4792e/da-5468e7?ver=2.0');

/* _pageBITags object doesn't exist, so need to check QS */
var productId = null;
if(window.location.pathname.toUpperCase().indexOf('/8TXJ08Q9LXDT') !== -1){
	productId = '8TXJ08Q9LXDT';
} else if(window.location.pathname.toUpperCase().indexOf('/8NKT9WTTRBJK') !== -1){
	productId = '8NKT9WTTRBJK';
}



var checkInventoryStatus = function(obj, callback){  
	var pid = (obj.pid ? obj.pid : null), 
		sku = (obj.sid ? obj.sid : null), 
		distributorid = (obj.did ? obj.did : null), 
		availabilityid = (obj.aid ? obj.aid : null),
		pathNameArray = window.location.pathname.split('/').filter(Boolean),
		locale = (pathNameArray && pathNameArray.length ? pathNameArray[0].split('-') : null),
		countryRegion = (locale && locale.length ? locale[1] : null);
	
	try {
		$.ajax({
		  type: "POST",
		  url: 'https://inv.mp.microsoft.com/v2.0/inventory/' + countryRegion + '?mode=continueOnError',
		  data: JSON.stringify([{
			productId: pid, 
			skuId: sku, 
			availabilityid: availabilityid, 
			distributorid: distributorid
		  }]),
		success: function(data){
			(callback ? callback(data) : '');
		},
		  dataType: 'json',
		  contentType: 'application/json'
		}); 
	} catch (e) {
		//Error
	}
};

// VARS
var utility = {
		object : {
			find : function(obj, prop) {
				//Prop must be child of passed obj
				var testObj = (typeof(obj) == 'string' ? JSON.parse(obj) : obj);
				
				var iterate = function(obj, prop){
					var nested = prop.indexOf('.');	
					
					if(!obj){
						return null;
					}
					
					if(nested != -1){
						return iterate(obj[prop.substring(0, nested)], prop.substr(nested +1));
					}
					
					return obj[prop];
				};
			
				if(prop){
					return iterate(testObj, prop);
				} else {
					return testObj;
				}
			}
		}
};

var configuratorPathObj = {
	'processor' : '0',
	'memory' : '0',
	'storage' : '0'
};

var configuratorSelectedArray = [];
var skuChanged = false;

var availabilityObj = {
	'8TXJ08Q9LXDT' : {
		'90L2' : {
			'aid' : '8W4NX0R3BFWZ',
			'title' : 'Microsoft Surface Book - 128GB / Intel Core i5'
		},
		'GXPZ' : {
			'aid' : '8W36C4K4N8ZB',
			'title' : 'Microsoft Surface Book - 256GB / Intel Core i5'
		},
		'04KS' : {
			'aid' : '8WCN1TNLKS7H',
			'title' : 'Microsoft Surface Book - 256GB / Intel Core i5'
		},
		'1ZDH' : {
			'aid' : '8WC93XWJR9F9',
			'title' : 'Microsoft Surface Book - 512GB / Intel Core i5'
		},
		'BW3T' : {
			'aid' : '8MK7ZN37QFN1',
			'title' : 'Microsoft Surface Book - 512GB / Intel Core i7'
		}
	},
	'8NKT9WTTRBJK' : {
		'H3CS' : {
			'aid' : '8WB2L3RX5RHT',
			'title' : 'Surface Pro - Intel Core m3 / 128GB SSD / 4GB RAM'
		},
		'LHL3' : {
			'aid' : '8WFW33T52MN8',
			'title' : 'Surface Pro - Intel Core i5 / 128GB SSD / 4GB RAM'
		},
		'1TSK' : {
			'aid' : '8W5RRMSJ0L7P',
			'title' : 'Surface Pro - Intel Core i5 / 256GB SSD / 8GB RAM'
		},
		'BV89' : {
			'aid' : '8WFCVL5RH1VN',
			'title' : 'Surface Pro - Intel Core i7 / 256GB SSD / 8GB RAM'
		},
		'L6FV' : {
			'aid' : '8W7VR9DD6NNV',
			'title' : 'Surface Pro - Intel Core i7 / 512GB SSD / 16GB RAM'
		},
		'C2HQ' : {
			'aid' : '8W1WNR6VNSLM',
			'title' : 'Surface Pro - Intel Core i7 / 1TB SSD / 16GB RAM'
		}
	}
	
};

var configuratorMapping = {
	'8TXJ08Q9LXDT' : {
		'processor' : [
			{
				'name' : 'Intel Core i5',
				'price' : '1499.00',
				'shortdesc' : '',
				'key' : 'Corei5',
				'sid' : '90L2',
				'options' : {
					'memory' : [
						{
							'name' : '8GB',
							'price' : '1499.00',
							'key' : '8GB',
							'sid' : '90L2',
							'options' : {
								'storage' : [
									{
										'name' : '128GB',
										'price' : '1499.00',
										'key' : '128GB',
										'sid' : '90L2'
									},
									{
										'name' : '256GB',
										'price' : '1699.00',
										'key' : '256GB',
										'sid' : 'GXPZ'
									},
									{
										'name' : '256GB / dGPU',
										'price' : '1899.00',
										'key' : '256GBdGPU',
										'sid' : '04KS'
									},
									{
										'name' : '512GB',
										'price' : '1999.00',
										'key' : '512GB',
										'sid' : '1ZDH'
									}
								
								]
							}
						}
					]
				
				}
			},
			{
				'name' : 'Intel Core i7',
				'price' : '2499.00',
				'shortdesc' : '',
				'key' : 'Corei7',
				'sid' : 'BW3T',			
				'options' : {
					'memory' : [
						{
							'name' : '16GB',
							'price' : '2499.00',
							'key' : '16GB',
							'sid' : 'BW3T',
							'options' : {
								'storage' : [
									{
										'name' : '512GB',
										'price' : '2499.00',
										'key' : '512GB',
										'sid' : 'BW3T'
									}
								]
							}
						}
					]
				}
			}
		]
	},
	'8NKT9WTTRBJK' : {
		'processor' : [
			{
				'name' : 'Intel Core m3',
				'price' : '799.00',
				'shortdesc' : '',
				'key' : 'Corem3',
				'sid' : 'H3CS',			
				'options' : {
					'memory' : [
						{
							'name' : '4GB',
							'price' : '799.00',
							'key' : '4GB',
							'sid' : 'H3CS',
							'options' : {
								'storage' : [
									{
										'name' : '128GB',
										'price' : '799.00',
										'key' : '128GB',
										'sid' : 'H3CS'
									}
								]
							}
						}
					]
				}
			},
			{
				'name' : 'Intel Core i5',
				'price' : '999.00',
				'shortdesc' : '',
				'key' : 'Corei5',
				'sid' : 'LHL3',
				'options' : {
					'memory' : [
						{
							'name' : '4GB',
							'price' : '999.00',
							'key' : '4GB',
							'sid' : 'LHL3',
							'options' : {
								'storage' : [
									{
										'name' : '128GB',
										'price' : '999.00',
										'key' : '128GB',
										'sid' : 'LHL3'
									}								
								]
							}
						},
						{
							'name' : '8GB',
							'price' : '1299.00',
							'key' : '8GB',
							'sid' : '1TSK',
							'options' : {
								'storage' : [
									{
										'name' : '256GB',
										'price' : '1299.00',
										'key' : '256GB',
										'sid' : '1TSK'
									}								
								]
							}
						}
					]
				
				}
			},
			{
				'name' : 'Intel Core i7',
				'price' : '1599.00',
				'shortdesc' : '',
				'key' : 'Corei7',
				'sid' : 'BV89',			
				'options' : {
					'memory' : [
						{
							'name' : '8GB',
							'price' : '1599.00',
							'key' : '8GB',
							'sid' : 'BV89',
							'options' : {
								'storage' : [
									{
										'name' : '256GB',
										'price' : '1599.00',
										'key' : '256GB',
										'sid' : 'BV89'
									}
								]
							}
						},
						{
							'name' : '16GB',
							'price' : '2199.00',
							'key' : '16GB',
							'sid' : 'L6FV',
							'options' : {
								'storage' : [
									{
										'name' : '512GB',
										'price' : '2199.00',
										'key' : '512GB',
										'sid' : 'L6FV'
									},
									{
										'name' : '1TB',
										'price' : '2699.00',
										'key' : '1TB',
										'sid' : 'C2HQ'
									}
								]
							}
						}
					]
				}
			}
		]
	}	
};



var reviewBar = ['<div data-grid="col-12" class="m-page-bar m-bundle-review" data-js-page-bar-target="in-page" data-cc="" id="in-page">',
					'<div data-grid="col-8">',
						'<div>',
							'<div class="context-menu hide-pagebarsummary">',
								'<div class="bundle-review-summary" data-grid="col-12">',
									'<div>',
										'<h4 class="c-heading-4 x-hidden-focus">Configure your device</h4>',
									'</div>',
									'<div class="c-subheading-5">Choose from the options below.</div>',
								'</div>',
								   '<div class="add-info-container" data-grid="col-12">',
									'<span class="additionalinfo c-paragraph-4" style="display: inline;">Microsoft Surface Pro 4 - 128GB / Intel Core i5</span></div>',
							'</div>',
							'<div class="c1-price-container price-container x-hidden-vp4 x-hidden-vp5 x-hidden-vp6">',
								'<div>',
									'<div class="c-price ">',
									'<div class="c-price">',
											'<div class="price-text srv_price">',
												'<span>$999.00</span>',
											'</div>',
										'<div class="srv_microdata" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">',
											'<meta itemprop="price" content="999">',
											'<meta itemprop="priceCurrency" content="USD">',
										'</div>',
									'</div>',
								'</div>',
									'<div class="c-caption-1 cli_promiseDate x-hidden">',
										'<p class="cli_promiseRelease release-date">',
											'Release date:',
											'<span class="cli_promiseReleaseDate"></span>',
										'</p>',
									'</div>',
								'</div>',
								'<div class="checkout-button">',
									'<button class="c-button c1-bundle-review" type="submit">Add to cart</button>',
								'</div>',
							'</div>',
						'</div>',
					'</div>',
					'<div class="price-container full-price-container x-hidden-vp1 x-hidden-vp2 x-hidden-vp3" data-grid="col-4">',
						'<div>',
							'<div class="c-price f-lean">',
								 '<div class="c-price">',
										'<div class="price-text srv_price">',
											'<span>$999.00</span>',
										'</div>',
									'<div class="srv_microdata" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">',
										'<meta itemprop="price" content="999">',
										'<meta itemprop="priceCurrency" content="USD">',
									'</div>',
								'</div>',
								'</div>',
							'<div class="c-caption-1 cli_promiseDate x-hidden">',
								'<p class="cli_promiseRelease release-date">',
									'Release date:',
									'<span class="cli_promiseReleaseDate"></span>',
								'</p>',
							'</div>',
						'</div>',
						'<div class="checkout-button">',
							'<button class="c-button review-button-margin-top" type="submit">Add to cart</button>',
						'</div>',
					'</div>',
				'</div>'].join('');

var prodCarousel_SurfaceBook = ['<div class="m-product-detail-hero-carousel" data-grid="col-12""><div class="c-carousel f-multi-slide f-scrollable-previous f-scrollable-next cli_skuMediaBrowser" data-sku-id="90L2" role="region" aria-label="Product images" style="touch-action: pan-y; -webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">',
        '<div class="c-sequence-indicator" role="radiogroup" aria-hidden="false">',
            '<button role="radio" aria-checked="true" aria-label="View Image 0" aria-controls="hero-slide-0" title="Image 0" tabindex="0" class="f-active"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 1" aria-controls="hero-slide-1" title="Image 1" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 2" aria-controls="hero-slide-2" title="Image 2" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 3" aria-controls="hero-slide-3" title="Image 3" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 4" aria-controls="hero-slide-4" title="Image 4" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 5" aria-controls="hero-slide-5" title="Image 5" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 6" aria-controls="hero-slide-6" title="Image 6" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 7" aria-controls="hero-slide-7" title="Image 7" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 8" aria-controls="hero-slide-8" title="Image 8" tabindex="-1"></button>',
        '</div>',
        '<button data-m="{&quot;cN&quot;:&quot;PreviousSlide&quot;,&quot;id&quot;:&quot;nn10c1c2c1m1r1a2&quot;,&quot;sN&quot;:10,&quot;aN&quot;:&quot;c1c2c1m1r1a2&quot;}" class="c-flipper f-previous" aria-label="View previous" title="View previous" tabindex="-1"></button>',
        '<button data-m="{&quot;cN&quot;:&quot;NextSlide&quot;,&quot;id&quot;:&quot;nn11c1c2c1m1r1a2&quot;,&quot;sN&quot;:11,&quot;aN&quot;:&quot;c1c2c1m1r1a2&quot;}" class="c-flipper f-next" aria-label="View next" title="View next" tabindex="-1"></button>',
    '<div>',
        '<ul class="c-group">',
                '<li id="hero-slide-0" data-f-theme="" class="f-active">',
                    '<picture class="c-image">',
						'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)"><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)"><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)"><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)"><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)"><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyloaded x-hidden-focus" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-1" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-2" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-3" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-4" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-5" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-6" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-7" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-8" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
        '</ul>',
    '</div>',
'</div></div>'].join('');

var prodCarousel_SurfacePro = ['<div class="m-product-detail-hero-carousel" data-grid="col-12""><div class="c-carousel f-multi-slide f-scrollable-previous f-scrollable-next cli_skuMediaBrowser" data-sku-id="90L2" role="region" aria-label="Product images" style="touch-action: pan-y; -webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">',
												'<div class="c-sequence-indicator" role="radiogroup" aria-hidden="false">',
													'<button role="radio" aria-checked="true" aria-label="View Image 0" aria-controls="hero-slide-0" title="Image 0" tabindex="0" class="f-active"></button>',
													'<button role="radio" aria-checked="false" aria-label="View Image 1" aria-controls="hero-slide-1" title="Image 1" tabindex="-1"></button>',
													'<button role="radio" aria-checked="false" aria-label="View Image 2" aria-controls="hero-slide-2" title="Image 2" tabindex="-1"></button>',
													'<button role="radio" aria-checked="false" aria-label="View Image 3" aria-controls="hero-slide-3" title="Image 3" tabindex="-1"></button>',
												'</div>',
												'<button data-m="{&quot;cN&quot;:&quot;PreviousSlide&quot;,&quot;id&quot;:&quot;nn10c1c2c1m1r1a2&quot;,&quot;sN&quot;:10,&quot;aN&quot;:&quot;c1c2c1m1r1a2&quot;}" class="c-flipper f-previous" aria-label="View previous" title="View previous" tabindex="-1"></button>',
												'<button data-m="{&quot;cN&quot;:&quot;NextSlide&quot;,&quot;id&quot;:&quot;nn11c1c2c1m1r1a2&quot;,&quot;sN&quot;:11,&quot;aN&quot;:&quot;c1c2c1m1r1a2&quot;}" class="c-flipper f-next" aria-label="View next" title="View next" tabindex="-1"></button>',
											'<div>',
											'<ul class="c-group">',
												'<li id="hero-slide-0" data-f-theme="" class="f-active">',
													'<picture class="c-image">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyloaded" alt="Surface Pro" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
													'</picture>',
												'</li>',
												'<li id="hero-slide-1" data-f-theme="">',
													'<picture class="c-image">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Surface Pro" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
													'</picture>',
												'</li>',
												'<li id="hero-slide-2" data-f-theme="">',
													'<picture class="c-image">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Surface Pro" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
													'</picture>',
												'</li>',
												'<li id="hero-slide-3" data-f-theme="">',
													'<picture class="c-image">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Surface Pro" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
													'</picture>',
												'</li>',
											'</ul>',
										'</div>',
									'</div></div>'].join('');

var configHtml_SurfaceBook = ['<div id="ProductConfigurator">',
    '<div data-grid="container" class="configroot" data-id="8TXJ08Q9LXDT" data-culture="en-US" data-market="US" data-aurl="https://inv.mp.microsoft.com/v2.0/inventory/US?MS-CorrelationId=adeb77ec-849a-47cd-aae8-cafe832dbdde&amp;MS-RequestId=adeb77ec-849a-47cd-aae8-cafe832dbdde&amp;mode=continueOnError">',
        '<div class="" data-grid="col-4">',
						prodCarousel_SurfaceBook,
        '</div>',
      '<div class="m-configdata" data-grid="col-8">',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Processor</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_0" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_0" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">You can upgrade the processor to an Intel Core i5 for stronger performance, or an Intel Core i7 for the highest performance. The Intel Core i7 option includes Intel Iris graphics, making your photo, video, and 3D applications run faster. It also gives you the ability to play more PC games.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Processor" data-rh="RichText" role="group" aria-labelledby="Processor_Label" id="processor-row">',
                  '<button class="c-select-button" name="Processor" data-key="Corei5" aria-pressed="true" data-js-selected-text="Intel Core i5 has been selected">',
                  '<h6 class="c-heading-6 x-type-left">Intel Core i5</h6>',
        '<p class="c-paragraph-6 short_desc x-type-left">Create and edit large databases or documents with Office. Make music with professional-grade apps. Do advanced photo editing with programs like Adobe Creative Cloud.</p>            </button>',
                  '<button class="c-select-button" name="Processor" data-key="Corei7" aria-pressed="false" data-js-selected-text="Intel Core i7 has been selected">',
                  '<h6 class="c-heading-6 x-type-left">Intel Core i7</h6>',
        '<p class="c-paragraph-6 short_desc x-type-left">Make professional HD video edits with programs like Adobe Premier Pro CC3. Run professional-grade apps like Visual Studio, or design and build 3D models with programs like AutoCAD. Run power-intensive software with ease.</p>            </button>',
              '</div>',
          '</div>',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Memory</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_1" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_1" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">If you’re interested in performing more intensive tasks, it’s important to upgrade your memory now so you are prepared. 16GB allows your device to run more apps at the same time, edit high-resolution photos/videos with amazing smoothness, and develop applications more easily.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Memory" data-rh="RichText" role="group" aria-labelledby="Memory_Label" id="memory-row">',
			  '<button class="c-select-button" name="Memory" data-key="8GB" aria-pressed="false" data-js-selected-text="8GB has been selected">',
                  '<h6 class="c-heading-6 x-type-left">8GB</h6>',
              '</button>',
                  '<button class="c-select-button" name="Memory" data-key="16GB" aria-pressed="false" data-js-selected-text="16GB has been selected">',
                  '<h6 class="c-heading-6 x-type-left">16GB</h6>',
              '</button>',
              '</div>',
          '</div>',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Storage</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_2" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_2" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">If you think you might want room for more applications, documents, and music, you should consider upgrading to at least 256GB of storage. If you plan to store a lot of high-resolution photos/videos or play the latest PC games, consider choosing 512GB or 1TB for the most flexibility.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Storage" data-rh="RichText" role="group" aria-labelledby="Storage_Label" id="storage-row">',
                  '<button class="c-select-button" name="Storage" data-key="128GB" data-def="true">',
                  '<h6 class="c-heading-6 x-type-left">128GB</h6>',
              '</button>',
                  '<button class="c-select-button" name="Storage" data-key="256GB" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">256GB</h6>',
              '</button>',
			  '<button class="c-select-button" name="Storage" data-key="256GBdGPU" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">256GB / dGPU</h6>',
              '</button>',
                  '<button class="c-select-button" name="Storage" data-key="512GB" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">512GB</h6>',
              '</button>',
              '</div>',
          '</div>',
      '</div>',
'</div>',
'</div>'].join('');

var configHtml_SurfacePro = ['<div id="ProductConfigurator">',
    '<div data-grid="container" class="configroot" data-id="8NKT9WTTRBJK" data-culture="en-US" data-market="US" data-aurl="https://inv.mp.microsoft.com/v2.0/inventory/US?MS-CorrelationId=adeb77ec-849a-47cd-aae8-cafe832dbdde&amp;MS-RequestId=adeb77ec-849a-47cd-aae8-cafe832dbdde&amp;mode=continueOnError">',
        '<div class="" data-grid="col-4">',
						prodCarousel_SurfacePro,
        '</div>',
      '<div class="m-configdata" data-grid="col-8">',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Processor</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_0" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_0" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">You can upgrade the processor to an Intel Core i5 for stronger performance, or an Intel Core i7 for the highest performance. The Intel Core i7 option includes Intel Iris graphics, making your photo, video, and 3D applications run faster. It also gives you the ability to play more PC games.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Processor" data-rh="RichText" role="group" aria-labelledby="Processor_Label" id="processor-row">',
                  '<button class="c-select-button" name="Processor" data-key="Corem3" aria-pressed="true" data-js-selected-text="Intel Core m3 has been selected">',
                  '<h6 class="c-heading-6 x-type-left">Intel Core M</h6>',
        '<p class="c-paragraph-6 short_desc x-type-left">Runs desktop software just like a laptop. Draw and sketch on screen. Stream music and shows with iTunes and Netflix.</p>',
		'</button>',
				  '<button class="c-select-button" name="Processor" data-key="Corei5" aria-pressed="false" data-js-selected-text="Intel Core i5 has been selected">',
                  '<h6 class="c-heading-6 x-type-left">Intel Core i5</h6>',
        '<p class="c-paragraph-6 short_desc x-type-left">Create and edit large databases or documents with Office. Make music with professional-grade apps. Do advanced photo editing with programs like Adobe Creative Cloud.</p>            </button>',
                  '<button class="c-select-button" name="Processor" data-key="Corei7" aria-pressed="false" data-js-selected-text="Intel Core i7 has been selected">',
                  '<h6 class="c-heading-6 x-type-left">Intel Core i7</h6>',
        '<p class="c-paragraph-6 short_desc x-type-left">Make professional HD video edits with programs like Adobe Premier Pro CC3. Run professional-grade apps like Visual Studio, or design and build 3D models with programs like AutoCAD. Run power-intensive software with ease.</p>            </button>',
              '</div>',
          '</div>',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Memory</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_1" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_1" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">If you’re interested in performing more intensive tasks, it’s important to upgrade your memory now so you are prepared. 16GB allows your device to run more apps at the same time, edit high-resolution photos/videos with amazing smoothness, and develop applications more easily.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Memory" data-rh="RichText" role="group" aria-labelledby="Memory_Label" id="memory-row">',
			  '<button class="c-select-button" name="Memory" data-key="4GB" aria-pressed="false" data-js-selected-text="4GB has been selected">',
                  '<h6 class="c-heading-6 x-type-left">4GB</h6>',
              '</button>',
			  '<button class="c-select-button" name="Memory" data-key="8GB" aria-pressed="false" data-js-selected-text="8GB has been selected">',
                  '<h6 class="c-heading-6 x-type-left">8GB</h6>',
              '</button>',
                  '<button class="c-select-button" name="Memory" data-key="16GB" aria-pressed="false" data-js-selected-text="16GB has been selected">',
                  '<h6 class="c-heading-6 x-type-left">16GB</h6>',
              '</button>',
              '</div>',
          '</div>',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Storage</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_2" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_2" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">If you think you might want room for more applications, documents, and music, you should consider upgrading to at least 256GB of storage. If you plan to store a lot of high-resolution photos/videos or play the latest PC games, consider choosing 512GB or 1TB for the most flexibility.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Storage" data-rh="RichText" role="group" aria-labelledby="Storage_Label" id="storage-row">',
                  '<button class="c-select-button" name="Storage" data-key="128GB" data-def="true">',
                  '<h6 class="c-heading-6 x-type-left">128GB</h6>',
              '</button>',
                  '<button class="c-select-button" name="Storage" data-key="256GB" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">256GB</h6>',
              '</button>',
                  '<button class="c-select-button" name="Storage" data-key="512GB" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">512GB</h6>',
              '</button>',
			  '<button class="c-select-button" name="Storage" data-key="1TB" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">1TB</h6>',
              '</button>',
              '</div>',
          '</div>',
      '</div>',
'</div>',
'</div>'].join('');

var pageHTML = ['<section id="mainArea"><div id="mainProdPlace">',
           '<div id="SurfaceConfigurator">',     
            '<div>',
              reviewBar,
            '</div>',
            	(productId === '8TXJ08Q9LXDT' ? configHtml_SurfaceBook : configHtml_SurfacePro),
           '</div>',
           '</div>',
        '</section>'].join('');
			
var utils = window['optimizely'].get('utils');

utils.waitUntil(function() {
  if(window.jQuery) return true;
}).then(function() {
	var $ = window.jQuery;
  
  utils.waitForElement('#headerArea').then(function(){

	  //Utility Functions
	  var updateSummaryPanel = function(price, title, atcurl, invstatus){
			$('.m-bundle-review .srv_price span').html((price ? ('$' + price.replace(/[^,.0-9]/g,'')) : '$0.00'));
			
			$('.m-bundle-review .add-info-container .additionalinfo').html(title);
			
			if(invstatus){
				$('.m-bundle-review .checkout-button .c-button').removeAttr('disabled').text('Add to cart').attr('addtocarturl', atcurl).removeClass('disabled');	
			} else {
				$('.m-bundle-review .checkout-button .c-button').attr('disabled', 'disabled').text('Out of stock').addClass('disabled');
			}
			
	  };
	  
	  var stickyController = function(){
			var scrollAnchor = $('#mainProdPlace'),
				stickyBar = $('.m-page-bar'),
				componentOffset = 0,
				paddingOffset = 0;
			
			$(window).on('scroll', function(){
				componentOffset = scrollAnchor.offset().top;

				var scrollTop = $(window).scrollTop(),
					distance = (componentOffset - scrollTop);

				if(distance <= paddingOffset && !stickyBar.hasClass('f-sticky')){
				  stickyBar.addClass('f-sticky f-show');
				} else if(distance > paddingOffset && stickyBar.hasClass('f-sticky')){
				  stickyBar.removeClass('f-sticky f-show');
				}
			});	
	  };
	  
	  var updateRowPricing = function(target){
		  var selectedPrice = ($('.c-select-button[aria-pressed="true"]', target).length ? $('.c-select-button[aria-pressed="true"]', target).data('price') : $('.c-select-button:eq(0)', target).data('price')),
			  priceDiff = null;
		  
		  $('.c-select-button', target).each(function(){
				priceDiff = (parseFloat($(this).data('price')) - parseFloat(selectedPrice));
				
				$('.price-diff', this).html((priceDiff >= 0 ? '+' : '-') + ' $' + Math.abs(priceDiff).toFixed(2));
		  });
		  
	  };
	  
	  var resetOptions = function(){
		  $('#ProductConfigurator button.c-select-button').attr('disabled','disabled').attr('aria-pressed', 'false');
		  
		  $('#processor-row button.c-select-button').each(function(index){
			$(this).data('indexkey', index);
		  });
		  
		  $('#memory-row button.c-select-button').each(function(index){
			$(this).data('indexkey', index);
		  });
		  
		  $('#storage-row button.c-select-button').each(function(index){
			$(this).data('indexkey', index);
		  });
	  };
	  
	  //Inject new config layout
	  var processorRow = function(){
			var processorIndex = (configuratorPathObj.processor ? configuratorPathObj.processor : '0'),
				dataObj = utility.object.find(configuratorMapping[productId], 'processor'),
				htmlChunk = [],
				defaultPrice = null;
			
			if(!dataObj){		
				return false;
			}

			dataObj.map(function(value, index){
				if(!index){
					//Set default
					$('#processor-row button.c-select-button[data-key="' + value.key + '"]').attr('aria-pressed', 'true');
					
					var _thisPrice = value.price,
						_thisSid = value.sid,
						_thisPid = productId,
						_thisObj = availabilityObj[_thisPid],
						addToCartURL = '/en-us/store/buy?pid=' + _thisPid + '&sid=' + _thisSid + '&aid=' + _thisObj[_thisSid].aid,
						productTitle = _thisObj[_thisSid].title;
					
					checkInventoryStatus({
						'pid' : _thisPid,
						'sid' : _thisSid,
						'did' : '9000000013',
						'aid' : _thisObj[_thisSid].aid
					}, function(data){
						var invStatus = (data.inStock === "True" ? true : false);
						
						$('#processor-row button.c-select-button:eq(0)').data('instock', invStatus);
						updateSummaryPanel(_thisPrice, productTitle, addToCartURL, invStatus);
					});
				}
				
				$('#processor-row button.c-select-button[data-key="' + value.key + '"]').removeAttr('disabled').data('price', value.price).data('sid', value.sid);
			});
		};
		
		var memoryRow = function(){
			var processorIndex = (configuratorPathObj.processor ? configuratorPathObj.processor : '0'),
				memoryIndex = (configuratorPathObj.memory ? configuratorPathObj.memory : '0'),
				dataObj = utility.object.find(configuratorMapping[productId], 'processor.' + processorIndex + '.options.memory'),
				htmlChunk = [];
				
			if(!dataObj){
				return false;
			}
			
			//Reset options
			$('#memory-row button.c-select-button').attr('disabled','disabled');
			$('#memory-row button.c-select-button[aria-pressed="true"]').attr('aria-pressed', 'false');
			
			//Enable available options
			dataObj.map(function(value, index){
				if(!index){
					$('#memory-row button.c-select-button[data-key="' + value.key + '"]').attr('aria-pressed', 'true');
				}
				
				$('#memory-row button.c-select-button[data-key="' + value.key + '"]').removeAttr('disabled').data('price', value.price).data('sid', value.sid).data('indexkey', index);
			});
		};
		
		var storageRow = function(){
			var processorIndex = (configuratorPathObj.processor ? configuratorPathObj.processor : '0'),
				memoryIndex = (configuratorPathObj.memory ? configuratorPathObj.memory : '0'),
				dataObj = utility.object.find(configuratorMapping[productId], 'processor.' + processorIndex + '.options.memory.' + memoryIndex + '.options.storage'),
				htmlChunk = [];
			
			if(!dataObj){
				return false;
			}

			//Reset options
			$('#storage-row button.c-select-button').attr('disabled','disabled');
			$('#storage-row button.c-select-button[aria-pressed="true"]').attr('aria-pressed', 'false');
			
			//Enable available options			
			dataObj.map(function(value, index){
				if(!index){
					$('#storage-row button.c-select-button[data-key="' + value.key + '"]').attr('aria-pressed', 'true');
				}
				
				$('#storage-row button.c-select-button[data-key="' + value.key + '"]').removeAttr('disabled').data('price', value.price).data('sid', value.sid).data('indexkey', index);
			});
		};
				
		//Add configurator
		if(configuratorMapping[productId]){
			$('#headerArea').after(pageHTML).promise().done(function(){
				//Option reset
				resetOptions();
				
				//Processor Row
				processorRow();
				
				//Memory Row
				memoryRow();
				
				//Storage Row
				storageRow();
				
				//Sticky bar
				stickyController();
			});
		}
	
    
		$('body').on('click.exp-processor', '#processor-row .c-select-button', function(){
			if($(this).attr('aria-pressed') === 'true'){
				return false;
			}
			
	  	//Flag for add to cart goal
      skuChanged = true;         
      
			var _this = $(this),
				_thisPrice = $(this).data('price'),
				_thisSid = $(this).data('sid'),
				_thisPid = productId,
				_thisObj = availabilityObj[_thisPid],
				addToCartURL = '/en-us/store/buy?pid=' + _thisPid + '&sid=' + _thisSid + '&aid=' + _thisObj[_thisSid].aid,
				productTitle = _thisObj[_thisSid].title;
			
			$('.c-select-button', $(this).closest('.configparent')).attr('aria-pressed', 'false');
			$(this).attr('aria-pressed', 'true');
			
			if($(this).data('instock') === undefined){
				checkInventoryStatus({
					'pid' : _thisPid,
					'sid' : _thisSid,
					'did' : '9000000013',
					'aid' : _thisObj[_thisSid].aid
				}, function(data){
					var invStatus = (data.inStock === "True" ? true : false);
					
					_this.data('instock', invStatus);
					updateSummaryPanel(_thisPrice, productTitle, addToCartURL, invStatus);
				});
			} else {
				updateSummaryPanel(_thisPrice, productTitle, addToCartURL, _this.data('instock'));
			}
			
			configuratorPathObj = {
				'processor' : $(this).data('indexkey')
			};
			
			//Memory Row
			memoryRow();
			
			//Storage Row
			storageRow();
		});
		
		$('body').on('click.exp-memory', '#memory-row .c-select-button', function(){
			if($(this).attr('aria-pressed') === 'true'){
				return false;
			}
      
	  	//Flag for add to cart goal
      skuChanged = true;         
			
			var _this = $(this),
				_thisPrice = $(this).data('price'),
				_thisSid = $(this).data('sid'),
				_thisPid = productId,
				_thisObj = availabilityObj[_thisPid],
				addToCartURL = '/en-us/store/buy?pid=' + _thisPid + '&sid=' + _thisSid + '&aid=' + _thisObj[_thisSid].aid,
				productTitle = _thisObj[_thisSid].title;
			
			$('.c-select-button', $(this).closest('.configparent')).attr('aria-pressed', 'false');
			$(this).attr('aria-pressed', 'true');
			
			if($(this).data('instock') === undefined){
				checkInventoryStatus({
					'pid' : _thisPid,
					'sid' : _thisSid,
					'did' : '9000000013',
					'aid' : _thisObj[_thisSid].aid
				}, function(data){
					var invStatus = (data.inStock === "True" ? true : false);
					
					_this.data('instock', invStatus);
					updateSummaryPanel(_thisPrice, productTitle, addToCartURL, invStatus);
				});
			} else {
				updateSummaryPanel(_thisPrice, productTitle, addToCartURL, _this.data('instock'));
			}
		
			configuratorPathObj.memory = $(this).data('indexkey');
			configuratorPathObj.storage = '0';
			
			//Storage Row
			storageRow();
			
		});
		
		$('body').on('click.exp-storage', '#storage-row .c-select-button', function(){
			if($(this).attr('aria-pressed') === 'true'){
				return false;
			}
      
	  	//Flag for add to cart goal
      skuChanged = true;      
			
			var _this = $(this),
				_thisPrice = $(this).data('price'),
				_thisSid = $(this).data('sid'),
				_thisPid = productId,
				_thisObj = availabilityObj[_thisPid],
				addToCartURL = '/en-us/store/buy?pid=' + _thisPid + '&sid=' + _thisSid + '&aid=' + _thisObj[_thisSid].aid,
				productTitle = _thisObj[_thisSid].title;
			
			$('.c-select-button', $(this).closest('.configparent')).attr('aria-pressed', 'false');
			$(this).attr('aria-pressed', 'true');
			
			if($(this).data('instock') === undefined){
				checkInventoryStatus({
					'pid' : _thisPid,
					'sid' : _thisSid,
					'did' : '9000000013',
					'aid' : _thisObj[_thisSid].aid
				}, function(data){
					var invStatus = (data.inStock === "True" ? true : false);
					
					_this.data('instock', invStatus);
					updateSummaryPanel(_thisPrice, productTitle, addToCartURL, invStatus);
				});
			} else {
				updateSummaryPanel(_thisPrice, productTitle, addToCartURL, _this.data('instock'));
			}
			
			configuratorPathObj.storage = $(this).data('indexkey');
			
		});
		
		//Trigger add to cart click
		$('body').on('click.exp-addtocart', '.m-bundle-review .checkout-button .c-button:not(.disabled)', function(){
       window['optimizely'].push({
        type: "event",
        eventName: "store_us_expControl_StickyBar_addedToCart"
      });
      
      if(!skuChanged){
        window['optimizely'].push({
          type: "event",
          eventName: "store_us_addtocart_defaultsku"
        });
      }
      
      //Page level Book & Pro Add to Cart Metric.
      window['optimizely'].push({
        type: "event",
        eventName: "7855979098_added_to_cart"
      });
      
      
			window.location = $(this).attr('addtocarturl');			
		});
		
		$('#ProductConfigurator').on('click.carousel-flippers', '.m-product-detail-hero-carousel .c-flipper', function(){
			var _parent = $(this).closest('.c-carousel'),
				_activeSlide = $('.c-group > li.f-active', _parent),
				_activeSequenceButton = $('.c-sequence-indicator > button[aria-checked="true"]', _parent);
			
			//Remove active states
			_activeSlide.removeClass('f-active f-animate-previous f-animate-next');
			_activeSequenceButton.attr('aria-checked', 'false').removeClass('f-active');
				
			if($(this).hasClass('f-previous')){
				//Select next slide
				if(!_activeSlide.index()){
					$('.c-group > li:last', _parent).addClass('f-active f-animate-previous');
					$('.c-sequence-indicator > button:last', _parent).attr('aria-checked', 'true').addClass('f-active');
				} else {
					_activeSlide.prev('li').addClass('f-active f-animate-previous');
					_activeSequenceButton.prev('button').attr('aria-checked', 'true').addClass('f-active');
				}
			} else {
				//Select next slide
				if((_activeSlide.index() == ($('.c-group > li', _parent).length -1))){
					$('.c-group > li:eq(0)', _parent).addClass('f-active f-animate-next');
					$('.c-sequence-indicator > button:eq(0)', _parent).attr('aria-checked', 'true').addClass('f-active');
				} else {
					_activeSlide.next('li').addClass('f-active f-animate-next');
					_activeSequenceButton.next('button').attr('aria-checked', 'true').addClass('f-active');
				}	
			}
		});
    
    // DECORATE DOM ELEMENTS
    utils.waitUntil(function() {
      return typeof awa != 'undefined' && awa.isInitialized === true;
    }).then(function() {
      try {
        var triggerDecoration = function(target){
          if(window.CustomEvent){
            event = new CustomEvent('decorate', {'bubbles': true });
          } else {
            event = document.createEvent('CustomEvent');
            event.initCustomEvent('decorate', true, true, { some: 'data' });
          }

          target.dispatchEvent(event);

          require(['jsll'], function(jsll) {
            jsll.ct.captureContentUpdate({ timings: { didDeferExecTimeout: window._pageTimings.didDeferExecTimeout } });
          });
        };
        triggerDecoration(document.getElementById('mainArea'));
      }catch(e) {
        console.log(e);
      }
    });
    
  });
});
}}, {"value": "<style>@media screen and (max-width: 540px){\n  .m-bundle-review .hide-pagebarsummary{\n    display: block !important; \n  }\n}\n@media screen and (max-width: 1084px){\n\t#ProductConfigurator .configroot > div[data-grid=\"col-4\"]{\n\t\twidth: 100% !important;\n\t}\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "5B22B0F1-B25E-426D-9C3E-0E1E741700E8"}]}], "name": "Tabs"}, {"id": "8649630060", "actions": [{"viewId": "8466196703", "changes": [{"dependencies": [], "type": "custom_code", "id": "E3F2A2A5-9833-40BF-B457-4CF4470BE67F", "value": function($){//Utilities
var resizeHero = function(){
  var immersiveHeroItemElement = $('#expImmersiveHero'),
      immersiveHeroTopOffset = $('> div', immersiveHeroItemElement).css('top'),
      immersiveHeroTopOffsetNumber = (immersiveHeroTopOffset ? immersiveHeroTopOffset.replace('px') : 0),
      immersiveHeroHeight = (immersiveHeroItemElement.height() - parseFloat(immersiveHeroTopOffsetNumber)),
      immersiveHeroCTAHeight = $('#expImmersiveHero > div > div').height();

  var imageHeight = Math.round(immersiveHeroHeight - immersiveHeroCTAHeight) + "px";

  $('.exp-prodboxshot img', immersiveHeroItemElement).css('height', imageHeight);
};


var surfaceBook_hero = function(){
	var priceArray = [],
            lowestPrice = null;

	  $('.cli_skuSelector button').each(function(){
		priceArray.push($(this).data('list-price'));
	  });

	  priceArray.sort(function(a, b){return a-b;});

	  lowestPrice = (priceArray.length ? priceArray[0] : null);
	  
	return ['<section class="m-immersive-hero-item theme-light f-align-bottom" id="expImmersiveHero">',
          '<picture class="c-image exp-hidden">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/086ac056096841758d9b40e04f72beb7.gif" media="(min-width: 1779px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/1bb6687b81344d039641ebced21adb44.gif" media="(min-width:1400px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/5aa8bde93db64c489ed9abe2baa7b2d7.gif" media="(min-width:1084px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/5492567758fa47b3ad1e8db27a329873.gif" media="(min-width:768px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/8c7da1b94bc1480688948cdb5b6dc4db.gif" media="(min-width:540px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/708eb2c686a349de9e208860ce424563.gif" media="(min-width:0)">',
              '<img srcset="//cdn.optimizely.com/img/3698060313/1bb6687b81344d039641ebced21adb44.gif" alt="">',
          '</picture>',
          '<div>',
              '<picture class="c-image exp-prodboxshot">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/e2a8f5225e614df689ca70d00eb326c2.png" media="(min-width: 1779px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/e48bf1e6f99740a6b1ea70fb4d5d1be8.png" media="(min-width:1400px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/0ea5df6210874354b40a243fb8c1318f.png" media="(min-width:1084px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/ec9785a2bf4d4f9b8d2ca92d4eaf7ead.png" media="(min-width:768px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/e17468f86ac547cb925ca1ced7ca8602.png" media="(min-width:540px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/0cd519de11ad41ff948cf713f4d68328.png" media="(min-width:0)">',
                  '<img class="lazyload" srcset="//cdn.optimizely.com/img/3698060313/e48bf1e6f99740a6b1ea70fb4d5d1be8.png" alt="Surface Book">',
              '</picture>',
              '<div>',
                  '<h1 class="c-heading">Surface Book</h1>',
                  '<p class="c-subheading">The ultimate laptop. Now more powerful than ever.</p>',
                  '<p class="exp-price c-subheading">starting at $' + (lowestPrice ? lowestPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '1,499.00' ) + '</p>',                
                  '<div class="c-group">',
                      '<a href="/en-us/store/config/surface-book/8TXJ08Q9LXDT" class="c-button exp-configure f-primary" role="button">',
                          '<span>Configure</span>',
                      '</a>',
                      '<a href="javascript:void(0);" class="c-button exp-findinstore" role="button">',
                          '<span>Find in store</span>',
                      '</a>',
                  '</div>',
              '</div>',
          '</div>',
      '</section>'].join('');
};

var surfacePro_hero = function(){
	var priceArray = [],
            lowestPrice = null;

	  $('.cli_skuSelector button').each(function(){
		priceArray.push($(this).data('list-price'));
	  });

	  priceArray.sort(function(a, b){return a-b;});

	  lowestPrice = (priceArray.length ? priceArray[0] : null);
	  
	return ['<section class="m-immersive-hero-item theme-light f-align-bottom" id="expImmersiveHero">',
          '<picture class="c-image exp-hidden">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/086ac056096841758d9b40e04f72beb7.gif" media="(min-width: 1779px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/1bb6687b81344d039641ebced21adb44.gif" media="(min-width:1400px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/5aa8bde93db64c489ed9abe2baa7b2d7.gif" media="(min-width:1084px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/5492567758fa47b3ad1e8db27a329873.gif" media="(min-width:768px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/8c7da1b94bc1480688948cdb5b6dc4db.gif" media="(min-width:540px)">',
              '<source srcset="//cdn.optimizely.com/img/3698060313/708eb2c686a349de9e208860ce424563.gif" media="(min-width:0)">',
              '<img srcset="//cdn.optimizely.com/img/3698060313/1bb6687b81344d039641ebced21adb44.gif" alt="">',
          '</picture>',
          '<div>',
              '<picture class="c-image exp-prodboxshot">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/93e3d47674ac41e5aec3450444b2cadf.png" media="(min-width: 1779px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/afa4254c8c6444ed86bfeb0152f1c440.png" media="(min-width:1400px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/4628e6458c7243f283e7f515e76ef04a.png" media="(min-width:1084px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/ed5bb44c85084377a423e7a09c43c349.png" media="(min-width:768px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/28d892e74bc94429930d635b7d110f70.png" media="(min-width:540px)">',
                  '<source srcset="//cdn.optimizely.com/img/3698060313/3bd7f72ad74c4bd9831c134328392564.png" media="(min-width:0)">',
                  '<img class="lazyload" srcset="//cdn.optimizely.com/img/3698060313/afa4254c8c6444ed86bfeb0152f1c440.png" alt="Surface Pro">',
              '</picture>',
              '<div>',
                  '<h1 class="c-heading">Surface Pro</h1>',
                  '<p class="c-subheading">The most versatile laptop. Now more powerful than ever.</p>',
                  '<p class="exp-price c-subheading">starting at $' + (lowestPrice ? lowestPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '799.00' ) + '</p>',                
                  '<div class="c-group">',
                      '<a href="/en-us/store/config/surface-laptop/8NKT9WTTRBJK" class="c-button exp-configure f-primary" role="button">',
                          '<span>Configure</span>',
                      '</a>',
                      '<a href="javascript:void(0);" class="c-button exp-findinstore" role="button">',
                          '<span>Find in store</span>',
                      '</a>',
                  '</div>',
              '</div>',
          '</div>',
      '</section>'].join('');
};

var domElements = {
	"8TXJ08Q9LXDT" : [
		{
			"module" : surfaceBook_hero,
			"target" : "#mainArea",
			"action" : "prepend",
			"callback" : function(){
				lazySizes.init();
        
        $('.exp-prodboxshot img').on('load', function(){
        	resizeHero();
        });

        $(window).on('resize.immsersiveHero', function(){
          resizeHero();
        });


				$('.exp-findinstore').on('click', function(){
				  $('.cli_pdp-findinstore-button').trigger('click');
				});


				// DECORATE DOM ELEMENTS
				utils.waitUntil(function() {
				  return typeof awa != 'undefined' && awa.isInitialized === true;
				}).then(function() {
				  try {
					var triggerDecoration = function(target){
					  if(window.CustomEvent){
						event = new CustomEvent('decorate', {'bubbles': true });
					  } else {
						event = document.createEvent('CustomEvent');
						event.initCustomEvent('decorate', true, true, { some: 'data' });
					  }

					  target.dispatchEvent(event);

					  require(['jsll'], function(jsll) {
						jsll.ct.captureContentUpdate({ timings: { didDeferExecTimeout: window._pageTimings.didDeferExecTimeout } });
					  });
					};
					triggerDecoration(document.getElementById('expImmersiveHero'));
				  }catch(e) {
					console.log(e);
				  }
				});


			}
		}
	],
	"8NKT9WTTRBJK" : [
		{
			"module" : surfacePro_hero,
			"target" : "#mainArea",
			"action" : "prepend",
			"callback" : function(){
				lazySizes.init();

        $('.exp-prodboxshot img').on('load', function(){
        	resizeHero();
        });
        

        $(window).on('resize.immsersiveHero', function(){
          resizeHero();
        });
        
				$('.exp-findinstore').on('click', function(){
				  $('.cli_pdp-findinstore-button').trigger('click');
				});


				// DECORATE DOM ELEMENTS
				utils.waitUntil(function() {
				  return typeof awa != 'undefined' && awa.isInitialized === true;
				}).then(function() {
				  try {
					var triggerDecoration = function(target){
					  if(window.CustomEvent){
						event = new CustomEvent('decorate', {'bubbles': true });
					  } else {
						event = document.createEvent('CustomEvent');
						event.initCustomEvent('decorate', true, true, { some: 'data' });
					  }

					  target.dispatchEvent(event);

					  require(['jsll'], function(jsll) {
						jsll.ct.captureContentUpdate({ timings: { didDeferExecTimeout: window._pageTimings.didDeferExecTimeout } });
					  });
					};
					triggerDecoration(document.getElementById('expImmersiveHero'));
				  }catch(e) {
					console.log(e);
				  }
				});


			}
		}
	]
	
};


var utils = window['optimizely'].get('utils');

utils.waitUntil(function() {
  if(window.jQuery) return true;
}).then(function() {
	var $ = window.jQuery;
		
      utils.waitForElement('#mainRegion1').then(function(){
			
        //Clear float fixes for base page
				$('#RequirementsStructuredList, #IncludesStructuredListDualColumn, #RatingReview, #FAQ, #TechSpec').before('<div class="exp-clearfloat"></div>');   
			
          var elementsByProduct = domElements[(_pageBITags && _pageBITags.pageContracts && _pageBITags.pageContracts.ProductInfo ? _pageBITags.pageContracts.ProductInfo.id : '')];

          var insertModule = function(){
            if(elementsByProduct[0].action.toLowerCase() === 'prepend'){
              $(elementsByProduct[0].target).prepend(elementsByProduct[0].module);
            } else if(elementsByProduct[0].action.toLowerCase() === 'after'){
              $(elementsByProduct[0].target).after(elementsByProduct[0].module);
            } else if(elementsByProduct[0].action.toLowerCase() === 'before'){
              $(elementsByProduct[0].target).before(elementsByProduct[0].module);
            } else if(elementsByProduct[0].action.toLowerCase() === 'replacewith'){
              $(elementsByProduct[0].target).replaceWith(elementsByProduct[0].module);
            }	

            //Callback, if one exists
            if(elementsByProduct[0].callback){
              elementsByProduct[0].callback();
            }

            elementsByProduct.shift();

            if(elementsByProduct.length){
              insertModule();
            }
          };

          if(elementsByProduct && elementsByProduct.length){
            insertModule();
          }		  
	  });
});
}}, {"value": "<style>.m-immersive-hero-item {\n  position: relative;\n  min-height: 600px;\n  max-height: calc(100vh - 130px);\n  overflow: hidden;\n  padding: 0; }\n  /* line 13, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item:hover {\n    cursor: default; }\n  /* line 19, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item[data-js-href]:hover {\n    cursor: pointer; }\n  /* line 24, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item > picture.c-image {\n    display: block;\n    width: 100%;\n    max-width: 100%; }\n    /* line 29, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n    .m-immersive-hero-item > picture.c-image img {\n      width: 100%;\n      overflow-y: hidden; }\n  /* line 35, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item > div {\n    position: absolute;\n    display: block;\n    text-align: center;\n    width: 100%; }\n    /* line 41, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n    .m-immersive-hero-item > div > div {\n      padding-left: 12px;\n      padding-right: 12px;\n      opacity: 0;\n      animation: fadeIn ease-in 1;\n      animation-fill-mode: forwards;\n      animation-duration: 1s;\n      animation-delay: 600ms;\n      max-width: 100%;\n      margin: 0 auto; }\n      /* line 47, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div .c-heading {\n        font-size: 34px;\n        line-height: 40px;\n        padding: 38px 0 2px;\n        font-weight: 100;\n        font-weight: 700;\n        opacity: 0.95; }\n      /* line 52, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div .c-subheading {\n        font-size: 20px;\n        line-height: 24px;\n        padding: 8px 0 4px;\n        font-weight: 400;\n        padding-top: 8px; }\n      /* line 57, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div .c-call-to-action {\n        margin: 24px 0; }\n      /* line 61, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div .c-group {\n        -ms-flex-pack: center;\n            justify-content: center;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        margin: 24px 0; }\n        /* line 66, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n        .m-immersive-hero-item > div > div .c-group > .c-call-to-action {\n          margin: 0 24px 0 0; }\n          /* line 69, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n          .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action {\n            background: transparent;\n            color: #0067B8;\n            border-color: transparent;\n            border-width: 2px;\n            padding: 10px 0 7px 0;\n            margin-left: 0;\n            transition: none;\n            margin-top: 0; }\n            /* line 10, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n            .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus), .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover, .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:active {\n              background: transparent;\n              outline: transparent;\n              border-color: transparent; }\n            /* line 18, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n            .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus) {\n              background: rgba(0, 103, 184, 0.1) content-box; }\n            /* line 22, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n            .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus), .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover {\n              color: #005da6; }\n              /* line 26, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus) span, .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover span {\n                text-decoration: underline; }\n            /* line 31, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n            .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:active {\n              background: none;\n              color: #005293;\n              text-decoration: none;\n              -ms-transform: none;\n                  transform: none; }\n            /* line 38, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n            .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action[aria-disabled=\"true\"] {\n              cursor: not-allowed;\n              color: #cce1f1; }\n            /* line 43, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n            .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action, .theme-dark .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action {\n              color: #000;\n              background: transparent;\n              border-color: transparent; }\n              /* line 48, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus), .theme-dark .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus) {\n                background: rgba(0, 0, 0, 0.1) content-box; }\n              /* line 52, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus), .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover, .theme-dark .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus), .theme-dark .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover {\n                color: rgba(0, 0, 0, 0.9); }\n              /* line 59, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover, .theme-dark .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover {\n                background: transparent; }\n              /* line 63, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:active, .theme-dark .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:active {\n                color: rgba(0, 0, 0, 0.8); }\n              /* line 67, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action[aria-disabled=\"true\"], .theme-dark .theme-light .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action[aria-disabled=\"true\"] {\n                background: transparent;\n                color: #999999; }\n            /* line 73, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n            .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action, .theme-light .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action {\n              color: #FFF;\n              background: transparent;\n              border-color: transparent; }\n              /* line 78, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus), .theme-light .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus) {\n                background: rgba(255, 255, 255, 0.1) content-box; }\n              /* line 82, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus), .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover, .theme-light .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:focus:not(.x-hidden-focus), .theme-light .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover {\n                color: #e6e6e6; }\n              /* line 89, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover, .theme-light .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:hover {\n                background: transparent; }\n              /* line 93, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:active, .theme-light .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action:active {\n                color: #cccccc; }\n              /* line 97, E:/agent_work/317/s/core/styles/utilities/components/_call_to_action.scss */\n              .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action[aria-disabled=\"true\"], .theme-light .theme-dark .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action[aria-disabled=\"true\"] {\n                background: transparent;\n                color: #666666; }\n            @media only screen and (max-width: 539px) {\n              /* line 69, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n              .m-immersive-hero-item > div > div .c-group > .c-call-to-action + .c-call-to-action {\n                padding: 10px 43px 7px; } }\n    /* line 81, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n    .m-immersive-hero-item > div > picture.c-image {\n      margin: 0 auto; }\n      /* line 84, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > picture.c-image img {\n        opacity: 0;\n        animation: fadeIn ease-in 1;\n        animation-fill-mode: forwards;\n        animation-duration: 1s;\n        animation-delay: 600ms;\n        max-width: none;\n        display: block;\n        margin: 0 auto;\n        width: auto;\n        height: 0; }\n    @media only screen and (min-width: 540px) {\n      /* line 95, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div {\n        padding-left: 24px;\n        padding-right: 24px;\n        max-width: 80%; } }\n    @media only screen and (min-width: 768px) {\n      /* line 102, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div {\n        max-width: 60%; }\n      /* line 108, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > picture.c-image + div .c-heading {\n        padding-top: 24px; } }\n    @media only screen and (min-width: 1084px) {\n      /* line 117, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > picture.c-image img {\n        max-width: 100%; } }\n    @media only screen and (min-width: 1400px) {\n      /* line 124, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div {\n        max-width: 50%; }\n        /* line 127, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n        .m-immersive-hero-item > div > div .c-heading {\n          font-size: 46px;\n          line-height: 56px;\n          padding: 37px 0 3px;\n          font-weight: 100;\n          letter-spacing: -0.01em;\n          font-weight: 700; }\n        /* line 132, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n        .m-immersive-hero-item > div > div .c-subheading {\n          font-size: 24px;\n          line-height: 28px;\n          padding: 4px 0 8px;\n          font-weight: 200; } }\n    @media only screen and (min-width: 1779px) {\n      /* line 140, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div .c-heading {\n        font-size: 62px;\n        line-height: 72px;\n        padding: 38px 0 6px;\n        font-weight: 100;\n        letter-spacing: -0.01em; }\n      /* line 144, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item > div > div .c-subheading {\n        font-size: 34px;\n        line-height: 40px;\n        padding: 12px 0 2px;\n        font-weight: 100;\n        padding-top: 8px; } }\n  /* line 154, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item.f-align-top > div, .m-immersive-hero-item.f-align-bottom > div {\n    top: 72px; }\n    @media only screen and (min-width: 768px) {\n      /* line 154, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item.f-align-top > div, .m-immersive-hero-item.f-align-bottom > div {\n        top: 120px; } }\n    @media only screen and (min-width: 1084px) {\n      /* line 154, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n      .m-immersive-hero-item.f-align-top > div, .m-immersive-hero-item.f-align-bottom > div {\n        top: 148px; } }\n  /* line 168, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item.f-align-top > div {\n    top: 0;\n    bottom: 0; }\n    /* line 172, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n    .m-immersive-hero-item.f-align-top > div > div {\n      position: absolute;\n      top: 72px;\n      left: 50%;\n      -ms-transform: translateX(-50%);\n          transform: translateX(-50%);\n      width: 100%; }\n      @media only screen and (min-width: 768px) {\n        /* line 172, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n        .m-immersive-hero-item.f-align-top > div > div {\n          top: 120px; } }\n      @media only screen and (min-width: 1084px) {\n        /* line 172, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n        .m-immersive-hero-item.f-align-top > div > div {\n          top: 148px; } }\n    /* line 189, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n    .m-immersive-hero-item.f-align-top > div > picture.c-image img {\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      -ms-transform: translateX(-50%);\n          transform: translateX(-50%); }\n  /* line 200, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item.f-align-bottom > div {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center; }\n    /* line 205, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n    .m-immersive-hero-item.f-align-bottom > div > picture.c-image {\n      margin: 0; }\n  /* line 213, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .no-js .m-immersive-hero-item > div picture.c-image {\n    display: none; }\n  /* line 222, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item.theme-dark .c-group > a.c-call-to-action + a.c-call-to-action {\n    color: #FFF; }\n    /* line 225, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n    .m-immersive-hero-item.theme-dark .c-group > a.c-call-to-action + a.c-call-to-action:focus:not(.x-hidden-focus) {\n      color: #FFF;\n      background: rgba(255, 255, 255, 0.1) content-box; }\n  /* line 237, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n  .m-immersive-hero-item.theme-light .c-group > a.c-call-to-action + a.c-call-to-action {\n    color: #000; }\n    /* line 240, E:/agent_work/317/s/core/templates/modules/immersive-hero-item/styles/_immersive_hero_item.scss */\n    .m-immersive-hero-item.theme-light .c-group > a.c-call-to-action + a.c-call-to-action:focus:not(.x-hidden-focus) {\n      color: #000;\n      background: rgba(0, 0, 0, 0.1) content-box; }\n\n\n/* CSS Corrections */\n.m-immersive-hero-item .exp-hidden{\n  visibility: hidden;\n}\n.m-immersive-hero-item .exp-findinstore{\n \tbackground: rgba(0,0,0,.2) !important;\n  border: solid 1px transparent !important;\n}\n.m-immersive-hero-item .exp-findinstore:hover,\n.m-immersive-hero-item .exp-findinstore:active{\n background: rgba(0,0,0,.3) !important;\n}\n\n.m-immersive-hero-item .exp-configure{\n\tbackground: #0067b8 !important;\n}\n.m-immersive-hero-item .exp-configure:hover,\n.m-immersive-hero-item .exp-configure:active{\n\tbackground: #005293 !important;\n}\n.m-immersive-hero-item h1.c-heading{\n  font-size: 24px !important;\n  font-weight: bold !important;\n  line-height: 24px !important;\n}\n.m-immersive-hero-item p.c-subheading{\n  font-size: 22px !important;\n    line-height: 22px !important;\n    padding-top: 0 !important;\n    max-width: 300px !important;\n    margin-bottom: 10px !important;\n}\n#purchaseRegion{\n display: none !important; \n}\n\n\n\n\n\n@media only screen and (min-width: 956px){\n  .m-product-detail-hero-carousel{\n    width: 63%;\n  }\n  .m-product-detail-hero-product-placement{\n    width: 37%;\n  }\n}\n@media only screen and (min-width: 768px){\n  .m-product-detail-hero .m-product-detail-hero-carousel{\n\t\tfloat: right;\n\t}\n  .m-product-detail-hero-carousel{\n    float: right;\n  }\n  .c-carousel li>picture.c-image img{\n   width: 100% !important; \n   background-color: #fff !important; \n  }\n  .c-carousel li>picture.c-image img[src*=\"1x1clear.gif\"]{\n    width: auto !important;\n  }  \n}\n.m-product-detail-hero-product-placement .cli_skuSelector{\n\tdisplay: none !important; \n}\n.m-product-detail-hero-product-placement.exp_norollup .cli_skuSelector{\n\tdisplay: block !important; \n}\n.c-select-menu > .exp-c-select-button{\n\ttransform: initial;\n  margin-left: 0 !important;\n}\n.c-select-menu > .exp-c-select-button span{\n display: none; \n}\n.c-select.exp-c-select:after{\n\tdisplay: none !important;\t\n}\n.c-select-menu > .exp-c-select-button:after{\n \tpadding-top: 0 !important;\n  top: 16px; \n}\n.c-select-menu.f-border [aria-expanded]:hover{\n\tborder: 1px solid rgba(0,0,0,.8);\n}\n.c-select-menu .c-menu{\n \twidth: inherit;\n  min-width: 296px;\n}\n.c-select-menu .c-menu li span{\n white-space: nowrap; \n}\n.m-product-detail-hero-product-placement > .c-heading-5,\n.m-product-detail-hero-product-placement > .cli_short-description{\n\tdisplay: none !important;\n}\n.m-product-detail-hero-product-placement .store-offer-image{\n width: 50%; \n}\n.m-product-detail-hero-product-placement .store-offer-image + div{\n width: 50% !important;\n  float: left !important;\n}\n.m-product-detail-hero .m-product-detail-hero-carousel{\n\tdisplay: block !important;\n}\n.m-product-detail-hero .m-product-detail-hero-product-placement .c-carousel{\n\tdisplay: none !important;\n}\n@media only screen and (max-width: 768px){\n\t.m-product-detail-hero-carousel,\n\t.m-product-detail-hero-product-placement{\n\t\twidth: 100% !important;\n\t\tfloat: none !important;\n\t}\t\n}\n@media only screen and (max-width: 1083px) and (min-width: 768px){\n\t.m-product-detail-hero .m-product-detail-hero-carousel{\n\t\tmargin-top: 0 !important;\n\t}\t\n}\n\n/* Fade in for sticky bar */\n@-webkit-keyframes expFadeIn {\n  0%   { opacity: 0; }\n  100% { opacity: 1; }\n}\n@-moz-keyframes expFadeIn {\n  0%   { opacity: 0; }\n  100% { opacity: 1; }\n}\n@-o-keyframes expFadeIn {\n  0%   { opacity: 0; }\n  100% { opacity: 1; }\n}\n@keyframes expFadeIn {\n  0%   { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n.exp-clearfloat{\n clear: both; \n}\n.m-immersive-hero-item.f-align-bottom > div{\n top: 75px; \n}\n.m-immersive-hero-item .exp-price.c-subheading{\n  font-size: 18px !important; \n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "2B047305-E45D-445A-8CEF-FB106DCC9DC3"}]}, {"viewId": "8637413135", "changes": [{"dependencies": [], "type": "custom_code", "id": "21CBB361-26DF-45A1-8484-645526509E6D", "value": function($){var addCssFile = function(file){
	var head = document.getElementsByTagName('head')[0], 
		stylesheet = document.createElement('link');

		stylesheet.type = 'text/css';
		stylesheet.rel = 'stylesheet';
		stylesheet.href = file;

		head.appendChild(stylesheet);
};

addCssFile('//statics-onestore-eus-ms-com.akamaized.net/west-european/store/_scrf/css/themes=store-web-default.device=uplevel_web_pc_webkit_chrome/a1-377e40/99-08b2bc/ef-2ed113/b5-dcc9d1/2c-557c86/aa-5d2157/33-542bbe/f7-eb8c6a/6c-d0e0d3/7a-882889/ab-d4792e/da-5468e7?ver=2.0');
addCssFile('https://statics-onestore-eus-ms-com.akamaized.net/west-european/store/_scrf/css/themes=store-web-default.device=uplevel_web_pc_webkit_chrome/a1-377e40/99-08b2bc/ef-2ed113/b5-dcc9d1/2c-557c86/aa-5d2157/33-542bbe/f7-eb8c6a/6c-d0e0d3/7a-882889/ab-d4792e/da-5468e7?ver=2.0');

/* _pageBITags object doesn't exist, so need to check QS */
var productId = null;
if(window.location.pathname.toUpperCase().indexOf('/8TXJ08Q9LXDT') !== -1){
	productId = '8TXJ08Q9LXDT';
} else if(window.location.pathname.toUpperCase().indexOf('/8NKT9WTTRBJK') !== -1){
	productId = '8NKT9WTTRBJK';
}



var checkInventoryStatus = function(obj, callback){  
	var pid = (obj.pid ? obj.pid : null), 
		sku = (obj.sid ? obj.sid : null), 
		distributorid = (obj.did ? obj.did : null), 
		availabilityid = (obj.aid ? obj.aid : null),
		pathNameArray = window.location.pathname.split('/').filter(Boolean),
		locale = (pathNameArray && pathNameArray.length ? pathNameArray[0].split('-') : null),
		countryRegion = (locale && locale.length ? locale[1] : null);
	
	try {
		$.ajax({
		  type: "POST",
		  url: 'https://inv.mp.microsoft.com/v2.0/inventory/' + countryRegion + '?mode=continueOnError',
		  data: JSON.stringify([{
			productId: pid, 
			skuId: sku, 
			availabilityid: availabilityid, 
			distributorid: distributorid
		  }]),
		success: function(data){
			(callback ? callback(data) : '');
		},
		  dataType: 'json',
		  contentType: 'application/json'
		}); 
	} catch (e) {
		//Error
	}
};

// VARS
var utility = {
		object : {
			find : function(obj, prop) {
				//Prop must be child of passed obj
				var testObj = (typeof(obj) == 'string' ? JSON.parse(obj) : obj);
				
				var iterate = function(obj, prop){
					var nested = prop.indexOf('.');	
					
					if(!obj){
						return null;
					}
					
					if(nested != -1){
						return iterate(obj[prop.substring(0, nested)], prop.substr(nested +1));
					}
					
					return obj[prop];
				};
			
				if(prop){
					return iterate(testObj, prop);
				} else {
					return testObj;
				}
			}
		}
};

var configuratorPathObj = {
	'processor' : '0',
	'memory' : '0',
	'storage' : '0'
};

var configuratorSelectedArray = [];
var skuChanged = false; 

var availabilityObj = {
	'8TXJ08Q9LXDT' : {
		'90L2' : {
			'aid' : '8W4NX0R3BFWZ',
			'title' : 'Microsoft Surface Book - 128GB / Intel Core i5'
		},
		'GXPZ' : {
			'aid' : '8W36C4K4N8ZB',
			'title' : 'Microsoft Surface Book - 256GB / Intel Core i5'
		},
		'04KS' : {
			'aid' : '8WCN1TNLKS7H',
			'title' : 'Microsoft Surface Book - 256GB / Intel Core i5'
		},
		'1ZDH' : {
			'aid' : '8WC93XWJR9F9',
			'title' : 'Microsoft Surface Book - 512GB / Intel Core i5'
		},
		'BW3T' : {
			'aid' : '8MK7ZN37QFN1',
			'title' : 'Microsoft Surface Book - 512GB / Intel Core i7'
		}
	},
	'8NKT9WTTRBJK' : {
		'H3CS' : {
			'aid' : '8WB2L3RX5RHT',
			'title' : 'Surface Pro - Intel Core m3 / 128GB SSD / 4GB RAM'
		},
		'LHL3' : {
			'aid' : '8WFW33T52MN8',
			'title' : 'Surface Pro - Intel Core i5 / 128GB SSD / 4GB RAM'
		},
		'1TSK' : {
			'aid' : '8W5RRMSJ0L7P',
			'title' : 'Surface Pro - Intel Core i5 / 256GB SSD / 8GB RAM'
		},
		'BV89' : {
			'aid' : '8WFCVL5RH1VN',
			'title' : 'Surface Pro - Intel Core i7 / 256GB SSD / 8GB RAM'
		},
		'L6FV' : {
			'aid' : '8W7VR9DD6NNV',
			'title' : 'Surface Pro - Intel Core i7 / 512GB SSD / 16GB RAM'
		},
		'C2HQ' : {
			'aid' : '8W1WNR6VNSLM',
			'title' : 'Surface Pro - Intel Core i7 / 1TB SSD / 16GB RAM'
		}
	}
	
};

var configuratorMapping = {
	'8TXJ08Q9LXDT' : {
		'processor' : [
			{
				'name' : 'Intel Core i5',
				'price' : '1499.00',
				'shortdesc' : '',
				'key' : 'Corei5',
				'sid' : '90L2',
				'options' : {
					'memory' : [
						{
							'name' : '8GB',
							'price' : '1499.00',
							'key' : '8GB',
							'sid' : '90L2',
							'options' : {
								'storage' : [
									{
										'name' : '128GB',
										'price' : '1499.00',
										'key' : '128GB',
										'sid' : '90L2'
									},
									{
										'name' : '256GB',
										'price' : '1699.00',
										'key' : '256GB',
										'sid' : 'GXPZ'
									},
									{
										'name' : '256GB / dGPU',
										'price' : '1899.00',
										'key' : '256GBdGPU',
										'sid' : '04KS'
									},
									{
										'name' : '512GB',
										'price' : '1999.00',
										'key' : '512GB',
										'sid' : '1ZDH'
									}
								
								]
							}
						}
					]
				
				}
			},
			{
				'name' : 'Intel Core i7',
				'price' : '2499.00',
				'shortdesc' : '',
				'key' : 'Corei7',
				'sid' : 'BW3T',			
				'options' : {
					'memory' : [
						{
							'name' : '16GB',
							'price' : '2499.00',
							'key' : '16GB',
							'sid' : 'BW3T',
							'options' : {
								'storage' : [
									{
										'name' : '512GB',
										'price' : '2499.00',
										'key' : '512GB',
										'sid' : 'BW3T'
									}
								]
							}
						}
					]
				}
			}
		]
	},
	'8NKT9WTTRBJK' : {
		'processor' : [
			{
				'name' : 'Intel Core m3',
				'price' : '799.00',
				'shortdesc' : '',
				'key' : 'Corem3',
				'sid' : 'H3CS',			
				'options' : {
					'memory' : [
						{
							'name' : '4GB',
							'price' : '799.00',
							'key' : '4GB',
							'sid' : 'H3CS',
							'options' : {
								'storage' : [
									{
										'name' : '128GB',
										'price' : '799.00',
										'key' : '128GB',
										'sid' : 'H3CS'
									}
								]
							}
						}
					]
				}
			},
			{
				'name' : 'Intel Core i5',
				'price' : '999.00',
				'shortdesc' : '',
				'key' : 'Corei5',
				'sid' : 'LHL3',
				'options' : {
					'memory' : [
						{
							'name' : '4GB',
							'price' : '999.00',
							'key' : '4GB',
							'sid' : 'LHL3',
							'options' : {
								'storage' : [
									{
										'name' : '128GB',
										'price' : '999.00',
										'key' : '128GB',
										'sid' : 'LHL3'
									}								
								]
							}
						},
						{
							'name' : '8GB',
							'price' : '1299.00',
							'key' : '8GB',
							'sid' : '1TSK',
							'options' : {
								'storage' : [
									{
										'name' : '256GB',
										'price' : '1299.00',
										'key' : '256GB',
										'sid' : '1TSK'
									}								
								]
							}
						}
					]
				
				}
			},
			{
				'name' : 'Intel Core i7',
				'price' : '1599.00',
				'shortdesc' : '',
				'key' : 'Corei7',
				'sid' : 'BV89',			
				'options' : {
					'memory' : [
						{
							'name' : '8GB',
							'price' : '1599.00',
							'key' : '8GB',
							'sid' : 'BV89',
							'options' : {
								'storage' : [
									{
										'name' : '256GB',
										'price' : '1599.00',
										'key' : '256GB',
										'sid' : 'BV89'
									}
								]
							}
						},
						{
							'name' : '16GB',
							'price' : '2199.00',
							'key' : '16GB',
							'sid' : 'L6FV',
							'options' : {
								'storage' : [
									{
										'name' : '512GB',
										'price' : '2199.00',
										'key' : '512GB',
										'sid' : 'L6FV'
									},
									{
										'name' : '1TB',
										'price' : '2699.00',
										'key' : '1TB',
										'sid' : 'C2HQ'
									}
								]
							}
						}
					]
				}
			}
		]
	}	
};



var reviewBar = ['<div data-grid="col-12" class="m-page-bar m-bundle-review" data-js-page-bar-target="in-page" data-cc="" id="in-page">',
					'<div data-grid="col-8">',
						'<div>',
							'<div class="context-menu hide-pagebarsummary">',
								'<div class="bundle-review-summary" data-grid="col-12">',
									'<div>',
										'<h4 class="c-heading-4 x-hidden-focus">Configure your device</h4>',
									'</div>',
									'<div class="c-subheading-5">Choose from the options below.</div>',
								'</div>',
								   '<div class="add-info-container" data-grid="col-12">',
									'<span class="additionalinfo c-paragraph-4" style="display: inline;">Microsoft Surface Pro 4 - 128GB / Intel Core i5</span></div>',
							'</div>',
							'<div class="c1-price-container price-container x-hidden-vp4 x-hidden-vp5 x-hidden-vp6">',
								'<div>',
									'<div class="c-price ">',
									'<div class="c-price">',
											'<div class="price-text srv_price">',
												'<span>$999.00</span>',
											'</div>',
										'<div class="srv_microdata" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">',
											'<meta itemprop="price" content="999">',
											'<meta itemprop="priceCurrency" content="USD">',
										'</div>',
									'</div>',
								'</div>',
									'<div class="c-caption-1 cli_promiseDate x-hidden">',
										'<p class="cli_promiseRelease release-date">',
											'Release date:',
											'<span class="cli_promiseReleaseDate"></span>',
										'</p>',
									'</div>',
								'</div>',
								'<div class="checkout-button">',
									'<button class="c-button c1-bundle-review" type="submit">Add to cart</button>',
								'</div>',
							'</div>',
						'</div>',
					'</div>',
					'<div class="price-container full-price-container x-hidden-vp1 x-hidden-vp2 x-hidden-vp3" data-grid="col-4">',
						'<div>',
							'<div class="c-price f-lean">',
								 '<div class="c-price">',
										'<div class="price-text srv_price">',
											'<span>$999.00</span>',
										'</div>',
									'<div class="srv_microdata" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">',
										'<meta itemprop="price" content="999">',
										'<meta itemprop="priceCurrency" content="USD">',
									'</div>',
								'</div>',
								'</div>',
							'<div class="c-caption-1 cli_promiseDate x-hidden">',
								'<p class="cli_promiseRelease release-date">',
									'Release date:',
									'<span class="cli_promiseReleaseDate"></span>',
								'</p>',
							'</div>',
						'</div>',
						'<div class="checkout-button">',
							'<button class="c-button review-button-margin-top" type="submit">Add to cart</button>',
						'</div>',
					'</div>',
				'</div>'].join('');

var prodCarousel_SurfaceBook = ['<div class="m-product-detail-hero-carousel" data-grid="col-12""><div class="c-carousel f-multi-slide f-scrollable-previous f-scrollable-next cli_skuMediaBrowser" data-sku-id="90L2" role="region" aria-label="Product images" style="touch-action: pan-y; -webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">',
        '<div class="c-sequence-indicator" role="radiogroup" aria-hidden="false">',
            '<button role="radio" aria-checked="true" aria-label="View Image 0" aria-controls="hero-slide-0" title="Image 0" tabindex="0" class="f-active"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 1" aria-controls="hero-slide-1" title="Image 1" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 2" aria-controls="hero-slide-2" title="Image 2" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 3" aria-controls="hero-slide-3" title="Image 3" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 4" aria-controls="hero-slide-4" title="Image 4" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 5" aria-controls="hero-slide-5" title="Image 5" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 6" aria-controls="hero-slide-6" title="Image 6" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 7" aria-controls="hero-slide-7" title="Image 7" tabindex="-1"></button>',
            '<button role="radio" aria-checked="false" aria-label="View Image 8" aria-controls="hero-slide-8" title="Image 8" tabindex="-1"></button>',
        '</div>',
        '<button data-m="{&quot;cN&quot;:&quot;PreviousSlide&quot;,&quot;id&quot;:&quot;nn10c1c2c1m1r1a2&quot;,&quot;sN&quot;:10,&quot;aN&quot;:&quot;c1c2c1m1r1a2&quot;}" class="c-flipper f-previous" aria-label="View previous" title="View previous" tabindex="-1"></button>',
        '<button data-m="{&quot;cN&quot;:&quot;NextSlide&quot;,&quot;id&quot;:&quot;nn11c1c2c1m1r1a2&quot;,&quot;sN&quot;:11,&quot;aN&quot;:&quot;c1c2c1m1r1a2&quot;}" class="c-flipper f-next" aria-label="View next" title="View next" tabindex="-1"></button>',
    '<div>',
        '<ul class="c-group">',
                '<li id="hero-slide-0" data-f-theme="" class="f-active">',
                    '<picture class="c-image">',
						'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)"><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)"><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)"><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)"><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)"><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyloaded x-hidden-focus" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hta7?ver=d80d&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-1" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXY?ver=3557&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-2" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hAXX?ver=fc3f&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-3" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKZ?ver=5802&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-4" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hiKX?ver=f11c&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-5" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hvLp?ver=bcda&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-6" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hlml?ver=6f40&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-7" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hqyP?ver=1b9b&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
                '<li id="hero-slide-8" data-f-theme="">',
                    '<picture class="c-image">',
						'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Microsoft Surface Book - 128GB / Intel Core i5" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1hymN?ver=dc61&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
                    '</picture>',
                '</li>',
        '</ul>',
    '</div>',
'</div></div>'].join('');

var prodCarousel_SurfacePro = ['<div class="m-product-detail-hero-carousel" data-grid="col-12""><div class="c-carousel f-multi-slide f-scrollable-previous f-scrollable-next cli_skuMediaBrowser" data-sku-id="90L2" role="region" aria-label="Product images" style="touch-action: pan-y; -webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">',
												'<div class="c-sequence-indicator" role="radiogroup" aria-hidden="false">',
													'<button role="radio" aria-checked="true" aria-label="View Image 0" aria-controls="hero-slide-0" title="Image 0" tabindex="0" class="f-active"></button>',
													'<button role="radio" aria-checked="false" aria-label="View Image 1" aria-controls="hero-slide-1" title="Image 1" tabindex="-1"></button>',
													'<button role="radio" aria-checked="false" aria-label="View Image 2" aria-controls="hero-slide-2" title="Image 2" tabindex="-1"></button>',
													'<button role="radio" aria-checked="false" aria-label="View Image 3" aria-controls="hero-slide-3" title="Image 3" tabindex="-1"></button>',
												'</div>',
												'<button data-m="{&quot;cN&quot;:&quot;PreviousSlide&quot;,&quot;id&quot;:&quot;nn10c1c2c1m1r1a2&quot;,&quot;sN&quot;:10,&quot;aN&quot;:&quot;c1c2c1m1r1a2&quot;}" class="c-flipper f-previous" aria-label="View previous" title="View previous" tabindex="-1"></button>',
												'<button data-m="{&quot;cN&quot;:&quot;NextSlide&quot;,&quot;id&quot;:&quot;nn11c1c2c1m1r1a2&quot;,&quot;sN&quot;:11,&quot;aN&quot;:&quot;c1c2c1m1r1a2&quot;}" class="c-flipper f-next" aria-label="View next" title="View next" tabindex="-1"></button>',
											'<div>',
											'<ul class="c-group">',
												'<li id="hero-slide-0" data-f-theme="" class="f-active">',
													'<picture class="c-image">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)">',
														'<source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class=" lazyloaded" alt="Surface Pro" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Li9?ver=7528&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
													'</picture>',
												'</li>',
												'<li id="hero-slide-1" data-f-theme="">',
													'<picture class="c-image">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Surface Pro" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7Yit?ver=7ba1&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
													'</picture>',
												'</li>',
												'<li id="hero-slide-2" data-f-theme="">',
													'<picture class="c-image">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Surface Pro" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW80TR?ver=0715&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
													'</picture>',
												'</li>',
												'<li id="hero-slide-3" data-f-theme="">',
													'<picture class="c-image">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(max-width:539px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:540px) and (max-width:767px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=248&amp;w=441&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:768px) and (max-width:1083px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1084px) and (max-width:1399px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=327&amp;w=582&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" media="(min-width:1400px) and (max-width:1778px)" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
														'<source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f"><img class="lazyload" alt="Surface Pro" src="//statics-onestore-eus-ms-com.akamaized.net/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW7VKu?ver=6d92&amp;q=60&amp;m=6&amp;h=423&amp;w=752&amp;b=%23FFFFFFFF&amp;o=f">',
													'</picture>',
												'</li>',
											'</ul>',
										'</div>',
									'</div></div>'].join('');

var configHtml_SurfaceBook = ['<div id="ProductConfigurator">',
    '<div data-grid="container" class="configroot" data-id="8TXJ08Q9LXDT" data-culture="en-US" data-market="US" data-aurl="https://inv.mp.microsoft.com/v2.0/inventory/US?MS-CorrelationId=adeb77ec-849a-47cd-aae8-cafe832dbdde&amp;MS-RequestId=adeb77ec-849a-47cd-aae8-cafe832dbdde&amp;mode=continueOnError">',
        '<div class="" data-grid="col-4">',
						prodCarousel_SurfaceBook,
        '</div>',
      '<div class="m-configdata" data-grid="col-8">',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Processor</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_0" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_0" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">You can upgrade the processor to an Intel Core i5 for stronger performance, or an Intel Core i7 for the highest performance. The Intel Core i7 option includes Intel Iris graphics, making your photo, video, and 3D applications run faster. It also gives you the ability to play more PC games.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Processor" data-rh="RichText" role="group" aria-labelledby="Processor_Label" id="processor-row">',
                  '<button class="c-select-button" name="Processor" data-key="Corei5" aria-pressed="true" data-js-selected-text="Intel Core i5 has been selected">',
                  '<h6 class="c-heading-6 x-type-left">Intel Core i5</h6>',
        '<p class="c-paragraph-6 short_desc x-type-left">Create and edit large databases or documents with Office. Make music with professional-grade apps. Do advanced photo editing with programs like Adobe Creative Cloud.</p>            </button>',
                  '<button class="c-select-button" name="Processor" data-key="Corei7" aria-pressed="false" data-js-selected-text="Intel Core i7 has been selected">',
                  '<h6 class="c-heading-6 x-type-left">Intel Core i7</h6>',
        '<p class="c-paragraph-6 short_desc x-type-left">Make professional HD video edits with programs like Adobe Premier Pro CC3. Run professional-grade apps like Visual Studio, or design and build 3D models with programs like AutoCAD. Run power-intensive software with ease.</p>            </button>',
              '</div>',
          '</div>',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Memory</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_1" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_1" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">If you’re interested in performing more intensive tasks, it’s important to upgrade your memory now so you are prepared. 16GB allows your device to run more apps at the same time, edit high-resolution photos/videos with amazing smoothness, and develop applications more easily.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Memory" data-rh="RichText" role="group" aria-labelledby="Memory_Label" id="memory-row">',
			  '<button class="c-select-button" name="Memory" data-key="8GB" aria-pressed="false" data-js-selected-text="8GB has been selected">',
                  '<h6 class="c-heading-6 x-type-left">8GB</h6>',
              '</button>',
                  '<button class="c-select-button" name="Memory" data-key="16GB" aria-pressed="false" data-js-selected-text="16GB has been selected">',
                  '<h6 class="c-heading-6 x-type-left">16GB</h6>',
              '</button>',
              '</div>',
          '</div>',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Storage</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_2" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_2" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">If you think you might want room for more applications, documents, and music, you should consider upgrading to at least 256GB of storage. If you plan to store a lot of high-resolution photos/videos or play the latest PC games, consider choosing 512GB or 1TB for the most flexibility.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Storage" data-rh="RichText" role="group" aria-labelledby="Storage_Label" id="storage-row">',
                  '<button class="c-select-button" name="Storage" data-key="128GB" data-def="true">',
                  '<h6 class="c-heading-6 x-type-left">128GB</h6>',
              '</button>',
                  '<button class="c-select-button" name="Storage" data-key="256GB" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">256GB</h6>',
              '</button>',
			  '<button class="c-select-button" name="Storage" data-key="256GBdGPU" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">256GB / dGPU</h6>',
              '</button>',
                  '<button class="c-select-button" name="Storage" data-key="512GB" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">512GB</h6>',
              '</button>',
              '</div>',
          '</div>',
      '</div>',
'</div>',
'</div>'].join('');

var configHtml_SurfacePro = ['<div id="ProductConfigurator">',
    '<div data-grid="container" class="configroot" data-id="8NKT9WTTRBJK" data-culture="en-US" data-market="US" data-aurl="https://inv.mp.microsoft.com/v2.0/inventory/US?MS-CorrelationId=adeb77ec-849a-47cd-aae8-cafe832dbdde&amp;MS-RequestId=adeb77ec-849a-47cd-aae8-cafe832dbdde&amp;mode=continueOnError">',
        '<div class="" data-grid="col-4">',
						prodCarousel_SurfacePro,
        '</div>',
      '<div class="m-configdata" data-grid="col-8">',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Processor</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_0" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_0" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">You can upgrade the processor to an Intel Core i5 for stronger performance, or an Intel Core i7 for the highest performance. The Intel Core i7 option includes Intel Iris graphics, making your photo, video, and 3D applications run faster. It also gives you the ability to play more PC games.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Processor" data-rh="RichText" role="group" aria-labelledby="Processor_Label" id="processor-row">',
                  '<button class="c-select-button" name="Processor" data-key="Corem3" aria-pressed="true" data-js-selected-text="Intel Core m3 has been selected">',
                  '<h6 class="c-heading-6 x-type-left">Intel Core M</h6>',
        '<p class="c-paragraph-6 short_desc x-type-left">Runs desktop software just like a laptop. Draw and sketch on screen. Stream music and shows with iTunes and Netflix.</p>',
		'</button>',
				  '<button class="c-select-button" name="Processor" data-key="Corei5" aria-pressed="false" data-js-selected-text="Intel Core i5 has been selected">',
                  '<h6 class="c-heading-6 x-type-left">Intel Core i5</h6>',
        '<p class="c-paragraph-6 short_desc x-type-left">Create and edit large databases or documents with Office. Make music with professional-grade apps. Do advanced photo editing with programs like Adobe Creative Cloud.</p>            </button>',
                  '<button class="c-select-button" name="Processor" data-key="Corei7" aria-pressed="false" data-js-selected-text="Intel Core i7 has been selected">',
                  '<h6 class="c-heading-6 x-type-left">Intel Core i7</h6>',
        '<p class="c-paragraph-6 short_desc x-type-left">Make professional HD video edits with programs like Adobe Premier Pro CC3. Run professional-grade apps like Visual Studio, or design and build 3D models with programs like AutoCAD. Run power-intensive software with ease.</p>            </button>',
              '</div>',
          '</div>',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Memory</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_1" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_1" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">If you’re interested in performing more intensive tasks, it’s important to upgrade your memory now so you are prepared. 16GB allows your device to run more apps at the same time, edit high-resolution photos/videos with amazing smoothness, and develop applications more easily.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Memory" data-rh="RichText" role="group" aria-labelledby="Memory_Label" id="memory-row">',
			  '<button class="c-select-button" name="Memory" data-key="4GB" aria-pressed="false" data-js-selected-text="4GB has been selected">',
                  '<h6 class="c-heading-6 x-type-left">4GB</h6>',
              '</button>',
			  '<button class="c-select-button" name="Memory" data-key="8GB" aria-pressed="false" data-js-selected-text="8GB has been selected">',
                  '<h6 class="c-heading-6 x-type-left">8GB</h6>',
              '</button>',
                  '<button class="c-select-button" name="Memory" data-key="16GB" aria-pressed="false" data-js-selected-text="16GB has been selected">',
                  '<h6 class="c-heading-6 x-type-left">16GB</h6>',
              '</button>',
              '</div>',
          '</div>',
          '<div>',
              '<div class="c-group">',
                  '<h4 class="c-heading-4">',
                      '<span>Storage</span>',
                      '<button class="c-action-trigger c-glyph glyph-info tooltip_button " data-js-flyout="tooltip_bottom_2" type="button">',
                      '</button>',
                  '</h4>',
                  '<div class="c-flyout" id="tooltip_bottom_2" role="tooltip" aria-hidden="true" data-js-flyout-dismissible="true" data-js-flyout-placement="bottom">',
                      '<p class="c-paragraph">If you think you might want room for more applications, documents, and music, you should consider upgrading to at least 256GB of storage. If you plan to store a lot of high-resolution photos/videos or play the latest PC games, consider choosing 512GB or 1TB for the most flexibility.</p>',
                  '</div>',
              '</div>',
              '<div class="c-group configparent f-wrap-items" data-key="Storage" data-rh="RichText" role="group" aria-labelledby="Storage_Label" id="storage-row">',
                  '<button class="c-select-button" name="Storage" data-key="128GB" data-def="true">',
                  '<h6 class="c-heading-6 x-type-left">128GB</h6>',
              '</button>',
                  '<button class="c-select-button" name="Storage" data-key="256GB" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">256GB</h6>',
              '</button>',
                  '<button class="c-select-button" name="Storage" data-key="512GB" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">512GB</h6>',
              '</button>',
			  '<button class="c-select-button" name="Storage" data-key="1TB" aria-pressed="false" disabled="disabled">',
                  '<h6 class="c-heading-6 x-type-left">1TB</h6>',
              '</button>',
              '</div>',
          '</div>',
      '</div>',
'</div>',
'</div>'].join('');

var pageHTML = ['<section id="mainArea"><div id="mainProdPlace">',
           '<div id="SurfaceConfigurator">',     
            '<div>',
              reviewBar,
            '</div>',
            	(productId === '8TXJ08Q9LXDT' ? configHtml_SurfaceBook : configHtml_SurfacePro),
           '</div>',
           '</div>',
        '</section>'].join('');
			
var utils = window['optimizely'].get('utils');

utils.waitUntil(function() {
  if(window.jQuery) return true;
}).then(function() {
	var $ = window.jQuery;
  
  utils.waitForElement('#headerArea').then(function(){

	  //Utility Functions
	  var updateSummaryPanel = function(price, title, atcurl, invstatus){
			$('.m-bundle-review .srv_price span').html((price ? ('$' + price.replace(/[^,.0-9]/g,'')) : '$0.00'));
			
			$('.m-bundle-review .add-info-container .additionalinfo').html(title);
			
			if(invstatus){
				$('.m-bundle-review .checkout-button .c-button').removeAttr('disabled').text('Add to cart').attr('addtocarturl', atcurl).removeClass('disabled');	
			} else {
				$('.m-bundle-review .checkout-button .c-button').attr('disabled', 'disabled').text('Out of stock').addClass('disabled');
			}
			
	  };
	  
	  var stickyController = function(){
			var scrollAnchor = $('#mainProdPlace'),
				stickyBar = $('.m-page-bar'),
				componentOffset = 0,
				paddingOffset = 0;
			
			$(window).on('scroll', function(){
				componentOffset = scrollAnchor.offset().top;

				var scrollTop = $(window).scrollTop(),
					distance = (componentOffset - scrollTop);

				if(distance <= paddingOffset && !stickyBar.hasClass('f-sticky')){
				  stickyBar.addClass('f-sticky f-show');
				} else if(distance > paddingOffset && stickyBar.hasClass('f-sticky')){
				  stickyBar.removeClass('f-sticky f-show');
				}
			});	
	  };
	  
	  var updateRowPricing = function(target){
		  var selectedPrice = ($('.c-select-button[aria-pressed="true"]', target).length ? $('.c-select-button[aria-pressed="true"]', target).data('price') : $('.c-select-button:eq(0)', target).data('price')),
			  priceDiff = null;
		  
		  $('.c-select-button', target).each(function(){
				priceDiff = (parseFloat($(this).data('price')) - parseFloat(selectedPrice));
				
				$('.price-diff', this).html((priceDiff >= 0 ? '+' : '-') + ' $' + Math.abs(priceDiff).toFixed(2));
		  });
		  
	  };
	  
	  var resetOptions = function(){
		  $('#ProductConfigurator button.c-select-button').attr('disabled','disabled').attr('aria-pressed', 'false');
		  
		  $('#processor-row button.c-select-button').each(function(index){
			$(this).data('indexkey', index);
		  });
		  
		  $('#memory-row button.c-select-button').each(function(index){
			$(this).data('indexkey', index);
		  });
		  
		  $('#storage-row button.c-select-button').each(function(index){
			$(this).data('indexkey', index);
		  });
	  };
	  
	  //Inject new config layout
	  var processorRow = function(){
			var processorIndex = (configuratorPathObj.processor ? configuratorPathObj.processor : '0'),
				dataObj = utility.object.find(configuratorMapping[productId], 'processor'),
				htmlChunk = [],
				defaultPrice = null;
			
			if(!dataObj){		
				return false;
			}

			dataObj.map(function(value, index){
				if(!index){
					//Set default
					$('#processor-row button.c-select-button[data-key="' + value.key + '"]').attr('aria-pressed', 'true');
					
					var _thisPrice = value.price,
						_thisSid = value.sid,
						_thisPid = productId,
						_thisObj = availabilityObj[_thisPid],
						addToCartURL = '/en-us/store/buy?pid=' + _thisPid + '&sid=' + _thisSid + '&aid=' + _thisObj[_thisSid].aid,
						productTitle = _thisObj[_thisSid].title;
					
					checkInventoryStatus({
						'pid' : _thisPid,
						'sid' : _thisSid,
						'did' : '9000000013',
						'aid' : _thisObj[_thisSid].aid
					}, function(data){
						var invStatus = (data.inStock === "True" ? true : false);
						
						$('#processor-row button.c-select-button:eq(0)').data('instock', invStatus);
						updateSummaryPanel(_thisPrice, productTitle, addToCartURL, invStatus);
					});
				}
				
				$('#processor-row button.c-select-button[data-key="' + value.key + '"]').removeAttr('disabled').data('price', value.price).data('sid', value.sid);
			});
		};
		
		var memoryRow = function(){
			var processorIndex = (configuratorPathObj.processor ? configuratorPathObj.processor : '0'),
				memoryIndex = (configuratorPathObj.memory ? configuratorPathObj.memory : '0'),
				dataObj = utility.object.find(configuratorMapping[productId], 'processor.' + processorIndex + '.options.memory'),
				htmlChunk = [];
				
			if(!dataObj){
				return false;
			}
			
			//Reset options
			$('#memory-row button.c-select-button').attr('disabled','disabled');
			$('#memory-row button.c-select-button[aria-pressed="true"]').attr('aria-pressed', 'false');
			
			//Enable available options
			dataObj.map(function(value, index){
				if(!index){
					$('#memory-row button.c-select-button[data-key="' + value.key + '"]').attr('aria-pressed', 'true');
				}
				
				$('#memory-row button.c-select-button[data-key="' + value.key + '"]').removeAttr('disabled').data('price', value.price).data('sid', value.sid).data('indexkey', index);
			});
		};
		
		var storageRow = function(){
			var processorIndex = (configuratorPathObj.processor ? configuratorPathObj.processor : '0'),
				memoryIndex = (configuratorPathObj.memory ? configuratorPathObj.memory : '0'),
				dataObj = utility.object.find(configuratorMapping[productId], 'processor.' + processorIndex + '.options.memory.' + memoryIndex + '.options.storage'),
				htmlChunk = [];
			
			if(!dataObj){
				return false;
			}

			//Reset options
			$('#storage-row button.c-select-button').attr('disabled','disabled');
			$('#storage-row button.c-select-button[aria-pressed="true"]').attr('aria-pressed', 'false');
			
			//Enable available options			
			dataObj.map(function(value, index){
				if(!index){
					$('#storage-row button.c-select-button[data-key="' + value.key + '"]').attr('aria-pressed', 'true');
				}
				
				$('#storage-row button.c-select-button[data-key="' + value.key + '"]').removeAttr('disabled').data('price', value.price).data('sid', value.sid).data('indexkey', index);
			});
		};
				
		//Add configurator
		if(configuratorMapping[productId]){
			$('#headerArea').after(pageHTML).promise().done(function(){
				//Option reset
				resetOptions();
				
				//Processor Row
				processorRow();
				
				//Memory Row
				memoryRow();
				
				//Storage Row
				storageRow();
				
				//Sticky bar
				stickyController();
			});
		}
	
    
		$('body').on('click.exp-processor', '#processor-row .c-select-button', function(){
			if($(this).attr('aria-pressed') === 'true'){
				return false;
			}
      
	 	 //Flag for add to cart goal
      skuChanged = true;         
			
			var _this = $(this),
				_thisPrice = $(this).data('price'),
				_thisSid = $(this).data('sid'),
				_thisPid = productId,
				_thisObj = availabilityObj[_thisPid],
				addToCartURL = '/en-us/store/buy?pid=' + _thisPid + '&sid=' + _thisSid + '&aid=' + _thisObj[_thisSid].aid,
				productTitle = _thisObj[_thisSid].title;
			
			$('.c-select-button', $(this).closest('.configparent')).attr('aria-pressed', 'false');
			$(this).attr('aria-pressed', 'true');
			
			if($(this).data('instock') === undefined){
				checkInventoryStatus({
					'pid' : _thisPid,
					'sid' : _thisSid,
					'did' : '9000000013',
					'aid' : _thisObj[_thisSid].aid
				}, function(data){
					var invStatus = (data.inStock === "True" ? true : false);
					
					_this.data('instock', invStatus);
					updateSummaryPanel(_thisPrice, productTitle, addToCartURL, invStatus);
				});
			} else {
				updateSummaryPanel(_thisPrice, productTitle, addToCartURL, _this.data('instock'));
			}
			
			configuratorPathObj = {
				'processor' : $(this).data('indexkey')
			};
			
			//Memory Row
			memoryRow();
			
			//Storage Row
			storageRow();
		});
		
		$('body').on('click.exp-memory', '#memory-row .c-select-button', function(){
			if($(this).attr('aria-pressed') === 'true'){
				return false;
			}
			
	 	 //Flag for add to cart goal
      skuChanged = true;         
      
			var _this = $(this),
				_thisPrice = $(this).data('price'),
				_thisSid = $(this).data('sid'),
				_thisPid = productId,
				_thisObj = availabilityObj[_thisPid],
				addToCartURL = '/en-us/store/buy?pid=' + _thisPid + '&sid=' + _thisSid + '&aid=' + _thisObj[_thisSid].aid,
				productTitle = _thisObj[_thisSid].title;
			
			$('.c-select-button', $(this).closest('.configparent')).attr('aria-pressed', 'false');
			$(this).attr('aria-pressed', 'true');
			
			if($(this).data('instock') === undefined){
				checkInventoryStatus({
					'pid' : _thisPid,
					'sid' : _thisSid,
					'did' : '9000000013',
					'aid' : _thisObj[_thisSid].aid
				}, function(data){
					var invStatus = (data.inStock === "True" ? true : false);
					
					_this.data('instock', invStatus);
					updateSummaryPanel(_thisPrice, productTitle, addToCartURL, invStatus);
				});
			} else {
				updateSummaryPanel(_thisPrice, productTitle, addToCartURL, _this.data('instock'));
			}
		
			configuratorPathObj.memory = $(this).data('indexkey');
			configuratorPathObj.storage = '0';
			
			//Storage Row
			storageRow();
			
		});
		
		$('body').on('click.exp-storage', '#storage-row .c-select-button', function(){
			if($(this).attr('aria-pressed') === 'true'){
				return false;
			}
      
	 	 //Flag for add to cart goal
      skuChanged = true;      
			
			var _this = $(this),
				_thisPrice = $(this).data('price'),
				_thisSid = $(this).data('sid'),
				_thisPid = productId,
				_thisObj = availabilityObj[_thisPid],
				addToCartURL = '/en-us/store/buy?pid=' + _thisPid + '&sid=' + _thisSid + '&aid=' + _thisObj[_thisSid].aid,
				productTitle = _thisObj[_thisSid].title;
			
			$('.c-select-button', $(this).closest('.configparent')).attr('aria-pressed', 'false');
			$(this).attr('aria-pressed', 'true');
			
			if($(this).data('instock') === undefined){
				checkInventoryStatus({
					'pid' : _thisPid,
					'sid' : _thisSid,
					'did' : '9000000013',
					'aid' : _thisObj[_thisSid].aid
				}, function(data){
					var invStatus = (data.inStock === "True" ? true : false);
					
					_this.data('instock', invStatus);
					updateSummaryPanel(_thisPrice, productTitle, addToCartURL, invStatus);
				});
			} else {
				updateSummaryPanel(_thisPrice, productTitle, addToCartURL, _this.data('instock'));
			}
			
			configuratorPathObj.storage = $(this).data('indexkey');
			
		});
		
		//Trigger add to cart click
		$('body').on('click.exp-addtocart', '.m-bundle-review .checkout-button .c-button:not(.disabled)', function(){
      window['optimizely'].push({
        type: "event",
        eventName: "store_us_expControl_StickyBar_addedToCart"
      });
      
      if(!skuChanged){
        window['optimizely'].push({
          type: "event",
          eventName: "store_us_addtocart_defaultsku"
        });
      }
      
      //Page level Book & Pro Add to Cart Metric.
      window['optimizely'].push({
        type: "event",
        eventName: "7855979098_added_to_cart"
      });
      
			window.location = $(this).attr('addtocarturl');			
		});
		
		$('#ProductConfigurator').on('click.carousel-flippers', '.m-product-detail-hero-carousel .c-flipper', function(){
			var _parent = $(this).closest('.c-carousel'),
				_activeSlide = $('.c-group > li.f-active', _parent),
				_activeSequenceButton = $('.c-sequence-indicator > button[aria-checked="true"]', _parent);
			
			//Remove active states
			_activeSlide.removeClass('f-active f-animate-previous f-animate-next');
			_activeSequenceButton.attr('aria-checked', 'false').removeClass('f-active');
				
			if($(this).hasClass('f-previous')){
				//Select next slide
				if(!_activeSlide.index()){
					$('.c-group > li:last', _parent).addClass('f-active f-animate-previous');
					$('.c-sequence-indicator > button:last', _parent).attr('aria-checked', 'true').addClass('f-active');
				} else {
					_activeSlide.prev('li').addClass('f-active f-animate-previous');
					_activeSequenceButton.prev('button').attr('aria-checked', 'true').addClass('f-active');
				}
			} else {
				//Select next slide
				if((_activeSlide.index() == ($('.c-group > li', _parent).length -1))){
					$('.c-group > li:eq(0)', _parent).addClass('f-active f-animate-next');
					$('.c-sequence-indicator > button:eq(0)', _parent).attr('aria-checked', 'true').addClass('f-active');
				} else {
					_activeSlide.next('li').addClass('f-active f-animate-next');
					_activeSequenceButton.next('button').attr('aria-checked', 'true').addClass('f-active');
				}	
			}
		});
    
    // DECORATE DOM ELEMENTS
    utils.waitUntil(function() {
      return typeof awa != 'undefined' && awa.isInitialized === true;
    }).then(function() {
      try {
        var triggerDecoration = function(target){
          if(window.CustomEvent){
            event = new CustomEvent('decorate', {'bubbles': true });
          } else {
            event = document.createEvent('CustomEvent');
            event.initCustomEvent('decorate', true, true, { some: 'data' });
          }

          target.dispatchEvent(event);

          require(['jsll'], function(jsll) {
            jsll.ct.captureContentUpdate({ timings: { didDeferExecTimeout: window._pageTimings.didDeferExecTimeout } });
          });
        };
        triggerDecoration(document.getElementById('mainArea'));
      }catch(e) {
        console.log(e);
      }
    });

  });
});
}}, {"value": "<style>@media screen and (max-width: 540px){\n  .m-bundle-review .hide-pagebarsummary{\n    display: block !important; \n  }\n}\n@media screen and (max-width: 1084px){\n\t#ProductConfigurator .configroot > div[data-grid=\"col-4\"]{\n\t\twidth: 100% !important;\n\t}\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "18128E0E-96B7-459B-B5C5-EF9D106D3B62"}]}], "name": "No Tabs"}], "audienceIds": ["or", "8392932692"], "changes": null, "id": "8646990059", "integrationSettings": null}], "id": "8652210040", "weightDistributions": null, "name": "Immersive Hero (Surface Book & Pro) [13378998] - JustinW", "groupId": null, "commitId": "8759870015", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"dependencies": [], "type": "custom_code", "id": "4CE5B818-C6E0-4471-97B6-E3BD6B30ED4B", "value": function($){window['optimizely'] = window['optimizely'] || [];

/* Window Scrolled */
var windowScrolled = false;
jQuery(window).on('scroll', function(){
  if(!windowScrolled){
    windowScrolled = true;
    window['optimizely'].push({
      type: "event",
      eventName: "store_us_windowscrolled"
    });
  }
});
}}, {"value": "<style>#exp-optly-stickyBar {\n  margin-top: 50px;\n  height: 72px;\n  position: relative;\n}\n#exp-optly-stickyBar .c-pivot {\n  border-top: 1px solid #cacaca;\n  height: 72px;\n  text-align: center;\n  background-color: #fff;\n}\n#exp-optly-stickyBar.exp-stuck .c-pivot {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 100;\n  margin-top: 0;\n  padding: 0 48px;\n}\n#exp-optly-stickyBar .c-pivot > div[role=\"tablist\"] {\n  text-align: center;\n  display: inline-block;\n  padding: 18px 0;\n  height: 72px;\n  width: calc(100% - 457px);\n}\n#exp-optly-stickyBar .c-pivot .f-active {\n  border-bottom: 0 !important;\n  font-weight: bold;\n}\n#exp-optly-stickyBar .c-pivot > div > a {\n  padding: 0 23px;\n  font-size: 16px;\n}\n#exp-optly-stickyBar .c-pivot > div > a:first-child {\n  padding-left: 0;\n}\n#exp-optly-stickyBar .exp-skuinfo {\n  width: 200px;\n  float: left;\n  height: 72px;\n  text-align: left;\n  white-space: initial;\n  position: relative;\n  overflow: visible;\n  display: none;\n}\n#exp-optly-stickyBar.exp-stuck .exp-skuinfo {\n  display: inherit;\n}\n#exp-optly-stickyBar .exp-skuinfo-wrapper {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#exp-optly-stickyBar .exp-skuinfo h5 {\n  font-size: 1.2rem;\n}\n#exp-optly-stickyBar .exp-skuinfo p {\n  font-size: .75rem;\n  margin-top: 2px;\n}\n#exp-optly-stickyBar .exp-addtocart {\n  float: right;\n  width: 257px;\n  height: 72px;\n  display: none;\n  position: relative;\n}\n#exp-optly-stickyBar.exp-stuck .exp-addtocart {\n  display: inherit;\n}\n#exp-optly-stickyBar .exp-addtocart button {\n  height: 36px;\n  margin-top: 20px;\n  float: right;\n}\n#exp-optly-stickyBar .exp-addtocart-price {\n  text-align: right;\n  width: calc(100% - 192px);\n  margin-right: 10px;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#exp-optly-stickyBar .exp-addtocart-price s {\n  display: none;\n}\n#exp-optly-stickyBar .exp-addtocart-price s.has-discount {\n  display: block;\n}\n#exp-optly-stickyBar .exp-addtocart-price .out-of-stock {\n  display: none;\n}\n@media only screen and (max-width: 1400px) {\n  #exp-optly-stickyBar .c-pivot > div > a {\n    padding: 0 12px;\n  }\n}\n#exp-optly-stickyBar .exp-tabselector {\n  overflow: visible;\n  width: auto;\n  display: none;\n}\n@media only screen and (max-width: 1280px) {\n  #exp-optly-stickyBar .c-pivot div[role=\"tablist\"] {\n    display: none;\n  }\n  #exp-optly-stickyBar .exp-tabselector {\n    display: block;\n    position: absolute;\n    z-index: 2;\n    top: 0px;\n    left: 20px;\n  }\n  #exp-optly-stickyBar .exp-tabselector ul.c-menu {\n    bottom: inherit !important;\n    top: 100% !important;\n    left: 0 !important;\n  }\n}\n@media only screen and (max-width: 1280px) and (min-width: 651px) {\n  #exp-optly-stickyBar.exp-stuck .exp-tabselector {\n    margin-left: 230px;\n  }\n}\n@media only screen and (max-width: 750px) {\n  #exp-optly-stickyBar.exp-stuck .exp-skuinfo {\n    display: none;\n  }\n  #exp-optly-stickyBar.exp-stuck .exp-tabselector{\n   \tmargin-left: 0; \n  }\n}\n@media only screen and (max-width: 550px) {\n  #exp-optly-stickyBar.exp-stuck .exp-addtocart {\n    display: none;\n  }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "CA9E6334-2E61-4C79-AE2E-9F604EB05277"}]}, {"holdback": 0, "activation": {}, "integrationSettings": {"clicktale": {}}, "integrationStringVersion": 2, "viewIds": ["8498890748"], "experiments": [{"weightDistributions": [{"entityId": "8580471150", "endOfRange": 3333}, {"entityId": "8578731492", "endOfRange": 6666}, {"entityId": "8643010040", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "PDP Immersive Hero (Office) [13443389] - JustinW AdamG", "bucketingStrategy": null, "variations": [{"id": "8580471150", "actions": [{"viewId": "8498890748", "changes": [{"dependencies": [], "type": "custom_code", "id": "EDCC9461-2B71-466B-B2B6-3010D8AAD912", "value": function($){window.optimizely = window.optimizely || [];

var utils = window['optimizely'].get('utils');

//Utilities
var tabClassList = [];

var stickyBar = function(navigation){
	var origPrice = (_pageBITags.pageContracts.ProductInfo.rtPrice != _pageBITags.pageContracts.ProductInfo.lstPrice ? _pageBITags.pageContracts.ProductInfo.rtPrice : null),
		curPrice = (_pageBITags.pageContracts.ProductInfo.lstPrice ? _pageBITags.pageContracts.ProductInfo.lstPrice : null),
		key,
		tabList = [],
		tabDropdown = [],
		addToCartButtonWidth = $('.m-product-detail-hero .cli_pdp-buy-button').outerWidth(),
		addToCartAreaWidth = (addToCartButtonWidth + 75),
		addToCartButtonText = $('.m-product-detail-hero .cli_pdp-buy-button').text(),
    skuSelectorButtonsLen = $('.cli_sku-select-button').length;
	
	if(navigation){
		for(key in navigation){
      tabClassList.push(navigation[key].tabclass);
			tabList.push('<a class="' + (navigation[key].tabselected ? 'f-active' : '') + '" role="tab" tabindex="0" data-tabclass="' + (navigation[key].tabclass ? navigation[key].tabclass : '') + '">' + (navigation[key].tabname ? navigation[key].tabname : '') + '</a>');
			tabDropdown.push('<li class="c-menu-item" role="presentation"><span tabindex="-1" role="option" aria-selected="' + (navigation[key].tabselected ? 'true' : 'false') + '">' + navigation[key].tabname + '</span></li>');	
		}
	}
	
	return ['<div style="clear:both;"></div><section id="exp-optly-stickyBar" class="' + (origPrice ? 'has-discount' : '') + '">',
				  '<div class="c-pivot">',
					'<div class="exp-skuinfo">',
						'<div class="exp-skuinfo-wrapper">',
								'<h5>' + _pageBITags.pageContracts.ProductInfo.title + '</h5>',
							'<p style="' + (skuSelectorButtonsLen < 2 ? 'display:none' : '') + '">' +  $.trim(($('.cli_skuMenuItems').length ? $('.cli_skuMenuItems a[aria-selected="true"]').text() : $('.cli_skuSelector button.active').attr('data-button-title'))) + '</h5>',
						 '</div>',
					'</div>',           
					'<div role="tablist">',
						tabList.join('\n'),
					'</div>',
					'<div class="exp-tabselector c-select">',
					  '<div class="c-select-menu f-persist"><button aria-haspopup="true" aria-expanded="false" tabindex="0" class="x-hidden-focus">Overview</button>',
						  '<ul class="c-menu" aria-hidden="true" role="listbox" tabindex="0">',
							  tabDropdown.join('\n'),
						  '</ul>',
					  '</div>',
					'</div>',           
					'<div class="exp-addtocart">',
						 '<div class="exp-addtocart-price">',
							'<s class="' + (origPrice ? 'has-discount' : '') + '">$<span class="origprice">' + (origPrice ? origPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '') + '</span></s>',
							'<div class="' + (curPrice ? '' : 'out-of-stock') + '">$<span class="curprice">' + (curPrice ? curPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '') + '</span></div>',
						  '</div>',
						 '<button class="c-button cli_pdp-buy-button pdp-action-buttons" type="submit">' + addToCartButtonText + '</button>',           
					'</div>',
			  '</div></section>'].join('\n');
};

// Module HTML

/* Module Injection Template
	var domElements = {
		"8TXJ08Q9LXDT" : [
			{
				"module" : module1,
				"target" : "#exp-tabModule",
				"action" : "after"
			}
		]
		
	};
*/

//Start Module Injection Feed
var domElements = {};


//Optimizely Utilities
var utils = window['optimizely'].get('utils'),
		experimentId = '8508690085',
    productId = (_pageBITags && _pageBITags.pageContracts && _pageBITags.pageContracts.ProductInfo && _pageBITags.pageContracts.ProductInfo.id ? _pageBITags.pageContracts.ProductInfo.id.toLowerCase() : '');

utils.waitUntil(function() {
  if(window.jQuery) return true;
}).then(function() {
  var $ = window.jQuery;
   
  	

  	$('.context-configuration-buttons button.cli_sku-select-button').on('click', function() {
		window['optimizely'].push({
			type: "event",
			eventName: "store_us_product_changed"
		});
  	});
  
  
  
	$('html').addClass('exp-' + experimentId + ' ' + 'exp-product-' + productId);
  
  
	utils.waitForElement('#mainRegion').then(function(){
		utils.waitForElement('.cli_pdp-buy-button').then(function(){
			$('#mainArea').addClass('exp-overview-tab');
				  
			//if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5DM'){
				//$('html').addClass('exp-CFQ7TTC0K5DM');		
				
				var tabModule = stickyBar([
					{
						tabclass : 'exp-overview-tab',
						tabname : 'Overview',
						tabselected : true
					},
					{
						tabclass : 'exp-requirements-tab',
						tabname : 'Requirements'
					},
          {
						tabclass : 'exp-faq-tab',
						tabname : 'FAQ'
					},
					{
						tabclass : 'exp-reviews-tab',
						tabname : 'Reviews'
					}
				]);
			//}

			$('#mainRegion').prepend(tabModule).promise().done(function(){
				 var paddingOffset = 0,
					 component = $('#exp-optly-stickyBar'),
					 componentOffset = component.offset().top;
				
				//Sticky Controller
				$(window).on('scroll', function(){
					componentOffset = component.offset().top;

					var scrollTop = $(window).scrollTop(),
						distance = (componentOffset - scrollTop);

					if(distance <= paddingOffset && !component.hasClass('exp-stuck')){
					  component.addClass('exp-stuck');
					} else if(distance > paddingOffset && component.hasClass('exp-stuck')){
					  component.removeClass('exp-stuck');
					}
				});
				
				$(window).on('resize', function(){
					componentOffset = component.offset().top;
				});
				
				//Tab Controller
				$('#exp-optly-stickyBar a').on('click.toggleclass, keypress.toggleclass', function(e){
					if(e && e.type === 'keypress' && e.keyCode !== 13){
            return false;
          }
          
          componentOffset = component.offset().top;

					var componentClickOffset = 0;

					//Update tab class
					$('#exp-optly-stickyBar a').removeClass('f-active');
					$(this).addClass('f-active');

					//Update parent wrapper
					tabClassList.map(function(classname){
					  if($('#mainArea').hasClass(classname)){
						$('#mainArea').removeClass(classname);
					  }
					});
					
					$('#mainArea').addClass($(this).data('tabclass'));
				  
					if(window.innerWidth > 850){
						componentClickOffset = 30;
					} else {
						componentClickOffset = 10;
					}
          
          /* Update Mobile Nav */
          var activeElm = $('#exp-optly-stickyBar a[data-tabclass="' + $(this).data('tabclass') + '"]'),
              activeElmIndex = activeElm.index(),
              activeElmText = activeElm.text();

            $('#exp-optly-stickyBar .exp-tabselector span[aria-selected="true"]').attr('aria-selected', 'false');
            $('#exp-optly-stickyBar .exp-tabselector button').text(activeElmText);
            $('#exp-optly-stickyBar .exp-tabselector li:eq(' + activeElmIndex + ') span').attr('aria-selected', 'true');

					$('html, body').animate({scrollTop: (componentOffset + componentClickOffset) + 'px'}, 'slow');
				  
					window['optimizely'].push({
						type: "event",
						eventName: "store_us_pivot_clicks"
					});
				});
				
				$('#exp-optly-stickyBar .cli_pdp-buy-button').on('click.addtocart', function(){
					window['optimizely'].push({
					  type: "event",
					  eventName: "store_us_expControl_StickyBar_addedToCart"
					});

				   $('.m-product-detail-hero .cli_pdp-buy-button:visible').trigger('click');
				});
					
				//Update When Selected Vid Changes
				$('.m-product-detail-hero').on('click', '.cli_skuMenuItems a, .cli_skuSelector button', function(){
					var origPrice = $.trim($('.price-info .srv_saleprice').text()),
					  curPrice = $.trim($('.price-info .price-text span').text());

					$('.exp-skuinfo p').text( $.trim(($('.cli_skuMenuItems').length ? $('.cli_skuMenuItems a[aria-selected="true"]').text() : $('.cli_skuSelector button.active').attr('data-button-title'))));

					if(origPrice.length){
						$('.exp-addtocart-price s').addClass('has-discount');
					} else {
						$('.exp-addtocart-price s').removeClass('has-discount');
					}

					if(curPrice.length){
						$('.exp-addtocart-price > div').removeClass('out-of-stock');
					} else {
						$('.exp-addtocart-price > div').addClass('out-of-stock');
					}

					$('.exp-addtocart-price span.origprice').text(origPrice.replace(/[^,.0-9]/g,''));
					$('.exp-addtocart-price span.curprice').text(curPrice.replace(/[^,.0-9]/g,''));
				});
					
			});
			
			
			var elementsByProduct = domElements[(_pageBITags && _pageBITags.pageContracts && _pageBITags.pageContracts.ProductInfo ? _pageBITags.pageContracts.ProductInfo.id : '')];
				
			var insertModule = function(){
				if(elementsByProduct[0].action.toLowerCase() === 'prepend'){
					$(elementsByProduct[0].target).prepend(elementsByProduct[0].module);
				} else if(elementsByProduct[0].action.toLowerCase() === 'after'){
					$(elementsByProduct[0].target).after(elementsByProduct[0].module);
				} else if(elementsByProduct[0].action.toLowerCase() === 'before'){
					$(elementsByProduct[0].target).before(elementsByProduct[0].module);
				} else if(elementsByProduct[0].action.toLowerCase() === 'replacewith'){
					$(elementsByProduct[0].target).replaceWith(elementsByProduct[0].module);
				}	
				
				//Callback, if one exists
				if(elementsByProduct[0].callback){
					elementsByProduct[0].callback();
				}
				
				elementsByProduct.shift();
				
				if(elementsByProduct.length){
					insertModule();
				}
			};
			
			if(elementsByProduct && elementsByProduct.length){
				insertModule();
			}		  
      
      /* Mobile Click Events */
      $('body').on('click.exp_selectmenu_button', '.exp-tabselector button', function(){
        //$(this).attr('aria-expanded', 'true').next('ul').attr('aria-hidden', 'false');
      });

      $('body').on('click.exp_selectmenu_option', '.exp-tabselector .c-menu span', function(){
        var value = $(this).data('value'),
						index = $(this).closest('li').index(),
						selectedText = $.trim($(this).text());

        //Click hidden nav links
        $('#exp-optly-stickyBar div[role="tablist"] a:eq(' + index + ')').trigger('click');

        //Update custom list
        $('span[aria-selected="true"]').attr('aria-selected', 'false');
        $(this).attr('aria-selected', 'true');	

        //Update label & close dropdown
        $('button', $(this).closest('.c-select-menu')).text(selectedText).attr('aria-expanded', 'false').next('ul').attr('aria-hidden', 'true');
      });
      
      
      //Move Here To Help Module
      $('#HereToHelp').insertAfter('#IncludesStructuredListDualColumn');
      
      //Trigger click on review tab
      if(window.location.hash && window.location.hash.toLowerCase() === '#ratings-reviews'){
        $('#exp-optly-stickyBar a[data-tabclass="exp-reviews-tab"]').trigger('click');
      }

      $('body').on('click', '.m-product-detail-hero-product-placement .c-rating a', function(){
        $('#exp-optly-stickyBar a[data-tabclass="exp-reviews-tab"]').trigger('click');
      });
      
		});
	});	
  
  utils.waitForElement('#RatingReview').then(function(){
		setTimeout(function(){
			$('#mainArea').addClass('exp-reviews-loaded');
		}, 1500);

		setTimeout(function(){
			if(!$('#mainArea.exp-reviews-loaded').length){
			$('#mainArea').addClass('exp-reviews-loaded');
		  }
		}, 2500);
  }); 
});
}}, {"value": "<style>#mainRegion [id^=\"Feature\"],\n#mainRegion #IncludesStructuredListDualColumn,\n#mainRegion #RequirementsStructuredList,\n#mainRegion #HereToHelp,\n#mainRegion #FAQ,\n#mainRegion #Footnotes,\n#mainRegion .exp-optly-comparechart{\n\tdisplay: none;\n}\n#mainRegion #RatingReview{\n height: 0;\n overflow: hidden;\n width: 100%;\n}\n.exp-overview-tab #mainRegion [id^=\"Feature\"],\n.exp-overview-tab #mainRegion #IncludesStructuredListDualColumn,\n.exp-overview-tab #mainRegion #Footnotes,\n.exp-overview-tab #mainRegion #HereToHelp{\n\tdisplay: block;\n}\n.exp-requirements-tab #mainRegion #RequirementsStructuredList{\n\tdisplay: block;\n}\n.exp-faq-tab #mainRegion #FAQ{\n  display: block;\n}\n.exp-reviews-tab.exp-reviews-loaded #mainRegion #RatingReview{\n height: inherit;\n overflow: visible;\n}\n.exp-compare-tab #mainRegion .exp-optly-comparechart{\n  display: block;\n}\n#mainRegion #FAQ h3{\n \tfont-weight: bold; \n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "8E67DE1A-2D74-41CC-9029-048DDC3281CE"}]}], "name": "Original - Tabs"}, {"id": "8578731492", "actions": [{"viewId": "8498890748", "changes": [{"dependencies": [], "type": "custom_code", "id": "5B622735-9F85-4729-A22B-A0AB445D11F5", "value": function($){//Utilities
var tabClassList = [];

var stickyBar = function(navigation){
	var origPrice = (_pageBITags.pageContracts.ProductInfo.rtPrice != _pageBITags.pageContracts.ProductInfo.lstPrice ? _pageBITags.pageContracts.ProductInfo.rtPrice : null),
		curPrice = (_pageBITags.pageContracts.ProductInfo.lstPrice ? _pageBITags.pageContracts.ProductInfo.lstPrice : null),
		key,
		tabList = [],
		tabDropdown = [],
		addToCartButtonWidth = $('.m-product-detail-hero .cli_pdp-buy-button').outerWidth(),
		addToCartAreaWidth = (addToCartButtonWidth + 75),
		addToCartButtonText = $('.m-product-detail-hero .cli_pdp-buy-button').text(),
    skuSelectorButtonsLen = $('.cli_sku-select-button').length;
	
	if(navigation){
		for(key in navigation){
      tabClassList.push(navigation[key].tabclass);
			tabList.push('<a class="' + (navigation[key].tabselected ? 'f-active' : '') + '" role="tab" tabindex="0" data-tabclass="' + (navigation[key].tabclass ? navigation[key].tabclass : '') + '">' + (navigation[key].tabname ? navigation[key].tabname : '') + '</a>');
			tabDropdown.push('<li class="c-menu-item" role="presentation"><span tabindex="-1" role="option" aria-selected="' + (navigation[key].tabselected ? 'true' : 'false') + '">' + navigation[key].tabname + '</span></li>');	
		}
	}
	
	return ['<div style="clear:both;"></div><section id="exp-optly-stickyBar" class="' + (origPrice ? 'has-discount' : '') + '">',
				  '<div class="c-pivot">',
					'<div class="exp-skuinfo">',
						'<div class="exp-skuinfo-wrapper">',
								'<h5>' + _pageBITags.pageContracts.ProductInfo.title + '</h5>',
							'<p style="' + (skuSelectorButtonsLen < 2 ? 'display:none' : '') + '">' +  $.trim(($('.cli_skuMenuItems').length ? $('.cli_skuMenuItems a[aria-selected="true"]').text() : $('.cli_skuSelector button.active').attr('data-button-title'))) + '</p>',
						 '</div>',
					'</div>',           
					'<div role="tablist">',
						tabList.join('\n'),
					'</div>',
					'<div class="exp-tabselector c-select">',
					  '<div class="c-select-menu f-persist"><button aria-haspopup="true" aria-expanded="false" tabindex="0" class="x-hidden-focus">Overview</button>',
						  '<ul class="c-menu" aria-hidden="true" role="listbox" tabindex="0">',
							  tabDropdown.join('\n'),
						  '</ul>',
					  '</div>',
					'</div>',           
					'<div class="exp-addtocart">',
						 '<div class="exp-addtocart-price">',
							'<s class="' + (origPrice ? 'has-discount' : '') + '">$<span class="origprice">' + (origPrice ? origPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '') + '</span></s>',
							'<div class="' + (curPrice ? '' : 'out-of-stock') + '">$<span class="curprice">' + (curPrice ? curPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '') + '</span></div>',
						  '</div>',
						 '<button class="c-button cli_pdp-buy-button pdp-action-buttons" type="submit" data-m="{&quot;cN&quot;:&quot;StickyBuyAndDownloadButton&quot;}">' + addToCartButtonText + '</button>',           
					'</div>',
			  '</div></section>'].join('\n');
};


// Module HTML
/*
var heroImage = '';

	var domElements = {
		"CFQ7TTC0K5DM" : [
			{
				"module" : heroImage,
				"target" : "#BuyBox .m-product-detail-hero",
				"action" : "prepend"
			}
		]
		
	};
*/

var domElements = {};

//Optimizely Utilities
var utils = window['optimizely'].get('utils'),
		experimentId = '8576811236',
    productId = (_pageBITags && _pageBITags.pageContracts && _pageBITags.pageContracts.ProductInfo && _pageBITags.pageContracts.ProductInfo.id ? _pageBITags.pageContracts.ProductInfo.id.toLowerCase() : '');

utils.waitUntil(function() {
  if(window.jQuery) return true;
}).then(function() {
  var $ = window.jQuery;
  
	$('html').addClass('exp-' + experimentId + ' ' + 'exp-product-' + productId);
  
  
	utils.waitForElement('#mainRegion').then(function(){
		utils.waitForElement('.cli_pdp-buy-button').then(function(){
			$('#mainArea').addClass('exp-overview-tab');
      
	      //Clear float
	      $('#purchaseRegion').append('<div style="clear:both;"></div>');
					  
			//if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5DM'){
				//$('html').addClass('exp-CFQ7TTC0K5DM');		
				



			var officeDescription = $('.cli_short-description').text();
			var officeIconsAndDescription = ['<div id="Feature0" data-grid="col-12">',
			'<div class="exp-office-icons" data-grid="col-6">',
			'<h2 class="c-heading-4 x-hidden-focus">Includes</h2>',

			'<div class="exp-icon-container word-icon">',
			'<img alt="Word app icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>Word 2016</p>',
			'</div>',
			'<div class="exp-icon-container excel-icon">',
			'<img alt="Excel app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>Excel 2016</p>',
			'</div>',
			'<div class="exp-icon-container powerpoint-icon">',
			'<img alt="Powerpoint app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>PowerPoint 2016</p>',
			'</div>',
			'<div class="exp-icon-container onenote-icon">',
			'<img alt="OneNote app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>OneNote</p>',
			'</div>',
			'<div class="exp-icon-container outlook-icon">',
			'<img alt="Outlook app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>Outlook 2016</p>',
			'</div>',
			'<div class="exp-icon-container access-icon">',
			'<img alt="Access app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>Access 2016</p>',
			'<sup>(For PC only)</sup>',
			'</div>',
			'<div class="exp-icon-container publisher-icon">',
			'<img alt="Publisher app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>Publisher 2016</p>',
			'<sup>(For PC only)</sup>',
			'</div>',
			'<div class="exp-icon-container onedrive-icon">',
			'<img alt="OneDrive app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>OneDrive</p>',
			'</div>',
			'<div class="exp-icon-container skype-icon"">',
			'<img alt="Skype icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>Skype</p>',
			'</div>',
			'</div>',
			'<div class="exp-product-description" data-grid="col-6">',
			'<h2 class="c-heading-4 x-hidden-focus">Description</h2>',
			'<p class="c-paragraph-3 f-lean cli_short-description" style="white-space: pre-line">' + officeDescription + '</p>',
			'</div>',
			'</div>'].join('\n');

			$(officeIconsAndDescription).insertBefore('#mainRegion [id*="Feature"]:first');


				var tabModule = stickyBar([
					{
						tabclass : 'exp-overview-tab',
						tabname : 'Overview',
						tabselected : true
					},
					{
						tabclass : 'exp-requirements-tab',
						tabname : 'Requirements'
					},
          			{
						tabclass : 'exp-faq-tab',
						tabname : 'FAQ'
					},
					{
						tabclass : 'exp-reviews-tab',
						tabname : 'Reviews'
					}
				]);
			//}

			$('#mainRegion').prepend(tabModule).promise().done(function(){
				 var paddingOffset = 0,
					 component = $('#exp-optly-stickyBar'),
					 componentOffset = component.offset().top;
				
				//Sticky Controller
				$(window).on('scroll', function(){
					componentOffset = component.offset().top;

					var scrollTop = $(window).scrollTop(),
						distance = (componentOffset - scrollTop);

					if(distance <= paddingOffset && !component.hasClass('exp-stuck')){
					  component.addClass('exp-stuck');
					} else if(distance > paddingOffset && component.hasClass('exp-stuck')){
					  component.removeClass('exp-stuck');
					}
				});
				
				$(window).on('resize', function(){
					componentOffset = component.offset().top;
				});
				
				//Tab Controller
				$('body').on('click.toggleclass, keypress.toggleclass', '#exp-optly-stickyBar a', function(e){
					if(e && e.type === 'keypress' && e.keyCode !== 13){
	            		return false;
	          		}
         	
          			componentOffset = component.offset().top;

					var componentClickOffset = 0;

					//Update tab class
					$('#exp-optly-stickyBar a').removeClass('f-active');
					$(this).addClass('f-active');

					//Update parent wrapper
					tabClassList.map(function(classname){
					  if($('#mainArea').hasClass(classname)){
						$('#mainArea').removeClass(classname);
					  }
					});
					
					$('#mainArea').addClass($(this).data('tabclass'));
				  
					if(window.innerWidth > 850){
						componentClickOffset = 30;
					} else {
						componentClickOffset = 10;
					}
          
          /* Update Mobile Nav */
          var activeElm = $('#exp-optly-stickyBar a[data-tabclass="' + $(this).data('tabclass') + '"]'),
              activeElmIndex = activeElm.index(),
              activeElmText = activeElm.text();

            $('#exp-optly-stickyBar .exp-tabselector span[aria-selected="true"]').attr('aria-selected', 'false');
            $('#exp-optly-stickyBar .exp-tabselector button').text(activeElmText);
            $('#exp-optly-stickyBar .exp-tabselector li:eq(' + activeElmIndex + ') span').attr('aria-selected', 'true');

					$('html, body').animate({scrollTop: (componentOffset + componentClickOffset) + 'px'}, 'slow');
				  
					window['optimizely'].push({
						type: "event",
						eventName: "store_us_pivot_clicks"
					});
				});
				
				$('#exp-optly-stickyBar .cli_pdp-buy-button').on('click.addtocart', function(){
					window['optimizely'].push({
					  type: "event",
					  eventName: "store_us_expControl_StickyBar_addedToCart"
					});

				   $('.m-product-detail-hero .cli_pdp-buy-button:visible').trigger('click');
				});
					
				//Update When Selected Vid Changes
				$('.m-product-detail-hero').on('click', '.cli_skuMenuItems a, .cli_skuSelector button', function(){
					var origPrice = $.trim($('.price-info .srv_saleprice').text()),
					  curPrice = $.trim($('.price-info .price-text span').text());

					$('.exp-skuinfo p').text( $.trim(($('.cli_skuMenuItems').length ? $('.cli_skuMenuItems a[aria-selected="true"]').text() : $('.cli_skuSelector button.active').attr('data-button-title'))));

					if(origPrice.length){
						$('.exp-addtocart-price s').addClass('has-discount');
					} else {
						$('.exp-addtocart-price s').removeClass('has-discount');
					}

					if(curPrice.length){
						$('.exp-addtocart-price > div').removeClass('out-of-stock');
					} else {
						$('.exp-addtocart-price > div').addClass('out-of-stock');
					}

					// ADDING MONTH OR YEAR IF IT DOESN'T EXIST
					if($('.c-price .price-text span:visible + .monthoryear').length === 0) {
						$('<span class="monthoryear"></span>').insertAfter('.c-price .price-text span:visible');
					}		
					
					// UPDATING MONTH OR YEAR WHEN SELECTED
					if($(this).attr('data-button-title').toLowerCase().indexOf('month') !== -1) {
						$('.c-price .price-text span:visible + .monthoryear, .exp-addtocart-price span.origprice + .monthoryear, .exp-addtocart-price span.curprice + .monthoryear').html('&nbsp;/ month');
					} else if($(this).attr('data-button-title').toLowerCase().indexOf('year') !== -1) {
						$('.c-price .price-text span:visible + .monthoryear, .exp-addtocart-price span.origprice + .monthoryear, .exp-addtocart-price span.curprice + .monthoryear').html('&nbsp;/ year');
					}

					$('.exp-addtocart-price span.origprice').text(origPrice.replace(/[^,.0-9]/g,''));
					$('.exp-addtocart-price span.curprice').text(curPrice.replace(/[^,.0-9]/g,''));


				});
					
			});
			

			var elementsByProduct = domElements[(_pageBITags && _pageBITags.pageContracts && _pageBITags.pageContracts.ProductInfo ? _pageBITags.pageContracts.ProductInfo.id : '')];
				
			var insertModule = function(){
				if(elementsByProduct[0].action.toLowerCase() === 'prepend'){
					$(elementsByProduct[0].target).prepend(elementsByProduct[0].module);
				} else if(elementsByProduct[0].action.toLowerCase() === 'after'){
					$(elementsByProduct[0].target).after(elementsByProduct[0].module);
				} else if(elementsByProduct[0].action.toLowerCase() === 'before'){
					$(elementsByProduct[0].target).before(elementsByProduct[0].module);
				} else if(elementsByProduct[0].action.toLowerCase() === 'replacewith'){
					$(elementsByProduct[0].target).replaceWith(elementsByProduct[0].module);
				}	
				
				//Callback, if one exists
				if(elementsByProduct[0].callback){
					elementsByProduct[0].callback();
				}
				
				elementsByProduct.shift();
				
				if(elementsByProduct.length){
					insertModule();
				}
			};
			
			if(elementsByProduct && elementsByProduct.length){
				insertModule();
			}		  
      
      /* Mobile Click Events */
      $('body').on('click.exp_selectmenu_button', '.exp-tabselector button', function(e){
        e.stopPropagation();

        $(this).attr('aria-expanded', 'true').next('ul').attr('aria-hidden', 'false');
      });


/*
	        //Tmp flag selected item
	        $(this).next('ul').find('span[data-exp-selected="true"]').attr('aria-selected', 'true').removeAttr('data-exp-selected');
	        
	        $(this).attr('aria-expanded', 'true').next('ul').attr('aria-hidden', 'false');
	      });

			$(window).on('click', function(){
				if($('.exp-c-select .c-select-menu button[aria-expanded="true"]').length){
					$('.exp-c-select .c-select-menu button[aria-expanded="true"]').attr('aria-expanded', 'false');
					$('.exp-c-select .c-select-menu .c-menu[aria-hidden="false"]').attr('aria-hidden', 'true');
				}
			}); 
*/



      $('body').on('click.exp_selectmenu_option', '.exp-tabselector .c-menu span', function(){
        var value = $(this).data('value'),
						index = $(this).closest('li').index(),
						selectedText = $.trim($(this).text());

        //Click hidden nav links
        $('#exp-optly-stickyBar div[role="tablist"] a:eq(' + index + ')').trigger('click');

        //Update custom list
        $('span[aria-selected="true"]').attr('aria-selected', 'false');
        $(this).attr('aria-selected', 'true');	

        //Update label & close dropdown
        $('button', $(this).closest('.c-select-menu')).text(selectedText).attr('aria-expanded', 'false').next('ul').attr('aria-hidden', 'true');
      });
      
      
      //Move Here To Help Module
      $('#HereToHelp').insertAfter('#IncludesStructuredListDualColumn');
      
      //Trigger click on review tab
      if(window.location.hash && window.location.hash.toLowerCase() === '#ratings-reviews'){
        $('#exp-optly-stickyBar a[data-tabclass="exp-reviews-tab"]').trigger('click');
      }

      $('body').on('click', '.m-product-detail-hero-product-placement .c-rating a', function(){
        $('#exp-optly-stickyBar a[data-tabclass="exp-reviews-tab"]').trigger('click');
      });
      
      
      // Variation Selector
      (function(){
          var variationOptionArray = [],
          variationListArray = [],
          selectedVariationText = null,
          itemPrice = null,
          itemPriceHTML = null;

          if($('.m-product-detail-hero-product-placement .cli_skuSelector .cli_sku-select-button').length == 1 || $('#skuDropdownList').length){
            $('.m-product-detail-hero-product-placement').addClass('exp_norollup');
            return false;
          }

          $('.m-product-detail-hero-product-placement .cli_skuSelector .cli_sku-select-button').each(function(){
          itemPrice = parseFloat($.trim($(this).data('list-price')));
	  			itemPriceHTML = (itemPrice ? (' - $' + itemPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) : '');

            var tmpBtnTitletext = $(this).data('button-title');
            $(this).data('button-title', tmpBtnTitletext + itemPriceHTML);

          if($(this).hasClass('active')){
            selectedVariationText = $.trim($(this).data('button-title'));
          }

            variationOptionArray.push(['<option ' + ($(this).hasClass('active') ? 'selected="selected"' : '') + ' value="' + $(this).data('availability-id') + '" data-button-title="' + $.trim($(this).data('button-title')) + '">',
                        $.trim($(this).data('button-title')), 
                      '</option>'].join('\n'));

          variationListArray.push(['<li class="c-menu-item" role="presentation"> ',
                      '<span tabindex="-1" role="option" aria-selected="false" data-exp-selected="' + ($(this).hasClass('active') ? 'true' : 'false') + '" data-value="' + $(this).data('availability-id') + '" data-button-title="' + $.trim($(this).data('button-title')) + '">', 
                        $.trim($(this).data('button-title')),
                      '</span>',
                    '</li>'].join('\n'));
          });

	        $('.cli_skuSelector').before(['<div class="c-select exp-c-select">',
	                          '<select class="expSelectControl" aria-label="' + selectedVariationText + '">',
	                              variationOptionArray.join('\n'),
	                          '</select>',
	                        '<div class="c-select-menu f-persist f-border">',
	                          '<button aria-haspopup="true" aria-expanded="false" tabindex="0" class="x-hidden-focus exp-c-select-button">' + selectedVariationText + '</button>',
	                          '<ul class="c-menu' + (variationListArray.length > 5 ? ' f-scroll' : '') + '" aria-hidden="true" role="listbox" tabindex="0">',
	                            variationListArray.join('\n'),
	                          '</ul>',
	                        '</div>',
	                      '</div>'].join('\n'));
	      	})();

	      $('body').on('click.exp_selectmenu_button', '.m-product-detail-hero-product-placement .exp-c-select button', function(e){
	        e.stopPropagation();

	        //Tmp flag selected item
	        $(this).next('ul').find('span[data-exp-selected="true"]').attr('aria-selected', 'true').removeAttr('data-exp-selected');
	        
	        $(this).attr('aria-expanded', 'true').next('ul').attr('aria-hidden', 'false');
	      });

			$(window).on('click', function(){
				if($('.exp-c-select .c-select-menu button[aria-expanded="true"]').length){
					$('.exp-c-select .c-select-menu button[aria-expanded="true"]').attr('aria-expanded', 'false');
					$('.exp-c-select .c-select-menu .c-menu[aria-hidden="false"]').attr('aria-hidden', 'true');
				}

				if($('.exp-tabselector button[aria-expanded="true"]').length) {
					$('.exp-tabselector button').attr('aria-expanded', 'false');
					$('.exp-tabselector ul').attr('aria-hidden', 'true');
				}
			}); 


	      $('body').on('click.exp_selectmenu_option', '.m-product-detail-hero-product-placement .exp-c-select .c-menu span', function(){
	        var value = $(this).data('value'),
	          selectedText = $.trim($(this).data('button-title'));

	        //Update hidden variation selector
	        $('.m-product-detail-hero-product-placement .cli_skuSelector .cli_sku-select-button[data-availability-id="' + value + '"]').trigger('click');

	        //Update custom list
	        $('span[aria-selected="true"]').attr('aria-selected', 'false');
	        $(this).attr('aria-selected', 'true');	

	        //Update hidden select
	        $('option[value="true"]', $(this).closest('.exp-c-select').find('.expSelectControl')).removeAttr('selected');
	        $('option[value="' + value + '"]', $(this).closest('.exp-c-select').find('.expSelectControl')).attr('selected', 'selected');

	        //Update label & close dropdown
	        $('button', $(this).closest('.c-select-menu')).text(selectedText).attr('aria-expanded', 'false').next('ul').attr('aria-hidden', 'true');
	      });

      	  var heroBoxShot = '',
      	  		hero2600x400 = '',
      	  		hero1600x400 = '',
      	  		hero1200x340 = '',
      	  		hero875x340 = '',
      	  		hero600x270 = '';
  				
	      if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5DM'){ // 365 Home
	  		heroBoxShot = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1iIy?ver=b54f&w=210&h=210';      
  	  		hero2600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOB?ver=5ea2';
  	  		hero1600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpO?ver=c5cf';
  	  		hero1200x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOz?ver=249d';
  	  		hero875x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpM?ver=e8d8';
  	  		hero600x270 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOx?ver=8759';	  		
	      } else if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5BF'){ //365 Personal
			heroBoxShot = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&w=210&h=210';     
  	  		hero2600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpU?ver=03c4';
  	  		hero1600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOF?ver=4330';
  	  		hero1200x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpS?ver=46c5';
  	  		hero875x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOD?ver=ca77';
  	  		hero600x270 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpQ?ver=b147';	
	      } else if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5BB'){ //365 University 
	      	heroBoxShot = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6y5A?ver=bc57&w=210&h=210';    
  	  		hero2600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1F0Nj?ver=5db7';
  	  		hero1600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1F0Nh?ver=3610';
  	  		hero1200x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1F0Nf?ver=bf1f';
  	  		hero875x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1F0Nd?ver=489f';
  	  		hero600x270 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1F0Nb?ver=90b1';	
	      } else if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5FC'){ //H&S 2016
	      	heroBoxShot = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1duh?ver=3326&w=210&h=210';     
  	  		hero2600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOr?ver=8c9c';
  	  		hero1600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpE?ver=c73f';
  	  		hero1200x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOp?ver=4d8a';
  	  		hero875x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpC?ver=0422';
  	  		hero600x270 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOn?ver=b4d2';	
	      } else if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5FF'){ //H&B 2016
	      	heroBoxShot = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1dui?ver=6dc1&w=210&h=210';     
  	  		hero2600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpA?ver=ff38';
  	  		hero1600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOl?ver=fede';
  	  		hero1200x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpy?ver=4276';
  	  		hero875x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOj?ver=7a1f';
  	  		hero600x270 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpw?ver=4985';	
	      } else if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5F8'){ //Office Pro 2016
	      	heroBoxShot = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6aCd?ver=95c3&w=210&h=210';     
  	  		hero2600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpK?ver=4d87';
  	  		hero1600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOv?ver=56d4';
  	  		hero1200x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpI?ver=6b84';
  	  		hero875x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOt?ver=f09a';
  	  		hero600x270 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpG?ver=1bc8';	
	      } else if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5FB'){ //H&S 2016 Mac (SAME AS PC)
	      	heroBoxShot = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10FR?ver=da39&w=210&h=210';    
  	  		hero2600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOr?ver=8c9c';
  	  		hero1600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpE?ver=c73f';
  	  		hero1200x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOp?ver=4d8a';
  	  		hero875x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpC?ver=0422';
  	  		hero600x270 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOn?ver=b4d2';
	      } else if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5FD'){ //H&B 2016 Mac (SAME AS PC)
	      	heroBoxShot = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1duj?ver=d136&w=210&h=210';    
  	  		hero2600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpA?ver=ff38';
  	  		hero1600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOl?ver=fede';
  	  		hero1200x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpy?ver=4276';
  	  		hero875x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOj?ver=7a1f';
  	  		hero600x270 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpw?ver=4985';		
	      }

			$('#purchaseRegion').prepend(['<div class="exp-backgroundimage">',
										  '<div class="exp-background-gradient"></div>',
			                              '<picture>',
			                                  '<source srcset="' + hero600x270 + '" media="(max-width:600px)">',
			                                  '<source srcset="' + hero875x340 + '" media="(min-width:601px) and (max-width:875px)">',
			                                  '<source srcset="' + hero1200x340 + '" media="(min-width:876px) and (max-width:1200px)">',
			                                  '<source srcset="' + hero1600x400 + '" media="(min-width:1201px) and (max-width:1600px)">',
			                                  '<source srcset="' + hero2600x400 + '" media="(min-width:1601px)">',
			                                  '<img src="' + hero1600x400 + '">',
			                              '</picture>',
			                            '</div>'].join('\n')).promise().done(function(){
				lazySizes.init();
			});

    	  	$('.m-product-detail-hero-product-placement > *').wrapAll('<div class="exp-prod-info" />');
      	  
			$('.m-product-detail-hero-product-placement').prepend('<div class="exp-image"><img src="'+ heroBoxShot + '" /></div>');  

	      
	      $('.context-configuration-buttons, #srv_purchaseCTA').wrapAll('<div class="exp-buyactions" />');
	      
	      //Update buy button text
	      $('.context-configuration-buttons .c-label').text('Choose your product:');

    	  var tmpSelectedProduct = '';
	      $('.context-configuration-buttons button.exp-c-select-button').on('click', function() {
			tmpSelectedProduct = $(this).text().trim();

			window['optimizely'].push({
				type: "event",
				eventName: "store_us_dropdown_opened"
			});
	      });

	      $('.context-configuration-buttons .c-menu-item span').on('click', function(){
	      	if(tmpSelectedProduct != $(this).text().trim()) {
				window['optimizely'].push({
					type: "event",
					eventName: "store_us_product_changed"
				});
	      	}
	      });


			var screenShotImages = '';
			$('.m-product-detail-hero-carousel .c-group:first li[id*="hero-slide"] picture img').each(function(){

			if(typeof $(this).data('src') === 'undefined') {
				screenShotImages += '<img data-grid="col-4" src="' + $(this).attr('src') + '" alt="' + $(this).attr('alt') + '" />';
			} else {
				screenShotImages += '<img data-grid="col-4" src="' + $(this).data('src') + '" alt="' + $(this).attr('alt') + '" />';
			}

			}).promise().done(function() {
				$('<div id="exp-screen-shots"><div class="m-rich-content-block context-ucx" data-grid="col-12"><h4 class="x-hidden-focus">Screen shots</h4>' + screenShotImages + '</div></div>').insertAfter('#HereToHelp'); 
			});


	      	// DECORATE DOM ELEMENTS
			utils.waitUntil(function() {
			  return typeof awa != 'undefined' && awa.isInitialized === true;
			}).then(function() {
				try {
					var triggerDecoration = function(target){
						if(window.CustomEvent){
							event = new CustomEvent('decorate', {'bubbles': true });
						} else {
							event = document.createEvent('CustomEvent');
							event.initCustomEvent('decorate', true, true, { some: 'data' });
						}

						target.dispatchEvent(event);
						
						require(['jsll'], function(jsll) {
							jsll.ct.captureContentUpdate({ timings: { didDeferExecTimeout: window._pageTimings.didDeferExecTimeout } });
						});
					};
					triggerDecoration(document.getElementById('mainArea'));
				}catch(e) {
					console.log(e);
				}
			});
		});

		// ADDING MONTH OR YEAR INITALLY
	    window.setTimeout(function () {
			if($('.m-product-detail-hero-product-placement .cli_skuSelector .cli_sku-select-button.active').attr('data-button-title').toLowerCase().indexOf('month') !== -1) {
				$('<span class="monthoryear">&nbsp;/ month</span>').insertAfter('.c-price .price-text span:visible, .exp-addtocart-price span.origprice, .exp-addtocart-price span.curprice');
			} else if($('.m-product-detail-hero-product-placement .cli_skuSelector .cli_sku-select-button.active').attr('data-button-title').toLowerCase().indexOf('year') !== -1) {
				$('<span class="monthoryear">&nbsp;/ year</span>').insertAfter('.c-price .price-text span:visible, .exp-addtocart-price span.origprice, .exp-addtocart-price span.curprice');
			}
	    }, 350);

	});
  
  utils.waitForElement('#RatingReview').then(function(){
    setTimeout(function(){
      $('#mainArea').addClass('exp-reviews-loaded');
    }, 1500);

    setTimeout(function(){
      if(!$('#mainArea.exp-reviews-loaded').length){
      $('#mainArea').addClass('exp-reviews-loaded');
      }
    }, 2500);
  });
});
}}, {"value": "<style>/* Hero adjustments */\n#purchaseRegion{\n  position: relative;\n  min-height: 250px;\n}\n#BuyBox{\n  max-width: 1600px !important;\n  margin: 0 auto !important; \n}\n#mainArea{\n  position: relative;\n}\n.m-product-detail-hero{\n  position: relative;\n  padding: 0;\n}\n.m-product-detail-hero .m-product-detail-hero-carousel{\n  display: none !important;\n}\n.m-product-detail-hero .m-product-detail-hero-product-placement{\n  position: absolute;\n  top: 0;\n  padding: 0;\n  bottom: -45px;\n  top: inherit;\n  width: 75%;\n}\n.m-product-detail-hero .c-carousel{\n display: none !important; \n}\n.m-product-detail-hero .m-product-detail-hero-product-placement .c-heading-5,\n.m-product-detail-hero .m-product-detail-hero-product-placement .c-paragraph-3{\n display: none !important; \n}\n.m-product-detail-hero .exp-immersive{\n    margin: 0 auto;\n    display: block;\n}\n.m-product-detail-hero .exp-image{\n  float: left;\n  width: 23.2%;\n  margin-left: 30px;\n  position: relative;\n  top: -60px;\n  max-width: 210px; \n}\n.m-product-detail-hero .exp-image img{\n     width: 100%;\n    height: auto;\n}\n.m-product-detail-hero .exp-prod-info{\n  float: left;\n  width: 64.86%;\n  margin-left: 20px;\n}\n.exp-buyactions .context-configuration-buttons {\n  padding: 0;\n  float: left;\n}\n.exp-buyactions #srv_purchaseCTA{\n  float: left;\n  padding: 0;\n  margin-top: 24px;\n  margin-left: 10px;\n}\n.exp-backgroundimage{\n margin-bottom: 100px; \n}\n.exp-backgroundimage img{\n  width: 100%;\n  height: auto; \n}\n@media only screen and (min-width: 1243px){\n   .m-product-detail-hero .m-product-detail-hero-product-placement .context-buy-box-badge+h1,\n  .m-product-detail-hero .m-product-detail-hero-product-placement .c-meta-text{\n   color: #fff; \n  }\n  .m-product-detail-hero .c-rating .c-glyph:after{\n   color:#fff; \n  } \n}\n@media only screen and (max-width: 1242px){\n .m-product-detail-hero .m-product-detail-hero-product-placement{\n   position: static;\n }\n  .m-product-detail-hero .exp-image img{\n    position: relative;\n    top: -50px;\n }\n  .exp-backgroundimage{\n    margin-bottom: 15px; \n  }\n}\n\n@media only screen and (max-width: 875px){\n  .m-product-detail-hero .exp-image{\n    top: 0; \n  }\n  .m-product-detail-hero .exp-image img{\n    top: 0; \n  }\n}\n@media only screen and (min-width: 501px) and (max-width: 875px){\n  .exp-buyactions{\n    position: absolute;\n    left: 30px;\n    margin-top: 20px; \n  }\n  .m-product-detail-hero .m-product-detail-hero-product-placement{\n    margin-bottom: 75px; \n  }\n}\n@media only screen and (max-width: 575px){\n .m-product-detail-hero .exp-prod-info{\n   width: 62.86%; \n }\n}\n@media only screen and (max-width: 500px){\n  .m-product-detail-hero .exp-image{\n    width: 50%;\n  }\n  .m-product-detail-hero .exp-prod-info{\n   width: 100%; \n  }\n  .exp-buyactions #srv_purchaseCTA{\n    margin-top: 0;\n    margin-left: 0;\n  }\n  .m-product-detail-hero .m-product-detail-hero-product-placement .context-configuration-buttons{\n    padding-bottom: 10px; \n  }\n}\n\n/* Tabs */\n#mainRegion [id^=\"Feature\"],\n#mainRegion #IncludesStructuredListDualColumn,\n#mainRegion #RequirementsStructuredList,\n#mainRegion #HereToHelp,\n#mainRegion #FAQ,\n#mainRegion #Footnotes,\n#mainRegion .exp-optly-comparechart,\n#mainRegion #exp-screen-shots {\n  display: none;\n}\n#mainRegion #RatingReview{\n height: 0;\n overflow: hidden;\n width: 100%;\n}\n.exp-overview-tab #mainRegion [id^=\"Feature\"],\n.exp-overview-tab #mainRegion #IncludesStructuredListDualColumn,\n.exp-overview-tab #mainRegion #Footnotes,\n.exp-overview-tab #mainRegion #HereToHelp,\n.exp-overview-tab #mainRegion #exp-screen-shots {\n  display: block;\n}\n.exp-requirements-tab #mainRegion #RequirementsStructuredList{\n  display: block;\n}\n.exp-faq-tab #mainRegion #FAQ{\n  display: block;\n}\n.exp-reviews-tab.exp-reviews-loaded #mainRegion #RatingReview{\n height: inherit;\n overflow: visible;\n}\n.exp-compare-tab #mainRegion .exp-optly-comparechart{\n  display: block;\n}\n#mainRegion #FAQ h3{\n  font-weight: bold; \n}\n\n/* Dropdown */\n.m-product-detail-hero-product-placement .cli_skuSelector{\n  display: none !important; \n}\n.m-product-detail-hero-product-placement.exp_norollup .cli_skuSelector{\n  display: block !important; \n}\n.c-select-menu{\n background-color: #fff; \n}\n.c-select-menu > .exp-c-select-button{\n  transform: initial;\n  margin-left: 0 !important;\n  padding-top:7px;\n  padding-bottom:7px;\n}\n.c-select-menu > .exp-c-select-button span{\n display: none; \n}\n.c-select.exp-c-select:after{\n  display: none !important; \n}\n.c-select-menu > .exp-c-select-button:after{\n  padding-top: 0 !important;\n  top: 16px; \n}\n.c-select-menu.f-border [aria-expanded]:hover{\n  border: 1px solid rgba(0,0,0,.8);\n}\n.c-select-menu .c-menu{\n  width: inherit;\n  min-width: 296px;\n}\n.c-select-menu .c-menu li span{\n white-space: nowrap; \n}\n\n\n.exp-product-cfq7ttc0k5fb .exp-buyactions #srv_purchaseCTA,\n.exp-product-cfq7ttc0k5fb .exp-buyactions #srv_purchaseCTA,\n.exp-product-cfq7ttc0k5f8 .exp-buyactions #srv_purchaseCTA,\n.exp-product-cfq7ttc0k5ff .exp-buyactions #srv_purchaseCTA,\n.exp-product-cfq7ttc0k5fc .exp-buyactions #srv_purchaseCTA,\n.exp-product-cfq7ttc0k5bb .exp-buyactions #srv_purchaseCTA{\n  margin-left: 0;\n  margin-top: 0;\n}\n.exp-product-cfq7ttc0k5fb #purchaseRegion,\n.exp-product-cfq7ttc0k5fb #purchaseRegion,\n.exp-product-cfq7ttc0k5f8 #purchaseRegion,\n.exp-product-cfq7ttc0k5ff #purchaseRegion,\n.exp-product-cfq7ttc0k5fc #purchaseRegion,\n.exp-product-cfq7ttc0k5bb #purchaseRegion{\n  margin-bottom: 40px;\n}\n\n.exp-product-cfq7ttc0k5fb .m-product-detail-hero .m-product-detail-hero-product-placement,\n.exp-product-cfq7ttc0k5fb .m-product-detail-hero .m-product-detail-hero-product-placement,\n.exp-product-cfq7ttc0k5f8 .m-product-detail-hero .m-product-detail-hero-product-placement,\n.exp-product-cfq7ttc0k5ff .m-product-detail-hero .m-product-detail-hero-product-placement,\n.exp-product-cfq7ttc0k5fc .m-product-detail-hero .m-product-detail-hero-product-placement,\n.exp-product-cfq7ttc0k5fd .m-product-detail-hero .m-product-detail-hero-product-placement{\n  bottom: -40px;\n}\n\n.exp-product-cfq7ttc0k5bb .m-product-detail-hero .m-product-detail-hero-product-placement {\n    bottom: -56px;\n}\n.exp-product-cfq7ttc0k5bf .m-product-detail-hero .m-product-detail-hero-product-placement,\n.exp-product-cfq7ttc0k5dm .m-product-detail-hero .m-product-detail-hero-product-placement {\n    bottom: -64px\n}    \n\n#Feature0 .exp-office-icons h2 {\n    margin-bottom: 3px;\n}\n#Feature0 .exp-product-description h2 {\n    margin-bottom: 10px;\n}\n#Feature0 .exp-icon-container {\n    width: 171px;\n    /*\n    position: relative;\n  */\n    text-align: center;\n    float: left;\n    height: 115px;\n    padding: 6px;\n}\n\n@media only screen and (max-width: 701px){\n  #Feature0 .exp-icon-container {\n    width: 137px;\n  }\n}\n\n\n/*\n#Feature0 .exp-icon-container p {\n    display: inline-block;\n    position: absolute;\n    top: calc(50%);\n    -ms-transform: translateY(-50%);\n    transform: translateY(-50%);\n    left: 50px;\n}\n*/\n.exp-office-icons .exp-icon-container {\n  display: none;\n}\n\n/* 365 home */\n.exp-product-cfq7ttc0k5dm .exp-office-icons .word-icon,\n.exp-product-cfq7ttc0k5dm .exp-office-icons .excel-icon,\n.exp-product-cfq7ttc0k5dm .exp-office-icons .powerpoint-icon,\n.exp-product-cfq7ttc0k5dm .exp-office-icons .onenote-icon,\n.exp-product-cfq7ttc0k5dm .exp-office-icons .outlook-icon,\n.exp-product-cfq7ttc0k5dm .exp-office-icons .access-icon,\n.exp-product-cfq7ttc0k5dm .exp-office-icons .publisher-icon,\n.exp-product-cfq7ttc0k5dm .exp-office-icons .onedrive-icon,\n.exp-product-cfq7ttc0k5dm .exp-office-icons .skype-icon {\n  display: block;\n}\n\n/* 365 personal */\n.exp-product-cfq7ttc0k5bf .exp-office-icons .word-icon,\n.exp-product-cfq7ttc0k5bf .exp-office-icons .excel-icon,\n.exp-product-cfq7ttc0k5bf .exp-office-icons .powerpoint-icon,\n.exp-product-cfq7ttc0k5bf .exp-office-icons .onenote-icon,\n.exp-product-cfq7ttc0k5bf .exp-office-icons .outlook-icon,\n.exp-product-cfq7ttc0k5bf .exp-office-icons .access-icon,\n.exp-product-cfq7ttc0k5bf .exp-office-icons .publisher-icon,\n.exp-product-cfq7ttc0k5bf .exp-office-icons .onedrive-icon,\n.exp-product-cfq7ttc0k5bf .exp-office-icons .skype-icon {\n  display: block;\n}\n\n/* 365 university */\n.exp-product-cfq7ttc0k5bb .exp-office-icons .word-icon,\n.exp-product-cfq7ttc0k5bb .exp-office-icons .excel-icon,\n.exp-product-cfq7ttc0k5bb .exp-office-icons .powerpoint-icon,\n.exp-product-cfq7ttc0k5bb .exp-office-icons .onenote-icon,\n.exp-product-cfq7ttc0k5bb .exp-office-icons .outlook-icon,\n.exp-product-cfq7ttc0k5bb .exp-office-icons .access-icon,\n.exp-product-cfq7ttc0k5bb .exp-office-icons .publisher-icon,\n.exp-product-cfq7ttc0k5bb .exp-office-icons .onedrive-icon,\n.exp-product-cfq7ttc0k5bb .exp-office-icons .skype-icon {\n  display: block;\n}\n\n/* h&s 2016 */\n.exp-product-cfq7ttc0k5fc .exp-office-icons .word-icon,\n.exp-product-cfq7ttc0k5fc .exp-office-icons .excel-icon,\n.exp-product-cfq7ttc0k5fc .exp-office-icons .powerpoint-icon,\n.exp-product-cfq7ttc0k5fc .exp-office-icons .onenote-icon {\n  display: block;\n}\n\n/* h&b 2016 */\n.exp-product-cfq7ttc0k5ff .exp-office-icons .word-icon,\n.exp-product-cfq7ttc0k5ff .exp-office-icons .excel-icon,\n.exp-product-cfq7ttc0k5ff .exp-office-icons .powerpoint-icon,\n.exp-product-cfq7ttc0k5ff .exp-office-icons .onenote-icon,\n.exp-product-cfq7ttc0k5ff .exp-office-icons .outlook-icon {\n  display: block;\n}\n\n/* office pro 2016 */\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .word-icon,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .excel-icon,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .powerpoint-icon,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .onenote-icon,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .outlook-icon,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .access-icon,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .publisher-icon,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .onedrive-icon,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .skype-icon {\n  display: block;\n}\n\n/* h&s 2016 mac */\n.exp-product-cfq7ttc0k5fb .exp-office-icons .word-icon,\n.exp-product-cfq7ttc0k5fb .exp-office-icons .excel-icon,\n.exp-product-cfq7ttc0k5fb .exp-office-icons .powerpoint-icon,\n.exp-product-cfq7ttc0k5fb .exp-office-icons .onenote-icon {\n  display: block;\n}\n\n/* h&b 2016 mac */\n.exp-product-cfq7ttc0k5fd .exp-office-icons .word-icon,\n.exp-product-cfq7ttc0k5fd .exp-office-icons .excel-icon,\n.exp-product-cfq7ttc0k5fd .exp-office-icons .powerpoint-icon,\n.exp-product-cfq7ttc0k5fd .exp-office-icons .onenote-icon,\n.exp-product-cfq7ttc0k5fd .exp-office-icons .outlook-icon {\n  display: block;\n}\n.exp-product-cfq7ttc0k5fd .exp-office-icons sup {\n  display: none;\n}\n\n\n/* SUP SUBTEXT */\n/*\n.exp-product-cfq7ttc0k5dm #Feature0 .exp-icon-container.access-icon p,\n.exp-product-cfq7ttc0k5dm #Feature0 .exp-icon-container.publisher-icon p,\n.exp-product-cfq7ttc0k5bf #Feature0 .exp-icon-container.access-icon p,\n.exp-product-cfq7ttc0k5bf #Feature0 .exp-icon-container.publisher-icon p,\n.exp-product-cfq7ttc0k5bb #Feature0 .exp-icon-container.access-icon p,\n.exp-product-cfq7ttc0k5bb #Feature0 .exp-icon-container.publisher-icon p, \n.exp-product-cfq7ttc0k5f8 #Feature0 .exp-icon-container.access-icon p,\n.exp-product-cfq7ttc0k5f8 #Feature0 .exp-icon-container.publisher-icon p {\n  top: calc(35%);\n}\n.exp-product-cfq7ttc0k5dm .exp-office-icons sup,\n.exp-product-cfq7ttc0k5bf .exp-office-icons sup,\n.exp-product-cfq7ttc0k5bb .exp-office-icons sup,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons sup {\n  display: inline-block;\n  position: absolute;\n  top: calc(65%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n  left: 50px;\n}\n*/\n.exp-office-icons p {\n font-size: 13px;\n margin-top: 5px;\n}\n\n#exp-screen-shots img {\n  margin: 15px 0;\n}\n\n@media only screen and (min-width: 1243px){\n  .exp-background-gradient {\n    height: calc(100% - 100px);\n    width: 100%;\n    position: absolute;\n    top: 0;\n    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,.5) 86%,rgba(0,0,0,.5) 0%);\n  }\n}\n\n\n.c-select-menu.f-border [aria-expanded]:focus {\n  border: 1px solid #0067b8;\n}\n\n\n/* STAR RATINGS */\n@media only screen and (min-width: 1243px){\n  .m-product-detail-hero .c-rating[data-value] div:after {\n      color: #fff;\n  }\n  .m-product-detail-hero .c-rating[data-value] div:before {\n    color: rgba(183,183,183,.7);\n  }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "43C6C423-8C37-46BE-8D0B-2083F4452482"}]}], "name": "Template B - Tabs - w/Dropdown"}, {"id": "8643010040", "actions": [{"viewId": "8498890748", "changes": [{"dependencies": [], "type": "custom_code", "id": "E5FECAAD-E58E-45AF-B907-4390B94AC007", "value": function($){//Utilities
var tabClassList = [];

var stickyBar = function(navigation){
	var origPrice = (_pageBITags.pageContracts.ProductInfo.rtPrice != _pageBITags.pageContracts.ProductInfo.lstPrice ? _pageBITags.pageContracts.ProductInfo.rtPrice : null),
		curPrice = (_pageBITags.pageContracts.ProductInfo.lstPrice ? _pageBITags.pageContracts.ProductInfo.lstPrice : null),
		key,
		tabList = [],
		tabDropdown = [],
		addToCartButtonWidth = $('.m-product-detail-hero .cli_pdp-buy-button').outerWidth(),
		addToCartAreaWidth = (addToCartButtonWidth + 75),
		addToCartButtonText = $('.m-product-detail-hero .cli_pdp-buy-button').text(),
    skuSelectorButtonsLen = $('.cli_sku-select-button').length;
	
	if(navigation){
		for(key in navigation){
      tabClassList.push(navigation[key].tabclass);
			tabList.push('<a class="' + (navigation[key].tabselected ? 'f-active' : '') + '" role="tab" tabindex="0" data-tabclass="' + (navigation[key].tabclass ? navigation[key].tabclass : '') + '">' + (navigation[key].tabname ? navigation[key].tabname : '') + '</a>');
			tabDropdown.push('<li class="c-menu-item" role="presentation"><span tabindex="-1" role="option" aria-selected="' + (navigation[key].tabselected ? 'true' : 'false') + '">' + navigation[key].tabname + '</span></li>');	
		}
	}
	
	return ['<div style="clear:both;"></div><section id="exp-optly-stickyBar" class="' + (origPrice ? 'has-discount' : '') + '">',
				  '<div class="c-pivot">',
					'<div class="exp-skuinfo">',
						'<div class="exp-skuinfo-wrapper">',
								'<h5>' + _pageBITags.pageContracts.ProductInfo.title + '</h5>',
							'<p style="' + (skuSelectorButtonsLen < 2 ? 'display:none' : '') + '">' +  $.trim(($('.cli_skuMenuItems').length ? $('.cli_skuMenuItems a[aria-selected="true"]').text() : $('.cli_skuSelector button.active').attr('data-button-title'))) + '</p>',
						 '</div>',
					'</div>',           
					'<div role="tablist">',
						tabList.join('\n'),
					'</div>',
					'<div class="exp-tabselector c-select">',
					  '<div class="c-select-menu f-persist"><button aria-haspopup="true" aria-expanded="false" tabindex="0" class="x-hidden-focus">Overview</button>',
						  '<ul class="c-menu" aria-hidden="true" role="listbox" tabindex="0">',
							  tabDropdown.join('\n'),
						  '</ul>',
					  '</div>',
					'</div>',           
					'<div class="exp-addtocart">',
						 '<div class="exp-addtocart-price">',
							'<s class="' + (origPrice ? 'has-discount' : '') + '">$<span class="origprice">' + (origPrice ? origPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '') + '</span></s>',
							'<div class="' + (curPrice ? '' : 'out-of-stock') + '">$<span class="curprice">' + (curPrice ? curPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '') + '</span></div>',
						  '</div>',
						 '<button class="c-button cli_pdp-buy-button pdp-action-buttons" type="submit" data-m="{&quot;cN&quot;:&quot;StickyBuyAndDownloadButton&quot;}">' + addToCartButtonText + '</button>',           
					'</div>',
			  '</div></section>'].join('\n');
};


// Module HTML
/*
var heroImage = '';

	var domElements = {
		"CFQ7TTC0K5DM" : [
			{
				"module" : heroImage,
				"target" : "#BuyBox .m-product-detail-hero",
				"action" : "prepend"
			}
		]
		
	};
*/

var domElements = {};

//Optimizely Utilities
var utils = window['optimizely'].get('utils'),
		experimentId = '8576811236',
    productId = (_pageBITags && _pageBITags.pageContracts && _pageBITags.pageContracts.ProductInfo && _pageBITags.pageContracts.ProductInfo.id ? _pageBITags.pageContracts.ProductInfo.id.toLowerCase() : '');

utils.waitUntil(function() {
  if(window.jQuery) return true;
}).then(function() {
  var $ = window.jQuery;
  
	$('html').addClass('exp-' + experimentId + ' ' + 'exp-product-' + productId);
  
  
	utils.waitForElement('#mainRegion').then(function(){
		utils.waitForElement('.cli_pdp-buy-button').then(function(){
			$('#mainArea').addClass('exp-overview-tab');
      
	      //Clear float
	      $('#purchaseRegion').append('<div style="clear:both;"></div>');
					  
			//if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5DM'){
				//$('html').addClass('exp-CFQ7TTC0K5DM');		
				



			var officeDescription = $('.cli_short-description').text();
			var officeIconsAndDescription = ['<div id="Feature0" data-grid="col-12">',
			'<div class="exp-office-icons" data-grid="col-6">',
			'<h2 class="c-heading-4 x-hidden-focus">Includes</h2>',

			'<div class="exp-icon-container word-icon">',
			'<img alt="Word app icon" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b0yo?ver=273d&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>Word 2016</p>',
			'</div>',
			'<div class="exp-icon-container excel-icon">',
			'<img alt="Excel app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1biLC?ver=6238&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>Excel 2016</p>',
			'</div>',
			'<div class="exp-icon-container powerpoint-icon">',
			'<img alt="Powerpoint app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b5Kq?ver=085e&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>PowerPoint 2016</p>',
			'</div>',
			'<div class="exp-icon-container onenote-icon">',
			'<img alt="OneNote app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bt9D?ver=3c79&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>OneNote</p>',
			'</div>',
			'<div class="exp-icon-container outlook-icon">',
			'<img alt="Outlook app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bnXb?ver=09cb&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>Outlook 2016</p>',
			'</div>',
			'<div class="exp-icon-container access-icon">',
			'<img alt="Access app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1blm2?ver=13b3&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>Access 2016</p>',
			'<sup>(For PC only)</sup>',
			'</div>',
			'<div class="exp-icon-container publisher-icon">',
			'<img alt="Publisher app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1b8m9?ver=242b&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>Publisher 2016</p>',
			'<sup>(For PC only)</sup>',
			'</div>',
			'<div class="exp-icon-container onedrive-icon">',
			'<img alt="OneDrive app icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bDyQ?ver=3ff3&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>OneDrive</p>',
			'</div>',
			'<div class="exp-icon-container skype-icon"">',
			'<img alt="Skype icon." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1bg9m?ver=20f7&amp;q=90&amp;m=6&amp;h=90&amp;w=90&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t">',
			'<p>Skype</p>',
			'</div>',
			'</div>',
			'<div class="exp-product-description" data-grid="col-6">',
			'<h2 class="c-heading-4 x-hidden-focus">Description</h2>',
			'<p class="c-paragraph-3 f-lean cli_short-description" style="white-space: pre-line">' + officeDescription + '</p>',
			'</div>',
			'</div>'].join('\n');

			$(officeIconsAndDescription).insertBefore('#mainRegion [id*="Feature"]:first');


				var tabModule = stickyBar([
					{
						tabclass : 'exp-overview-tab',
						tabname : 'Overview',
						tabselected : true
					},
					{
						tabclass : 'exp-requirements-tab',
						tabname : 'Requirements'
					},
          			{
						tabclass : 'exp-faq-tab',
						tabname : 'FAQ'
					},
					{
						tabclass : 'exp-reviews-tab',
						tabname : 'Reviews'
					}
				]);
			//}

			$('#mainRegion').prepend(tabModule).promise().done(function(){
				 var paddingOffset = 0,
					 component = $('#exp-optly-stickyBar'),
					 componentOffset = component.offset().top;
				
				//Sticky Controller
				$(window).on('scroll', function(){
					componentOffset = component.offset().top;

					var scrollTop = $(window).scrollTop(),
						distance = (componentOffset - scrollTop);

					if(distance <= paddingOffset && !component.hasClass('exp-stuck')){
					  component.addClass('exp-stuck');
					} else if(distance > paddingOffset && component.hasClass('exp-stuck')){
					  component.removeClass('exp-stuck');
					}
				});
				
				$(window).on('resize', function(){
					componentOffset = component.offset().top;
				});
				
				//Tab Controller
				$('body').on('click.toggleclass, keypress.toggleclass', '#exp-optly-stickyBar a', function(e){
					if(e && e.type === 'keypress' && e.keyCode !== 13){
            return false;
          }
         
          componentOffset = component.offset().top;

					var componentClickOffset = 0;

					//Update tab class
					$('#exp-optly-stickyBar a').removeClass('f-active');
					$(this).addClass('f-active');

					//Update parent wrapper
					tabClassList.map(function(classname){
					  if($('#mainArea').hasClass(classname)){
						$('#mainArea').removeClass(classname);
					  }
					});
					
					$('#mainArea').addClass($(this).data('tabclass'));
				  
					if(window.innerWidth > 850){
						componentClickOffset = 30;
					} else {
						componentClickOffset = 10;
					}
          
          /* Update Mobile Nav */
          var activeElm = $('#exp-optly-stickyBar a[data-tabclass="' + $(this).data('tabclass') + '"]'),
              activeElmIndex = activeElm.index(),
              activeElmText = activeElm.text();

            $('#exp-optly-stickyBar .exp-tabselector span[aria-selected="true"]').attr('aria-selected', 'false');
            $('#exp-optly-stickyBar .exp-tabselector button').text(activeElmText);
            $('#exp-optly-stickyBar .exp-tabselector li:eq(' + activeElmIndex + ') span').attr('aria-selected', 'true');

					$('html, body').animate({scrollTop: (componentOffset + componentClickOffset) + 'px'}, 'slow');
				  
					window['optimizely'].push({
						type: "event",
						eventName: "store_us_pivot_clicks"
					});
				});
				
				$('#exp-optly-stickyBar .cli_pdp-buy-button').on('click.addtocart', function(){
					window['optimizely'].push({
					  type: "event",
					  eventName: "store_us_expControl_StickyBar_addedToCart"
					});

				   $('.m-product-detail-hero .cli_pdp-buy-button:visible').trigger('click');
				});
					
				//Update When Selected Vid Changes
				$('.m-product-detail-hero').on('click', '.cli_skuMenuItems a, .cli_skuSelector button', function(){
					var origPrice = $.trim($('.price-info .srv_saleprice').text()),
					  curPrice = $.trim($('.price-info .price-text span').text());

					$('.exp-skuinfo p').text( $.trim(($('.cli_skuMenuItems').length ? $('.cli_skuMenuItems a[aria-selected="true"]').text() : $('.cli_skuSelector button.active').attr('data-button-title'))));

					if(origPrice.length){
						$('.exp-addtocart-price s').addClass('has-discount');
					} else {
						$('.exp-addtocart-price s').removeClass('has-discount');
					}

					if(curPrice.length){
						$('.exp-addtocart-price > div').removeClass('out-of-stock');
					} else {
						$('.exp-addtocart-price > div').addClass('out-of-stock');
					}

					// ADDING MONTH OR YEAR IF IT DOESN'T EXIST
					if($('.c-price .price-text span:visible + .monthoryear').length === 0) {
						$('<span class="monthoryear"></span>').insertAfter('.c-price .price-text span:visible');
					}		
					
					// UPDATING MONTH OR YEAR WHEN SELECTED
					if($(this).attr('data-button-title').toLowerCase().indexOf('month') !== -1) {
						$('.c-price .price-text span:visible + .monthoryear, .exp-addtocart-price span.origprice + .monthoryear, .exp-addtocart-price span.curprice + .monthoryear').html('&nbsp;/ month');
					} else if($(this).attr('data-button-title').toLowerCase().indexOf('year') !== -1) {
						$('.c-price .price-text span:visible + .monthoryear, .exp-addtocart-price span.origprice + .monthoryear, .exp-addtocart-price span.curprice + .monthoryear').html('&nbsp;/ year');
					}

					$('.exp-addtocart-price span.origprice').text(origPrice.replace(/[^,.0-9]/g,''));
					$('.exp-addtocart-price span.curprice').text(curPrice.replace(/[^,.0-9]/g,''));


				});
					
			});
			

			var elementsByProduct = domElements[(_pageBITags && _pageBITags.pageContracts && _pageBITags.pageContracts.ProductInfo ? _pageBITags.pageContracts.ProductInfo.id : '')];
				
			var insertModule = function(){
				if(elementsByProduct[0].action.toLowerCase() === 'prepend'){
					$(elementsByProduct[0].target).prepend(elementsByProduct[0].module);
				} else if(elementsByProduct[0].action.toLowerCase() === 'after'){
					$(elementsByProduct[0].target).after(elementsByProduct[0].module);
				} else if(elementsByProduct[0].action.toLowerCase() === 'before'){
					$(elementsByProduct[0].target).before(elementsByProduct[0].module);
				} else if(elementsByProduct[0].action.toLowerCase() === 'replacewith'){
					$(elementsByProduct[0].target).replaceWith(elementsByProduct[0].module);
				}	
				
				//Callback, if one exists
				if(elementsByProduct[0].callback){
					elementsByProduct[0].callback();
				}
				
				elementsByProduct.shift();
				
				if(elementsByProduct.length){
					insertModule();
				}
			};
			
			if(elementsByProduct && elementsByProduct.length){
				insertModule();
			}		  
      
      /* Mobile Click Events */
      $('body').on('click.exp_selectmenu_button', '.exp-tabselector button', function(e){
        e.stopPropagation();

        $(this).attr('aria-expanded', 'true').next('ul').attr('aria-hidden', 'false');
      });

	$(window).on('click', function(){
		if($('.exp-tabselector button[aria-expanded="true"]').length) {
			$('.exp-tabselector button').attr('aria-expanded', 'false');
			$('.exp-tabselector ul').attr('aria-hidden', 'true');
		}
	}); 

      $('body').on('click.exp_selectmenu_option', '.exp-tabselector .c-menu span', function(){
        var value = $(this).data('value'),
						index = $(this).closest('li').index(),
						selectedText = $.trim($(this).text());

        //Click hidden nav links
        $('#exp-optly-stickyBar div[role="tablist"] a:eq(' + index + ')').trigger('click');

        //Update custom list
        $('span[aria-selected="true"]').attr('aria-selected', 'false');
        $(this).attr('aria-selected', 'true');	

        //Update label & close dropdown
        $('button', $(this).closest('.c-select-menu')).text(selectedText).attr('aria-expanded', 'false').next('ul').attr('aria-hidden', 'true');
      });
      
      
      //Move Here To Help Module
      $('#HereToHelp').insertAfter('#IncludesStructuredListDualColumn');
      
      //Trigger click on review tab
      if(window.location.hash && window.location.hash.toLowerCase() === '#ratings-reviews'){
        $('#exp-optly-stickyBar a[data-tabclass="exp-reviews-tab"]').trigger('click');
      }

      $('body').on('click', '.m-product-detail-hero-product-placement .c-rating a', function(){
        $('#exp-optly-stickyBar a[data-tabclass="exp-reviews-tab"]').trigger('click');
      });
      
      
      // Variation Selector
      (function(){
          var variationOptionArray = [],
          variationListArray = [],
          selectedVariationText = null,
          itemPrice = null,
          itemPriceHTML = null;

          if($('.m-product-detail-hero-product-placement .cli_skuSelector .cli_sku-select-button').length == 1 || $('#skuDropdownList').length){
            $('.m-product-detail-hero-product-placement').addClass('exp_norollup');
            return false;
          }

          $('.m-product-detail-hero-product-placement .cli_skuSelector .cli_sku-select-button').each(function(){
          itemPrice = parseFloat($.trim($(this).data('list-price')));
	  			itemPriceHTML = (itemPrice ? (' - $' + itemPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) : '');

            var tmpBtnTitletext = $(this).data('button-title');
            $(this).data('button-title', tmpBtnTitletext + itemPriceHTML);

          if($(this).hasClass('active')){
            selectedVariationText = $.trim($(this).data('button-title'));
          }

            variationOptionArray.push(['<option ' + ($(this).hasClass('active') ? 'selected="selected"' : '') + ' value="' + $(this).data('availability-id') + '" data-button-title="' + $.trim($(this).data('button-title')) + '">',
                        $.trim($(this).data('button-title')), 
                      '</option>'].join('\n'));

          variationListArray.push(['<li class="c-menu-item" role="presentation"> ',
                      '<span tabindex="-1" role="option" aria-selected="false" data-exp-selected="' + ($(this).hasClass('active') ? 'true' : 'false') + '" data-value="' + $(this).data('availability-id') + '" data-button-title="' + $.trim($(this).data('button-title')) + '">', 
                        $.trim($(this).data('button-title')),
                      '</span>',
                    '</li>'].join('\n'));
          });

	        $('.cli_skuSelector').before(['<div class="c-select exp-c-select">',
	                          '<select class="expSelectControl" aria-label="' + selectedVariationText + '">',
	                              variationOptionArray.join('\n'),
	                          '</select>',
	                        '<div class="c-select-menu f-persist f-border">',
	                          '<button aria-haspopup="true" aria-expanded="false" tabindex="0" class="x-hidden-focus exp-c-select-button">' + selectedVariationText + '</button>',
	                          '<ul class="c-menu' + (variationListArray.length > 5 ? ' f-scroll' : '') + '" aria-hidden="true" role="listbox" tabindex="0">',
	                            variationListArray.join('\n'),
	                          '</ul>',
	                        '</div>',
	                      '</div>'].join('\n'));
	      	})();

	      $('.m-product-detail-hero-product-placement').on('click.exp_selectmenu_button', '.exp-c-select button', function(){
	        //Tmp flag selected item
	        $(this).next('ul').find('span[data-exp-selected="true"]').attr('aria-selected', 'true').removeAttr('data-exp-selected');
	        
	        $(this).attr('aria-expanded', 'true').next('ul').attr('aria-hidden', 'false');
	      });

	      $('.m-product-detail-hero-product-placement').on('click.exp_selectmenu_option', '.exp-c-select .c-menu span', function(){
	        var value = $(this).data('value'),
	          selectedText = $.trim($(this).data('button-title'));

	        //Update hidden variation selector
	        $('.m-product-detail-hero-product-placement .cli_skuSelector .cli_sku-select-button[data-availability-id="' + value + '"]').trigger('click');

	        //Update custom list
	        $('span[aria-selected="true"]').attr('aria-selected', 'false');
	        $(this).attr('aria-selected', 'true');	

	        //Update hidden select
	        $('option[value="true"]', $(this).closest('.exp-c-select').find('.expSelectControl')).removeAttr('selected');
	        $('option[value="' + value + '"]', $(this).closest('.exp-c-select').find('.expSelectControl')).attr('selected', 'selected');

	        //Update label & close dropdown
	        $('button', $(this).closest('.c-select-menu')).text(selectedText).attr('aria-expanded', 'false').next('ul').attr('aria-hidden', 'true');
	      });

      	  var heroBoxShot = '',
      	  		hero2600x400 = '',
      	  		hero1600x400 = '',
      	  		hero1200x340 = '',
      	  		hero875x340 = '',
      	  		hero600x270 = '';
  				
	      if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5DM'){ // 365 Home
	  		heroBoxShot = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1iIy?ver=b54f&w=210&h=210';      
  	  		hero2600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOB?ver=5ea2';
  	  		hero1600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpO?ver=c5cf';
  	  		hero1200x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOz?ver=249d';
  	  		hero875x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpM?ver=e8d8';
  	  		hero600x270 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOx?ver=8759';	  		
	      } else if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5BF'){ //365 Personal
			heroBoxShot = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW15GI?ver=3105&w=210&h=210';     
  	  		hero2600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpU?ver=03c4';
  	  		hero1600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOF?ver=4330';
  	  		hero1200x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpS?ver=46c5';
  	  		hero875x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOD?ver=ca77';
  	  		hero600x270 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpQ?ver=b147';	
	      } else if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5BB'){ //365 University 
	      	heroBoxShot = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6y5A?ver=bc57&w=210&h=210';    
  	  		hero2600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1F0Nj?ver=5db7';
  	  		hero1600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1F0Nh?ver=3610';
  	  		hero1200x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1F0Nf?ver=bf1f';
  	  		hero875x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1F0Nd?ver=489f';
  	  		hero600x270 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1F0Nb?ver=90b1';	
	      } else if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5FC'){ //H&S 2016
	      	heroBoxShot = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1duh?ver=3326&w=210&h=210';     
  	  		hero2600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOr?ver=8c9c';
  	  		hero1600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpE?ver=c73f';
  	  		hero1200x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOp?ver=4d8a';
  	  		hero875x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpC?ver=0422';
  	  		hero600x270 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOn?ver=b4d2';	
	      } else if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5FF'){ //H&B 2016
	      	heroBoxShot = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1dui?ver=6dc1&w=210&h=210';     
  	  		hero2600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpA?ver=ff38';
  	  		hero1600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOl?ver=fede';
  	  		hero1200x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpy?ver=4276';
  	  		hero875x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOj?ver=7a1f';
  	  		hero600x270 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpw?ver=4985';	
	      } else if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5F8'){ //Office Pro 2016
	      	heroBoxShot = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6aCd?ver=95c3&w=210&h=210';     
  	  		hero2600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpK?ver=4d87';
  	  		hero1600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOv?ver=56d4';
  	  		hero1200x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpI?ver=6b84';
  	  		hero875x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOt?ver=f09a';
  	  		hero600x270 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpG?ver=1bc8';	
	      } else if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5FB'){ //H&S 2016 Mac (SAME AS PC)
	      	heroBoxShot = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10FR?ver=da39&w=210&h=210';    
  	  		hero2600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOr?ver=8c9c';
  	  		hero1600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpE?ver=c73f';
  	  		hero1200x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOp?ver=4d8a';
  	  		hero875x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpC?ver=0422';
  	  		hero600x270 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOn?ver=b4d2';
	      } else if(_pageBITags.pageContracts.ProductInfo.id === 'CFQ7TTC0K5FD'){ //H&B 2016 Mac (SAME AS PC)
	      	heroBoxShot = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1duj?ver=d136&w=210&h=210';    
  	  		hero2600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpA?ver=ff38';
  	  		hero1600x400 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOl?ver=fede';
  	  		hero1200x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpy?ver=4276';
  	  		hero875x340 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EFOj?ver=7a1f';
  	  		hero600x270 = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EIpw?ver=4985';		
	      }

			$('#purchaseRegion').prepend(['<div class="exp-backgroundimage">',
										  '<div class="exp-background-gradient"></div>',
			                              '<picture>',
			                                  '<source srcset="' + hero600x270 + '" media="(max-width:600px)">',
			                                  '<source srcset="' + hero875x340 + '" media="(min-width:601px) and (max-width:875px)">',
			                                  '<source srcset="' + hero1200x340 + '" media="(min-width:876px) and (max-width:1200px)">',
			                                  '<source srcset="' + hero1600x400 + '" media="(min-width:1201px) and (max-width:1600px)">',
			                                  '<source srcset="' + hero2600x400 + '" media="(min-width:1601px)">',
			                                  '<img src="' + hero1600x400 + '">',
			                              '</picture>',
			                            '</div>'].join('\n')).promise().done(function(){
				lazySizes.init();
			});

			                            

    	  	$('.m-product-detail-hero-product-placement > *').wrapAll('<div class="exp-prod-info" />');
      	  
			$('.m-product-detail-hero-product-placement').prepend('<div class="exp-image"><img src="'+ heroBoxShot + '" /></div>');  

	      
	      $('.context-configuration-buttons, #srv_purchaseCTA').wrapAll('<div class="exp-buyactions" />');
	      
	      //Update buy button text
	      $('.context-configuration-buttons .c-label').text('Choose your product:');

    	  var tmpSelectedProduct = '';
	      $('.context-configuration-buttons button.exp-c-select-button').on('click', function() {
			tmpSelectedProduct = $(this).text().trim();

			window['optimizely'].push({
				type: "event",
				eventName: "store_us_dropdown_opened"
			});
	      });


	      // MODIFIED FROM ORIGINAL
	  	$('.context-configuration-buttons button.cli_sku-select-button').on('click', function() {
			window['optimizely'].push({
				type: "event",
				eventName: "store_us_product_changed"
			});
	  	});
	   
	  	/* TMP REPLACED
	      $('.context-configuration-buttons .c-menu-item span').on('click', function(){
	      	if(tmpSelectedProduct != $(this).text().trim()) {
				window['optimizely'].push({
					type: "event",
					eventName: "store_us_product_changed"
				});
	      	}
	      });
		*/

			var screenShotImages = '';
			$('.m-product-detail-hero-carousel .c-group:first li[id*="hero-slide"] picture img').each(function(){

			if(typeof $(this).data('src') === 'undefined') {
				screenShotImages += '<img data-grid="col-4" src="' + $(this).attr('src') + '" alt="' + $(this).attr('alt') + '" />';
			} else {
				screenShotImages += '<img data-grid="col-4" src="' + $(this).data('src') + '" alt="' + $(this).attr('alt') + '" />';
			}

			}).promise().done(function() {
				$('<div id="exp-screen-shots"><div class="m-rich-content-block context-ucx" data-grid="col-12"><h4 class="x-hidden-focus">Screen shots</h4>' + screenShotImages + '</div></div>').insertAfter('#HereToHelp'); 
			});

			$('.context-configuration-buttons .cli_skuSelector button.cli_sku-select-button').each(function(){
				var displayedPrice = $(this).attr('data-rt-price');
				$(this).append(' - $' + displayedPrice)
			});

	      	// DECORATE DOM ELEMENTS
			utils.waitUntil(function() {
			  return typeof awa != 'undefined' && awa.isInitialized === true;
			}).then(function() {
				try {
					var triggerDecoration = function(target){
						if(window.CustomEvent){
							event = new CustomEvent('decorate', {'bubbles': true });
						} else {
							event = document.createEvent('CustomEvent');
							event.initCustomEvent('decorate', true, true, { some: 'data' });
						}

						target.dispatchEvent(event);
						
						require(['jsll'], function(jsll) {
							jsll.ct.captureContentUpdate({ timings: { didDeferExecTimeout: window._pageTimings.didDeferExecTimeout } });
						});
					};
					triggerDecoration(document.getElementById('mainArea'));
				}catch(e) {
					console.log(e);
				}
			});
		});

		// ADDING MONTH OR YEAR INITALLY
	    window.setTimeout(function () {
			if($('.m-product-detail-hero-product-placement .cli_skuSelector .cli_sku-select-button.active').attr('data-button-title').toLowerCase().indexOf('month') !== -1) {
				$('<span class="monthoryear">&nbsp;/ month</span>').insertAfter('.c-price .price-text span:visible, .exp-addtocart-price span.origprice, .exp-addtocart-price span.curprice');
			} else if($('.m-product-detail-hero-product-placement .cli_skuSelector .cli_sku-select-button.active').attr('data-button-title').toLowerCase().indexOf('year') !== -1) {
				$('<span class="monthoryear">&nbsp;/ year</span>').insertAfter('.c-price .price-text span:visible, .exp-addtocart-price span.origprice, .exp-addtocart-price span.curprice');
			}

			// UPDATING BUTTON TEXT
			$('.context-configuration-buttons button.c-select-button').each(function(){
				if(typeof $(this).attr('data-list-price') != 'undefined') { 
					var listPrice = $(this).attr('data-list-price'),
						buttonTitle = $(this).attr('data-button-title'),
						tmpHtml = $(this).html();

					if(buttonTitle.toLowerCase().indexOf('month') !== -1) {
						tmpHtml = tmpHtml.replace(buttonTitle, '');
						tmpHtml = tmpHtml.replace('- $' + listPrice, '$' + listPrice + ' per month');
						$(this).html(tmpHtml);  
					} else if(buttonTitle.toLowerCase().indexOf('year') !== -1) {
						tmpHtml = tmpHtml.replace(buttonTitle, '');
						tmpHtml = tmpHtml.replace('- $' + listPrice, '$' + listPrice + ' per year');
						$(this).html(tmpHtml); 
					}

				};
			});
	    }, 350);
	});
  
  utils.waitForElement('#RatingReview').then(function(){
    setTimeout(function(){
      $('#mainArea').addClass('exp-reviews-loaded');
    }, 1500);

    setTimeout(function(){
      if(!$('#mainArea.exp-reviews-loaded').length){
      $('#mainArea').addClass('exp-reviews-loaded');
      }
    }, 2500);
  });
});
}}, {"value": "<style>/* Hero adjustments */\n#purchaseRegion{\n  position: relative;\n  min-height: 250px;\n}\n#BuyBox{\n  max-width: 1600px !important;\n  margin: 0 auto !important; \n}\n#mainArea{\n  position: relative;\n}\n.m-product-detail-hero{\n  position: relative;\n  padding: 0;\n}\n.m-product-detail-hero .m-product-detail-hero-carousel{\n  display: none !important;\n}\n.m-product-detail-hero .m-product-detail-hero-product-placement{\n  position: absolute;\n  top: 0;\n  padding: 0;\n  bottom: -50px;\n  top: inherit;\n  width: 75%;\n}\n.m-product-detail-hero .c-carousel{\n display: none !important; \n}\n.m-product-detail-hero .m-product-detail-hero-product-placement .c-heading-5,\n.m-product-detail-hero .m-product-detail-hero-product-placement .c-paragraph-3{\n display: none !important; \n}\n.m-product-detail-hero .exp-immersive{\n    margin: 0 auto;\n    display: block;\n}\n.m-product-detail-hero .exp-image{\n  float: left;\n  width: 23.2%;\n  margin-left: 30px;\n  position: relative;\n  top: -60px;\n  max-width: 210px; \n}\n.m-product-detail-hero .exp-image img{\n     width: 100%;\n    height: auto;\n}\n.m-product-detail-hero .exp-prod-info{\n  float: left;\n  width: 64.86%;\n  margin-left: 20px;\n}\n.exp-buyactions .context-configuration-buttons {\n  padding: 0;\n  float: left;\n}\n.exp-buyactions #srv_purchaseCTA{\n  float: left;\n  padding: 0;\n  margin-top: 24px;\n  margin-left: 10px;\n}\n.exp-backgroundimage{\n margin-bottom: 100px; \n}\n.exp-backgroundimage img{\n  width: 100%;\n  height: auto; \n}\n@media only screen and (min-width: 1136px){\n   .m-product-detail-hero .m-product-detail-hero-product-placement .context-buy-box-badge+h1,\n  .m-product-detail-hero .m-product-detail-hero-product-placement .c-meta-text{\n   color: #fff; \n  }\n  .m-product-detail-hero .c-rating .c-glyph:after{\n   color:#fff; \n  } \n}\n@media only screen and (max-width: 1135px){\n .m-product-detail-hero .m-product-detail-hero-product-placement{\n   position: static;\n }\n  .m-product-detail-hero .exp-image img{\n    position: relative;\n    top: -50px;\n }\n  .exp-backgroundimage{\n    margin-bottom: 15px; \n  }\n}\n\n@media only screen and (max-width: 875px){\n  .m-product-detail-hero .exp-image{\n    top: 0; \n  }\n  .m-product-detail-hero .exp-image img{\n    top: 0; \n  }\n}\n@media only screen and (min-width: 501px) and (max-width: 875px){\n  .exp-buyactions{\n    position: absolute;\n    left: 30px;\n    margin-top: 20px; \n  }\n  .m-product-detail-hero .m-product-detail-hero-product-placement{\n    margin-bottom: 75px; \n  }\n}\n@media only screen and (max-width: 575px){\n .m-product-detail-hero .exp-prod-info{\n   width: 62.86%; \n }\n}\n@media only screen and (max-width: 500px){\n  .m-product-detail-hero .exp-image{\n    width: 50%;\n  }\n  .m-product-detail-hero .exp-prod-info{\n   width: 100%; \n  }\n  .exp-buyactions #srv_purchaseCTA{\n    margin-top: 0;\n    margin-left: 0;\n  }\n  .m-product-detail-hero .m-product-detail-hero-product-placement .context-configuration-buttons{\n    padding-bottom: 10px; \n  }\n}\n\n/* Tabs */\n#mainRegion [id^=\"Feature\"],\n#mainRegion #IncludesStructuredListDualColumn,\n#mainRegion #RequirementsStructuredList,\n#mainRegion #HereToHelp,\n#mainRegion #FAQ,\n#mainRegion #Footnotes,\n#mainRegion .exp-optly-comparechart,\n#mainRegion #exp-screen-shots {\n  display: none;\n}\n#mainRegion #RatingReview{\n height: 0;\n overflow: hidden;\n width: 100%;\n}\n.exp-overview-tab #mainRegion [id^=\"Feature\"],\n.exp-overview-tab #mainRegion #IncludesStructuredListDualColumn,\n.exp-overview-tab #mainRegion #Footnotes,\n.exp-overview-tab #mainRegion #HereToHelp,\n.exp-overview-tab #mainRegion #exp-screen-shots {\n  display: block;\n}\n.exp-requirements-tab #mainRegion #RequirementsStructuredList{\n  display: block;\n}\n.exp-faq-tab #mainRegion #FAQ{\n  display: block;\n}\n.exp-reviews-tab.exp-reviews-loaded #mainRegion #RatingReview{\n height: inherit;\n overflow: visible;\n}\n.exp-compare-tab #mainRegion .exp-optly-comparechart{\n  display: block;\n}\n#mainRegion #FAQ h3{\n  font-weight: bold; \n}\n\n/* Dropdown */\n.m-product-detail-hero-product-placement .cli_skuSelector{\n  /*display: none !important; */\n}\n.m-product-detail-hero-product-placement.exp_norollup .cli_skuSelector{\n  display: block !important; \n}\n.c-select-menu{\n background-color: #fff; \n}\n.c-select-menu > .exp-c-select-button{\n  transform: initial;\n  margin-left: 0 !important;\n  padding-top:7px;\n  padding-bottom:7px;\n}\n.c-select-menu > .exp-c-select-button span{\n display: none; \n}\n.c-select.exp-c-select:after{\n  display: none !important; \n}\n.c-select-menu > .exp-c-select-button:after{\n  padding-top: 0 !important;\n  top: 16px; \n}\n.c-select-menu.f-border [aria-expanded]:hover{\n  border: 1px solid rgba(0,0,0,.8);\n}\n.c-select-menu .c-menu{\n  width: inherit;\n  min-width: 296px;\n}\n.c-select-menu .c-menu li span{\n white-space: nowrap; \n}\n\n\n\n\n\n.exp-product-cfq7ttc0k5fb .exp-buyactions #srv_purchaseCTA,\n.exp-product-cfq7ttc0k5fb .exp-buyactions #srv_purchaseCTA,\n.exp-product-cfq7ttc0k5f8 .exp-buyactions #srv_purchaseCTA,\n.exp-product-cfq7ttc0k5ff .exp-buyactions #srv_purchaseCTA,\n.exp-product-cfq7ttc0k5fc .exp-buyactions #srv_purchaseCTA,\n.exp-product-cfq7ttc0k5bb .exp-buyactions #srv_purchaseCTA{\n  margin-left: 0;\n  margin-top: 0;\n}\n.exp-product-cfq7ttc0k5fb #purchaseRegion,\n.exp-product-cfq7ttc0k5fb #purchaseRegion,\n.exp-product-cfq7ttc0k5f8 #purchaseRegion,\n.exp-product-cfq7ttc0k5ff #purchaseRegion,\n.exp-product-cfq7ttc0k5fc #purchaseRegion,\n.exp-product-cfq7ttc0k5bb #purchaseRegion{\n  margin-bottom: 40px;\n}\n.exp-product-cfq7ttc0k5fb .m-product-detail-hero .m-product-detail-hero-product-placement,\n.exp-product-cfq7ttc0k5fb .m-product-detail-hero .m-product-detail-hero-product-placement,\n.exp-product-cfq7ttc0k5f8 .m-product-detail-hero .m-product-detail-hero-product-placement,\n.exp-product-cfq7ttc0k5ff .m-product-detail-hero .m-product-detail-hero-product-placement,\n.exp-product-cfq7ttc0k5fc .m-product-detail-hero .m-product-detail-hero-product-placement,\n.exp-product-cfq7ttc0k5fd .m-product-detail-hero .m-product-detail-hero-product-placement{\n  bottom: -39px;\n}\n#Feature0 .exp-office-icons h2 {\n    margin-bottom: 3px;\n}\n#Feature0 .exp-product-description h2 {\n    margin-bottom: 10px;\n}\n#Feature0 .exp-icon-container {\n    width: 171px;\n    /*\n    position: relative;\n  */\n    text-align: center;\n    float: left;\n    height: 115px;\n    padding: 6px;\n}\n\n@media only screen and (max-width: 701px){\n  #Feature0 .exp-icon-container {\n    width: 137px;\n  }\n}\n\n\n/*\n#Feature0 .exp-icon-container p {\n    display: inline-block;\n    position: absolute;\n    top: calc(50%);\n    -ms-transform: translateY(-50%);\n    transform: translateY(-50%);\n    left: 50px;\n}\n*/\n.exp-office-icons .exp-icon-container {\n  display: none;\n}\n\n/* 365 home */\n.exp-product-cfq7ttc0k5dm .exp-office-icons .word-icon,\n.exp-product-cfq7ttc0k5dm .exp-office-icons .excel-icon,\n.exp-product-cfq7ttc0k5dm .exp-office-icons .powerpoint-icon,\n.exp-product-cfq7ttc0k5dm .exp-office-icons .onenote-icon,\n.exp-product-cfq7ttc0k5dm .exp-office-icons .outlook-icon,\n.exp-product-cfq7ttc0k5dm .exp-office-icons .access-icon,\n.exp-product-cfq7ttc0k5dm .exp-office-icons .publisher-icon,\n.exp-product-cfq7ttc0k5dm .exp-office-icons .onedrive-icon,\n.exp-product-cfq7ttc0k5dm .exp-office-icons .skype-icon {\n  display: block;\n}\n\n/* 365 personal */\n.exp-product-cfq7ttc0k5bf .exp-office-icons .word-icon,\n.exp-product-cfq7ttc0k5bf .exp-office-icons .excel-icon,\n.exp-product-cfq7ttc0k5bf .exp-office-icons .powerpoint-icon,\n.exp-product-cfq7ttc0k5bf .exp-office-icons .onenote-icon,\n.exp-product-cfq7ttc0k5bf .exp-office-icons .outlook-icon,\n.exp-product-cfq7ttc0k5bf .exp-office-icons .access-icon,\n.exp-product-cfq7ttc0k5bf .exp-office-icons .publisher-icon,\n.exp-product-cfq7ttc0k5bf .exp-office-icons .onedrive-icon,\n.exp-product-cfq7ttc0k5bf .exp-office-icons .skype-icon {\n  display: block;\n}\n\n/* 365 university */\n.exp-product-cfq7ttc0k5bb .exp-office-icons .word-icon,\n.exp-product-cfq7ttc0k5bb .exp-office-icons .excel-icon,\n.exp-product-cfq7ttc0k5bb .exp-office-icons .powerpoint-icon,\n.exp-product-cfq7ttc0k5bb .exp-office-icons .onenote-icon,\n.exp-product-cfq7ttc0k5bb .exp-office-icons .outlook-icon,\n.exp-product-cfq7ttc0k5bb .exp-office-icons .access-icon,\n.exp-product-cfq7ttc0k5bb .exp-office-icons .publisher-icon,\n.exp-product-cfq7ttc0k5bb .exp-office-icons .onedrive-icon,\n.exp-product-cfq7ttc0k5bb .exp-office-icons .skype-icon {\n  display: block;\n}\n\n/* h&s 2016 */\n.exp-product-cfq7ttc0k5fc .exp-office-icons .word-icon,\n.exp-product-cfq7ttc0k5fc .exp-office-icons .excel-icon,\n.exp-product-cfq7ttc0k5fc .exp-office-icons .powerpoint-icon,\n.exp-product-cfq7ttc0k5fc .exp-office-icons .onenote-icon {\n  display: block;\n}\n\n/* h&b 2016 */\n.exp-product-cfq7ttc0k5ff .exp-office-icons .word-icon,\n.exp-product-cfq7ttc0k5ff .exp-office-icons .excel-icon,\n.exp-product-cfq7ttc0k5ff .exp-office-icons .powerpoint-icon,\n.exp-product-cfq7ttc0k5ff .exp-office-icons .onenote-icon,\n.exp-product-cfq7ttc0k5ff .exp-office-icons .outlook-icon {\n  display: block;\n}\n\n/* office pro 2016 */\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .word-icon,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .excel-icon,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .powerpoint-icon,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .onenote-icon,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .outlook-icon,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .access-icon,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .publisher-icon,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .onedrive-icon,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons .skype-icon {\n  display: block;\n}\n\n/* h&s 2016 mac */\n.exp-product-cfq7ttc0k5fb .exp-office-icons .word-icon,\n.exp-product-cfq7ttc0k5fb .exp-office-icons .excel-icon,\n.exp-product-cfq7ttc0k5fb .exp-office-icons .powerpoint-icon,\n.exp-product-cfq7ttc0k5fb .exp-office-icons .onenote-icon {\n  display: block;\n}\n\n/* h&b 2016 mac */\n.exp-product-cfq7ttc0k5fd .exp-office-icons .word-icon,\n.exp-product-cfq7ttc0k5fd .exp-office-icons .excel-icon,\n.exp-product-cfq7ttc0k5fd .exp-office-icons .powerpoint-icon,\n.exp-product-cfq7ttc0k5fd .exp-office-icons .onenote-icon,\n.exp-product-cfq7ttc0k5fd .exp-office-icons .outlook-icon {\n  display: block;\n}\n.exp-product-cfq7ttc0k5fd .exp-office-icons sup {\n  display: none;\n}\n\n\n/* SUP SUBTEXT */\n/*\n.exp-product-cfq7ttc0k5dm #Feature0 .exp-icon-container.access-icon p,\n.exp-product-cfq7ttc0k5dm #Feature0 .exp-icon-container.publisher-icon p,\n.exp-product-cfq7ttc0k5bf #Feature0 .exp-icon-container.access-icon p,\n.exp-product-cfq7ttc0k5bf #Feature0 .exp-icon-container.publisher-icon p,\n.exp-product-cfq7ttc0k5bb #Feature0 .exp-icon-container.access-icon p,\n.exp-product-cfq7ttc0k5bb #Feature0 .exp-icon-container.publisher-icon p, \n.exp-product-cfq7ttc0k5f8 #Feature0 .exp-icon-container.access-icon p,\n.exp-product-cfq7ttc0k5f8 #Feature0 .exp-icon-container.publisher-icon p {\n  top: calc(35%);\n}\n.exp-product-cfq7ttc0k5dm .exp-office-icons sup,\n.exp-product-cfq7ttc0k5bf .exp-office-icons sup,\n.exp-product-cfq7ttc0k5bb .exp-office-icons sup,\n.exp-product-cfq7ttc0k5f8 .exp-office-icons sup {\n  display: inline-block;\n  position: absolute;\n  top: calc(65%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n  left: 50px;\n}\n*/\n\n.exp-office-icons p {\n font-size: 13px;\n margin-top: 5px;\n}\n\n\n#exp-screen-shots img {\n  margin: 15px 0;\n}\n\n@media only screen and (min-width: 1136px){\n  .exp-background-gradient {\n    height: calc(100% - 100px);\n    width: 100%;\n    position: absolute;\n    top: 0;\n    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,.5) 86%,rgba(0,0,0,.5) 0%);\n  }\n}\n\n\n/* This Template Override */\n.m-product-detail-hero-product-placement .cli_skuSelector{\n  display: block !important;\n}\n#mainRegion {\n  margin-top: 50px;\n}\n.m-product-detail-hero .m-product-detail-hero-product-placement{\n  bottom: -50px;\n}\n.m-product-detail-hero .m-product-detail-hero-product-placement .c-price {\n  padding-bottom: 10px;\n}\n.m-product-detail-hero .m-product-detail-hero-product-placement .c-group {\n  padding-bottom: 8px;\n}\n.exp-buyactions #srv_purchaseCTA {\n    float: none;\n    margin-top: 0;\n    margin-left: 0\n}\n.m-product-detail-hero .m-product-detail-hero-product-placement .context-configuration-buttons {\n  padding-bottom: 10px;\n}\n\n@media only screen and (min-width: 876px){\n.m-product-detail-hero .m-product-detail-hero-product-placement{ \n      width: 100%;\n}\n}\n\n.exp-buyactions .context-configuration-buttons {\n  float: none;\n}\n\n.context-configuration-buttons .exp-c-select,\n.context-configuration-buttons .expSelectControl,\n.context-configuration-buttons .c-select-menu {\n  display: none;\n}\n\n\n.exp-product-cfq7ttc0k5bb .m-product-detail-hero .m-product-detail-hero-product-placement {\n  bottom: -40px;\n}\n\n.exp-product-cfq7ttc0k5dm .m-product-detail-hero .m-product-detail-hero-product-placement,\n.exp-product-cfq7ttc0k5bf .m-product-detail-hero .m-product-detail-hero-product-placement {\n  bottom: -69px;\n}\n\n.c-select-menu.f-border [aria-expanded]:focus {\n  border: 1px solid #0067b8;\n}\n\n/* STAR RATINGS */\n@media only screen and (min-width: 1136px){\n  .m-product-detail-hero .c-rating[data-value] div:after {\n      color: #fff;\n  }\n  .m-product-detail-hero .c-rating[data-value] div:before {\n    color: rgba(183,183,183,.7);\n  }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "E9318476-15A2-46B3-8B90-91C104D1CCD8"}]}], "name": "Template B - Tabs - w/Standard Buttons"}], "audienceIds": null, "changes": null, "id": "8576811236", "integrationSettings": null}], "id": "8581191652", "weightDistributions": null, "name": "PDP Immersive Hero (Office) [13443389] - JustinW AdamG", "groupId": null, "commitId": "8797431934", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"dependencies": [], "type": "custom_code", "id": "D4EE1D41-7A47-4C3E-B6FB-8B926DC51B44", "value": function($){window['optimizely'] = window['optimizely'] || [];

/* Window Scrolled */
var windowScrolled = false;
jQuery(window).on('scroll', function(){
  if(!windowScrolled){
    windowScrolled = true;
    window['optimizely'].push({
      type: "event",
      eventName: "store_us_windowscrolled"
    });
  }
});
}}, {"value": "<style>#exp-optly-stickyBar {\n  margin-top: 50px;\n  height: 72px;\n  position: relative;\n}\n#exp-optly-stickyBar .c-pivot {\n  border-top: 1px solid #cacaca;\n  height: 72px;\n  text-align: center;\n  background-color: #fff;\n}\n#exp-optly-stickyBar.exp-stuck .c-pivot {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 100;\n  margin-top: 0;\n  padding: 0 48px;\n}\n#exp-optly-stickyBar .c-pivot > div[role=\"tablist\"] {\n  text-align: center;\n  display: inline-block;\n  padding: 18px 0;\n  height: 72px;\n  width: calc(100% - 457px);\n}\n\n/* Modified for month and year */\n#exp-optly-stickyBar .c-pivot > div[role=\"tablist\"] {\n  width: calc(100% - 480px);\n}\n\n#exp-optly-stickyBar .c-pivot .f-active {\n  border-bottom: 0 !important;\n  font-weight: bold;\n}\n#exp-optly-stickyBar .c-pivot > div > a {\n  padding: 0 23px;\n  font-size: 16px;\n}\n#exp-optly-stickyBar .c-pivot > div > a:first-child {\n  padding-left: 0;\n}\n#exp-optly-stickyBar .exp-skuinfo {\n  width: 200px;\n  float: left;\n  height: 72px;\n  text-align: left;\n  white-space: initial;\n  position: relative;\n  overflow: visible;\n  display: none;\n}\n#exp-optly-stickyBar.exp-stuck .exp-skuinfo {\n  display: inherit;\n}\n#exp-optly-stickyBar .exp-skuinfo-wrapper {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#exp-optly-stickyBar .exp-skuinfo h5 {\n  font-size: 1.2rem;\n}\n#exp-optly-stickyBar .exp-skuinfo p {\n  font-size: .75rem;\n  margin-top: 2px;\n}\n#exp-optly-stickyBar .exp-addtocart {\n  float: right;\n  width: 257px;\n  height: 72px;\n  display: none;\n  position: relative;\n}\n\n/* Month and Year */\n#exp-optly-stickyBar .exp-addtocart {\n    width: 280px;\n}\n\n#exp-optly-stickyBar.exp-stuck .exp-addtocart {\n  display: inherit;\n}\n#exp-optly-stickyBar .exp-addtocart button {\n  height: 36px;\n  margin-top: 20px;\n  float: right;\n}\n#exp-optly-stickyBar .exp-addtocart-price {\n  text-align: right;\n  width: calc(100% - 192px);\n  margin-right: 10px;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#exp-optly-stickyBar .exp-addtocart-price s {\n  display: none;\n}\n#exp-optly-stickyBar .exp-addtocart-price s.has-discount {\n  display: block;\n}\n#exp-optly-stickyBar .exp-addtocart-price .out-of-stock {\n  display: none;\n}\n@media only screen and (max-width: 1400px) {\n  #exp-optly-stickyBar .c-pivot > div > a {\n    padding: 0 12px;\n  }\n}\n#exp-optly-stickyBar .exp-tabselector {\n  overflow: visible;\n  width: auto;\n  display: none;\n}\n@media only screen and (max-width: 1280px) {\n  #exp-optly-stickyBar .c-pivot div[role=\"tablist\"] {\n    display: none;\n  }\n  #exp-optly-stickyBar .exp-tabselector {\n    display: block;\n    position: absolute;\n    z-index: 2;\n    top: 0px;\n    left: 20px;\n  }\n  #exp-optly-stickyBar .exp-tabselector ul.c-menu {\n    bottom: inherit !important;\n    top: 100% !important;\n    left: 0 !important;\n  }\n}\n@media only screen and (max-width: 1280px) and (min-width: 651px) {\n  #exp-optly-stickyBar.exp-stuck .exp-tabselector {\n    margin-left: 230px;\n  }\n}\n@media only screen and (max-width: 750px) {\n  #exp-optly-stickyBar.exp-stuck .exp-skuinfo {\n    display: none;\n  }\n  #exp-optly-stickyBar.exp-stuck .exp-tabselector{\n   \tmargin-left: 0; \n  }\n}\n@media only screen and (max-width: 550px) {\n  #exp-optly-stickyBar.exp-stuck .exp-addtocart {\n    display: none;\n  }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "DF2DC765-55C6-4590-BBF9-0FBA25E206B3"}]}], "groups": [], "views": [{"category": "category", "staticConditions": ["and", ["or", {"type": "url", "value": "/en-us/store/b/office", "match": "substring"}]], "name": "Category: Office", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "7855979098_category_office", "id": "8386951810"}, {"category": "product_detail", "staticConditions": ["and", ["or", {"type": "url", "value": "/en-us/store/d/", "match": "substring"}, {"type": "url", "value": "/en-us/store/p/", "match": "substring"}]], "name": "PDP: (All Products)", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "7855979098_pdp_global", "id": "8387122500"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/en-us/store/", "match": "substring"}], ["not", ["or", {"type": "url", "value": "/en-us/store/buy/(?!interstitial)(?!cart)(.*)", "match": "regex"}, {"type": "url", "value": "route=", "match": "substring"}]]], "name": "All Catalog (Non-PCF)", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "7855979098_all_catalog_nonpcf", "id": "8388833611"}, {"category": "home", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.microsoft.com/en-us/store/b/home", "match": "simple"}]], "name": "Homepage", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "7855979098_homepage", "id": "8393304636"}, {"category": "product_detail", "staticConditions": ["and", ["or", {"type": "url", "value": "/en-us/store/p/", "match": "substring"}]], "name": "PDP: Apps & Games /p/", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "7855979098_pdp_apps__games_p", "id": "8394533371"}, {"category": "product_detail", "staticConditions": ["and", ["or", {"type": "url", "value": "/en-us/store/d/", "match": "substring"}]], "name": "PDP : Standard Products /d/", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "7855979098_pdp__standard_products_d", "id": "8399590490"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/en-us/store/", "match": "substring"}], ["not", ["or", {"type": "url", "value": "/en-us/store/(buy|buy/cart|buy/interstitial).*", "match": "regex"}, {"type": "url", "value": "route=", "match": "substring"}]]], "name": "Store: Catalog (Non PCF)", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "8410234061_store_catalog_non_pcf", "id": "8414588432"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/en-us/store/", "match": "substring"}, {"type": "url", "value": "https://www.microsoft.com/en-us/", "match": "simple"}, {"type": "url", "value": "https://onestore-ppe.microsoft.com/en-us/", "match": "simple"}, {"type": "url", "value": "/en-us/store/d/", "match": "substring"}, {"type": "url", "value": "/en-us/store/p/", "match": "simple"}], ["not", ["or", {"type": "url", "value": "/en-us/store/(buy|buy/cart|buy/interstitial).*", "match": "regex"}, {"type": "url", "value": "route=", "match": "substring"}]]], "name": "MSCOM: Homepage + Store: Catalog (Non PCF) [en-us]", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "8410234061_mscom_homepage__store_catalog_non_pcf", "id": "8431891932"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/en-us/store/d/(.*?)/8TXJ08Q9LXDT", "match": "regex"}]], "name": "PDP: Surface Book", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "7855979098_pdp_surface_book", "id": "8443532016"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/en-us/store/d/surface/8TXJ08Q9LXDT", "match": "substring"}, {"type": "url", "value": "/en-us/store/d/surface/8NKT9WTTRBJK", "match": "substring"}, {"type": "url", "value": "/en-us/store/d/product/8NKT9WTTRBJK", "match": "substring"}, {"type": "url", "value": "/en-us/store/d/surface-book/8TXJ08Q9LXDT", "match": "substring"}, {"type": "url", "value": "/en-us/store/d/(.*?)/8TXJ08Q9LXDT", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/8NKT9WTTRBJK", "match": "regex"}]], "name": "PDP: Surface Book & Surface Pro", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "7855979098_pdp_surface_book_surface_pro__surface_studio_v2", "id": "8466196703"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/en-us/store/d/(.*?)/[cC][fF][qQ]7[tT][tT][cC]0[kK]5[dD][mM]", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/[cC][fF][qQ]7[tT][tT][cC]0[kK]5[bB][fF]", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/[cC][fF][qQ]7[tT][tT][cC]0[kK]5[bB][bB]", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/[cC][fF][qQ]7[tT][tT][cC]0[kK]5[fF][cC]", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/[cC][fF][qQ]7[tT][tT][cC]0[kK]5[fF][fF]", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/[cC][fF][qQ]7[tT][tT][cC]0[kK]5[fF]8", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/[cC][fF][qQ]7[tT][tT][cC]0[kK]5[fF][bB]", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/[cC][fF][qQ]7[tT][tT][cC]0[kK]5[fF][dD]", "match": "regex"}]], "name": "PDP: Office Products (Home, Personal, University, H&S, H&B, Pro 2016, H&S 2016 Mac, H&B 2016 Mac)", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "7855979098_office_products", "id": "8498890748"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/en-us/store/d/(.*?)/8[wW]68[vV][xX][xX][mM][nN]260", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/928[lL]8[fF]7[zZ]0[kK][dD]2", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/92[kK]8509[hH][dD][kK][qQ]4", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/8[wW]4[vV][pP][pP][gG][jJ]3[bB][bB][nN]", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/8[nN]64[lL]3[wW][sS][kK][rR][xX]1", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/94[cC][gG][pP]40[rR][dD][pP]2[bB]", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/8[vV][cC][wW]8[gG][lL][nN]9[vV][rR][fF]", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/8[tT]2[dD]538[wW][cC]7[mM][nN]", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/8[nN][jJ]1[cC][kK][vV][pP][hH][jJ][xX]5", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/8[zZ][tT]6[wW][gG][zZ][sS][gG]5[xX]9", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/8[vV]8[fF][tT][tT]2[fF][pP][gG][nN]7", "match": "regex"}]], "name": "[US] - PDP: Xbox CrossSell Products [Xbox Controllers]", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "7855979098_us__pdp_xbox_crosssell_products_12247038", "id": "8510742385"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.microsoft.com/en-us/store/b/home", "match": "simple"}]], "name": "Homepage (jQuery Polling)", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "7855979098_homepage_no_polling", "id": "8520000371"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.microsoft.com/en-us/store/b/windows", "match": "simple"}]], "name": "Category: Windows", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "7855979098_category_windows", "id": "8562534471"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/en-us/store/d/(.*?)/[cC][fF][qQ]7[tT][tT][cC]0[kK]5[bB][fF]", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/[cC][fF][qQ]7[tT][tT][cC]0[kK]5[dD][mM]", "match": "regex"}, {"type": "url", "value": "/en-us/store/d/(.*?)/[dD][fF]77[xX]4[dD]43[rR][kK][tT]", "match": "regex"}]], "name": "[US] - PDP: O365 Personal, O365 Home, Win 10 Pro", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "7855979098_us__jp__pdp_office_365_and_win_10_12925122", "id": "8579008156"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.microsoft.com/en-us/store/b/virtualreality", "match": "simple"}]], "name": "[US] - Category: Virtual Reality", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "7855979098_us__category_virtual_reality", "id": "8585011023"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/en-us/store/config/(.*?)/8[tT][xX][jJ]08[qQ]9[lL][xX][dD][tT]", "match": "regex"}, {"type": "url", "value": "/en-us/store/config/(.*?)/8[nN][kK][tT]9[wW][tT][tT][rR][bB][jJ][kK]", "match": "regex"}]], "name": "[US] - CONFIG: Surface Book & Surface Pro", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return typeof jQuery !== undefined;
}, "apiName": "7855979098_us__pdp_surface_book__surface_pro", "id": "8637413135"}], "snippetId": "8410643354", "projectJS": function(){window.optimizely = window.optimizely || [];

window.optimizely.push({
    type: "addListener",
    filter: {
        type: "lifecycle",
        name: "campaignDecided"
    },
    handler: function (event) {
    	// Homepage - above the fold - Redesign 
    	if(event.data.campaign.id == "8626085240") {
        window.optimizely.push({
          type: "event",
          eventName: "store_us_userbucketed"
        });
      }
    	// Office Category: Original vs In-Page Sub-Category 
    	if(event.data.campaign.id == "8632573147") {
        window.optimizely.push({
          type: "event",
          eventName: "store_us_userbucketed"
        });
      }
    }
});

window.optimizely.push(["setCookieExpiration", 390]);

//Engagement
window.optimizely.push({
    type: "addListener",
    filter: {
        type: "lifecycle",
        name: "campaignDecided"
    },
    handler: function () {
      var optly_engagement = function(){
        window.optimizely.push({
          type: "event",
          eventName: "store_us_engagement"
        });

        document.removeEventListener('click', optly_engagement);
      };

			document.addEventListener('click', optly_engagement);
    }
});

//JSLL Cookie Logging
window.optimizely.push({
    type: "addListener",
    filter: {
        type: "lifecycle",
        name: "campaignDecided"
    },
    handler: function () {
      try{
        if(window.optimizely){
          var saveCookie = function(name, value, daysToLive) {
          var expires = "";
          if (daysToLive) {
            var date = new Date();
            date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
          }
          document.cookie = name + "=" + value + expires + "; path=/";
          };

          var transformObject = function(obj) {
          var tmpObj = {};

          if(typeof obj !== 'object'){
            return null;
          }				

          for(var key in obj){
            tmpObj[key] = {
            'experimentName' : obj[key].experimentName,
            'id' : obj[key].id,
            'variation' : obj[key].variation
            };
          }	

          return encodeURIComponent(JSON.stringify(tmpObj).replace(/#/g,''));
          };

          var optimizelyAPIStorage = {
          'api' : optimizely.get('state').getExperimentStates(),
          'storage' : 'ms-optimizely_experimentmap'
          };

          saveCookie(optimizelyAPIStorage.storage, transformObject(optimizelyAPIStorage.api));
        }
      } catch(e){
      //Fail
      }
    }
});


//Generate Keys for offline Events in PCF
window.optimizely.push({
    type: "addListener",
    filter: {
        type: "lifecycle",
        name: "campaignDecided"
    },
    handler: function () {
        try{
          if(window.optimizely && window.localStorage){
            var getStoreLocale = function(){
              var urlPath = window.location.pathname,
                locale = (urlPath.indexOf('/') !== -1 ? urlPath.split('/') : urlPath).filter(Boolean),
                countryRegion = (locale[0].indexOf('-') !== -1 ? locale[0].split('-')[1] : locale);

              return (countryRegion ? countryRegion : undefined);
            };

            var getAPIResults = function(prop){
              var apiResult = prop;

              if(typeof apiResult == 'object'){
                return JSON.stringify(apiResult);
              } else {
                return apiResult;
              }
            };

            var msStoreLocale = getStoreLocale(),
              optimizelyData = optimizely.get('data'),
              optimizelyVisitorId = optimizely.get('visitor').visitorId,
              optimizelyAPIStorage = [
              {
                'api' : optimizelyData.accountId,
                'storage' : 'ms-optimizely_' + msStoreLocale + '_accountid'
              },
              {
                'api' : optimizelyData.projectId,
                'storage' : 'ms-optimizely_' + msStoreLocale + '_projectid'
              },
              {
                  'api' : optimizely.get('visitor'),
                  'storage' : 'ms-optimizely_' + msStoreLocale + '_visitor'
              },
              {
                'api' : optimizely.get('visitor').visitorId,
                'storage' : 'ms-optimizely_' + msStoreLocale + '_visitorid'
              },
              {
                'api' : optimizely.get('state').getCampaignStates(),
                'storage' : 'ms-optimizely_' + optimizelyVisitorId + '_campaignstates'
              },
              {
                'api' : optimizelyData.events,
                'storage' : 'ms-optimizely_' + optimizelyVisitorId + '_events'
              },
              {
                  'api' : optimizely.get('state').getVariationMap(),
                  'storage' : 'ms-optimizely_' + optimizelyVisitorId + '_variationmap'
              }
              ];


            optimizelyAPIStorage.map(function(value, index){
            window.localStorage.setItem(value.storage, getAPIResults(value.api));
            });
            window.localStorage.setItem('ms-optimizely_' + msStoreLocale + '_eventprefix', 'store');
          }
      } catch(e){
      //Fail
      }
    }
});

// AWA JSLL integration
try{
  optiJSLL = function() {
    if (typeof window.optimizely.data == "object" && typeof window.optimizely.data != null) {
      if (window.opti_jsll!=1) {
        window.opti_jsll = 1;
        // initialize test status staging/production
        var exp_sta = "stag",
            queryParams = window.location.search;
        // check if this is a MSFT user loading the page in QA mode
        if (!queryParams.match("optimizely_x") && 
            document.cookie.indexOf("optly_test") == -1 && 
            document.cookie.indexOf("optly_microsoft_test") == -1 && 
            document.cookie.indexOf("optly_xbox_test") == -1 && 
            document.cookie.indexOf("optly_office_test") == -1) 
        {
        	exp_sta = "prod";
        }

        var opt_eid = "",
            opt_vid = "",
            opt_enm = "",
            opt_vnm = "";

        // helper function to get campaign name given a specific experiment ID
        function getCampaignName(experimentID) {
          // get data for active campaigns
          var campaigns = optimizely.get("state").getCampaignStates({"isActive": true});
          
          // make sure the experimentID is a string
          if (typeof experimentID !== 'String') {experimentID =experimentID.toString();}
          
          // loop over campaigns to find the campaign of the current experiment
          for (var key in campaigns) {
            if(campaigns[key]['experiment']['id'] === experimentID) { 
              // return the campaign name for the current experiment
              // experiments do not have names in Optimizely, only campaigns do
              return campaigns[key]['campaignName'];
            }
          }
        }

        // pull the active experiment(s) and associate them with the experiment variation(s)
        // this inlcudes experiment IDs for redirects as well
        var OptActiveTestArray = optimizely.get("state").getActiveExperimentIds();
        // Mask descriptive names in project code and third-party integrations - must be UNchecked in project settings!
        for (var key in OptActiveTestArray) {
          // check for active experiment IDs and that visitor is not in holdback
          if(OptActiveTestArray.hasOwnProperty(key) && optimizely.get("state").getExperimentStates()[OptActiveTestArray[key]].isInExperimentHoldback === false){
            // build out data array with current values
            // Set experiment ID 
            opt_eid = OptActiveTestArray[key];
            // Set variation ID
            opt_vid = optimizely.get("state").getVariationMap()[OptActiveTestArray[key]]['id'];
            // Set experiment Name (Campaign Name in X)
            opt_enm = getCampaignName(OptActiveTestArray[key]);
            // Set variation Name
            opt_vnm = optimizely.get("state").getVariationMap()[OptActiveTestArray[key]]['name'];
            
            // push experiment values into array
            var overrideValues = {
              actionType:"A",
              behavior:awa.behavior.EXPERIMENTATION,
              content:JSON.stringify({}),
              pageTags:{
                    "expname":opt_enm,
                    "expid":opt_eid,
                    "variationname":opt_vnm,
                    "variationid":opt_vid,
                    "expengine":"opt",
                    "expstatus":exp_sta
              }
            };
            
            //send Optimizely data to JSLL
            awa.ct.captureContentUpdate(overrideValues);

            if(window.opti_event_jsll!=1){
              window.opti_event_jsll=1;
              // tracking JSLL call complete with eventing to opti
              window.optimizely.push({
                type: "event",
                eventName: "jsll_call_complete"
              });
              
              // tracking JSLL call complete with custom attr for results page filtering
              window["optimizely"].push({
                "type": "user",
                  "attributes": {
                    "jsll_call_made": "true",
                    "jsll_call_made_uhf": "true"
                  }
              });
            }
          }
        }
      }
    } else {
      return;
    }
  };

  queueJSLLCheck = function () {
    window.setTimeout(function () {
        checkJSLLReady();
    }, 500);
  };

  //make sure awa, Optimizely, and the page have all loaded
  checkJSLLReady = function () {
    if (typeof window.awa != "object" || 
    	window.awa.isInitialized != true || 
    	document.body == null || 
    	typeof window.optimizely.data != "object" || 
    	typeof window.optimizely.data == null) 
    {
      queueJSLLCheck();
      return;
    }
    optiJSLL();
  };
  checkJSLLReady();
} catch(e){
  console.log(e);
}

//Window Close
(function(){
  try{
    var expRecordAbandonmentEvent = false,
        isChrome = /Chrome/.test(navigator.userAgent),
        keyMap = {};

    onkeydown = onkeyup = function(e){
      e = e || event;
      keyMap[e.keyCode] = (e.type == 'keydown');
    };

    document.addEventListener("mouseleave", function(){
      expRecordAbandonmentEvent = true;
    });

    document.addEventListener("mouseenter", function(){
      expRecordAbandonmentEvent = false;
    });

    window.addEventListener("beforeunload", function() {
      if(expRecordAbandonmentEvent || (isChrome && keyMap[16] && keyMap[17] && keyMap[81])){
        //Record Abandomment Here
        window['optimizely'].push({
          type: "event",
          eventName: "store_us_windowclose"
        });
      }
    });
  } catch(e){
    //Fail
  }
})();
}, "namespace": "a3698060313", "listTargetingCookies": [], "dimensions": [{"segmentId": null, "id": "8451383289", "apiName": "attr_store_us_addedToCart_surface", "name": "US - Added to Cart: Surface"}, {"segmentId": null, "id": "8455190572", "apiName": "wedcs_call_made_uhf", "name": "Wedcs Call Made (UHF)"}], "audiences": [{"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "optly_test", "match": "exact"}]]], "id": "8392932692", "name": "Cookie: Optly_Test"}], "integrationSettings": [], "anonymizeIP": true, "projectId": "8410643354", "visitorAttributes": [], "accountId": "3698060313", "plugins": [function(PluginManager) {
  var Hogan=function(t){function r(e){if(n[e])return n[e].exports;var i=n[e]={exports:{},id:e,loaded:!1};return t[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}var n={};return r.m=t,r.c=n,r.p="",r(0)}([function(t,r){function n(t){this.r=t,this.buf=""}function e(t,r){var n;if(r&&"object"==typeof r)if(void 0!==r[t])n=r[t];return n}function i(t){return String(null===t||void 0===t?"":t)}function o(t){return t=i(t),p.test(t)?t.replace(u,"&amp;").replace(f,"&lt;").replace(c,"&gt;").replace(l,"&#39;").replace(a,"&quot;"):t}t.exports=n,n.prototype={r:function(t,r,n){return""},v:o,t:i,render:function(t,r,n){return this.ri([t],r||{},n)},ri:function(t,r,n){return this.r(t,r,n)},rs:function(t,r,n){var e=t[t.length-1];if(!s(e))return void n(t,r,this);for(var i=0;i<e.length;i++)t.push(e[i]),n(t,r,this),t.pop()},s:function(t,r,n,e,i,o,u){var f;if(s(t)&&0===t.length)return!1;if(f=!!t,!e&&f&&r)r.push("object"==typeof t?t:r[r.length-1]);return f},d:function(t,r,n,i){var o,u=t.split("."),f=this.f(u[0],r,n,i),c=null;if("."===t&&s(r[r.length-2]))f=r[r.length-1];else for(var l=1;l<u.length;l++)if(o=e(u[l],f),void 0!==o)c=f,f=o;else f="";if(i&&!f)return!1;if(!i&&"function"==typeof f)r.push(c),f=this.mv(f,r,n),r.pop();return f},f:function(t,r,n,i){for(var o=!1,u=null,f=!1,c=r.length-1;c>=0;c--)if(u=r[c],o=e(t,u),void 0!==o){f=!0;break}if(!f)return i?!1:"";if(!i&&"function"==typeof o)o=this.mv(o,r,n);return o},b:function(t){this.buf+=t},fl:function(){var t=this.buf;return this.buf="",t},mv:function(t,r,n){var e=r[r.length-1],o=t.call(e);if("function"==typeof o)return this.ct(i(o.call(e)),e,n);else return o}};var u=/&/g,f=/</g,c=/>/g,l=/'/g,a=/"/g,p=/[&<>"']/,s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}]);
  
PluginManager.registerWidget({
      widgetId: '8561352815',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "8561352815";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"storytellingIndex","default_value":"1"},{"name":"storytellingTitle","default_value":""},{"name":"storytellingDescription","default_value":""},{"name":"storytellingLinktext","default_value":""},{"name":"storytellingURL","default_value":""},{"name":"storytellingAriaLabel","default_value":""},{"name":"storytellingDataM","default_value":""},{"name":"storytellingImage","default_value":""},{"name":"storytellingAlt","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var utils = optimizely.get('utils');

utils.waitUntil(function() {
	if(window.jQuery) return true;
}).then(function() {
	utils.waitForElement('.pad-feature').then(function() {
		var i = widget.storytellingIndex,
	    	_this = jQuery('#OptionalFeature'+i+'Region'),
			tmpElm = document.createElement('div');

		//Store
		tmpElm.innerHTML = _this.html();

		//Update
		if(widget.storytellingTitle !==""){
			jQuery('.c-heading', tmpElm).text(widget.storytellingTitle);
		}
		if(widget.storytellingDescription !==""){
			if(jQuery('.c-paragraph p', tmpElm).length > 0) {
				jQuery('.c-paragraph p', tmpElm).text(widget.storytellingDescription);
			}else{
				jQuery('.c-paragraph', tmpElm).text(widget.storytellingDescription);
			}
		}
		if(widget.storytellingLinktext !==""){
			jQuery('.c-call-to-action > span', tmpElm).text(widget.storytellingLinktext);
		}
		if(widget.storytellingURL !==""){
			jQuery('a', tmpElm).attr('href',widget.storytellingURL);
		}
		if(widget.storytellingAriaLabel !==""){
			jQuery('a', tmpElm).attr('aria-label', widget.storytellingAriaLabel);
		}
		if(widget.storytellingDataM !==""){
			var datam = jQuery('a:eq(0)', tmpElm).attr('data-m');
			datam = JSON.parse(datam);
			datam.cN = widget.storytellingDataM;
			datam = JSON.stringify(datam);
			jQuery('a', tmpElm).attr('data-m',datam);
		}
		if(widget.storytellingImage !==""){
			var img = new Image(),
				oldImage = new Image(),
				imageURL = widget.storytellingImage;
			img.src = widget.storytellingImage;
			oldImage.src = jQuery('img', tmpElm).attr('src');

			//update the url for the different sizes in the picture source set
			var imageSizes = [[303,539],[431,767],[406,542],[472,630],[450,800],[450,800]];
			for(var key in imageSizes){
				var imgSrcset = updateHeightWidth(imageURL,imageSizes[key][0],imageSizes[key][1]);
				jQuery('source:eq('+key+')', tmpElm).attr('srcset', imgSrcset);
			}

			//make sure main image is has correct size in query strings
			var imageSrc = updateHeightWidth(imageURL, "450", "800");
			jQuery('img', tmpElm).attr('src', imageSrc);

			function updateHeightWidth(url, height, width){
				var withHeight = updateParameter(url,"h",height);
				var withHandW = updateParameter(withHeight,"w",width);
				return withHandW;
			}

			function updateParameter(uri, key, value) {
			  var regX = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
			  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
			  if (uri.match(regX)) {
			    return uri.replace(regX, '$1' + key + "=" + value + '$2');
			  }
			  else {
			    return uri + separator + key + "=" + value;
			  }
			}

			img.onload = function() {
				var imgWidth = this.width,
					imgHeight = this.height;
				oldImage.onload = function(){
					var oldWidth = this.width,
						oldHeight = this.height;
					if(imgWidth !== oldWidth || imgHeight !== oldHeight){
						console.log('***Updated Image from storytelling extension is the incorrect size. Please use an image that is ' + oldWidth + 'x' + oldHeight + '.');
					}
				};
			};
		}
		if(widget.storytellingAlt !==""){
			jQuery('img', tmpElm).attr('alt', widget.storytellingAlt);
		}

		//Inject
		_this.html(tmpElm.innerHTML);

		//Attach click event tracking
		function attachEvent(eventName){
			jQuery('body').on('click', '#OptionalFeature'+i+'Region .c-call-to-action', function(){
				window['optimizely'].push({
					type: "event",
					eventName: eventName
				});
			});
		}

		if($('#OptionalFeature'+i+'Region .c-call-to-action').length > 0){
			newGoal = 'store_us_optional-feature-region-'+i;
			
			//check for duplicate events
			if(window.msopti_store_ext_goals){
				var curGoals = window.msopti_store_ext_goals;

				if(curGoals.indexOf(newGoal) === -1){ 
					attachEvent(newGoal);
					window.msopti_store_ext_goals.push(newGoal);
				}
			} else{
				attachEvent(newGoal);
				window.msopti_store_ext_goals = newGoal;
			}
		}
	});
});

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8561352815";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"storytellingIndex","default_value":"1"},{"name":"storytellingTitle","default_value":""},{"name":"storytellingDescription","default_value":""},{"name":"storytellingLinktext","default_value":""},{"name":"storytellingURL","default_value":""},{"name":"storytellingAriaLabel","default_value":""},{"name":"storytellingDataM","default_value":""},{"name":"storytellingImage","default_value":""},{"name":"storytellingAlt","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();

      },
    });

PluginManager.registerWidget({
      widgetId: '8563497418',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "8563497418";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"stripeCopy","default_value":""},{"name":"stripeURL","default_value":""},{"name":"stripeAriaLabel","default_value":""},{"name":"stripeDataM","default_value":""},{"name":"stripeBackground","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var utils = optimizely.get('utils');

utils.waitUntil(function() {
	if(window.jQuery) return true;
}).then(function() {
	utils.waitForElement('.c-universal-header').then(function() {
		

		//Add if stripe doesn't exist and all fields have been completed.
		if((jQuery('.c-sitewide-promo').length === 0)&&(widget.stripeCopy !=="")&&(widget.stripeURL !=="")&&(widget.stripeAriaLabel !=="")&&(widget.stripeDataM !=="")&&(widget.stripeBackground !=="")){

			var newStripe = '<a id="uhf-swp" aria-label="' + widget.stripeAriaLabel + '" class="c-sitewide-promo theme-dark" href="' + widget.stripeURL + '" target="_blank" data-m="{&quot;cN&quot;:&quot;' + widget.stripeDataM + '&quot;,&quot;id&quot;:&quot;n3m1r1a1&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;m1r1a1&quot;}"><p class="c-paragraph ' + widget.stripeBackground + '" data-m="{&quot;cT&quot;:&quot;Container&quot;,&quot;id&quot;:&quot;c4m1r1a1&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;m1r1a1&quot;}">' + widget.stripeCopy +'</p></a>';

			jQuery('.js-cat-head').after(newStripe);
		}
		if(jQuery('.c-sitewide-promo').length > 0){
			
			var _this = jQuery('.c-sitewide-promo'),
				tmpElm = document.createElement('div');

			//Store
			tmpElm.innerHTML = _this[0].outerHTML;
		
			//Update
			if(widget.stripeCopy !==""){
				jQuery('.c-paragraph', tmpElm).text(widget.stripeCopy);
			}
			if(widget.stripeURL !==""){
				jQuery('.c-sitewide-promo', tmpElm).attr('href',widget.stripeURL);
			}
			if(widget.stripeAriaLabel !==""){
				jQuery('.c-sitewide-promo', tmpElm).attr('aria-label', widget.stripeAriaLabel);
			}
			if(widget.stripeDataM !==""){
				var datam = jQuery(tmpElm).attr('data-m');
				datam = JSON.parse(datam);
				datam.cN = widget.stripeDataM;
				datam = JSON.stringify(datam);
				jQuery('.c-sitewide-promo', tmpElm).attr('data-m',datam);
			}
			if(widget.stripeBackground !== ""){
				jQuery('.c-paragraph', tmpElm).removeClass('color-brand-red color-brand-orange color-brand-yellow color-brand-green color-brand-teal color-brand-blue color-brand-purple');
				jQuery('.c-paragraph', tmpElm).addClass(widget.stripeBackground);
			}

			//Inject
			jQuery(_this).replaceWith(tmpElm.innerHTML);
		}

		//Attach click event tracking
		function attachEvent(eventName){
			jQuery('body').on('click', '.c-sitewide-promo', function(){
				window['optimizely'].push({
					type: "event",
					eventName: eventName
				});
			});
		}

		var newGoals = ['store_us_c-sitewide-promo'];

		//check for duplicate events
		if(window.msopti_store_ext_goals){
			var curGoals = window.msopti_store_ext_goals;

			for(var key in newGoals){
				if(curGoals.indexOf(newGoals[key]) === -1){ 
					attachEvent(newGoals[key]);
					window.msopti_store_ext_goals.push(newGoals[key]);
				}
			};
		} else{
			for(var key in newGoals){
				attachEvent(newGoals[key]);
			}
			window.msopti_store_ext_goals = newGoals;
		}
	});
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8563497418";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"stripeCopy","default_value":""},{"name":"stripeURL","default_value":""},{"name":"stripeAriaLabel","default_value":""},{"name":"stripeDataM","default_value":""},{"name":"stripeBackground","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();

      },
    });

PluginManager.registerWidget({
      widgetId: '8565371523',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "8565371523";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"spotlightIndex","default_value":"0"},{"name":"spotlightTitle","default_value":""},{"name":"spotlightDescription","default_value":""},{"name":"spotlightLinktext","default_value":""},{"name":"spotlightURL","default_value":""},{"name":"spotlightAriaLabel","default_value":""},{"name":"spotlightDataM","default_value":""},{"name":"spotlightImage","default_value":""},{"name":"spotlightAlt","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var utils = optimizely.get('utils');

utils.waitUntil(function() {
	if(window.jQuery) return true;
}).then(function() {
	utils.waitForElement('#IntroContentPlacementRegion .m-content-placement-item').then(function() {
		var i = widget.spotlightIndex,
	    	_this = jQuery('#IntroContentPlacementRegion .m-content-placement-item:eq('+i+')'),
			tmpElm = document.createElement('div');

		//Store
		tmpElm.innerHTML = _this.html();

		//Update
		if(widget.spotlightTitle !==""){
			jQuery('.c-heading', tmpElm).text(widget.spotlightTitle);
		}
		if(widget.spotlightDescription !==""){
			if(jQuery('.c-paragraph p', tmpElm).length > 0) {
				jQuery('.c-paragraph p', tmpElm).text(widget.spotlightDescription);
			}else{
				jQuery('.c-paragraph', tmpElm).text(widget.spotlightDescription);
			}
		}
		if(widget.spotlightLinktext !==""){
			jQuery('.c-call-to-action > span', tmpElm).text(widget.spotlightLinktext);
		}
		if(widget.spotlightURL !==""){
			jQuery('a', tmpElm).attr('href',widget.spotlightURL);
		}
		if(widget.spotlightAriaLabel !==""){
			jQuery('a', tmpElm).attr('aria-label', widget.spotlightAriaLabel);
		}
		if(widget.spotlightDataM !==""){
			var datam = jQuery('a:eq(0)', tmpElm).attr('data-m');
			datam = JSON.parse(datam);
			datam.cN = widget.spotlightDataM;
			datam = JSON.stringify(datam);
			jQuery('a', tmpElm).attr('data-m',datam);
		}
		if(widget.spotlightImage !==""){
			var img = new Image(),
				oldImage = new Image(),
				imageURL = widget.spotlightImage;
			img.src = widget.spotlightImage;
			oldImage.src = jQuery('img', tmpElm).attr('src');

			//update the url for the different sizes in the picture source set
			var imageSizes = [[276,491],[195,348],[278,494],[157,279],[201,358],[201,358]];
			for(var key in imageSizes){
				var imgSrcset = updateHeightWidth(imageURL,imageSizes[key][0],imageSizes[key][1]);
				jQuery('source:eq('+key+')', tmpElm).attr('srcset', imgSrcset);
			}

			//make sure main image is has correct size in query strings
			var imageSrc = updateHeightWidth(imageURL, "201", "358");
			jQuery('img', tmpElm).attr('src', imageSrc);

			function updateHeightWidth(url, height, width){
				var withHeight = updateParameter(url,"h",height);
				var withHandW = updateParameter(withHeight,"w",width);
				return withHandW;
			}

			function updateParameter(uri, key, value) {
			  var regX = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
			  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
			  if (uri.match(regX)) {
			    return uri.replace(regX, '$1' + key + "=" + value + '$2');
			  }
			  else {
			    return uri + separator + key + "=" + value;
			  }
			}

			img.onload = function() {
				var imgWidth = this.width,
					imgHeight = this.height;
				oldImage.onload = function(){
					var oldWidth = this.width,
						oldHeight = this.height;
					if(imgWidth !== oldWidth || imgHeight !== oldHeight){
						console.log('***Updated Image from spotlight extension is the incorrect size. Please use an image that is ' + oldWidth + 'x' + oldHeight + '.');
					}
				};
			};
		}
		if(widget.spotlightAlt !==""){
			jQuery('img', tmpElm).attr('alt', widget.spotlightAlt);
		}

		//Inject
		_this.html(tmpElm.innerHTML);

		//Attach click event tracking
		function attachEvent(eventName){
			if(eventName === 'store_us_m-content-placement-item-1'){
				jQuery('body').on('click', '#IntroContentPlacementRegion .m-content-placement-item:eq(0) a', function(){
					window['optimizely'].push({
						type: "event",
						eventName: eventName
					});
				});
			}
			if(eventName === 'store_us_m-content-placement-item-2'){
				jQuery('body').on('click', '#IntroContentPlacementRegion .m-content-placement-item:eq(1) a', function(){
					window['optimizely'].push({
						type: "event",
						eventName: eventName
					});
				});
			}
			if(eventName === 'store_us_m-content-placement-item-3'){
				jQuery('body').on('click', '#IntroContentPlacementRegion .m-content-placement-item:eq(2) a', function(){
					window['optimizely'].push({
						type: "event",
						eventName: eventName
					});
				});
			}
		}

		var newGoals = ['store_us_m-content-placement-item-1','store_us_m-content-placement-item-2','store_us_m-content-placement-item-3'];

		//check for duplicate events
		if(window.msopti_store_ext_goals){
			var curGoals = window.msopti_store_ext_goals;

			for(var key in newGoals){
				if(curGoals.indexOf(newGoals[key]) === -1){ 
					attachEvent(newGoals[key]);
					window.msopti_store_ext_goals.push(newGoals[key]);
				}
			};
		} else{
			for(var key in newGoals){
				attachEvent(newGoals[key]);
			}
			window.msopti_store_ext_goals = newGoals;
		}
	});
});

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8565371523";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"spotlightIndex","default_value":"0"},{"name":"spotlightTitle","default_value":""},{"name":"spotlightDescription","default_value":""},{"name":"spotlightLinktext","default_value":""},{"name":"spotlightURL","default_value":""},{"name":"spotlightAriaLabel","default_value":""},{"name":"spotlightDataM","default_value":""},{"name":"spotlightImage","default_value":""},{"name":"spotlightAlt","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();

      },
    });

PluginManager.registerWidget({
      widgetId: '8566481324',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "8566481324";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"spotlightIndex1","default_value":"0"},{"name":"spotlightIndex2","default_value":"1"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var utils = optimizely.get('utils');

utils.waitUntil(function() {
	if(window.jQuery) return true;
}).then(function() {
	utils.waitForElement('#IntroContentPlacementRegion .m-content-placement-item').then(function() {
		var i = widget.spotlightIndex1,
			j = widget.spotlightIndex2,
			selector1 = jQuery('#IntroContentPlacementRegion .m-content-placement-item:eq('+i+')'),
			selector2 = jQuery('#IntroContentPlacementRegion .m-content-placement-item:eq('+j+')'),
			tmpElm1 = document.createElement('div'),
			tmpElm2 = document.createElement('div');

		//Store
		tmpElm1.innerHTML = selector1.html();
		tmpElm2.innerHTML = selector2.html();

		//Update/Inject
		selector1.html(tmpElm2.innerHTML);
		selector2.html(tmpElm1.innerHTML);

		//Attach click event tracking
		function attachEvent(eventName){
			if(eventName === 'store_us_m-content-placement-item-1'){
				jQuery('body').on('click', '#IntroContentPlacementRegion .m-content-placement-item:eq(0) a', function(){
					window['optimizely'].push({
						type: "event",
						eventName: eventName
					});
				});
			}
			if(eventName === 'store_us_m-content-placement-item-2'){
				jQuery('body').on('click', '#IntroContentPlacementRegion .m-content-placement-item:eq(1) a', function(){
					window['optimizely'].push({
						type: "event",
						eventName: eventName
					});
				});
			}
			if(eventName === 'store_us_m-content-placement-item-3'){
				jQuery('body').on('click', '#IntroContentPlacementRegion .m-content-placement-item:eq(2) a', function(){
					window['optimizely'].push({
						type: "event",
						eventName: eventName
					});
				});
			}
		}

		var newGoals = ['store_us_m-content-placement-item-1','store_us_m-content-placement-item-2','store_us_m-content-placement-item-3'];

		//check for duplicate events
		if(window.msopti_store_ext_goals){
			var curGoals = window.msopti_store_ext_goals;

			for(var key in newGoals){
				if(curGoals.indexOf(newGoals[key]) === -1){ 
					attachEvent(newGoals[key]);
					window.msopti_store_ext_goals.push(newGoals[key]);
				}
			};
		} else{
			for(var key in newGoals){
				attachEvent(newGoals[key]);
			}
			window.msopti_store_ext_goals = newGoals;
		}
	});
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8566481324";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"spotlightIndex1","default_value":"0"},{"name":"spotlightIndex2","default_value":"1"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();

      },
    });

PluginManager.registerWidget({
      widgetId: '8568323690',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "8568323690";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"heroEdit","default_value":"0"},{"name":"heroCarouselIndex","default_value":"0"},{"name":"heroTitle","default_value":""},{"name":"heroDescription","default_value":""},{"name":"heroLinktext","default_value":""},{"name":"heroTheme","default_value":""},{"name":"heroURL","default_value":""},{"name":"heroAriaLabel","default_value":""},{"name":"heroDataM","default_value":""},{"name":"heroImage","default_value":""},{"name":"heroAlt","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var utils = optimizely.get('utils');

utils.waitUntil(function() {
	if(window.jQuery) return true;
}).then(function() {
	utils.waitForElement('.c-hero').then(function() {
		var i = widget.heroEdit,
			j = 0;

		//if the user chose carousel, set the index
		if(i == 1){
			j = widget.heroCarouselIndex;
		}
		var	_this = jQuery('.c-hero:eq('+j+')').parent(),
			tmpElm = document.createElement('div');

		//Store
		tmpElm.innerHTML = _this.html();

		//Update
		if(widget.heroTitle !==""){
			jQuery('.c-heading', tmpElm).text(widget.heroTitle);
		}
		if(widget.heroDescription !==""){
			jQuery('.c-paragraph', tmpElm).text(widget.heroDescription);
		}
		if(widget.heroLinktext !==""){
			jQuery('.c-call-to-action > span', tmpElm).text(widget.heroLinktext);
		}
		if(widget.heroTheme !==""){
			jQuery('.c-hero', tmpElm).removeClass('theme-light theme-dark').addClass(widget.heroTheme);
		}
		if(widget.heroURL !==""){
			jQuery('.c-hero', tmpElm).attr('href',widget.heroURL);
			jQuery('a', tmpElm).attr('href',widget.heroURL);
		}
		if(widget.heroAriaLabel !==""){
			jQuery('a', tmpElm).attr('aria-label', widget.heroAriaLabel);
		}
		if(widget.heroDataM !==""){
			var datam = jQuery('a', tmpElm).attr('data-m');
			datam = JSON.parse(datam);
			datam.cN = widget.heroDataM;
			datam = JSON.stringify(datam);
			jQuery('a', tmpElm).attr('data-m',datam);
		}
		if(widget.heroImage !==""){
			var img = new Image(),
				oldImage = new Image(),
				imageURL = widget.heroImage;
			img.src = widget.heroImage;
			oldImage.src = jQuery('img', tmpElm).attr('src');

			//update the url for the different sizes in the picture source set
			var imageSizes = [[303,539],[431,767],[609,1083],[472,1259],[600,1600],[600,1600]];
			for(var key in imageSizes){
				var imgSrcset = updateHeightWidth(imageURL,imageSizes[key][0],imageSizes[key][1]);
				jQuery('source:eq('+key+')', tmpElm).attr('srcset', imgSrcset);
			}

			//make sure main image is has correct size in query strings
			var imageSrc = updateHeightWidth(imageURL, "600", "1600");
			jQuery('img', tmpElm).attr('src', imageSrc).removeClass('lazyloaded').addClass('lazyload');

			function updateHeightWidth(url, height, width){
				var withHeight = updateParameter(url,"h",height);
				var withHandW = updateParameter(withHeight,"w",width);
				return withHandW;
			}

			function updateParameter(uri, key, value) {
			  var regX = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
			  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
			  if (uri.match(regX)) {
			    return uri.replace(regX, '$1' + key + "=" + value + '$2');
			  }
			  else {
			    return uri + separator + key + "=" + value;
			  }
			}

			img.onload = function() {
				var imgWidth = this.width,
					imgHeight = this.height;
				oldImage.onload = function(){
					var oldWidth = this.width,
						oldHeight = this.height;
					if(imgWidth !== oldWidth || imgHeight !== oldHeight){
						console.log('***Updated Image from hero extension is the incorrect size. Please use an image that is ' + oldWidth + 'x' + oldHeight + '.');
					}
				};
			};
		}
		if(widget.heroAlt !==""){
			jQuery('img', tmpElm).attr('alt', widget.heroAlt);
		}

		//Inject
		_this.html(tmpElm.innerHTML);
		
		//Attach click event tracking
		function attachEvent(eventName){
			jQuery('body').on('click', '.c-hero:eq(j) img, .c-hero:eq(j) .c-call-to-action', function(){
				window['optimizely'].push({
					type: "event",
					eventName: eventName
				});
			});
		}

		function checkForDupes(newGoals){
			if(window.msopti_store_ext_goals){
				var curGoals = window.msopti_store_ext_goals;

				for(var key in newGoals){
					if(curGoals.indexOf(newGoals[key]) === -1){ 
						attachEvent(newGoals[key]);
						window.msopti_store_ext_goals.push(newGoals[key]);
					}
				};
			} else{
				for(var key in newGoals){
					attachEvent(newGoals[key]);
				}
				window.msopti_store_ext_goals = newGoals;
			}
		}

		var newGoals = [];
		if(i === 1){
			for(h = 1; h <= $('.c-hero').length; h++){
				newGoals.push('store_us_c-hero-slide'+h+'_ctr');
			}
			checkForDupes(newGoals);
		}else{
			newGoals = 'store_us_c-hero-static_ctr';
			checkForDupes(newGoals);
		}
	});
});

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8568323690";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"heroEdit","default_value":"0"},{"name":"heroCarouselIndex","default_value":"0"},{"name":"heroTitle","default_value":""},{"name":"heroDescription","default_value":""},{"name":"heroLinktext","default_value":""},{"name":"heroTheme","default_value":""},{"name":"heroURL","default_value":""},{"name":"heroAriaLabel","default_value":""},{"name":"heroDataM","default_value":""},{"name":"heroImage","default_value":""},{"name":"heroAlt","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();

      },
    });
}], "events": [{"category": "other", "name": "Mosaic: Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_m-mosaic", "id": "8386000629", "eventFilter": null}, {"category": "other", "name": "Product Placement: PDP Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_ProductPlacement_PDP", "id": "8387122516", "eventFilter": null}, {"category": "other", "name": "Universal Header: Logo Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_universal-header-logo", "id": "8388072048", "eventFilter": null}, {"category": "add_to_cart", "name": "PDP: Get The App", "eventType": "click", "viewId": "8387122500", "apiName": "7855979098_pdp_get_the_app", "id": "8390733789", "eventFilter": {"filterType": "target_selector", "selector": ".srv_purchaseButton"}}, {"category": "add_to_cart", "name": "PDP: Get The App", "eventType": "click", "viewId": "8394533371", "apiName": "7855979098_pdp_get_the_app_1", "id": "8390753120", "eventFilter": {"filterType": "target_selector", "selector": ".srv_purchaseButton"}}, {"category": "other", "name": "[US] - Compare Chart: Product Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_m-compare-chart_product", "id": "8391064587", "eventFilter": null}, {"category": "other", "name": "[US] - Compare Chart: Tab Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_m-compare-chart_tabs", "id": "8391374127", "eventFilter": null}, {"category": "other", "name": "Product Placement: Carousel Arrow Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_ProductPlacement_CarouselArrow", "id": "8391402574", "eventFilter": null}, {"category": "other", "name": "Universal Header: Navigation Dropdown Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_universal-header-navdropdown", "id": "8391912388", "eventFilter": null}, {"category": "add_to_cart", "name": "PDP: Added to Cart (Standard Products)", "eventType": "click", "viewId": "8399590490", "apiName": "7855979098_pdp_added_to_cart_1", "id": "8393134685", "eventFilter": {"filterType": "target_selector", "selector": ".cli_pdp-buy-button"}}, {"category": "add_to_cart", "name": "PDP: Added to Cart (All Products)", "eventType": "click", "viewId": "8387122500", "apiName": "7855979098_pdp_added_to_cart", "id": "8393822635", "eventFilter": {"filterType": "target_selector", "selector": ".cli_pdp-buy-button"}}, {"category": "purchase", "name": "[US] - PCF: Review & Place Order", "eventType": "custom", "viewId": null, "apiName": "store_us_review_place_order", "id": "8395383567", "eventFilter": null}, {"category": "other", "name": "Product Placement: Show All Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_ProductPlacement_ShowAll", "id": "8396482229", "eventFilter": null}, {"category": "other", "name": "Universal Header: Navigation Link Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_universal-header-navigationlink", "id": "8399285448", "eventFilter": null}, {"category": "purchase", "name": "[US] - PCF: Order Complete", "eventType": "custom", "viewId": null, "apiName": "store_us_order_complete", "id": "8400354513", "eventFilter": null}, {"category": "other", "name": "Main Area: Action Click (a, button)", "eventType": "custom", "viewId": null, "apiName": "store_us_MainArea_ActionClick", "id": "8400482787", "eventFilter": null}, {"category": "other", "name": "[US] - Global: Engagement", "eventType": "custom", "viewId": null, "apiName": "store_us_engagement", "id": "8416945471", "eventFilter": null}, {"category": "other", "name": "[US] - PCF: Cart View", "eventType": "custom", "viewId": null, "apiName": "store_us_cart", "id": "8420833099", "eventFilter": null}, {"category": "other", "name": "UHF: Nav Interaction (Dropdown / Nav Link)", "eventType": "custom", "viewId": null, "apiName": "8410234061-uhf-interaction", "id": "8428821705", "eventFilter": null}, {"category": "other", "name": "Abandonment: Visitor Loop", "eventType": "custom", "viewId": null, "apiName": "8410234061-visitor_loop", "id": "8429955329", "eventFilter": null}, {"category": "other", "name": "[US] - PCF: Interstitial View", "eventType": "custom", "viewId": null, "apiName": "store_us_interstitial", "id": "8431071052", "eventFilter": null}, {"category": "other", "name": "[US] - PCF: Cart Change Quantity", "eventType": "custom", "viewId": null, "apiName": "store_us_cart_change_qty", "id": "8433390561", "eventFilter": null}, {"category": "other", "name": "[US] - PCF: Interstitial Checkout", "eventType": "custom", "viewId": null, "apiName": "store_us_interstitial_checkout", "id": "8433390562", "eventFilter": null}, {"category": "other", "name": "UHF: Search Submitted", "eventType": "custom", "viewId": null, "apiName": "8410234061-search_submitted", "id": "8434204536", "eventFilter": null}, {"category": "other", "name": "[US] - PCF: Interstitial Add On", "eventType": "custom", "viewId": null, "apiName": "store_us_interstitial_addon", "id": "8436471507", "eventFilter": null}, {"category": "other", "name": "UHF: Nav Link Clicked", "eventType": "custom", "viewId": null, "apiName": "8410234061-uhf-navigation", "id": "8438494795", "eventFilter": null}, {"category": "other", "name": "[US] - PCF: Cart Delete Item", "eventType": "custom", "viewId": null, "apiName": "store_us_cart_delete_item", "id": "8439181010", "eventFilter": null}, {"category": "other", "name": "[US] - PCF: Cart Checkout Click", "eventType": "custom", "viewId": null, "apiName": "store_us_cart_checkout", "id": "8439231526", "eventFilter": null}, {"category": "other", "name": "Global: Window Close", "eventType": "custom", "viewId": null, "apiName": "store_us_windowclose", "id": "8442372566", "eventFilter": null}, {"category": "other", "name": "UHF: Nav Opener Clicked", "eventType": "custom", "viewId": null, "apiName": "8410234061-uhf-opener", "id": "8443531989", "eventFilter": null}, {"category": "other", "name": "Global: Window Scrolled", "eventType": "custom", "viewId": null, "apiName": "store_us_windowscrolled", "id": "8444616028", "eventFilter": null}, {"category": "other", "name": "PDP: Add to Cart (Surface Book)", "eventType": "click", "viewId": "8443532016", "apiName": "7855979098_pdp_add_to_cart_surface_book", "id": "8445683259", "eventFilter": {"filterType": "target_selector", "selector": ".cli_pdp-buy-button"}}, {"category": "other", "name": "Pivot: Tab Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_pivot_clicks", "id": "8448345242", "eventFilter": null}, {"category": "other", "name": "8410234061: Body Engagement", "eventType": "custom", "viewId": null, "apiName": "8410234061_body_engagement", "id": "8456960878", "eventFilter": null}, {"category": "other", "name": "8410234061: Engagement", "eventType": "custom", "viewId": null, "apiName": "8410234061_engagement", "id": "8465401944", "eventFilter": null}, {"category": "other", "name": "[US] - Global: Page Click-Through Rate", "eventType": "custom", "viewId": null, "apiName": "store_us_ctr", "id": "8470113135", "eventFilter": null}, {"category": "other", "name": "[US] - Global: Body Click-Through Rate", "eventType": "custom", "viewId": null, "apiName": "store_us_body-ctr", "id": "8477020030", "eventFilter": null}, {"category": "other", "name": "Hero: Carousel CTR", "eventType": "click", "viewId": "8393304636", "apiName": "7855979098_hero_carousel_ctr", "id": "8478411234", "eventFilter": {"filterType": "target_selector", "selector": ".m-hero .c-carousel .c-hero, .m-hero .c-carousel a"}}, {"category": "other", "name": "Hero: Carousel CTR [People of Action]", "eventType": "custom", "viewId": null, "apiName": "store_us_m-hero-carousel-poa-ctr", "id": "8479690088", "eventFilter": null}, {"category": "other", "name": "Universal Footer: Navigation Link Click", "eventType": "custom", "viewId": null, "apiName": "store_us_universal-footer-navigationlink", "id": "8480910011", "eventFilter": null}, {"category": "other", "name": "[US] - PDP: Added to cart from expControl sticky bar", "eventType": "custom", "viewId": null, "apiName": "store_us_expControl_StickyBar_addedToCart", "id": "8480942469", "eventFilter": null}, {"category": "other", "name": "PDP: Added to Cart (Surface Book & Surface Pro)", "eventType": "click", "viewId": "8466196703", "apiName": "7855979098_added_to_cart", "id": "8481411904", "eventFilter": {"filterType": "target_selector", "selector": ".cli_pdp-buy-button"}}, {"category": "other", "name": "Global: Pathing - Internal Store Navigation", "eventType": "custom", "viewId": null, "apiName": "store_us_pathing-internal-store-navigation", "id": "8486260039", "eventFilter": null}, {"category": "other", "name": "Spotlight: Content Placement CTR", "eventType": "click", "viewId": "8393304636", "apiName": "7855979098_spotlight_content_placement_ctr", "id": "8496781535", "eventFilter": {"filterType": "target_selector", "selector": "#IntroContentPlacementRegion .m-content-placement-item a"}}, {"category": "other", "name": "[US] - Spotlight: Content Item [Office] CTR", "eventType": "custom", "viewId": null, "apiName": "store_us_m-content-placement-item", "id": "8500030134", "eventFilter": null}, {"category": "other", "name": "[US] - ProductPlacement: ATC Clicked with Item Selected", "eventType": "custom", "viewId": null, "apiName": "store_us_atc_with_item_selected", "id": "8505083777", "eventFilter": null}, {"category": "other", "name": "PDP: Added to Cart (Office Home, Personal, University, H&S, H&B, Pro 2016, H&S 2016 Mac, H&B 2016 Mac)", "eventType": "click", "viewId": "8498890748", "apiName": "7855979098_pdp_added_to_cart_office_home_personal_university_hs_hb_pro_2016_hs_2016_mac_hb_2016_mac", "id": "8505085261", "eventFilter": {"filterType": "target_selector", "selector": ".cli_pdp-buy-button"}}, {"category": "other", "name": "[US] - PCF: Order Complete: Items Purchased", "eventType": "custom", "viewId": null, "apiName": "store_us_order_complete_value", "id": "8510284259", "eventFilter": null}, {"category": "other", "name": "[US] - Add To Cart: After Clicking Find In Store", "eventType": "custom", "viewId": null, "apiName": "store_us_addtocart_afterfindinstore", "id": "8543973447", "eventFilter": null}, {"category": "other", "name": "[US] Universal Header: Search", "eventType": "custom", "viewId": null, "apiName": "store_us_search_submitted", "id": "8545440617", "eventFilter": null}, {"category": "other", "name": "[US] - Add To Cart: Non Default Sku", "eventType": "custom", "viewId": null, "apiName": "store_us_addtocart_nondefaultsku", "id": "8549174403", "eventFilter": null}, {"category": "other", "name": "[US] - PDP: Find in Store", "eventType": "click", "viewId": "8466196703", "apiName": "7855979098_us__pdp_find_in_store", "id": "8550204212", "eventFilter": {"filterType": "target_selector", "selector": ".cli_pdp-findinstore-button"}}, {"category": "other", "name": "Back to school link clicked [8510565972]", "eventType": "custom", "viewId": null, "apiName": "8510565972_back_to_school", "id": "8551200582", "eventFilter": null}, {"category": "other", "name": "[US] - PDP: Hero Carousel Arrow Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_PDP_Hero_CarouselArrow", "id": "8551241828", "eventFilter": null}, {"category": "other", "name": "[US] - PDP: Offer CTR", "eventType": "custom", "viewId": null, "apiName": "store_us_pdp-offer", "id": "8559230642", "eventFilter": null}, {"category": "other", "name": "[US] - Spotlight: Content Item [Position 3] CTR", "eventType": "custom", "viewId": null, "apiName": "store_us_m-content-placement-item-3", "id": "8564443026", "eventFilter": null}, {"category": "other", "name": "[US] - Spotlight: Content Item [Position 1] CTR", "eventType": "custom", "viewId": null, "apiName": "store_us_m-content-placement-item-1", "id": "8566342916", "eventFilter": null}, {"category": "other", "name": "[US] - Spotlight: Content Item [Position 2] CTR", "eventType": "custom", "viewId": null, "apiName": "store_us_m-content-placement-item-2", "id": "8570382875", "eventFilter": null}, {"category": "other", "name": "[US] - PCF: Order Complete (Office Products)", "eventType": "custom", "viewId": null, "apiName": "store_us_order_complete_office", "id": "8587831464", "eventFilter": null}, {"category": "other", "name": "[US] - PDP: Expert Fly Out Close Button Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_expert-flytout-close-button-clicks", "id": "8600784463", "eventFilter": null}, {"category": "other", "name": "[US] - PDP: Expert Fly Out Order Page Link Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_expert-flytout-order-page-link-clicks", "id": "8600932816", "eventFilter": null}, {"category": "other", "name": "[US] - PDP: Talk to an Expert Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_talk-to-an-expert-clicks", "id": "8601042149", "eventFilter": null}, {"category": "other", "name": "[US] - UHF: Footer Support Link Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_footer-support-clicks", "id": "8601315255", "eventFilter": null}, {"category": "other", "name": "[US] - PDP: Expert Fly Out Chat Page Link Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_expert-flytout-chat-page-link-clicks", "id": "8602192697", "eventFilter": null}, {"category": "other", "name": "[US] - PDP: Expert Fly Out Page 1 Link Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_expert-flytout-page-1-link-clicks", "id": "8604202922", "eventFilter": null}, {"category": "other", "name": "[US] - UHF: Header Support Link Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_header-support-clicks", "id": "8606173835", "eventFilter": null}, {"category": "other", "name": "[US] - PDP: Expert Fly Out Back Button Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_expert-flytout-back-button-clicks", "id": "8606661032", "eventFilter": null}, {"category": "other", "name": "[US] - PDP: Expert Fly Out Support Page Link Clicks", "eventType": "custom", "viewId": null, "apiName": "store_us_expert-flytout-support-page-link-clicks", "id": "8608590789", "eventFilter": null}, {"category": "other", "name": "[US] - Office Category: Student or Educators [8634602225]", "eventType": "custom", "viewId": null, "apiName": "store_us_cat_studentoreducators", "id": "8628902993", "eventFilter": null}, {"category": "other", "name": "[US] - Global: DOM Content Loaded (Debug)", "eventType": "custom", "viewId": null, "apiName": "store_us_domcontentloaded", "id": "8629010192", "eventFilter": null}, {"category": "other", "name": "[US] - Office Category: Renew [8634602225]", "eventType": "custom", "viewId": null, "apiName": "store_us_cat_renew", "id": "8629803201", "eventFilter": null}, {"category": "other", "name": "[US] - Global: DOM Content Inserted (Debug)", "eventType": "custom", "viewId": null, "apiName": "store_us_dominsertcomplete", "id": "8633450290", "eventFilter": null}, {"category": "other", "name": "[US] - Office Category: Business [8634602225]", "eventType": "custom", "viewId": null, "apiName": "store_us_cat_business", "id": "8633502023", "eventFilter": null}, {"category": "other", "name": "[US] - Global: User Bucketed (Debug)", "eventType": "custom", "viewId": null, "apiName": "store_us_userbucketed", "id": "8633650629", "eventFilter": null}, {"category": "other", "name": "[US] - Office Category: Home or Personal [8634602225]", "eventType": "custom", "viewId": null, "apiName": "store_us_cat_homeorpersonal", "id": "8633682817", "eventFilter": null}, {"category": "other", "name": "[US] - Global: Visitor Loop ", "eventType": "custom", "viewId": null, "apiName": "store_us_global_visitor_loop", "id": "8636323015", "eventFilter": null}, {"category": "other", "name": "[US] - Global: Experiment Fired (Debug)", "eventType": "custom", "viewId": null, "apiName": "store_us_experimentfired", "id": "8638260081", "eventFilter": null}, {"category": "other", "name": "[US] - Category: Hero Region [#HeroRegion]", "eventType": "custom", "viewId": null, "apiName": "store_us_hero_region", "id": "8638363801", "eventFilter": null}, {"category": "other", "name": "[US] - Office Category: For Mac [8634602225]", "eventType": "custom", "viewId": null, "apiName": "store_us_cat_formac", "id": "8638421733", "eventFilter": null}, {"category": "other", "name": "[US] - PDP: Custom Dropdown Opened", "eventType": "custom", "viewId": null, "apiName": "store_us_dropdown_opened", "id": "8644970032", "eventFilter": null}, {"category": "other", "name": "[US] - PDP: Custom Dropdown Product Changed", "eventType": "custom", "viewId": null, "apiName": "store_us_product_changed", "id": "8648690031", "eventFilter": null}, {"category": "other", "name": "[US] - Add To Cart: Default Sku\t", "eventType": "custom", "viewId": null, "apiName": "store_us_addtocart_defaultsku", "id": "8737322517", "eventFilter": null}], "revision": "1424"},g=n(92);if(l.populateDirectiveData(),s.clientHasAlreadyInitialized())return void a.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");if(s.shouldBailForDesktopApp())return void a.log("Main / Disabling because of desktop app.");if(s.shouldLoadInnie())f.registerFunction("getProjectId",(function(){return p.projectId})),d.addScriptAsync("https://app.optimizely.com/js/innie.js"),a.log("Main / Disabling in favor of the editor client.");else if(s.shouldLoadPreview()){var h;h=s.isSlave()?window.optimizely:window.optimizely=window.optimizely||[],h.push({type:"load",data:p}),a.log("Main / Disabling in favor of the preview client."),n(139).setupPreviewGlobal(),n(139).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:p}),s.isSlave()||(f.registerFunction("getProjectId",(function(){return p.projectId})),d.addScriptSync("https://optimizely.s3.amazonaws.com/public/3698060313/s/store_enus/preview.js"))}else if(s.shouldBootstrapDataForPreview()){f.registerFunction("initializeOptimizelyPreview",e);var v=s.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:f.getFunction("getProjectId")();c=t(s.getProjectToken(),v,s.getPreviewLayerIds()),d.addScriptSync(c),n(139).setupPreviewGlobal(),d.addScriptAsync("/dist/js/preview_ui.js")}else s.shouldBootstrapDataForEditor()?(f.registerFunction("initializeOptimizelyPreview",e),d.addScriptAsync(window.optimizely_editor_data_endpoint)):s.shouldInitialize()&&e(p);r.timeEnd("block")}try{i()}catch(e){try{n(138).handleError(e)}catch(e){console.log(e)}}}),(function(e,t,n){function i(e){return f.isEmpty(e)?I.resolve():S.request({url:P,method:"POST",data:e})["catch"]((function(e){m.error("Failed to collect rum data :",e)}))}function r(){var e=v.getCurrentScript();if(e)return e.src}function a(){var e={id:R.getRumId(),v:L,account:D.getAccountId(),project:D.getSnippetId()||D.getProjectId(),snippet:D.getSnippetId(),revision:D.getRevision(),clientVersion:"0.72.0",hasSlave:!1,wxhr:!0},t=b.getBucketingId();t&&(e["user"]=t);try{e["numBehaviorEvents"]=g.getEvents().length}catch(e){m.debug("Unable to get behavior events for RUM:",e)}f.extend(e,o(),c()),_.dispatch(T.SET_RUM_DATA,{data:e})}function o(){var e=y.getGlobal("performance");if(e){var t,n=R.getScriptSrc();try{if(n){m.debug("Using derived script src: ",n);var i=e.getEntriesByName(n);i.length>0&&(t=i[0])}if(!t){var r=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;m.debug("Scanning resource timing entries with regex");var a=e.getEntriesByType("resource");t=f.find(a,(function(e){return r.test(e.name)}))}if(t)return f.mapValues(A.ResourceTimingAttributes,(function(e,n){return Math.round(1e3*(t[n]||0))/1e3}))}catch(e){return}}}function s(){try{return!v.querySelector("body")}catch(e){return null}}function u(){try{y.getGlobal("requestAnimationFrame")((function(){var e=R.getRumData().timebase;_.dispatch(T.SET_RUM_DATA,{data:{render:h.now()-(e||0)}})}))}catch(e){return}}function c(){return O.getDurationsFor(f.values(A.RUMPerformanceTimingAttributes))}function l(){var e={numKeys:E.allKeys().length,sizeKeys:E.allKeys().toString().length,sizeValues:E.allValues().toString().length},t=y.getGlobal("performance"),n=t?t.timing:{},r=O.getMarks()||{},a=R.getApiData(),o=R.getDOMObservationData(),s={apiCalls:a,DOMObservationData:o,paintTimings:d()},u=y.getGlobal("Prototype");u&&!f.isUndefined(u.Version)&&(s.prototypeJS=u.Version);var c=!1;c=!0;var l=N.getFrames();l.length&&(s.xdFramesLoaded=l.length);var p={id:R.getRumId(),v:L,project:D.getSnippetId()||D.getProjectId(),lsMetrics:e,navigationTimings:n,userTimings:r,xd:c,apis:f.keys(a),extras:s};i(p)}function d(){var e=y.getGlobal("performance");if(e){var t=e.getEntriesByType("paint");if(!f.isEmpty(t))return f.reduce(t,(function(e,t){return e[t.name]=Math.round(t.startTime),e}),{})}}var f=n(2),p=n(5),g=n(6),h=n(14),v=n(66),_=n(8),E=n(72).LocalStorage,m=n(11),I=n(77).Promise,y=n(67),S=n(83),T=n(15),A=n(12),w=n(17),D=w.get("stores/global"),b=w.get("stores/visitor_id"),R=w.get("stores/rum"),O=w.get("stores/performance"),N=w.get("stores/xdomain"),P="https://rum.optimizely.com/rum",C=3e3,L="1.0",V=.003;t.initialize=function(){var e=p.generate().replace(/-/g,""),t=Math.random()<V;if(t)return _.dispatch(T.SET_RUM_DATA,{id:e,RumHost:P,inRumSample:t,src:r(),data:{id:e,sync:s(),timebase:h.now(),sampleRate:V}}),u(),y.addEventListener("load",l),new I(function(e,t){setTimeout((function(){a();var n=R.getRumData();n=f.pickBy(n,(function(e){return!f.isUndefined(e)})),i(n).then(e,t)}),C)}).catch((function(e){m.warn("RUM / Error sending data:",e)}))}}),(function(e,t,n){e.exports=n(3)._.noConflict()}),(function(e,t,n){(function(e,n){(function(){function i(e,t){return e.set(t[0],t[1]),e}function r(e,t){return e.add(t),e}function a(e,t){return u(be(e),pn)}function o(e,t){return!!e.length&&f(e,t,0)>-1}function s(e,t,n){for(var i=-1,r=e.length;++i<r;)if(n(t,e[i]))return!0;return!1}function u(e,t){for(var n=-1,i=t.length,r=e.length;++n<i;)e[r+n]=t[n];return e}function c(e,t,n){for(var i=-1,r=e.length;++i<r;){var a=e[i],o=t(a);if(null!=o&&(s===An?o===o:n(o,s)))var s=o,u=a}return u}function l(e,t,n,i){var r;return n(e,(function(e,n,a){if(t(e,n,a))return r=i?n:e,!1})),r}function d(e,t,n){for(var i=e.length,r=n?i:-1;n?r--:++r<i;)if(t(e[r],r,e))return r;return-1}function f(e,t,n){if(t!==t)return I(e,n);for(var i=n-1,r=e.length;++i<r;)if(e[i]===t)return i;return-1}function p(e,t,n,i,r){return r(e,(function(e,r,a){n=i?(i=!1,e):t(n,e,r,a)})),n}function g(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}function h(e){return function(t){return e(t)}}function v(e,t){return me(t,(function(t){return e[t]}))}function _(e){return e&&e.Object===Object?e:null}function E(e,t){if(e!==t){var n=null===e,i=e===An,r=e===e,a=null===t,o=t===An,s=t===t;if(e>t&&!a||!r||n&&!o&&s||i&&s)return 1;if(e<t&&!n||!s||a&&!i&&r||o&&r)return-1}return 0}function m(e){return gi[e]}function I(e,t,n){for(var i=e.length,r=t+(n?0:-1);n?r--:++r<i;){var a=e[r];if(a!==a)return r}return-1}function y(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function S(e,t){return e="number"==typeof e||di.test(e)?+e:-1,t=null==t?Vn:t,e>-1&&e%1==0&&e<t}function T(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function A(e){var t=-1,n=Array(e.size);return e.forEach((function(e,i){n[++t]=[i,e]})),n}function w(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function D(e){if(jt(e)&&!dr(e)){if(e instanceof b)return e;if(bi.call(e,"__wrapped__"))return tt(e)}return new b(e)}function b(e,t){this.e=e,this.t=[],this.i=!!t}function R(){}function O(e,t){return P(e,t)&&delete e[t]}function N(e,t){if(Qi){var n=e[t];return n===Rn?An:n}return bi.call(e,t)?e[t]:An}function P(e,t){return Qi?e[t]!==An:bi.call(e,t)}function C(e,t,n){e[t]=Qi&&n===An?Rn:n}function L(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function V(){this.a={hash:new R,map:Ki?new Ki:[],string:new R}}function k(e){var t=this.a;return Ze(e)?O("string"==typeof e?t.string:t.hash,e):Ki?t.map["delete"](e):W(t.map,e)}function F(e){var t=this.a;return Ze(e)?N("string"==typeof e?t.string:t.hash,e):Ki?t.map.get(e):Q(t.map,e)}function x(e){var t=this.a;return Ze(e)?P("string"==typeof e?t.string:t.hash,e):Ki?t.map.has(e):X(t.map,e)}function M(e,t){var n=this.a;return Ze(e)?C("string"==typeof e?n.string:n.hash,e,t):Ki?n.map.set(e,t):J(n.map,e,t),this}function U(e){var t=-1,n=e?e.length:0;for(this.a=new L;++t<n;)this.push(e[t])}function G(e,t){var n=e.a;if(Ze(t)){var i=n.a,r="string"==typeof t?i.string:i.hash;return r[t]===Rn}return n.has(t)}function B(e){var t=this.a;if(Ze(e)){var n=t.a,i="string"==typeof e?n.string:n.hash;i[e]=Rn}else t.set(e,Rn)}function z(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function j(){this.a={array:[],map:null}}function H(e){var t=this.a,n=t.array;return n?W(n,e):t.map["delete"](e)}function Y(e){var t=this.a,n=t.array;return n?Q(n,e):t.map.get(e)}function K(e){var t=this.a,n=t.array;return n?X(n,e):t.map.has(e)}function q(e,t){var n=this.a,i=n.array;i&&(i.length<Dn-1?J(i,e,t):(n.array=null,n.map=new L(i)));var r=n.map;return r&&r.set(e,t),this}function W(e,t){var n=$(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():zi.call(e,n,1),!0}function Q(e,t){var n=$(e,t);return n<0?An:e[n][1]}function X(e,t){return $(e,t)>-1}function $(e,t){for(var n=e.length;n--;)if(Nt(e[n][0],t))return n;return-1}function J(e,t,n){var i=$(e,t);i<0?e.push([t,n]):e[i][1]=n}function Z(e,t,n,i){return e===An||Nt(e,wi[n])&&!bi.call(i,n)?t:e}function ee(e,t,n){(n===An||Nt(e[t],n))&&("number"!=typeof t||n!==An||t in e)||(e[t]=n)}function te(e,t,n){var i=e[t];bi.call(e,t)&&Nt(i,n)&&(n!==An||t in e)||(e[t]=n)}function ne(e,t){return e&&ir(t,sn(t),e)}function ie(e){return"function"==typeof e?e:vn}function re(e,t,n,i,r,a,o){var s;if(i&&(s=a?i(e,r,a,o):i(e)),s!==An)return s;if(!zt(e))return e;var u=dr(e);if(u){if(s=Qe(e),!t)return be(e,s)}else{var c=We(e),l=c==Gn||c==Bn;if(fr(e))return Ne(e,t);if(c==Hn||c==kn||l&&!a){if(y(e))return a?e:{};if(s=Xe(l?{}:e),!t)return s=ne(s,e),n?Me(e,s):s}else{if(!pi[c])return a?e:{};s=$e(e,c,t)}}o||(o=new z);var d=o.get(e);return d?d:(o.set(e,s),(u?tr:fe)(e,(function(r,a){te(s,a,re(r,t,n,i,a,e,o))})),n&&!u?Me(e,s):s)}function ae(e){return zt(e)?Gi(e):{}}function oe(e,t,n){if("function"!=typeof e)throw new TypeError(bn);return setTimeout((function(){e.apply(An,n)}),t)}function se(e,t,n,i){var r=-1,a=o,u=!0,c=e.length,l=[],d=t.length;if(!c)return l;n&&(t=me(t,h(n))),i?(a=s,u=!1):t.length>=Dn&&(a=G,u=!1,t=new U(t));e:for(;++r<c;){var f=e[r],p=n?n(f):f;if(u&&p===p){for(var g=d;g--;)if(t[g]===p)continue e;l.push(f)}else a(t,p,i)||l.push(f)}return l}function ue(e,t){var n=!0;return tr(e,(function(e,i,r){return n=!!t(e,i,r)})),n}function ce(e,t){var n=[];return tr(e,(function(e,i,r){t(e,i,r)&&n.push(e)})),n}function le(e,t,n,i){i||(i=[]);for(var r=-1,a=e.length;++r<a;){var o=e[r];t>0&&Vt(o)&&(n||dr(o)||Ct(o))?t>1?le(o,t-1,n,i):u(i,o):n||(i[i.length]=o)}return i}function de(e,t){return null==e?e:nr(e,t,un)}function fe(e,t){return e&&nr(e,t,sn)}function pe(e,t){return ce(t,(function(t){return Gt(e[t])}))}function ge(e,t,n,i,r){return e===t||(null==e||null==t||!zt(e)&&!jt(t)?e!==e&&t!==t:he(e,t,ge,n,i,r))}function he(e,t,n,i,r,a){var o=dr(e),s=dr(t),u=Fn,c=Fn;o||(u=Ni.call(e),u=u==kn?Hn:u),s||(c=Ni.call(t),c=c==kn?Hn:c);var l=u==Hn&&!y(e),d=c==Hn&&!y(t),f=u==c;a||(a=[]);var p=vt(a,(function(t){return t[0]===e}));if(p&&p[1])return p[1]==t;if(a.push([e,t]),f&&!l){var g=o||$t(e)?He(e,t,n,i,r,a):Ye(e,t,u,n,i,r,a);return a.pop(),g}if(!(r&Cn)){var h=l&&bi.call(e,"__wrapped__"),v=d&&bi.call(t,"__wrapped__");if(h||v){var g=n(h?e.value():e,v?t.value():t,i,r,a);return a.pop(),g}}if(!f)return!1;var g=Ke(e,t,n,i,r,a);return a.pop(),g}function ve(e){var t=typeof e;return"function"==t?e:null==e?vn:("object"==t?Ie:we)(e)}function _e(e){return Hi(Object(e))}function Ee(e){e=null==e?e:Object(e);var t=[];for(var n in e)t.push(n);return t}function me(e,t){var n=-1,i=Lt(e)?Array(e.length):[];return tr(e,(function(e,r,a){i[++n]=t(e,r,a)})),i}function Ie(e){var t=sn(e);return function(n){var i=t.length;if(null==n)return!i;for(n=Object(n);i--;){var r=t[i];if(!(r in n&&ge(e[r],n[r],An,Pn|Cn)))return!1}return!0}}function ye(e,t,n,i,r){if(e!==t){var a=dr(t)||$t(t)?An:un(t);tr(a||t,(function(o,s){if(a&&(s=o,o=t[s]),zt(o))r||(r=new z),Se(e,t,s,n,ye,i,r);else{var u=i?i(e[s],o,s+"",e,t,r):An;u===An&&(u=o),ee(e,s,u)}}))}}function Se(e,t,n,i,r,a,o){var s=e[n],u=t[n],c=o.get(u);if(c)return void ee(e,n,c);var l=a?a(s,u,n+"",e,t,o):An,d=l===An;d&&(l=u,dr(u)||$t(u)?dr(s)?l=s:Vt(s)?l=be(s):(d=!1,l=re(u,!a)):Wt(u)||Ct(u)?Ct(s)?l=tn(s):!zt(s)||i&&Gt(s)?(d=!1,l=re(u,!a)):l=s:d=!1),o.set(u,l),d&&r(l,u,i,a,o),o["delete"](u),ee(e,n,l)}function Te(e,t){return e=Object(e),It(t,(function(t,n){return n in e&&(t[n]=e[n]),t}),{})}function Ae(e,t){var n={};return de(e,(function(e,i){t(e,i)&&(n[i]=e)})),n}function we(e){return function(t){return null==t?An:t[e]}}function De(e,t,n){var i=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(r);++i<r;)a[i]=e[i+t];return a}function be(e){return De(e,0,e.length)}function Re(e,t){var n;return tr(e,(function(e,i,r){return n=t(e,i,r),!n})),!!n}function Oe(e,t){var n=e;return It(t,(function(e,t){return t.func.apply(t.thisArg,u([e],t.args))}),n)}function Ne(e,t){if(t)return e.slice();var n=new e.constructor(e.length);return e.copy(n),n}function Pe(e){var t=new e.constructor(e.byteLength);return new Fi(t).set(new Fi(e)),t}function Ce(e){return It(A(e),i,new e.constructor)}function Le(e){var t=new e.constructor(e.source,ci.exec(e));return t.lastIndex=e.lastIndex,t}function Ve(e){return It(w(e),r,new e.constructor)}function ke(e){return er?Object(er.call(e)):{}}function Fe(e,t){var n=t?Pe(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function xe(e,t,n,i){n||(n={});for(var r=-1,a=t.length;++r<a;){var o=t[r],s=i?i(n[o],e[o],o,n,e):e[o];te(n,o,s)}return n}function Me(e,t){return ir(e,ar(e),t)}function Ue(e){return bt((function(t,n){var i=-1,r=n.length,a=r>1?n[r-1]:An;for(a="function"==typeof a?(r--,a):An,t=Object(t);++i<r;){var o=n[i];o&&e(t,o,i,a)}return t}))}function Ge(e,t){return function(n,i){if(null==n)return n;if(!Lt(n))return e(n,i);for(var r=n.length,a=t?r:-1,o=Object(n);(t?a--:++a<r)&&i(o[a],a,o)!==!1;);return n}}function Be(e){return function(t,n,i){for(var r=-1,a=Object(t),o=i(t),s=o.length;s--;){var u=o[e?s:++r];if(n(a[u],u,a)===!1)break}return t}}function ze(e){return function(){var t=arguments,n=ae(e.prototype),i=e.apply(n,t);return zt(i)?i:n}}function je(e,t,n,i){function r(){for(var t=-1,s=arguments.length,u=-1,c=i.length,l=Array(c+s),d=this&&this!==Ti&&this instanceof r?o:e;++u<c;)l[u]=i[u];for(;s--;)l[u++]=arguments[++t];return d.apply(a?n:this,l)}if("function"!=typeof e)throw new TypeError(bn);var a=t&On,o=ze(e);return r}function He(e,t,n,i,r,a){var o=-1,s=r&Cn,u=r&Pn,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;for(var d=!0;++o<c;){var f,p=e[o],g=t[o];if(f!==An){if(f)continue;d=!1;break}if(u){if(!Re(t,(function(e){return p===e||n(p,e,i,r,a)}))){d=!1;break}}else if(p!==g&&!n(p,g,i,r,a)){d=!1;break}}return d}function Ye(e,t,n,i,r,a,o){switch(n){case xn:case Mn:return+e==+t;case Un:return e.name==t.name&&e.message==t.message;case jn:return e!=+e?t!=+t:e==+t;case Yn:case qn:return e==t+""}return!1}function Ke(e,t,n,i,r,a){var o=r&Cn,s=sn(e),u=s.length,c=sn(t),l=c.length;if(u!=l&&!o)return!1;for(var d=u;d--;){var f=s[d];if(!(o?f in t:bi.call(t,f)))return!1}for(var p=!0,g=o;++d<u;){f=s[d];var h,v=e[f],_=t[f];if(!(h===An?v===_||n(v,_,i,r,a):h)){p=!1;break}g||(g="constructor"==f)}if(p&&!g){var E=e.constructor,m=t.constructor;E!=m&&"constructor"in e&&"constructor"in t&&!("function"==typeof E&&E instanceof E&&"function"==typeof m&&m instanceof m)&&(p=!1)}return p}function qe(e,t){var n=e[t];return Yt(n)?n:An}function We(e){return Ni.call(e)}function Qe(e){var t=e.length,n=e.constructor(t);return t&&"string"==typeof e[0]&&bi.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function Xe(e){return"function"!=typeof e.constructor||et(e)?{}:ae(Mi(e))}function $e(e,t,n){var i=e.constructor;switch(t){case Xn:return Pe(e);case xn:case Mn:return new i(+e);case $n:case Jn:case Zn:case ei:case ti:case ni:case ii:case ri:case ai:return Fe(e,n);case zn:return Ce(e);case jn:case qn:return new i(e);case Yn:return Le(e);case Kn:return Ve(e);case Wn:return ke(e)}}function Je(e){var t=e?e.length:An;return Bt(t)&&(dr(e)||Xt(e)||Ct(e))?g(t,String):null}function Ze(e){var t=typeof e;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=e||null==e}function et(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||wi;return e===n}function tt(e){var t=new b(e.e,e.i);return t.t=be(e.t),t}function nt(e){return ce(e,Boolean)}function it(e,t){return e&&e.length?d(e,ve(t,3)):-1}function rt(e){var t=e?e.length:0;return t?le(e,1):[]}function at(e){var t=e?e.length:0;return t?le(e,Ln):[]}function ot(e){return e?e[0]:An}function st(e,t,n){var i=e?e.length:0;n="number"==typeof n?n<0?Yi(i+n,0):n:0;for(var r=(n||0)-1,a=t===t;++r<i;){var o=e[r];if(a?o===t:o!==o)return r}return-1}function ut(e){var t=e?e.length:0;return t?e[t-1]:An}function ct(e,t,n){var i=e?e.length:0;return t=null==t?0:+t,n=n===An?i:+n,i?De(e,t,n):[]}function lt(e){var t=D(e);return t.i=!0,t}function dt(e,t){return t(e),e}function ft(e,t){return t(e)}function pt(){return Oe(this.e,this.t)}function gt(e,t,n){return t=n?An:t,ue(e,ve(t))}function ht(e,t){return ce(e,ve(t))}function vt(e,t){return l(e,ve(t),tr)}function _t(e,t){return tr(e,ie(t))}function Et(e,t,n,i){e=Lt(e)?e:pn(e),n=n&&!i?pr(n):0;var r=e.length;return n<0&&(n=Yi(r+n,0)),Xt(e)?n<=r&&e.indexOf(t,n)>-1:!!r&&f(e,t,n)>-1}function mt(e,t){return me(e,ve(t))}function It(e,t,n){return p(e,ve(t),n,arguments.length<3,tr)}function yt(e){return null==e?0:(e=Lt(e)?e:sn(e),e.length)}function St(e,t,n){return t=n?An:t,Re(e,ve(t))}function Tt(e,t){var n=0;return t=ve(t),me(me(e,(function(e,i,r){return{value:e,index:n++,criteria:t(e,i,r)}})).sort((function(e,t){return E(e.criteria,t.criteria)||e.index-t.index})),we("value"))}function At(e,t){var n;if("function"!=typeof t)throw new TypeError(bn);return e=pr(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=An),n}}function wt(e){if("function"!=typeof e)throw new TypeError(bn);return function(){return!e.apply(this,arguments)}}function Dt(e){return At(2,e)}function bt(e,t){if("function"!=typeof e)throw new TypeError(bn);return t=Yi(t===An?e.length-1:pr(t),0),function(){for(var n=arguments,i=-1,r=Yi(n.length-t,0),a=Array(r);++i<r;)a[i]=n[t+i];var o=Array(t+1);for(i=-1;++i<t;)o[i]=n[i];return o[t]=a,e.apply(this,o)}}function Rt(e){return zt(e)?dr(e)?be(e):ir(e,sn(e)):e}function Ot(e){return re(e,!0,!0)}function Nt(e,t){return e===t||e!==e&&t!==t}function Pt(e,t){return e>t}function Ct(e){return Vt(e)&&bi.call(e,"callee")&&(!Bi.call(e,"callee")||Ni.call(e)==kn)}function Lt(e){return null!=e&&Bt(rr(e))&&!Gt(e)}function Vt(e){return jt(e)&&Lt(e)}function kt(e){return e===!0||e===!1||jt(e)&&Ni.call(e)==xn}function Ft(e){return jt(e)&&Ni.call(e)==Mn}function xt(e){if(Lt(e)&&(dr(e)||Xt(e)||Gt(e.splice)||Ct(e)))return!e.length;for(var t in e)if(bi.call(e,t))return!1;return!0}function Mt(e,t){return ge(e,t)}function Ut(e){return"number"==typeof e&&ji(e)}function Gt(e){var t=zt(e)?Ni.call(e):"";return t==Gn||t==Bn}function Bt(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Vn}function zt(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function jt(e){return!!e&&"object"==typeof e}function Ht(e){return qt(e)&&e!=+e}function Yt(e){return null!=e&&(Gt(e)?Ci.test(Di.call(e)):jt(e)&&(y(e)?Ci:li).test(e))}function Kt(e){return null===e}function qt(e){return"number"==typeof e||jt(e)&&Ni.call(e)==jn}function Wt(e){if(!jt(e)||Ni.call(e)!=Hn||y(e))return!1;var t=Mi(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&Di.call(n)==Oi}function Qt(e){return zt(e)&&Ni.call(e)==Yn}function Xt(e){return"string"==typeof e||!dr(e)&&jt(e)&&Ni.call(e)==qn}function $t(e){return jt(e)&&Bt(e.length)&&!!fi[Ni.call(e)]}function Jt(e){return e===An}function Zt(e,t){return e<t}function en(e){return Lt(e)?e.length?be(e):[]:pn(e)}function tn(e){return ir(e,un(e))}function nn(e){return"string"==typeof e?e:null==e?"":e+""}function rn(e,t){var n=ae(e);return t?hr(n,t):n}function an(e,t){return e&&fe(e,ie(t))}function on(e,t){return null!=e&&bi.call(e,t)}function sn(e){var t=et(e);if(!t&&!Lt(e))return _e(e);var n=Je(e),i=!!n,r=n||[],a=r.length;for(var o in e)!bi.call(e,o)||i&&("length"==o||S(o,a))||t&&"constructor"==o||r.push(o);return r}function un(e){for(var t=-1,n=et(e),i=Ee(e),r=i.length,a=Je(e),o=!!a,s=a||[],u=s.length;++t<r;){var c=i[t];o&&("length"==c||S(c,u))||"constructor"==c&&(n||!bi.call(e,c))||s.push(c)}return s}function cn(e,t){var n={};return t=ve(t,3),fe(e,(function(e,i,r){n[i]=t(e,i,r)})),n}function ln(e,t){return t=ve(t),Ae(e,(function(e,n){return!t(e,n)}))}function dn(e,t){return null==e?{}:Ae(e,ve(t))}function fn(e,t,n){var i=null==e?An:e[t];return i===An&&(i=n),Gt(i)?i.call(e):i}function pn(e){return e?v(e,sn(e)):[]}function gn(e){return e=nn(e),e&&si.test(e)?e.replace(oi,m):e}function hn(e){return function(){return e}}function vn(e){return e}function _n(e){return Ie(hr({},e))}function En(e,t,n){var i=sn(t),r=pe(t,i);null!=n||zt(t)&&(r.length||!i.length)||(n=t,t=e,e=this,r=pe(t,sn(t)));var a=!(zt(n)&&"chain"in n)||n.chain,o=Gt(e);return tr(r,(function(n){var i=t[n];e[n]=i,o&&(e.prototype[n]=function(){var t=this.i;if(a||t){var n=e(this.e),r=n.t=be(this.t);return r.push({func:i,args:arguments,thisArg:e}),n.i=t,n}return i.apply(e,u([this.value()],arguments))})})),e}function mn(){return Ti._===this&&(Ti._=Pi),this}function In(){}function yn(e){var t=++Ri;return nn(e)+t}function Sn(e){return e&&e.length?c(e,vn,Pt):An}function Tn(e){return e&&e.length?c(e,vn,Zt):An}var An,wn="4.6.1",Dn=200,bn="Expected a function",Rn="__lodash_hash_undefined__",On=1,Nn=32,Pn=1,Cn=2,Ln=1/0,Vn=9007199254740991,kn="[object Arguments]",Fn="[object Array]",xn="[object Boolean]",Mn="[object Date]",Un="[object Error]",Gn="[object Function]",Bn="[object GeneratorFunction]",zn="[object Map]",jn="[object Number]",Hn="[object Object]",Yn="[object RegExp]",Kn="[object Set]",qn="[object String]",Wn="[object Symbol]",Qn="[object WeakMap]",Xn="[object ArrayBuffer]",$n="[object Float32Array]",Jn="[object Float64Array]",Zn="[object Int8Array]",ei="[object Int16Array]",ti="[object Int32Array]",ni="[object Uint8Array]",ii="[object Uint8ClampedArray]",ri="[object Uint16Array]",ai="[object Uint32Array]",oi=/[&<>"'`]/g,si=RegExp(oi.source),ui=/[\\^$.*+?()[\]{}|]/g,ci=/\w*$/,li=/^\[object .+?Constructor\]$/,di=/^(?:0|[1-9]\d*)$/,fi={};fi[$n]=fi[Jn]=fi[Zn]=fi[ei]=fi[ti]=fi[ni]=fi[ii]=fi[ri]=fi[ai]=!0,fi[kn]=fi[Fn]=fi[Xn]=fi[xn]=fi[Mn]=fi[Un]=fi[Gn]=fi[zn]=fi[jn]=fi[Hn]=fi[Yn]=fi[Kn]=fi[qn]=fi[Qn]=!1;var pi={};pi[kn]=pi[Fn]=pi[Xn]=pi[xn]=pi[Mn]=pi[$n]=pi[Jn]=pi[Zn]=pi[ei]=pi[ti]=pi[zn]=pi[jn]=pi[Hn]=pi[Yn]=pi[Kn]=pi[qn]=pi[Wn]=pi[ni]=pi[ii]=pi[ri]=pi[ai]=!0,pi[Un]=pi[Gn]=pi[Qn]=!1;var gi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},hi={"function":!0,object:!0},vi=hi[typeof t]&&t&&!t.nodeType?t:An,_i=hi[typeof e]&&e&&!e.nodeType?e:An,Ei=_i&&_i.exports===vi?vi:An,mi=_(vi&&_i&&"object"==typeof n&&n),Ii=_(hi[typeof self]&&self),yi=_(hi[typeof window]&&window),Si=_(hi[typeof this]&&this),Ti=mi||yi!==(Si&&Si.window)&&yi||Ii||Si||Function("return this")(),Ai=Array.prototype,wi=Object.prototype,Di=Function.prototype.toString,bi=wi.hasOwnProperty,Ri=0,Oi=Di.call(Object),Ni=wi.toString,Pi=Ti._,Ci=RegExp("^"+Di.call(bi).replace(ui,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Li=Ei?Ti.Buffer:An,Vi=Ti.Reflect,ki=Ti.Symbol,Fi=Ti.Uint8Array,xi=Vi?Vi.enumerate:An,Mi=Object.getPrototypeOf,Ui=Object.getOwnPropertySymbols,Gi=Object.create,Bi=wi.propertyIsEnumerable,zi=Ai.splice,ji=Ti.isFinite,Hi=Object.keys,Yi=Math.max,Ki=qe(Ti,"Map"),qi=qe(Ti,"Set"),Wi=qe(Ti,"WeakMap"),Qi=qe(Object,"create"),Xi=Ki?Di.call(Ki):"",$i=qi?Di.call(qi):"",Ji=Wi?Di.call(Wi):"",Zi=ki?ki.prototype:An,er=Zi?Zi.valueOf:An,tr=Ge(fe),nr=Be();xi&&!Bi.call({valueOf:1},"valueOf")&&(Ee=function(e){return T(xi(e))});var ir=xe,rr=we("length"),ar=Ui||function(){return[]};(Ki&&We(new Ki)!=zn||qi&&We(new qi)!=Kn||Wi&&We(new Wi)!=Qn)&&(We=function(e){var t=Ni.call(e),n=t==Hn?e.constructor:null,i="function"==typeof n?Di.call(n):"";if(i)switch(i){case Xi:return zn;case $i:return Kn;case Ji:return Qn}return t});var or=bt((function(e,t){return dr(e)||(e=null==e?[]:[Object(e)]),t=le(t,1),a(e,t)})),sr=bt((function(e,t,n){return je(e,On|Nn,t,n)})),ur=bt((function(e,t){return oe(e,1,t)})),cr=bt((function(e,t,n){return oe(e,gr(t)||0,n)})),lr=bt((function(e,t){return je(e,Nn,An,t)})),dr=Array.isArray,fr=Li?function(e){return e instanceof Li}:hn(!1),pr=Number,gr=Number,hr=Ue((function(e,t){ir(t,sn(t),e)})),vr=Ue((function(e,t){ir(t,un(t),e)})),_r=Ue((function(e,t,n,i){xe(t,un(t),e,i)})),Er=bt((function(e){return e.push(An,Z),_r.apply(An,e)})),mr=Ue((function(e,t,n){ye(e,t,n)})),Ir=bt((function(e,t){return null==e?{}:(t=me(le(t,1),String),Te(e,se(un(e),t)))})),yr=bt((function(e,t){return null==e?{}:Te(e,le(t,1))})),Sr=ve;b.prototype=ae(D.prototype),b.prototype.constructor=b,R.prototype=Qi?Qi(null):wi,L.prototype.clear=V,L.prototype["delete"]=k,L.prototype.get=F,L.prototype.has=x,L.prototype.set=M,U.prototype.push=B,z.prototype.clear=j,z.prototype["delete"]=H,z.prototype.get=Y,z.prototype.has=K,z.prototype.set=q,D.assign=hr,D.assignIn=vr,D.before=At,D.bind=sr,D.chain=lt,D.compact=nt,D.concat=or,D.create=rn,D.defaults=Er,D.defer=ur,D.delay=cr,D.filter=ht,D.flatten=rt,D.flattenDeep=at,D.iteratee=Sr,D.keys=sn,D.map=mt,D.mapValues=cn,D.matches=_n,D.merge=mr,D.mixin=En,D.negate=wt,D.omit=Ir,D.omitBy=ln,D.once=Dt,D.partial=lr,D.pick=yr,D.pickBy=dn,D.slice=ct,D.sortBy=Tt,D.tap=dt,D.thru=ft,D.toArray=en,D.values=pn,D.extend=vr,En(D,D),D.clone=Rt,D.cloneDeep=Ot,D.escape=gn,D.every=gt,D.find=vt,D.findIndex=it,D.forEach=_t,D.forOwn=an,D.has=on,D.head=ot,D.identity=vn,D.includes=Et,D.indexOf=st,D.isArguments=Ct,D.isArray=dr,D.isBoolean=kt,D.isDate=Ft,D.isEmpty=xt,D.isEqual=Mt,D.isFinite=Ut,D.isFunction=Gt,D.isNaN=Ht,D.isNull=Kt,D.isNumber=qt,D.isObject=zt,D.isRegExp=Qt,D.isString=Xt,D.isUndefined=Jt,D.last=ut,D.max=Sn,D.min=Tn,D.noConflict=mn,D.noop=In,D.reduce=It,D.result=fn,D.size=yt,D.some=St,D.uniqueId=yn,D.each=_t,D.first=ot,En(D,(function(){var e={};return fe(D,(function(t,n){bi.call(D.prototype,n)||(e[n]=t)})),e})(),{chain:!1}),D.VERSION=wn,tr(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(e){var t=(/^(?:replace|split)$/.test(e)?String.prototype:Ai)[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(e);D.prototype[e]=function(){var e=arguments;return i&&!this.i?t.apply(this.value(),e):this[n]((function(n){return t.apply(n,e)}))}})),D.prototype.toJSON=D.prototype.valueOf=D.prototype.value=pt,(yi||Ii||{})._=D,vi&&_i&&(Ei&&((_i.exports=D)._=D),vi._=D)}).call(this)}).call(t,n(4)(e),(function(){return this})())}),(function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}),(function(e,t){t.generate=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}}),(function(e,t,n){var i=n(7);t.initializeStore=i.initialize,t.addEvent=i.addEvent,t.getEvents=i.getEvents,t.usageInBytes=i.usageInBytes}),(function(e,t,n){function i(e){_.dispatch(m.SET_VISITOR_EVENTS,e)}function r(e){_.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:e})}function a(e){_.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:e})}function o(e){_.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:e})}function s(e){_.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:e})}function u(){_.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}function c(){return O.getEvents()}function l(){return N.getBaseMap()}function d(){return N.getEventQueue()}function f(){return N.getLastEvent()}function p(){return N.getCleared()}function g(){return N.getInitialized()}function h(){return i(c().concat(d())),a([]),c().length>C&&(i(c().slice(-C)),!0)}var v=n(2),_=n(8),E=n(11),m=n(15),I=n(63),y=n(64),S=n(14),T=t,A=n(53).EventBase,w=n(53).Event,D=n(54),b=n(82),R=n(17),O=R.get("stores/visitor_events"),N=R.get("stores/visitor_events_manager"),P={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"},C=1e3;t.initialize=function(e,t){if(!g()){T.u(e,t);var n=c();n.length>0&&o(n[n.length-1]);var i=d();i.length>0&&o(i[i.length-1]),u()}},t.addEvent=function(e){E.debug("Behavior store: adding event",e);var t=T.l(e);o(t),a(d().concat(t)),T.d(d())},t.getEvents=function(){return d().length>0&&(h()&&b.sessionize(c()),T.f(c()),T.d(d())),c()},T.u=function(e,t){T.g(e,t)&&(T.f(c()),T.d(d())),b.sessionize(c())},T.g=function(e,t){if(0===e.length&&0===t.length)return i([]),a([]),!1;var n=!1,r=e[0]||t[0];return P.EVENTBASE in r?(i(T.h(e)),a(T.h(t))):(n=!0,i(T.I(e)),a(T.I(t))),d().length>0&&(h(),n=!0),i(T._updateBaseMapAndMaybeDedupe(c())),T._migrateEventBasesAndUpdateStore()&&(n=!0),n},T.I=function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n],r=T.S(i);t[n]=new w(r,i[D.FIELDS.TIME])}return t},T._migrateEventBasesAndUpdateStore=function(){var e=!1,t=T.T();return b.applyMigrations(t)&&(e=!0,r({}),i(T._updateBaseMapAndMaybeDedupe(c())),a(T._updateBaseMapAndMaybeDedupe(d()))),e},T.A=function(){return S.now()},T.l=function(e){var t,n=e.name,i=e.type||"default",r=e.category||I.OTHER,a=e.tags||{};e.revenue&&(t=e.revenue);var o=new A(n,i,r,a,t);o=T.w(o);var s=T.A(),u=new w(o,s,-1);return b.updateSessionId(f(),u),u},T._updateBaseMapAndMaybeDedupe=function(e){for(var t=0;t<e.length;t++)e[t].eventBase=T.w(e[t].eventBase);return e},T.f=function(e){var t=T.D(e);y.persistBehaviorEvents(t)},T.d=function(e){var t=T.D(e);y.persistBehaviorEventQueue(t)},T.b=function(){p()||(i([]),a([]),T.f(c()),T.d(d()),r({}),o(null),s(!0))},T.w=function(e){var t=e.hash(),n=l(),i=n[t];if(v.isUndefined(i))return n[t]=[e],r(n),e;for(var a=0;a<i.length;a++)if(e.equals(i[a]))return i[a];return i.push(e),r(n),e},T.T=function(){var e=[],t=l();for(var n in t)t.hasOwnProperty(n)&&(e=e.concat(t[n]));return e},T.D=function(e){for(var t=function(e){var t={};t[D.FIELDS.NAME]=e.getValueOrDefault([D.FIELDS.NAME]),t[D.FIELDS.TYPE]=e.getValueOrDefault([D.FIELDS.TYPE]);var n=e.getValueOrDefault([D.FIELDS.CATEGORY]);v.isUndefined(n)||(t[D.FIELDS.CATEGORY]=n);var i=e.getValueOrDefault([D.FIELDS.REVENUE]);v.isUndefined(i)||(t[D.FIELDS.REVENUE]=i);var r=e.getValueOrDefault([D.FIELDS.OPTIONS]);return v.isUndefined(r)||(t[D.FIELDS.OPTIONS]=r),t},n=P,i=[],r="_idx_",a=0;a<e.length;a++){var o,s,u=e[a],c=u.eventBase;if(c.hasOwnProperty(r)){o=i[c[r]];var l=u[D.FIELDS.TIME]-(o[n.TIMEBASE]||0);s={},s[n.DELTA]=l,s[n.INDEX]=a,o[n.TIMESTAMPS].push(s)}else o={},o[n.EVENTBASE]=t(u),o[n.HASH]=c.hash(),o[n.TIMEBASE]=u[D.FIELDS.TIME],s={},s[n.DELTA]=0,s[n.INDEX]=a,o[n.TIMESTAMPS]=[s],i.push(o),c[r]=i.length-1}for(a=0;a<e.length;a++)delete e[a].eventBase[r];return i},T.S=function(e,t){var n=new A(e[D.FIELDS.NAME],e[D.FIELDS.TYPE],e[D.FIELDS.CATEGORY],e[D.FIELDS.OPTIONS],e[D.FIELDS.REVENUE]);return v.isUndefined(t)||n.setHash(t),n},T.h=function(e){for(var t=P,n=[],i=0;i<e.length;i++)for(var r=e[i],a=T.S(r[t.EVENTBASE],r[t.HASH]),o=r[t.TIMEBASE],s=r[t.TIMESTAMPS],u=0;u<s.length;u++){var c=s[u],l=new w(a,o+c[t.DELTA]),d=c[t.INDEX];n[d]=l}return n},t.deserialize=function(e){return T.h(e)},t.mergeAllEvents=function(e){var t=[].concat.apply([],e);return t.sort(b.sessionSortPredicate),b.sessionize(t),t}}),(function(e,t,n){var i=n(9);e.exports=i.create()}),(function(e,t,n){function i(e){e=e||{},this.R={},this.O={},
this.N=0,this.P=[],this.C=[]}function r(e,t){return function(){var n=e.indexOf(t);n!==-1&&e.splice(n,1)}}var a=n(10),o=n(2);i.prototype.registerStores=function(e){o.forOwn(e,function(e,t){this.R[t]=new a(t,this,e)}.bind(this))},i.prototype.getStore=function(e){return this.R[e]},i.prototype.dispatch=function(e,t){this.dispatchId++,o.each(this.P,function(n){n.call(this,e,t)}.bind(this)),o.forOwn(this.R,(function(n){n.L(e,t)})),o.each(this.C,function(n){n.call(this,e,t)}.bind(this)),o.forOwn(this.R,function(e,t){e.hasChanges()&&this.O[t]&&(e.resetChange(),o.each(this.O[t],(function(t){t(e)})))}.bind(this))},i.prototype.reset=function(){this.O={},o.forOwn(this.R,(function(e,t){e.V()}))},i.prototype.getState=function(){var e={};return o.forOwn(this.R,(function(t,n){e[n]=t.k()})),e},i.prototype.onPreAction=function(e){var t=this.P;return t.push(e),r(t,e)},i.prototype.onPostAction=function(e){var t=this.C;return t.push(e),r(t,e)},i.prototype.F=function(e,t){this.O[e]||(this.O[e]=[]),this.O[e].push(t);var n=this.O[e];return r(n,t)},e.exports={create:function(e){return new i(e)}}}),(function(e,t,n){function i(e,t,n){this.x=e,this.M=t,this.U=0,this.G=!1,this.B={},r.extend(this,n),this.z={},this.initialize&&this.initialize()}var r=n(2);i.prototype.L=function(e,t){var n=this.B[e];n&&"function"==typeof n&&n.call(this,t,e)},i.prototype.k=function(){return r.cloneDeep(this.z)},i.prototype.on=function(e,t){this.B[e]=t.bind(this)},i.prototype.observe=function(e){return this.M.F(this.x,e)},i.prototype.emitChange=function(){this.G=!0,this.U++},i.prototype.hasChanges=function(){return this.G},i.prototype.resetChange=function(){this.G=!1},i.prototype.getStateId=function(){return this.U},i.prototype.V=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},e.exports=i}),(function(e,t,n){function i(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}var r=n(2),a=n(12),o=n(14),s=n(8),u=n(15),c=n(16);i.prototype.j=function(){return!r.isNull(this.logLevel)},i.prototype.setLogLevel=function(e){var t=this.H(e);null===t?console.error("Unknown log level: "+e):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},i.prototype.setLogMatcher=function(e){r.isString(e)?this.logMatcher=e:this.logMatcher="",this.logGroup=0},i.prototype.shouldLog=function(e){return this.j()&&this.logLevel>=e},i.prototype.matchesLogMessage=function(e,t){var n=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===e?this.logGroup++:"GROUPEND"===e&&this.logGroup--,!0;var i=r.some(t,(function(e){if(!r.isString(e))try{e=c.stringify(e)}catch(e){}return r.isString(e)&&r.includes(e,n)}));return i&&"GROUPSTART"===e&&this.logGroup++,i},i.prototype.storeLog=function(e,t){var n={logLevel:e,logMessage:t};s.dispatch(u.LOG,n)},i.prototype.flush=function(){var e=n(17),t=e.get("stores/log");this.logGroup=0;var i=t.getLogs();r.each(i,function(e){this.Y(e.logLevel,e.logMessage,!0)}.bind(this))},i.prototype.Y=function(e,t,n){var i,o=e;if(console)switch(e){case"GROUPSTART":i=console.groupCollapsed,o=a.LogLevel.DEBUG;break;case"GROUPEND":i=console.groupEnd,o=a.LogLevel.DEBUG;break;case a.LogLevel.ERROR:i=console.error;break;case a.LogLevel.WARN:i=console.warn;break;case a.LogLevel.DEBUG:i=console.debug;break;default:i=console.log}try{n||this.j()&&!this.shouldLog(o)||(r.isArray(t)&&r.isString(t[0])&&(t=this.K(t)),this.storeLog(e,t)),i&&this.shouldLog(o)&&this.matchesLogMessage(e,t)&&i.apply(console,t)}catch(e){console&&(console.error?console.error(e):console.log(e))}},i.prototype.debug=function(){this.Y(a.LogLevel.DEBUG,[].slice.call(arguments))},i.prototype.log=function(){this.Y(a.LogLevel.INFO,[].slice.call(arguments))},i.prototype.logAlways=function(){var e=this.K([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,e),this.storeLog(a.LogLevel.INFO,e)},i.prototype.warn=function(){this.Y(a.LogLevel.WARN,[].slice.call(arguments))},i.prototype.error=function(e){var t=[].slice.call(arguments);1===t.length&&e.stack?(this.Y(a.LogLevel.ERROR,[this.q(),e]),this.Y(a.LogLevel.INFO,[e.stack])):this.Y(a.LogLevel.ERROR,t)},i.prototype.groupCollapsed=function(){this.Y("GROUPSTART",[].slice.call(arguments))},i.prototype.groupEnd=function(){this.Y("GROUPEND",[].slice.call(arguments))},i.prototype.K=function(e){var t=this.q().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+e[0]].concat(e.slice(1))},i.prototype.q=function(){return this.timebase?o.now()-this.timebase:0},i.prototype.H=function(e){return e&&(e=e.toUpperCase(),"TRUE"===e&&(e="INFO"),"FALSE"===e&&(e="OFF"),"ALL"===e&&(e="DEBUG"),!r.isUndefined(a.LogLevel[e]))?a.LogLevel[e]:null},e.exports=new i}),(function(e,t,n){var i=n(13);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},t.Lifecycle=i({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes=i({immediate:null,manual:null,callback:null,polling:null}),t.StorageKeys={PENDING_EVENTS:"pending_events"},t.PluginTypes=i({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null}),t.ResourceTimingAttributes=i({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null}),t.RUMPerformanceTimingAttributes=i({blockTime:null}),t.AttributionTypes=i({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=i({XMLHttpRequest:null}),t.PerformanceData=i({performance_marks:null,resource_timing:null,performance_timing:null}),t.PerformanceCounters=i({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"}}),(function(e,t){"use strict";var n=function(e){var t,n={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};e.exports=n}),(function(e,t){t.now=function(){return+new Date}}),(function(e,t,n){var i=n(13);e.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})}),(function(e,t,n){function i(e){var t=[Array.prototype],n=[];r.each(t,(function(e){r.isUndefined(e.toJSON)||(n.push(e.toJSON),delete e.toJSON)}));var i,a;try{i=e()}catch(e){a=e}finally{r.each(n,(function(e,n){t[n].toJSON=e}))}if(a)throw a;return i}var r=n(2);t.stringify=function(){return i(function(){return JSON.stringify.apply(null,this)}.bind(arguments))},t.parse=JSON.parse}),(function(e,t,n){var i=n(2),r=n(8),a=n(18),o=a.create(),s={action_data:n(19),async_request:n(21),audience_data:n(22),change_data:n(23),cleanup:n(24),cookie_options:n(25),event_data:n(26),event_emitter:n(27),dimension_data:n(28),directive:n(29),global:n(30),global_state:n(31),integration_settings:n(32),layer:n(33),layer_data:n(34),log:n(36),observed_redirect:n(37),pending_events:n(38),performance:n(39),plugins:n(40),provider_status:n(41),pending_redirect:n(42),rum:n(43),sandbox:n(44),session:n(45),tracker_optimizely:n(46),ua_data:n(47),view:n(48),view_data:n(49),visitor:n(50),visitor_attribute_entity:n(51),visitor_events:n(52),visitor_events_manager:n(58),visitor_id:n(59),visitor_bucketing:n(60),xdomain:n(61)};s["group_data"]=n(62),r.registerStores(s),i.forOwn(s,(function(e,t){o.register("stores/"+t,r.getStore(t))})),e.exports=o}),(function(e,t,n){function i(){this.W={}}var r=n(2);i.prototype.register=function(e,t){if(1===arguments.length){var n=this;return void r.each(e,(function(e,t){n.register(t,e)}))}if(this.W[e])throw new Error("Module already registered for: "+e);this.W[e]=t},i.prototype.get=function(e){return this.W[e]},i.prototype.getModuleKeys=function(){var e=this.W;return r.keys(e)},i.prototype.evaluate=function(e){var t=e.length,n=e.slice(0,t-1),i=e[t-1];if("function"!=typeof i)throw new Error("Evaluate must take a function as last element in array");var a=r.map(n,this.get.bind(this));return i.apply(null,a)},i.prototype.reset=function(){this.W={}},e.exports={create:function(){return new i}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(20),o=n(11);e.exports={initialize:function(){this.z={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.Q),this.on(r.ACTION_EXECUTED,this.X),this.on(r.SET_CHANGE_APPLIER,this.$),this.on(r.REMOVE_ACTION_STATE,this.J)},Q:function(e){var t=this;i.isEmpty(e.data.layers)||(i.each(e.data.layers,(function(e){var n;if(e.changes){var r="layerId:"+e.id;n={id:r,layerId:e.id,changeSet:e.changes,type:"layer"},a.deepFreeze(n),t.z.actions[r]=n}i.each(e.experiments,(function(r){if(r.changes){var o="experimentId:"+r.id;n={id:o,layerId:e.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},a.deepFreeze(n),t.z.actions[o]=n}i.each(r.variations,(function(o){i.each(o.actions,(function(i){var s=i.pageId||i.viewId,u=r.id+":"+o.id+":"+s;n={id:u,layerId:e.id,experimentId:r.id,variationId:o.id,pageId:s,changeSet:i.changes,type:"variation"},a.deepFreeze(n),t.z.actions[u]=n}))}))}))})),this.emitChange())},X:function(e){var t=e.actionId;i.isUndefined(t)||this.z.actionState[t]||(this.z.actionState[t]={})},$:function(e){var t=e.actionId,n=e.changeId;return this.z.actionState[t]?void(this.z.actionState[t][n]=e.changeApplier):void o.warn("Action Data / Attempted to set changeApplier for inactive action: ",t)},J:function(e){delete this.z.actionState[e.actionId]},get:function(e){return a.safeReference(this.z.actions[e])},getActionState:function(e){return a.safeReference(this.z.actionState[e])},getByChangeId:function(e){return i.find(this.z.actions,{changeSet:[{id:e}]})},getAllActionIdsByPageId:function(e){return i.map(i.filter(this.z.actions,{pageId:e}),"id")},getChangeApplier:function(e,t){var n=this.z.actionState[t];if(n)return n[e]},getExperimentVariationActions:function(e,t){return a.safeReference(i.filter(this.z.actions,{experimentId:e,variationId:t}))},getLayerActions:function(e){return a.safeReference(i.filter(this.z.actions,{id:"layerId:"+e}))},getExperimentActions:function(e){return a.safeReference(i.filter(this.z.actions,{id:"experimentId:"+e}))},getAll:function(){return a.safeReference(i.values(this.z.actions))}}}),(function(e,t,n){var i=n(2),r=!1;t.deepFreeze=function e(t){r&&i.isObject(t)&&!i.isFunction(t)&&(i.forOwn(t,e),Object.freeze(t))},t.safeReference=function e(t){return r?!i.isObject(t)||i.isFunction(t)||Object.isFrozen(t)?t:i.isArray(t)?i.map(t,e):i.reduce(t,(function(t,n,i){return t[i]=e(n),t}),{}):i.cloneDeep(t)}}),(function(e,t,n){var i=n(15);e.exports={initialize:function(){this.z={},this.on(i.REGISTER_ASYNC_DEFERRED,this.Z),this.on(i.RESOLVE_DEFERRED,this.ee),this.on(i.REJECT_DEFERRED,this.te)},getRequest:function(e){return this.z[e]},getPromise:function(e){var t=this.getRequest(e);if(t)return t.promise},Z:function(e){this.z[e.source]={promise:e.promise,resolver:e.resolver,rejecter:e.rejecter}},ee:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);t.resolver(e.resolveWith)},te:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+e.source);t.rejecter(e.rejectWith)}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(20);e.exports={initialize:function(){this.z={},this.on(r.DATA_LOADED,this.Q)},Q:function(e){i.isEmpty(e.data.audiences)||(i.each(e.data.audiences,function(e){a.deepFreeze(e),this.z[e.id]=e}.bind(this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.z))},getAudiencesMap:function(){return a.safeReference(this.z)},get:function(e){return a.safeReference(this.z[e])},getAudienceName:function(e){var t=i.find(i.values(this.z),{id:e});return t.name||"Aud "+e}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(20);e.exports={initialize:function(){this.z={},this.on(r.ADD_CHANGE,this.ne),this.on(r.DATA_LOADED,this.Q)},getChange:function(e){return this.z[e]},Q:function(e){i.isEmpty(e.data.changes)||i.each(e.data.changes,this.ne.bind(this))},ne:function(e){a.deepFreeze(e),this.z[e.id]=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(12);e.exports={initialize:function(){this.z={},i.each(a.Lifecycle,function(e){this.z[e]=[]}.bind(this)),this.on(r.ADD_CLEANUP_FN,this.re),this.on(r.CLEAR_CLEANUP_FN,this.ae)},getCleanupFns:function(e){return i.cloneDeep(this.z[e])},re:function(e){this.z[e.lifecycle].push(e.cleanupFn),this.emitChange()},ae:function(e){var t=this.z[e.lifecycle];if(e.cleanupFn){var n=t.indexOf(e.cleanupFn);n>-1&&(t.splice(n,1),this.emitChange())}else this.z[e.lifecycle]=[],this.emitChange()}}}),(function(e,t,n){var i=n(15),r=31536e4;e.exports={initialize:function(){this.z={currentDomain:null,defaultAgeSeconds:r},this.on(i.SET_COOKIE_DOMAIN,this.oe),this.on(i.SET_COOKIE_AGE,this.se)},getCurrentDomain:function(){return this.z.currentDomain},getDefaultAgeInSeconds:function(){return this.z.defaultAgeSeconds},oe:function(e){this.z.currentDomain=e,this.emitChange()},se:function(e){this.z.defaultAgeSeconds=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(20);e.exports={initialize:function(){this.z={},this.on(r.DATA_LOADED,this.Q)},getAll:function(){return a.safeReference(i.values(this.z))},getEventsMap:function(){return a.safeReference(this.z)},get:function(e){return a.safeReference(this.z[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.z),{apiName:e}))},getByPageId:function(e){return a.safeReference(i.filter(this.z,{pageId:e}))},Q:function(e){i.isEmpty(e.data.events)||(i.each(e.data.events,function(e){e.pageId||(e.pageId=e.viewId),a.deepFreeze(e),this.z[e.id]=e}.bind(this)),this.emitChange())}}}),(function(e,t,n){function i(e){var t=[];return e&&r.isObject(e)?(e.type&&t.push(e.type),t.push(o),e.type&&e.name&&t.push(e.name),t.join("")):o}var r=n(2),a=n(15),o="|";e.exports={initialize:function(){this.z={handlers:{}},this.on(a.ADD_EMITTER_HANDLER,this.ue),this.on(a.REMOVE_EMITTER_HANDLER,this.ce)},getHandlers:function(e,t){var n=[null,{type:e.type},{type:e.type,name:e.name}],a=[];return r.each(n,function(e){var t=i(e),n=this.z.handlers[t];n&&(a=a.concat(n))}.bind(this)),t&&(a=r.filter(a,(function(e){return!e.publicOnly}))),a},ue:function(e){var t=i(e.filter);this.z.handlers[t]||(this.z.handlers[t]=[]),this.z.handlers[t].push({handler:e.handler,token:e.token,publicOnly:!!e.publicOnly,emitErrors:!!e.emitErrors}),this.emitChange()},ce:function(e){var t=!1,n=e.token;r.forOwn(this.z.handlers,(function(e,i){r.each(e,(function(i,r){i.token===n&&(t=!0,e.splice(r,1))}))})),t&&this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(20);e.exports={initialize:function(){this.z={},this.on(r.DATA_LOADED,this.Q)},Q:function(e){i.isEmpty(e.data.dimensions)||(i.each(e.data.dimensions,function(e){a.deepFreeze(e),this.z[e.id]=e}.bind(this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.z))},getById:function(e){return a.safeReference(this.z[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.z),{apiName:e}))}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.z={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.le)},getAll:function(){return i.cloneDeep(this.z)},isDisabled:function(){return this.z.disabled},isEditor:function(){return this.z.isEditor},clientHasAlreadyInitialized:function(){return this.z.alreadyInitialized},getForceAudienceIds:function(){return this.z.forceAudienceIds},getForceVariationIds:function(){return this.z.forceVariationIds},getPreviewLayerIds:function(){return this.z.previewLayerIds},getProjectToken:function(){return this.z.projectToken},getForceTracking:function(){return this.z.forceTracking},shouldActivate:function(){return!this.z.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.z.isPreview},shouldBootstrapDataForEditor:function(){return this.z.isEditor},shouldInitialize:function(){return!(this.shouldOptOut()||this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.z.isPreview||this.z.isLegacyPreview||!this.getProjectToken()||this.z.isEditor)},shouldBailForDesktopApp:function(){return!this.z.isEditor&&this.z.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.z.isSlave&&!this.z.isEditor&&this.z.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return!1},shouldOptOut:function(){return this.z.shouldOptOut},shouldSendTrackingData:function(){return!this.z.trackingDisabled&&(!!this.z.forceTracking||!this.z.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.z.isSlave},isRunningInDesktopApp:function(){return this.z.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.z.isRunningInV2Editor},le:function(e){i.extend(this.z,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.z={holdback:0,isGlobalHoldback:null,listTargetingCookies:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[]},this.on(r.DATA_LOADED,this.de),this.on(r.ACTIVATE,this.fe),this.on(r.RECORD_GLOBAL_DECISION,this.pe)},getRevision:function(){return this.z.revision},getGlobalHoldbackThreshold:function(){return this.z.holdback},getProjectId:function(){return this.z.projectId},getSnippetId:function(){return this.z.snippetId},getAccountId:function(){return this.z.accountId},getNamespace:function(){return this.z.namespace},getActivationId:function(){return this.z.activationId},getAnonymizeIP:function(){return this.z.anonymizeIP},isGlobalHoldback:function(){return!!this.z.isGlobalHoldback},getListTargetingCookieNames:function(){return this.z.listTargetingCookies.slice()},getDCPServiceId:function(){return this.z.dcpServiceId},getDCPKeyfieldLocators:function(){return this.z.dcpKeyfieldLocators},getRecommenderServices:function(){return this.z.recommenderServices},getProjectJS:function(){return this.z.projectJS},getPlugins:function(){return this.z.plugins},fe:function(e){this.z.activationId=e.activationId,this.z.isGlobalHoldback=null},pe:function(e){var t=e.isGlobalHoldback;if(null!==this.z.isGlobalHoldback&&this.z.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.z.isGlobalHoldback=t,this.emitChange()},de:function(e){var t=i.pick(e.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingCookies","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS"]);if(0!==i.keys(t).length){var n={listTargetingCookies:[],dcpServiceId:null,dcpKeyfieldLocators:[]};i.extend(this.z,n,t),this.emitChange()}}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.z={effectiveReferrer:null,effectiveVariationId:null},this.on(r.INITIALIZE_STATE,this.ge)},getEffectiveReferrer:function(){return this.z.effectiveReferrer},getEffectiveVariationId:function(){return this.z.effectiveVariationId},ge:function(e){i.isUndefined(e.effectiveReferrer)||(this.z.effectiveReferrer=e.effectiveReferrer),i.isUndefined(e.effectiveVariationId)||(this.z.effectiveVariationId=e.effectiveVariationId),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.z={},this.on(r.DATA_LOADED,this.Q),this.on(r.SET_INTEGRATION_SETTINGS,this.he)},Q:function(e){i.isEmpty(e.data.integrationSettings)||(i.each(e.data.integrationSettings,function(e){this.z[e.id]=e}.bind(this)),this.emitChange())},he:function(e){var t=this.z[e.id];t?i.extend(t,e):this.z[e.id]=e},getAll:function(){return i.cloneDeep(i.values(this.z))},get:function(e){return i.cloneDeep(this.z[e])},getReference:function(e){return this.z[e]}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(11),o="*";e.exports={initialize:function(){this.z={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.ve),this.on(r.RECORD_LAYER_DECISION,this._e),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.Ee),this.on(r.ACTION_EXECUTED,this.me)},getLayerState:function(e,t){if(this.z[e]){var n=this.z[e];if(i.keys(n).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");return t?i.cloneDeep(i.find(n,{pageId:t})):i.cloneDeep(n[o])}},getLayerStates:function(e){var t=[];for(var n in this.z)i.forEach(this.z[n],(function(n){(i.isUndefined(e)||n.namespace===e)&&t.push(i.cloneDeep(n))}));return t},ve:function(e){e.merge||(this.z={}),i.each(e.layerStates,function(e){var t=e.layerId;e.pageId||(e.pageId=e.viewId);var n=e.pageId||o,r=this.z[t];if(i.isUndefined(r))this.z[t]={},this.z[t][n]=e;else{var a=r[n];(!a||e.decisionTimestamp>(a.decisionTimestamp||0))&&(this.z[t][n]=e)}}.bind(this)),this.emitChange()},me:function(e){var t=e.layerId,n=e.pageId;if(!this.z[t])return void a.warn("No Campaign registered for action executed",e);var i;this.z[t][n]?i=this.z[t][n]:this.z[t][o]&&(i=this.z[t][o]),i&&(i.actionTriggered=!0,i.actionSessionId=e.sessionId,i.actionActivationId=e.activationId,i.actionTimestamp=e.timestamp),this.emitChange()},_e:function(e){var t={layerId:e.layerId,revision:e.revision,namespace:e.namespace,pageId:e.pageId,decisionTicket:e.decisionTicket,decisionTicketTimestamp:e.timestamp,decision:e.decision,decisionSessionId:e.sessionId,decisionActivationId:e.activationId,decisionTimestamp:e.timestamp,decisionEventId:null,actionTriggered:!1,actionSessionId:null,actionActivationId:null,actionTimestamp:null},n=this.z[e.layerId]||{};e.pageId?(delete n[o],n[e.pageId]=t):(n={},n[o]=t),this.z[e.layerId]=n,this.emitChange()},Ee:function(e){var t=e.layerId,n=e.pageId||o;return this.z[t]?this.z[t][n]?(this.z[t][n].decisionEventId=e.decisionId,void this.emitChange()):void a.warn("Not recording decision event: Layer state not found for view",n):void a.warn("Not recording decision event: Campaign not registered",t)}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(20),o=n(35);e.exports={initialize:function(){this.z={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.Q)},Q:function(e){if(!i.isEmpty(e.data.layers)){var t=this;i.each(e.data.layers,(function(e){i.each(e.experiments,(function(n){e.pageIds||(e.pageIds=e.viewIds),n.campaignName||o.isSingleExperimentPolicy(e.policy)?o.isSingleExperimentPolicy(e.policy)&&e.groupId&&(n.groupId=e.groupId):n.campaignName=e.name,i.each(n.variations,(function(e){i.each(e.actions,(function(e){e.pageId||(e.pageId=e.viewId)})),t.z.variations[e.id]=e})),t.z.experiments[n.id]=n})),a.deepFreeze(e),t.z.layers[e.id]=e})),this.emitChange()}},getAll:function(){return a.safeReference(i.values(this.z.layers))},getCampaignsMap:function(){return a.safeReference(this.z.layers)},getExperimentsMap:function(){return a.safeReference(this.z.experiments)},getVariationsMap:function(){return a.safeReference(this.z.variations)},getCount:function(){return i.keys(this.z.layers).length},getAllByPageIds:function(e){return a.safeReference(i.filter(i.values(this.z.layers),(function(t){return i.some(e,i.partial(i.includes,t.pageIds))})))},get:function(e){return a.safeReference(this.z.layers[e])},getLayerByExperimentId:function(e){var t=i.values(this.z.layers),n=i.find(t,(function(t){return i.find(t.experiments,{id:e})}));return a.safeReference(n)},getExperimentByVariationId:function(e){var t,n=i.values(this.z.layers);return i.some(n,(function(n){return i.some(n.experiments,(function(n){return i.find(n.variations,{id:e})&&(t=n),t})),t})),a.safeReference(t)}}}),(function(e,t){var n="single_experiment",i="multivariate";t.isSingleExperimentPolicy=function(e){return e===n||e===i}}),(function(e,t,n){var i=n(15);e.exports={initialize:function(){this.z={logs:[]},this.on(i.LOG,this.Ie)},getLogs:function(){return this.z.logs},Ie:function(e){this.z.logs.push(e),this.emitChange()},k:function(){return this.z.logs.slice()}}}),(function(e,t,n){var i=n(15),r=n(20);e.exports={initialize:function(){this.z={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.ye),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.Se)},get:function(){return r.safeReference(this.z.data)},hasTracked:function(){return this.z.hasTracked},ye:function(e){r.deepFreeze(e),this.z.data=e,this.z.hasTracked=!1,this.emitChange()},Se:function(){this.z.hasTracked=!0}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(16),o=1e3;e.exports={initialize:function(){this.z={},this.on(r.SET_PENDING_EVENT,this.Te),this.on(r.REMOVE_PENDING_EVENT,this.Ae),this.on(r.LOAD_PENDING_EVENTS,this.we)},getEvents:function(){return this.z},getEventsString:function(){return a.stringify(this.z)},Te:function(e){i.keys(this.z).length>=o&&this.De();var t=e.id,n=e.retryCount;this.z[t]&&this.z[t].retryCount===n||(this.z[t]={id:t,timeStamp:e.timeStamp,data:e.data,retryCount:n},this.emitChange())},Ae:function(e){delete this.z[e.id],this.emitChange()},we:function(e){this.z=e.events,this.De(),this.emitChange()},De:function(){for(var e=i.sortBy(this.z,"timeStamp"),t=0;t<=e.length-o;t++)delete this.z[e[t].id];this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(12);e.exports={initialize:function(){this.z={},this.z[a.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.be)},be:function(e){i.isUndefined(this.z[a.PerformanceData.performance_marks][e.name])&&(this.z[a.PerformanceData.performance_marks][e.name]=[]),this.z[a.PerformanceData.performance_marks][e.name].push(e.data),this.emitChange()},getMarks:function(){return i.mapValues(this.z[a.PerformanceData.performance_marks],(function(e){return i.map(e,(function(e){return[e.startTime,e.duration]}))}))},getDurationsFor:function(e){return i.reduce(e,function(e,t){var n=this.z[a.PerformanceData.performance_marks][t];return n&&(e[t]=Math.round(i.reduce(n,(function(e,t){return e+t.duration}),0))),e}.bind(this),{})}}}),(function(e,t,n){var i=n(15),r=n(12),a=n(2),o=n(11);e.exports={initialize:function(){this.z=a.mapValues(r.PluginTypes,(function(){return{}})),this.on(i.REGISTER_PLUGIN,this.Re)},Re:function(e){var t=e.type,n=e.name,i=e.plugin;if(!(t&&n&&i))throw new Error("Missing information needed to register plugins: "+t+":"+n);if(!this.z[t])throw new Error("Invalid plugin type specified: "+t);this.z[t][n]=i,o.debug("Plugin Store: Registering Plugin :",e)},getAllPlugins:function(e){if(e){if(this.z[e])return this.z[e];throw new Error("Invalid plugin type: "+e)}return this.z},getPlugin:function(e,t){if(!t||!e)throw new Error("Missing plugin parameters");var n=this.getAllPlugins(e);return n[t]||null}}}),(function(e,t,n){var i=n(15);e.exports={initialize:function(){this.z={},this.on(i.SET_VISITOR_ATTRIBUTE_PENDING,this.Oe)},getPendingAttributeValue:function(e){if(this.z[e])return this.z[e].pending},Oe:function(e){this.z[e.key]={pending:e.pending},this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.z={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.ye)},isExpectingRedirect:function(){return i.isString(this.z.layerId)},getLayerId:function(){return this.z.layerId},ye:function(e){this.isExpectingRedirect()||(this.z.layerId=e.layerId,this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.z={inRumSample:!1,id:null,src:null,RumHost:null,data:{},apis:{},DOMObservation:{}},this.on(r.SET_RUM_DATA,this.Ne),this.on(r.RECORD_API_USAGE,this.Pe),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.Ce)},Ne:function(e){i.merge(this.z,e),this.emitChange()},Pe:function(e){this.z.apis[e.methodName]||(this.z.apis[e.methodName]=0),this.z.apis[e.methodName]++,this.emitChange()},Ce:function(e){this.z.DOMObservation[e.counterName]||(this.z.DOMObservation[e.counterName]=0),this.z.DOMObservation[e.counterName]++,this.emitChange()},getSampleRum:function(){return this.z.inRumSample},getRumId:function(){return this.z.id},getRumHost:function(){return this.z.RumHost},getApiData:function(){return this.z.apis},getDOMObservationData:function(){return this.z.DOMObservation},getRumData:function(){return i.cloneDeep(this.z.data)},getScriptSrc:function(){return this.z.src}}}),(function(e,t,n){var i=n(15);e.exports={initialize:function(){this.z={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.Le)},Le:function(e){if(!e.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.z.natives=e.sandboxedFunctions,this.z.initialized=!0,this.emitChange()},getAll:function(){return this.z.natives},get:function(e){if(!e)throw new Error("Missing name parameter");return this.z.natives[e]||null},isInitialized:function(){return this.z.initialized}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(14),o=n(5),s=18e5;e.exports={initialize:function(){this.z={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.Ve),this.on(r.LOAD_SESSION_STATE,this.ke)},getState:function(){return i.cloneDeep(this.z)},getSessionId:function(){return this.z.sessionId},ke:function(e){this.z.sessionId=e.sessionId,this.z.lastSessionTimestamp=e.lastSessionTimestamp,this.emitChange()},Ve:function(){
var e=a.now(),t=this.z.lastSessionTimestamp;(!this.z.sessionId||e-t>s)&&(this.z.sessionId=o.generate()),this.z.lastSessionTimestamp=e,this.emitChange()}}}),(function(e,t,n){var i=n(15),r=n(2);e.exports={initialize:function(){this.Fe(),this.on(i.FINALIZE_BATCH_SNAPSHOT,this.xe),this.on(i.REGISTER_PREVIOUS_BATCH,this.Me),this.on(i.REGISTER_TRACKER_VISITOR,this.Ue),this.on(i.REGISTER_TRACKER_EVENT,this.Ge),this.on(i.REGISTER_TRACKER_DECISION,this.Be),this.on(i.RESET_TRACKER_EVENTS,this.ze),this.on(i.RESET_TRACKER_STORE,this.Fe),this.on(i.RESET_TRACKER_PREVIOUS_BATCHES,this.je),this.on(i.SET_TRACKER_POLLING,this.He),this.on(i.SET_TRACKER_BATCHING,this.Ye),this.on(i.SET_TRACKER_SEND_EVENTS,this.Ke),this.on(i.SET_TRACKER_PERSISTABLE_STATE,this.qe),this.on(i.SET_TRACKER_DIRTY,this.We),this.on(i.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.Qe)},getPersistableState:function(){return this.z.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.z.data,decisions:this.z.decisions,decisionEvents:this.z.decisionEvents,previousBatches:this.z.previousBatches}:{}:null},qe:function(e){r.isEmpty(this.z.data)||r.isEmpty(e.data)||(this.xe(),this.z.previousBatches.push(this.getEventBatch())),this.z.data=e.data||{},this.z.decisions=e.decisions||[],this.z.decisionEvents=e.decisionEvents||[],r.isEmpty(this.z.previousBatches)||r.isEmpty(e.previousBatches)?this.z.previousBatches=e.previousBatches||[]:this.z.previousBatches=this.z.previousBatches.concat(e.previousBatches),this.emitChange()},We:function(e){this.z.isDirty=e,this.emitChange()},Ge:function(e){var t=this.Xe();!r.isEmpty(t.snapshots)&&r.isEmpty(this.z.decisionEvents)||this.$e(),this.Je().events.push(e.event),this.We(!0)},Be:function(e){this.z.decisions.push(e.decision),this.z.decisionEvents.push(e.decisionEvent),this.We(!0)},Ue:function(e){r.isEmpty(this.z.data)?this.z.data=e.data:this.xe(),this.z.data.visitors.push(e.visitor),this.z.decisions=e.decisions,this.z.decisionEvents=[],this.We(!0)},Me:function(e){this.z.previousBatches.push(e),this.We(!0)},Fe:function(){this.z={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},ze:function(){var e=this.Xe();this.z.data.visitors=[e],e.snapshots=[],this.We(!0)},je:function(){this.z.previousBatches=[],this.We(!0)},He:function(e){this.z.polling=e,this.emitChange()},Ye:function(e){this.z.shouldBatch=e,this.emitChange()},Ke:function(e){this.z.canSend=e,this.emitChange()},getEventBatch:function(){return r.cloneDeep(this.z.data)},getPreviousBatches:function(){return r.cloneDeep(this.z.previousBatches)},Ze:function(){return this.z.decisionEvents.slice()},et:function(){this.z.decisionEvents=[]},tt:function(){return this.z.decisions.slice()},isPolling:function(){return this.z.polling},shouldBatch:function(){return this.z.shouldBatch},Je:function(){return r.last(this.Xe().snapshots)},Xe:function(){return r.last(this.z.data.visitors)},$e:function(){var e=this.Ze(),t=this.Xe();t.snapshots.push({decisions:this.tt(),events:e}),this.et(),this.We(!0)},xe:function(){this.z.decisionEvents.length>0&&this.$e()},hasEventsToSend:function(){if(!r.isEmpty(this.z.decisionEvents))return!0;if(!r.isEmpty(this.z.data)){var e=r.some(this.z.data.visitors||[],(function(e){return e.snapshots.length>0}));if(e)return!0}return!1},hasPreviousBatchesToSend:function(){return!r.isEmpty(this.z.previousBatches)},canSend:function(){return this.z.canSend},Qe:function(e){var t=this.Xe();t&&(t.attributes=e.attributes)}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.z={},this.on(r.SET_UA_DATA,this.Q)},Q:function(e){i.isEmpty(this.z)&&(this.z=e.data)},get:function(){return i.cloneDeep(this.z)}}}),(function(e,t,n){var i=n(2),r=n(11),a=n(15),o={globalTags:{},viewStates:{},shouldBatch:!1};e.exports={initialize:function(){this.z=i.cloneDeep(o),this.on(a.REGISTER_VIEWS,this.nt),this.on(a.SET_VIEW_ACTIVE_STATE,this.it),this.on(a.UPDATE_PARSED_VIEW_METADATA,this.rt),this.on(a.UPDATE_USER_SUPPLIED_METADATA,this.at),this.on(a.TRACK_VIEW_ACTIVATED_EVENT,this.ot),this.on(a.SET_GLOBAL_TAGS,this.st),this.on(a.ACTIVATE,this.ut),this.on(a.SET_VIEW_BATCHING,this.Ye)},getAll:function(){var e={};for(var t in this.z.viewStates)e[t]=this.getViewState(t);return e},shouldBatch:function(){return this.z.shouldBatch},getViewState:function(e){var t=i.cloneDeep(this.z.viewStates[e]),n=this.z.globalTags;return t.metadata=i.extend({},t.parsedMetadata,n,t.userSuppliedMetadata),t},getActiveViewTags:function(){var e=this.getActiveViewStates(),t=i.map(e,(function(e){return e.metadata})),n=[{}].concat(t);return i.extend.apply(i,n)},getActivationEventId:function(e){return this.z.viewStates[e]?this.z.viewStates[e].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.z.viewStates,function(e,t,n){return this.isViewActive(n)&&e.push(this.getViewState(n)),e}.bind(this),[])},isViewActive:function(e){var t=this.z.viewStates[e];return t||r.warn("No Page registered with id",e),!!t.isActive},getGlobalTags:function(){return i.cloneDeep(this.z.globalTags)},ut:function(){this.z.viewStates={},this.emitChange()},nt:function(e){i.each(e.views,function(e){var t=e.id;this.z.viewStates[t]={id:t,isActive:!1,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}}.bind(this)),this.emitChange()},it:function(e){var t=e.view.id;if(!this.z.viewStates[t])throw new Error("No view exists with id "+t);this.z.viewStates[t].isActive=e.isActive,e.isActive?this.z.viewStates[t].activatedTimestamp=e.timestamp:(this.z.viewStates[t].parsedMetadata={},this.z.viewStates[t].userSuppliedMetadata={}),this.emitChange()},rt:function(e){var t=e.pageId;if(!this.z.viewStates[t])throw new Error("No view exists with id "+t);i.merge(this.z.viewStates[t].parsedMetadata,e.metadata),this.emitChange()},at:function(e){var t=e.pageId;if(!this.z.viewStates[t])throw new Error("No view exists with id "+t);i.merge(this.z.viewStates[t].userSuppliedMetadata,e.metadata),this.emitChange()},ot:function(e){var t=e.pageId;this.z.viewStates[t]&&(this.z.viewStates[t].activationEventId=e.eventData.eventId,this.emitChange())},st:function(e){i.extend(this.z.globalTags,e),this.emitChange()},Ye:function(e){this.z.shouldBatch=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(20);e.exports={initialize:function(){this.z={},this.on(r.DATA_LOADED,this.Q)},getAll:function(){return a.safeReference(i.values(this.z))},getPagesMap:function(){return a.safeReference(this.z)},get:function(e){return a.safeReference(this.z[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.z),{apiName:e}))},Q:function(e){i.isEmpty(e.data.views)||(i.each(e.data.views,function(e){a.deepFreeze(e),this.z[e.id]=e}.bind(this)),this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.z={profile:{},metadata:{}},this.on(r.SET_VISITOR_ATTRIBUTES,this.ct),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.dt)},getVisitorProfile:function(){return this.z.profile},getVisitorProfileMetadata:function(){return this.z.metadata},getAttribute:function(e,t){var n=this.z.profile;return t&&(n=n[t]||{}),i.cloneDeep(n[e])},getAttributeMetadata:function(e){return i.cloneDeep(this.z.metadata[e])},dt:function(e){this.z.profile=e.profile,this.z.metadata=e.metadata,this.emitChange()},ct:function(e){var t,n;i.each(e.attributes,function(e){t=this.z.profile,n=this.z.metadata,e.type&&(t=this.z.profile[e.type]=this.z.profile[e.type]||{}),t[e.key]=e.value,e.metadata&&i.forOwn(e.metadata,function(t,i){e.type&&(n=this.z.metadata[e.type]=this.z.metadata[e.type]||{}),n[e.key]=n[e.key]||{},n[e.key][i]=t}.bind(this))}.bind(this)),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.z={},this.on(r.DATA_LOADED,this.ft)},getCustomBehavioralAttributes:function(){return i.filter(this.z,(function(e){return!!e.rule_json}))},getVisitorAttribute:function(e){var t=i.values(this.z);if(e.datasourceId&&(t=i.filter(t,{dcp_datasource_id:String(e.datasourceId)})),e.attributeName&&e.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(e.attributeId){var n=this.z[e.attributeId];if(!n)throw new Error("Unrecognized attribute ID: "+e.attributeId);return n}if(e.attributeName){var r=i.filter(t,{name:e.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+e.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+e.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},ft:function(e){i.isEmpty(e.data.visitorAttributes)||(i.each(e.data.visitorAttributes,function(e){this.z[e.id]=e}.bind(this)),this.emitChange())}}}),(function(e,t,n){var i=(n(2),n(15));n(53).Event;e.exports={initialize:function(){this.z={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.Q),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.pt),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.ht)},getEvents:function(){return this.z.events},getForeignEvents:function(){return this.z.foreignEvents},getForeignEventQueues:function(){return this.z.foreignEventQueues},Q:function(e){this.z.events=e,this.emitChange()},pt:function(e){this.z.foreignEvents[e.key]=e.value},ht:function(e){this.z.foreignEventQueues[e.key]=e.value}}}),(function(e,t,n){function i(e,t,n,i,r){this[o.FIELDS.NAME]=e,this[o.FIELDS.TYPE]=t,a.isString(n)&&n.trim().length>0&&(this[o.FIELDS.CATEGORY]=n),i&&a.keys(i).length>0&&(this[o.FIELDS.OPTIONS]=i),a.isUndefined(r)||(this[o.FIELDS.REVENUE]=r)}function r(e,t,n){this.eventBase=e,this[o.FIELDS.TIME]=t,a.isUndefined(n)||(this[o.FIELDS.SESSION_ID]=n)}var a=n(2),o=n(54),s=n(55),u=n(57).getFieldValue;t.EventBase=i,i.prototype.digest=function(){var e=function(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)},t=[];if(t.push(e(o.FIELDS.NAME,this[o.FIELDS.NAME])),t.push(e(o.FIELDS.TYPE,this[o.FIELDS.TYPE])),this[o.FIELDS.CATEGORY]&&t.push(e(o.FIELDS.CATEGORY,this[o.FIELDS.CATEGORY])),this[o.FIELDS.REVENUE]&&t.push(e(o.FIELDS.REVENUE,this[o.FIELDS.REVENUE])),!this[o.FIELDS.OPTIONS])return t.join("&");var n=this[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));i=i.sort();for(var r=0;r<i.length;r++)t.push(e(i[r],n[i[r]]));return t.join("&")},i.prototype.hash=function(){return this.hash_?this.hash_:(this.hash_=s.hashToHex(s.toByteString(this.digest()),s.Seed.BEHAVIOR_EVENT),this.hash_)},i.prototype.setHash=function(e){this.hash_=e},i.prototype.reHash=function(){this.hash_=null,this.hash()},i.prototype.equals=function(e){if(this.hash()!==e.hash())return!1;if(this[o.FIELDS.NAME]!==e[o.FIELDS.NAME]||this[o.FIELDS.TYPE]!==e[o.FIELDS.TYPE]||this[o.FIELDS.CATEGORY]!==e[o.FIELDS.CATEGORY]||this[o.FIELDS.REVENUE]!==e[o.FIELDS.REVENUE])return!1;if(!this[o.FIELDS.OPTIONS]&&!e[o.FIELDS.OPTIONS])return!0;var t=this[o.FIELDS.OPTIONS]||{},n=e[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(t),(function(e){return t.hasOwnProperty(e)})),r=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));if(i.length!==r.length)return!1;for(var s=0;s<i.length;s++){var u=i[s];if(!n.hasOwnProperty(u)||t[u]!==n[u])return!1}return!0},i.prototype.getValueOrDefault=function(e,t){var n=u(this,e);return a.isUndefined(n)?t:n},i.prototype.setFieldValue=function(e,t){e!==o.FIELDS.NAME&&e!==o.FIELDS.TYPE&&e!==o.FIELDS.CATEGORY&&e!==o.FIELDS.REVENUE&&e!==o.FIELDS.OPTIONS||(this[e]=t,this.reHash())},t.Event=r,r.prototype.getValueOrDefault=function(e,t){if(0===e.length)return this;var n={};n[o.FIELDS.TIME]=this[o.FIELDS.TIME],n[o.FIELDS.SESSION_ID]=this[o.FIELDS.SESSION_ID];var i=u(n,e);return a.isUndefined(i)?this.eventBase.getValueOrDefault(e,t):i},r.prototype.setFieldValue=function(e,t){e===o.FIELDS.TIME||e===o.FIELDS.SESSION_ID?this[e]=t:this.eventBase.setFieldValue(e,t)};var c={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags"};r.prototype.readableEvent=function(){var e,t,n=function(e){return a.isString(e)?'"'+e+'"':e},i=this,r=[];a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.SESSION_ID],(function(o){e=c[o],t=i.getValueOrDefault([o]),a.isUndefined(t)||r.push(e+": "+n(t))}));var s=[];if(e=c[o.FIELDS.OPTIONS],t=i.getValueOrDefault([o.FIELDS.OPTIONS]),a.isUndefined(t)||(a.each(t,(function(e,t){s.push(t+": "+String(n(e)))})),r.push(e+": {\n\t\t"+s.join(",\n\t\t")+"\n\t}")),t=i.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(t)&&(t=n(new Date(t).toString())),!a.isUndefined(t)){var u="timestamp";r.push(u+": "+t)}return"{\n\t"+r.join(",\n\t")+"\n}"},r.prototype.toObject=function(e){var t,n,i={},r=this;a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.OPTIONS],(function(e){t=c[e],n=r.getValueOrDefault([e],e===o.FIELDS.OPTIONS?{}:void 0),a.isUndefined(n)||(i[t]=n)}));var s=c[o.FIELDS.OPTIONS],u=c[o.FIELDS.REVENUE];if(e&&e.revenueAsTag&&i[u]&&(i[s]=i[s]||{},i[s][u]=i[u],delete i[u]),n=r.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(n))if(e&&e.timeAsTimestamp){var l="timestamp";i[l]=new Date(n)}else{var d="time";i[d]=n}return i}}),(function(e,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS}}),(function(e,t,n){var i=n(56).v3,r={IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},a=Math.pow(2,32),o=function(e,t,n){return Math.floor(u(e,t)*n)},s=function(e,t){var n=i(e,t);return(n>>>16).toString(16)+(65535&n).toString(16)},u=function(e,t){var n=i(e,t);return(n>>>0)/a},c=function(e){var t=String.fromCharCode;return e.replace(/[\S\s]/gi,(function(e){e=e.charCodeAt(0);var n=t(255&e);return e>255&&(n=t(e>>>8&255)+n),e>65535&&(n=t(e>>>16)+n),n}))};e.exports={Seed:r,hashToHex:s,hashToInt:o,hashToReal:u,toByteString:c}}),(function(e,t,n){!(function(){function t(e,t){for(var n,i=e.length,r=t^i,a=0;i>=4;)n=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),n^=n>>>24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^n,i-=4,++a;switch(i){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),r^=r>>>15,r>>>0}function n(e,t){var n,i,r,a,o,s,u,c;for(n=3&e.length,i=e.length-n,r=t,o=3432918353,s=461845907,c=0;c<i;)u=255&e.charCodeAt(c)|(255&e.charCodeAt(++c))<<8|(255&e.charCodeAt(++c))<<16|(255&e.charCodeAt(++c))<<24,++c,u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u,r=r<<13|r>>>19,a=5*(65535&r)+((5*(r>>>16)&65535)<<16)&4294967295,r=(65535&a)+27492+(((a>>>16)+58964&65535)<<16);switch(u=0,n){case 3:u^=(255&e.charCodeAt(c+2))<<16;case 2:u^=(255&e.charCodeAt(c+1))<<8;case 1:u^=255&e.charCodeAt(c),u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u}return r^=e.length,r^=r>>>16,r=2246822507*(65535&r)+((2246822507*(r>>>16)&65535)<<16)&4294967295,r^=r>>>13,r=3266489909*(65535&r)+((3266489909*(r>>>16)&65535)<<16)&4294967295,r^=r>>>16,r>>>0}var i=n;i.v2=t,i.v3=n;e.exports=i})()}),(function(e,t,n){var i=n(2);t.getFieldValue=function(e,t){if(i.isArray(t)){for(var n=e,r=0;r<t.length;r++){var a=t[r];if(!i.isObject(n)||!n.hasOwnProperty(a))return;n=n[a]}return n}}}),(function(e,t,n){var i=n(15);e.exports={initialize:function(){this.z={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.vt)},getBaseMap:function(){return this.z.baseMap},getEventQueue:function(){return this.z.eventQueue},getLastEvent:function(){return this.z.lastEvent},getCleared:function(){return this.z.cleared},getInitialized:function(){return this.z.initialized},vt:function(e){this.z[e.key]=e.value}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.z={randomId:null,UUID:null},this.on(r.SET_VISITOR_ID,this.Q)},getBucketingId:function(){return this.getUUID()||this.getRandomId()},getRandomId:function(){return this.z.randomId},getUUID:function(){return this.z.UUID},Q:function(e){i.extend(this.z,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(16);e.exports={initialize:function(){this.z={variationIdMap:{},preferredLayerMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this._t),this.on(r.MERGE_VARIATION_ID_MAP,this.Et),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.mt),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.It)},getVariationIdMap:function(){return i.cloneDeep(this.z.variationIdMap)},getVariationIdMapString:function(){return a.stringify(this.z.variationIdMap)},_t:function(e){var t=this.z.variationIdMap,n=t[e.layerId]||{};n[e.experimentId]!==e.variationId&&(n[e.experimentId]=e.variationId,this.z.variationIdMap[e.layerId]=n,this.emitChange())},Et:function(e){var t=this.getVariationIdMap(),n=e.variationIdMap;i.merge(n,t),this.z.variationIdMap=n,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.z.preferredLayerMap)},getPreferredLayerMapString:function(){return a.stringify(this.z.preferredLayerMap)},getPreferredLayerId:function(e){return this.z.preferredLayerMap[e]},mt:function(e){this.z.preferredLayerMap[e.groupId]!==e.layerId&&(this.z.preferredLayerMap[e.groupId]=e.layerId,this.emitChange())},It:function(e){var t=this.getPreferredLayerMap(),n=e.preferredLayerMap;i.merge(n,t),this.z.preferredLayerMap=n,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.z={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(r.XDOMAIN_SET_DEFAULT_FRAME,this.yt),this.on(r.XDOMAIN_ADD_FRAME,this.St),this.on(r.XDOMAIN_SET_MESSAGE,this.Tt),this.on(r.XDOMAIN_ADD_SUBSCRIBER,this.At),this.on(r.XDOMAIN_SET_CANONICAL_ORIGINS,this.wt),this.on(r.XDOMAIN_SET_DISABLED,this.Dt)},getMessages:function(){return i.cloneDeep(this.z.messages)},getNextMessageId:function(){return this.z.messages.length},getMessageById:function(e){return this.z.messages[e]},getSubscribers:function(){return this.z.subscribers},getFrames:function(){return this.z.frames},getNextFrameId:function(){return this.z.frames.length},getDefaultFrame:function(){return this.z.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.z.canonicalOrigins)},isDisabled:function(){return this.z.disabled},yt:function(e){this.z.defaultFrame=e},St:function(e){this.z.frames.push(e)},Tt:function(e){this.z.messages[e.messageId]=e.message},At:function(e){this.z.subscribers.push(e.subscriber)},wt:function(e){this.z.canonicalOrigins=e.canonicalOrigins},Dt:function(e){this.z.disabled=e.disabled}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(20);e.exports={initialize:function(){this.z={},this.on(r.DATA_LOADED,this.Q)},Q:function(e){i.isEmpty(e.data.groups)||(i.each(e.data.groups,function(e){a.deepFreeze(e),this.z[e.id]=e}.bind(this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.z))},getGroupsMap:function(){return a.safeReference(this.z)},get:function(e){return a.safeReference(this.z[e])}}}),(function(e,t){e.exports={OTHER:"other"}}),(function(e,t,n){function i(){var e=Y.getVariationIdMapString();p(U.VARIATION_MAP,e,!0)}function r(){return c(U.LAYER_MAP)||{}}function a(e,t){b.dispatch(R.UPDATE_PREFERRED_LAYER_MAP,{groupId:e,layerId:t})}function o(){var e=Y.getPreferredLayerMapString();p(U.LAYER_MAP,e,!0)}function s(e){b.dispatch(R.SET_TRACKER_PERSISTABLE_STATE,e)}function u(e,t){function n(e,n){var i;t.attributionType&&(i=C.now()),b.dispatch(R.SET_VISITOR_ATTRIBUTES,{attributes:[{key:e,value:n,metadata:{lastModified:i}}]})}if(t.getter){var i,r=t.provides;if(!t.isSticky||D.isUndefined(e[r]))try{var a=L.evaluate(t.getter);D.isFunction(a)&&(a=a((function(){return e[r]}),(function(e){return n(r,e)}))),D.isUndefined(a)||(t.isAsync?(i=a.then((function(e){n(r,e)}),(function(e){x.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',e)})),b.dispatch(R.SET_VISITOR_ATTRIBUTE_PENDING,{key:r,pending:i})):n(r,a))}catch(e){x.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+e.message)}return i}}function c(e){var t=g(e),n=F.getItem(t);if(!n){var i=h(e);n=F.getItem(i),f(e,n)}return D.isString(n)&&(n=w(n)),n}function l(e){var t=[];return D.each(e,(function(e){D.each(e.item,(function(n){n.namespace=e.namespace,t.push(n)}))})),t}function d(e){var t=H.getBucketingId(),n=[],i=t+"\\$\\$([^$]+?)\\$\\$"+e,r=new RegExp(i);return D.each(F.keys(),(function(e){var i=e.match(r);if(i){var a={namespace:i[1],userId:t,item:w(F.getItem(e))};n.push(a)}})),n}function f(e,t){var n=g(e),i=h(e);F.setItem(n,t),F.removeItem(i)}function p(e,t,i){try{var r=g(e);i||(t=k.stringify(t));try{F.removeItem(h(e)),F.setItem(r,t)}catch(e){throw x.warn("Visitor / Unable to set localStorage key, error was:",e),new Error("Unable to set localStorage")}n(81).setItem(r,t)}catch(e){x.warn("Unable to persist visitor data:",e.message)}}function g(e){var n=H.getBucketingId();if(!n)throw new Error("Visitor bucketingId not set");var i=t.getNamespace();if(!i)throw new Error("Namespace is not set");return[n,i,e].join("$$")}function h(e){var t=H.getBucketingId();if(!t)throw new Error("Cannot get legacy key: visitor bucketingId not set");return[t,e].join("$$")}function v(e,t){if(E(e,g(U.EVENT_QUEUE)))b.dispatch(R.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:e,value:N.deserialize(w(t))});else if(E(e,g(U.EVENTS)))b.dispatch(R.SET_FOREIGN_VISITOR_EVENTS,{key:e,value:N.deserialize(w(t))});else if(E(e,g(U.LAYER_STATES)))b.dispatch(R.LOAD_PERSISTED_LAYER_STATES,{layerStates:w(t),merge:!0});else if(E(e,g(U.VARIATION_MAP)))b.dispatch(R.MERGE_VARIATION_ID_MAP,{variationIdMap:w(t)});else if(E(e,g(U.VISITOR_PROFILE))){var n=["custom"],i=w(t);D.each(n,(function(e){var t=z.getPlugin(V.PluginTypes.visitorProfileProviders,e);if(t){if(i.profile&&i.metadata){var n=_(i,e,t.attributionType);if(!D.isEmpty(n)){var r=[];D.forOwn(n.data,(function(t,i){var a=n.metadata[i],o={key:i,value:t,type:e,metadata:a};r.push(o)})),b.dispatch(R.SET_VISITOR_ATTRIBUTES,{attributes:r})}}}else x.debug("Attribute type",e,"not used by any audiences")}))}}function _(e,t,n){var i=K.getAttribute(t),r=K.getAttributeMetadata(t),a=e.profile[t],o=e.metadata[t];if(D.isEmpty(i))return{data:a,metadata:o};var s={};return D.forOwn(a,(function(e,t){var i;r&&r[t]&&(i=r[t].lastModified);var a;o&&o[t]&&(a=o[t].lastModified),(n===V.AttributionTypes.FIRST_TOUCH&&i>=a||n===V.AttributionTypes.LAST_TOUCH&&a>=i||D.isUndefined(i)&&a)&&(s.data=s.data||{},s.data[t]=e,a&&(s.metadata=s.metadata||{},s.metadata[t]=s.metadata[t]||{},s.metadata[t].lastModified=a))})),s}function E(e,t){return e.indexOf(t)>0}function m(){var e=K.getVisitorProfile(),t=K.getVisitorProfileMetadata(),n=z.getAllPlugins(V.PluginTypes.visitorProfileProviders);if(n){var i=D.reduce(n,(function(e,t){return t.provides&&(e[t.provides]=t),e}),{});e=D.omitBy(e,(function(e,t){var n=i[t];return n&&n.isTransient}))}return{profile:e,metadata:t}}function I(e,t){O.initializeStore(e,t)}function y(e){b.dispatch(R.LOAD_PERSISTED_LAYER_STATES,{layerStates:D.filter(e,(function(e){return!!e.decision}))})}function S(e){e=D.extend({lastSessionTimestamp:0,sessionId:null},e),b.dispatch(R.LOAD_SESSION_STATE,e)}function T(){return"oeu"+C.now()+"r"+Math.random()}function A(e){var t,n,i=z.getAllPlugins(V.PluginTypes.visitorProfileProviders),r=D.filter(i,(function(e){return D.isFunction(e.restorer)}));e.profile&&e.metadata?(t=e.profile,n=e.metadata):(t=e,n={}),t=D.reduce(t,(function(e,t,n){var i=t,a=D.find(r,{provides:n});return a&&(i=a.restorer(t)),e[n]=i,e}),{}),b.dispatch(R.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:n})}function w(e){try{return k.parse(e)}catch(t){return x.debug("Failed to parse: ",e,t),null}}var D=n(2),b=n(8),R=n(15),O=n(6),N=n(7),P=n(65),C=n(14),L=n(17),V=n(12),k=n(16),F=n(72).LocalStorage,x=n(11),M=n(77).Promise,U=n(12).VisitorStorageKeys,G=L.get("stores/global"),B=L.get("stores/layer"),z=L.get("stores/plugins"),j=L.get("stores/session"),H=L.get("stores/visitor_id"),Y=L.get("stores/visitor_bucketing"),K=L.get("stores/visitor"),q=L.get("stores/provider_status");t.getIdFromCookies=function(){var e,t=P.get(V.COOKIES.VISITOR_ID);return e=P.get(V.COOKIES.VISITOR_UUID),t||(t=T()),{randomId:t,UUID:e}},t.setId=function(e){var n=H.getBucketingId();if(b.dispatch(R.SET_VISITOR_ID,e),H.getBucketingId()!==n){t.loadData();try{t.persistVisitorId(e)}catch(e){if(x.error("Visitor / Unable to persist visitorId, disabling tracking"),b.dispatch(R.LOAD_DIRECTIVE,{trackingDisabled:!0}),e instanceof P.MismatchError)throw x.error("Visitor / Cookie not set to correct value:",e),new Error("Cookie mismatch error while persisting visitorId");throw e}}t.refreshSession()},t.getVariationIdMap=function(){return c(U.VARIATION_MAP)||{}},t.updateVariationIdMap=function(e,t,n){b.dispatch(R.UPDATE_VARIATION_ID_MAP,{layerId:e,experimentId:t,variationId:n})},t.getPreferredLayerMap=r,t.updatePreferredLayerMap=a,t.persistTrackerOptimizelyData=function(e){p(U.TRACKER_OPTIMIZELY,e)},t.refreshSession=function(){b.dispatch(R.REFRESH_SESSION)},t.populateEagerVisitorData=function(e,n){var i=D.filter(e,(function(e){return!e.isLazy})),r=t.populateVisitorData(i,n);return r},t.populateLazyVisitorData=function(e,n){var i=D.filter(e,(function(e){return e.isLazy}));return t.populateVisitorData(i,n)},t.populateVisitorData=function(e,t){t=t||{};var n=D.partial(u,t),i=D(e).filter({isAsync:!0}).map(n).filter().value();return D.forEach(D.filter(e,(function(e){return!e.isAsync})),n),i.length>0?M.all(i):M.resolve()},t.loadData=function(){I(c(U.EVENTS)||[],c(U.EVENT_QUEUE)||[]);var e=d(U.LAYER_STATES);y(l(e)),S(c(U.SESSION_STATE)||{}),A(c(U.VISITOR_PROFILE)||{});var n=c(U.TRACKER_OPTIMIZELY);n&&s(n),t.loadForeignData(),t.removeLegacySessionStateCookies()},t.persistBehaviorEvents=function(e){p(U.EVENTS,e)},t.persistBehaviorEventQueue=function(e){p(U.EVENT_QUEUE,e)},t.persistLayerStates=function(){var e=B.getLayerStates(t.getNamespace());e=D.map(e,(function(e){return D.omit(e,"namespace")})),p(U.LAYER_STATES,e)},t.persistSessionState=function(){p(U.SESSION_STATE,j.getState())},t.persistVisitorProfile=function(){p(U.VISITOR_PROFILE,m())},t.persistVisitorBucketingStore=function(){i(),o()},t.getUserIdFromKey=function(e,n){var i;return D.includes(e,n)&&D.includes(e,"_")&&D.includes(e,"$$")&&D.includes(e.slice(e.indexOf("$$")),t.getNamespace())&&(i=e.slice(e.indexOf("_")+1,e.indexOf("$$"))),i},t.persistVisitorId=function(e){D.isUndefined(e.UUID)?e.randomId&&P.set(V.COOKIES.VISITOR_ID,e.randomId):null===e.UUID?P.remove(V.COOKIES.VISITOR_UUID):P.set(V.COOKIES.VISITOR_UUID,e.UUID)},t.getAttribute=function(e){return K.getAttribute(e)},t.getPendingAttributeValue=function(e){return q.getPendingAttributeValue(e)},t.loadForeignData=function(){D.each(F.keys(),(function(e){var t=F.getItem(e);t&&v(e,t)}))},t.getNamespace=function(){return G.getNamespace()},t.removeLegacySessionStateCookies=function(){var e=P.getAll();D.forEach(D.keys(e),(function(e){0===e.indexOf(V.COOKIES.SESSION_STATE+"$$")&&P.remove(e)}))}}),(function(e,t,n){function i(e,n){n!==!1&&(n=!0);for(var i,a,o=e.hostname.split("."),s=[],u=null,d=o.length-1;d>=0;d--)if(s.unshift(o[d]),i=s.join("."),!r.includes(h,i)){a={domain:n?"."+i:i};try{t.set(v,Math.random().toString(),a),t.remove(v,a),u=a.domain;break}catch(e){}}return c.dispatch(l.SET_COOKIE_DOMAIN,u),u}var r=n(2),a=n(14),o=n(66),s=n(67),u=n(68).create,c=n(8),l=n(15),d=n(17),f=d.get("stores/cookie_options"),p=t.SetError=u("CookieSetError"),g=t.MismatchError=u("CookieMismatchError");t.getAll=function(e){r.isUndefined(e)&&(e=!0);var n,i,a,s,u;n=o.getCookieString().split(/\s*;\s*/);var c={};for(a=0;a<n.length;a++)if(i=n[a],s=i.indexOf("="),s>0&&(u=t.safeDecodeURIComponent(i.substring(0,s)),void 0===c[u])){var l=i.substring(s+1);e&&(l=t.safeDecodeURIComponent(l)),c[u]=l}return c},t.safeDecodeURIComponent=function(e){try{return decodeURIComponent(e)}catch(t){return e}},t.get=function(e,n){var i=t.getAll(n);return i[e]},t.set=function(e,n,u,c){u=r.extend({encodeValue:!0},u),c!==!1&&(c=!0);var l=[];if(r.isUndefined(u.domain)){var d=f.getCurrentDomain();d||(d=i(s.getLocation(),!0)),u.domain=d}if(u.domain&&l.push("domain="+u.domain),r.isUndefined(u.path)&&(u.path="/"),u.path&&l.push("path="+u.path),r.isUndefined(u.expires)){var h=r.isUndefined(u.maxAge)?f.getDefaultAgeInSeconds():u.maxAge;u.expires=new Date(a.now()+1e3*h)}if(r.isUndefined(u.expires)||l.push("expires="+u.expires.toUTCString()),u.secure&&l.push("secure"),l=l.join(";"),o.setCookie(e+"="+(u.encodeValue?encodeURIComponent(n):n)+";"+l),c){var v=u.encodeValue,_=t.get(e,v);if(_!==n){if(!_)throw new p('Failed to set cookie "'+e+'"');throw new g('Expected "'+n+'" for "'+e+'", got "'+_+'"')}}},t.remove=function(e,n){t.set(e,null,r.extend({},n,{expires:new Date(0)}),!1)};var h=["optimizely.test"],v="optimizelyDomainTestCookie"}),(function(e,t){function n(){return"loading"===t.getReadyState()}t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(e){document.cookie=e},t.querySelector=function(e){return document.querySelector(e)},t.querySelectorAll=function(e){return document.querySelectorAll(e)},t.childrenOf=function(e){return Array.prototype.slice.call(e.querySelectorAll("*"))},t.createElement=function(e){return document.createElement(e)},t.isReady=function(){return"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(e){return document.addEventListener("DOMContentLoaded",e),function(){t.removeReadyHandler(e)}},t.removeReadyHandler=function(e){return function(){document.removeEventListener("DOMContentLoaded",e)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(e){if(!n())throw new Error("Aborting attempt to write to already-loaded document");document.write(e)},t.appendToHead=function(e){return document.head.appendChild(e)},t.addEventListener=function(e,t,n){return document.addEventListener(e,t,n),function(){document.removeEventListener(e,t,n)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(e){for(var t=e.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}}),(function(e,t,n){var i=n(2);t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(e){window.location.replace(e)},t.setGlobal=function(e,t){window[e]=t},t.getGlobal=function(e){return window[e]},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)},t.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)}}),(function(e,t,n){var i=n(69),r=i("InternalError");t.BaseError=r,t.create=function(e){return i(e,r)}}),(function(e,t,n){function i(e,t){function n(t){if(!(this instanceof n))return new n(t);try{throw new Error(t)}catch(t){t.name=e,this.stack=t.stack}r&&this.stack&&(this.stack=a(this.stack,e,t)),this.message=t||"",this.name=e}return n.prototype=new(t||Error),n.prototype.constructor=n,n.prototype.inspect=function(){return this.message?"["+e+": "+this.message+"]":"["+e+"]"},n.prototype.name=e,n}var r=n(70)(),a=n(71);e.exports=i}),(function(e,t){"use strict";e.exports=function(){var e=new Error("yep");return!!e.stack&&"Error: yep\n"===e.stack.substr(0,11)}}),(function(e,t){"use strict";e.exports=function(e,t,n){var i=t;return n&&(i+=": "+n),e=i+e.slice(e.indexOf("\n"))}}),(function(e,t,n){var i,r="optimizely_data",a=n(73),o=n(67),s=n(75),u=n(68).create,c=t.Error=u("StorageError"),l=o.getGlobal("localStorage");
l?i=a.create(l,r):(s.emitError(new c("Failed to initialize localStorage")),i=a.mockStorage),t.LocalStorage=i}),(function(e,t,n){function i(e,t){this.bt=e,this.Rt=t}var r=n(2),a=n(11),o="$$";i.prototype.Ot=function(e){return[this.Rt,e].join(o)},i.prototype.Nt=function(e){return e.replace(this.Rt+o,"")},i.prototype.setItem=function(e,t){try{this.bt.setItem(this.Ot(e),t)}catch(t){a.warn("Failed to save",e,"to localStorage:",t)}},i.prototype.removeItem=function(e){this.bt.removeItem(this.Ot(e))},i.prototype.getItem=function(e){var t=null;try{t=this.bt.getItem(this.Ot(e))}catch(e){}return t},i.prototype.keys=function(){var e=r.keys(this.bt);return r.map(e,this.Nt.bind(this))},i.prototype.allKeys=function(){return r.keys(this.bt)},i.prototype.allValues=function(){return r.values(this.bt)},e.exports={create:function(e,t){return new i(e,t)},mockStorage:{keys:function(){},getItem:function(e){},removeItem:function(e){},setItem:function(e,t){}}}}),(function(e,t,n){function i(){return o.getGlobal("performance")}var r=n(8),a=n(14),o=n(67),s=n(15),u=n(68).create,c=n(17),l=c.get("stores/rum"),d="optimizely:",f=t.Error=u("PerformanceError");t.time=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e;t.clearMarks(n+"Begin"),t.mark(n+"Begin")}}},t.timeEnd=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e,a=t.getEntriesByName(n+"Begin");if(0===a.length)throw new f("Called timeEnd without matching time: "+e);t.clearMarks(n+"End"),t.mark(n+"End");var o=t.getEntriesByName(n+"End"),u=e+"Time",c=o[0].startTime-a[0].startTime;r.dispatch(s.SET_PERFORMANCE_MARKS_DATA,{name:u,data:{startTime:Math.round(1e3*a[0].startTime)/1e3,duration:Math.round(1e3*c)/1e3}})}}},t.now=function(){var e=i();return e?e.now():a.now()}}),(function(e,t,n){var i=n(76);t.emitError=function(e,t,n){var r=!0;i.emit({type:"error",name:e.name||"Error",data:{error:e,metadata:t}},n||!1,r)},t.emitInternalError=function(e,n){t.emitError(e,n,!0)},t.emitAnalyticsEvent=function(e,t){var n={type:"analytics",name:"trackEvent",data:e};i.emit(n,t)}}),(function(e,t,n){var i=n(2),r=n(5),a=n(8),o=n(15),s=n(17),u=n(11),c=n(75),l=s.get("stores/event_emitter");t.on=function(e){return e.token||(e.token=r.generate()),a.dispatch(o.ADD_EMITTER_HANDLER,e),e.token},t.off=function(e){a.dispatch(o.REMOVE_EMITTER_HANDLER,{token:e})},t.emit=function(e,t,n){var r=l.getHandlers(e,t);i.each(r,(function(i){try{i.handler.call({$di:s},e)}catch(r){u.warn("Error in event emitter handler",e,r),!n&&i.emitErrors&&c.emitError(r,null,t)}}))}}),(function(e,t,n){e.exports=n(78)}),(function(e,t,n){(function(t,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */
!(function(t,n){e.exports=n()})(this,(function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function r(e){return"function"==typeof e}function a(e){Q=e}function o(e){X=e}function s(){return function(){return t.nextTick(f)}}function u(){return"undefined"!=typeof W?function(){W(f)}:d()}function c(){var e=0,t=new Z(f),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function l(){var e=new MessageChannel;return e.port1.onmessage=f,function(){return e.port2.postMessage(0)}}function d(){var e=setTimeout;return function(){return e(f,1)}}function f(){for(var e=0;e<q;e+=2){var t=ne[e],n=ne[e+1];t(n),ne[e]=void 0,ne[e+1]=void 0}q=0}function p(){try{var e=n(80);return W=e.runOnLoop||e.runOnContext,u()}catch(e){return d()}}function g(e,t){var n=arguments,i=this,r=new this.constructor(v);void 0===r[re]&&k(r);var a=i._state;return a?!(function(){var e=n[a-1];X((function(){return C(a,r,e,i._result)}))})():R(i,r,e,t),r}function h(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(v);return A(n,e),n}function v(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function E(){return new TypeError("A promises callback cannot return that same promise.")}function m(e){try{return e.then}catch(e){return ue.error=e,ue}}function I(e,t,n,i){try{e.call(t,n,i)}catch(e){return e}}function y(e,t,n){X((function(e){var i=!1,r=I(n,t,(function(n){i||(i=!0,t!==n?A(e,n):D(e,n))}),(function(t){i||(i=!0,b(e,t))}),"Settle: "+(e._label||" unknown promise"));!i&&r&&(i=!0,b(e,r))}),e)}function S(e,t){t._state===oe?D(e,t._result):t._state===se?b(e,t._result):R(t,void 0,(function(t){return A(e,t)}),(function(t){return b(e,t)}))}function T(e,t,n){t.constructor===e.constructor&&n===g&&t.constructor.resolve===h?S(e,t):n===ue?(b(e,ue.error),ue.error=null):void 0===n?D(e,t):r(n)?y(e,t,n):D(e,t)}function A(t,n){t===n?b(t,_()):e(n)?T(t,n,m(n)):D(t,n)}function w(e){e._onerror&&e._onerror(e._result),O(e)}function D(e,t){e._state===ae&&(e._result=t,e._state=oe,0!==e._subscribers.length&&X(O,e))}function b(e,t){e._state===ae&&(e._state=se,e._result=t,X(w,e))}function R(e,t,n,i){var r=e._subscribers,a=r.length;e._onerror=null,r[a]=t,r[a+oe]=n,r[a+se]=i,0===a&&e._state&&X(O,e)}function O(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,r=void 0,a=e._result,o=0;o<t.length;o+=3)i=t[o],r=t[o+n],i?C(n,i,r,a):r(a);e._subscribers.length=0}}function N(){this.error=null}function P(e,t){try{return e(t)}catch(e){return ce.error=e,ce}}function C(e,t,n,i){var a=r(n),o=void 0,s=void 0,u=void 0,c=void 0;if(a){if(o=P(n,i),o===ce?(c=!0,s=o.error,o.error=null):u=!0,t===o)return void b(t,E())}else o=i,u=!0;t._state!==ae||(a&&u?A(t,o):c?b(t,s):e===oe?D(t,o):e===se&&b(t,o))}function L(e,t){try{t((function(t){A(e,t)}),(function(t){b(e,t)}))}catch(t){b(e,t)}}function V(){return le++}function k(e){e[re]=le++,e._state=void 0,e._result=void 0,e._subscribers=[]}function F(e,t){this._instanceConstructor=e,this.promise=new e(v),this.promise[re]||k(this.promise),K(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?D(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&D(this.promise,this._result))):b(this.promise,x())}function x(){return new Error("Array Methods must be provided an Array")}function M(e){return new F(this,e).promise}function U(e){var t=this;return new t(K(e)?function(n,i){for(var r=e.length,a=0;a<r;a++)t.resolve(e[a]).then(n,i)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function G(e){var t=this,n=new t(v);return b(n,e),n}function B(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function z(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function j(e){this[re]=V(),this._result=this._state=void 0,this._subscribers=[],v!==e&&("function"!=typeof e&&B(),this instanceof j?L(this,e):z())}function H(){var e=void 0;if("undefined"!=typeof i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=j}var Y=void 0;Y=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var K=Y,q=0,W=void 0,Q=void 0,X=function(e,t){ne[q]=e,ne[q+1]=t,q+=2,2===q&&(Q?Q(f):ie())},$="undefined"!=typeof window?window:void 0,J=$||{},Z=J.MutationObserver||J.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3),ie=void 0;ie=ee?s():Z?c():te?l():void 0===$?p():d();var re=Math.random().toString(36).substring(16),ae=void 0,oe=1,se=2,ue=new N,ce=new N,le=0;return F.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===ae&&n<e;n++)this._eachEntry(t[n],n)},F.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===h){var r=m(e);if(r===g&&e._state!==ae)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===j){var a=new n(v);T(a,e,r),this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(i(e),t)},F.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===ae&&(this._remaining--,e===se?b(i,n):this._result[t]=n),0===this._remaining&&D(i,this._result)},F.prototype._willSettleAt=function(e,t){var n=this;R(e,void 0,(function(e){return n._settledAt(oe,t,e)}),(function(e){return n._settledAt(se,t,e)}))},j.all=M,j.race=U,j.resolve=h,j.reject=G,j._setScheduler=a,j._setAsap=o,j._asap=X,j.prototype={constructor:j,then:g,"catch":function(e){return this.then(null,e)}},j.polyfill=H,j.Promise=j,j}))}).call(t,n(79),(function(){return this})())}),(function(e,t){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function o(){h&&p&&(h=!1,p.length?g=p.concat(g):v=-1,g.length&&s())}function s(){if(!h){var e=r(o);h=!0;for(var t=g.length;t;){for(p=g,g=[];++v<t;)p&&p[v].run();v=-1,t=g.length}p=null,h=!1,a(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,d,f=e.exports={};!(function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(e){d=i}})();var p,g=[],h=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];g.push(new u(e,t)),1!==g.length||h||r(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}}),(function(e,t){}),(function(e,t,n){function i(e){var t;if(!o.find(m.getFrames(),{origin:e.origin}))return void E.debug("XDomain","No frame found for origin: "+e.origin);try{t=h.parse(e.data)}catch(t){return void E.debug("XDomain","Ignoring malformed message event:",e)}if("ERROR"===t.type)l.dispatch(u.XDOMAIN_SET_DISABLED,{disabled:!0}),d.emitInternalError(new I("Xdomain Error: "+t.response.toString()));else if("SYNC"===t.type)o.each(m.getSubscribers(),(function(e){e(t.response.key,t.response.value)}));else{var n=m.getMessageById(t.id);if(!n){if(E.warn("XDomain","No stored message found for ID",t.id),o.isNumber(t.id)){var i=m.getNextMessageId();t.id>=i?d.emitInternalError(new I("Message ID is greater than expected maximum ID ("+t.id+">"+i+")")):t.id<0?d.emitInternalError(new I("Message ID is < 0: "+t.id)):d.emitInternalError(new I("No stored message found for message ID: "+t.id))}else d.emitInternalError(new I("Message ID is not a number: "+t.id.toString()));return}n.resolver(t.response),l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:o.extend({},n,{endTime:p.now(),response:t.response})})}}function r(e,t){return t||(t=m.getDefaultFrame()),new s(function(n){var i={data:o.extend({},e,{id:m.getNextMessageId()}),resolver:n};t?m.isDisabled()||a(i,t):l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:i.data.id,message:i})})}function a(e,t){var n=e.data;l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:e.data.id,message:o.extend({},e,{startTime:p.now()})}),t.target.postMessage(h.stringify(n),t.origin)}var o=n(2),s=n(77).Promise,u=n(15),c=n(17),l=n(8),d=n(75),f=n(68).create,p=n(14),g=n(66),h=n(16),v=n(64),_=n(67),E=n(11),m=c.get("stores/xdomain"),I=t.Error=f("XDomainStorageError");t.setItem=function(e,t,n){return r({type:"PUT",key:e,value:t},n)},t.getItem=function(e,t){return r({type:"GET",key:e},t)},t.fetchAll=function(e){return r({type:"GETALL"},e)},t.subscribe=function(e){l.dispatch(u.XDOMAIN_ADD_SUBSCRIBER,{subscriber:e})},t.loadIframe=function(e,t){return new s(function(n){var i=g.createElement("iframe");i.src=e+t,i.hidden=!0,i.setAttribute("aria-hidden","true"),i.setAttribute("tabindex","-1"),g.appendToHead(i),i.onload=function(){var r={id:m.getNextFrameId(),target:i.contentWindow,origin:e,path:t};l.dispatch(u.XDOMAIN_ADD_FRAME,r),n(r)}})},t.loadCanonicalOrigins=function(e){l.dispatch(u.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:e})},t.getXDomainUserId=function(e,t){var n,i={};return o.each(t,(function(t){i[t]=[],o.each(o.keys(e),(function(e){var r=v.getUserIdFromKey(e,t);!n&&r&&(n=r),r&&!o.includes(i[t],r)&&i[t].push(r)}))})),E.debug("XDomain: Found userIds:",i),n},t.load=function(e,n){return _.addEventListener("message",i),t.loadIframe(e,n).then((function(e){l.dispatch(u.XDOMAIN_SET_DEFAULT_FRAME,e),m.isDisabled()||o.each(m.getMessages(),(function(t){t.startTime||a(t,e)}))}))}}),(function(e,t,n){function i(e,t){var n=e.getValueOrDefault([s.FIELDS.TIME],0),i=t.getValueOrDefault([s.FIELDS.TIME],0);return Math.abs(n-i)<u}function r(e,t){var n;n=i(e,t)?e.getValueOrDefault([s.FIELDS.SESSION_ID]):t.getValueOrDefault([s.FIELDS.TIME]),t.setFieldValue(s.FIELDS.SESSION_ID,n)}var a=n(53).Event,o=n(53).EventBase,s=n(54),u=18e5;t.updateSessionId=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_ID,t.getValueOrDefault([s.FIELDS.TIME]));var n=e.getValueOrDefault([s.FIELDS.TIME]),i=e.getValueOrDefault([s.FIELDS.SESSION_ID]),u=t.getValueOrDefault([s.FIELDS.TIME]);n="number"!=typeof n?u-36e5:n,i="number"!=typeof i?n:i,e=new a(new o("",""),n,i),r(e,t)},t.sessionize=function(e){var t=e.length;if(0!==t){e[0].setFieldValue(s.FIELDS.SESSION_ID,e[0].getValueOrDefault([s.FIELDS.TIME]));for(var n=1;n<t;n++)r(e[n-1],e[n])}},t.sessionSortPredicate=function(e,t){return e[s.FIELDS.TIME]-t[s.FIELDS.TIME]},t.applyMigrations=function(e){return!1}}),(function(e,t,n){var i=n(2),r=n(15),a=n(8),o=n(77).Promise,s=n(11),u=n(14),c=n(84),l=n(16),d=3;t.isCORSSupported=function(){var e=c.get("XMLHttpRequest");return"withCredentials"in new e},t.request=function(e){return e=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},e),new o(function(n,r){if(!t.isCORSSupported())return r("CORS is not supported");var a=c.get("XMLHttpRequest"),o=new a;o.onload=function(){e.success&&e.success(o),n(o)},o.onerror=function(){e.error&&e.error(o),r(o)},i.isObject(e.data)&&(e.data=l.stringify(e.data)),o.open(e.method,e.url,e.async),o.setRequestHeader("Content-Type",e.contentType),o.send(e.data)})},t.retryableRequest=function(e,n,c,l){if(!n)return o.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return o.reject(new Error("CORS is not supported."));i.isUndefined(l)&&(l=d),i.isUndefined(c)&&(c=0);var f={id:n,timeStamp:u.now(),data:e,retryCount:c};return a.dispatch(r.SET_PENDING_EVENT,f),s.debug("Sending event ",n),t.request(e).then((function(e){return a.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),e}),(function(e){throw f.retryCount>=l?(a.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),s.warn("Event ",f," could not be sent after ",l," attempts.")):(f.retryCount++,a.dispatch(r.SET_PENDING_EVENT,f),s.debug("Event ",f," failed to send, with error ",e," It will be retried ",l-c," times.")),e}))},t.sendBeacon=t.request}),(function(e,t,n){var i=n(2),r=n(14),a=n(12),o=n(66),s=n(8),u=n(15),c=n(11),l=n(17),d=l.get("stores/sandbox"),f=n(67);t.shouldSandbox=function(){return!1},t.get=function(e){if(!e)throw new Error("Name is required");if(t.shouldSandbox()){d.isInitialized()||p();var n=d.get(e);if(n)return n}return f.getGlobal(e)};var p=function(){try{var e="optimizely_"+r.now(),t=o.createElement("iframe");t.name=e,t.style.display="none",o.appendToHead(t);var n=t.contentWindow,l=t.contentDocument;l.write("<script></script>"),l.close();var d=i.mapValues(a.SandboxedFunctions,(function(e){return n[e]}));s.dispatch(u.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:d}),t.parentNode.removeChild(t)}catch(e){c.warn("Unable to create a sandbox: ",e)}}}),(function(e,t,n){var i=n(17);i.register("env/jquery",n(86))}),(function(e,t,n){var i,r=n(67);try{i=$}catch(e){}var a=r.getGlobal("$");i&&i!==a?e.exports=i:e.exports=a}),(function(e,t,n){function i(){var e=Boolean(m.result(window.optimizely,"initialized"));w.dispatch(I.LOAD_DIRECTIVE,{alreadyInitialized:e})}function r(){w.dispatch(I.LOAD_DIRECTIVE,{mutationObserverAPISupported:N.isMutationObserverAPISupported()})}function a(){var e=N.getUserAgent()||"";if(!m.isString(e))return void D.warn("Directive / userAgent not a string");e=e.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],n=function(t){if(m.includes(e,t))return D.warn("Directive / Matches bot:",t),!0};m.some(t,n)&&(D.log("Directive / Disabling tracking"),w.dispatch(I.LOAD_DIRECTIVE,{trackingDisabled:!0}))}function o(){var e=S.get(A.COOKIES.OPT_OUT),n=R.getQueryParamValue(P.OPT_OUT);e?n===e||"true"!==n&&"false"!==n?w.dispatch(I.LOAD_DIRECTIVE,{shouldOptOut:"true"===e}):t.setOptOut("true"===n):"true"===n&&t.setOptOut(!0)}function s(){var e=!1,t=[P.AB_PREVIEW,P.DISABLE];t.push(P.EDITOR);for(var n=0;n<t.length;n++)if("true"===R.getQueryParamValue(t[n])){D.warn("Directive / Not activating because "+t[n]+" is set."),e=!0;break}w.dispatch(I.LOAD_DIRECTIVE,{disabled:e})}function u(){w.dispatch(I.LOAD_DIRECTIVE,{isPreview:!1})}function c(){var e=R.getQueryParamValue(P.LEGACY_PREVIEW);e&&D.log("Directive / Is legacy preview mode"),w.dispatch(I.LOAD_DIRECTIVE,{isLegacyPreview:!!e})}function l(){w.dispatch(I.LOAD_DIRECTIVE,{isEditor:!1})}function d(){w.dispatch(I.LOAD_DIRECTIVE,{isSlave:!1})}function f(){var e=N.getGlobal("optlyDesktop"),t=!(!e||m.isUndefined(e["p13nInner"]));t&&D.log("Directive / Is running in desktop app editor"),w.dispatch(I.LOAD_DIRECTIVE,{isRunningInDesktopApp:t})}function p(){var e="true"===R.getQueryParamValue(P.EDITOR_V2);e&&D.log("Directive / Is running in editor"),w.dispatch(I.LOAD_DIRECTIVE,{isRunningInV2Editor:e})}function g(){var e=S.get(A.COOKIES.TOKEN)||null,t=R.getQueryParamValue(P.TOKEN)||e;w.dispatch(I.LOAD_DIRECTIVE,{projectToken:t})}function h(){var e=S.get(A.COOKIES.PREVIEW),t=[],n=R.getQueryParamValue(P.FORCE_AUDIENCES);if(n)t=n.split(",");else if(e)try{var i=O.parse(e);t=i.forceAudienceIds}catch(t){var r=new b("Failed to parse previewCookie in registerForceAudienceIds: "+e),a={originalMessage:t.message,userError:!0};y.emitError(r,a)}t.length&&(D.log("Directive / Force Audience IDs:",t),w.dispatch(I.LOAD_DIRECTIVE,{forceAudienceIds:t}))}function v(){var e=S.get(A.COOKIES.PREVIEW),t=[],n=R.getQueryParamValue(P.FORCE_VARIATIONS);if(n)t=n.split(",");else if(e)try{var i=O.parse(e);t=i.forceVariationIds}catch(t){var r=new b("Failed to parse previewCookie in registerForceVariationIds: "+e),a={originalMessage:t.message,userError:!0};y.emitError(r,a)}t.length&&(D.log("Directive / Force Variation IDs:",t),w.dispatch(I.LOAD_DIRECTIVE,{forceVariationIds:t}))}function _(){var e=R.getQueryParamValue(P.FORCE_TRACKING);e&&w.dispatch(I.LOAD_DIRECTIVE,{forceTracking:e})}function E(){var e="OFF",t=R.getQueryParamValue("optimizely_log");if(t){var n=t.split(":");""!==n[0]&&(e=String(n[0]).toUpperCase()),"undefined"!=typeof n[1]&&D.setLogMatch(n[1])}D.setLogLevel(e)}var m=n(2),I=n(15),y=n(75),S=n(65),T=n(68).create,A=n(12),w=n(8),D=n(11),b=t.JSONParseError=T("JSONParseError"),R=n(88),O=n(16),N=n(67),P={AB_PREVIEW:"optimizely_show_preview",DISABLE:"optimizely_disable",EDITOR:"optimizely_editor",EDITOR_V2:"optimizely_p13n",FORCE_AUDIENCES:"optimizely_x_audiences",FORCE_VARIATIONS:"optimizely_x",LEGACY_PREVIEW:"optimizely_show_preview",OPT_OUT:"optimizely_opt_out",PREVIEW_LAYER_IDS:"optimizely_preview_layer_ids",TOKEN:"optimizely_token",FORCE_TRACKING:"optimizely_force_tracking"};t.populateDirectiveData=function(){E(),a(),i(),r(),o(),s(),l(),u(),c(),d(),f(),p(),g(),h(),v(),_()},t.setOptOut=function(e){e?(D.warn("Directive / Opting out"),S.set(A.COOKIES.OPT_OUT,"true",null,!0)):S.remove(A.COOKIES.OPT_OUT),w.dispatch(I.LOAD_DIRECTIVE,{shouldOptOut:e})}}),(function(e,t,n){var i=n(67),r=n(89);t.getLanguage=function(){return i.getNavigatorLanguage()},t.getQueryParams=r.getQueryParams,t.getQueryParamValue=r.getQueryParamValue,t.getUrl=function(){return i.getHref()}}),(function(e,t,n){var i=n(2),r=n(67);t.getQueryParams=function(){var e=r.getLocationSearch()||"";if(0===e.indexOf("?")&&(e=e.substring(1)),0===e.length)return[];for(var t=e.split("&"),n=[],i=0;i<t.length;i++){var a="",o="",s=t[i].split("=");s.length>0&&(a=s[0]),s.length>1&&(o=s[1]),n.push([a,o])}return n},t.getQueryParamValue=function(e){for(var n=t.getQueryParams(),i=0;i<n.length;i++)if(n[i][0]===e)return n[i][1];return null},t.queryStringFromMap=function(e){return i.map(e,(function(e,t){return t+"="+e})).join("&")}}),(function(e,t,n){var i=n(66),r=n(11),a=n(83);t.addScriptAsync=function(e,t){var n=i.querySelector("head"),a=i.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,t&&(a.onload=t),n.insertBefore(a,n.firstChild),r.debug("Asynchronously requesting "+e)},t.addScriptSync=function(e,n){try{var o="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(e.indexOf('"')!==-1)return void r.error("Blocked attempt to load unsafe script: "+e);if(i.write('<script id="'+o+'" src="'+e+'"></script>'),!i.querySelector("#"+o))throw new Error("Document.write failed to append script");n&&n()}catch(i){r.debug("Document.write failed for "+e+": "+i.message);var s=function(e){var t=new Function(e.responseText);t(),n&&n()};return a.request({url:e,async:!1,contentType:"text/plain",success:s})["catch"]((function(i){r.error("Failed to load "+e+" via synchronous XHR: "+i.message),t.addScriptAsync(e,n)}))}}}),(function(e,t,n){var i=n(67),r="optimizelyDataApi";t.registerFunction=function(e,t){var n=i.getGlobal(r);n||(n={},i.setGlobal(r,n)),n[e]||(n[e]=t)},t.getFunction=function(e){return i.getGlobal(r)[e]}}),(function(e,t,n){function i(){var e=null;w.isNumber(e)&&0===fe.getCount()?(W.log("Activating after delay of",e,"ms because no Experiments are running"),H.dispatch(P.SET_RUM_DATA,{data:{activateDfd:!0}}),setTimeout(L.emitActivateEvent,e)):L.emitActivateEvent()}function r(e){we.handleError(e.data.error,e.data.metadata)}function a(){w.isArray(window.optimizely)&&(window.optimizely=w.filter(window.optimizely,(function(e){var t=!0;return!Ae.push(e,t)})))}function o(e){return w.each(e,(function(e,t){q.setItem(t,e)})),e}function s(){var e=ve.getAccountId(),t="https://a3698060313.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+e+"."),n="/client_storage/a"+e+".html";oe.subscribe(q.setItem);var i=oe.fetchAll().then((function(e){var t=Te.getCanonicalOrigins();if(t){var n=oe.getXDomainUserId(e,t);n&&(W.log("Syncing cross-origin visitor randomId:",n),ae.persistVisitorId({randomId:n}))}return e})).then(o);return Z.all([oe.load(t,n),i.then((function(){ae.loadForeignData()})).then((function(){W.log("Loaded visitor data from foreign origins"),L.emitOriginsSyncedEvent()}),(function(e){W.debug("Ignored error syncing foreign data (expected if waitForOriginSync used:",e.message),W.debug("Enqueuing sync to happen after visitorId set."),H.dispatch(P.ADD_CLEANUP_FN,{lifecycle:G.Lifecycle.postVisitorProfileLoad,cleanupFn:L.emitOriginsSyncedEvent})}))])}function u(e){var t=le.getVisitorProfile();return ae.populateEagerVisitorData(e,t)}function c(e,t,n){e=e||[];var i=de.getAllPlugins(G.PluginTypes.visitorProfileProviders),r=ve.getGlobalHoldbackThreshold(),a=le.getVisitorProfile();ae.populateLazyVisitorData(i,a);var o=ye.getBucketingId();if(!o)throw new Error("bucketingId not set");var s,u=le.getVisitorProfile();if(t){var c=Se.getVariationIdMap();s=c[t.id]}var l={bucketingId:o,visitorProfile:u,audiences:e,globalHoldback:r,preferredVariationMap:s,layer:t};return t&&n&&x.isPageIdRelevant(t)?w.map(n,(function(e){return x.createTicket(w.extend({},l,{pageId:e}))})):[x.createTicket(l)]}function l(e){return{bucketingId:ye.getBucketingId(),preferredLayerId:Se.getPreferredLayerMap()[e.id]}}function d(e){var t=fe.getAllByPageIds(e),n=he.getForceVariationIds(),i=he.getForceAudienceIds(),r=w.reduce(t,(function(e,t){return t.groupId?e.groups[t.groupId]||(e.groups[t.groupId]=_e.get(t.groupId)):e.individual.push(t),e}),{groups:{},individual:[]});W.log("Deciding Campaigns/Experiments for Page(s)",e);var a=w.map(r.groups,Y.description).join(", ");W.log("Groups:",a);var o=w.map(r.individual,K.description).join(", ");W.log("Campaigns/Experiments not in Groups (by Campaign id):",o);var s=w.map(r.groups,w.partial(f,n,i,e))||[],u=w.map(r.individual,(function(t){var r=w.filter(t.pageIds,w.partial(w.includes,e));return p(n,i,r,t)})),c=s.concat(u);return Z.all(c).then((function(t){var n=w.filter(t,(function(e){return!!e}));return W.log("All Campaigns/Experiments for Page(s) (by Campaign id)",e,"resolved:",w.map(n,K.description).join(", ")),n}))}function f(e,n,i,r){try{var a=l(r),o=x.decideGroup(r,a);if(o.reason)return W.debug("Not activating Group",Y.description(r),"; reason:",o.reason),Z.resolve();var s=fe.get(o.layerId);if(!s)return W.debug("Visitor was bucketed into a Campaign ("+o.layerId+") which is not in this snippet"),Z.resolve();var u=w.filter(s.pageIds,w.partial(w.includes,i));return w.isEmpty(u)?(W.debug("Not activating Group",Y.description(r),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),Z.resolve()):t.decideAndExecuteLayerASAP(e,n,u,s)}catch(e){return W.error("Error getting decision for Group",Y.description(r),"; ",e),Z.reject(e)}}function p(e,t,n,i){return new Z(function(r,a){try{_(i,e,t,n,(function(a){w.each(a,(function(r){var a=r.pageId?[r.pageId]:n;W.debug("Deciding layer: ",i,"with decisionTicket: ",r,"and actionViewIds: ",a),g(i,e,t,a,r)})),r(i)}))}catch(e){W.error("Error getting decision for Campaign: "+K.description(i),e),a(e)}})}function g(e,t,n,i,r){var a=K.description(e);W.log("Activating Campaign",a,"on Page(s)",i);var o=y(e,r,t,n),s=!(!t.length&&!n.length),u=T(e,o,s)||[],c=A(u,i);if(h(c,e,o,i),C.trackDecisionEvent(o,r),o.error)throw o.error;return x.isInCohort(o)?void v(c,e,o,i):void W.log("Not activating Campaign: "+K.description(e)+"; not in the cohort because:",o.reason)}function h(e,t,n,i){var r=K.description(t);W.log("Preparing actions",e,"for Campaign",r,"on Page(s)",i),w.forEach(e,N.prepareAction)}function v(e,t,n,i){var r=K.description(t);return W.log("Executing actions",e,"for Campaign",r,"on Page(s)",i),Z.all(w.map(e,(function(e){return N.executePreparedAction(e).then(w.partial(L.emitActionAppliedEvent,e))}))).then((function(){W.log("All page actions for",n,"applied:",e),L.emitActionsForDecisionAppliedEvent(n,e)}))["catch"]((function(e){W.warn("Error evaluating page actions for decision",n,"because:",e)}))}function _(e,t,n,i,r){if(t.length||n.length)return void r(c([],void 0,i));var a=K.relatedAudienceIds(e),o=w.reduce(a,(function(e,t){var n=pe.get(t);return n&&e.push(n),e}),[]);I(o,K.getActivationTimeout(e),(function(){var t=c(o,e,i);w.map(t,(function(t){E(t,o,e)})),r(t)}))}function E(e,t,n){var i=w.map(e.audienceIds,pe.get.bind(pe)),r=w.filter(t,(function(t){return!w.includes(e.audienceIds,t.id)}));W.log("When deciding Campaign",K.description(n),"visitor is in audiences:",m(i),"and not in audiences:",m(r))}function m(e){var t=[];return w.each(e,(function(e){t.push(e.name,e)})),t}function I(e,t,n){var i={},r=de.getAllPlugins(G.PluginTypes.audienceMatchers);w.each(e,(function(e){var t=V.requiredAudienceFields(e,r);w.each(t,(function(e){i[e]=!0}))}));var a=w.reduce(i,(function(e,t,n){if(w.isUndefined(ae.getAttribute(n))){var i=ae.getPendingAttributeValue(n);w.isUndefined(i)||e.push(i)}return e}),[]);if(0===a.length)return n();var o=[].concat(e),s=ee.firstToResolve(w.map(a,(function(e){return Z.resolve(e).then((function(){var e=le.getVisitorProfile();if(o=w.filter(o,(function(t){return w.isUndefined(V.isInAudience(e,t,r))})),!w.isEmpty(o))throw new Error("At least one audience is still pending")}))})));Z.race([s,new Z(function(e,n){setTimeout(n,t)})]).then((function(){W.log("Activating Campaign after pending Audiences resolved",e),n()}),(function(){W.log("Activating Campaign after timeout on Audiences",e),n()}))}function y(e,t,n,i){var r,a=K.description(e);return n.length?r=x.getDummyLayerDecision(e,n):(i.length&&(W.log("Applying force audienceIds:",i,"to Campaign",a),t=w.cloneDeep(t),t.audienceIds=i),r=x.decideLayer(e,t)),W.log("Recording decision for Campaign",a,t,"->",r),K.recordLayerDecision(e.id,t,r),r.variationId&&r.experimentId&&ae.updateVariationIdMap(e.id,r.experimentId,r.variationId),e.groupId&&ae.updatePreferredLayerMap(e.groupId,e.id),L.emitLayerDecided({layer:e,decisionTicket:t,decision:r}),r}function S(e){var t=ue.getCleanupFns(e);if(t.length>0){for(;t.length>0;)t.shift()();H.dispatch(P.CLEAR_CLEANUP_FN,{lifecycle:e})}}function T(e,t,n){var i=K.description(e),r="NOT applying changes for Campaign";if(!n&&ve.isGlobalHoldback())return W.log(r,i,"(visitor is in global holdback)"),null;if(t.isLayerHoldback)return W.log(r,i,"(visitor is in layer holdback)"),null;if(!t.experimentId||!t.variationId)return W.log(r,i,"(visitor is not eligible for any Experiments)"),null;var a=[].concat(ge.getLayerActions(t.layerId)||[],ge.getExperimentActions(t.experimentId)||[],ge.getExperimentVariationActions(t.experimentId,t.variationId)||[]);return W.log("Got Actions for Campaign:",i,a),a}function A(e,t){return w.filter(e,(function(e){return w.isUndefined(e.pageId)||w.includes(t,e.pageId)}))}var w=n(2),D=n(5),b=n(68).create,R=t.ActivationCodeError=b("ActivationCodeError"),O=t.ProjectJSError=b("ProjectJSError"),N=n(93),P=n(15),C=n(98),L=n(107),V=n(109),k=n(65),F=n(75),x=n(111),M=n(17),U=n(66),G=n(12),B=n(76),z=n(100),j=n(116),H=n(8),Y=n(115),K=n(103),q=n(72).LocalStorage,W=n(11),Q=n(117),X=n(74),$=n(118),J=n(119),Z=n(77).Promise,ee=n(120),te=n(105),ne=n(106),ie=n(96),re=n(121),ae=n(64),oe=n(81),M=n(17),se=M.get("stores/layer"),ue=M.get("stores/cleanup"),ce=M.get("stores/session"),le=M.get("stores/visitor"),de=M.get("stores/plugins"),fe=M.get("stores/layer_data"),pe=M.get("stores/audience_data"),ge=M.get("stores/action_data"),ue=M.get("stores/cleanup"),he=M.get("stores/directive"),ve=M.get("stores/global"),_e=M.get("stores/group_data"),fe=M.get("stores/layer_data"),se=M.get("stores/layer"),Ee=M.get("stores/pending_events"),de=M.get("stores/plugins"),le=M.get("stores/visitor"),me=M.get("stores/view_data"),Ie=M.get("stores/view"),ye=M.get("stores/visitor_id"),Se=M.get("stores/visitor_bucketing"),Te=M.get("stores/xdomain"),Ae=n(125),we=n(138),De=1e3,be=1e3,Re=t;t.initialize=function(e){if(B.on({filter:{type:"error"},handler:r}),H.dispatch(P.DATA_LOADED,{data:e.clientData}),W.log("Initialized with DATA:",e.clientData),a(),he.isDisabled()||he.shouldOptOut())return void W.log("Controller / Is disabled");var n=!1,o=k.get(G.COOKIES.REDIRECT);if(o){var u=o.match(/^(\d+)\|(.*)/);if(u){W.debug("Found legacy redirect data:",o);var c=u[1],l=u[2];H.dispatch(P.INITIALIZE_STATE,{effectiveVariationId:c,effectiveReferrer:l}),n=!0}}X.time("projectJS");var d=ve.getProjectJS();if(w.isFunction(d))try{j.apply(d)}catch(e){W.error("Error while executing projectJS: ",e),F.emitError(new O(e))}X.timeEnd("projectJS"),w.each(e.plugins||[],(function(e){try{e($)}catch(e){F.emitInternalError(e)}})),w.each(ve.getPlugins()||[],(function(e){try{j.apply(e,[$])}catch(e){F.emitError(e)}})),n||te.load();var f=B.on({filter:{type:"lifecycle",name:"activated"},handler:function(){le.observe(ae.persistVisitorProfile),se.observe(ae.persistLayerStates),ce.observe(ae.persistSessionState),Ee.observe(Q.persistPendingEvents),Se.observe(ae.persistVisitorBucketingStore),B.off(f)}});B.on({filter:{type:"lifecycle",name:"viewActivated"},handler:t.onViewActivated}),B.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:t.onPageDeactivated}),t.initializeApi();var p=Q.getPendingEvents();if(p&&(H.dispatch(P.LOAD_PENDING_EVENTS,{events:p}),Q.retryPendingEvents(p)),B.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),L.emitInitializedEvent(),!he.shouldActivate())return Z.resolve();var g=[],h=s();if(Te.getCanonicalOrigins()){var v=ne.makeTimeoutPromise(be),_=Z.race([h,v])["catch"]((function(e){W.error("Failed to initialize xDomain storage: ",e)})).then(i);g.push(_)}else g.push(h),i();return Z.all(g)},t.activate=function(){try{var e=[];W.log("Activated client"),w.forEach(Ie.getActiveViewStates(),(function(e){re.deactivate(me.get(e.id))})),S(G.Lifecycle.preActivate),H.dispatch(P.ACTIVATE,{activationId:D.generate()});var t=me.getAll();re.registerViews(t),ae.setId(ae.getIdFromCookies()),e.push(C.trackPostRedirectDecisionEvent()),H.dispatch(P.MERGE_VARIATION_ID_MAP,{variationIdMap:ae.getVariationIdMap()}),H.dispatch(P.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:ae.getPreferredLayerMap()}),S(G.Lifecycle.postVisitorProfileLoad),e.push(u(de.getAllPlugins(G.PluginTypes.visitorProfileProviders)).then((function(){W.log("Populated visitor profile")})));var n=c(),i=x.decideGlobal(n);W.log("Made global decision",n,"->",i),H.dispatch(P.RECORD_GLOBAL_DECISION,i);var r=C.trackClientActivation();if(r?W.log("Tracked activation event",r):W.log("Not tracking activation event"),Re.setUpViewActivation(t),Ie.shouldBatch()){H.dispatch(P.SET_VIEW_BATCHING,!1);var a=w.map(Ie.getActiveViewStates(),"id");w.isEmpty(a)||e.push(d(a))}return S(G.Lifecycle.postViewsActivated),S(G.Lifecycle.postActivate),L.emitActivatedEvent(),Z.all(e).then((function(){B.emit({type:z.TYPES.LIFECYCLE,name:"activateDeferredDone"}),W.log("All immediate effects of activation resolved")}),F.emitError)}catch(e){return F.emitError(e),Z.reject(e)}},Re.setUpViewActivation=function(e){w.each(e,(function(e){e.activationType?e.activationType===G.ViewActivationTypes.callback?(W.debug("Setting up conditional activation for Page",re.description(e)),Re.activateViewOnCallback(e)):e.activationType===G.ViewActivationTypes.polling&&(W.debug("Setting up polling activation for Page",re.description(e)),J.pollFor(w.partial(j.apply,e.activationCode),null,w.partial(ie.isTimedOut,Date.now())).then((function(){re.activate(e)}))["catch"]((function(t){W.warn("Failed to activate view ",e,t);
}))):re.activate(e)}))},Re.activateViewOnCallback=function(e){var t=function(t){var n=w.extend({},t,{pageName:e.apiName,type:"page"});Ae.push(n)},n={pageId:e.id};Object.defineProperty(n,"isActive",{get:function(){return Ie.isViewActive(e.id)}});try{j.apply(e.activationCode,[t,n])}catch(t){var i=new R("("+t.toString()+") in activationCode for "+re.description(e));F.emitError(i,{originalError:t,userError:!0})}},t.onViewActivated=function(e){var t=e.data.view;try{if(!ye.getBucketingId())throw new Error("View activated with no visitorId set");var n;Ie.shouldBatch()?(W.debug("Batching activation for Campaigns on Page: "+re.description(t)),n=Z.resolve()):n=d([t.id])["catch"](F.emitError);var i,r=function(){re.parseViewTags(t);var e=C.trackViewActivation(t);e?W.log("Tracked activation for Page",re.description(t),e):W.log("Not Tracking activation for Page",re.description(t))};return i=U.isReady()?Z.resolve(r()):J.pollFor(U.isReady,De).then(r),Z.all([n,i])}catch(e){F.emitError(e)}},t.onPageDeactivated=function(e){var t=e.data.page,n=ge.getAllActionIdsByPageId(t.id);w.each(n,(function(e){var n=ge.getActionState(e);n&&(w.each(n,(function(e){if(e.cancel)try{e.cancel()}catch(e){W.error("Controller / Error cancelling change observation upon deactivation of page.",e)}})),H.dispatch(P.REMOVE_ACTION_STATE,{actionId:e}),W.debug("Controller / Cancelled change observation due to deactivation of page:",t,e))}))},t.initializeApi=function(){var e={get:Ae.get,push:Ae.push},t=window.optimizely;w.isArray(t)&&w.each(t,(function(t){e.push(t)})),e.data={note:"Obsolete, use optimizely.get('data') instead"},e.state={},window.optimizely=e},t.decideAndExecuteLayerASAP=p}),(function(e,t,n){function i(e,t,n){var i=h.getActionState(t.id);if(!i)return void d.warn("Action / Attempted to prepare change for inactive action: ",t);var r=h.getChangeApplier(e.id,t.id);if(!a.isUndefined(r))return void d.warn("Action / Attempted to prepare a change which is already being applied: ",e);var s={changeId:e.id,actionId:t.id,changeApplier:E.create(e,t,n)};l.dispatch(o.SET_CHANGE_APPLIER,s)}function r(e,t,n,o){if(a.includes(o,t))return void d.error("Change with id "+t+" has circular dependencies: "+o.concat(t));if(!e[t]){var c=v.getChange(t);if(!c){var l="Change with id "+t+" is absent";return o.length&&(l+=" but listed as a dependency for "+o[o.length-1]),void d.warn(l)}e[t]=new f(function(l){var g=a.map(c.dependencies||[],(function(i){return r(e,i,n,o.concat([t]))}));if(c.src){var _="change_"+c.src,E=s.makeAsyncRequest(_,(function(){return p.addScriptAsync("https://cdn.optimizely.com/public/3698060313/data"+c.src,(function(){s.resolveRequest(_)}))})).then((function(){c=v.getChange(c.id),i(c,n,u.now())}));g.push(E)}f.all(g).then((function(){var e=u.now(),i=h.getChangeApplier(t,n.id);return i?(d.debug("Action / Applying change:",c),i.apply().then((function(){d.debug("Action / Applied change for the first time in "+(u.now()-e)+"ms:",c),l()}))):(d.debug("Action / Not applying change ",t," - No changeApplier found."),void l())}))["catch"]((function(e){d.error("Action / Failed to apply change:",c,e),l()}))})}return e[t]}var a=n(2),o=n(15),s=n(94),u=n(14),c=n(17),l=n(8),d=n(11),f=n(77).Promise,p=n(90),g=c.get("stores/global"),h=c.get("stores/action_data"),v=c.get("stores/change_data"),_=c.get("stores/session"),E=n(95),m=n(96);m.initialize(),t.prepareAction=function(e){d.debug("Action / Preparing:",e),l.dispatch(o.ACTION_EXECUTED,{actionId:e.id,sessionId:_.getSessionId(),layerId:e.layerId,pageId:e.pageId,timestamp:u.now(),activationId:g.getActivationId()});var t=u.now();a.forEach(e.changeSet,(function(n){l.dispatch(o.ADD_CHANGE,n),n.src||i(v.getChange(n.id),e,t)}))},t.executePreparedAction=function(e){d.debug("Action / Executing:",e);var t={},n=a.map(e.changeSet,(function(n){return r(t,n.id,e,[])}));return f.all(n).then((function(){d.debug("changes for action id="+e.id+" applied")}))}}),(function(e,t,n){var i=n(77).Promise,r=n(8),a=n(15),o=n(17),s=o.get("stores/async_request");t.makeAsyncRequest=function(e,t){var n=s.getPromise(e);if(n)return n;var o,u,c=new i(function(e,t){o=e,u=t});return r.dispatch(a.REGISTER_ASYNC_DEFERRED,{source:e,promise:c,resolver:o,rejecter:u}),t&&t(),c},t.resolveRequest=function(e,t){r.dispatch(a.RESOLVE_DEFERRED,{source:e,resolveWith:t})},t.rejectRequest=function(e,t){r.dispatch(a.REJECT_DEFERRED,{source:e,rejectWith:t})}}),(function(e,t,n){var i=n(78).Promise,r=n(14),a=n(17),o=a.get("stores/plugins"),s=n(12),u=n(11);t.create=function(e,t,n){var a={identifier:e.id,action:t,startTime:n||r.now()};try{var c=o.getPlugin(s.PluginTypes.changeAppliers,e.type);if(!c)throw new Error("Unrecognized change type "+e.type);return new c(e,a)}catch(e){u.error("Change applier was never properly constructed:",e);var l={apply:function(){return i.reject(e)}};return l}}}),(function(e,t,n){function i(){"interactive"!==document.readyState&&"complete"!==document.readyState||(t.domReadyTime=Date.now())}var r=n(97),a=n(17).get("stores/directive");t.domReadyTime=null,t.initialize=function(){i(),document.addEventListener("readystatechange",i,!0)},t.isTimedOut=function(e){var n=Date.now();if(!t.domReadyTime||!e)return!1;var i=Math.max(e,t.domReadyTime);return a.isEditor()&&(i=t.domReadyTime),!(n-i<r.SELECTOR_POLLING_MAX_TIME)}}),(function(e,t){e.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}}),(function(e,t,n){function i(e,t,n,i,r){var a=q.get(t.layerId),o=x.description(a),s=c(e,t,n),u=l(s,t.isLayerHoldback,i),d=Q.isExpectingRedirect(),f=Q.getLayerId();if(d&&f===a.id){G.persist(s,r),w.log("Relaying decision for redirect Campaign",o,s);var p=V.TrackLayerDecisionTimingFlags.preRedirectPolicy;u.timing=p,E(p,[V.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],u),w.log("Called trackLayerDecision for redirect Campaign",o,u)}else{var p=V.TrackLayerDecisionTimingFlags.nonRedirectPolicy;u.timing=p,E(p,[V.NonRedirectPolicies.TRACK_IMMEDIATELY],u),w.log("Called trackLayerDecision for non-redirect Campaign",o,u)}}function r(e,t,n,i,r){var a=q.get(t.layerId),o=x.description(a),s=d(e,t,n,i);v("onLayerDecision",s,r?"trackLayerDecision":void 0),w.log("Analytics / Called onLayerDecision for Campaign",o,s)}function a(e,t){var n=f({activeViewStates:H.getActiveViewStates(),visitorProfile:X.getVisitorProfile(),layerStates:K.getLayerStates()}),i=J.getByApiName(e),r=i&&i.pageId?g(i):H.getActiveViewTags(),a=I.extend({},r,t),o=i&&i.category?i.category:k.OTHER;return I.extend(n,{eventEntityId:i&&i.id,eventApiName:e,eventCategory:o,eventTags:a})}function o(e,t){var n=f({activeViewStates:H.getActiveViewStates(),visitorProfile:X.getVisitorProfile(),layerStates:K.getLayerStates()});return I.extend(n,{pageId:e.id,viewCategory:e.category,eventTags:t.metadata})}function s(e){var t=f({activeViewStates:H.getActiveViewStates(),visitorProfile:X.getVisitorProfile(),layerStates:K.getLayerStates()}),n=e.config&&e.config.selector?e.config.selector:e.eventFilter.selector,i=e&&e.category?e.category:k.OTHER,r=g(e);return I.extend(t,{event:e,eventCategory:i,eventTags:r,selector:n})}function u(){var e=f({activeViewStates:[],visitorProfile:X.getVisitorProfile(),layerStates:K.getLayerStates()});return I.extend(e,{eventTags:{}})}function c(e,t,n){var i=q.get(t.layerId),r=null,a=null,o=null;if(t.experimentId){var s=I.find(i.experiments,{id:t.experimentId});if(s&&(r=s.name||null,o=s.integrationSettings,t.variationId)){var u=I.find(s.variations,{id:t.variationId});u&&(a=u.name||null)}}var c=U.getReferrer()||N.getReferrer(),l={sessionId:j.getSessionId(),decisionTicketAudienceIds:n.audienceIds,visitorId:Z.getRandomId(),visitorUUID:Z.getUUID(),decisionId:e,activationId:z.getActivationId(),namespace:z.getNamespace(),timestamp:R.now(),pageId:n.pageId||null,variationId:t.variationId,variationName:a,experimentId:t.experimentId,experimentName:r,layerId:t.layerId,layerName:i.name,layerPolicy:i.policy,accountId:z.getAccountId(),projectId:z.getProjectId(),revision:String(z.getRevision()),clientVersion:O.VERSION,referrer:c,integrationStringVersion:i.integrationStringVersion,integrationSettings:I.extend({},i.integrationSettings,o)};return l}function l(e,t,n){var i=I.extend({},e,{isLayerHoldback:t,clientEngine:O.ENGINE,anonymizeIP:I.isNull(z.getAnonymizeIP())?void 0:z.getAnonymizeIP(),userFeatures:h(n)});return i}function d(e,t,n,i){return{decisionId:e,timestamp:R.now(),revision:z.getRevision(),clientEngine:O.ENGINE,clientVersion:O.VERSION,projectId:z.getProjectId(),accountId:z.getAccountId(),activationId:z.getActivationId(),sessionId:j.getSessionId(),visitorId:Z.getRandomId(),visitorUUID:Z.getUUID(),decision:t,decisionTicket:n,userFeatures:h(i)}}function f(e){var t={eventId:A.generate(),timestamp:R.now(),revision:z.getRevision(),clientEngine:O.ENGINE,clientVersion:O.VERSION,projectId:z.getProjectId(),accountId:z.getAccountId(),activationId:z.getActivationId(),sessionId:j.getSessionId(),isGlobalHoldback:z.isGlobalHoldback(),visitorId:Z.getRandomId(),visitorUUID:Z.getUUID(),activeViewStates:e.activeViewStates,layerStates:e.layerStates,userFeatures:h(e.visitorProfile)};return t}function p(e){var t=H.getViewState(e),n=t&&t.isActive?t.metadata:{};return n}function g(e){var t={};return e.pageId?p(e.pageId):t}function h(e){var t=Y.getAllPlugins(L.PluginTypes.visitorProfileProviders),n=I.filter(t,{shouldTrack:!0}),i={id:null,type:null,name:"",value:null,shouldIndex:!0};return I.reduce(n,(function(t,n){try{var r=n.provides,a=e[r],o=[];if(!I.isUndefined(a)){I.isObject(a)?o=I.map(a,(function(e,t){var n=I.isObject(e)?e:{value:e};return I.extend({},{type:r,name:t},n)})):o.push({type:r,value:a});var s=I(o).map((function(e){return I.pick(I.extend({},i,e),I.keys(i))})).filter((function(e){return!!e.value})).value();t=t.concat(s)}}catch(e){w.warn("Error evaluating userFeature against visitorProfile:",e)}return t}),[])}function v(e,t,n){var i=_(e,n);w.debug("Found "+i.length+" analytics integrations defining a "+e+" hook"),w.debug("Calling each with data: ",t),I.each(i,(function(e){try{w.debug("Calling plugin: "+e.name),e.hookFn(t),w.debug("Called plugin: "+e.name)}catch(e){w.error(e)}}))}function _(e,t){var n=[];return I.each(Y.getAllPlugins(L.PluginTypes.analyticsTrackers),(function(i,r){if(i[e]&&(!t||!i[t]))try{n.push({name:r,hookFn:D.evaluate(i[e])})}catch(e){w.error(e)}})),n}function E(e,t,n){var i=m(e,t);w.debug("Found "+i.length+" analytics integrations  defining a trackLayerDecision "+e+" timing of "+t.join("|")),w.debug("Calling each with data: ",n),I.each(i,(function(e){try{w.debug("Calling plugin: "+e.name),e.hookFn(n),w.debug("Called plugin: "+e.name)}catch(e){w.error(e)}}))}function m(e,t){var n=[];return I.each(Y.getAllPlugins(L.PluginTypes.analyticsTrackers),(function(i,r){I.includes(t,i[e])&&n.push({name:r,hookFn:i.trackLayerDecision})})),n}var I=n(2),y=n(8),S=n(15),T=n(75),A=n(5),w=n(11),D=n(17),b=n(6),R=n(14),O=n(99),N=n(66),P=n(76),C=n(100),L=n(12),V=n(101),k=n(63),F=n(102),x=n(103),M=n(77).Promise,U=n(104),G=n(105),B=n(106),z=(n(74),D.get("stores/global")),j=D.get("stores/session"),H=D.get("stores/view"),Y=D.get("stores/plugins"),K=D.get("stores/layer"),q=D.get("stores/layer_data"),W=D.get("stores/observed_redirect"),Q=D.get("stores/pending_redirect"),X=D.get("stores/visitor"),$=D.get("stores/directive"),J=D.get("stores/event_data"),Z=D.get("stores/visitor_id"),ee="COOKIE",te=!0,ne=1e3;t.trackClientActivation=function(){if($.shouldSendTrackingData()){var e=u();return v("onClientActivation",e),e}},t.trackCustomEvent=function(e,t){t=t||{};var n=a(e,t),i=J.getByApiName(e),r={name:e,type:F.CUSTOM,category:n.eventCategory,tags:I.omit(n.eventTags,"revenue")};if(I.isUndefined(t.revenue)||(r.revenue=t.revenue),T.emitAnalyticsEvent({name:i?i.name||i.apiName:e,apiName:i?i.apiName:void 0,type:F.CUSTOM,tags:I.omit(n.eventTags,"revenue"),category:n.eventCategory,metrics:r.revenue?{revenue:r.revenue}:{}},!$.shouldSendTrackingData()),$.shouldSendTrackingData())return b.addEvent(r),v("onCustomEvent",n),n},t.trackDecisionEvent=function(e,t){var n=q.get(e.layerId),a=x.description(n);if(!$.shouldSendTrackingData())return void w.log("Analytics / Not tracking decision for Campaign",a);var o=A.generate();y.dispatch(S.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t.pageId,decisionId:o});var s=X.getVisitorProfile();ee?(i(o,e,t,s,ee),r(o,e,t,s,!0)):r(o,e,t,s,!1)},t.trackPostRedirectDecisionEvent=function(){if(!$.shouldSendTrackingData())return M.resolve();if(W.hasTracked())return M.resolve();var e=W.get();if(!e)return M.resolve();var t=X.getVisitorProfile(),n=l(e,!1,t),i=V.TrackLayerDecisionTimingFlags.postRedirectPolicy;if(n.timing=i,E(i,[V.PostRedirectPolicies.TRACK_IMMEDIATELY],n),te){var r=new M(function(e,t){var n=P.on({filter:{type:C.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){e(),P.off(n)}})}),a=B.makeTimeoutPromise(ne);return M.race([r,a]).then((function(){w.log("Calling trackers after successful sync")}),(function(e){w.warn("Calling trackers after failed sync:",e)})).then((function(){t=X.getVisitorProfile(),n=l(e,!1,t),n.timing=V.TrackLayerDecisionTimingFlags.postRedirectPolicy,E(V.TrackLayerDecisionTimingFlags.postRedirectPolicy,[V.PostRedirectPolicies.TRACK_AFTER_SYNC],n),y.dispatch(S.REGISTER_TRACKED_REDIRECT_DATA)}))["catch"]((function(e){w.error("Error when calling trackers after sync:",e)}))}return E(V.TrackLayerDecisionTimingFlags.postRedirectPolicy,[V.PostRedirectPolicies.TRACK_AFTER_SYNC],n),y.dispatch(S.REGISTER_TRACKED_REDIRECT_DATA),M.resolve()},t.trackClickEvent=function(e){var t=s(e),n={name:e.apiName,type:e.eventType,category:t.eventCategory,tags:t.eventTags};if(T.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e?e.apiName:void 0,type:e.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!$.shouldSendTrackingData()),$.shouldSendTrackingData())return b.addEvent(n),v("onClickEvent",t),t},t.trackViewActivation=function(e){var t=H.getViewState(e.id);if(!t.isActive)return void w.debug("Inactive view passed to `trackViewActivation`");var n=o(e,t),i={name:e.apiName,type:F.PAGEVIEW,category:n.viewCategory,tags:n.eventTags};return T.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e.apiName,type:F.PAGEVIEW,category:n.viewCategory,tags:n.eventTags,metrics:{}},!$.shouldSendTrackingData()),$.shouldSendTrackingData()?(b.addEvent(i),y.dispatch(S.TRACK_VIEW_ACTIVATED_EVENT,{pageId:e.id,eventData:n}),v("onPageActivated",n),n):void 0}}),(function(e,t,n){t.VERSION="0.72.0",t.ENGINE="js"}),(function(e,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}}),(function(e,t,n){var i=n(13);t.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=i({COOKIE:null})}),(function(e,t){e.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}}),(function(e,t,n){var i=n(2),r=n(17),a=n(8),o=n(14),s=n(15),u=r.get("stores/global"),c=r.get("stores/session"),l=2e3;t.recordLayerDecision=function(e,t,n){return a.dispatch(s.RECORD_LAYER_DECISION,{layerId:e,decision:n,decisionTicket:t,sessionId:c.getSessionId(),activationId:u.getActivationId(),timestamp:o.now(),revision:u.getRevision(),namespace:u.getNamespace(),pageId:t.pageId}),n},t.relatedAudienceIds=function(e){var t={},n=["and","or","not"];return i.each(e.experiments,(function(e){i.each(i.flattenDeep(e.audienceIds),(function(e){i.includes(n,e)||(t[e]=!0)}))})),i.keys(t)},t.getActivationTimeout=function(e){var t=e.activation;return t&&null!==t.timeout&&void 0!==t.timeout?t.timeout:l},t.description=function(e){return(e.name?'"'+e.name+'" ':"")+"("+e.id+")"}}),(function(e,t,n){var i=n(2),r=n(17),a=r.get("stores/global_state"),o=r.get("stores/layer_data"),s=r.get("stores/observed_redirect");t.getReferrer=function(){var e=s.get();return e?e.referrer:i.isString(a.getEffectiveReferrer())?a.getEffectiveReferrer():null},t.getExperimentAndVariation=function(){var e=s.get();if(e&&i.isString(e.variationId))return i.pick(e,["experimentId","variationId"]);if(i.isString(a.getEffectiveVariationId())){var t=a.getEffectiveVariationId(),n=o.getExperimentByVariationId(t),r=n?n.id:null;return{experimentId:r,variationId:t}}return null}}),(function(e,t,n){function i(e){e=l.omit(e,["visitorId","visitorUUID"]);try{var t=r(e)}catch(e){return p.error("Relay / Error computing redirect relay cookie: ",e),void h.emitError(e)}p.debug("Relay / Setting redirect relay cookie:",t);try{g.set(v.COOKIES.REDIRECT,t,{maxAge:5,encodeValue:!1})}catch(e){p.error("Relay / Failed to set redirect relay cookie",e),h.emitError(e)}}function r(e){var t=[],n=l.reduce(e,(function(e,n,i){var r=S[i];return r?(r.isMulti?l.forEach(n,(function(t,n){t=r.valueToValueString?r.valueToValueString(t,n):String(t),l.isNull(t)||(t=(r.encodeValueString||encodeURIComponent)(t),e.push(encodeURIComponent(r.relayName+I+n)+"="+t))})):l.isNull(n)||(n=(r.valueToValueString||String)(n),n=(r.encodeValueString||encodeURIComponent)(n),e.push(r.relayName+"="+n)),e):(t.push(i),e)}),[]);if(t.length)throw new Error("Relay / Don't know how to relay some fields:",t);return n.sort(),n.join("&")}function a(){var e=g.get(v.COOKIES.REDIRECT,!1);if(e){p.log("Relay / Found redirect cookie:",e);var t=o(e),n=g.get(v.COOKIES.VISITOR_ID);t.visitorId=l.isString(n)?n:null;var i=g.get(v.COOKIES.VISITOR_UUID);return t.visitorUUID=l.isString(i)?i:null,t}}function o(e){var t={},n=e.split("&");return l.forEach(n,(function(e){var n=e.split("=");if(2!==n.length)return void p.warn("Relay / Skipping invalid segment:",e);var i=g.safeDecodeURIComponent(n[0]),r=T[i];if(!r&&(r=l.find(y,(function(e){return e.isMulti&&0===i.indexOf(e.relayName+I)})),!r))return void p.warn("Relay / Skipping segment with unknown field identifier:",e,i);var a=n[1];try{if(r.isMulti){t[r.name]=t[r.name]||{};var o=i.substring(r.relayName.length+I.length);a=(r.decodeValueString||g.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a,o),t[r.name][o]=a}else a=(r.decodeValueString||g.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a),t[r.name]=a}catch(t){return p.warn("Relay / Skipping segment due to decode or parse error:",e,t),void h.emitError(t)}})),t}function s(e,t){var n=null;if(e){var i=m.getPlugin(v.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.serializeSettings))try{n=i.serializeSettings(e)}catch(e){p.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}}return n}function u(e,t){var n=null,i=m.getPlugin(v.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.deserializeSettings))try{n=i.deserializeSettings(e)}catch(e){p.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}return n}function c(e){var t=e.pageId||void 0;d.dispatch(f.RECORD_LAYER_DECISION,{layerId:e.layerId,decision:{layerId:e.layerId,experimentId:e.experimentId,variationId:e.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:e.decisionTicketAudienceIds,bucketingId:e.visitorUUID||e.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:t,activationId:e.activationId},sessionId:e.sessionId,activationId:e.activationId,timestamp:e.timestamp,revision:e.revision,namespace:e.namespace,pageId:t}),d.dispatch(f.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t,decisionId:e.decisionId}),d.dispatch(f.ACTION_EXECUTED,{sessionId:e.sessionId,layerId:e.layerId,pageId:e.pageId,timestamp:e.timestamp,activationId:e.activationId})}var l=n(2),d=n(8),f=n(15),p=n(11),g=n(65),h=n(75),v=n(12),_=n(101),E=n(17),m=E.get("stores/plugins"),I=".",y=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(e){return l.map(e,encodeURIComponent).join(",")},encodeValueString:l.identity,decodeValueString:l.identity,valueFromValueString:function(e){return l.map(e.split(","),g.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"visitorUUID",relayName:"uuid",isNullable:!0},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:s,valueFromValueString:u,isNullable:!0}],S={},T={};l.forEach(y,(function(e){S[e.name]=e,T[e.relayName]=e})),t.persist=function(e,t){t===_.RedirectRelayMedia.COOKIE?i(e):p.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(){var e;if(e||(e=a()),e){var t=[];return l.forEach(y,(function(n){(l.isNull(e[n.name])||l.isUndefined(e[n.name]))&&(n.isNullable?e[n.name]=null:(delete e[n.name],t.push(n.name)))})),t.length?void p.error("Relay / Observed redirect data with missing fields:",t):(d.dispatch(f.LOAD_REDIRECT_DATA,e),d.dispatch(f.ADD_CLEANUP_FN,{lifecycle:v.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){c(e)}}),e)}}}),(function(e,t,n){var i=n(77).Promise;t.makeTimeoutPromise=function(e){return new i(function(t,n){setTimeout((function(){n(new Error("Timed out after "+e+" ms"))}),e)})}}),(function(e,t,n){function i(e){var t=["type","selector","attributes","value"];return r.extend({},e,{changeSet:r.map(e.changeSet,(function(e){return r.pick(e,t)}))})}var r=n(2),a=n(17),o=a.get("stores/audience_data"),s=n(76),u=n(100),c=n(108);t.emitLayerDecided=function(e){var t=e.decisionTicket?e.decisionTicket.audienceIds:[],n=r.map(t,(function(e){return{id:e,name:o.get(e).name}})),i={type:u.TYPES.LIFECYCLE,name:"layerDecided",data:r.extend(e,{audiences:n})},a=c.translateLayerEventToCampaignEvent(i);s.emit(i),s.emit(a)},t.emitViewActivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"viewActivated",data:e},n=c.translateViewActivatedToPageActivated(t);s.emit(t),s.emit(n)},t.emitPageDeactivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"pageDeactivated",data:e};s.emit(t)},t.emitActivateEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),s.emit(e)},t.emitOriginsSyncedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"originsSynced"};s.emit(e)},t.emitActionAppliedEvent=function(e){var t={type:u.TYPES.ACTION,name:"applied",data:{type:e.type,changes:i(e).changeSet,campaignId:e.layerId,pageId:e.pageId,experimentId:e.experimentId,variationId:e.variationId}};s.emit(t)},t.emitActionsForDecisionAppliedEvent=function(e,t){var n={type:u.TYPES.ACTION,name:"appliedAllForDecision",data:{actions:r.map(t,i),decision:e}};s.emit(n)},t.emitSendEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"sendEvents"};s.emit(e)},t.emitHoldEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"holdEvents"};s.emit(e)}}),(function(e,t,n){var i=n(2);t.translateDecisionToCampaignDecision=function(e){return r(i.cloneDeep(e),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(e){var t={};return t.campaign=e.data.layer,t.decisionTicket=e.data.decisionTicket,t.decision=this.translateDecisionToCampaignDecision(e.data.decision),t.audiences=e.data.audiences,{type:"lifecycle",name:"campaignDecided",data:t}},t.translateViewActivatedToPageActivated=function(e){return{type:"lifecycle",name:"pageActivated",data:{page:e.data.view}}};var r=function(e,t){var n=i.omit(e,i.keys(t));return i.each(t,(function(t,i){n[t]=e[i]})),n}}),(function(e,t,n){function i(e,t){var n={};return o.each(e,(function(e){if(o.isArray(e))o.extend(n,i(e,t));else if(o.isObject(e)){var r=t[e.type];r&&o.each(r.fieldsNeeded,(function(e){n[e]=!0}))}})),n}function r(e,t){return function(n){var i=n.type,r=t[i];if(!r)throw new Error("Audience / No matcher found for type="+i);if(r.fieldsNeeded)for(var a,s,c=0;c<r.fieldsNeeded.length;c++)if(a=r.fieldsNeeded[c],s=e[a],o.isUndefined(s))return void u.debug("Audience / Required field",a,"for type",i,"has no value");u.debug("Matching condition:",n,"to values:",e);var l=r.match(e,n);if(!o.isUndefined(l))return!!l}}function a(e){return e.name?e.name+" ("+e.id+")":e.id}var o=n(2),s=n(110),u=n(11);t.isInAudience=function(e,t,n){var i=r(e,n);u.groupCollapsed("Checking audience",t.name,t.id,t),u.debug("Visitor Profile:",e);var o;try{var c=s.evaluate(t.conditions,i)}catch(e){o=e,c=!1}return u.groupEnd(),o&&u.error("Audience / Error evaluating audience",a(t),":",o),u.log("Is "+(c?"in":"NOT in")+" audience:",a(t)),c},t.requiredAudienceFields=function(e,t){return o.keys(i(e.conditions,t))}}),(function(e,t,n){function i(e,t){for(var n,i,r=0;r<e.length;r++){if(n=o(e[r],t),n===!1)return!1;s.isUndefined(n)&&(i=!0)}if(!i)return!0}function r(e,t){for(var n,i=!1,r=0;r<e.length;r++){if(n=o(e[r],t),n===!0)return!0;s.isUndefined(n)&&(i=!0)}if(!i)return!1}function a(e,t){if(1!==e.length)return!1;var n=o(e[0],t);return s.isUndefined(n)?void 0:!n}function o(e,t){var n;if(s.isArray(e)){var i,r;e[0]in d?(i=e[0],r=e.slice(1)):(i=l.OR,r=e),u.groupCollapsed('Condition / Applying operator "'+i+'" with args',c.stringify(r));try{n=d[i](r,t),u.debug("Condition / Result:",n)}finally{u.groupEnd()}return n}return n=t(e),u.debug("Condition / Evaluated:",c.stringify(e),":",n),n}var s=n(2),u=n(11),c=n(16),l={AND:"and",OR:"or",NOT:"not"},d={};d[l.AND]=i,d[l.OR]=r,d[l.NOT]=a,e.exports={evaluate:o}}),(function(e,t,n){function i(e,t){d.debug("Decision / Deciding layer for group: ",_.description(e));var n,i,r=t.preferredLayerId,a=!!r;if(a)d.debug("Decision / Using preferredLayerMap to select layer for group:",_.description(e)),n=r;else try{n=u.chooseWeightedCandidate(t.bucketingId,e.id,e.weightDistributions),n&&"None"!==n||(i='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(e){i="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(i)return{layerId:null,reason:i};if(!s.find(e.weightDistributions,{entityId:n})){var o=a?" sticky-":" non-sticky ",c="Visitor was"+o+"bucketed into a campaign ("+n+") which is not in the group";if(!a)throw new h(c);return{layerId:null,reason:c}}return{layerId:n}}function r(e,t){for(var n=0;n<e.experiments.length;n++)for(var i=0;i<e.experiments[n].variations.length;i++)if(t.indexOf(e.experiments[n].variations[i].id)>-1)return{experimentId:e.experiments[n].id,variationId:e.experiments[n].variations[i].id};return null}function a(e){var t=m.getPlugin(l.PluginTypes.deciders,e);if(s.isEmpty(t))throw new Error("No deciders found for policy: "+e);return t}function o(e,t){var n=m.getAllPlugins(l.PluginTypes.audienceMatchers);return s.reduce(t,(function(t,i){return g.isInAudience(e,i,n)&&t.push(i.id),t}),[])}var s=n(2),u=n(112),c=n(113),l=n(12),d=n(11),f=n(35),p=n(75),g=n(109),h=n(114).DecisionError,v=n(103),_=n(115),E=n(17),m=E.get("stores/plugins"),I=E.get("stores/global"),y=E.get("stores/layer_data");t.isPageIdRelevant=function(e){if(!e)return!1;var t=a(e.policy);return s.isFunction(t.includePageIdInDecisionTicket)?t.includePageIdInDecisionTicket(e):t.includePageIdInDecisionTicket===!0},t.createTicket=function(e){var t=s.pick(e,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return s.extend(t,{audienceIds:o(e.visitorProfile,e.audiences),activationId:I.getActivationId()}),t},t.decideGlobal=function(e){var t=u.isHoldback(e.bucketingId,{id:null,holdback:e.globalHoldback});return{isGlobalHoldback:t}},t.decideGroup=i,t.decideLayer=function(e,t){d.debug("Deciding: ",e,t);var n,i,r=a(e.policy),o={layerId:e.id,experimentId:null,variationId:null,isLayerHoldback:u.isHoldback(t.bucketingId,e)};if(s.isEmpty(e.experiments))throw new h("No experiments in layer.");try{if(r.decideLayer){d.debug("Decision / Using decider's custom decideLayer.");var l=r.decideLayer(e,t);n=l.experiment,i=l.variation}else d.debug("Decision / Using default decideLayer behavior."),n=r.selectExperiment(e,t.audienceIds,t.bucketingId),i=c.selectVariation(n,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(e){e instanceof h?o.reason=e.message:o.error=e}return o.experimentId=n?n.id:null,o.variationId=i?i.id:null,o.error&&(o.error.name="DecisionEngineError",p.emitError(o.error)),o},t.getDummyLayerDecision=function(e,t){var n,i=r(e,t);return i?(d.log("Decision / Applying force variation:",i.variationId,"to Campaign",v.description(e)),n={layerId:e.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(d.log("No variation matches ids:",t,"in Campaign",v.description(e)),n={layerId:e.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),n},t.isInCohort=function(e){if(!e.experimentId||!e.variationId)return!1;var t=y.get(e.layerId);return!(f.isSingleExperimentPolicy(t.policy)&&e.isLayerHoldback)}}),(function(e,t,n){var i=n(55),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(e,t,n){var a=i.hashToInt(e+t,n,r);return a},t.isHoldback=function(e,n){return t.bucketingNumber(e,n.id,i.Seed.IGNORING)<(n.holdback||0)},t.chooseWeightedCandidate=function(e,n,r){for(var a=t.bucketingNumber(e,n,i.Seed.BUCKETING),o=0;o<r.length;o++)if(r[o].endOfRange>a)return r[o].entityId;throw new Error("Unable to choose candidate")}}),(function(e,t,n){var i=n(2),r=n(112),a=n(114).DecisionError,o=n(110),s=n(11),u="impression";t.isValidExperiment=function(e,t){var n,r=i.partial(i.includes,e);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",t,e),n=!t.audienceIds||o.evaluate(t.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",t,"is valid?",n),n},t.selectVariation=function(e,t,n,o,c){if(!e.variations||0===e.variations.length)throw new a('No variations in selected experiment "'+e.id+'"');if(!e.weightDistributions&&e.variations.length>1)throw new a('On selected experiment "'+e.id+'", weightDistributions must be defined if # variations > 1');var l;if(e.bucketingStrategy&&e.bucketingStrategy===u)if(1===e.variations.length)l=e.variations[0].id;else{var d=o;l=r.chooseWeightedCandidate(n+d,e.id,e.weightDistributions)}else if(c&&c[e.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",e.id);var f=c[e.id];if(!i.find(e.variations,{id:f}))return s.debug("Decision / Preferred variation:",f,"not found on experiment:",e.id,". Visitor not bucketed."),null;l=f}else l=1===e.variations.length?e.variations[0].id:r.chooseWeightedCandidate(n,e.id,e.weightDistributions);var p=i.find(e.variations,{id:l});if(p)return s.debug("Decision / Selected variation:",p),p;throw new a('Unable to find selected variation: "'+l+'".')},t.getExperimentById=function(e,t){var n=i.find(e.experiments,{id:t});if(n)return n;throw new a("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(e,t){return s.debug("Decision / Checking variation:",e,"for actions on pageId:",t),!!i.find(e.actions,(function(e){return e.pageId===t&&!i.isEmpty(e.changes)}))}}),(function(e,t){function n(e){this.message=e}n.prototype=new Error,t.DecisionError=n}),(function(e,t,n){function i(e){return r.map(e.weightDistributions,"entityId")}var r=n(2);t.description=function(e){var t=!!e.name,n=t?'"'+e.name+'" ':"",r=i(e).join(", ");return n+"(id "+e.id+", campaigns: "+r+")"}}),(function(module,exports,__webpack_require__){var createError=__webpack_require__(69),Logger=__webpack_require__(11),di=__webpack_require__(17),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");
exports.apply=function(e,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return e.apply(void 0,t)}catch(n){throw Logger.warn("Error applying function",e,"with args:",t,n),new ExecError(n)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}}),(function(e,t,n){var i=n(2),r=n(75),a=n(12),o=n(16),s=n(72).LocalStorage,u=n(11),c=n(83),l=n(17),d=l.get("stores/pending_events"),f=a.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var e=d.getEventsString();s.setItem(f,e),n(81).setItem(f,e)}catch(e){u.warn("PendingEvents / Unable to set localStorage key, error was: ",e),r.emitInternalError(e)}},t.getPendingEvents=function(){try{return o.parse(s.getItem(f))}catch(e){return null}},t.retryPendingEvents=function(e){i.forOwn(e,(function(e,t){c.retryableRequest(e.data,t,e.retryCount)})),i.isEmpty(e)||u.log("Retried pending events: ",e)}}),(function(e,t,n){var i=n(2),r=n(76),a=n(8),o=n(17),s=n(15),u=n(12);t.registerApiModule=function(e,t){i.isArray(t)&&(t=o.evaluate(t)),a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.apiModules,name:e,plugin:t})},t.registerDependency=function(e,t){var n=o.get(e);n||o.register(e,t)},t.registerVisitorProfileProvider=function(e){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.visitorProfileProviders,name:e.provides,plugin:e})},t.registerViewProvider=function(e){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.viewProviders,name:e.provides,plugin:e})},t.registerAudienceMatcher=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.audienceMatchers,name:e,plugin:t})},t.registerViewMatcher=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.viewMatchers,name:e,plugin:t})},t.registerAnalyticsTracker=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.analyticsTrackers,name:e,plugin:t})},t.registerViewTagLocator=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.viewTagLocators,name:e,plugin:t})},t.registerAudiencePlugin=function(e){e.dependencies&&i.each(e.dependencies,(function(e,n){t.registerDependency(n,e)}));var n,r="vendor."+e.vendor;n=i.isString(e.provider)?o.get(e.provider)(e.vendor):i.isFunction(e.provider)?e.provider(e.vendor):i.cloneDeep(e.provider),t.registerVisitorProfileProvider(i.extend(n,{provides:r}));var a;a=i.isString(e.matcher)?o.get(e.matcher):e.matcher;var s={fieldsNeeded:[r],match:function(e,t){return a(e[r],t)}};t.registerAudienceMatcher(r,s)},t.registerWidget=function(e){i.isArray(e)&&(e=o.evaluate(e));var t=r.on({filter:{type:"showWidget",name:e.widgetId},handler:e.showFn}),n=r.on({filter:{type:"hideWidget",name:e.widgetId},handler:e.hideFn});return{showToken:t,hideToken:n}},t.registerChangeApplier=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.changeAppliers,name:e,plugin:t})},t.registerDecider=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.deciders,name:e,plugin:t})},t.registerEventImplementation=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.eventImplementations,name:e,plugin:t})}}),(function(e,t,n){var i=n(2),r=n(77).Promise,a=100,o=50;t.pollFor=function(e,t,n){var s,u;return i.isFunction(n)?u=n:(s=n||a,u=function(){return s--,s<-1}),t=t||o,new r(function(n,i){!(function r(){var a;if(!u()){try{var o=e();if(o)return n(o)}catch(e){a=e}return setTimeout(r,t)}i(a||new Error("Poll timed out"))})()})}}),(function(e,t,n){var i=n(77).Promise,r=n(2);t.firstToResolve=function(e){return new i(function(t){r.each(e,(function(e){i.resolve(e).then(t,(function(){}))}))})}}),(function(e,t,n){function i(e,t){r.forEach(e,(function(e){if(e.eventType!==s.CUSTOM){var n=h.getPlugin(o.PluginTypes.eventImplementations,e.eventType);n?t?n.attach(e):n.detach(e):l.warn("No implementation found for event type:",e.eventType,"needed for event:",e)}}))}var r=n(2),a=n(17),o=n(12),s=n(102),u=n(8),c=n(14),l=n(11),d=n(15),f=n(110),p=n(107),g=n(122),h=a.get("stores/plugins"),v=a.get("stores/view"),_=a.get("stores/view_data"),E=a.get("stores/event_data");t.parseViewTags=function(e){var n=t.evaluateViewTags(e);t.setParsedViewTags(e.id,n)},t.updateAllViewTags=function(){var e=v.getActiveViewStates();r.each(e,(function(e){var n=_.get(e.id);t.parseViewTags(n)}))},t.evaluateViewTags=function(e){if(!e.tags)return{};var t=r.reduce(e.tags,(function(e,t){try{e[t.apiName]=g.getTagValue(t)}catch(e){e instanceof g.Error?l.warn("Page / Ignoring unparseable tag",t,e):l.error(e)}return e}),{});return t},t.createViewTicket=function(){var e={};return r.each(h.getAllPlugins(o.PluginTypes.viewProviders),(function(t){e[t.provides]=a.evaluate(t.getter)})),e},t.registerViews=function(e){u.dispatch(d.REGISTER_VIEWS,{views:e})},t.activate=function(e,n){var r=v.getViewState(e.id);if(r.isActive)return void l.log("Not activating Page, already active ",t.description(e));var a=t.createViewTicket();if(!t.hasValidStaticConditions(e,a))return void l.log("Page / Failed to match page conditions for "+t.description(e),e.staticConditions);t.setViewActiveState(e,!0),l.log("Activated Page",t.description(e)),t.parseViewTags(e),n&&t.setUserSuppliedViewTags(e.id,n),p.emitViewActivated({view:e,metadata:n});var o=E.getByPageId(e.id);i(o,!0)},t.deactivate=function(e){var n=v.getViewState(e.id);if(!n.isActive)return void l.log("Not deactivating Page, already inactive ",t.description(e));t.setViewActiveState(e,!1),l.log("Deactivated Page",t.description(e)),p.emitPageDeactivated({page:e});var r=E.getByPageId(e.id);i(r,!1)},t.setViewActiveState=function(e,t){u.dispatch(d.SET_VIEW_ACTIVE_STATE,{view:e,timestamp:c.now(),isActive:t})},t.setGlobalTags=function(e){u.dispatch(d.SET_GLOBAL_TAGS,e)},t.setParsedViewTags=function(e,t){u.dispatch(d.UPDATE_PARSED_VIEW_METADATA,{pageId:e,metadata:t})},t.setUserSuppliedViewTags=function(e,t){u.dispatch(d.UPDATE_USER_SUPPLIED_METADATA,{pageId:e,metadata:t})},t.hasValidStaticConditions=function(e,t){if(r.isEmpty(e.staticConditions))return!0;var n=h.getAllPlugins(o.PluginTypes.viewMatchers);l.groupCollapsed("Page / Evaluating staticConditions:",e.staticConditions),l.debug("Matching to current value:",t);var i=f.evaluate(e.staticConditions,(function(e){var i=e.type,r=n[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r.match(t,e)}));return l.groupEnd(),i},t.description=function(e){return'"'+e.name+'" ('+e.id+")"}}),(function(e,t,n){var i=n(12).PluginTypes,r=n(17),a=r.get("stores/plugins");t.getTagValue=function(e){var n=a.getPlugin(i.viewTagLocators,e.locatorType);if(!n)throw new t.Error("No locator registered for tag locatorType: "+e.locatorType);return n(e)},t.enums=n(123),t.Error=n(124).Error}),(function(e,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}}),(function(e,t,n){var i=n(68).create;t.Error=i("TagError")}),(function(e,t,n){var i=n(2),r=n(11),a=n(126),o=n(17),s=o.get("stores/plugins"),u=n(12),c=n(15),l=n(8),d=[n(135),n(136),n(137)],f=["disable","load","optOut"];t.push=function(e,t){var n,a,o,s;if(!i.isArray(e)&&i.isObject(e))s=i.isUndefined(e.version)?1:e.version,n=e.type,o=[e];else if(i.isArray(e))s=0,n=e[0],o=e.slice(1);else{if(!i.isString(e))return r.warn("API / Ignoring non-array/object/string argument:",e),!1;s=0,n=e,o=[]}if(d[s]&&(a=d[s][n]),t&&f.indexOf(n)===-1)return r.debug("API / Ignoring non high priority function:",n,o),!1;if(!a)return r.warn('API / No function found for "'+n+'" (v'+s+") with arguments:",o),!1;r.log('API / Executing: "'+n,'" with arguments:',o);try{a.apply(null,o),l.dispatch(c.RECORD_API_USAGE,{methodName:s?"v"+s+"."+n:n})}catch(e){r.error(e)}return!0},t.get=function(e){var t=a[e];return t?i.isArray(t)&&(t=o.evaluate(t)):t=s.getPlugin(u.PluginTypes.apiModules,e),t?(l.dispatch(c.RECORD_API_USAGE,{methodName:"get."+e}),t):void r.warn('Module "'+e+'" not found.')}}),(function(e,t,n){function i(e,t,n,i){var r=e.getLayerState(i),a=t.get(i),s=n.get();if(!r||!a)return s?{layer:{name:s.layerName,id:s.layerId,policy:s.layerPolicy,integrationStringVersion:s.integrationStringVersion},experiment:{name:s.experimentName,id:s.experimentId},variation:{name:s.variationName,id:s.variationId},isLayerHoldback:!1}:null;if(c.isSingleExperimentPolicy(a.policy)&&r.decision.isLayerHoldback)return null;var u=r.decision.experimentId,l=r.decision.variationId;if(!u||!l)return null;var d,f;return(d=o.find(a.experiments,{id:u}))?(f=o.find(d.variations,{id:l}),f?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:d.name,id:d.id},variation:{name:f.name,id:f.id},isLayerHoldback:r.decision.isLayerHoldback}:null):null}function r(e,t,n,i,r,s){var u=[],d=e.getLayerStates();s.onlySingleExperiments&&(d=o.filter(d,(function(e){var n=t.get(e.layerId);return n&&c.isSingleExperimentPolicy(n.policy)})));var f=o.map(d,(function(e){var t=!!e.decision.variationId,n=e.decisionActivationId&&e.decisionActivationId===i.getActivationId(),r=l.getExperimentAndVariation(),a=r?r.variationId:null,s=t&&e.decision.variationId===a;return o.extend(e,{isActive:t&&n||s,visitorRedirected:s})})),p=r?o.filter(f,r):f;return o.each(p,(function(e){var i=a(e,t,n,s.includeOfferConsistency);i&&u.push(i)})),u}function a(e,t,n,i){var r,a,s=e.layerId,u=t.get(s)||{},c=o.map(u.experiments,(function(e){return o.pick(e,["id","name"])}));if(i||!u.decisionMetadata||!u.decisionMetadata.offerConsistency){var l={id:s,campaignName:u.name||null,experiment:null,allExperiments:c,variation:null,reason:e.decision.reason,isActive:e.isActive,visitorRedirected:e.visitorRedirected,isInCampaignHoldback:e.decision.isLayerHoldback};e.decision&&e.decision.experimentId&&(r=o.find(u.experiments,{id:e.decision.experimentId})),r&&(l.experiment=o.pick(r,["id","name","campaignName"])),r&&e.decision.variationId&&(a=o.find(r.variations,{id:e.decision.variationId})),a&&(l.variation=o.pick(a,["id","name"]));var d=o.map(e.decisionTicket.audienceIds,(function(e){return o.pick(n.get(e),["id","name"])}));return l.audiences=d,u.decisionMetadata&&u.decisionMetadata.offerConsistency&&(l.pageId=e.pageId),l}}var o=n(2),s=n(99),u=n(127),c=n(35),l=n(104);t.data=["stores/audience_data","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/global",function(e,t,n,i,r,a){var o={audiences:e.getAudiencesMap(),events:t.getEventsMap(),campaigns:n.getCampaignsMap(),pages:i.getPagesMap(),experiments:n.getExperimentsMap(),variations:n.getVariationsMap(),projectId:a.getProjectId(),snippetId:a.getSnippetId(),accountId:a.getAccountId(),dcpServiceId:a.getDCPServiceId(),revision:a.getRevision(),clientVersion:s.VERSION};return o.groups=r.getGroupsMap(),o}],t.session=["stores/session",function(e){return e.getState()}],t.visitor=["stores/visitor",function(e){return o.cloneDeep(e.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(e){return{randomId:e.getRandomId(),UUID:e.getUUID()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(e,t,n,a,s,d,f){return{getCampaignStates:function(i){var a={},s=r(n,t,e,d,i,{includeOfferConsistency:!1});return o.each(s,(function(e){a[e.id]=e})),a},getExperimentStates:function(i){var a=r(n,t,e,d,i,{includeOfferConsistency:!1,onlySingleExperiments:!0}),s=["audiences","variation","reason","visitorRedirected","isActive"],u=o.reduce(a,(function(e,t){var n=t.allExperiments[0];return e[n.id]=o.extend({},o.pick(t,s),{id:n.id,experimentName:n.name,isInExperimentHoldback:t.isInCampaignHoldback}),e}),{});return u},getCampaignStateLists:function(i){var a={},s=r(n,t,e,d,i,{includeOfferConsistency:!0});return o.each(s,(function(e){var t=e.id;a[t]||(a[t]=[]),a[t].push(e)})),a},getPageStates:function(e){var t=s.getAll(),n=o.reduce(t,(function(e,t){var n=a.get(t.id);return e[t.id]=o.extend({},o.pick(n,["id","name","apiName","category","staticConditions","tags"]),o.pick(t,["isActive","metadata"])),e}),{});return e?o.pickBy(n,e):n},isGlobalHoldback:function(){return d.isGlobalHoldback()},getActivationId:function(){return d.getActivationId()},getVariationMap:function(){var e=n.getLayerStates(),i={};return o.each(e,(function(e){var n=t.get(e.layerId);if(e.decision&&e.decision.experimentId&&(i[e.decision.experimentId]={id:e.decision.variationId,name:null,index:null},n)){var r=o.find(n.experiments,{id:e.decision.experimentId});if(r&&e.decision.variationId)var a=o.find(r.variations,{id:e.decision.variationId}),s=o.findIndex(r.variations,{id:e.decision.variationId});a&&(i[e.decision.experimentId]={id:e.decision.variationId,name:a.name,index:s})}})),i},getActiveExperimentIds:function(){var e={};return o.each(this.getCampaignStateLists({isActive:!0}),(function(t){o.each(t,(function(t){e[t.experiment.id]=!0}))})),o.keys(e)},getRedirectInfo:function(){var e=l.getExperimentAndVariation();return e&&(e.referrer=l.getReferrer()),e},getDecisionString:function(e){if(!e)throw new Error("Must pass a config to getDecisionString");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,f,e.campaignId);return r?u.generateAnalyticsString(r.layer,r.experiment,r.variation,r.isLayerHoldback,e.maxLength,e.shouldCleanString):null},getDecisionObject:function(e){if(!e)throw new Error("Must pass a config to getDecisionObject");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,f,e.campaignId);if(!r)return null;var a=u.formatNamesAndIdsForAnalytics(r.layer,r.experiment,r.variation,e.shouldCleanString),s=o.mapValues(a.names,(function(t,n){return u.combineAndTruncateIdAndName(t,a.idStrings[n],e.maxLength)})),l={experiment:s.experiment,variation:s.variation};return c.isSingleExperimentPolicy(r.layer.policy)||o.extend(l,{campaign:s.layer,holdback:r.isLayerHoldback}),l}}}],t.utils=n(128).create(),t.jquery=["env/jquery",function(e){return e}],t.event_emitter=n(134)}),(function(e,t,n){function i(e){return e.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}function r(e){return!u.isEmpty(e)&&u.includes(["and","or","not"],e[0])}function a(e,t){var n="";return u.isEmpty(t)?n=d:(n=u.reduce(t,(function(t,n){var r=e.get(n);return r?t+i(r.name?r.name:r.id)+",":t}),""),n=n.slice(0,-1)),n}function o(e,n,i,r,a,o){if(!v.isSingleExperimentPolicy(e.policy)||!r){var s=!v.isSingleExperimentPolicy(e.policy)&&r,c=t.formatNamesAndIdsForAnalytics(e,n,i,o),d=[c.names.experiment,c.names.variation],p=[c.idStrings.experiment,c.idStrings.variation];v.isSingleExperimentPolicy(e.policy)||(d.unshift(c.names.layer),p.unshift(c.idStrings.layer));var g=u.reduce(p,(function(e,t){return e+t.length}),0),h=d.length-1+(s?1:0),_=h*l.length,E=g+_;if(s&&(E+=f.length),E>a)throw new Error("The analytics string size is too low to send the entity IDs.");for(var m=a-E,I=d.length,y=[],S=d.length-1;S>=0;S--){var T=d[S],A=Math.min(T.length,Math.floor(m/I));m-=A,I--,y.unshift(T.substring(0,A))}var w=u.map(y,(function(e,t){return e+p[t]}));return s&&w.push(f),w.join(l)}}function s(e,n,i,r,a,o){var s=r?f:p,c=3*l.length,d=t.formatNamesAndIdsForAnalytics(e,n,i,o),g=d.names,h=d.idStrings,_=u.reduce(h,(function(e,t){return e+t.length}),0);if(_+c+s.length>a)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var E=a-_-c-s.length,m={};m.variation=Math.min(g.variation.length,Math.floor(E/3)),E-=m.variation,m.experiment=Math.min(g.experiment.length,Math.floor(E/2)),E-=m.experiment,m.layer=E;var I={};u.each(g,(function(e,t){I[t]=e.substring(0,m[t])}));var y=[];return v.isSingleExperimentPolicy(e.policy)||y.push(I.layer+h.layer),y=y.concat([I.experiment+h.experiment,I.variation+h.variation,s]),y.join(l)}var u=n(2),c=n(17),l=":",d="everyone_else",f="holdback",p="treatment",g="",h=n(11),v=n(35);t.formatNamesAndIdsForAnalytics=function(e,t,n,o){var s={layer:e.name||g,experiment:t.name||g,variation:n.name||g};if(o&&(s=u.mapValues(s,i)),s.experiment===g&&(!e.integrationStringVersion||1===e.integrationStringVersion))if(r(t.audienceIds))s.experiment="Exp";else{var l=c.get("stores/audience_data");s.experiment=a(l,t.audienceIds)}var d={layer:"("+i(e.id)+")",experiment:"("+i(t.id)+")",variation:"("+i(n.id)+")"};return{names:s,idStrings:d}},t.combineAndTruncateIdAndName=function(e,t,n){var i=n-t.length;if(i<0&&(h.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),e=g),e===g)return t;if(e.length>i){var r=Math.min(e.length,i);return e=e.substring(0,r),e+t}return e+" "+t},t.generateAnalyticsString=function(e,t,n,i,r,a){return e.integrationStringVersion&&2===e.integrationStringVersion?o(e,t,n,i,r,a):s(e,t,n,i,r,a)}}),(function(e,t,n){var i=n(77).Promise,r=n(129).observeSelector,a=n(132).waitForElement,o=n(133).waitUntil,s=n(130).poll;t.create=function(){return{observeSelector:r,poll:s,Promise:i,waitForElement:a,waitUntil:o}}}),(function(e,t,n){function i(){if(f.shouldObserveChangesIndefinitely()){var e={attributes:!0,childList:!0,subtree:!0,characterData:!0},t=p.getDocumentElement(),n=new MutationObserver(function(){this.disconnect(),l.each(l.keys(_),a),this.observe(t,e)});return function(i){var r=_[i];n.observe(t,e),r.cancelObservation=function(){delete _[i],l.isEmpty(_)&&n.disconnect()}}}return function(e){var t=h.poll(l.partial(a,e));_[e].cancelObservation=function(){t(),delete _[e]}}}function r(e){var t=_[e];t&&t.cancelObservation&&t.cancelObservation()}function a(e){if(_[e]){if(o(_[e]))return 0===_[e].matchedCount&&l.isFunction(_[e].options.onTimeout)&&_[e].options.onTimeout(),void r(e);var t=document.querySelectorAll(_[e].selector);t.length&&(l.each(t,(function(t){t.Pt&&t.Pt[e]||_[e].callbackQueue.push(t)})),s(e))}}function o(e){var t=e.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-e.startTime>t)return!0;return!1}function s(e){for(;_[e]&&_[e].callbackQueue.length;){var t=_[e].callbackQueue.shift();if(u(t,e),_[e].matchedCount=_[e].matchedCount+1,_[e].callback(t),_[e].options.once)return void r(e)}}function u(e,t){e.Pt||(e.Pt={}),e.Pt[t]=!0}function c(e){try{document.querySelector(e)}catch(e){return!1}return!0}var l=n(2),d=(n(15),n(17)),f=d.get("stores/directive"),p=n(66),g=(n(12),n(8),n(5).generate),h=n(130),v=(d.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),_={},E=function(e){(E=i())(e)};t.observeSelector=function(e,t,n){if(!c(e))throw new Error("observeSelector expects a valid css selector as its first argument");if(!l.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(n&&(!l.isObject(n)||l.isFunction(n)))throw new Error("observeSelector expects an object as its third argument");var i=g();return n=l.merge({},v,n||{}),_[i]={callback:t,callbackQueue:[],matchedCount:0,options:n,selector:e,startTime:Date.now()},E(i),setTimeout(a.bind(null,i),0),l.partial(r,i)}}),(function(e,t,n){function i(e){c[e]&&a.each(c[e].callbacks,(function(e){e.call(null)}))}function r(e,t){c[t]&&c[t].callbacks[e]&&(delete c[t].callbacks[e],a.some(c[t].callbacks)||(clearInterval(c[t].id),delete c[t]))}var a=n(2),o=(n(15),n(17)),s=(n(12),n(8),n(5).generate),u=(o.get("stores/rum"),n(131).DEFAULT_INTERVAL),c={};t.poll=function(e,t){a.isNumber(t)||(t=u),c[t]||(c[t]={callbacks:{},id:setInterval(a.partial(i,t),t)});var n=s();return c[t].callbacks[n]=e,a.partial(r,n,t)},t.cancelAll=function(){a.each(c,(function(e,t){clearInterval(e.id),delete c[t]}))}}),(function(e,t){e.exports={DEFAULT_INTERVAL:20}}),(function(e,t,n){var i=n(77).Promise,r=n(129).observeSelector;t.waitForElement=function(e){return new i(function(t,n){r(e,t,{once:!0})})}}),(function(e,t,n){var i=n(77).Promise,r=n(130).poll;t.waitUntil=function(e){return new i(function(t,n){if(e())return void t();var i=r((function(){e()&&(i(),t())}))})}}),(function(e,t,n){var i=n(76);t.on=function(e){return e.publicOnly=!0,i.on(e)},t.off=i.off,t.emit=function(e){i.emit(e)}}),(function(e,t,n){function i(e){var t,n={};if(e)if(r(e))t=Number(e);else{if("object"!=typeof e)throw new Error("tracker","Revenue argument",e,"not a number.");if(n=a.extend({},e),"revenue"in n){if(!r(n["revenue"]))throw new Error("tracker","Revenue value",n["revenue"],"not a number.");t=Number(n["revenue"]),delete n["revenue"]}}return a.isUndefined(t)||(n.revenue=t),n}function r(e){return a.isNumber(e)||a.isString(e)&&Number(e)==e}var a=n(2),o=n(136);t.activateGeoDelayedExperiments=function(e,t){t||(t=e.lists?"odds":"cdn3"),o.dataFromSource({data:e,source:t})},t.activateSiteCatalyst=function(e){e&&e.sVariable&&o.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:e.sVariable}})},t.bucketUser=t.bucketVisitor=function(e,t){if(e&&t){var n={experimentId:String(e)};t>256?n.variationId=String(t):n.variationIndex=String(t),o.bucketVisitor(n)}},t.disable=function(e){o.disable({scope:e})},t.log=function(e){a.isUndefined(e)&&(e=!0),o.log({level:e?"INFO":"OFF"})},t.optOut=function(e){a.isUndefined(e)&&(e=!0),o.optOut({isOptOut:e})},t.setCookieDomain=function(e){o.cookieDomain({cookieDomain:e})},t.setCookieExpiration=function(e){o.cookieExpiration({cookieExpirationDays:e})},t.setDimensionValue=function(e,t){var n={};n[e]=t,o.user({attributes:n})},t.setUserId=function(e){o.user({userId:e})},t.storeThirdPartyData=function(e,t){o.dataFromSource({source:e,data:t})},t.trackEvent=function(e,t){o.event({eventName:e,tags:i(t)})}}),(function(e,t,n){var i=n(2),r=n(15),a=n(12),o=n(125),s=n(126),u=n(98),c=n(94),l=n(87),d=n(76),f=n(8),p=n(11),g=n(118),h=n(121),v=n(64),_=n(107),E=n(81),m=n(16),I=n(14),y=n(17),S=y.get("stores/dimension_data"),T=y.get("stores/view_data"),A=y.get("stores/visitor_id"),w=y.get("stores/layer_data"),D=y.get("stores/directive"),b=86400,R=90;t.event=function(e){h.updateAllViewTags();var t=function(){var t=u.trackCustomEvent(e.eventName,e.tags);t?p.log("API / Tracking custom event:",e.eventName,e.tags):p.log("API / Not tracking custom event:",e.eventName)};A.getBucketingId()?t():f.dispatch(r.ADD_CLEANUP_FN,{lifecycle:a.Lifecycle.postActivate,cleanupFn:t})},t.page=function(e){var t=T.getByApiName(e.pageName);if(!t)throw new Error('Unknown page "'+e.pageName+'"');var n=!e.hasOwnProperty("isActive")||e.isActive,i=function(){n?h.activate(t,e.tags):(h.deactivate(t),p.log("API / Deactivated Page",h.description(t)))};A.getBucketingId()?i():f.dispatch(r.ADD_CLEANUP_FN,{lifecycle:a.Lifecycle.postViewsActivated,cleanupFn:i})},t.tags=function(e){h.setGlobalTags(e.tags)},t.user=function(e){i.each(e,(function(e,t){"userId"===t?(p.log("API / Setting visitor UUID to",e),v.persistVisitorId({UUID:e})):"attributes"===t&&(p.log("API / Setting visitor attributes:",e),i.each(e,(function(e,t){var n,i=t,o="custom",s=S.getById(t)||S.getByApiName(t);s&&(i=s.id,n=s.segmentId||s.id);var u=function(){f.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:[{key:i,value:{id:n,value:e},type:o,metadata:{lastModified:I.now()}}]})};A.getBucketingId()?u():f.dispatch(r.ADD_CLEANUP_FN,{lifecycle:a.Lifecycle.postVisitorProfileLoad,cleanupFn:u})})))}))},t.optOut=function(e){var t=!e.hasOwnProperty("isOptOut")||e.isOptOut;l.setOptOut(t)},t.cookieExpiration=function(e){var t=e.cookieExpirationDays;t<R&&(p.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",R,", setting to minimum."),t=R),p.log("API / Setting cookie age to",t,"days."),f.dispatch(r.SET_COOKIE_AGE,t*b)},t.cookieDomain=function(e){p.log("API / Setting cookie domain to",e.cookieDomain),f.dispatch(r.SET_COOKIE_DOMAIN,e.cookieDomain)},t.disable=function(e){if(e.scope){if("tracking"!==e.scope)throw new Error('Unknown "scope" for disable: '+e.scope);p.log("API / Disabling tracking"),f.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else p.log("API / Disabling everything"),f.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(e){var t=e.level,n=e.match;i.isUndefined(t)&&(t="INFO"),i.isUndefined(n)&&(n=""),p.setLogMatcher(n),p.setLogLevel(t)},t.registerModule=function(e){var t="custom/"+e.moduleName;if(s[t]||o.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');g.registerApiModule(t,e.module)},t.dataFromSource=function(e){var t=e.source;c.makeAsyncRequest(t),c.resolveRequest(t,e.data)},t.addListener=function(e){if(!i.isFunction(e.handler))throw new Error("A handler function must be supplied");e=i.omit(e,"type"),e.publicOnly=!0,e.emitErrors=!0,d.on(e)},t.removeListener=function(e){if(!e.token)throw new Error("Must supply a token to removeListener");d.off(e.token)},t.load=function(e){f.dispatch(r.DATA_LOADED,{data:e.data})},t.integrationSettings=function(e){if(!e.id)throw new Error("id is required");if(!e.settings)throw new Error("settings is required");f.dispatch(r.SET_INTEGRATION_SETTINGS,i.extend({},e.settings,{id:e.id}))},t.bucketVisitor=function(e){if(!e.variationId&&i.isUndefined(e.variationIndex)||e.variationId&&e.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!e.experimentId)throw new Error("An experimentId is required.");var t,n,r=e.campaignId;if(r){if(t=w.get(r),!t)throw new Error("Could not find layer "+r)}else if(t=w.getLayerByExperimentId(e.experimentId),r=t.id,!r)throw new Error("Could not find layer for experiment "+e.experimentId);if(n=i.find(t.experiments,{id:e.experimentId}),!n)throw new Error("Could not find experiment "+e.experimentId+" in layer "+r);var a=e.variationId;if(i.isUndefined(e.variationIndex)){if(!i.find(n.variations,{id:a}))throw new Error("Cound not find variation "+a+" in experiment "+e.experimentId)}else if(a=n.variations[e.variationIndex].id,!a)throw new Error("Could not find variation at index "+e.variationIndex+" in experiment "+e.experimentId);v.updateVariationIdMap(r,e.experimentId,a),A.getBucketingId()&&v.persistVariationId()},t.waitForOriginSync=function(e){if(!i.isArray(e.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+m.stringify(e.canonicalOrigins));i.each(e.canonicalOrigins,(function(e){if(!i.isString(e))throw new Error("Each item in canonicalOrigins must be a string. Found type "+typeof e)})),E.loadCanonicalOrigins(e.canonicalOrigins)},t.activate=function(){D.shouldActivate()?_.emitActivateEvent():p.debug("Not activating.")},t.sendEvents=function(){_.emitSendEvents()},t.holdEvents=function(){_.emitHoldEvents()}}),(function(e,t){}),(function(e,t,n){var i=n(2),r=n(99),a=n(68).BaseError,o=n(14),s=n(17),u=n(66),c=n(11),l=n(67),d=n(83),f=s.get("stores/global"),p="https://errors.client.optimizely.com";t.handleError=function(e,t){function n(){return d.request({url:p+"/log",method:"POST",data:v,contentType:"application/json"}).then((function(e){c.log("Error Monitor / Logged error with response: ",e)}),(function(e){c.error("Failed to log error, response was: ",e)}))}var s=e.name||"Error",g=e.message,h=e.stack||null;e instanceof a&&(g instanceof Error?(g=g.message,h=e.message.stack):h=null);var v={timestamp:o.now(),clientEngine:r.ENGINE,clientVersion:r.VERSION,accountId:f.getAccountId(),projectId:f.getProjectId(),errorClass:s,message:g,stacktrace:h};t&&(v.metadata=i.reduce(t,(function(e,t,n){return i.isObject(t)||e.push({key:n,value:String(t)}),e}),[])),c.error("Logging error",v),u.isLoaded()?n():l.addEventListener("load",n)}}),(function(e,t,n){function i(e){var t=!1;if(a.isArray(window.optimizely)&&a.each(window.optimizely,(function(n){a.isArray(n)&&"verifyPreviewProject"===n[0]&&String(n[1])===e&&(t=!0)})),!t)throw new Error("Preview projectId: "+e+" does not match expected")}function r(){u.on({filter:{type:o.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),u.on({filter:{type:o.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),u.on({filter:{type:o.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),u.on({filter:{type:"error"},publicOnly:!0,handler:f})}var a=n(2),o=n(100),s=n(67),u=n(76),c=n(17),l=c.get("stores/directive"),d="optimizelyPreview",f=function(e){var t=s.getGlobal(d);t.push(e)};t.initialize=function(e){l.isSlave()&&i(e),r()},t.setupPreviewGlobal=function(){s.getGlobal(d)||s.setGlobal(d,[])},t.pushToPreviewGlobal=function(e){f(e)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(141))}}),(function(e,t){e.exports={provides:"visitorId",getter:["stores/visitor_id",function(e){return e.getRandomId()}]}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(143)),e.registerAudienceMatcher("behavior",n(145))}}),(function(e,t,n){var i=n(144);e.exports={provides:"events",isTransient:!0,getter:["stores/visitor_events",function(e){return i.getEvents(e)}]}}),(function(e,t,n){var i=n(2),r=n(7);t.getEvents=function(e){var t=r.getEvents(),n=[].concat.apply([],i.values(e.getForeignEvents())),a=[].concat.apply([],i.values(e.getForeignEventQueues()));return r.mergeAllEvents([t,n,a])}}),(function(e,t,n){var i=n(2),r=n(146),a=n(147),o=n(16);e.exports={fieldsNeeded:["events"],match:function(e,t){var n=[],s=o.parse(t.value);return n=i.isUndefined(s.version)?[s]:r.buildFromSpecV0_1(s),i.every(n,(function(t){return a.isSatisfied(t,e.events)}))}}}),(function(e,t,n){function i(e){return e=(e||"").toString().trim(),p[e]||e}function r(e,t,n){var i={where:t};if(e.count&&(i["limit"]=e.count),e.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT){var r=s.getFieldKeyPathForSource(e.name,n),a=s.aggregate("count"),o=s.aggregateField("count"),c=s.groupField(r);return d.extend(i,{select:[{field:c}],groupBy:s.groupBy([r]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}]})}return d.extend(i,{orderBy:[{field:[u.FIELDS.TIME],direction:"DESC"}]})}function a(e){var t=[];if(d.isUndefined(e))throw new Error("rule is undefined");if(!d.isObject(e))throw new Error("rule is not an Object");"0.2"!==e["version"]&&t.push('version: not "0.2"'),e["filter"]&&(d.isArray(e["filter"])?d.each(e["filter"],(function(e,n){var i=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.FILTER);i&&t.push("filter["+n+"]: "+i);var r=s.validateComparatorAndValue(e["comparator"],e["value"]);r&&t.push("filter["+n+"]: "+r)})):t.push("filter: not an array"));var n=[],i=[];if(e["sort"]&&(e["reduce"]&&e["reduce"]["aggregator"]&&"nth"!==e["reduce"]["aggregator"]&&t.push("sort: superfluous because we can apply aggregator "+f.stringify(e["reduce"]["aggregator"])+" to unsorted items"),d.isArray(e["sort"])?d.each(e["sort"],(function(e,r){var a=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.SORT);a&&t.push("sort["+r+"]: "+a),e["field"]&&"frequency"===e["field"][0]?n.push(e):i.push(e);var u=o(e["direction"]);u&&t.push("sort["+r+"]: "+u)})):t.push("sort: not an array"),n.length&&i.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),n.length&&!e["pick"]&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked')),e["pick"]){e["reduce"]&&"count"===e["reduce"]["aggregator"]&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var r=s.validateFieldKeyPathV0_2(e["pick"]["field"]);r&&t.push("pick: "+r)}if(e["reduce"]){var a=e["reduce"]["aggregator"],u="aggregator "+(f.stringify(a)||String(a)),c=e["reduce"]["n"],l="index "+(f.stringify(c)||String(c));d.includes(["sum","avg","max","min","count","nth"],a)||t.push("reduce: "+u+" is unknown"),d.includes(["sum","avg","max","min"],a)&&(e["pick"]||t.push("reduce: "+u+" is impossible to use because no values have been picked")),"nth"===a?((!d.isNumber(c)||isNaN(c)||parseInt(c,10)!==c||c<0)&&t.push("reduce: "+l+" is not a non-negative integer (mandated by "+u+")"),e["sort"]||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):d.isUndefined(c)||t.push("reduce: "+l+" is defined (not mandated by "+u+")")}if(t.length)throw new Error(t.join("\n"))}function o(e){var t="direction "+(f.stringify(e)||String(e));if(!d.includes(["ascending","descending"],e))return t+' is not "ascending" or "descending"'}var s=t,u={FIELDS:n(54).FIELDS,FIELDS_V0_2:n(54).FIELDS_V0_2},c=n(147),l=n(11),d=n(2),f=n(16);s.MILLIS_IN_A_DAY=864e5,s.aggregateField=function(e,t){return d.isString(t)&&(t=[t]),t=t||c.DEFAULT_FIELD,[c.generateAlias(e,t)];
},s.groupField=function(e){return d.isString(e)&&(e=[e]),e=e||c.DEFAULT_FIELD,[e.join(".")]};var p={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};s.fieldComparison=function(e,t,n){return e=i(e),d.isString(t)&&(t=[t]),"exists"===e?{op:e,args:[{field:t}]}:{op:e,args:[{field:t},{value:n}]}},s.relativeTimeComparison=function(e,t){return{op:i(e),args:[{op:"-",args:[{eval:"now"},{field:[u.FIELDS.TIME]}]},{value:t*s.MILLIS_IN_A_DAY}]}},s.rangeTimeComparison=function(e){return d.isArray(e)?{op:"between",args:[{field:[u.FIELDS.TIME]},{value:e[0]||+new Date(0)},{value:e[1]||+new Date}]}:(l.error("Rule builder","rangeTimeComparison passed invalid range",e),null)},s.groupBy=function(e){for(var t=[],n=0;n<e.length;n++)t[n]={field:e[n]};return t},s.aggregate=function(e,t){return d.isString(t)&&(t=[t]),t=t||c.DEFAULT_FIELD,{op:e,args:[{field:t}]}},s.SOURCE_TYPES={BEHAVIOR:"events",DEFAULT_BEHAVIOR:"default_behavior",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},s.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},s.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},s.getFieldKeyPathForSource=function(e,t){t=t||s.SOURCE_TYPES.BEHAVIOR;var n=[];return d.isString(e)?(n=[e],t!==s.SOURCE_TYPES.BEHAVIOR||d.includes(d.values(u.FIELDS),e)||(n=[u.FIELDS.OPTIONS,e])):n=e,n},s.buildFromSpecV0_1=function(e){if(!(e.action||e.filters&&0!==e.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+f.stringify(e));var t=s.fieldComparison("gt",u.FIELDS.TIME,0),n=[],i=[];if(e.action&&(i.push(s.fieldComparison("eq",u.FIELDS.NAME,e.action.value)),e.action.type&&i.push(s.fieldComparison("eq",u.FIELDS.TYPE,e.action.type))),e.time)if("last_days"===e.time.type)i.push(s.relativeTimeComparison("lte",e.time.days));else if("range"===e.time.type){var a=s.rangeTimeComparison([e.time.start,e.time.stop]);a&&i.push(a)}else l.error("Rule builder",'Audience spec has bad "time" type',e.time.type);if(t={op:"and",args:i},e.count&&n.push({where:s.fieldComparison(e.count.comparator,"0",e.count.value),from:{select:[{field:s.aggregateField("count")}],where:t,aggregate:[s.aggregate("count")]}}),e.filters&&d.each(e.filters,(function(r){var a,o,c=s.getFieldKeyPathForSource(r.name,e.source);if(r.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT?(a=s.aggregate("count"),o=s.aggregateField("count")):r.modifier===s.RECENCY_FILTERS.MOST_RECENT&&(a=s.aggregate("max",u.FIELDS.TIME),o=s.aggregateField("max",u.FIELDS.TIME)),a){var l=c,d=s.groupField(l);n.push({where:s.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:d}],where:t,groupBy:s.groupBy([l]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}],limit:1}})}else i.push(s.fieldComparison(r.comparator,c,r.value))})),e.pick){if(n.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+f.stringify(e));return[r(e.pick,t,e.source)]}return n.length>0?n:[{where:t}]},s.buildFromSpecV0_2=function(e){a(e);var t={where:{op:"and",args:d.map(e["filter"]||[],(function(e){return"age"===e["field"][0]?s.relativeTimeComparison(e["comparator"]||"eq",e["value"]/s.MILLIS_IN_A_DAY):s.fieldComparison(e["comparator"]||"eq",s.convertFieldKeyPathFromSpecV0_2(e["field"]),e["value"])}))}};if(e["reduce"]&&"count"===e["reduce"]["aggregator"])return d.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var n=[],i=[];if(e["sort"]&&(d.each(e["sort"],(function(e){d.includes(["ascending","descending"],e["direction"])&&(d.includes(["time","age"],e["field"][0])&&i.push(e),"frequency"===e["field"][0]&&n.push(e))})),i.length&&!n.length&&(t["orderBy"]=d.filter(d.map(i,(function(e){return"time"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"ASC":"DESC"}:"age"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"DESC":"ASC"}:void 0}))))),e["pick"]&&e["pick"]["field"]){var r=s.convertFieldKeyPathFromSpecV0_2(e["pick"]["field"]);if(e["reduce"]&&d.includes(["avg","max","min","sum"],e["reduce"]["aggregator"]))return d.extend(t,{aggregate:[{op:e["reduce"]["aggregator"],args:[{field:r}]}],select:[{field:[c.generateAlias(e["reduce"]["aggregator"],r)]}]});t=n.length?d.extend(t,{groupBy:[{field:r}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===n[0]["direction"]?"ASC":"DESC"}],select:[{field:[r.join(".")]}]}):d.extend(t,{select:[{field:r}]})}if(e["reduce"]&&"nth"===e["reduce"]["aggregator"]){var o=e["reduce"]["n"];if(d.isNumber(o)&&o>=0&&Number(o)===Math.floor(Number(o)))return d.extend(t,{offset:o,limit:1})}return t},s.convertFieldKeyPathFromSpecV0_2=function(e){return"tags"===e[0]&&"revenue"===e[1]?["r"]:[u.FIELDS_V0_2[e[0]]].concat(e.slice(1))},s.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},s.validateFieldKeyPathV0_2=function(e,t){var n="field "+(f.stringify(e)||String(e));if(!d.isArray(e)||!d.every(e,d.isString))return n+" is not an array of strings";if("tags"===e[0]&&e.length>2||"tags"!==e[0]&&e.length>1)return n+" includes too many strings";if("tags"===e[0]&&e.length<2)return n+" does not specify an exact tag";if(e.length<1)return n+" does not specify a top-level field";var i=d.keys(u.FIELDS_V0_2),r=["age","frequency"];return t===s.FieldPurpose.FILTER&&(i.push("age"),r=["frequency"]),t===s.FieldPurpose.SORT&&(i=["time","age","frequency"],r=["name","type","category","tags"]),d.includes(r,e[0])?n+" is not supported here":d.includes(i,e[0])?void 0:n+" is unknown"},s.validateComparatorAndValue=function(e,t){var n="comparator "+(f.stringify(e)||String(e)),i="value "+(f.stringify(t)||String(t));if(!d.isString(e)&&!d.isUndefined(e))return n+" is not a string";switch(e){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!d.isNumber(t))return i+" is not a number (mandated by "+n+")";break;case"in":if(!d.isArray(t))return i+" is not an array (mandated by "+n+")";break;case"between":if(!(d.isArray(t)&&2===t.length&&d.isNumber(t[0])&&d.isNumber(t[1])&&t[0]<=t[1]))return i+" is not a pair of increasing numbers (mandated by "+n+")";break;case"regex":if(!(d.isString(t)||d.isArray(t)&&2===t.length&&d.isString(t[0])&&d.isString(t[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+n+")";break;case"exists":if(!d.isUndefined(t))return i+" is not undefined (mandated by "+n+")";break;default:return n+" is unknown"}}}),(function(e,t,n){var i=n(2),r=n(12),a=n(11),o=a.log.bind(a),s=n(14),u=n(57).getFieldValue,c=n(16),l=t;l.getValueOrDefault=function(e,t,n){if(e.getValueOrDefault)return e.getValueOrDefault(t,n);var i=u(e,t);return"undefined"==typeof i&&(i=n),i},l.maybeTrimLowerCase=function(e){return"string"==typeof e?e.trim().toLowerCase():e},l.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},l.DEFAULT_FIELD=["*"],l.booleanOperators={eq:function(e){var t=i.map(e,l.maybeTrimLowerCase);return t[0]==t[1]},is:function(e){return e[0]===e[1]},gt:function(e){return e[0]>e[1]},lt:function(e){return e[0]<e[1]},gte:function(e){return e[0]>=e[1]},lte:function(e){return e[0]<=e[1]},"in":function(e){var t=i.map(e[1]||[],l.maybeTrimLowerCase);return i.includes(t,l.maybeTrimLowerCase(e[0]))},between:function(e){return e[1]<=e[0]&&e[0]<=e[2]},contains:function(e){var t=i.map(e,(function(e){return"string"==typeof e?e.toLowerCase():e}));return(t[0]||"").indexOf(t[1])!==-1},regex:function(e){try{var t,n;return i.isString(e[1])?(t=e[1],n="i"):(t=e[1][0]||"",n=e[1][1]||""),new RegExp(t,n).test(e[0])}catch(e){return a.error("Rules",'In operator "regex", error: '+(e.message||"invalid RegExp /"+[t,n].join("/"))),!1}},exists:function(e){return"undefined"!=typeof e[0]},and:function(e){return i.every(e,(function(e){return e}))},or:function(e){return i.some(e,(function(e){return e}))},not:function(e){return!e[0]}},l.arithmeticOperators={"+":function(e){return(e[0]||0)+(e[1]||0)},"-":function(e){return(e[0]||0)-(e[1]||0)},"/":function(e){return(e[0]||0)/(e[1]||1)},"%":function(e){return(e[0]||0)%(e[1]||1)}},l.aggregateOperators={sum:function(e,t){for(var n=e[0]||l.DEFAULT_FIELD,i=0,r=0;r<t.length;r++)i+=l.getValueOrDefault(t[r],n,0);return i},avg:function(e,t){if(0===t.length)return 0;for(var n=e[0]||l.DEFAULT_FIELD,i=0,r=0;r<t.length;r++)i+=l.getValueOrDefault(t[r],n,0);return i/t.length},max:function(e,t){for(var n=e[0]||l.DEFAULT_FIELD,i=Number.NEGATIVE_INFINITY,r=0;r<t.length;r++)i=Math.max(i,l.getValueOrDefault(t[r],n,Number.NEGATIVE_INFINITY));return i},min:function(e,t){for(var n=e[0]||l.DEFAULT_FIELD,i=Number.POSITIVE_INFINITY,r=0;r<t.length;r++)i=Math.min(i,l.getValueOrDefault(t[r],n,Number.POSITIVE_INFINITY));return i},count:function(e,t){return t.length}},l.functions={now:function(){return s.now()}},l.getScalarOperator=function(e){return e in l.booleanOperators?l.booleanOperators[e]:e in l.arithmeticOperators?l.arithmeticOperators[e]:null},l.operate=function(e,t){if(t.hasOwnProperty("value"))return t["value"];if(t.hasOwnProperty("field"))return l.getValueOrDefault(e,t["field"]);if(t.hasOwnProperty("eval"))return t["eval"]in l.functions?l.functions[t["eval"]]():void a.error("Rules","Unknown function: "+t["eval"]);if(!t["op"])return void a.error("Rules","No operator specified: "+c.stringify(t));var n=l.getScalarOperator(t["op"]);if(!n)return void a.error("Rules","Unknown operator: "+t["op"]);var r=i.partial(l.operate,e),o=t["args"]||[],s=i.map(o,(function(e){return r(e)}));return n(s,e)},l.groupBy=function(e,t){var n={};if("undefined"==typeof e||!i.isArray(e)||0===e.length)return n["*"]={fieldValues:{},events:t},n;for(var r=i.map(e,(function(e){return e["field"]})),a=0;a<t.length;a++){for(var o=t[a],s=[],u={},d=0;d<r.length;d++){var f=r[d],p=l.getValueOrDefault(o,f),g=f.join(".");u[g]=p,s.push(encodeURIComponent(g)+"="+encodeURIComponent(c.stringify(p)))}var h=s.join("&");n.hasOwnProperty(h)||(n[h]={fieldValues:u,events:[]}),n[h].events.push(o)}return n},l.generateAlias=function(e,t){return"_"+e+"_"+t.join(".")},l.aggregate=function(e,t){var n={};return i.each(t,(function(t,i){n[i]={};for(var r=0;r<e.length;r++){var o=e[r],s=o["op"];if(s in l.aggregateOperators){var u=(o["args"]&&o["args"][0]||{})["field"]||l.DEFAULT_FIELD,c=l.generateAlias(s,u),d=l.aggregateOperators[s]([u],t.events);n[i][c]=d}else a.error("Rules","Unknown aggregate operator "+s)}})),n},l.project=function(e,t){var n=[];return i.each(e,(function(e,r){var a=i.extend({},e.fieldValues),o=t[r]||{};i.extend(a,o),n.push(a)})),n},l.orderBy=function(e,t){return i.isArray(e)?0===e.length?t:t.sort((function(t,n){for(var i=0;i<e.length;i++){var r=e[i],a=r["direction"]||"ASC",o="ASC"===a?1:-1,s=r["field"],u=l.getValueOrDefault(t,s,0),c=l.getValueOrDefault(n,s,0);if(u<c)return-o;if(u>c)return o}return 0})):(o("Rules","groupBy rule must be an array"),t)},l.rewrite=function(e){function t(e,o){if(i.isArray(e)&&("and"!==e[0]&&"or"!==e[0]&&"not"!==e[0]&&a.error("Rules","Unexpected operation "+e[0]+". Continuing optimistically."),e={op:e[0],args:e.slice(1)}),e.hasOwnProperty("field")||e.hasOwnProperty("value")||e.hasOwnProperty("eval"))return e;if(o&&e["op"]in l.aggregateOperators){var s=(e["args"]&&e["args"][0]||{})["field"]||l.DEFAULT_FIELD,u=l.generateAlias(e["op"],s);return u in r||(n.push({op:e["op"],args:e["args"]}),r[u]=!0),{field:[u]}}for(var c=[],d=e["args"]||[],f=0;f<d.length;f++)c[f]=t(d[f],o);return{op:e["op"],args:c}}var n=[],r={},o={};e.hasOwnProperty(l.clause.WHERE)&&(o[l.clause.WHERE]=t(e[l.clause.WHERE],!1)),e.hasOwnProperty(l.clause.HAVING)&&(o[l.clause.HAVING]=t(e[l.clause.HAVING],!0)),(e.hasOwnProperty(l.clause.AGGREGATE)||n.length>0)&&(o[l.clause.AGGREGATE]=(e[l.clause.AGGREGATE]||[]).concat(n));for(var s=[l.clause.GROUP_BY,l.clause.ORDER_BY,l.clause.SELECT,l.clause.OFFSET,l.clause.LIMIT],u=0;u<s.length;u++)e.hasOwnProperty(s[u])&&(o[s[u]]=e[s[u]]);return e.hasOwnProperty(l.clause.FROM)&&(o[l.clause.FROM]=l.rewrite(e[l.clause.FROM])),o},l.verify=function(e,t){t=t||0;var n=[];if(e.hasOwnProperty(l.clause.WHERE)?e[l.clause.WHERE]["op"]?e[l.clause.WHERE]["op"]in l.booleanOperators||n.push("Non-boolean WHERE clause operator"):n.push("Missing WHERE clause operator"):n.push("Missing WHERE clause"),e.hasOwnProperty(l.clause.HAVING)&&(e[l.clause.HAVING]["op"]?e[l.clause.HAVING]["op"]in l.booleanOperators||n.push("Non-boolean HAVING clause operator"):n.push("Missing HAVING clause operator")),e.hasOwnProperty(l.clause.GROUP_BY)&&!e.hasOwnProperty(l.clause.AGGREGATE)&&n.push("No AGGREGATE clause specified with GROUP_BY clause"),e.hasOwnProperty(l.clause.SELECT)){var r=e[l.clause.SELECT];if(i.isArray(r))for(var a=0;a<r.length;a++)r[a]["op"]&&r[a]["op"]in l.aggregateOperators&&n.push('In SELECT clause, aggregate operator "'+r[a]["op"]+'" specified in selector at index '+a);else n.push("SELECT clause must be an array")}if(e.hasOwnProperty(l.clause.OFFSET)){var o=e[l.clause.OFFSET];(!i.isNumber(o)||Number(o)<0||Number(o)!==Math.floor(Number(o)))&&n.push("OFFSET must be a non-negative integer")}if(e.hasOwnProperty(l.clause.LIMIT)){var s=e[l.clause.LIMIT];(!i.isNumber(s)||Number(s)<0||Number(s)!==Math.floor(Number(s)))&&n.push("LIMIT must be a non-negative integer")}return t>0&&(n=i.map(n,(function(e){return"Sub-rule "+t+": "+e}))),e.hasOwnProperty(l.clause.FROM)&&(n=n.concat(l.verify(e[l.clause.FROM],t+1))),n},l.select=function(e,t){return i.map(t,(function(t){return i.map(e,(function(e){return l.operate(t,e)}))}))},l.executeRecursively=function(e,t){var n=t;if(e.hasOwnProperty(l.clause.FROM)&&(a.debug("Evaluating FROM clause:",e[l.clause.FROM]),n=l.executeRecursively(e[l.clause.FROM],n),a.debug("Results after FROM:",n)),a.debug("Evaluating WHERE clause:",e[l.clause.WHERE]),n=i.filter(n,(function(t){return l.operate(t,e[l.clause.WHERE])})),a.debug("Results after WHERE:",n),e.hasOwnProperty(l.clause.AGGREGATE)){a.debug("Evaluating AGGREGATE clause:",e[l.clause.AGGREGATE]);var r=l.groupBy(e[l.clause.GROUP_BY],n),o=l.aggregate(e[l.clause.AGGREGATE],r);n=l.project(r,o),a.debug("Results after AGGREGATE:",n)}e.hasOwnProperty(l.clause.HAVING)&&(a.debug("Evaluating HAVING clause:",e[l.clause.HAVING]),n=i.filter(n,(function(t){return l.operate(t,e[l.clause.HAVING])})),a.debug("Results after HAVING:",n)),e.hasOwnProperty(l.clause.ORDER_BY)&&(a.debug("Evaluating ORDER_BY clause:",e[l.clause.ORDER_BY]),n=l.orderBy(e[l.clause.ORDER_BY],n),a.debug("Results after ORDER_BY:",n));var s=0;e.hasOwnProperty(l.clause.OFFSET)&&(a.debug("Evaluating OFFSET clause:",e[l.clause.OFFSET]),s=Number(e[l.clause.OFFSET]));var u;return e.hasOwnProperty(l.clause.LIMIT)&&(a.debug("Evaluating LIMIT clause:",e[l.clause.LIMIT]),u=s+Number(e[l.clause.LIMIT])),(s>0||!i.isUndefined(u))&&(n=n.slice(s,u),a.debug("Results after OFFSET/LIMIT:",n)),e.hasOwnProperty(l.clause.SELECT)&&(a.debug("Evaluating SELECT clause:",e[l.clause.SELECT]),n=l.select(e[l.clause.SELECT],n),a.debug("Results after SELECT:",n)),n},l.execute=function(e,t){e=l.rewrite(e),a.shouldLog(r.LogLevel.DEBUG)&&a.groupCollapsed("Evaluating Behavioral Rule"),a.debug("Rule:",e,c.stringify(e)),a.debug("Events:",t);var n=l.verify(e);if(n.length>0)throw new Error("Rule "+c.stringify(e)+" has violations: "+n.join("\n"));var i=l.executeRecursively(e,t);return a.debug("Rule result:",i),a.shouldLog(r.LogLevel.DEBUG)&&a.groupEnd(),i},l.isSatisfied=function(e,t){try{return l.execute(e,t).length>0}catch(t){return a.error("Rules","Error "+t.toString()+" while evaluating rule "+c.stringify(e)),!1}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(149))}}),(function(e,t,n){var i=n(150),r=n(144),a=n(146),o=n(2),s=n(16);e.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity","stores/visitor_events","stores/visitor",function(e,t,n){var u=e.getProjectId(),c=o.filter(o.map(t.getCustomBehavioralAttributes(u),(function(e){try{return{id:e.id,granularity:i.GRANULARITY.ALL,rule:a.buildFromSpecV0_2(s.parse(e.rule_json))}}catch(e){return}}))),l=r.getEvents(n);return i.evaluate(c,l)}]}}),(function(e,t,n){function i(e){if(0===e.length)return[];for(var t=e.length-1,n=o.FIELDS.SESSION_ID,i=e[t][n];t>0&&i===e[t-1][n];)t--;return e.slice(t)}function r(e,t){if(0===e.length||t<=0)return[];var n=+new Date-t*u.MILLIS_IN_A_DAY;n-=n%u.MILLIS_IN_A_DAY;for(var i=e.length;i>0&&n<=e[i-1][o.FIELDS.TIME];)i--;return e.slice(i)}var a=n(11),o={FIELDS:n(54).FIELDS},s=n(147),u=n(146);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(e,n){var o={};if(0===n.length){for(var u=0;u<e.length;u++)o[e[u].id]=e[u].defaultValue;return o}var c=i(n),l=r(n,60);for(u=0;u<e.length;u++){var d=e[u],f=n;d.granularity===t.GRANULARITY.CURRENT_SESSION?f=c:d.granularity===t.GRANULARITY.LAST_60_DAYS&&(f=l);try{var p=f;d.rule&&(p=s.execute(d.rule,f)),o[d.id]=d.defaultValue,1===p.length?o[d.id]=p[0][0]||d.defaultValue:a.debug("Behavior / Rule for",d.id,"returned",p.length,"results, expected 1")}catch(e){a.error("Behavior / Rule for",d.id,"failed with",e.message||"")}}return o}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(152)),e.registerAudienceMatcher("first_session",n(153))}}),(function(e,t,n){var i=n(2),r=n(144),a=n(57).getFieldValue,o=n(54);e.exports={provides:"first_session",shouldTrack:!0,getter:["stores/visitor_events",function(e){var t=r.getEvents(e);if(t&&t.length>0){var n=a(t[0],[o.FIELDS.SESSION_ID]);return i.every(t,(function(e){return e[o.FIELDS.SESSION_ID]===n}))}return!0}]}}),(function(e,t){e.exports={fieldsNeeded:["first_session"],match:function(e){return!!e.first_session}}}),(function(e,t,n){e.exports=function(e){e.registerApiModule("behavior",n(155))}}),(function(e,t,n){function i(e,t){var n=d.buildFromSpecV0_1(t);if(1!==n.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return f.execute(n[0],e)}function r(e,t){return c.map(e,(function(e){return c.isFunction(e.toObject)?e.toObject(t):e}))}function a(e,t){if(!e)return["Descriptor not defined"];var n=[];return e.count&&n.push('Unexpected "count" clause specified'),e.pick&&e.pick.modifier&&t.indexOf(e.pick.modifier)===-1&&n.push('Invalid "pick" modifier "'+e.pick.modifier+'"'),c.each(e.filters,(function(e){c.isUndefined(e.modifier)||n.push('Unexpected "filter" modifier "'+e.modifier+'"')})),n.length>0?n:void 0}function o(e,t){var n,o={revenueAsTag:!1,timeAsTimestamp:!0};if(c.isUndefined(t))return n=l.getEvents(e),r(n,o);if(c.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return n=l.getEvents(e),r(n.slice(-t),o)}var s=a(t,c.values(d.RECENCY_FILTERS));if(s)throw new Error(s.join("\n"));return n=l.getEvents(e),r(i(n,t),o)}function s(e,t){if(t=c.cloneDeep(t)||{},!t.pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||d.FREQUENCY_FILTERS.MOST_FREQUENT;var n=a(t,c.values(d.FREQUENCY_FILTERS));if(n)throw new Error(n.join("\n"));var r=l.getEvents(e);return i(r,t)}function u(e,t){var n=d.buildFromSpecV0_2(t),i=l.getEvents(e),a=r(f.execute(n,i),{revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(a=c.flatten(a)),t.reduce&&(a=a[0]),a}var c=n(2),l=n(144),d=n(146),f=n(147);e.exports=["stores/visitor_events",function(e){return{getEvents:c.partial(o,e),getByFrequency:c.partial(s,e),query:c.partial(u,e)}}]}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/browser_id",n(157)),e.registerVisitorProfileProvider(n(162)),e.registerVisitorProfileProvider(n(163)),e.registerAudienceMatcher("browser_version",n(164))}}),(function(e,t,n){var i=n(158);t.getId=function(){return i.get().browser.id},t.getVersion=function(){return i.get().browser.version}}),(function(e,t,n){var i=n(2),r=n(67),a=n(159),o=n(8),s=n(17),u=n(15),c=s.get("stores/ua_data");t.get=function(){var e=c.get();return i.isEmpty(e)&&(e=a.parseUA(r.getUserAgent()),o.dispatch(u.SET_UA_DATA,{data:e})),e}}),(function(e,t,n){var i=n(160),r=n(2);t.parseUA=function(e){var t=new i(e),n=t.getBrowser(),r=t.getOS(),c=t.getDevice(),l=s(c),d=u(r["name"]),f=o(c["type"],l,d);return{browser:{id:a(n["name"]),version:n["version"]},platform:{id:d,version:r["version"]},device:{id:l,type:c["type"]||(f?"mobile":"desktop"),isMobile:f}}};var a=function(e){if(e=(e||"").toLowerCase(),e in c)return e;var t=function(t){return t.toLowerCase()===e};for(var n in c)if(r.some(c[n]||[],t))return n;return"unknown"},o=function(e,t,n){if(r.includes(["mobile","tablet"],e))return!0;if(t&&"unknown"!==t)for(var i in l)if(t===l[i])return!0;var a=["android","blackberry","ios","windows phone"];return!!r.includes(a,n)},s=function(e){return e.model in l?l[e.model]:e.type||"unknown"},u=function(e){return(e||"unknown").toLowerCase()},c={gc:["Chrome","chromium","silk","yandex","maxthon"],edge:["Edge"],ie:["Internet Explorer","iemobile"],ff:["Firefox","iceweasel"],opera:["Opera","opera mini","opera tablet"],safari:["Safari","mobile safari","webkit"],ucbrowser:["UC Browser"]},l={iPhone:"iphone",iPad:"ipad"}}),(function(e,t,n){var i;!(function(r,a){"use strict";var o="0.7.12",s="",u="?",c="function",l="undefined",d="object",f="string",p="major",g="model",h="name",v="type",_="vendor",E="version",m="architecture",I="console",y="mobile",S="tablet",T="smarttv",A="wearable",w="embedded",D={extend:function(e,t){var n={};for(var i in e)t[i]&&t[i].length%2===0?n[i]=t[i].concat(e[i]):n[i]=e[i];return n},has:function(e,t){return"string"==typeof e&&t.toLowerCase().indexOf(e.toLowerCase())!==-1},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===f?e.replace(/[^\d\.]/g,"").split(".")[0]:a},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},b={rgx:function(){for(var e,t,n,i,r,o,s,u=0,f=arguments;u<f.length&&!o;){var p=f[u],g=f[u+1];if(typeof e===l){e={};for(i in g)g.hasOwnProperty(i)&&(r=g[i],typeof r===d?e[r[0]]=a:e[r]=a)}for(t=n=0;t<p.length&&!o;)if(o=p[t++].exec(this.getUA()))for(i=0;i<g.length;i++)s=o[++n],r=g[i],typeof r===d&&r.length>0?2==r.length?typeof r[1]==c?e[r[0]]=r[1].call(this,s):e[r[0]]=r[1]:3==r.length?typeof r[1]!==c||r[1].exec&&r[1].test?e[r[0]]=s?s.replace(r[1],r[2]):a:e[r[0]]=s?r[1].call(this,s,r[2]):a:4==r.length&&(e[r[0]]=s?r[3].call(this,s.replace(r[1],r[2])):a):e[r]=s?s:a;u+=2}return e},str:function(e,t){for(var n in t)if(typeof t[n]===d&&t[n].length>0){for(var i=0;i<t[n].length;i++)if(D.has(t[n][i],e))return n===u?a:n}else if(D.has(t[n],e))return n===u?a:n;return e}},R={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},O={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[h,E],[/(opios)[\/\s]+([\w\.]+)/i],[[h,"Opera Mini"],E],[/\s(opr)\/([\w\.]+)/i],[[h,"Opera"],E],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],[h,E],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[h,"IE"],E],[/(edge)\/((\d+)?[\w\.]+)/i],[h,E],[/(yabrowser)\/([\w\.]+)/i],[[h,"Yandex"],E],[/(comodo_dragon)\/([\w\.]+)/i],[[h,/_/g," "],E],[/(micromessenger)\/([\w\.]+)/i],[[h,"WeChat"],E],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[E,[h,"MIUI Browser"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[h,/(.+)/,"$1 WebView"],E],[/android.+samsungbrowser\/([\w\.]+)/i,/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[E,[h,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[h,E],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/juc.+(ucweb)[\/\s]?([\w\.]+)/i],[[h,"UCBrowser"],E],[/(dolfin)\/([\w\.]+)/i],[[h,"Dolphin"],E],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[h,"Chrome"],E],[/;fbav\/([\w\.]+);/i],[E,[h,"Facebook"]],[/fxios\/([\w\.-]+)/i],[E,[h,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[E,[h,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[E,h],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[h,[E,b.str,R.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[h,E],[/(navigator|netscape)\/([\w\.-]+)/i],[[h,"Netscape"],E],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[h,E]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[m,"amd64"]],[/(ia32(?=;))/i],[[m,D.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[m,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[m,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[m,/ower/,"",D.lowerize]],[/(sun4\w)[;\)]/i],[[m,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[m,D.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[g,_,[v,S]],[/applecoremedia\/[\w\.]+ \((ipad)/],[g,[_,"Apple"],[v,S]],[/(apple\s{0,1}tv)/i],[[g,"Apple TV"],[_,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[_,g,[v,S]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[g,[_,"Amazon"],[v,S]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[g,b.str,R.device.amazon.model],[_,"Amazon"],[v,y]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[g,_,[v,y]],[/\((ip[honed|\s\w*]+);/i],[g,[_,"Apple"],[v,y]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[_,g,[v,y]],[/\(bb10;\s(\w+)/i],[g,[_,"BlackBerry"],[v,y]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[g,[_,"Asus"],[v,S]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[_,"Sony"],[g,"Xperia Tablet"],[v,S]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[_,"Sony"],[g,"Xperia Phone"],[v,y]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[_,g,[v,I]],[/android.+;\s(shield)\sbuild/i],[g,[_,"Nvidia"],[v,I]],[/(playstation\s[34portablevi]+)/i],[g,[_,"Sony"],[v,I]],[/(sprint\s(\w+))/i],[[_,b.str,R.device.sprint.vendor],[g,b.str,R.device.sprint.model],[v,y]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[_,g,[v,S]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[_,[g,/_/g," "],[v,y]],[/(nexus\s9)/i],[g,[_,"HTC"],[v,S]],[/(nexus\s6p)/i],[g,[_,"Huawei"],[v,y]],[/(microsoft);\s(lumia[\s\w]+)/i],[_,g,[v,y]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[g,[_,"Microsoft"],[v,I]],[/(kin\.[onetw]{3})/i],[[g,/\./g," "],[_,"Microsoft"],[v,y]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[g,[_,"Motorola"],[v,y]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[g,[_,"Motorola"],[v,S]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[_,D.trim],[g,D.trim],[v,T]],[/hbbtv.+maple;(\d+)/i],[[g,/^/,"SmartTV"],[_,"Samsung"],[v,T]],[/\(dtv[\);].+(aquos)/i],[g,[_,"Sharp"],[v,T]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[_,"Samsung"],g,[v,S]],[/smart-tv.+(samsung)/i],[_,[v,T],g],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[_,"Samsung"],g,[v,y]],[/sie-(\w+)*/i],[g,[_,"Siemens"],[v,y]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[_,"Nokia"],g,[v,y]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[g,[_,"Acer"],[v,S]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[_,"LG"],g,[v,S]],[/(lg) netcast\.tv/i],[_,g,[v,T]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[g,[_,"LG"],[v,y]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[g,[_,"Lenovo"],[v,S]],[/linux;.+((jolla));/i],[_,g,[v,y]],[/((pebble))app\/[\d\.]+\s/i],[_,g,[v,A]],[/android.+;\s(glass)\s\d/i],[g,[_,"Google"],[v,A]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],[[g,/_/g," "],[_,"Xiaomi"],[v,y]],[/android.+a000(1)\s+build/i],[g,[_,"OnePlus"],[v,y]],[/\s(tablet)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[v,D.lowerize],_,g]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[E,[h,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[h,E],[/rv\:([\w\.]+).*(gecko)/i],[E,h]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[h,E],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[h,[E,b.str,R.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[h,"Windows"],[E,b.str,R.os.windows.version]],[/\((bb)(10);/i],[[h,"BlackBerry"],E],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[h,E],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[h,"Symbian"],E],[/\((series40);/i],[h],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[h,"Firefox OS"],E],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[h,E],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[h,"Chromium OS"],E],[/(sunos)\s?([\w\.]+\d)*/i],[[h,"Solaris"],E],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[h,E],[/(haiku)\s(\w+)/i],[h,E],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[h,"iOS"],[E,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[h,"Mac OS"],[E,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[h,E]]},N=function(e,t){if(!(this instanceof N))return new N(e,t).getResult();var n=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:s),i=t?D.extend(O,t):O;return this.getBrowser=function(){var e=b.rgx.apply(this,i.browser);return e.major=D.major(e.version),e},this.getCPU=function(){return b.rgx.apply(this,i.cpu)},this.getDevice=function(){return b.rgx.apply(this,i.device)},this.getEngine=function(){return b.rgx.apply(this,i.engine)},this.getOS=function(){return b.rgx.apply(this,i.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};N.VERSION=o,N.BROWSER={NAME:h,MAJOR:p,VERSION:E},N.CPU={ARCHITECTURE:m},N.DEVICE={MODEL:g,VENDOR:_,TYPE:v,CONSOLE:I,MOBILE:y,SMARTTV:T,TABLET:S,WEARABLE:A,EMBEDDED:w},N.ENGINE={NAME:h,VERSION:E},N.OS={NAME:h,VERSION:E
},typeof t!==l?(typeof e!==l&&e.exports&&(t=e.exports=N),t.UAParser=N):"function"===c&&n(161)?(i=function(){return N}.call(t,n,t,e),!(i!==a&&(e.exports=i))):r.UAParser=N;var P=r.jQuery||r.Zepto;if(typeof P!==l){var C=new N;P.ua=C.getResult(),P.ua.get=function(){return C.getUA()},P.ua.set=function(e){C.setUA(e);var t=C.getResult();for(var n in t)P.ua[n]=t[n]}}})("object"==typeof window?window:this)}),(function(e,t){(function(t){e.exports=t}).call(t,{})}),(function(e,t){e.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(e){return e.getId()}]}}),(function(e,t){e.exports={provides:"browserVersion",getter:["sources/browser_id",function(e){return e.getVersion()}]}}),(function(e,t,n){var i=n(165).compareVersion;e.exports={fieldsNeeded:["browserVersion","browserId"],match:function(e,t){var n=t.value,r=e.browserId,a=e.browserVersion;if(0===n.indexOf(r)){var o=n.substr(r.length);return 0===i(a,o)}return!1}}}),(function(e,t,n){var i=n(2);t.compareVersion=function(e,t){if(!t)return 0;for(var n=t.toString().split("."),r=e.toString().split("."),a=0;a<n.length;a++){if(i.isUndefined(r[a]))return-1;if(isNaN(Number(r[a]))){if(r[a]!==n[a])return-1}else{if(Number(r[a])<Number(n[a]))return-1;if(Number(r[a])>Number(n[a]))return 1}}return 0}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(167)),e.registerAudienceMatcher("campaign",n(168))}}),(function(e,t,n){var i=n(88);e.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}}),(function(e,t,n){var i=n(169);e.exports={fieldsNeeded:["campaign"],match:function(e,t){return i.hasMatch(t.value,t.match,e.campaign)}}}),(function(e,t,n){var i=n(2);t.hasMatch=function(e,t,n){var r=!i.isUndefined(n)&&null!==n,a=!i.isUndefined(e)&&null!==e,o=t||(a?"exact":"exists");switch(o){case"exists":return r;case"exact":return r&&String(n)===e;case"substring":return r&&String(n).indexOf(e)>-1;case"regex":try{if(a&&r){var s=new RegExp(e);return s.test(String(n))}return!1}catch(e){}return!1;case"range":var u=e.split(":"),c=parseFloat(u[0]),l=parseFloat(u[1]),d=parseFloat(n);return d>=c&&d<=l;default:return!1}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(171)),e.registerAudienceMatcher("cookies",n(172))}}),(function(e,t,n){var i=n(65);e.exports={provides:"cookies",isLazy:!0,getter:[function(){return i.getAll()}]}}),(function(e,t,n){var i=n(169);e.exports={fieldsNeeded:["cookies"],match:function(e,t){var n=t.name,r=t.value,a=t.match,o=e.cookies[n];return i.hasMatch(r,a,o)}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(174));var t=n(175);e.registerAudienceMatcher("custom_attribute",t),e.registerAudienceMatcher("custom_dimension",t)}}),(function(e,t,n){var i=n(2),r=n(11),a=n(12),o=n(17),s=o.get("stores/dimension_data");e.exports={provides:"custom",attributionType:a.AttributionTypes.LAST_TOUCH,restorer:function(e){return i.reduce(e,(function(e,t,n){var a=t,o=n,u=s.getByApiName(n),c=s.getById(n);return i.isObject(t)&&!t.id&&(u&&!c?(o=u.id,a={id:u.segmentId||u.id,value:t.value}):c||r.warn("Unable to determine ID for custom attribute:",n,"; segmentation is disabled.")),e[o]=a,e}),{})},shouldTrack:!0}}),(function(e,t,n){var i=n(2),r=n(169);t.match=function(e,t){var n;return e.custom&&(n=e.custom[t.name]),i.isObject(n)&&(n=n.value),r.hasMatch(t.value,t.match,n)}}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/device",n(177)),e.registerVisitorProfileProvider(n(178)),e.registerAudienceMatcher("device",n(179))}}),(function(e,t,n){var i=n(158);t.getDevice=function(){var e=i.get().device;return"unknown"!==e.id?e.id:"tablet"===e.type?"tablet":e.isMobile?"mobile":"desktop"}}),(function(e,t){e.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(e){return e.getDevice()}]}}),(function(e,t){e.exports={fieldsNeeded:["device"],match:function(e,t){return e.device===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(181)),e.registerAudienceMatcher("referrer",n(182))}}),(function(e,t,n){var i=n(66),r=n(104);e.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var e=r.getReferrer()||i.getReferrer();return""===e&&(e=null),e}]}}),(function(e,t,n){var i=n(183);t.fieldsNeeded=["referrer"],t.match=function(e,t){return null!==e.referrer&&i(e.referrer,t)}}),(function(e,t,n){function i(e){var t=e.indexOf("?");return t!==-1&&(e=e.substring(0,t)),t=e.indexOf("#"),t!==-1&&(e=e.substring(0,t)),e}function r(e){return a(i(e))}function a(e,t){e=e.replace("/?","?"),e=e.toLowerCase().replace(/[\/&?]+$/,"");var n=l.slice(0);t||(n=n.concat(u));for(var i=n.length,r=0;r<i;r++){var a=n[r],o=new RegExp("^"+a);e=e.replace(o,"")}return e}function o(e){var t=e.split("?");if(t[1]){var n=t[1].split("#"),i=n[0],r=n[1],a=i.split("&"),o=[];return s.each(a,(function(e){0!==e.indexOf(c)&&o.push(e)})),t[1]="",o.length>0&&(t[1]="?"+o.join("&")),r&&(t[1]+="#"+r),t.join("")}return e}var s=n(2);e.exports=function(e,t){e=o(e);var n=t.value;switch(t.match){case"exact":return e=a(e),e===a(n);case"regex":try{return Boolean(e.match(n))}catch(e){}return!1;case"simple":return e=r(e),n=r(n),e===n;case"substring":return e=a(e,!0),n=a(n,!0),e.indexOf(n)!==-1;default:return!1}};var u=["www."],c="optimizely_",l=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"]}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(185)),e.registerAudienceMatcher("source_type",n(187))}}),(function(e,t,n){var i=n(66),r=n(186),a=n(88),o=n(104),s=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","https://(www)?\\.google\\..*?/$","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"];e.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(e,t){var n=function(){if(a.getQueryParamValue("utm_source")||a.getQueryParamValue("gclid")||a.getQueryParamValue("otm_source"))return"campaign";for(var e=o.getReferrer()||i.getReferrer(),t=0;t<s.length;t++){var n=s[t],u=e.match(n);if(u)return"search"}return e&&r.getDomain(e)!==r.getDomain(a.getUrl())?"referral":"direct"},u=function(e,t){return!e||"direct"!==t},c=e(),l=n();u(c,l)&&t(l)}}]}}),(function(e,t){t.getDomain=function(e,t){if(!e)return"";try{return t?e.match(/:\/\/(.[^\/]+)/)[1]:e.match(/:\/\/(?:www[0-9]?\.)?(.[^\/:]+)/)[1]}catch(e){return""}}}),(function(e,t,n){var i=n(169);t.fieldsNeeded=["source_type"],t.match=function(e,t){return i.hasMatch(t.value,t.match,e.source_type)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(189)),e.registerVisitorProfileProvider(n(190)),e.registerAudienceMatcher("time_and_day",n(191))}}),(function(e,t,n){var i=n(14);e.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}}),(function(e,t){e.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}}),(function(e,t,n){var i=n(192);t.fieldsNeeded=["currentTimestamp"],t.match=function(e,t){return i.test(t.value,new Date(e.currentTimestamp))}}),(function(e,t,n){function i(e){var t=e.split(o);if(3!==t.length)throw new Error("Invalid time and day string "+e);var n=t[2].split(s);return{start_time:t[0],end_time:t[1],days:n}}function r(e){var t=e.split(u);if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+e);return 60*parseInt(t[0],10)+parseInt(t[1],10)}var a=n(2),o="_",s=",",u=":";t.test=function(e,t){var n=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],o=i(e),s=r(o.start_time),u=r(o.end_time),c=60*t.getHours()+t.getMinutes(),l=n[t.getDay()];return c>=s&&c<=u&&a.includes(o.days,l)}}),(function(e,t,n){e.exports=function(e){e.registerAnalyticsTracker("avro",n(194))}}),(function(e,t,n){function i(e){function t(e,t,n){var i=h({type:R,name:n,value:t});return i&&e.push(i),e}var n=m.keys(z),i=m.omit(e,n),r=m.pick(e,n),a=m.reduce(i,t,[]),o=m.reduce(r,(function(e,n,i){var r=z[i];r.excludeFeature||t(a,n,i);try{r.validate(n),n=r.sanitize(n),e.push({name:i,value:n})}catch(e){I.emitError(new B("Bad value for eventMetrics["+i+"]: "+e.message))}return e}),[]);return{eventFeatures:a,eventMetrics:o}}function r(e,t){var n=u(e,t),r=i(e.eventTags);return r.eventFeatures.push(h({type:b,name:"",value:e.viewCategory})),m.extend(n,r,{eventEntityId:e.pageId,eventType:O,eventName:e.pageId})}function a(e,t,n){var i=u(e,t),r=e.event.pageId,a=[],o=[];if(a.push(h({type:w,name:"selector",value:e.selector})),a.push(h({type:w,name:"view_id",value:e.event.pageId})),r){var s=n.getActivationEventId(e.event.pageId);s&&o.push({eventId:n.getActivationEventId(e.event.pageId),relationship:j.VIEW_ACTIVATED})}return m.forOwn(e.eventTags,(function(e,t){var n=h({type:R,name:t,value:e},V);n&&a.push(n)})),m.extend(i,{eventEntityId:e.event.id,eventType:e.event.category,eventName:e.event.apiName,eventFeatures:a,relatedEvents:o})}function o(e,t){var n=u(e,t),r=i(e.eventTags);return m.extend(n,r,{eventEntityId:e.eventEntityId,eventType:e.eventCategory,eventName:e.eventApiName})}function s(e,t){var n=u(e,t);return n.layerStates=[],m.extend(n,{eventType:P,eventName:N})}function u(e,t){var n=f(e.userFeatures),i=p(e.activeViewStates,t),r=d(e.layerStates),a=m.isNull(U.getAnonymizeIP())?void 0:U.getAnonymizeIP();return{eventId:e.eventId,anonymizeIP:a,timestamp:e.timestamp,revision:e.revision,clientEngine:e.clientEngine,clientVersion:e.clientVersion,projectId:e.projectId,accountId:e.accountId,activationId:e.activationId,sessionId:E(e.sessionId),visitorId:e.visitorId,visitorUUID:e.visitorUUID,eventFeatures:[],eventMetrics:[],relatedEvents:[],layerStates:r,userFeatures:n,activeViews:i,isGlobalHoldback:e.isGlobalHoldback}}function c(e){var t=m.map(e.decisionTicketAudienceIds,(function(e){return{id:e}})),n=f(e.userFeatures);return{decisionId:e.decisionId,anonymizeIP:e.anonymizeIP,timestamp:e.timestamp,revision:e.revision,clientEngine:e.clientEngine,clientVersion:e.clientVersion,projectId:e.projectId,accountId:e.accountId,layerId:e.layerId,activationId:e.activationId,sessionId:E(e.sessionId),visitorId:e.visitorId,visitorUUID:e.visitorUUID,decisionTicket:{audiences:t,bucketingId:e.visitorUUID||e.visitorId},decision:g(e),userFeatures:n,isGlobalHoldback:!1}}function l(e){var t=e.decisionTicket,n=e.decision,i=m.map(t.audienceIds,(function(e){return{id:e}})),r=f(e.userFeatures),a=m.isNull(U.getAnonymizeIP())?void 0:U.getAnonymizeIP();return{decisionId:e.decisionId,anonymizeIP:a,timestamp:e.timestamp,revision:e.revision,clientEngine:e.clientEngine,clientVersion:e.clientVersion,projectId:e.projectId,accountId:e.accountId,layerId:n.layerId,activationId:e.activationId,sessionId:E(e.sessionId),visitorId:G.getRandomId(),visitorUUID:G.getUUID(),decisionTicket:{audiences:i,bucketingId:t.bucketingId},decision:g(n),userFeatures:r,isGlobalHoldback:U.isGlobalHoldback()}}function d(e){return m.map(e,(function(e){var t=null,n=e.decisionTicket;if(n){var i=m.map(n.audienceIds,(function(e){return{id:e}}));t={audiences:i,bucketingId:n.bucketingId}}return{layerId:e.layerId,revision:e.revision,decisionTicket:t,decision:g(e.decision),decisionActivationId:e.decisionActivationId,decisionSessionId:e.decisionSessionId,decisionEventId:e.decisionEventId,decisionTimestamp:e.decisionTimestamp,actionTriggered:e.actionTriggered,actionSessionId:e.actionSessionId,actionActivationId:e.actionActivationId,actionTimestamp:e.actionTimestamp}}))}function f(e){return m.reduce(e,(function(e,t){try{v(t.value),e.push(m.pick(t,["id","type","name","shouldIndex","value"]))}catch(e){V.warn("Error evaluating user feature",t,e)}return e}),[])}function p(e,t){return m.map(e,(function(e){var n=[];try{var i=t.get(e.id);n.push(h({type:b,name:"",value:i.category}))}catch(t){V.error("Unable to find Page category for Page with id",e.id)}return m.forOwn(e.metadata,(function(e,t){var i=h({type:D,name:t,value:e},V);i&&n.push(i)})),{viewId:e.id,activatedTimestamp:e.activatedTimestamp,viewFeatures:n}}))}function g(e){return m.pick(e,["experimentId","variationId","isLayerHoldback"])}function h(e){var t=m.extend({id:null,shouldIndex:!0},e);try{v(e.value)}catch(t){return void V.error("Error evaluating feature:",e,t)}return t}function v(e){if(null==e)throw new Error("Feature value is null");if("object"==typeof e){var t;try{t=k.stringify(e)}catch(e){}throw new Error('Feature value is complex: "'+t||'[object]"')}}function _(e){if(null==e)throw new Error("Metric value is null");if(!m.isNumber(e))throw new Error("Metric value is not numeric")}function E(e){return C?L:e}var m=n(2),I=n(75),y=n(101),S="https://logx.optimizely.com",T=S+"/log/decision",A=S+"/log/event",w="event",D="view_tag",b="view_category",R="tags",O="view_activated",N="client_activation",P="client_activation",C=!0,L="AUTO",V=n(11),k=n(16),F=n(83),x=n(68).create,M=n(17),U=M.get("stores/global"),G=M.get("stores/visitor_id"),B=t.Error=x("AvroError"),z={revenue:{validate:_,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:_,sanitize:Math.floor,excludeFeature:!0},value:{validate:_,sanitize:m.identity}},j={VIEW_ACTIVATED:"view_activation"};t.preRedirectPolicy=y.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT,t.postRedirectPolicy=y.PostRedirectPolicies.TRACK_AFTER_SYNC,t.nonRedirectPolicy=y.NonRedirectPolicies.TRACK_IMMEDIATELY,t.trackLayerDecision=function(e){var t=c(e);F.retryableRequest({url:T,method:"POST",data:t},t.decisionId)},t.onLayerDecision=[function(){return function(e){var t=l(e);F.retryableRequest({url:T,method:"POST",data:t},t.decisionId)}}],t.onPageActivated=["stores/view_data",function(e){return function(t){var n=r(t,e,V);F.retryableRequest({url:A,method:"POST",data:n},n.eventId)}}],t.onClientActivation=["stores/view_data",function(e){return function(t){var n=s(t,e,V);F.retryableRequest({url:A,method:"POST",data:n},n.eventId)}}],t.onCustomEvent=["stores/view_data",function(e){return function(t){var n=o(t,e);F.retryableRequest({url:A,method:"POST",data:n},n.eventId)}}],t.onClickEvent=["stores/view_data","stores/view",function(e,t){return function(n){var i=a(n,e,t);F.retryableRequest({url:A,method:"POST",data:i},i.eventId)}}]}),(function(e,t,n){function i(){var e=[],t={queue:e,push:e.push.bind(e)};l.on({filter:{type:d.TYPES.ACTION,name:"appliedAllForDecision"},handler:u.partial(r,t)}),a(t)}function r(e,t){var n=h.get(t.data.decision.layerId),i=n["integrationSettings"];if(i&&!u.isUndefined(i[y])){var r=o(t.data.decision,n);r&&(e.push(r),c.log("Pushing action.applied event to ClickTale queue. Data:",t))}}function a(e){var t=50,n=200;return f.pollFor((function(){return s()}),n,t).then((function(){u.each(e.queue,p.getGlobal(I)),e.push=p.getGlobal(I)}),(function(e){throw new Error("Polling for ClickTale timed out:",e)}))["catch"]((function(e){c.warn("Error in ClickTale plugin:",e)}))}function o(e,t){var n=u.find(t.experiments,{id:e.experimentId});if(n){var i=u.find(n.variations,{id:e.variationId});if(i)return v.generateAnalyticsString(t,n,i,e.isLayerHoldback,_,!0)}}function s(){var e=p.getGlobal(E),t=p.getGlobal(m),n=p.getGlobal(I);return u.isFunction(e)&&u.isFunction(t)&&u.isFunction(n)&&t()}var u=n(2),c=n(11),l=n(76),d=n(100),f=n(119),p=n(67),g=n(17),h=g.get("stores/layer_data"),v=n(127),_=255,E="ClickTale",m="ClickTaleIsRecording",I="ClicktaleIntegrationExperienceHandler",y="clicktale";e.exports=i}),(function(e,t,n){e.exports=function(e){e.registerViewProvider(n(197)),e.registerViewMatcher("url",n(198))}}),(function(e,t,n){var i=n(88);e.exports={provides:"url",getter:[function(){return i.getUrl()}]}}),(function(e,t,n){var i=n(183);e.exports={fieldsNeeded:["url"],match:function(e,t){return i(e.url,t)}}}),(function(e,t,n){function i(e){return"apiName: "+e.apiName+", selector: "+e.eventFilter.selector}var r=n(200),a=n(98),o=n(11),s=n(121);e.exports=function(e){var t=new r(function(e){s.updateAllViewTags();var t=a.trackClickEvent(e);t?o.log("Tracking click event:",e):o.log("Not tracking click event:",e)});e.registerEventImplementation("click",{attach:function(e){t.hasEvents()||t.listen(),t.addEvent(e),o.debug("Started listening for click event ("+i(e)+"):",e)},detach:function(e){t.removeEvent(e),t.hasEvents()||t.unlisten(),o.debug("Stopped listening for click event ("+i(e)+"):",e)}})}}),(function(e,t,n){function i(e){this.handler=e,this.events=[],this.unlistenFn=null,this.clickHandler=function(e){a.forEach(this.events,function(t){try{var n=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector;r(e,n,t)&&this.handler(t)}catch(e){c.emitError(new l("Unable to handle click for selector"+n+":"+e.message))}}.bind(this))}.bind(this)}function r(e,t,n){for(var i=e.target,r=0;i;){var o;try{o=s(i,t)}catch(o){var u={typeofElementValue:typeof i,nodeName:a.result(i,["nodeName"],null),nodeType:a.result(i,["nodeType"],null),targetName:a.result(e,["target","nodeName"],null),targetType:a.result(e,["target","nodeType"],null),numParentsTraversed:r,selector:t,errorMessage:o.message,eventId:n.id};return c.emitError(new l("Unable to evaluate match for element"),u),!1}if(o)return!0;i=i.parentElement,r++}return!1}var a=n(2),o=n(68).create,s=n(201),u=n(66),c=n(75),l=t.Error=o("ClickDelegateError");i.prototype.listen=function(){this.unlistenFn=u.addEventListener("click",this.clickHandler,!0)},i.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},i.prototype.hasEvents=function(){return this.events.length>0},i.prototype.addEvent=function(e){this.events.push(e)},i.prototype.removeEvent=function(e){this.events=a.filter(this.events,(function(t){return t.apiName!==e.apiName}))},e.exports=i}),(function(e,t,n){e.exports=n(202)}),(function(e,t){"use strict";function n(e,t){if(r)return r.call(e,t);for(var n=e.parentNode.querySelectorAll(t),i=0;i<n.length;i++)if(n[i]==e)return!0;return!1}var i=Element.prototype,r=i.matches||i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=n}),(function(e,t,n){function i(e,t){this.change=e,this.identifier=t.identifier,this.startTime=t.startTime}var r=n(2),a=n(97),o=n(204),s=n(205),u=n(17).get("stores/directive"),c=n(66),l=n(206),d=n(11),f=n(96),p=n(128).create();i.prototype.numberOfRootNodes=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes.length},i.prototype.getSiblingElements=function(e,t,n){for(var i=e,r=[],a=0;a<t;a++)n?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},i.prototype.apply=function(){this.applyDeferred=s();try{var e=this.numberOfRootNodes(this.change.value);if(!e)throw new Error("No DOM elements to be created for this change: "+this.change.value);var t={};u.shouldObserveChangesIndefinitely()||(t={timeout:r.partial(f.isTimedOut,this.startTime),onTimeout:r.partial(this.applyDeferred.reject,new Error("Unable to find selector."))}),this.unobserveSelector=p.observeSelector(this.change.selector,this.applyToElement.bind(this),t);var n=c.querySelectorAll(this.change.selector);r.each(n,this.applyToElement.bind(this))}catch(e){this.applyDeferred.reject(e)}return this.applyDeferred},i.prototype.applyToElement=function(e){var t=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(e.hasAttribute(t))return void d.debug("Not applying AppendChange to element",e,"because it was inserted by this change");var n;switch(this.change.operator){case l.DOMInsertionType.AFTER:n=l.insertAdjacentHTMLType.AFTER_END;break;case l.DOMInsertionType.APPEND:n=l.insertAdjacentHTMLType.BEFORE_END;break;case l.DOMInsertionType.BEFORE:n=l.insertAdjacentHTMLType.BEFORE_BEGIN;break;case l.DOMInsertionType.PREPEND:n=l.insertAdjacentHTMLType.AFTER_BEGIN;break;default:n=l.insertAdjacentHTMLType.BEFORE_END}e.insertAdjacentHTML(n,this.change.value),e.setAttribute(t,""),o.setData(e,this.change.id,this.identifier,[]);var i,s,u=this.numberOfRootNodes(this.change.value)-1;n===l.insertAdjacentHTMLType.BEFORE_END?(i=e.lastChild,s=this.getSiblingElements(i,u,!1)):n===l.insertAdjacentHTMLType.AFTER_BEGIN?(i=e.firstChild,s=this.getSiblingElements(i,u,!0)):n===l.insertAdjacentHTMLType.BEFORE_BEGIN?(i=e.previousSibling,s=this.getSiblingElements(i,u,!1)):n===l.insertAdjacentHTMLType.AFTER_END&&(i=e.nextSibling,s=this.getSiblingElements(i,u,!0)),s.unshift(i),r.each(s,function(e){var n=e.nodeType===Node.ELEMENT_NODE?e:c.parentElement(e);n.setAttribute(t,"");var i=o.getData(n,this.change.id,this.identifier)||[];i.push(e),o.setData(n,this.change.id,this.identifier,i),r.each(c.childrenOf(n),function(e){e.setAttribute(t,"")}.bind(this))}.bind(this)),this.applyDeferred.resolve()},i.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},e.exports=function(e){e.registerChangeApplier(l.changeType.APPEND,i)}}),(function(e,t){function n(e,t){return[e,t].join("_")}t.getData=function(e,t,i){var r=n(t,i);return e.optimizelyChangeData&&e.optimizelyChangeData[r]?e.optimizelyChangeData[r]:null},t.removeData=function(e,t,i){e.optimizelyChangeData&&delete e.optimizelyChangeData[n(t,i)]},t.setData=function(e,t,i,r){if("object"!=typeof r)throw new Error("setData expects an object");e.optimizelyChangeData||(e.optimizelyChangeData={}),e.optimizelyChangeData[n(t,i)]=r}}),(function(e,t,n){var i=n(2),r=n(77).Promise,a=function(){var e,t,n=new r(function(n,i){e=n,t=i});return n.resolve=function(){return e.apply(null,i.toArray(arguments)),n},n.reject=function(){return t.apply(null,i.toArray(arguments)),n},n};e.exports=a}),(function(e,t,n){var i=n(13);e.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}}),(function(e,t,n){function i(e,t){if(!r.isFunction(e.value))throw new Error("Custom code must be a function");this.change=e}var r=n(2),a=n(205),o=n(206),s=n(116);i.prototype.apply=function(){var e=a();try{s.apply(this.change.value),e.resolve()}catch(t){e.reject(t)}return e},e.exports=function(e){e.registerChangeApplier(o.changeType.CUSTOM_CODE,i)}}),(function(e,t,n){var i=n(113),r=n(114).DecisionError,a="single_experiment",o="multivariate",s={selectExperiment:function(e,t,n){if(e.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var a=e.experiments[0];if(!i.isValidExperiment(t,a))throw new r('Audience conditions failed for experiment: "'+a.id+'".');return a}};e.exports=function(e){e.registerDecider(a,s),e.registerDecider(o,s)}})]);