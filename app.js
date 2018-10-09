//app.js
import { Token } from 'utils/token.js';
import { Api } from 'utils/api.js';
var api = new Api();
App({
  onLaunch: function () {
   
  },
  globalData: {
    userInfo: null,
    font:[{font:'font-size:20rpx'},{font:'font-size:22rpx'},{font:'font-size:24rpx'},{font:'font-size:28rpx'},{font:'font-size:30rpx'},{font:'font-size:32rpx'}],
  }
})