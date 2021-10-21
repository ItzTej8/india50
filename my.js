

window.odometerOptions = {
    //auto: false, // Don't automatically initialize everything with class 'odometer'
    //selector: '.my-numbers', // Change the selector used to automatically find things to be animated
    format: '(,ddd).dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
    duration: 1, // Change how long the javascript expects the CSS animation to take
    theme: 'minimal', // Specify the theme (if you have more than one theme css file on the page)
    //animation: 'count' // Count is a simpler animation method which just increments the value,
                       // use it when you're looking for something more subtle.
  };
channelcount = 50;
function LoadData() {
  var googleApiCallURL = "";
  var channelList = [];
  var channelName = [];
  var channelImage = [];
  const apiKey = "AIzaSyBH8j33xsDCE-hIIpUt1WZOFKmceq_f7zo";
  $.getJSON("channels.json", function (channels) {
    channelList = channels.reverse();

    googleApiCallURL =
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&statistics&key=${apiKey}&id=` +
      channelList;
    $.getJSON(googleApiCallURL, function (result) {
      console.log(result);
      ytJSON = result;
      var iteration = 0;
      while (iteration <= Math.min(channelcount - 1, result.items.length - 1)) {
        var channelNumber = channelList.indexOf(result.items[iteration].id) + 1;
        channelName[iteration] = result.items[iteration].snippet.title;
        channelImage[iteration] =
          result.items[iteration].snippet.thumbnails.medium.url;

        $(".Name" + channelNumber).html(channelName[iteration]);
        //$('.channel_' + channelNumber + ' .subscriberCount').html(subscriberCount[iteration]);
        $(".img_" + channelNumber).attr("src", channelImage[iteration]);
        iteration++;
      }
    });
  });
}
LoadData();
setInterval(LoadData, 43200 * 1000);

let rndInterval= (x,y)=>x+(y-x+1)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0
console.log(rndInterval(4,8)*1000)

/*-------------------------  Update Counters 1 by 1  --------------------- */

var channelList = [];
$.getJSON("channels.json", function (channels) {
  channelList = channels.reverse();
  api_response1 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[0];
  api_response2 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[1];
  api_response3 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[2];
  api_response4 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[3];
  api_response5 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[4];
  api_response6 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[5];
  api_response7 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[6];
  api_response8 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[7];
  api_response9 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[8];
  api_response10 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[9];
  api_response11 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[10];
  api_response12 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[11];
  api_response13 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[12];
  api_response14 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[13];
  api_response15 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[14];
  api_response16 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[15];
  api_response17 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[16];
  api_response18 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[17];
  api_response19 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[18];
  api_response20 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[19];
  api_response21 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[20];
  api_response22 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[21];
  api_response23 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[22];
  api_response24 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[23];
  api_response25 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[24];
  api_response26 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[25];
  api_response27 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[26];
  api_response28 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[27];
  api_response29 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[28];
  api_response30 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[29];
  api_response31 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[30];
  api_response32 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[31];
  api_response33 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[32];
  api_response34 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[33];
  api_response35 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[34];
  api_response36 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[35];
  api_response37 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[36];
  api_response38 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[37];
  api_response39 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[38];
  api_response40 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[39];
  api_response41 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[40];
  api_response42 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[41];
  api_response43 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[42];
  api_response44 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[43];
  api_response45 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[44];
  api_response46 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[45];
  api_response47 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[46];
  api_response48 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[47];
  api_response49 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[48];
  api_response50 = `https://socialcounts.in/api/counter/youtube-live-subscriber-count/` + channelList[49];


});

countNo1 = document.getElementById("Count1");
countNo2 = document.getElementById("Count2");
countNo3 = document.getElementById("Count3");
countNo4 = document.getElementById("Count4");
countNo5 = document.getElementById("Count5");
countNo6 = document.getElementById("Count6");
countNo7 = document.getElementById("Count7");
countNo8 = document.getElementById("Count8");
countNo9 = document.getElementById("Count9");
countNo10 = document.getElementById("Count10");
countNo11 = document.getElementById("Count11");
countNo12 = document.getElementById("Count12");
countNo13 = document.getElementById("Count13");
countNo14 = document.getElementById("Count14");
countNo15 = document.getElementById("Count15");
countNo16 = document.getElementById("Count16");
countNo17 = document.getElementById("Count17");
countNo18 = document.getElementById("Count18");
countNo19 = document.getElementById("Count19");
countNo20 = document.getElementById("Count20");
countNo21 = document.getElementById("Count21");
countNo22 = document.getElementById("Count22");
countNo23 = document.getElementById("Count23");
countNo24 = document.getElementById("Count24");
countNo25 = document.getElementById("Count25");
countNo26 = document.getElementById("Count26");
countNo27 = document.getElementById("Count27");
countNo28 = document.getElementById("Count28");
countNo29 = document.getElementById("Count29");
countNo30 = document.getElementById("Count30");
countNo31 = document.getElementById("Count31");
countNo32 = document.getElementById("Count32");
countNo33 = document.getElementById("Count33");
countNo34 = document.getElementById("Count34");
countNo35 = document.getElementById("Count35");
countNo36 = document.getElementById("Count36");
countNo37 = document.getElementById("Count37");
countNo38 = document.getElementById("Count38");
countNo39 = document.getElementById("Count39");
countNo40 = document.getElementById("Count40");
countNo41 = document.getElementById("Count41");
countNo42 = document.getElementById("Count42");
countNo43 = document.getElementById("Count43");
countNo44 = document.getElementById("Count44");
countNo45 = document.getElementById("Count45");
countNo46 = document.getElementById("Count46");
countNo47 = document.getElementById("Count47");
countNo48 = document.getElementById("Count48");
countNo49 = document.getElementById("Count49");
countNo50 = document.getElementById("Count50");

let subCount = 0;

/* ----------- random Intervals -----------*/
setInterval(() => {requestCall1(api_response1);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall2(api_response2);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall3(api_response3);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall4(api_response4);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall5(api_response5);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall6(api_response6);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall7(api_response7);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall8(api_response8);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall9(api_response9);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall10(api_response10);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall11(api_response11);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall12(api_response12);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall13(api_response13);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall14(api_response14);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall15(api_response15);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall16(api_response16);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall17(api_response17);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall18(api_response18);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall19(api_response19);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall20(api_response20);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall21(api_response21);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall22(api_response22);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall23(api_response23);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall24(api_response24);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall25(api_response25);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall26(api_response26);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall27(api_response27);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall28(api_response28);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall29(api_response29);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall30(api_response30);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall31(api_response31);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall32(api_response32);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall33(api_response33);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall34(api_response34);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall35(api_response35);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall36(api_response36);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall37(api_response37);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall38(api_response38);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall39(api_response39);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall40(api_response40);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall41(api_response41);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall42(api_response42);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall43(api_response43);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall44(api_response44);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall45(api_response45);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall46(api_response46);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall47(api_response47);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall48(api_response48);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall49(api_response49);}, rndInterval(10,30)*1000);
setInterval(() => {requestCall50(api_response50);}, rndInterval(10,30)*1000);

  
const requestCall1=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo1.innerHTML=subCount;});
const requestCall2=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo2.innerHTML=subCount;});
const requestCall3=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo3.innerHTML=subCount;});
const requestCall4=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo4.innerHTML=subCount;});
const requestCall5=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo5.innerHTML=subCount;});
const requestCall6=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo6.innerHTML=subCount;});
const requestCall7=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo7.innerHTML=subCount;});
const requestCall8=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo8.innerHTML=subCount;});
const requestCall9=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo9.innerHTML=subCount;});
const requestCall10=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo10.innerHTML=subCount;});
const requestCall11=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo11.innerHTML=subCount;});
const requestCall12=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo12.innerHTML=subCount;});
const requestCall13=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo13.innerHTML=subCount;});
const requestCall14=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo14.innerHTML=subCount;});
const requestCall15=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo15.innerHTML=subCount;});
const requestCall16=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo16.innerHTML=subCount;});
const requestCall17=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo17.innerHTML=subCount;});
const requestCall18=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo18.innerHTML=subCount;});
const requestCall19=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo19.innerHTML=subCount;});
const requestCall20=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo20.innerHTML=subCount;});
const requestCall21=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo21.innerHTML=subCount;});
const requestCall22=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo22.innerHTML=subCount;});
const requestCall23=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo23.innerHTML=subCount;});
const requestCall24=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo24.innerHTML=subCount;});
const requestCall25=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo25.innerHTML=subCount;});
const requestCall26=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo26.innerHTML=subCount;});
const requestCall27=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo27.innerHTML=subCount;});
const requestCall28=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo28.innerHTML=subCount;});
const requestCall29=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo29.innerHTML=subCount;});
const requestCall30=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo30.innerHTML=subCount;});
const requestCall31=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo31.innerHTML=subCount;});
const requestCall32=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo32.innerHTML=subCount;});
const requestCall33=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo33.innerHTML=subCount;});
const requestCall34=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo34.innerHTML=subCount;});
const requestCall35=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo35.innerHTML=subCount;});
const requestCall36=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo36.innerHTML=subCount;});
const requestCall37=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo37.innerHTML=subCount;});
const requestCall38=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo38.innerHTML=subCount;});
const requestCall39=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo39.innerHTML=subCount;});
const requestCall40=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo40.innerHTML=subCount;});
const requestCall41=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo41.innerHTML=subCount;});
const requestCall42=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo42.innerHTML=subCount;});
const requestCall43=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo43.innerHTML=subCount;});
const requestCall44=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo44.innerHTML=subCount;});
const requestCall45=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo45.innerHTML=subCount;});
const requestCall46=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo46.innerHTML=subCount;});
const requestCall47=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo47.innerHTML=subCount;});
const requestCall48=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo48.innerHTML=subCount;});
const requestCall49=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo49.innerHTML=subCount;});
const requestCall50=(apiCall)=>fetch(apiCall).then((blob)=>blob.json()).then((data)=>{subCount=data.est_sub;countNo50.innerHTML=subCount;});

