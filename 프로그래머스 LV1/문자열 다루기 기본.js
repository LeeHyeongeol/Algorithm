function solution(s) {
  return (s.length === 4 || s.length === 6) && s == parseInt(s)
  // '==' : 서로 다른 유형의 두 변수의 값만 비교 (값 -> true, 자료형은 판단하지 않음)
  // '===' : 더 엄격하게 비교 (값 & 자료형 -> true) 권장
}