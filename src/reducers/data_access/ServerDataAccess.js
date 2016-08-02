import {createTranslation} from 'global/data/Translation';
import ajax from 'axios';

function ServerDataAcces(server_root = ""){
  function search(partial){
    const promise = new Promise((resolve, reject)=>{
      ajax.post(server_root + '/translation/'+ partial)
      .then(({data})=>{
        try{
            const translations = typeof data === "string" ? JSON.parse(response) : data;

            if(translations instanceof Array){
              const parsed = translations.map((t)=>{
                return createTranslation(t);
              });
              resolve(parsed);
            }
            else{
              reject(new Error(`Failed while parsing server's response: {json_response}`));
            }
        }
        catch(e){
           reject(e);
        }
      })
    })
    return promise;
  }

  return {
    search
  }
}


export default ServerDataAcces;
