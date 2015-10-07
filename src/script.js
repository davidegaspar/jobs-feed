window.addEventListener('load',function(){
  //get jobs
  get=new Gate3('http://localhost:3000/jobs');
  get.ok(function(data){
    //build slider
    new Slider(root,
      {
        sInterval:3000,
        tIn:'slide_fade',
        tOut:'slide_fade',
        tDuration:'1000ms',
        tFunction:'linear',
        tCross:0,
        iFirst:true
      },
      function(){},//willChange
      function(){}//didChange
    );
  });
  get.fail(function(err){
    //fallback
  });
  get.send();
});
