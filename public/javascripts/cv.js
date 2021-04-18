

$('body').on('click', '.square', function() {
    $('#modal-container').removeAttr('class').addClass('one');
    $('body').addClass('modal-active');

    setTimeout(function(){ 
        $('.modals').css('background-color', '#efefef');
     }, 500);

    if ($(this).attr('id') == "timeline") {
        console.log("timeline")
        $('.modals').html(`
        <div class="col-lg-8 offset-lg-2 col-md-12 row justify-content-between">
            <span class='animated-arrow goback'>
                <span class='the-arrow -left'>
                    <span class='shaft'></span>
                </span>
                <span class='main'>
                    <span class='text'>
                        Go back
                    </span>
                    <span class='the-arrow -right'>
                        <span class='shaft'></span>
                    </span>
                </span>
            </span>
            <h2>Timeline</h2>
    
            <span class='animated-arrow goskills'>
                <span class='the-arrow -left'>
                    <span class='shaft'></span>
                </span>
                <span class='main'>
                    <span class='text'>
                        Skills
                    </span>
                    <span class='the-arrow -right'>
                        <span class='shaft'></span>
                    </span>
                </span>
            </span>
        </div>
        <div class="col-lg-8 offset-lg-2 col-md-12 row">
            <img class="timeline" src="img/timeline.png">
        </div>
    `);

    } else {
         console.log("skills");
         $('.modals').html(`
         <div class="col-lg-8 offset-lg-2 col-md-12 row justify-content-between">
         <span class='animated-arrow goback'>
             <span class='the-arrow -left'>
                 <span class='shaft'></span>
             </span>
             <span class='main'>
                 <span class='text'>
                     Go back
                 </span>
                 <span class='the-arrow -right'>
                     <span class='shaft'></span>
                 </span>
             </span>
         </span>
         <h2>Skills</h2>
         <span class='animated-arrow gotimeline'>
             <span class='the-arrow -left'>
                 <span class='shaft'></span>
             </span>
             <span class='main'>
                 <span class='text'>
                     Timeline
                 </span>
                 <span class='the-arrow -right'>
                     <span class='shaft'></span>
                 </span>
             </span>
         </span>
         </div>
         <div class="col-lg-8 offset-lg-2 col-md-12 row">
         <div class="coluna">
             <h3>Programming</h3>
         
             <div class="row skill">
                 <span>HTML</span><span>100%</span>
                 <div class="bar"><div class="progress" style="width: 100%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>CSS</span><span>100%</span>
                 <div class="bar"><div class="progress" style="width: 100%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>SCSS</span><span>90%</span>
                 <div class="bar"><div class="progress" style="width: 90%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>Javascript</span><span>80%</span>
                 <div class="bar"><div class="progress" style="width: 80%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>jQuery</span><span>90%</span>
                 <div class="bar"><div class="progress" style="width: 90%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>PHP</span><span>70%</span>
                 <div class="bar"><div class="progress" style="width: 70%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>SQL</span><span>70%</span>
                 <div class="bar"><div class="progress" style="width: 70%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>Python</span><span>50%</span>
                 <div class="bar"><div class="progress" style="width: 50%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>NodeJS</span><span>60%</span>
                 <div class="bar"><div class="progress" style="width: 60%"></div></div>
             </div>
             
             <div class="row skill">
                 <span>MVC</span><span>60%</span>
                 <div class="bar"><div class="progress" style="width: 60%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>Django</span><span>50%</span>
                 <div class="bar"><div class="progress" style="width: 50%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>MongoDB</span><span>50%</span>
                 <div class="bar"><div class="progress" style="width: 50%"></div></div>
             </div>
         </div>
         <div class="coluna">
             <h3>Art & Design</h3>
             <div class="row skill">
                 <span>Adobe XD</span><span>90%</span>
                 <div class="bar"><div class="progress" style="width: 90%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>Adobe Photoshop</span><span>90%</span>
                 <div class="bar"><div class="progress" style="width: 90%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>Adobe Premiere</span><span>70%</span>
                 <div class="bar"><div class="progress" style="width: 70%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>Adobe After Effects</span><span>70%</span>
                 <div class="bar"><div class="progress" style="width: 70%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>Adobe Illustrator</span><span>50%</span>
                 <div class="bar"><div class="progress" style="width: 50%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>Adobe Animate</span><span>50%</span>
                 <div class="bar"><div class="progress" style="width: 50%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>Autodesk Maya</span><span>50%</span>
                 <div class="bar"><div class="progress" style="width: 50%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>ZBrush</span><span>60%</span>
                 <div class="bar"><div class="progress" style="width: 60%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>Unity</span><span>50%</span>
                 <div class="bar"><div class="progress" style="width: 50%"></div></div>
             </div>
         
             <h3>Languages</h3>
         
             <div class="row skill">
                 <span>Portuguese (Native)</span><span>100%</span>
                 <div class="bar"><div class="progress" style="width: 100%"></div></div>
             </div>
         
             <div class="row skill">
                 <span>English</span><span>100%</span>
                 <div class="bar"><div class="progress" style="width: 100%"></div></div>
             </div>
         </div>
         </div>
         `);
    }
 });


 $('body').on('click', '.animated-arrow', function() {
    if($(this).hasClass('goback')) {
        $('#modal-container').addClass('out');
        $('body').removeClass('modal-active');
        $('.modals').css('background-color', '#5C5C5C');
        $('.modals').html('');
    } else if ($(this).hasClass('goskills'))  {
        $('#skills').click();
    } else if ($(this).hasClass('gotimeline')) {
        $('#timeline').click();
    }
});

