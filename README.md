# splander

## 온라인 스플랜더를 만들어보자

```
추후 확장성을 고려해서 index는 게시판 레이아웃
스플랜더 구현이 끝나면 타 보드게임도 적용 예정
scss base 가져와서 mixin 정리
vue 프로젝트 기반 가져오기
```

# 스플랜더 오리지널 룰북

1.  코인으로 보석을 사서 귀족의 후원을 받는 게임.
2.  보석 및 후원 등에 적힌 포인트로 선 15점을 챙기면 승리.
3.  코인의 종류는 총 6가지로 황금 코인은 5개 있고, 나머지 코인은 7개씩 있음.
4.  황금 코인은 조커로 어떤 컬러의 코인으로도 사용할 수 있음.
5.  코인의 운용은 플레이어의 수에 따라 다름
    2인 -> 각 5개, 황금 5개
    3인 -> 각 6개, 황금 5개
    4인 -> 각 7개, 황금 5개
6.  귀족에 적힌 보석의 숫자는 오직 카드에 쓰인 보석만 카운트
7.  보석 카드 구매는 코인 + 이미 구입해둔 카드 로 가능
8.  보석 카드는 level1~3이 존재.
9.  게임판에는 각 레벨별로 보석 카드 4개와 귀족 3개(4인기준)를 깔고 시작한다.
10. 남은 보석카드는 누군가 보석카드를 찜하거나 구매했을 때 채워 넣을 수 있게 레벨별로 구분하여 배치.
11. 보석도 코인과 같이 5종이 있음.
    루비, 에메랄드, 사파이어, 다이아몬드, 흑요석
12.

# 스플랜더 확장팩 룰북

## 1 대도시

## 2 ?

## 3 성채

## 4 ?

# 등록해야할 정보

1.  레벨별 카드들과 각 카드의 구매정보 및 점수
2.  후원귀족과 귀족별 후원조건 및 점수
