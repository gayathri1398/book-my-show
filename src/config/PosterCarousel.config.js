
    let settings = {
        infinity:false,
        autoplay:false,
        slidesToShow:5,
        slidesToScroll:1,
        InitialSlide:0,
        responsive:[
            {
            breakpoint: 1024,
            settings :{
                slidesToShow:4,
                slidesToScroll:2,
                infinity:true,
               },
            },
          {
            breakpoint: 600,
            settings:{
                slidesToShow:3,
                slidesToScroll:2,
                InitialSlide:1,
            },
            },
            {
                breakpoint: 480,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:2,
                    InitialSlide:1,
                },
                },
     
        ]
       
    };


export default  settings;

    