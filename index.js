const fs = require("fs");
var axios = require("axios");
var FormData = require("form-data");
var data = new FormData();

var config = {
  method: "get",
  url: "https://viacep.com.br/ws/33125230/json/",
  headers: {
    ...data.getHeaders(),
  },
  data: data,
};

axios(config).then(function (response) {
  console.log(JSON.stringify(response.data));
  fs.writeFile("cep.txt", JSON.stringify(response.data), (err) => {
    if (err) throw err;
    console.log("arquivo salvo");
  });
});
