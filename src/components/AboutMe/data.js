const experienceList = [
  {title:"인천대학교",term:"2015.03 ~ 2021.02",content:"컴퓨터공학과를 전공하여 개발자가 되기위한 기초를 쌓았습니다."},
  {title:"KOSA", term:"2021.01 ~ 2021.07",content:"6개월동안 웹개발자로서의 교육을 받았습니다."},
  {title:"더존비즈온", term:"2021.08 ~ ",content:"프론트엔드 개발자로서 경영관리 프로그램을 개발하고 있습니다."}
];
const likeList = ["배우는것을 좋아하는","새로운 것을 좋아하는"];

export function getExperienceList(){
  return experienceList;
}
export function getLikeList(){
  return likeList;
}