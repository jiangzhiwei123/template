/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import Mock from "mockjs";

Mock.setup({
  timeout: "500"
});

Mock.mock("/app/init", {
  code: 0,
  data: {
    turntableInfo: {
      packageInfoList: [
        {
          packageType: 1,
          packageName: "顺丰券1顺丰券1顺丰券1顺丰券1",
          packageImgUrl: require("../assets/img/dev/顺丰券.png"),
          prizeType: 1
        },
        {
          packageType: 1,
          packageName: "联通天神卡",
          packageImgUrl: require("../assets/img/dev/联通天神卡.png"),
          prizeType: 4
        },
        {
          packageType: 1,
          packageName: "马蜂窝",
          packageImgUrl: require("../assets/img/dev/马蜂窝.png"),
          prizeType: 4
        },
        {
          packageType: 0,
          packageName: "谢谢参与",
          packageImgUrl: require("../assets/img/dev/多点app.png"),
          prizeType: 3
        },
        {
          packageType: 1,
          packageName: "悟空租车",
          packageImgUrl: require("../assets/img/dev/悟空租车.png"),
          prizeType: 3
        },
        {
          packageType: 1,
          packageName: "顺丰券2",
          packageImgUrl: require("../assets/img/dev/悟空租车.png"),
          prizeType: 1
        },
        {
          packageType: 1,
          packageName: "MES每实蛋糕",
          packageImgUrl: require("../assets/img/dev/悟空租车.png"),
          prizeType: 3
        },
        {
          packageType: 1,
          packageName: "积分",
          packageImgUrl: require("../assets/img/dev/lottery_icon_point.png"),
          prizeType: 2
        }
      ]
    },
    hasChance: true,
    isWindow: false
  },
  msg: "success"
});

