import { atom, selector } from 'recoil';

export const postListState = atom({
  key: 'postState',
  default: [
    {
      id: 1,
      title: "esfp일까 estp일까",
      content: "아니 검사할 때 어떤 친구 생각하냐에 따라 결과가 확확 바뀌는데 나만그래? 도대체 esfp인거야, estp인거야..?",
      like: 12,
      comment: 6,
      releasedDate: "2023-08-23",
      user: {
        name: "크리스",
        mbti: "ESFP",
        grade: "FUNFUN"
      },
      isHot: true
    },
    {
      id: 2,
      title: "여러분들 다들 MBTI 성향이 어떠신 편인가요??",
      content: "저는 F만 70% 이구 나머지는 거의 49%/51% 이렇게 거의 왔다 갔다해요,,, 저는 박쥐일까요? ㅠㅠ",
      like: 13,
      comment: 11,
      releasedDate: "2023-08-23",
      user: {
        name: "리우",
        mbti: "ISFJ",
        grade: "NEWBIE"
      },
      isHot: true
    },
    {
      id: 3,
      title: "임베디드 시스템 이론 수업 듣고 있어요",
      content: "1시부터 했는데 언제 끝날까 너무너무 졸려 집 가서 당장 자고 싶엉 다른 수업 간 애랑 롤체 할려고 했는데 배터리 없어서 못한대 내 세상이 무너졌어 누가 임베디드 버려서 더 슬퍼 유기 당했어",
      like: 0,
      comment: 0,
      releasedDate: "2023-08-23",
      user: {
        name: "보라에몽",
        mbti: "ESFP",
        grade: "NEWBIE"
      },
      isHot: false
    }
  ]
});

export const newPostIdState = atom({
  key: 'newPostIdState',
  default: 4
})

export const hotPostListState = selector({
  key: 'hostPostListState',
  get: ({ get }) => {
    const postList = get(postListState);
    
    return postList.filter((post) => post.isHot);
  }
})
