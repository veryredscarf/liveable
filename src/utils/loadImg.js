// 异步加载图片
export function LoadImgAsync(url){
  return new Promise(function(resove,reject){
    const image = new Image()
    image.src = url
    image.onload = function(){
      resove({url})
    }
    image.onerror = function(){
      reject({error:new Error("就你这网速就只能看‘美羊羊洗澡了’,仔细查看下图片地址呢",url)})
    }
    
  })
}