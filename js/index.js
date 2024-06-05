
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const vam = document.querySelector.bind(document);
const vams = document.querySelectorAll.bind(document);
function downloadZip() {
    fetchSheet.fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'Tài liệu Thêm',
    })
        .then((rows) => {
            document.querySelector('#pdfViewer').style.display = "block";
            const pdfUrl = rows[0]['Thể Lệ']; // Thay đổi đường dẫn đến tệp PDF của bạn tại đây
            const pdfEmbed = `<embed src="${pdfUrl}" type="application/pdf" width="100%" height="100%">
                    <div id="out-pdfViewer"><i class="bi bi-box-arrow-left"></i>
                    <p>Thoát</p>
                </div>`;
            document.querySelector('#pdfViewer-wrap').innerHTML = pdfEmbed;
            document.querySelector('body').setAttribute('style', 'overflow:hidden');
            document.querySelector('#out-pdfViewer').onclick = () => {
                document.querySelector('#pdfViewer').style.display = "none";
                document.querySelector('#pdfViewer-wrap').innerHTML = ''
                document.querySelector('body').setAttribute('style', 'overflow:auto');
            }
        })

}
fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'Tài liệu Thêm',
    })
    .then((rows) => {
        vams('.dkthamgia').forEach((t) => {
            t.onclick = () => {
                vam('#popup').setAttribute('style', 'display:block')
                vam('.background').onclick = () => {
                    vam('#popup').setAttribute('style', 'display:none')
                    vam('body').setAttribute('style', 'overflow:auto')
                }
                vam('#outpopup').onclick = () => {
                    vam('#popup').setAttribute('style', 'display:none')
                    vam('body').setAttribute('style', 'overflow:auto')
                }
                vam('body').setAttribute('style', 'overflow:hidden')
                if (t.getAttribute('index') == '1') {
                    vam('#dethitenbang').innerText = 'BẢNG A'
                    vam('#chungket').innerHTML =
                        `<div style="padding-top: 50px;display: flex;gap:16px;justify-content: center;">
                    <button class="buttonvam"><a href="${rows[2]['Bảng A']}"
                    target="_blank">Đăng ký</a></button>
                    <button class="showpoinvl buttonvam" index="1">Đề thi và bảng điểm (Vòng loại)</button>
                    <button class="showpoin buttonvam" index="1">Xem bảng điểm (Chung kết)</button>
                    <button class="buttonvam showdetail" index='1'>Đề thi chi tiết (Chung kết)</button>
                </div>`
                    vam('#loadcontent').innerHTML = rows[3]['Bảng A']
                    More()
                }
                else if (t.getAttribute('index') == '2') {
                    vam('#dethitenbang').innerText = 'BẢNG B'
                    vam('#chungket').innerHTML =
                        `
                        <div style="padding-top: 50px;display: flex;gap:16px;justify-content: center;">
                                <button class="buttonvam"><a href="${rows[2]['Bảng B']}"
                                        target="_blank">Đăng
                                        ký</a></button>
                                        <button class="showpoinvl buttonvam" index="2">Đề thi và bảng điểm (Vòng loại)</button>
                                <button class="showpoin buttonvam" index="2">Xem bảng điểm (Chung kết)</button>
                                <button class="buttonvam showdetail" index='2'>Đề thi chi tiết (Chung kết)</button> 
                            </div>`
                    vam('#loadcontent').innerHTML = rows[3]['Bảng B']
                    More()
                }
                else if (t.getAttribute('index') == '3') {
                    vam('#dethitenbang').innerText = 'BẢNG C'
                    vam('#chungket').innerHTML =
                        `<div style="padding-top: 50px;display: flex;gap:16px;justify-content: center;">
                    <button class="buttonvam"><a href="${rows[2]['Bảng C']}"
                            target="_blank">Đăng
                            ký</a></button>
                            <button class="showpoinvl buttonvam" index="3">Đề thi và bảng điểm (Vòng loại)</button>
                    <button class="showpoin buttonvam" index="3">Xem bảng điểm (Chung kết)</button>
                    <button class="buttonvam showdetail" index='3'>Đề thi chi tiết (Chung kết)</button>
                </div>`
                    vam('#loadcontent').innerHTML = rows[3]['Bảng C']
                    More()
                }
                else if (t.getAttribute('index') == '4') {
                    vam('#dethitenbang').innerText = 'BẢNG C++ ĐẶC BIỆT'
                    vam('#chungket').innerHTML =
                        `<div style="padding-top: 50px;display: flex;gap:16px;justify-content: center;">
                    <button class="buttonvam"><a href="${rows[2]['Bảng C++ đặc biệt']}"
                            target="_blank">Đăng
                            ký</a></button>
                            <button class="showpoinvl buttonvam" index="4">Đề thi và bảng điểm (Vòng loại)</button>
                            <button class="showpoin buttonvam" index="4">Xem bảng điểm (Chung kết)</button>
                            <button class="buttonvam showdetail" index='4'>Đề thi chi tiết (Chung kết)</button>
                </div>`
                    vam('#loadcontent').innerHTML = rows[3]['Bảng C++ đặc biệt']
                    More()
                }
            }
        })
    })
function Loadlink(g) {
    let pdfEmbed =
        `<embed src="${g}" type="application/pdf" width="100%" height="100%">
        <div id="out-pdfViewer"><i class="bi bi-box-arrow-left"></i>
            <p>Thoát</p>
        </div>`
    return pdfEmbed
}

