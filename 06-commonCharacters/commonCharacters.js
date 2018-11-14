/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

/**
두 줄을 인수로 사용하고 a를 반환하는 함수 f(a, b)를 씁니다.
두 문자열(복제되지 않음)에서 발견된 문자가 포함된 문자열
그들이 a에 출연하라는 명령 공백 및 문자 건너뛰기
벌써 만났다!

* 예: 일반 문자('acexivou', 'aegihobu')
* 반환: '애이우'
*
* 추가 크레딧: 두 개 이상의 입력 문자열을 처리하도록 기능을 확장합니다.
*/

var commonCharacters = function(string1, ...argsStr) {
  // TODO: Your code here!
  let cc = "";
  
  for(let string of argsStr) {
    for(let char of string1) {
      if(string.includes(char)) {
        cc += char;
      }
    }
    string1 = cc;
    cc = "";
  }

  return string1;
};
