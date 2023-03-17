Page({
  data:{
    showBtn:false,
    changeBtn:false,
    foodName:'',
    timer:null,
    randomTextList:[],
    visible:false,
    textAreaValueList:['老杨禅面','花雕醉鸡','隆兴烧鹅饭','多一点烤肉饭','膳当家黄焖鸡','格子碗','餐仓煲煲仔饭','挑香小面','杀猪粉','老麻抄手','铜炉鸡锅','牛肉汤','谢宝林烤肉饭','鸡公煲','辣椒炒肉粉','锅锅相伴','乌鸡面','叔叔家咖喱','秦味面馆','麻辣烫','牛油拌饭','黄焖鸡米饭'],
    textAreaValue:'',
  },

  onLoad(){
    const foodNameStr=wx.getStorageSync('foodNameStr');
    this.setData({
      textAreaValue:foodNameStr||this.data.textAreaValueList.join('，'),
      textAreaValueList:foodNameStr?foodNameStr.split('，'):this.data.textAreaValueList
    });
  },

  start(){
    const timer=setInterval(()=>{
      const list=this.data.textAreaValueList;
      const r=Math.ceil(Math.random()*list.length);
      const foodName=list[r-1];
      let randomTextList=[];
      randomTextList.push({opacity:foodName});
      this.setData({
        foodName,
        randomTextList,
      })
    },100);
    this.setData({
      showBtn:true,
      changeBtn:false,
      timer
    });
  },

  stop(){
    clearInterval(this.data.timer);
    this.setData({
      showBtn:false,
      changeBtn:true,
      timer:'',
    });
  },

  //自定义饭店
  onOK(){
    clearInterval(this.data.timer);
    wx.setStorageSync('foodNameStr', this.data.textAreaValue);
    this.setData({
      showBtn:false,
      changeBtn:false,
      timer:'',
      foodName:'',
      visible:!this.data.visible,
      textAreaValue:this.data.textAreaValue,
      textAreaValueList:this.data.textAreaValue.split('，')
    });
  },

  onModal(){
    this.setData({
      visible:!this.data.visible,
      textAreaValue:this.data.textAreaValueList.join('，')
    })
  },

  //退出
  onHide(){
    clearInterval(this.data.timer);
    this.setData({
      showBtn:false,
      changeBtn:false,
      foodName:'',
      timer:null,
      visible:false,
      textAreaValue:'',
    })
  },

  //设置分享
  onShareAppMessage(){}
})