vam('#Detail_Prize').onclick = () => {
    document.querySelector('#pdfViewer').style.display = "block";
    document.querySelector('#pdfViewer-wrap').innerHTML = Loadlink('https://drive.google.com/file/d/1ns6e2z9HUBYfraXz40J03mo4ePWj4eM1/preview')
    document.querySelector('body').setAttribute('style', 'overflow:hidden');
    document.querySelector('#out-pdfViewer').onclick = () => {
        document.querySelector('#pdfViewer').style.display = "none";
        document.querySelector('#pdfViewer-wrap').innerHTML = ''
        document.querySelector('body').setAttribute('style', 'overflow:auto');
    }
}
vam('#Detail_IF').onclick = () => {
    document.querySelector('#pdfViewer').style.display = "block";
    document.querySelector('#pdfViewer-wrap').innerHTML = Loadlink('https://drive.google.com/file/d/1NtoJ4I5uvhzSfRvl91iZ7gr0AGaOakuq/preview')
    document.querySelector('body').setAttribute('style', 'overflow:hidden');
    document.querySelector('#out-pdfViewer').onclick = () => {
        document.querySelector('#pdfViewer').style.display = "none";
        document.querySelector('#pdfViewer-wrap').innerHTML = ''
        document.querySelector('body').setAttribute('style', 'overflow:auto');
    }
}
function More() {
    fetchSheet
        .fetch({
            gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
            wSheetName: 'Tài liệu Thêm',
        })
        .then((rows) => {

            // lấy bảng điểm 
            document.querySelectorAll('.showpoin').forEach((t) => {

                t.addEventListener("click", function () {

                    if (t.getAttribute('index') == '1') {
                        document.querySelector('#pdfViewer').style.display = "block";
                        document.querySelector('#pdfViewer-wrap').innerHTML = Loadlink(rows[1]['Bảng A'])
                        document.querySelector('body').setAttribute('style', 'overflow:hidden');
                        document.querySelector('#out-pdfViewer').onclick = () => {
                            document.querySelector('#pdfViewer').style.display = "none";
                            document.querySelector('#pdfViewer-wrap').innerHTML = ''
                            document.querySelector('body').setAttribute('style', 'overflow:auto');
                        }
                    }
                    else if (t.getAttribute('index') == '2') {
                        document.querySelector('#pdfViewer').style.display = "block";
                        document.querySelector('#pdfViewer-wrap').innerHTML = Loadlink(rows[1]['Bảng B'])
                        document.querySelector('body').setAttribute('style', 'overflow:hidden');
                        document.querySelector('#out-pdfViewer').onclick = () => {
                            document.querySelector('#pdfViewer').style.display = "none";
                            document.querySelector('#pdfViewer-wrap').innerHTML = ''
                            document.querySelector('body').setAttribute('style', 'overflow:auto');
                        }
                    }
                    else if (t.getAttribute('index') == '3') {
                        document.querySelector('#pdfViewer').style.display = "block";
                        document.querySelector('#pdfViewer-wrap').innerHTML = Loadlink(rows[1]['Bảng C'])
                        document.querySelector('body').setAttribute('style', 'overflow:hidden');
                        document.querySelector('#out-pdfViewer').onclick = () => {
                            document.querySelector('#pdfViewer').style.display = "none";
                            document.querySelector('#pdfViewer-wrap').innerHTML = ''
                            document.querySelector('body').setAttribute('style', 'overflow:auto');
                        }
                    }
                    else if (t.getAttribute('index') == '4') {
                        document.querySelector('#pdfViewer').style.display = "block";
                        document.querySelector('#pdfViewer-wrap').innerHTML = Loadlink(rows[1]['Bảng C++ đặc biệt'])
                        document.querySelector('body').setAttribute('style', 'overflow:hidden');
                        document.querySelector('#out-pdfViewer').onclick = () => {
                            document.querySelector('#pdfViewer').style.display = "none";
                            document.querySelector('#pdfViewer-wrap').innerHTML = ''
                            document.querySelector('body').setAttribute('style', 'overflow:auto');
                        }
                    }
                });
            })
            // lấy chi tiết đề
            document.querySelectorAll('.showdetail').forEach((t) => {
                t.addEventListener("click", function () {
                    if (t.getAttribute('index') == '1') {
                        document.querySelector('#pdfViewer').style.display = "block";
                        document.querySelector('#pdfViewer-wrap').innerHTML = Loadlink(rows[0]['Bảng A'])
                        document.querySelector('body').setAttribute('style', 'overflow:hidden');
                        document.querySelector('#out-pdfViewer').onclick = () => {
                            document.querySelector('#pdfViewer').style.display = "none";
                            document.querySelector('#pdfViewer-wrap').innerHTML = ''
                            document.querySelector('body').setAttribute('style', 'overflow:auto');
                        }
                    }
                    else if (t.getAttribute('index') == '2') {
                        document.querySelector('#pdfViewer').style.display = "block";
                        document.querySelector('#pdfViewer-wrap').innerHTML = Loadlink(rows[0]['Bảng B'])
                        document.querySelector('body').setAttribute('style', 'overflow:hidden');
                        document.querySelector('#out-pdfViewer').onclick = () => {
                            document.querySelector('#pdfViewer').style.display = "none";
                            document.querySelector('#pdfViewer-wrap').innerHTML = ''
                            document.querySelector('body').setAttribute('style', 'overflow:auto');
                        }
                    }
                    else if (t.getAttribute('index') == '3') {
                        document.querySelector('#pdfViewer').style.display = "block";
                        document.querySelector('#pdfViewer-wrap').innerHTML = Loadlink(rows[0]['Bảng C'])
                        document.querySelector('body').setAttribute('style', 'overflow:hidden');
                        document.querySelector('#out-pdfViewer').onclick = () => {
                            document.querySelector('#pdfViewer').style.display = "none";
                            document.querySelector('#pdfViewer-wrap').innerHTML = ''
                            document.querySelector('body').setAttribute('style', 'overflow:auto');
                        }
                    }
                    else if (t.getAttribute('index') == '4') {
                        document.querySelector('#pdfViewer').style.display = "block";
                        document.querySelector('#pdfViewer-wrap').innerHTML = Loadlink(rows[0]['Bảng C++ đặc biệt'])
                        document.querySelector('body').setAttribute('style', 'overflow:hidden');
                        document.querySelector('#out-pdfViewer').onclick = () => {
                            document.querySelector('#pdfViewer').style.display = "none";
                            document.querySelector('#pdfViewer-wrap').innerHTML = ''
                            document.querySelector('body').setAttribute('style', 'overflow:auto');
                        }
                    }
                });
            })
            document.querySelectorAll('.showpoinvl').forEach((t) => {
                t.onclick = () => {
                    document.querySelector('#pdfViewer').style.display = "block";
                    document.querySelector('#pdfViewer-wrap').innerHTML = Loadlink('https://drive.google.com/file/d/1Y9I1NPztq1CK3TVj9sCz3YfaYa4Z0SqC/preview')
                    document.querySelector('body').setAttribute('style', 'overflow:hidden');
                    document.querySelector('#out-pdfViewer').onclick = () => {
                        document.querySelector('#pdfViewer').style.display = "none";
                        document.querySelector('#pdfViewer-wrap').innerHTML = ''
                        document.querySelector('body').setAttribute('style', 'overflow:auto');
                    }
                }
            })

        });
}



