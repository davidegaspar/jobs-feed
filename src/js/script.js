window.addEventListener('load',function(){
  //ui
  var
  slider = document.querySelector('.jobs .slider-box .slider'),
  slideTpl = new Template(slider),
  leftControl = document.querySelector('.jobs .slider-box .left.control'),
  rightControl = document.querySelector('.jobs .slider-box .right.control'),
  //get jobs
  get=new Gate('http://localhost:3000/jobs');
  get.ok(function(data){
    //build slider
    // var s = new Slider(slider,
    //   {
    //     sInterval:3000,
    //     tIn:'slide_fade',
    //     tOut:'slide_fade',
    //     tDuration:'1000ms',
    //     tFunction:'linear',
    //     tCross:0,
    //     iFirst:true
    //   },
    //   null,//willChange
    //   null//didChange
    // );
    // s.play();
    //console.log();
    slideTpl.gen(ext(data));
  });
  get.fail(function(err){
    //fallback
    console.log(err);
  });
  get.send();
});
