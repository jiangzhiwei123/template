/* eslint-disable import/no-dynamic-require */
/* 
预加载图片
@order:是否使用有序加载
@imgUrlArr:图片数组
@loadingFn:加载中回调
@loadedFn:加载完成回调
*/
const preloadImg = (order, imgUrlArr, loadingFn, loadedFn) => {
  let loadedCount = 0,
    progress;
  const unorderedPreload = () => {
    // 无序加载，并发下载图片
    imgUrlArr.forEach(imgUrl => {
      var oImg = new Image();
      oImg.addEventListener("load", imgLoaded);
      oImg.addEventListener("error", imgLoaded);
      oImg.src = require(`../../assets/img/${imgUrl}`);
    });
  };
  const orderPreload = () => {
    // 有序加载，一次只有一张图片在下载
    var oImg = new Image();
    oImg.addEventListener("load", imgLoaded);
    oImg.addEventListener("error", imgLoaded);
    oImg.src = require(`../../assets/img/${imgUrlArr[loadedCount]}`);
  };
  const imgLoaded = () => {
    // 每次 图片加载完成执行，无论成功或者失败
    loadedCount++;
    progress = parseInt((loadedCount * 100) / imgUrlArr.length);
    loadingFn(progress);
    if (loadedCount >= length) {
      loadedFn();
    } else if (order) {
      orderPreload();
    }
  };
  order ? orderPreload() : unorderedPreload();
};
export default preloadImg;
