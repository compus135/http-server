/** 
ajax 请求返回302: 
1. js无法知道触发了302，浏览器会静默处理；
2. 同域时，js能读取到重定向地址返回的内容；
3. 跨域时，ajax 会触发 onerror
 */
window.onload = () => {
  function ajax302() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/ajax302", true);
    xhr.onerror = () => {
      console.log("onerror");
    };
    xhr.onreadystatechange = () => {
      console.log("onreadystatechange");
      console.log("readyState", xhr.readyState);
      console.log("status", xhr.status);
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    };

    xhr.send();
  }

  function fetch302() {
    fetch("/ajax302", { method: "GET", redirect: "follow" })
      .then((response) => {
        if (response.redirected) {
          console.log("重定向URL", response.url);
        }
        return response.text();
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.log("fail", error);
      });
  }
  document.getElementById("submit").addEventListener("click", () => {
    ajax302();
    // fetch302();
  });
};