/*
vams('.dkthamgia').forEach((t) => {
    t.onclick = () => {
        vam('#popup').setAttribute('style', 'display:block')
        vam('.background').onclick = () => {
            vam('#popup').setAttribute('style', 'display:none')
            vam('body').setAttribute('style', 'overflow:auto')
        }
        vam('#outpopup').onclick = () => {
            vam('#popup').setAttribute('style', 'display:none')
            vam('body').setAttribute('style', 'overflow:auto')
        }
        vam('body').setAttribute('style', 'overflow:hidden')
        if (t.getAttribute('index') == '1') {
            vam('#dethitenbang').innerText = 'ĐỀ THI BẢNG A'
            vam('#chungket').innerHTML =
                `
                <p>
                • Đề thi ở Vòng chung kết có 02 phần: cơ bản và nâng cao<br>
                - Phần cơ bản: chỉ bao gồm các nhiệm vụ cố định (biết trước)<br>
                - Phần nâng cao: ngoài các nhiệm vụ cố định còn có thêm một số nhiệm vụ trực tiếp do BTC
                và BGK ra đề ngay tại buổi thi đấu (không biết trước).<br>
                • Mỗi bảng có 1 chủ đề và bộ đề thi-bảng điểm cho phần thi cơ bản (đính kèm thiết kế sa
                bàn và các mô hình nhiệm vụ trên sa bàn).<br>
                • Thời gian tối đa hoàn thành mỗi đề thi ở mỗi lượt (lần) thi được quy định cho mỗi
                bảng.<br>
                • Các đội được phép lắp ráp, lập trình và chuẩn bị Robot AI trước khi bắt đầu thi đấu
                cho tất cả các phần thi.<br>
                • Sau khi bốc thăm đề thi và thứ tự thi đấu, các đội có thời gian để cập nhật Robot AI
                tại khu vực tập trung.<br>
                • Các Robot AI sẽ được BTC kiểm tra tại khu vực cách ly.<br>
                • Đến lượt thi đấu, các đội mang Robot AI của mình từ khu vực cách ly đến khu vực thi
                đấu và thực hiện nhiệm vụ. Sau khi ký xác nhận vào danh sách kết quả, các đội mang Robot
                AI trở lại khu vực cách ly.<br>
                • Sau khi tất cả các đội thi trong bảng hoàn thành nhiệm vụ ở một lượt, các đội nhận lại
                Robot AI và có thời gian cập nhật Robot AI tại khu vực tập trung để chuẩn bị cho lượt
                thi đấu tiếp theo (nếu có).<br>
                • Mỗi đội sẽ nhận được điểm ở mỗi nhiệm vụ tương ứng với mức độ hoàn thành. Điểm số cho
                mỗi phần thi sẽ dựa vào lượt thực hiện tốt nhất của mỗi đội.<br>
                • Điểm cuối cùng của cuộc thi vòng chung kết là tổng điểm của 2 phần thi. Trong trường
                hợp các đội xuất sắc bằng điểm nhau sẽ tính đến các tiêu chí phụ để căn cứ vào đó chọn
                ra đội được giải thưởng tương ứng của bảng đấu.<br>
            </p>
            <p>
                <b>CHỦ ĐỀ: THU THẬP TÀI NGUYÊN</b><br>
                • Thông qua chủ đề Thu Thập Tài Nguyên, đề thi bảng A yêu cầu Robot AI thực hiện các
                nhiệm
                vụ thu thập các mô hình thi đấu khác nhau được đặt ở các vị trí khác nhau trên sa bàn
                tương ứng với các mẫu tài nguyên nước, đất, khoáng chất, di tích sự sống và mang chúng
                về đúng khu vực quy định cho từng loại đồng thời phải tránh các vật cản cố định trên sa
                bàn.<br>
                • Các đội thi được phép sử dụng các thiết bị kết nối không dây bất kì để lập trình điều
                khiển Robot AI trong thời gian thi đấu (nhưng các thí sinh không được phép chạm vào
                Robot AI)..<br>
                <b>• Sản phẩm khuyến nghị: bộ giáo cụ AI Smart Life và máy tính bảng với ứng dụng uKit
                    Edu.</b><br>
            </p>
            <img style="width: 100%;padding: 16px 0;"
                src="https://lh3.googleusercontent.com/d/1RW1VJktMCCS2IYugs8XZrdgnMrDmXaUa">
            <p>
                <b>Thách thức cần giải quyết</b><br>
                • Giải pháp chiến thuật thực hiện các nhiệm vụ<br>
                • Giải pháp thiết kế Robot AI<br>
                • Giải pháp lập trình cho Robot AI thực hiện các nhiệm vụ<br>
                - Khả năng di chuyển<br>
                - Khả năng tránh vật cản (nếu lập trình tự động)<br>
                - Khả năng nhận diện màu sắc (nếu lập trình tự động)<br>
                - Khả năng lấy và mang vật thể về đúng vị trí (nếu lập trình tự động)<br>
                • Kỹ năng điều khiển Robot AI thực hiện các nhiệm vụ (mỗi thí sinh trong đội chỉ được
                phép tham gia điều khiển tối đa 1 lượt thi ở mỗi phần thi nếu lập trình điều khiển trực
                tiếp)<br>
                - Di chuyển<br>
                - Tránh vật cản<br>
                - Lấy và mang vật thể về đúng vị trí<br>
            </p>
            <div style="padding-top: 50px;display: flex;gap:16px">
            <button class="buttonvam"><a href="https://forms.gle/pYkZiaFH3EpxEJtD7"
                    target="_blank">Đăng
                    ký</a></button>
            <button class="showpoin buttonvam" index="1">Xem bảng điểm</button>
            <button class="buttonvam showdetail" index='1'>Đề thi chi tiết</button>
        </div>`
            More()
        }
        else if (t.getAttribute('index') == '2') {
            vam('#dethitenbang').innerText = 'ĐỀ THI BẢNG B'
            vam('#chungket').innerHTML =
                `
                <p>
                            • Đề thi ở Vòng chung kết có 02 phần: cơ bản và nâng cao<br>
                            - Phần cơ bản: chỉ bao gồm các nhiệm vụ cố định (biết trước)<br>
                            - Phần nâng cao: ngoài các nhiệm vụ cố định còn có thêm một số nhiệm vụ trực tiếp do BTC
                            và BGK ra đề ngay tại buổi thi đấu (không biết trước).<br>
                            • Mỗi bảng có 1 chủ đề và bộ đề thi-bảng điểm cho phần thi cơ bản (đính kèm thiết kế sa
                            bàn và các mô hình nhiệm vụ trên sa bàn).<br>
                            • Thời gian tối đa hoàn thành mỗi đề thi ở mỗi lượt (lần) thi được quy định cho mỗi
                            bảng.<br>
                            • Các đội được phép lắp ráp, lập trình và chuẩn bị Robot AI trước khi bắt đầu thi đấu
                            cho tất cả các phần thi.<br>
                            • Sau khi bốc thăm đề thi và thứ tự thi đấu, các đội có thời gian để cập nhật Robot AI
                            tại khu vực tập trung.<br>
                            • Các Robot AI sẽ được BTC kiểm tra tại khu vực cách ly.<br>
                            • Đến lượt thi đấu, các đội mang Robot AI của mình từ khu vực cách ly đến khu vực thi
                            đấu và thực hiện nhiệm vụ. Sau khi ký xác nhận vào danh sách kết quả, các đội mang Robot
                            AI trở lại khu vực cách ly.<br>
                            • Sau khi tất cả các đội thi trong bảng hoàn thành nhiệm vụ ở một lượt, các đội nhận lại
                            Robot AI và có thời gian cập nhật Robot AI tại khu vực tập trung để chuẩn bị cho lượt
                            thi đấu tiếp theo (nếu có).<br>
                            • Mỗi đội sẽ nhận được điểm ở mỗi nhiệm vụ tương ứng với mức độ hoàn thành. Điểm số cho
                            mỗi phần thi sẽ dựa vào lượt thực hiện tốt nhất của mỗi đội.<br>
                            • Điểm cuối cùng của cuộc thi vòng chung kết là tổng điểm của 2 phần thi. Trong trường
                            hợp các đội xuất sắc bằng điểm nhau sẽ tính đến các tiêu chí phụ để căn cứ vào đó chọn
                            ra đội được giải thưởng tương ứng của bảng đấu.<br>
                        </p>
                        <p>
                            <b>CHỦ ĐỀ: DU HÀNH VŨ TRỤ</b><br>
                            • Thông qua chủ đề Du Hành Vũ Trụ, đề thi bảng B yêu cầu Robot AI thực hiện các nhiệm vụ nhận diện các khối nhiệm vụ (năng lượng cạn và đầy) có màu sắc khác nhau đặt tại các khu vực khác nhau để thay thế và đưa về đúng các vị trí quy định (trạm sạc và phi thuyền) đồng thời vượt qua các địa hình khác nhau (line nét liền, line nét đứt, cầu dốc) để đưa phi thuyển về đúng vị trí quy định và về đích.<br>
                            • Các đội thi phải lập trình điều khiển Robot AI hoàn toàn tự động trong thời gian thi đấu (không sử dụng bất kì thiết bị lập trình nào).<br>
                            <b>• Sản phẩm khuyến nghị: bộ giáo cụ AI Super Engineer và laptop với phần mềm uCode/Arduino.</b><br>
                        </p>
                        <img style="width: 100%;padding: 16px 0;"
                            src="https://lh3.googleusercontent.com/d/1Nji4f2696Z7WMwSvpTFDqtiJuoSKO66n">
                        <p>
                            <b>Thách thức cần giải quyết</b><br>
                            • Giải pháp chiến thuật thực hiện các nhiệm vụ<br>
                            • Giải pháp thiết kế Robot AI<br>
                            • Giải pháp lập trình cho Robot AI thực hiện các nhiệm vụ<br>
                            - Khả năng di chuyển theo line (nét liền, nét đứt)<br>
                            - Khả năng di chuyển qua cầu dốc<br>
                            - Khả năng phát hiện vật cản <br>
                            - Khả năng nhận diện màu sắc <br>
                            - Khả năng lấy và mang vật thể về đúng vị trí <br>
                        </p>
                        <div style="padding-top: 50px;display: flex;gap:16px">
                                <button class="buttonvam"><a href="https://forms.gle/ko3fduTh8UtBVM1e6"
                                        target="_blank">Đăng
                                        ký</a></button>
                                <button class="showpoin buttonvam" index="2">Xem bảng điểm</button>
                                <button class="buttonvam showdetail" index='2'>Đề thi chi tiết</button>
                            </div>`
            More()
        }
        else if (t.getAttribute('index') == '3') {
            vam('#dethitenbang').innerText = 'ĐỀ THI BẢNG C'
            vam('#chungket').innerHTML =
                `
            <p>
                        • Đề thi ở Vòng chung kết có 02 phần: cơ bản và nâng cao<br>
                        - Phần cơ bản: chỉ bao gồm các nhiệm vụ cố định (biết trước)<br>
                        - Phần nâng cao: ngoài các nhiệm vụ cố định còn có thêm một số nhiệm vụ trực tiếp do BTC
                        và BGK ra đề ngay tại buổi thi đấu (không biết trước).<br>
                        • Mỗi bảng có 1 chủ đề và bộ đề thi-bảng điểm cho phần thi cơ bản (đính kèm thiết kế sa
                        bàn và các mô hình nhiệm vụ trên sa bàn).<br>
                        • Thời gian tối đa hoàn thành mỗi đề thi ở mỗi lượt (lần) thi được quy định cho mỗi
                        bảng.<br>
                        • Các đội được phép lắp ráp, lập trình và chuẩn bị Robot AI trước khi bắt đầu thi đấu
                        cho tất cả các phần thi.<br>
                        • Sau khi bốc thăm đề thi và thứ tự thi đấu, các đội có thời gian để cập nhật Robot AI
                        tại khu vực tập trung.<br>
                        • Các Robot AI sẽ được BTC kiểm tra tại khu vực cách ly.<br>
                        • Đến lượt thi đấu, các đội mang Robot AI của mình từ khu vực cách ly đến khu vực thi
                        đấu và thực hiện nhiệm vụ. Sau khi ký xác nhận vào danh sách kết quả, các đội mang Robot
                        AI trở lại khu vực cách ly.<br>
                        • Sau khi tất cả các đội thi trong bảng hoàn thành nhiệm vụ ở một lượt, các đội nhận lại
                        Robot AI và có thời gian cập nhật Robot AI tại khu vực tập trung để chuẩn bị cho lượt
                        thi đấu tiếp theo (nếu có).<br>
                        • Mỗi đội sẽ nhận được điểm ở mỗi nhiệm vụ tương ứng với mức độ hoàn thành. Điểm số cho
                        mỗi phần thi sẽ dựa vào lượt thực hiện tốt nhất của mỗi đội.<br>
                        • Điểm cuối cùng của cuộc thi vòng chung kết là tổng điểm của 2 phần thi. Trong trường
                        hợp các đội xuất sắc bằng điểm nhau sẽ tính đến các tiêu chí phụ để căn cứ vào đó chọn
                        ra đội được giải thưởng tương ứng của bảng đấu.<br>
                    </p>
                    <p>
                        <b>CHỦ ĐỀ: XỬ LÝ THÔNG TIN</b><br>
                        • Thông qua chủ đề Xử Lý Thông Tin, đề thi bảng C yêu cầu Robot AI đi theo đường line vượt qua các loại địa hình khác nhau (đường thẳng, đường cong hình chữ S, đường hẹp góc vuông, đường hầm, đường cụt, cầu dốc) từ vị trí xuất phát lựa chọn, để thực hiện các nhiệm vụ thu thập thông tin dưới dạng các mã QR tại các trạm tín hiệu có số thứ tự khác nhau và hiển thị đúng thông tin theo thứ tự trạm tín hiệu đồng thời lấy và mang mô hình nhiệm vụ về vị trí đích (vị trí quy định còn lại, khác với vị trí xuất phát đã chọn).<br>
                        • Các đội thi phải lập trình điều khiển Robot AI hoàn toàn tự động trong thời gian thi đấu (không sử dụng bất kì thiết bị lập trình nào).<br>
                        <b>• Sản phẩm khuyến nghị: bộ giáo cụ UGOT và laptop với phần mềm uCode/uPython.</b><br>
                    </p>
                    <img style="width: 100%;padding: 16px 0;"
                        src="https://lh3.googleusercontent.com/d/1e_CoISYHD2RilvtL2FI4UM3cPMRAxtqS">
                    <p>
                        <b>Thách thức cần giải quyết</b><br>
                        • Giải pháp chiến thuật thực hiện các nhiệm vụ<br>
                        • Giải pháp thiết kế Robot AI<br>
                        • Giải pháp lập trình cho Robot AI thực hiện các nhiệm vụ<br>
                        - Khả năng nhận diện line để di chuyển<br>
                        - Khả năng thay đổi độ cao để di chuyển hiệu quả qua một số loại địa hình<br>
                        - Khả năng nhận diện các mã QR ở các vị trí khác nhau<br>
                        - Khả năng nhận diện màu sắc<br>
                        - Khả năng lấy và mang vật thể về đúng vị trí quy định<br>
                        - Khả năng lưu trữ và sắp xếp dữ liệu thông tin<br>
                    </p>
                    <div style="padding-top: 50px;display: flex;gap:16px">
                    <button class="buttonvam"><a href="https://forms.gle/5DcdVTHQtXm6ttay8"
                            target="_blank">Đăng
                            ký</a></button>
                    <button class="showpoin buttonvam" index="3">Xem bảng điểm</button>
                    <button class="buttonvam showdetail" index='3'>Đề thi chi tiết</button>
                </div>`

            More()
        }
        else if (t.getAttribute('index') == '4') {
            vam('#dethitenbang').innerText = 'ĐỀ THI BẢNG C* ĐẶC BIỆT'
            vam('#chungket').innerHTML =
                `
            <p>
                        • Đề thi ở Vòng chung kết có 02 phần: cơ bản và nâng cao<br>
                        - Phần cơ bản: chỉ bao gồm các nhiệm vụ cố định (biết trước)<br>
                        - Phần nâng cao: ngoài các nhiệm vụ cố định còn có thêm một số nhiệm vụ trực tiếp do BTC
                        và BGK ra đề ngay tại buổi thi đấu (không biết trước).<br>
                        • Mỗi bảng có 1 chủ đề và bộ đề thi-bảng điểm cho phần thi cơ bản (đính kèm thiết kế sa
                        bàn và các mô hình nhiệm vụ trên sa bàn).<br>
                        • Thời gian tối đa hoàn thành mỗi đề thi ở mỗi lượt (lần) thi được quy định cho mỗi
                        bảng.<br>
                        • Các đội được phép lắp ráp, lập trình và chuẩn bị Robot AI trước khi bắt đầu thi đấu
                        cho tất cả các phần thi.<br>
                        • Sau khi bốc thăm đề thi và thứ tự thi đấu, các đội có thời gian để cập nhật Robot AI
                        tại khu vực tập trung.<br>
                        • Các Robot AI sẽ được BTC kiểm tra tại khu vực cách ly.<br>
                        • Đến lượt thi đấu, các đội mang Robot AI của mình từ khu vực cách ly đến khu vực thi
                        đấu và thực hiện nhiệm vụ. Sau khi ký xác nhận vào danh sách kết quả, các đội mang Robot
                        AI trở lại khu vực cách ly.<br>
                        • Sau khi tất cả các đội thi trong bảng hoàn thành nhiệm vụ ở một lượt, các đội nhận lại
                        Robot AI và có thời gian cập nhật Robot AI tại khu vực tập trung để chuẩn bị cho lượt
                        thi đấu tiếp theo (nếu có).<br>
                        • Mỗi đội sẽ nhận được điểm ở mỗi nhiệm vụ tương ứng với mức độ hoàn thành. Điểm số cho
                        mỗi phần thi sẽ dựa vào lượt thực hiện tốt nhất của mỗi đội.<br>
                        • Điểm cuối cùng của cuộc thi vòng chung kết là tổng điểm của 2 phần thi. Trong trường
                        hợp các đội xuất sắc bằng điểm nhau sẽ tính đến các tiêu chí phụ để căn cứ vào đó chọn
                        ra đội được giải thưởng tương ứng của bảng đấu.<br>
                    </p>
                    <p>
                        <b>CHỦ ĐỀ: THU THẬP TÀI NGUYÊN</b><br>
                        • Thông qua chủ đề Tương Lai Của Robot AI, đề thi bảng C* Đặc biệt yêu cầu Robot AI hình người Yanshee nhận biết môi trường không gian xung quanh để vượt qua các chướng ngại vật (bậc thang và rào chắn), thực hiện nhận diện khuôn mặt và mã AprilTag, nghe lệnh bằng giọng nói để lấy và vận chuyển các vật phẩm có màu sắc (xanh và đỏ) được chỉ định đến đúng khu vực lưu trữ vật phẩm tương ứng.<br>
                        • Các đội thi phải lập trình điều khiển Robot AI hoàn toàn tự động trong thời gian thi đấu (không sử dụng bất kì thiết bị lập trình nào).<br>
                        <b>• Sản phẩm bắt buộc: Robot AI hình người Yanshee (Đấu trường AI đầu tiên tại Việt Nam sử dụng Robot hình người).</b><br>
                    </p>
                    <img style="width: 100%;padding: 16px 0;"
                        src="https://lh3.googleusercontent.com/d/1RW1VJktMCCS2IYugs8XZrdgnMrDmXaUa">
                    <p>
                        <b>Thách thức cần giải quyết</b><br>
                        • Giải pháp chiến thuật thực hiện các nhiệm vụ<br>
                        • Giải pháp lập trình cho Robot AI thực hiện các nhiệm vụ<br>
                        - Khả năng nhận biết môi trường không gian xung quanh<br>
                        - Khả năng thay đổi tư thế và giữ thanh bằng để di chuyển hiệu quả qua một số loại địa hình.<br>
                        - Khả năng nhận diện khuôn mặt và mã AprilTag.<br>
                        - Khả năng nhận diện màu sắc.<br>
                        - Khả năng nghe lệnh bằng giọng nói.<br>
                        - Khả năng phát hiện vật cản.<br>
                        - Khả năng lấy và mang vật thể về đúng vị trí quy định.<br>
                    </p>
                    <div style="padding-top: 50px;display: flex;gap:16px">
                    <button class="buttonvam"><a href="https://forms.gle/xyQ8WACFfnGqcQTn9"
                            target="_blank">Đăng
                            ký</a></button>
                    <!--<button class="buttonvam showdetail" index='4'>Đề thi chi tiết</button>-->
                </div>`
            More()
        }
    }
})*/



