
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const vam = document.querySelector.bind(document);
const vams = document.querySelectorAll.bind(document);
function downloadZip() {
    document.querySelector('#pdfViewer').style.display = "block";
    const pdfUrl = 'https://drive.google.com/file/d/1-J2AOnjD4pt_XT2IBExcD_LSxm9PfY_G/preview'; // Thay đổi đường dẫn đến tệp PDF của bạn tại đây
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
    /*
    var zipUrl = '../The-le-thi-dau-Robo-G-2024-15052024-_1_.pdf';

    // Tạo một yêu cầu HTTP mới
    var xhr = new XMLHttpRequest();
    xhr.open('GET', zipUrl, true);
    xhr.responseType = 'blob'; // Để có thể xử lý dữ liệu như là dạng binary

    // Sự kiện xảy ra khi yêu cầu được hoàn thành
    xhr.onload = function (event) {
        if (xhr.status === 200) {
            // Tạo một URL cho dữ liệu blob
            var blob = xhr.response;
            var url = window.URL.createObjectURL(blob);

            // Tạo một thẻ a ẩn để tải file
            var a = document.createElement('a');
            a.href = url;
            a.download = 'The le thi dau Robo G 2024.pdf'; // Tên file bạn muốn lưu
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        }
    };

    // Bắt đầu yêu cầu
    xhr.send();*/
}


function More() {
    fetchSheet
        .fetch({
            gSheetId: '1V9ChaNGZHj8wu8iUEibzKW_od5LRDgDNMoGw6IV3pi8',
            wSheetName: 'main',
        })
        .then((rows) => {
            // lấy bảng điểm 
            document.querySelectorAll('.showpoin').forEach((t) => {
                t.addEventListener("click", function () {
                    if (t.getAttribute('index') == '1') {
                        document.querySelector('#pdfViewer').style.display = "block";
                        const pdfUrl = rows[0]['Bảng A']; // Thay đổi đường dẫn đến tệp PDF của bạn tại đây
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
                    }
                    else if (t.getAttribute('index') == '2') {
                        document.querySelector('#pdfViewer').style.display = "block";
                        const pdfUrl = rows[0]['Bảng B']; // Thay đổi đường dẫn đến tệp PDF của bạn tại đây
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
                    }
                    else if (t.getAttribute('index') == '3') {
                        document.querySelector('#pdfViewer').style.display = "block";
                        const pdfUrl = rows[0]['Bảng C']; // Thay đổi đường dẫn đến tệp PDF của bạn tại đây
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
                    }
                    else if (t.getAttribute('index') == '4') {
                        document.querySelector('#pdfViewer').style.display = "block";
                        const pdfUrl = rows[0]['Bảng C* đặc biệt']; // Thay đổi đường dẫn đến tệp PDF của bạn tại đây
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
                    }
                });
            })
            // lấy chi tiết đề
            document.querySelectorAll('.showdetail').forEach((t) => {
                t.addEventListener("click", function () {
                    if (t.getAttribute('index') == '1') {
                        document.querySelector('#pdfViewer').style.display = "block";
                        const pdfUrl = rows[1]['Bảng A']; // Thay đổi đường dẫn đến tệp PDF của bạn tại đây
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
                    }
                    else if (t.getAttribute('index') == '2') {
                        document.querySelector('#pdfViewer').style.display = "block";
                        const pdfUrl = rows[1]['Bảng B']; // Thay đổi đường dẫn đến tệp PDF của bạn tại đây
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
                    }
                    else if (t.getAttribute('index') == '3') {
                        document.querySelector('#pdfViewer').style.display = "block";
                        const pdfUrl = rows[1]['Bảng C']; // Thay đổi đường dẫn đến tệp PDF của bạn tại đây
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
                    }
                    else if (t.getAttribute('index') == '4') {
                        document.querySelector('#pdfViewer').style.display = "block";
                        const pdfUrl = rows[1]['Bảng C* đặc biệt']; // Thay đổi đường dẫn đến tệp PDF của bạn tại đây
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
                    }
                });
            })
        });
}


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
})