Mock.mock("/app/getMyAwardList", {
  code: 0,
  data: {
    page: {
      pageNum: 1,
      pageSize: 5,
      size: 2,
      startRow: 1,
      endRow: 2,
      total: 2,
      pages: 1,
      list: [
        {
          awardRecordId: "EFaOInkfUgdN0IammhAL4zAW5gAShT",
          packageId: "sdgdgagadgdagad",
          aid: "JRqMl64BoOXGPqtK6bXOHL68gUDk7e",
          packageName: "悟空租车200元租车礼包",
          prizeType: 3,
          packageImgUrl: require("../assets/img/dev/联通天神卡.png"),
          outsideUrl: "http://www.baidu.com",
          memberId: "2F1234196E8242109C97DA90F6E3870D",
          memberNo: "00000000000000000000800002210323",
          memberPhone: "18938854258",
          openId: "oMb2jwIPpC0Xr0Nu8MkZQEsG68rk",
          sfActPkgCode: "sgsdgdsgga",
          sfActCode: "sgsdgsdsg",
          sfPacketSecurityParam:
            '{"pkgIP":"0:0:0:0:0:0:0:1","pkgDeviceId":"43ceba76-94df-4c72-85bd-aa89b5a9f304","pkgOs":"Windows 7","pkgAppversion":"Chrome","pkgSsid":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"}',
          status: -1,
          createTime: "2019-08-21 19:53:41",
          updateTime: null
        },
        {
          awardRecordId: "t0Aqhaq0s3Gvr7qskdHnlDq1C5Gpkt",
          packageId: "gsdggsgsdggs",
          aid: "JRqMl64BoOXGPqtK6bXOHL68gUDk7e",
          packageName: "积分2",
          prizeType: 2,
          packageImgUrl: require("../assets/img/dev/lottery_icon_point.png"),
          memberId: "2F1234196E8242109C97DA90F6E3870D",
          memberNo: "00000000000000000000800002210323",
          memberPhone: "18938854258",
          openId: "oMb2jwIPpC0Xr0Nu8MkZQEsG68rk",
          sfActPkgCode: "xbxcbxbxcb",
          sfActCode: "sdgsdfgsdghs",
          sfPacketSecurityParam:
            '{"pkgIP":"0:0:0:0:0:0:0:1","pkgDeviceId":"ac349e44-331d-47b2-ad57-fa38d69a6e13","pkgOs":"Unknown","pkgAppversion":"Unknown","pkgSsid":"PostmanRuntime/7.15.2"}',
          status: -1,
          createTime: "2019-08-22 19:52:45",
          updateTime: null
        },
        {
          awardRecordId: "EFaOInkfUgdN0IammhAL4zAW5gAShT",
          packageId: "sdgdgagadgdagad",
          aid: "JRqMl64BoOXGPqtK6bXOHL68gUDk7e",
          packageName: "联通天神卡3",
          prizeType: 3,
          packageImgUrl: require("../assets/img/dev/联通天神卡.png"),
          outsideUrl: "http://www.baidu.com",
          memberId: "2F1234196E8242109C97DA90F6E3870D",
          memberNo: "00000000000000000000800002210323",
          memberPhone: "18938854258",
          openId: "oMb2jwIPpC0Xr0Nu8MkZQEsG68rk",
          sfActPkgCode: "sgsdgdsgga",
          sfActCode: "sgsdgsdsg",
          sfPacketSecurityParam:
            '{"pkgIP":"0:0:0:0:0:0:0:1","pkgDeviceId":"43ceba76-94df-4c72-85bd-aa89b5a9f304","pkgOs":"Windows 7","pkgAppversion":"Chrome","pkgSsid":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"}',
          status: -1,
          createTime: "2019-08-23 19:53:41",
          updateTime: null
        },
        {
          awardRecordId: "t0Aqhaq0s3Gvr7qskdHnlDq1C5Gpkt",
          packageId: "gsdggsgsdggs",
          aid: "JRqMl64BoOXGPqtK6bXOHL68gUDk7e",
          packageName: "积分4",
          prizeType: 2,
          packageImgUrl: require("../assets/img/dev/lottery_icon_point.png"),
          memberId: "2F1234196E8242109C97DA90F6E3870D",
          memberNo: "00000000000000000000800002210323",
          memberPhone: "18938854258",
          openId: "oMb2jwIPpC0Xr0Nu8MkZQEsG68rk",
          sfActPkgCode: "xbxcbxbxcb",
          sfActCode: "sdgsdfgsdghs",
          sfPacketSecurityParam:
            '{"pkgIP":"0:0:0:0:0:0:0:1","pkgDeviceId":"ac349e44-331d-47b2-ad57-fa38d69a6e13","pkgOs":"Unknown","pkgAppversion":"Unknown","pkgSsid":"PostmanRuntime/7.15.2"}',
          status: -1,
          createTime: "2019-08-24 19:52:45",
          updateTime: null
        },
        {
          awardRecordId: "EFaOInkfUgdN0IammhAL4zAW5gAShT",
          packageId: "sdgdgagadgdagad",
          aid: "JRqMl64BoOXGPqtK6bXOHL68gUDk7e",
          packageName: "联通天神卡5",
          prizeType: 3,
          packageImgUrl: require("../assets/img/dev/联通天神卡.png"),
          outsideUrl: "http://www.baidu.com",
          memberId: "2F1234196E8242109C97DA90F6E3870D",
          memberNo: "00000000000000000000800002210323",
          memberPhone: "18938854258",
          openId: "oMb2jwIPpC0Xr0Nu8MkZQEsG68rk",
          sfActPkgCode: "sgsdgdsgga",
          sfActCode: "sgsdgsdsg",
          sfPacketSecurityParam:
            '{"pkgIP":"0:0:0:0:0:0:0:1","pkgDeviceId":"43ceba76-94df-4c72-85bd-aa89b5a9f304","pkgOs":"Windows 7","pkgAppversion":"Chrome","pkgSsid":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"}',
          status: -1,
          createTime: "2019-08-25 19:53:41",
          updateTime: null
        },
        {
          awardRecordId: "t0Aqhaq0s3Gvr7qskdHnlDq1C5Gpkt",
          packageId: "gsdggsgsdggs",
          aid: "JRqMl64BoOXGPqtK6bXOHL68gUDk7e",
          packageName: "积分6",
          prizeType: 2,
          packageImgUrl: require("../assets/img/dev/lottery_icon_point.png"),
          memberId: "2F1234196E8242109C97DA90F6E3870D",
          memberNo: "00000000000000000000800002210323",
          memberPhone: "18938854258",
          openId: "oMb2jwIPpC0Xr0Nu8MkZQEsG68rk",
          sfActPkgCode: "xbxcbxbxcb",
          sfActCode: "sdgsdfgsdghs",
          sfPacketSecurityParam:
            '{"pkgIP":"0:0:0:0:0:0:0:1","pkgDeviceId":"ac349e44-331d-47b2-ad57-fa38d69a6e13","pkgOs":"Unknown","pkgAppversion":"Unknown","pkgSsid":"PostmanRuntime/7.15.2"}',
          status: -1,
          createTime: "2019-08-26 19:52:45",
          updateTime: null
        },
        {
          awardRecordId: "EFaOInkfUgdN0IammhAL4zAW5gAShT",
          packageId: "sdgdgagadgdagad",
          aid: "JRqMl64BoOXGPqtK6bXOHL68gUDk7e",
          packageName: "联通天神卡7",
          prizeType: 3,
          packageImgUrl: require("../assets/img/dev/联通天神卡.png"),
          outsideUrl: "http://www.baidu.com",
          memberId: "2F1234196E8242109C97DA90F6E3870D",
          memberNo: "00000000000000000000800002210323",
          memberPhone: "18938854258",
          openId: "oMb2jwIPpC0Xr0Nu8MkZQEsG68rk",
          sfActPkgCode: "sgsdgdsgga",
          sfActCode: "sgsdgsdsg",
          sfPacketSecurityParam:
            '{"pkgIP":"0:0:0:0:0:0:0:1","pkgDeviceId":"43ceba76-94df-4c72-85bd-aa89b5a9f304","pkgOs":"Windows 7","pkgAppversion":"Chrome","pkgSsid":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"}',
          status: -1,
          createTime: "2019-08-27 19:53:41",
          updateTime: null
        },
        {
          awardRecordId: "EFaOInkfUgdN0IammhAL4zAW5gAShT",
          packageId: "sdgdgagadgdagad",
          aid: "JRqMl64BoOXGPqtK6bXOHL68gUDk7e",
          packageName: "联通天神卡8",
          prizeType: 3,
          packageImgUrl: require("../assets/img/dev/联通天神卡.png"),
          outsideUrl: "http://www.baidu.com",
          memberId: "2F1234196E8242109C97DA90F6E3870D",
          memberNo: "00000000000000000000800002210323",
          memberPhone: "18938854258",
          openId: "oMb2jwIPpC0Xr0Nu8MkZQEsG68rk",
          sfActPkgCode: "sgsdgdsgga",
          sfActCode: "sgsdgsdsg",
          sfPacketSecurityParam:
            '{"pkgIP":"0:0:0:0:0:0:0:1","pkgDeviceId":"43ceba76-94df-4c72-85bd-aa89b5a9f304","pkgOs":"Windows 7","pkgAppversion":"Chrome","pkgSsid":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"}',
          status: -1,
          createTime: "2019-08-27 19:53:41",
          updateTime: null
        },
        {
          awardRecordId: "EFaOInkfUgdN0IammhAL4zAW5gAShT",
          packageId: "sdgdgagadgdagad",
          aid: "JRqMl64BoOXGPqtK6bXOHL68gUDk7e",
          packageName: "联通天神卡9",
          prizeType: 3,
          packageImgUrl: require("../assets/img/dev/联通天神卡.png"),
          outsideUrl: "http://www.baidu.com",
          memberId: "2F1234196E8242109C97DA90F6E3870D",
          memberNo: "00000000000000000000800002210323",
          memberPhone: "18938854258",
          openId: "oMb2jwIPpC0Xr0Nu8MkZQEsG68rk",
          sfActPkgCode: "sgsdgdsgga",
          sfActCode: "sgsdgsdsg",
          sfPacketSecurityParam:
            '{"pkgIP":"0:0:0:0:0:0:0:1","pkgDeviceId":"43ceba76-94df-4c72-85bd-aa89b5a9f304","pkgOs":"Windows 7","pkgAppversion":"Chrome","pkgSsid":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"}',
          status: -1,
          createTime: "2019-08-27 19:53:41",
          updateTime: null
        },
        {
          awardRecordId: "EFaOInkfUgdN0IammhAL4zAW5gAShT",
          packageId: "sdgdgagadgdagad",
          aid: "JRqMl64BoOXGPqtK6bXOHL68gUDk7e",
          packageName: "联通天神卡10",
          prizeType: 3,
          packageImgUrl: require("../assets/img/dev/联通天神卡.png"),
          outsideUrl: "http://www.baidu.com",
          memberId: "2F1234196E8242109C97DA90F6E3870D",
          memberNo: "00000000000000000000800002210323",
          memberPhone: "18938854258",
          openId: "oMb2jwIPpC0Xr0Nu8MkZQEsG68rk",
          sfActPkgCode: "sgsdgdsgga",
          sfActCode: "sgsdgsdsg",
          sfPacketSecurityParam:
            '{"pkgIP":"0:0:0:0:0:0:0:1","pkgDeviceId":"43ceba76-94df-4c72-85bd-aa89b5a9f304","pkgOs":"Windows 7","pkgAppversion":"Chrome","pkgSsid":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"}',
          status: -1,
          createTime: "2019-08-27 19:53:41",
          updateTime: null
        },
        {
          awardRecordId: "EFaOInkfUgdN0IammhAL4zAW5gAShT",
          packageId: "sdgdgagadgdagad",
          aid: "JRqMl64BoOXGPqtK6bXOHL68gUDk7e",
          packageName: "联通天神卡11",
          prizeType: 3,
          packageImgUrl: require("../assets/img/dev/联通天神卡.png"),
          outsideUrl: "http://www.baidu.com",
          memberId: "2F1234196E8242109C97DA90F6E3870D",
          memberNo: "00000000000000000000800002210323",
          memberPhone: "18938854258",
          openId: "oMb2jwIPpC0Xr0Nu8MkZQEsG68rk",
          sfActPkgCode: "sgsdgdsgga",
          sfActCode: "sgsdgsdsg",
          sfPacketSecurityParam:
            '{"pkgIP":"0:0:0:0:0:0:0:1","pkgDeviceId":"43ceba76-94df-4c72-85bd-aa89b5a9f304","pkgOs":"Windows 7","pkgAppversion":"Chrome","pkgSsid":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"}',
          status: -1,
          createTime: "2019-08-27 19:53:41",
          updateTime: null
        },
        {
          awardRecordId: "EFaOInkfUgdN0IammhAL4zAW5gAShT",
          packageId: "sdgdgagadgdagad",
          aid: "JRqMl64BoOXGPqtK6bXOHL68gUDk7e",
          packageName: "联通天神卡12",
          prizeType: 3,
          packageImgUrl: require("../assets/img/dev/联通天神卡.png"),
          outsideUrl: "http://www.baidu.com",
          memberId: "2F1234196E8242109C97DA90F6E3870D",
          memberNo: "00000000000000000000800002210323",
          memberPhone: "18938854258",
          openId: "oMb2jwIPpC0Xr0Nu8MkZQEsG68rk",
          sfActPkgCode: "sgsdgdsgga",
          sfActCode: "sgsdgsdsg",
          sfPacketSecurityParam:
            '{"pkgIP":"0:0:0:0:0:0:0:1","pkgDeviceId":"43ceba76-94df-4c72-85bd-aa89b5a9f304","pkgOs":"Windows 7","pkgAppversion":"Chrome","pkgSsid":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"}',
          status: -1,
          createTime: "2019-08-27 19:53:41",
          updateTime: null
        }
      ],
      prePage: 0,
      nextPage: 0,
      isFirstPage: true,
      isLastPage: true,
      hasPreviousPage: false,
      hasNextPage: false,
      navigatePages: 8,
      navigatepageNums: [1],
      navigateFirstPage: 1,
      navigateLastPage: 1,
      firstPage: 1,
      lastPage: 1
    }
  },
  msg: "success"
});

Mock.mock("/app/lottery", {
  code: 0,
  data: {
    lotteryResult: {
      index: 2,
      packageType: 1,
      prizeType: 1,
      awardId: null,
      prizePackageName: "顺丰券1",
      prizeLinkUrl: "http://www.baidu.com",
      packageImgUrl: require("../assets/img/dev/lottery_img_sfquan.png")
    }
  },
  msg: "success"
});
Mock.mock("/statistics/addStatistics", {
  code: 0,
  data: {},
  msg: "success"
});
