# 🔒 문제


아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.

0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...


# 🔒 인자

인자 1 : n
number 타입의 n (n은 0 이상의 정수)

# 🔒 출력

number 타입을 리턴해야합니다.

# 🔒 주의사항

재귀함수를 이용해 구현해야 합니다.
반복문(for, while) 사용은 금지됩니다.
함수 fibonacci가 반드시 재귀함수일 필요는 없습니다.


# 🔒 입출력 예시
```jsx
let output = fibonacci(0);
console.log(output); // --> 0

output = fibonacci(1);
console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34
```

# 💡 생각

피보나치를 원래 공식대로 구하면 큰 수를 계산할 때 메모리가 크게 소모되므로
동적프로그래밍을 통해 이미 구해진 값은 새로 구하지 않고 꺼내 쓸 수 있도록 하자.

# ✍ 풀이

```jsx
function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.
  //동적 프로그래밍
  let box = [0,1]
  const filter = (n) => {
    if(box[n] !== undefined){
      return box[n]
    }else{
      box[n] = filter(n-1) + filter(n-2)
      return box[n]
    }
  }
  return filter(n)
}
```
# 💡 후기

동적프로그래밍의 기초 문제였다.
이미 구해진 값을 다시 구하지 않고 꺼내 쓰는 방식이 동적프로그래밍이다.

