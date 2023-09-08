export const getMBTIBadgeColor = (mbti: string) => {
  switch (mbti) {
    case 'ESFP':
      return '#D7C8FD';
    case 'ISFJ':
      return '#4A784A';
    case 'ENFP':
      return '#F9CAF2';
    default:
      return '#000000';
  }
}

export const getGradeBadgeColor = (grade: string) => {
  switch (grade) {
    case 'NEWBIE':
      return '#7FE045';
    case 'FUNFUN':
      return '#01B5DC';
    default:
      return '#000000'
  }
}
