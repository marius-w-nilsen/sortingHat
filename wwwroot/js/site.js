// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var color ="#b718fa";
particlesJS("particles-js", {
    "particles":{
        "number":{
            "value":100,"density":{
                "enable":true,"value_area":410.2328774690454}},
                "color":{
                    "value":"#00bdf7"},
                    "shape":{
                        "type":"circle","stroke":{
                            "width":3,"color":"#000000"},
                            "polygon":{
                                "nb_sides":8},
                                "image":{
                                    "src":"img/github.svg","width":100,"height":100}
                            },
                            "opacity":{
                                "value":0.5,"random":false,"anim":{
                                    "enable":false,"speed":1,"opacity_min":0.1,"sync":false}
                                },
                                "size":{
                                    "value":2,"random":true,"anim":{
                                        "enable":false,"speed":3,"size_min":0.1,"sync":false}
                                    },
                                    "line_linked":{
                                        "enable":true,"distance":176.3753266952075,"color":color,"opacity":0.4,"width":1},"move":{"enable":true,"speed":12.25800503471389,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":801.7060304327614,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":1},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
                                        


 var isplaying = false; 
    document.addEventListener('keydown', function(e){
        if(isplaying == true) return; 
        isplaying = true; 
        var number = Math.floor(Math.random()*3) + 1;
        
        if(e.keyCode == 71)
        {
            document.getElementById('welcome').innerHTML = ""            
            document.getElementById('g'+number).play();
        }
          
        if(e.keyCode == 72)
         {
            document.getElementById('welcome').innerHTML = ""
              document.getElementById('h'+number).play();
        }
        if(e.keyCode == 82)
         {
            document.getElementById('welcome').innerHTML = ""
              document.getElementById('r'+number).play();
        }
        if(e.keyCode == 83)
         {
            document.getElementById('welcome').innerHTML = ""
              document.getElementById('s'+number).play();
              
        }
        if(e.keyCode == 32)
        {
            var elem = document.getElementById('welcome'); 
            window.setTimeout(SongLyrics, time); 
        
            document.getElementById('sang').play();        
        }
        });

        function griffing(){
            document.getElementById('welcome').style.color = "#7F0909"
            document.getElementById('welcome').style.webkitTextStroke = "2px #FFC500"
            document.getElementById('welcome').innerHTML = "Velkommen til GRIFFING!"
            isplaying = false;
        }
        
        function hasblas(){
            document.getElementById('welcome').style.color = "#EEE117"
            document.getElementById('welcome').style.webkitTextStroke = "2px #000000"
            document.getElementById('welcome').innerHTML = "Velkommen til HÅSBLÅS!"
            isplaying = false;
        }
        
        function ravnklo(){
            document.getElementById('welcome').style.color = "#000A90"
            document.getElementById('welcome').style.webkitTextStroke = "2px #946B2D"
            document.getElementById('welcome').innerHTML = "Velkommen til RAVNKLO!"
            isplaying = false;
        }
        
        function smygard(){
            document.getElementById('welcome').style.color = "#0D6217"
            document.getElementById('welcome').style.webkitTextStroke = "2px #AAAAAA"
            document.getElementById('welcome').innerHTML = "Velkommen til SMYGARD!"
            isplaying = false;
        }

        function sangdone(){
            isplaying = false;
            alert('here');
            document.getElementById('welcome').innerHTML = ""
        }



       

          var count = -1; 
          var time = 500; 
          var song = [{text:"Akk, pen er jeg kanskje ikke.", time:"2800"},
          {text:"Men ikke døm etter skinn og kropp.", time:"2000"},
          {text:"Hvis du finner en gløggere hatt enn meg,", time:"2700"},
          {text:"skal jeg spise meg selv helt opp.", time:"1900"},
          {text:"Ta din bowler og fikse flosshatt,", time:"2900"},
          {text:"sett den aldri så kjekt på snei:", time:"1900"},
          {text:"Jeg er Galtvorts gamle valghatt,", time:"2900"},
          {text:"og de tar hatten av for meg.", time:"2500"},
          {text:"Du har ingenting skjult i ditt hode", time:"2000"},
          {text:"som valghatten ikke kan se,", time:"2000"},
          {text:"Ta meg på, og vipps! skal jeg si deg", time:"2500"},
          {text:"hvor du passer, ferdig med det.", time:"2800"},
          {text:"Kan hende du passer i Griffing,", time:"2300"},
          {text:"hvor de tapre av hjertet bor.", time:"2400"},
          {text:"Både vågemot og edelmot", time:"2200"},
          {text:"er for griffinger passende ord.", time:"2200"},
          {text:"Eller høver du best i Håsblås?", time:"2600"},
          {text:"Er du en som er tro mot din sak?", time:"2200"},
          {text:"En håsblåser er tålmodig", time:"2400"},
          {text:"og ikke redd for å ta et tak.", time:"2900"},
          {text:"Eller kanskje du passer i Ravnklo,", time:"2400"},
          {text:"hvis du trivs best i vettugt lag.", time:"2400"},
          {text: "Der vil alle med kløkt og lærdom", time:"2500"},
          {text:"alltid finne fler av sitt slag.", time:"3000"},
          {text:"Eller blir det mon tro i Smygard", time:"2400"},
          {text:"du finner ditt sanne hjem?", time:"2500"},
          {text:"de slue vrir alt til sitt beste,", time:"2200"},
          {text:"og alt blir til beste for dem.", time:"2500"},
          {text:"Så prøv hatten på! Vær aldeles trygg,", time:"3000"},
          {text:"og ikke bli klam eller matt!", time:"2700"}, 
          {text:"Jeg tar hånd om deg(skjønt jeg ingen har).", time:"2600"},
          {text:"For jeg er en tenkehatt!", time:"8000"}];
          function SongLyrics(){
              count += 1; 
              if(count > song.length) return; 

              
             console.log(song[count].text);
            if(count + 1 >= song.length)
              document.getElementById('before').innerHTML = "";
            else
              document.getElementById('before').innerHTML = song[count + 1].text;
            
            document.getElementById('welcome').innerHTML = song[count].text
            window.setTimeout(SongLyrics, song[count].time); 
          }