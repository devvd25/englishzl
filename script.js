const danhSachThang = document.getElementById('danhSachThang');

const thangViet = {
    "jan": "tháng 1",
    "feb": "tháng 2",
    "mar": "tháng 3",
    "apr": "tháng 4",
    "may": "tháng 5",
    "jun": "tháng 6",
    "jul": "tháng 7",
    "aug": "tháng 8",
    "sep": "tháng 9",
    "oct": "tháng 10",
    "nov": "tháng 11",
    "dec": "tháng 12"
};

for (const maThang in thangViet) {
    const li = document.createElement('li');
    const spanTiengAnh = document.createElement('span');
    const spanTiengViet = document.createElement('span');

    spanTiengAnh.classList.add('tiengAnh');
    spanTiengAnh.textContent = maThang + ': ';

    spanTiengViet.classList.add('tiengViet');
    spanTiengViet.textContent = thangViet[maThang];

    li.appendChild(spanTiengAnh);
    li.appendChild(spanTiengViet);

    danhSachThang.appendChild(li);
}
