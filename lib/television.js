'use strict';

// televeision properties
// power or isOn?
// volume or currentVolume
// channel or currentChannel
// resolutionType
// screenResolution
// powerConsumption

let tv = {
isOn:false,
currentVolume:0,
currentChannel:2,
displayType:"Retina",
screenResolution:"4k",
powerConsumption:"1.21 Gigawatts",
togglePower: function(){
this.isOn = !this.isOn;
},
adjustVolume:function(param){
  if (param==="up"){
this.currentVolume +=1;
  }
  else if (param==="down"){
    this.currentVolume -= 1;
  }
},
  channelChange: function(param){
    if (param==="forward"){
  this.currentChannel +=1;
    }
    else if (param==="back"){
      this.currentChannel -= 1;

}
},

};