vams('.device_box-nav_con').forEach((t) => {
    t.onclick = () => {
        if (t.getAttribute('class') != 'device_box-nav_con acc') {
            vam('.device_box-nav_con.acc').classList.remove('acc')
            t.classList.add('acc')
            if (t.getAttribute('index') == '1') {
                vam('.contentdevice').innerHTML =
                    `<h1>Ở vòng sơ loại bảng A, B, C/C*</h1>
                <div style="display: flex;align-items: start;padding: 10px 0;">
                    <div class="iconvam"></div>
                    <p style="flex: 1;">Các đội thi có thể sử dụng một hoặc nhiều phần cứng/phần
                        mềm
                        của các bộ giáo
                        cụ AI Robotics của UBTECH trong sản phẩm AI Robotics của mình.</p>
                </div>
                <div style="display: flex;align-items: start;padding: 10px 0;">
                    <div class="iconvam"></div>
                    <p style="flex: 1;">Các đội thi được phép bổ sung phần cứng của mình bằng các vật
                        liệu thông
                        thường của nhà sản xuất hoặc các vật phẩm khác, chẳng hạn như vật liệu cắt laser
                        hoặc vật liệu in 3D.</p>
                </div>
                <div style="display: flex;align-items: start;padding: 10px 0;">
                    <div class="iconvam"></div>
                    <p style="flex: 1;">Về nguyên tắc, không có hạn chế nào đối với việc sử dụng các
                        thiết bị kết hợp
                        với các bộ giáo cụ AI Robotics của UBTECH, ngoài những thiết bị gây ô nhiễm môi
                        trường và có hại cho sức khỏe hoặc an toàn xã hội.</p>
                </div>`
                vam('.device_box-img>img').src = 'https://lh3.googleusercontent.com/d/1bvUZ4Is10OCRN9zzO1zO_t4-xvk1Omnm'
            }
            else if (t.getAttribute('index') == '2') {
                vam('.contentdevice').innerHTML =
                    `<div style="text-align: justify;" class="contentdevice">
                <h1>Ở vòng chung kết bảng A, B và C</h1>
                <div style="display: flex;align-items: start;padding: 10px 0;">
                    <div class="iconvam"></div>
                    <p style="flex: 1;">Mô hình Robot AI của các đội thi chỉ được phép sử dụng các thiết bị có trong các bộ giáo cụ AI Robotics của UBTECH và phải thỏa giới hạn kích thước cho phép.</p>
                </div>
                <div style="display: flex;align-items: start;padding: 10px 0;">
                    <div class="iconvam"></div>
                    <p style="flex: 1;">Các đội thi cần phải chuẩn bị và đem theo tất cả các thiết bị cần thiết như bộ công cụ, phần mềm, máy tính xách tay hoặc máy tính bảng, các đồ phụ tùng (thiết bị thay thế) trong ngày thi đấu.</p>
                </div>
                <div style="display: flex;align-items: start;padding: 10px 0;">
                    <div class="iconvam"></div>
                    <p style="flex: 1;">Ban tổ chức không chịu trách nhiệm bảo trì hay thay thế các thiết bị có sự cố hay hư hỏng.</p>
                </div>
                <h1>Ở vòng chung kết bảng C* đặc biệt</h1>
                <div style="display: flex;align-items: start;padding: 10px 0;">
                    <div class="iconvam"></div>
                    <p style="flex: 1;">Các đội thi phải sử dụng Robot AI hình người Yanshee ở Vòng chung kết. Điều này cũng tạo nên điểm khác biệt nổi bật của Cuộc thi ROBO G 2024 là đấu trường AI đầu tiên tại Việt Nam sử dụng Robot hình người.</p>
                </div>
            </div>`
                vam('.device_box-img>img').src = 'https://lh3.googleusercontent.com/d/1LfWQ62-xlm6t0TZHMjSk2cWPOrp-x3sS'
            }
            else if (t.getAttribute('index') == '3') {
                vam('.contentdevice').innerHTML =
                    `<div style="text-align: justify;" class="contentdevice">
                    <h1>Riêng ở bảng C* Đặc biệt</h1>
                    <div style="display: flex;align-items: start;padding: 10px 0;">
                        <div class="iconvam"></div>
                        <p style="flex: 1;">Các đội thi phải sử dụng Robot AI hình người Yanshee ở cả hai Vòng sơ loại và Vòng chung kết. Điều này cũng tạo nên điểm khác biệt nổi bật của Cuộc thi ROBO G 2024 là đấu trường AI đầu tiên tại Việt Nam sử dụng Robot hình người.</p>
                    </div>
                </div>`
                vam('.device_box-img>img').src = 'https://lh3.googleusercontent.com/d/1yADN6eTIqJ7XMOZmGTMRz08_9r6VCxCH'
            }
        }
    }
})

