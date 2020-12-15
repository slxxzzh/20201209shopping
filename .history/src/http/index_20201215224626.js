export const onClickLeft = (e) => {
  history.go(-1);
  e.stopPropagation
};
