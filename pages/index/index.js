// index.js
var app=getApp()
var Paths=['老杨禅面','烧鸭饭','多一点烤肉饭','杀猪粉','锅锅相伴','黄焖鸡'];
var Index=0;  //初始值
Page({
  //页面初始数据
  data:{
    Path:Paths[0],
    title:'吃什么捏',
    isRunning:false,
    userInfo:{},
  },

  binViewTap:function(){
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  change:function(e){
    Index++;
    if (Index>6){  //重置序号
      Index=0;
    }
    this.setData({
      Path:Paths[Index]
    })
  },
  guess:function(e){
    let isRunning=this.data.isRunning
    if(!isRunning){
      this.setData({
        title:'就吃它啦',
        isRunning:true
      });
      this.timer=setInterval((function(){
        this.change()
      }).bind(this),50);  //名字滚动的频率
    }
    else{ 
      this.setData(
        {
          title:'吃什么捏',
          isRunning:false
        }
      );
      this.timer&&clearInterval(this.timer);
    }
  }
})