/* #c661412b2 */
vam('#c661412b2-iframe_click').addEventListener('click', () => {
    vam('.c661412b2-background_click').setAttribute('style', 'display:flex')
    vam('.c661412b2-iframe_click').setAttribute('style', 'display:flex')
    var c661412b2Iframe = `<iframe class="c661412b2-iframe" src="https://drive.google.com/file/d/1HTbglh8_g1sfChlO7t8SPjmilkygdseD/preview" frameborder="0"
                                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    vam('.c661412b2-iframe_click').innerHTML = c661412b2Iframe
    vam('.c661412b2-background_click').addEventListener('click', () => {
        vam('.c661412b2-background_click').setAttribute('style', 'display:none')
        vam('.c661412b2-iframe_click').setAttribute('style', 'display:none')
        vam('.c661412b2-iframe').remove()
    })
})

const intromain =
    `<div class="intro">
                                                                                            <div class="intrologo">
                                                                                                <div class="introlofogen">
                                                                                                    <img src="https://lh3.googleusercontent.com/d/1PE-EtRbgsb7dBK3iPHG6INK8GPE4r1AZ">
                                                                                                </div>
                                                                                                <div class="intrologo-hiden">
                                                                                                    <h2>Robo G</h2>
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
    setTimeout(() => {
        vam('body').setAttribute('style', 'overflow:auto')
    }, 2000)
    setTimeout(() => {
        vam('.intro').remove()
    }, 2500)
};
window.addEventListener("scroll", function (event) {

    var scroll_y = this.scrollY;
    this.document.querySelector('#intro').setAttribute('style', `top:${scroll_y / 3}px`)
    if (scroll_y > 600) {
        document.querySelector('#header1412a1').setAttribute('style', `height: max-content;
        position: sticky;`)
        document.querySelector('#header_logo').src = 'https://lh3.googleusercontent.com/d/1UsHT-SsPNDizafj3sBICKJZXpvyY5zCm'
        document.querySelector('.header1412a1-list').setAttribute('style', 'color:var(--color-text)')


    } else {
        document.querySelector('#header1412a1').setAttribute('style', `height: 0;
        position: relative;`)
        document.querySelector('#header_logo').src = 'https://lh3.googleusercontent.com/d/1PE-EtRbgsb7dBK3iPHG6INK8GPE4r1AZ'
        document.querySelector('.header1412a1-list').setAttribute('style', 'color:white')
    }
});

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
    vam('#timeline_img').src = 'https://lh3.googleusercontent.com/d/1k7Vj1PoESNNB9SCrYqliJxbX1hlNdON9'
}

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'header',
    })
    .then((rows) => {
        document.querySelector('#header_logo').src = rows[0]['logo']
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
        document.querySelector('#intro_link').src = rows[0]['Link tham gia']
        // document.querySelector('#intro_img').src = rows[0]['img']
        document.querySelector('#intro_logo').src = rows[0]['logo']
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'introduce',
    })
    .then((rows) => {
        // document.querySelector('#introduce_img').src = rows[0]['Hình']
        //document.querySelector('#introduce_title').innerText = rows[0]['Tiêu đề']
        // document.querySelector('#introduce_content').innerText = rows[0]['Nội dung']
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'DoiTuongThamGia',
    })
    .then((rows) => {
        document.querySelectorAll('.object_wrapimg>img')[0].src = rows[0]['Hình ảnh']
        document.querySelectorAll('.object_wrapimg>img')[1].src = rows[1]['Hình ảnh']
        document.querySelectorAll('.object_wrapimg>img')[2].src = rows[2]['Hình ảnh']
        document.querySelector('#object_title').innerText = rows[0]['Tiêu đề']
        document.querySelector('#object_title1').innerText = rows[0]['Tiêu đề bảng']
        document.querySelector('#object_content1').innerText = rows[0]['Nội dung bảng']
        document.querySelector('#object_title2').innerText = rows[1]['Tiêu đề bảng']
        document.querySelector('#object_content2').innerText = rows[1]['Nội dung bảng']
        document.querySelector('#object_title3').innerText = rows[2]['Tiêu đề bảng']
        document.querySelector('#object_content3').innerText = rows[2]['Nội dung bảng']
        //   document.querySelector('#object_title4').innerText = rows[3]['Tiêu đề bảng']
        //    document.querySelector('#object_content4').innerText = rows[3]['Nội dung bảng']

        //   document.querySelectorAll('.object_wrapimg>img')[3].src = rows[3]['Hình ảnh']
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
        wSheetName: 'ThoiGianConLai',
    })
    .then((rows) => {
        let r = ''
        const targetDate = new Date(`${rows[0]['Thời gian hết hạn']}T23:59:59`).getTime();

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
        wSheetName: 'Giaithuong',
    })
    .then((rows) => {
        document.querySelector('#prize_titleup').innerHTML = rows[0]['Tiêu đề']
        document.querySelector('#prize_title').innerHTML = rows[0]['Tiêu đề']
        rows.forEach((t) => {
            if (t['Vòng sơ loại'] != '') {

            }
        })
        rows.forEach((t) => {
            if (t['Vòng chung kết'] != '') {

            }
        })
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'HinhThucToChuc',
    })
    .then((rows) => {
        document.querySelector('#organizational_titleup').innerText = rows[0]['Tiêu đề']
        document.querySelector('#organizational_title').innerText = rows[0]['Tiêu đề']
        document.querySelector('#organizational_titlep').innerText = rows[0]['Tiêu đề phụ']
        let r = ''
        rows.forEach((t) => {
            r += `<p style="text-indent: 10%;" class="vam_content">${t['Nội dung']}</p>`
        })
        document.querySelector('#organizational_img1>img').src = rows[0]['Hình ảnh']
        document.querySelector('#organizational_content1').innerHTML += r
    });

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
    });


fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'intro',
    })
    .then((rows) => {
        document.querySelector('#load_about').innerHTml += rows[0]['Về chúng tôi']
        document.querySelector('#intro_title').innerText = rows[0]['Tiêu đề']
        document.querySelector('#intro_background').src = rows[0]['background']
        document.querySelector('#intro_link').src = rows[0]['Link tham gia']
        document.querySelector('#intro_img').src = rows[0]['img']
        document.querySelector('#intro_logo').src = rows[0]['logo']
    });

/* test */
