# 리팩토링

작업일자: 2025-01-16

## 원본 코드의 문제점

- 할인 계산 로직이 복잡하게 얽혀 있음
- 상품 타입별 로직이 한 함수에 모두 몰려 있음
- 가격 계산과 할인 계산이 분리되어 있지 않음
- 코드의 확장성이 떨어짐

## 적용한 설계원칙과 패턴

1. 상수 분리 및 매직넘버 제거
2. 단일 책임 원칙의 적용
3. 함수의 명확한 네이밍

## 배운 점

> Strategy Pattern에 대해 배웠다
> solution_v1에서는 getDiscountAmount 함수안에 복잡한 if-else 를 사용하여 분기 처리를 했지만
> solution_v2에선 전략 패턴을 사용하여 함수가 더욱 간결해지고 할인 정책이 추가 될때 마다 할인전략 객체에 추가만
> 하면 된다.
