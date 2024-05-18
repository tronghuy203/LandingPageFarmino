function them(x) {
  var tr = x.parentElement.parentElement;
  var td = tr.children;
  var mssp = td[0].innerHTML;
  var hinh = td[1].children[0].src;
  var ten = td[2].innerHTML;
  var dongia = td[3].children[0].innerHTML;
  var soluong = td[4].children[0].value;
  var ttien = parseInt(dongia) * parseInt(soluong);

  //Tạo các element cho giỏ hàng
  var giohang_tr = document.createElement("tr");

  //Tạo td và nội dung mssp
  var giohang_td = document.createElement("td");
  var giohang_td_mssp = document.createTextNode(mssp);
  giohang_td.appendChild(giohang_td_mssp);
  giohang_tr.appendChild(giohang_td);

  var giohang_td = document.createElement("td");
  var giohang_td_hinh = document.createElement("img");
  giohang_td_hinh.src = hinh;
  giohang_td.appendChild(giohang_td_hinh);
  giohang_tr.appendChild(giohang_td);

  var giohang_td = document.createElement("td");
  var giohang_td_ten = document.createTextNode(ten);
  giohang_td.appendChild(giohang_td_ten);
  giohang_tr.appendChild(giohang_td);

  var giohang_td = document.createElement("td");
  var giohang_td_dongia = document.createTextNode(dongia);
  giohang_td.appendChild(giohang_td_dongia);
  giohang_tr.appendChild(giohang_td);

  var giohang_td = document.createElement("td");
  var giohang_td_soluong = document.createTextNode(soluong);
  giohang_td.appendChild(giohang_td_soluong);
  giohang_tr.appendChild(giohang_td);

  var giohang_td = document.createElement("td");
  var giohang_td_ttien = document.createTextNode(ttien);
  giohang_td.appendChild(giohang_td_ttien);
  giohang_tr.appendChild(giohang_td);

  var giohang_td = document.createElement("td");
  var giohang_td_nut = document.createElement("input");
  giohang_td_nut.type = "button";
  giohang_td_nut.value = "Xóa";
  giohang_td_nut.setAttribute("onclick", "xoa(this)");
  giohang_td.appendChild(giohang_td_nut);
  giohang_tr.appendChild(giohang_td);

  var giohang = document.getElementById("giohang");
  giohang.appendChild(giohang_tr);

  // tính tổng đơn hàng
  tongdonhang();
}

function xoa(x) {
  var tr = x.parentElement.parentElement;
  tr.remove();

  // tính tổng đơn hàng
  tongdonhang();
}

function tongdonhang() {
  var giohang = document.getElementById("giohang");
  var tr = giohang.children;
  var tong = 0;
  for (let i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td");
    var ttien = parseInt(td[5].innerHTML);
    tong += ttien;
  }
  document.getElementById("tongdonhang").innerHTML = tong;
}

const nuttat = document.querySelector(".nuttat");
const nutmo = document.querySelector(".nut");
const nutmo2 = document.querySelector(".trang6nutmua");

nutmo.addEventListener("click", function () {
  document.querySelector(".boxcenter").style.display = "block";
});
nutmo2.addEventListener("click", function () {
  document.querySelector(".boxcenter").style.display = "block";
});
nuttat.addEventListener("click", function () {
  document.querySelector(".boxcenter").style.display = "none";
});

// --------------------------------------------------------------------
// đăng nhập và đăng ký
const nuttat2 = document.querySelector(".nuttat2");
const nuttatdn2 = document.querySelector(".nuttatdn2");

const nutmodangky = document.querySelector(".start-free-trial");
const nutmodangnhap = document.querySelector(".get-started");

nutmodangnhap.addEventListener("click", function () {
  document.querySelector(".formdn").style.display = "block";
});
nutmodangky.addEventListener("click", function () {
  document.querySelector(".form").style.display = "block";
});
nuttat2.addEventListener("click", function () {
  document.querySelector(".form").style.display = "none";
});
nuttatdn2.addEventListener("click", function () {
  document.querySelector(".formdn").style.display = "none";
});
// đăng ký
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password_confirmation = document.getElementById("password_confirmation");
let btnSignup = document.querySelector(".form-submit");

