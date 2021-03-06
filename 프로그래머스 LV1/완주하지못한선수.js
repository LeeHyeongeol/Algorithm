function solution(participant, completion) {
    //Map함수를 통해 배열의 각 요소 카운트 수를 관리하기.
const map = new Map();

    for(let i=0; i<participant.length; i++){
        let a = participant[i]
        let b = completion[i]
        
        //중복되는 경우 카운트 수 늘리기
        map.set(a,(map.get(a)||0)+1)
        //완주한 사람은 확인되면 카운트 수 줄이기
        map.set(b,(map.get(b)||0)-1)
    }
    for(let [k,v] of map){
        if(v>0) return k;
    }
    
    }