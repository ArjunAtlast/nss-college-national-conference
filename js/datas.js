/** Javascript file to store datas needed to fill the HTML template
** @author NSSCE
** @summary javascript file to store datas
*/

/*===========================*/
/*        DATA OBJECT        */
/*===========================*/


var Data = {
  /* Every data is stored as an item in Data Object*/

  /* This is a demo data */
  // demo: [
  //   {id:0, text: 'Item 1'},
  //   {id:1, text: 'Item 2'}
  // ],

  /*Accepted Papers */
  acceptedPapers: [
    {
      id: 2,
      title: "Syllable Based Automatic speech recognition for Malayalam Using Deep Auto Encoder",
      author: "Jini Cheriyan"
    },
    {
      id: 4,
      title: "Access Database Using Natural Language to Create SQL Query",
      author: "Jitesh Prasad, Khatick"
    },
    {
      id: 5,
      title: "Normalized Hybrid Wavelet Features for Speech Emotion Recognition",
      author: "Firoz Shah.A"
    },
    {
      id: 6,
      title: "Text Summarization Algorithms within Latent Semantic Analysis",
      author: "Kanitha.D.K"
    }
  ],

  keynoteSpeakers: [
    {
      id: 0,
      image: "./assets/images/avatar-placeholder.png",
      name: "John Doe",
      detail: "Detail",
      bio: (`Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.`)
    },

    {
      id: 0,
      image: "./assets/images/avatar-placeholder.png",
      name: "Christopher Nolan",
      detail: "Director",
      bio: (`Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.`)
    },
  ]
};
