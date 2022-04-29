# 🔒 문제

김코딩과 박해커는 사무실 이사를 위해 짐을 미리 싸 둔 뒤, 짐을 넣을 박스를 사왔다. 박스를 사오고 보니 각 이사짐의 무게는 들쭉날쭉한 반면, 박스는 너무 작아서 한번에 최대 2개의 짐 밖에 넣을 수 없었고 무게 제한도 있었다.

예를 들어, 짐의 무게가 [70kg, 50kg, 80kg, 50kg]이고 박스의 무게 제한이 100kg이라면 2번째 짐과 4번째 짐은 같이 넣을 수 있지만 1번째 짐과 3번째 짐의 무게의 합은 150kg이므로 박스의 무게 제한을 초과하여 같이 넣을 수 없다.

박스를 최대한 적게 사용하여 모든 짐을 옮기려고 합니다.

짐의 무게를 담은 배열 stuff와 박스의 무게 제한 limit가 매개변수로 주어질 때, 모든 짐을 옮기기 위해 필요한 박스 개수의 최소값을 return 하도록 movingStuff 함수를 작성하세요.

# 🔒 인자

인자 1: stuff
Number 타입의 40 이상 240 이하의 자연수를 담은 배열
ex) [70, 50, 80, 50]
인자 2: limited
Number 타입의 40 이상 240 이하의 자연수

# 🔒 출력
Number 타입을 리턴해야 합니다.
모든 짐을 옮기기 위해 필요한 박스 개수의 최솟값을 숫자로 반환합니다.

# 🔒 주의사항
옮겨야 할 짐의 개수는 1개 이상 50,000개 이하입니다.
박스의 무게 제한은 항상 짐의 무게 중 최대값보다 크게 주어지므로 짐을 나르지 못하는 경우는 없습니다.

# 🔒 입출력 예시
```jsx
let output = movingStuff([70, 50, 80, 50], 100);
console.log(output); // 3

let output = movingStuff([60, 80, 120, 90, 130], 140);
console.log(output); // 4
```

# 💡 생각
짐을 박스에 담을 수 있는 경우의 수는 2가지다.
첫번째는 두개의 짐이 limit보다 작거나 같은 경우,
두번째는 두개의 짐이 limit보다 커서 한개의 짐만 담아야 하는 경우.
그리고 박스에 담은 짐은 다시 볼 필요가 없으므로 isVisited 함수를 만들어야겠다.

# ✍ 풀이

```jsx
function movingStuff(stuff, limit) {
  // TODO: 여기에 코드를 작성합니다.
  //한번 쌓은 짐은 다시 쌓으면 안되므로 방문한 함수를 만들자.
  //bfs로 풀이
  let sortStuff = stuff.sort((a, b) => b - a) // [80,70,50,50] 150 가장 큰 짐을 넣은 후 (limit - 큰 짐 무게) 보다 작거나 같은 상자를 찾는 것이 최소값을 찾는 방법이다. (동전교환생각하기)
  let isVisited = new Array(sortStuff.length).fill(false) //박스 방문여부 확인 //[false,false,false,false]0 1 2
  let count = 0

  for (let i = 0; i < sortStuff.length; i++) {
    for (let j = i + 1; j < sortStuff.length; j++) {
      //짐 2개를 박스에 담을 때 limit보다 작거나 같은지 + 해당 짐을 처음 방문하는지 확인
      //짐 2개를 담을 수 있다면 박스 하나를 추가하고 다다음 짐부터 다시 검사한다.
      if (sortStuff[i] + sortStuff[j] <= limit && isVisited[i] === false && isVisited[j] === false) {
        count++
        isVisited[i] = true
        isVisited[j] = true
        i = i+1
        break;
      }else{
        //짐 하나만 담을 수 있다면 박스를 하나 추가하고 다음 짐부터 검사한다.
        count++
        isVisited[i] = true
        break;
      }
    }
  }
  return count
}

//병합정렬을 이용한 풀이
function movingStuff(stuff, limit) {
  let count = 0;
  let sortStuff = stuff.sort((a, b) => a - b) //오름차순으로 정렬
  //양쪽 요소의 합이 limit보다 작거나 같으면 제거하고 아니면 추가하는 방식으로 정렬해보자. -> 병합정렬
  let leftIdx = 0
  let rightIdx = sortStuff.length - 1
  while (leftIdx < rightIdx) {
    if (sortStuff[leftIdx] + sortStuff[rightIdx] <= limit) {
      count++
      leftIdx++
      rightIdx--
    } else {
      count++
      rightIdx --
    }
  }
  return count
}
```
# 💡 후기
방문함수를 만들어 요소를 탐색한 것에 익숙해 질 수 있었고, 한가지 걸리는 것은 i = i+1 처럼 수동으로 탐색순서를 변경한 것이 마음에 걸렸다.
두번째 풀이에서 좌우 요소끼리 비교해 줄여나가는 병합정렬 아이디어를 이용할 수 있다는 것을 알게됐고, 반복해서 문제를 풀어 유형에 익숙해져야겠다고 생각했다.
