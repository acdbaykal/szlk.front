'use strict';
import SortDirection from 'global/data/SortDirectionEnum'

const digits = "0123456789";

const letter_order = {
  tr:[
    "aAäÄªáÁàÀâÂåÅãÃæÆ", "bB", "cC", "çÇ", "dDðÐ", "eEéÉèÈêÊëË", "fF", "gG", "ğĞ", "hH", "iIİíÍìÌîÎïÏ", "jJ", "kK", "lL", "mM", "nNñÑ",
    "oOºóÓòÒôÔõÕøØ", "öÖ" ,"pP", "qQ", "rR", "sS", "şŞ", "tT", "uUúÚùÙûÛ", "üÜ", "vV", "wW", "yYýÝ", "zZ"
  ],
  de:[
    "aAäÄªáÁàÀâÂåÅãÃæÆ", "bB", "cC", "çÇ", "dDðÐ", "eEéÉèÈêÊëË", "fF", "gGğĞ", "hH", "iIİíÍìÌîÎïÏ", "jJ", "kK", "lL", "mM", "nNñÑ",
    "oOöÖºóÓòÒôÔõÕøØ","pP", "qQ","rR", "sSşŞ", "tT", "uUúÚùÙûÛ", "üÜ", "vV", "wW", "yYýÝ", "zZ"
  ]
}

function compareAscending(x, y, alphabet){ // ugly :(
  const x_digit_index = digits.indexOf(x);
  const y_digit_index = digits.indexOf(y);

  if(x_digit_index === -1 && y_digit_index > -1){
    return 1;
  }
  else if(x_digit_index > -1 && y_digit_index === -1){
    return -1;
  }
  else if(x_digit_index > -1 && y_digit_index > -1){
    return y_digit_index - x_digit_index;
  }
  else{ // both are not digits
    for(let i = 0, iLimit = alphabet.length; i < iLimit; i++){
      const char_group = alphabet[i];
      const x_char_index = char_group.indexOf(x);
      const y_char_index = char_group.indexOf(y);
      const x_found = x_char_index > -1;
      const y_found = y_char_index > -1;

      if(x_found || y_found){
        if (x_found && y_found )
          return 0;
        else if(x_found)
          return -1;
        else
          return 1;
      }
    }
  }
  return 0;
}

function compareDescending(x, y, alphabet){
  return compareAscending(x, y, alphabet) * -1;
}

export default (first, second, locale = "tr", sorting_order=SortDirection.ASCENDING)  => {
  if(first === second){
    return 0;
  }else if(first === ""){
    return 1
  }else if(second === ""){
    return -1;
  }

  const compare_function = sorting_order === SortDirection.DESCENDING ?
                              compareDescending : compareAscending;
  const first_length = first.length;
  const second_length = second.length;
  const alphabet = letter_order[locale];
  let i = 0;
  let result;
  do{
    let x = first.charAt(i);
    let y = second.charAt(i);
    result = compare_function(x, y, alphabet);
    i++;
  }while (result === 0 && i < first_length && i < second_length);

  return  result !== 0 ? result : first_length - second_length;
}
