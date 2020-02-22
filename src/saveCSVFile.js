
module.exports = async (links, flag) => {
  let data = ""; 
  for(let i=0; i<links.length; i++){
    data += links[i] + "\n";
  }

  const fs = require('fs');
  console.log(flag);
  if(flag == 1){
    fs.writeFile("./data/links.csv", "LINKS\n" + data, function(err) {
      if(err) {
        return console.log(err);
      }

      console.log("FILE WAS CREATED!");
    }); 
  }else{
    fs.appendFile("./data/links.csv", data, function(err) {
      if(err) {
        return console.log(err);
      }

      console.log("DATA APPENDED");
    }); 
  }
}