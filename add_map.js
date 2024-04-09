$('#map-image').maphilight();

document.addEventListener("DOMContentLoaded", function() {
    // Define the HTML content to be added
    var htmlContent = `
<img id="map-image" src="https://uploads-ssl.webflow.com/6602992da8068b9fa0c1b4ea/6614e90e30ab01e9c96d8931_world_map_9_2.png" usemap="#image-map">
    `;
    // Get the section element by its ID
    var section = document.getElementById("map-image-container");
    // Set the innerHTML of the section to the defined HTML content
    section.innerHTML = htmlContent;
    
    var customcontainer = document.getElementById("custom-container");
    var mapsectionhtml = `
<map name="image-map">
                                        
                                        <area 
                                        data-highlight-image="/static/images/southafrica2.jpg" data-text="Kenya specific info"
                                        alt="southafrica" shape="poly" coords="306,1074,310,1083,319,1089,323,1085,332,1086,336,1082,350,1082,355,1084,359,1081,362,1082,365,1079,371,1079,381,1074,399,1056,408,1041,417,1035,420,1021,415,1022,414,1026,408,1026,402,1022,404,1013,411,1011,411,1001,407,990,407,983,395,983,390,986,385,988,379,993,377,993,375,999,370,1002,367,1006,364,1013,356,1014,345,1010,343,1011,341,1015,335,1022,331,1022,325,1022,322,1018,325,1014,321,1007,321,1035,316,1039,310,1040,301,1039,297,1035,294,1037,303,1057,308,1065,309,1070,306,1073"  nohref="nohref" />
                                    
                    
                                        <area 
                                        data-highlight-image="/static/images/kenya3.jpg" data-text="Kenya specific info"
                                        alt="kenya" shape="poly" coords="469,838,458,831,459,826,429,811,430,801,437,795,439,786,437,781,434,778,434,776,431,771,438,764,442,765,442,770,448,771,458,775,463,778,473,778,476,775,481,773,484,775,487,775,483,780,482,810,486,816,481,822,478,822,471,837"  nohref="nohref" />
                                            
                                      
                                        <area  target=""  
                                        data-highlight-image="/static/images/france.jpg" data-text="Kenya specific info"
                                        shape="poly" alt="france"   coords="153,438,158,442,167,443,172,442,176,444,180,446,184,446,187,447,187,440,197,436,205,438,212,440,222,433,216,428,216,423,215,420,218,417,216,408,210,409,221,395,226,380,199,371,183,357,178,356,175,358,175,365,174,367,165,373,165,375,155,374,151,372,149,373,151,378,151,383,146,383,134,382,127,385,129,391,137,393,147,398,151,408,157,417,152,435"  nohref="nohref" />
                                            
                                        <area
                                        data-highlight-image="/static/images/muscat.jpg" data-text="Kenya specific info"
                                        alt ="oman" shape="poly" coords="571,654,578,672,584,669,593,669,595,666,595,664,597,663,605,661,605,659,607,656,610,654,614,653,615,650,616,642,620,641,629,629,630,625,621,615,612,613,604,605,599,604,599,611,596,614,594,623,597,627,593,645,569,653"  nohref="nohref" />

                                        <area 
                                        data-highlight-image="/static/images/egypt.jpg" data-text="Kenya specific info"
                                        alt ="egypt" shape="poly" coords="360,548,360,626,447,626,441,623,439,613,427,586,423,582,424,578,415,566,415,559,419,559,430,576,435,563,429,551,413,551,409,547,400,549,392,554,368,548"                         nohref="nohref" />


                                        <area 
                                        data-highlight-image="/static/images/nigeria.jpg" data-text="Kenya specific info"
                                        alt="nigeria" shape="poly" coords="187,753,186,738,195,723,195,717,193,713,194,708,199,699,211,697,216,704,226,701,233,705,239,705,245,701,254,701,259,703,267,699,270,698,272,703,272,706,276,709,276,713,270,715,263,734,259,734,257,740,253,750,250,750,247,747,241,749,232,758,231,763,227,764,227,766,217,767,213,769,208,767,208,760,202,754,193,752,189,752"  nohref="nohref" />

                                    
                                        <area 
                                        data-highlight-image="/static/images/india.jpg" data-text="Kenya specific info"
                                        alt="india" shape="poly" coords="724,578,746,551,747,544,752,539,743,534,741,521,748,520,756,520,766,515,771,513,778,523,781,537,774,539,776,550,786,552,794,558,787,569,810,583,823,584,828,590,850,591,850,579,854,578,858,585,862,589,882,587,882,581,882,580,886,579,891,574,895,571,901,567,907,569,912,567,915,571,914,574,922,575,919,581,914,582,907,587,904,595,903,597,898,611,891,610,892,616,890,619,888,626,886,619,883,613,881,615,878,615,877,618,877,613,886,603,883,601,867,601,865,593,856,592,851,593,857,599,852,604,856,610,855,613,858,627,852,628,851,626,850,631,842,634,841,644,830,648,808,667,806,674,801,675,799,678,791,680,789,703,786,709,787,716,787,721,783,723,781,728,776,734,774,739,770,741,762,738,759,733,758,724,754,715,750,709,747,701,743,687,737,677,733,656,733,651,730,645,733,638,732,632,730,626,727,628,726,634,716,637,705,629,712,625,712,620,704,621,699,615,702,610,713,608,718,606,717,596,711,596,712,590,707,586,712,578,720,578,719,578"  nohref="nohref" />

                         
                                        <area
                                        data-highlight-image="/static/images/ivorycoast.jpg" data-text="Kenya specific info"
                                        alt="ivorycoast" shape="poly" coords="104,770,106,759,97,752,97,745,100,740,104,738,102,731,101,727,104,724,108,725,114,722,117,725,121,724,128,728,139,727,144,738,140,746,138,753,141,761,142,765,125,763,111,768"  nohref="nohref" />
                                    
                                    
                                        <area 
                                        data-highlight-image="/static/images/england.jpg" data-text="Kenya specific info"
                                        alt="england" shape="poly" coords="121,365,131,356,144,349,133,350,130,348,124,349,122,347,132,340,131,336,130,330,141,331,139,327,141,323,137,320,139,313,125,315,116,292,126,276,139,273,140,277,133,286,150,286,140,300,138,303,150,306,155,315,163,321,165,327,159,327,166,335,176,335,178,340,173,347,169,350,173,353,169,359,153,359,149,361,140,360,134,366,125,367"  nohref="nohref" />
                                        
                                       
                                        <area 
                                        data-highlight-image="/static/images/morocco.jpg" data-text="Kenya specific info"
                                        alt="morocco" shape="poly" coords="62,578,82,568,89,557,87,553,92,541,93,534,112,525,120,508,129,515,143,514,149,517,151,532,156,540,154,542,143,542,138,545,133,546,136,551,126,555,120,560,115,560,111,562,106,563,96,570,96,579,64,580"  nohref="nohref" />
                                        
                                        <area target="" alt="singapore"   coords="966,778,10" shape="circle"
                                            data-maphilight="{&quot;strokeColor&quot;:&quot;FFFFFF&quot;,&quot;strokeWidth&quot;:1,&quot;fillColor&quot;:&quot;FFFFFF&quot;,&quot;fillOpacity&quot;:0.6,&quot;alwaysOn&quot;:true}"
                                            data-highlight-image="/static/images/singapore.jpg" data-text="Kenya specific info">
                                        
                                            <area target="" alt="mauritius"   coords="612,959,10" shape="circle"
                                    data-maphilight="{&quot;strokeColor&quot;:&quot;FFFFFF&quot;,&quot;strokeWidth&quot;:1,&quot;fillColor&quot;:&quot;FFFFFF&quot;,&quot;fillOpacity&quot;:0.6,&quot;alwaysOn&quot;:true}"
                                            data-highlight-image="/static/images/mauritius.jpg" >
                                        <!-- <area target="" alt="saudi" title="saudi" href="saudi" coords="474,384,475,402,441,413,415,426,416,418,398,416,394,422,342,336,354,331,356,316,364,313,400,332,415,333,419,340,426,340,441,364,452,372,457,382" shape="poly"> -->
                                        
                                    </map>
`;
    customcontainer.innerHTML = mapsectionhtml;
  	imageMapResize();

});