const intromain =
    `<div class="intro">
                                                                                            <div class="intrologo">
                                                                                                <div class="introlofogen">
                                                                                                    <img src="https://lh3.googleusercontent.com/d/1PE-EtRbgsb7dBK3iPHG6INK8GPE4r1AZ">
                                                                                                </div>
                                                                                                <div class="intrologo-hiden">
                                                                                                    <h2>ROBO G</h2>
                                                                                                    <p> Việt Nam </p><span>2024</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="introone"></div>
                                                                                        </div>`;

window.onload = () => {
    vam('.loadweb').remove();
    vam('#mainintro').innerHTML = intromain
    vam('body').setAttribute('style', 'overflow: hidden;')
    vam('.vam_title2').setAttribute('style', 'animation: introbanner .8s 1.5s linear forwards;')
    vam('#intro_content').setAttribute('style', 'animation: introbanner .8s 1.5s linear forwards;')
    vam('#intro_logo').setAttribute('style', 'animation: introbanner .8s 1.3s linear forwards;')
    vam('#intro_anim').setAttribute('style', 'animation: introbanner .8s 1.5s linear forwards;')
    vam('#itro-spanns').setAttribute('style', 'animation: introbanner .8s 1.5s linear forwards;')
    setTimeout(() => {
        vam('body').setAttribute('style', 'overflow:auto')
    }, 2000)
    setTimeout(() => {
        vam('.intro').remove()
    }, 2500)
};


