window.addEventListener('load',function(){
  //ui
  var
  jobs = document.querySelector('.jobs'),
  slider = document.querySelector('.jobs .slider-box .slider'),
  slideTpl = new Template(slider),
  leftControl = document.querySelector('.jobs .slider-box .left.control'),
  rightControl = document.querySelector('.jobs .slider-box .right.control'),
  //get jobs
  get=new Gate('http://localhost:3000/onejob');
  get.ok(function(data){
    var rawData=ext(data);
    //template
    slideTpl.gen(rawData);
    // check
    if (rawData.length<2) return;
    //build slider
    var s = new Slider(slider,
      {
        sInterval:3000,
        tIn:'slide_fade',
        tOut:'slide_fade',
        tDuration:'250ms',
        tFunction:'linear',
        tCross:0,
        iFirst:true
      },
      null,//willChange
      null//didChange
    );
    // controls
    leftControl.classList.add('show');
    leftControl.addEventListener('click',function(){
      s.wait();s.prev();
    });
    rightControl.classList.add('show');
    rightControl.addEventListener('click',function(){
      s.wait();s.next();
    });
    jobs.addEventListener('mouseover',function(){
      s.pause();
    });
    jobs.addEventListener('mouseout',function(){
      s.play();
    });
    //play
    s.play();
  });
  get.fail(function(err){
    //fallback
    console.log(err);
  });
  get.send();
});
