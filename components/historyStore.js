var Realm = require('realm');


/*
//function to take care of adding a word to the history database
exports.historyadd = function historyadd(word){
    //the schema or structure of the History data being stored
    const historySchema = {
        name: 'History',
        properties: {
          name: "string",
        }  
      }
      //opening the database based on the history schema
      Realm.open({ schema: [historySchema] })
      .then (realm => {
        //setting a local variable called 'historywords' to the data in the history database
        var historywords = realm.objects('History')
        //condition to check if there is nothing in the history database, then we store what is coming as the first word in it
        if(historywords.length == 0){
        realm.write(() => {
          const historyword = realm.create('History', {
            name: word
          })
        })
      }
      //else if there is some data already in the history database, then we use for loop to check if the word to be stored is not already in the history database
       else{
        for(var i = 0; i < historywords.length; i++){
          if (historywords[i].name == word) {
              break;
          }
          //logic to check and store the word if we have reach the end of the history data list without finding the word already in the list
          else if(i == (historywords.length - 1)){
            realm.write(() => {
              const historymarkword = realm.create('History', {
                name: word
              })
            })
          }
      }
    }
        realm.close();
      }
      )
      //this part will catch any error that will be encountered in opening the database
      .catch(error => {
        console.log('There was an error in opening the database.')
      })
      
}
*/


//function to take care of removing a word from the history database
exports.historydelete = function historydelete(word){
    //the schema or structure of the History data being stored
    const historySchema = {
      name: 'History',
      properties: {
        name: "string",
      }  
    }
    //opening the database of the history schema
    Realm.open({ schema: [historySchema] })
    .then (realm => {
      realm.write(() => {
         deleteobject = realm.objects('History').filtered(`name ="${word}"`);
         realm.delete(deleteobject);
      })
      
      
      realm.close();
    }
    )
    //this part will catch any error that will be encountered in opening the database
    .catch(error => {
      console.log('There was an error in opening the database.')
    })
}