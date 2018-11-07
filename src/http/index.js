"use strict"
let axios = new class{
  constructor() {
    this.xhr = new Promise((resolve, reject) => {
      let xhr;
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
      }
      resolve(xhr);
    })
  }
  data(res, data) {
    if (res.readyState == 4) {
      if (res.status == 200) {
        data.success(JSON.parse(res.response));
      } else {
        data.error({
          code: res.status,

        })
      }
    }
  }
  $get(data, res) {
    let formData = '', arr = [];
    if (data.data) {
      formData = '?';
      for (let i in data.data) {
        arr.push(i + '=' + data.data[i]);
      }
      formData = formData + arr.join('&');
    }
    function lists() {
      axios.data(res, data);
    }
    res.open(data.type.toUpperCase(), data.url + formData, true);
    res.onreadystatechange = lists;
    res.send(null);
  }
  $post(data, res) {
    let formData = null;
    if (data.data) {
      formData = new FormData();
      for (let i in data.data) {
        formData.append(i, data.data[i]);
      }
    }
    function lists() {
      axios.data(res, data);
    }
    res.open(data.type.toUpperCase(), data.url, true);
    res.onreadystatechange = lists;
    res.send(formData);
  }
  $axios(data) {
    axios.xhr.then((res) => {
      try {
        data.type = data.type || 'get';
        axios['$' + data.type.toLowerCase()](data, res);
      } catch (e) {
        data.error({
          code: 400,
          message: '请打开其他浏览器尝试！'
        })
      }
    }).catch((err) => {
      data.error({
        code: 400,
        message: '请打开其他浏览器尝试！'
      })
    });
  }
}
export default axios.$axios
