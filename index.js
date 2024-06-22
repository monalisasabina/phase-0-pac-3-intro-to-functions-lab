
  function shout(string) {
    return string.toUpperCase();
  }
  "Hello!".toUpperCase(); // 'HELLO!'


  function whisper(string) {
    return string.toLowerCase();
  }
  "HELLO!".toLowerCase();

  function logShout(string) {
    console.log(string.toUpperCase())
  }
  logShout('HELLO'); 

  function logWhisper(string){
    console.log(string.toLowerCase())
  }
  logWhisper('HELLO'); 

  //using sayHitoHeadphones
  function sayHiToHeadphonedRoommate(string){
    if( string=== string.toLowerCase()){
      return "I can\'t hear you!" 
    } else if (string===string.toUpperCase()){
      return "YES INDEED!"
    } else if (string=== "Let\'s have dinner together!"){
      return "I would love to!"
    }  
  }