btnSignup.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  let json = JSON.stringify(user);
  if (!username.value || !email.value || !password.value || !password_confirmation.value) {
    alert("vui long nhap day du thong tin");
  }else if (password.value != password_confirmation.value) {
      alert("Nhập lại mật khẩu sai");
  }else {
    localStorage.setItem(username.value, json);
    alert("dang ky thanh cong");
  }
});
// đăng nhập
let usernamedn = document.getElementById("usernamedn");
let emaildn = document.getElementById("emaildn");
let passworddn = document.getElementById("passworddn");
let btnLogin = document.querySelector(".form-submitdn");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: usernamedn.value,
    email: emaildn.value,
    password: passworddn.value,
  };
  console.log(user);
  let json = JSON.stringify(user);
  if (!usernamedn.value || !emaildn.value || !passworddn.value) {
    alert("vui long nhap day du thong tin");
  }
  if (localStorage.getItem(usernamedn.value) == json) {
    alert("dang nhap thanh cong");
    document.querySelector(".formdn").style.display = "none";
  } else {
    alert("dang nhap that bai");
  }
});
// -------------------------------------------------------------------------------
// slideshow
var anh = document.querySelector(".anh");
var anh1 = document.querySelector(".anh1");
var anh2 = document.querySelector(".anh2");
var anh3 = document.querySelector(".anh3");

var anh4 = document.querySelector(".anh4");
var anh5 = document.querySelector(".anh5");
var anh6 = document.querySelector(".anh6");
var anh7 = document.querySelector(".anh7");

var anh8 = document.querySelector(".anh8");
var anh9 = document.querySelector(".anh9");
var anh10 = document.querySelector(".anh10");
var anh11 = document.querySelector(".anh11");

var anh12 = document.querySelector(".anh12");
var anh13 = document.querySelector(".anh13");
var anh14 = document.querySelector(".anh14");
var anh15 = document.querySelector(".anh15");

var ten = document.querySelector(".tenslide");
var ten1 = document.querySelector(".tenslide1");
var ten2 = document.querySelector(".tenslide2");
var ten3 = document.querySelector(".tenslide3");

var ten4 = document.querySelector(".tenslide4");
var ten5 = document.querySelector(".tenslide5");
var ten6 = document.querySelector(".tenslide6");
var ten7 = document.querySelector(".tenslide7");

var ten8 = document.querySelector(".tenslide8");
var ten9 = document.querySelector(".tenslide9");
var ten10 = document.querySelector(".tenslide10");
var ten11 = document.querySelector(".tenslide11");

var ten12 = document.querySelector(".tenslide12");
var ten13 = document.querySelector(".tenslide13");
var ten14 = document.querySelector(".tenslide14");
var ten15 = document.querySelector(".tenslide15");

async function taoanh() {
  let apiURL = `https://6386bbe1d9b24b1be3dd2e9d.mockapi.io/api/food`;

  let data = await fetch(apiURL).then((res) => res.json());
  console.log(data);

  anh.src = data[0].food;
  ten.innerText = data[0].id;

  anh1.src = data[1].food;
  ten1.innerText = data[1].id;

  anh2.src = data[2].food;
  ten2.innerText = data[2].id;

  anh3.src = data[3].food;
  ten3.innerText = data[3].id;

  anh4.src = data[4].food;
  ten4.innerText = data[4].id;

  anh5.src = data[5].food;
  ten5.innerText = data[5].id;

  anh6.src = data[6].food;
  ten6.innerText = data[6].id;

  anh7.src = data[7].food;
  ten7.innerText = data[7].id;

  anh8.src = data[8].food;
  ten8.innerText = data[8].id;

  anh9.src = data[9].food;
  ten9.innerText = data[9].id;

  anh10.src = data[10].food;
  ten10.innerText = data[10].id;

  anh11.src = data[11].food;
  ten11.innerText = data[11].id;

  anh12.src = data[12].food;
  ten12.innerText = data[12].id;

  anh13.src = data[13].food;
  ten13.innerText = data[13].id;

  anh14.src = data[14].food;
  ten14.innerText = data[14].id;

  anh15.src = data[15].food;
  ten15.innerText = data[15].id;
}

taoanh();

// --------------------------------------------------------------------------------------
var trang4chu = document.querySelector(".trang4chu");
var trang4chu1 = document.querySelector(".trang4chu1");
var trang4chu2 = document.querySelector(".trang4chu2");

var trang4chu3 = document.querySelector(".trang4chu3");
var trang4chu4 = document.querySelector(".trang4chu4");
var trang4chu5 = document.querySelector(".trang4chu5");

var trang4chu6 = document.querySelector(".trang4chu6");
var trang4chu7 = document.querySelector(".trang4chu7");
var trang4chu8 = document.querySelector(".trang4chu8");