window.onscroll = () => {
    var scroll = document.querySelector('#timeline').getClientRects()[0];
    console.log()
    if (scroll.top < -80) {
        document.querySelectorAll('.dot>div').forEach((t) => {
            t.classList.add('start')
        })
    }
};

let w = screen.width
if (w < 982) {
    vam('#timeline_img').src = 'https://lh3.googleusercontent.com/d/1x5wPrSLPGD8AVoTXsDt63lqrnpIVIJJD'
}

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'header',
    })
    .then((rows) => {
        window.addEventListener("scroll", function (event) {

            var scroll_y = this.scrollY;
            this.document.querySelector('#intro').setAttribute('style', `top:${scroll_y / 3}px`)
            if (scroll_y > 600) {
                document.querySelector('#header1412a1').setAttribute('style', `height: max-content;
                position: sticky;`)
                document.querySelector('#header_logo').src = rows[0]['logo màu']
                document.querySelector('.header1412a1-list').setAttribute('style', 'color:var(--color-text)')
                document.querySelector('.s').classList.add('acc')

            } else {
                document.querySelector('#header1412a1').setAttribute('style', `height: 0;
                position: relative;`)
                document.querySelector('#header_logo').src = rows[0]['logo trắng']
                document.querySelector('.header1412a1-list').setAttribute('style', 'color:white')
                document.querySelector('.s').classList.remove('acc')
            }
        });
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'intro',
    })
    .then((rows) => {
        document.querySelector('#intro_content').innerText = rows[0]['Nội dung']
        document.querySelector('#intro_title').innerText = rows[0]['Tiêu đề']
        document.querySelector('#intro_background').src = rows[0]['background']
        document.querySelector('#intro_logo').src = rows[0]['logo']
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'Mục tiêu',
    })
    .then((rows) => {
        let items = ''
        vam('#introduce_sTitle').innerText = rows[0]['shortTitle']
        vam('#introduce_title').innerText = rows[0]['Title']
        let i = 1
        let v = ''
        rows.forEach((T) => {
            if (i == 5) {
                items +=
                    `
                <div class="col-lg-4 col-md-6 introd-vam_boxwrap">
                    <div>
                        <div class="introd-vam_i"><i class="bi ${T.icon}"></i></div>
                        <h1 >${T.Title_nav}</h1>
                        <p >${T.Content}<p id="loadtg" style="color:var(--color-text);cursor:pointer;margin-top:10px">Xem Thêm Thông Tin Cuộc Thi ROBO G 2024 Thế Giới</p></p>
                    </div>
                </div>
            `
            }
            else {
                items +=
                    `
                <div class="col-lg-4 col-md-6 introd-vam_boxwrap">
                    <div>
                        <div class="introd-vam_i"><i class="bi ${T.icon}"></i></div>
                        <h1 >${T.Title_nav}</h1>
                        <p >${T.Content}</p>
                    </div>
                </div>
            `
            }

            i++
        })
        vam('.introduce_mt-wrap').innerHTML = items
        vam('#loadtg').onclick = () => {
            document.querySelector('#pdfViewer').style.display = "block";
            document.querySelector('#pdfViewer-wrap').innerHTML = Loadlink(rows[0]['Đề Thi Thế Giới'])
            document.querySelector('body').setAttribute('style', 'overflow:hidden');
            document.querySelector('#out-pdfViewer').onclick = () => {
                document.querySelector('#pdfViewer').style.display = "none";
                document.querySelector('#pdfViewer-wrap').innerHTML = ''
                document.querySelector('body').setAttribute('style', 'overflow:auto');
            }
        }
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'Điều Kiện Tham Gia',
    })
    .then((rows) => {
        let items = ''
        let i = 1
        rows.forEach((t) => {
            if (t.ContentAll != '') {
                if (i == 1) {
                    items +=
                        `<li>
                        <p style="font-weight: 600"><span style="color: var(--color-main);font-weight: 600;">* </span>${t.ContentAll}</p>
                    </li>`
                } else {
                    items +=
                        `<li>
                        <p><span style="color: var(--color-main);font-weight: 600;">${i - 1}. </span>${t.ContentAll}</p>
                    </li>`
                }
            }
            if (t.Cotent != '') {
                vams(`#dieukien${i}`).forEach((c) => {
                    c.innerHTML += `<p>${t.Cotent}</p>`
                })
            }
            i++
        })

        vam('#loaddieukienall').innerHTML = items
    });


