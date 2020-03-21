var Realm = require('realm');

//function to take care of adding a word in the bookmark
exports.bookmarkadd = function bookmarkadd(word){
    //the schema or structure of the Bookmark data being stored
    const bookmarkSchema = {
        name: 'Bookmark',
        properties: {
          name: "string",
        }  
      }
      //opening the database of the bookmark schema
      Realm.open({ schema: [bookmarkSchema] })
      .then (realm => {
        var bookwords = realm.objects('Bookmark')
        //condition to check if there is nothing in the bookmark database, then we store what is coming as the first word in it
        if(bookwords.length == 0){
        realm.write(() => {
          const bookmarkword = realm.create('Bookmark', {
            name: word
          })
        })
      }
      //else if there is some data already in the bookmark database, then we use for loop to check if the word to be stored is not already in the bookmark database
       else{
        for(var i = 0; i < bookwords.length; i++){
          if (bookwords[i].name == word) {
              break;
          }
          //logic to check and store the word if we have reach the end of the boorkmark data list without finding the word already in the list
          else if(i == (bookwords.length - 1)){
            realm.write(() => {
              const bookmarkword = realm.create('Bookmark', {
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


exports.bookmarkdelete = function bookmarkdelete(word){
    //the schema or structure of the Bookmark data being stored
    const bookmarkSchema = {
      name: 'Bookmark',
      properties: {
        name: "string",
      }  
    }
    //opening the database of the bookmark schema
    Realm.open({ schema: [bookmarkSchema] })
    .then (realm => {
      realm.write(() => {
         deleteobject = realm.objects('Bookmark').filtered(`name ="${word}"`);
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