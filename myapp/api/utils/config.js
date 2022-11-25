module.exports = (function () {
  let data = {
    JWTSecretKey: "L9T#Slsj!poqS1#o08MnbA#$iBU*VY5EUe^&xY",
    default_auth_token: "@#Slsjpoq$S1o08#MnbAiB%UVUV&Y*5EU@exS1o!08L9TSlsjpo#TEKOTO",
    refresh_token: "TEKOTOjmLVF6G9Aarypa9y5AhG3JpwQXanNRWBgaaTfU3d",
    host: "localhost",
    port: 3000,
    androidAppVerision: "1.0.0",
    iosAppVerision: "1.0.0",
    mailerEmail: "pratiksocial1@gmail.com",
    mailerPassword: "pratik321",
    awsAccesskey: "AKIAJB4YJCRA3BB3DGCQ",
    awsSecretkey: "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",
    s3bucketName: "tekoto",
    s3uploadURL: "http://tekoto.s3.amazonaws.com",
    buildingRadius : 50,
    paginationCount : 5,
    notificaionCount: 10,
    customer_flag: 0,
    executive_flag: 1,
    supervisor_flag: 2,
    top_supervisor_flag: 3,
    sub_executive_flag: 4,
    budget_sms_username: "sami.samiee",
    budget_sms_user_id: "18702",
    budget_sms_handle: "b97829536ebce448fb4f782de83a90a7",
    timeRegex: /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/,
    dateRegex: /^(19|20|21|22)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/,
    language :  [{name: "en", value: "English"}, {name: "tr", value: "Turkish"}, {"name":"fa","value":"Farsi"},{"name":"ar","value":"Arabic"}],
    FCMApiKey:'AAAAvKTkMLs:APA91bEQh0ECOrxKvLoZ_4IOl_6uK_sS6nTbcDQFBokiz2jsCW2aRTJYIombDlCRus6rIBidIc46-TRxg6_bqfHMTJSL5sa7O4Z9-6ACXG7YqH_cUl0UO7Tti6AfwgOgQQ1zCBNPEC7q'  // salon app's key
  }
  if (process.env.NODE_ENV === "production") {
    data.db = {
      host: "tekoto.cavs0mxf0u08.eu-central-1.rds.amazonaws.com",
      user: "tekoto_db",
      password: "TgmKG3O5ZTWP0p2j0a2H0JR3M",
      database: "tekoto"
    }
    data.reset_password_link = `http://localhost:${data.port}/resetPassword/`
  } else {
    data.db = {
      host: "localhost",
      user: "root",
      password: "",
      database: "smart queue"
    }
    data.reset_password_link = `http://192.168.1.14:3000/resetPassword/`
  }
  return data;
})();