jQuery(document).ready(function ($) {
    $(".slider-img").on("click", function () {
        $(".slider-img").removeClass("active");
        $(this).addClass("active");
    });
});
fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'Thời gian còn lại',
    })
    .then((rows) => {
        let r = ''
        const targetDate = new Date(`${rows[0]['Time']}T23:59:59`).getTime();

        // Update the countdown every second
        const countdown = setInterval(() => {
            // Get the current date and time
            const now = new Date().getTime();

            // Calculate the remaining time
            const distance = targetDate - now;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the countdown
            document.querySelector('#days').innerText = days
            document.querySelector('#hours').innerText = hours
            document.querySelector('#minutes').innerText = minutes
            document.querySelector('#seconds').innerText = seconds

            // If the countdown is over, stop updating
            if (distance < 0) {
                clearInterval(countdown);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);
        /* #c661412b2 */
        vam('#c661412b2-iframe_click').addEventListener('click', () => {
            vam('.c661412b2-background_click').setAttribute('style', 'display:flex')
            vam('.c661412b2-iframe_click').setAttribute('style', 'display:flex')
            var c661412b2Iframe = `<iframe class="c661412b2-iframe" src="${rows[0]['iframe']}" frameborder="0"
                                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            vam('.c661412b2-iframe_click').innerHTML = c661412b2Iframe
            vam('.c661412b2-background_click').addEventListener('click', () => {
                vam('.c661412b2-background_click').setAttribute('style', 'display:none')
                vam('.c661412b2-iframe_click').setAttribute('style', 'display:none')
                vam('.c661412b2-iframe').remove()
            })
        })

    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'question',
    })
    .then((rows) => {
        let r = ''
        let i = 0
        rows.forEach((t) => {
            r +=
                `<div class="question_div" index="${i}">
                    <p class="vam_content1">${t['Câu hỏi']}</p>
                    <i class="bi bi-arrow-up-circle-fill"></i>
                </div>
                <div class="question_load" index="${i}">
                    <p class="vam_content1">${t['Câu trả lời']}</p>
                </div>`
            i++
        })
        document.querySelector('#question_load').innerHTML += r
        document.querySelectorAll('.question_div').forEach((c) => {
            c.onclick = () => {
                let i = c.getAttribute('index')
                document.querySelector(`.question_load[index="${i}"]`).classList.toggle('hide')
                document.querySelector(`.question_div[index="${i}"]>i`).classList.toggle('hide')
            }
        })
    });
fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'Giải thưởng',
    })
    .then((rows) => {
        vam('#prize_sTitle').innerText = rows[0]['shortTitle']
        vam('#prize_title').innerText = rows[0]['Title']
        vam('#prize_mContent').innerText = rows[0]['Contentmain']
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'Thông điệp',
    })
    .then((rows) => {
        let items1 = ''
        let items2 = ''
        vam('#scroll_sTitle').innerText = rows[0]['shortTitle']
        vam('#scroll_title').innerText = rows[0]['Title']
        vam('#scroll_mContent').innerText = rows[0]['Contentmain']
        rows.forEach((T) => {
            items1 +=
                `
            <div>
            <i class="bi bi-amd"></i>
                <p>${T.Thinking}</p>
            </div>  
            `
            items2 +=
                `
            <div>
            <i class="bi bi-amd"></i>
                <p>${T.Skill}</p>
            </div>  
            `
        })
        vam('#logic').innerHTML += items1
        vam('#skill').innerHTML += items2
    });
/*
fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'partner',
    })
    .then((rows) => {
        let r = ''
        let t = ''
        let y = ''
        let u = ''
        let i = ''
        let o = 1
        rows.forEach((tab) => {
            if (tab['Hình ảnh logo đơn vị chỉ đạo'] != '') {
                r +=
                    `<div class="donvi_load-wrap">
                    <img style="width:80%" src="${tab['Hình ảnh logo đơn vị chỉ đạo']}"/>
                </div>`
            }
            if (tab['Hình ảnh logo đơn vị đồng hành'] != '') {
                t +=
                    `<div class="donvi_load-wrap">
                    <img style="width:80%" src="${tab['Hình ảnh logo đơn vị đồng hành']}"/>
                </div>`
            }
            if (tab['Hình ảnh logo đơn vị đồng tổ chức'] != '') {
                y +=
                    `<div class="donvi_load-wrap">
                    <img style="width:80%" src="${tab['Hình ảnh logo đơn vị đồng tổ chức']}"/>
                </div>`
            }
            if (tab['Hình ảnh logo đơn vị truyền thông'] != '') {
                u +=
                    `<div class="donvi_load-wrap">
                    <img style="width:60%" src="${tab['Hình ảnh logo đơn vị truyền thông']}"/>
                </div>`
            }
            o++
        })
        document.querySelector('#chidao_load').innerHTML += r
        document.querySelector('#donghanh_load').innerHTML += t
        document.querySelector('#tochuc_load').innerHTML += y
        document.querySelector('#truyenthong_load').innerHTML += u
        document.querySelector('#tochucc_load').innerHTML += i
    });*/


fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'Yêu cầu thiết bị',
    })
    .then((rows) => {
        vam('#scroll-add_sTitle').innerText = rows[0]['shortTitle']
        vam('#scroll-add_title').innerText = rows[0]['Title']
        vams('.device_box-nav_con').forEach((t) => {
            t.onclick = () => {
                if (t.getAttribute('class') != 'device_box-nav_con acc') {
                    vam('.device_box-nav_con.acc').classList.remove('acc')
                    t.classList.add('acc')
                    if (t.getAttribute('index') == '1') {
                        vam('.contentdevice').innerHTML =
                            `<h1>Ở vòng sơ loại bảng A, B, C/C++</h1>
                        <div style="display: flex;align-items: start;padding: 10px 0;">
                            <div class="iconvam"></div>
                            <p style="flex: 1;">${rows[0]['Sơ loại']}</p>
                        </div>
                        <div style="display: flex;align-items: start;padding: 10px 0;">
                            <div class="iconvam"></div>
                            <p style="flex: 1;">${rows[1]['Sơ loại']}</p>
                        </div>
                        <div style="display: flex;align-items: start;padding: 10px 0;">
                            <div class="iconvam"></div>
                            <p style="flex: 1;">${rows[2]['Sơ loại']}</p>
                        </div>`
                        vam('.device_box-img>img').src = 'https://lh3.googleusercontent.com/d/1jGKEoVVhylTpKoFLWk4gSzxQMm3kBm5V'
                    }
                    else if (t.getAttribute('index') == '2') {
                        vam('.contentdevice').innerHTML =
                            `<div style="text-align: justify;" class="contentdevice">
                        <h1>Ở vòng chung kết bảng A, B và C</h1>
                        <div style="display: flex;align-items: start;padding: 10px 0;">
                            <div class="iconvam"></div>
                            <p style="flex: 1;">${rows[0]['Chung kết']}</p>
                        </div>
                        <div style="display: flex;align-items: start;padding: 10px 0;">
                            <div class="iconvam"></div>
                            <p style="flex: 1;">${rows[1]['Chung kết']}</p>
                        </div>
                        <div style="display: flex;align-items: start;padding: 10px 0;">
                            <div class="iconvam"></div>
                            <p style="flex: 1;">${rows[2]['Chung kết']}</p>
                        </div>
                        <h1>Ở vòng chung kết bảng C++ đặc biệt</h1>
                        <div style="display: flex;align-items: start;padding: 10px 0;">
                            <div class="iconvam"></div>
                            <p style="flex: 1;">${rows[0]['Chung kết C++']}</p>
                        </div>
                    </div>`
                        vam('.device_box-img>img').src = 'https://lh3.googleusercontent.com/d/1jGKEoVVhylTpKoFLWk4gSzxQMm3kBm5V'
                    }
                }
            }
        })

    });

/* test */
