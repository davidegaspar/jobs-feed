window.addEventListener('load',function(){
  //ui
  var
  jobs = document.querySelector('.jobs'),
  slider = document.querySelector('.jobs .slider-box .slider'),
  slideTpl = new Template(slider),
  leftControl = document.querySelector('.jobs .slider-box .left.control'),
  rightControl = document.querySelector('.jobs .slider-box .right.control'),
  error = document.querySelector('.jobs .slider-box .error');
  //get jobs
  var get=new Gate('http://localhost:3000/jobs');
  get.ok(function(data){
    var rawData=ext(data);
    // if empty
    if (rawData.length===0){
      error.classList.add('show');
      return;
    }
    //template
    slideTpl.gen(rawData);
    slider.classList.add('show');
    // if only one
    if (rawData.length==1) {
      return;
    }
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
    error.classList.add('show');
    console.log(err);
  });
  get.send();
});