var trang4chu9 = document.querySelector(".trang4chu9");
var trang4chu10 = document.querySelector(".trang4chu10");
var trang4chu11 = document.querySelector(".trang4chu11");



var trang4anh = document.querySelector(".trang4anh");
var trang4anh1 = document.querySelector(".trang4anh1");
var trang4anh2 = document.querySelector(".trang4anh2");

var trang4anh3 = document.querySelector(".trang4anh3");
var trang4anh4 = document.querySelector(".trang4anh4");
var trang4anh5 = document.querySelector(".trang4anh5");

var trang4anh6 = document.querySelector(".trang4anh6");
var trang4anh7 = document.querySelector(".trang4anh7");
var trang4anh8 = document.querySelector(".trang4anh8");

var trang4anh9 = document.querySelector(".trang4anh9");
var trang4anh10 = document.querySelector(".trang4anh10");
var trang4anh11 = document.querySelector(".trang4anh11");



var trang4tenslide = document.querySelector(".trang4tenslide");
var trang4tenslide1 = document.querySelector(".trang4tenslide1");
var trang4tenslide2 = document.querySelector(".trang4tenslide2");

var trang4tenslide3 = document.querySelector(".trang4tenslide3");
var trang4tenslide4 = document.querySelector(".trang4tenslide4");
var trang4tenslide5 = document.querySelector(".trang4tenslide5");

var trang4tenslide6 = document.querySelector(".trang4tenslide6");
var trang4tenslide7 = document.querySelector(".trang4tenslide7");
var trang4tenslide8 = document.querySelector(".trang4tenslide8");

var trang4tenslide9 = document.querySelector(".trang4tenslide9");
var trang4tenslide10 = document.querySelector(".trang4tenslide10");
var trang4tenslide11 = document.querySelector(".trang4tenslide11");

async function taonguoi() {
  let apiURL2 = `https://6386bbe1d9b24b1be3dd2e9d.mockapi.io/api/food`;
  let nguoi = await fetch(apiURL2).then((res) => res.json());
  console.log(nguoi);

  trang4chu.innerText = nguoi[0].nd;
  trang4anh.src = nguoi[0].avatar;
  trang4tenslide.innerText = nguoi[0].ten;

  trang4chu1.innerText = nguoi[1].nd;
  trang4anh1.src = nguoi[1].avatar;
  trang4tenslide1.innerText = nguoi[1].ten;

  trang4chu2.innerText = nguoi[2].nd;
  trang4anh2.src = nguoi[2].avatar;
  trang4tenslide2.innerText = nguoi[2].ten;

  trang4chu3.innerText = nguoi[3].nd;
  trang4anh3.src = nguoi[3].avatar;
  trang4tenslide3.innerText = nguoi[3].ten;

  trang4chu4.innerText = nguoi[4].nd;
  trang4anh4.src = nguoi[4].avatar;
  trang4tenslide4.innerText = nguoi[4].ten;

  trang4chu5.innerText = nguoi[5].nd;
  trang4anh5.src = nguoi[5].avatar;
  trang4tenslide5.innerText = nguoi[5].ten;

  trang4chu6.innerText = nguoi[6].nd;
  trang4anh6.src = nguoi[6].avatar;
  trang4tenslide6.innerText = nguoi[6].ten;

  trang4chu7.innerText = nguoi[7].nd;
  trang4anh7.src = nguoi[7].avatar;
  trang4tenslide7.innerText = nguoi[7].ten;

  trang4chu8.innerText = nguoi[8].nd;
  trang4anh8.src = nguoi[8].avatar;
  trang4tenslide8.innerText = nguoi[8].ten;

  trang4chu9.innerText = nguoi[9].nd;
  trang4anh9.src = nguoi[9].avatar;
  trang4tenslide9.innerText = nguoi[9].ten;

  trang4chu10.innerText = nguoi[10].nd;
  trang4anh10.src = nguoi[10].avatar;
  trang4tenslide10.innerText = nguoi[10].ten;

  trang4chu11.innerText = nguoi[11].nd;
  trang4anh11.src = nguoi[11].avatar;
  trang4tenslide11.innerText = nguoi[11].ten;
}

taonguoi();

// --------------------------------------------------
// video
const trang6movideo = document.querySelector(".trang6nut1")
const trang6nuttat = document.querySelector(".trang6nuttat");
trang6movideo.addEventListener("click", function () {
  document.querySelector(".trang6video1").style.display = "block";
});
trang6nuttat.addEventListener("click", function () {
  document.querySelector(".trang6video1").style.display = "none";
});
