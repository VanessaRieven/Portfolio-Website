


 $('body').on('click', '.animated-arrow', function() {
    if($(this).hasClass('goback')) {
        $('#modal-container').addClass('out');
        $('body').removeClass('modal-active');
        $('.modals').css('background-color', '#5C5C5C');
    } else if ($(this).hasClass('goskills'))  {
        $('#skills').click();
    } else if ($(this).hasClass('gotimeline')) {
        $('#timeline').click();
    }
});



 function modalshow(projeto) {
    $('#modal-container').removeAttr('class').addClass('one');
    $('body').addClass('modal-active');

    setTimeout(function(){ 
        $('.modals').css('background-color', '#efefef');
     }, 500);

     if (projeto == 'stradi') {
        $('.modals').html(`
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
    <div class="col-lg-8 offset-lg-2">
        <h2>Stradivarius Remake</h2>
        <h3>Important: Made as practise, this was not made for comercial user. </h3>
    </div>
    <div class="col-lg-9 offset-lg-2 row space">
        <div class="col-lg-5">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" >
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <a href="img/projeto2/003-min.jpg" data-lightbox="stradi"><img class="d-block w-100" src="img/projeto2/003-min.jpg"></a>
                </div>
                <div class="carousel-item">
                    <a href="img/projeto2/002-min.jpg" data-lightbox="stradi"><img class="d-block w-100" src="img/projeto2/002-min.jpg"></a>
                </div>
                <div class="carousel-item">
                    <a href="img/projeto2/004-min.jpg" data-lightbox="stradi"><img class="d-block w-100" src="img/projeto2/004-min.jpg"></a>
                </div>
                <div class="carousel-item">
                    <a href="img/projeto2/006-min.jpg" data-lightbox="stradi"><img class="d-block w-100" src="img/projeto2/006-min.jpg">></a>
                </div>
                <div class="carousel-item">
                    <a href="img/projeto2/007-min.jpg" data-lightbox="stradi"><img class="d-block w-100" src="img/projeto2/007-min.jpg"></a>
                </div>
                <div class="carousel-item">
                    <a href="img/projeto2/008-min.jpg" data-lightbox="stradi"><img class="d-block w-100" src="img/projeto2/008-min.jpg"></a>
                </div>
                <div class="carousel-item">
                    <a href="img/projeto2/009-min.jpg" data-lightbox="stradi"><img class="d-block w-100" src="img/projeto2/009-min.jpg"></a>
                </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
        <div class="col-lg-6 offset-lg-1 center">
            <span>
                I wanted to create something and was wandering around clothing websites and decided to do my own remake version of the website of the clothing brand Stradivarius.
                <br><br>
                You can check this project on Behance, <a target="_blank" href="https://www.behance.net/gallery/109584451/Stradivarius-Website-Redesign">click here.</a>
            </span>
        </div>
    </div>
        `);

     } else if (projeto == 'v1') {
        $('.modals').html(`
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
    <div class="col-lg-8 offset-lg-2">
        <h2>Version 1 of my portfolio</h2>
        <h3>First website I did!</h3>
    </div>
    <div class="col-lg-9 offset-lg-2 row space">
        <div class="col-lg-5">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <a href="img/projeto1/01-min.jpg" data-lightbox="v1"><img class="d-block w-100" src="img/projeto1/01-min.jpg"></a>
                </div>
                <div class="carousel-item">
                    <a href="img/projeto1/03.gif" data-lightbox="v1"><img class="d-block w-100" src="img/projeto1/03.gif"></a>
                </div>
                <div class="carousel-item">
                    <a href="img/projeto1/04-min.png" data-lightbox="v1"><img class="d-block w-100" src="img/projeto1/04-min.png"></a>
                </div>
                <div class="carousel-item">
                    <a href="img/projeto1/05-min.png" data-lightbox="v1"><img class="d-block w-100" src="img/projeto1/05-min.png"></a>
                </div>
                <div class="carousel-item">
                    <a href="img/projeto1/06-min.png" data-lightbox="v1"><img class="d-block w-100" src="img/projeto1/06-min.png"></a>
                </div>
                <div class="carousel-item">
                    <a href="img/projeto1/07-min.png" data-lightbox="v1"> <img class="d-block w-100" src="img/projeto1/07-min.png"></a>
                </div>
                <div class="carousel-item">
                    <a href="img/projeto1/08.gif" data-lightbox="v1"><img class="d-block w-100" src="img/projeto1/08.gif"></a>
                </div>
                <div class="carousel-item">
                    <a href="img/projeto1/09-min.png" data-lightbox="v1"><img class="d-block w-100" src="img/projeto1/09-min.png"></a>
                </div>
                <div class="carousel-item">
                    <a href="img/projeto1/10-min.jpg" data-lightbox="v1"><img class="d-block w-100" src="img/projeto1/10-min.jpg"></a>
                </div>
                <div class="carousel-item">
                    <a href="img/projeto1/11-min.jpg" data-lightbox="v1"><img class="d-block w-100" src="img/projeto1/11-min.jpg"></a>
                </div>
                <div class="carousel-item">
                    <a href="img/projeto1/12-min.png" data-lightbox="v1"><img class="d-block w-100" src="img/projeto1/12-min.png"></a>
                </div>
             
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
        <div class="col-lg-6 offset-lg-1 center">
            <span>
                This was the first website I did back when I was in school learning to program for the very first time. 
                We had to do a project using the languages and frameworks we learned at the time and create something from scratch.
                <br><br>
                You can check this project on Behance, <a target="_blank" href="https://www.behance.net/gallery/82825489/Portfolio-Website-Webdesign-and-Programming">click here.</a>
            </span>
        </div>
    </div>
        `);
     } else if (projeto == 'v2') {
        $('.modals').html(`
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
    <div class="col-lg-8 offset-lg-2">
        <h2>Version 2 of my portfolio</h2>
        <h3>Project for University</h3>
    </div>
    <div class="col-lg-9 offset-lg-2 row space">
        <div class="col-lg-5">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a href="img/projects/v2.jpg" data-lightbox="v2"><img class="d-block w-100" src="img/projects/v2.jpg"></a>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
        <div class="col-lg-6 offset-lg-1 center">
            <span>
                This was a project done for University, where we had to create a website of our choice with the languages and frameworks we learned. I wanted to switch the design of my website for a while and toke the change to work on it while doing something for Uni.
                <br><br>
                More prints coming soon.
            </span>
        </div>
    </div>
        `);
     } else if (projeto == 'v3') {
        $('.modals').html(`
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
    <div class="col-lg-8 offset-lg-2">
        <h2>Version 3 portfolio</h2>
        <h3>Version 3 and current version of my portfolio</h3>
    </div>
    <div class="col-lg-9 offset-lg-2 row space">
        <div class="col-lg-5">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a href="img/projects/v3.jpg" data-lightbox="v3"><img class="d-block w-100" src="img/projects/v3.jpg"></a>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
        <div class="col-lg-6 offset-lg-1 center">
            <span>
                This is the current version of my portfolio website. I wanted to create this as a base to create projects in other languages and frameworks I'm currently learning like React, NodeJS and Django.
                <br><br>
                More prints coming soon.
            </span>
        </div>
    </div>
        `);
     }
  
 }



 