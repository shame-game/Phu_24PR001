
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
vams('.videodieukien').forEach((t) => {
    t.onclick = () => {
        let g = t.getAttribute('index')
        if (g == 1) {
            vam('.c661412b2-background_click').setAttribute('style', 'display:flex')
            vam('.c661412b2-iframe_click').setAttribute('style', 'display:flex')
            var c661412b2Iframe = `<iframe class="c661412b2-iframe" src="https://drive.google.com/file/d/1wlqggn8xD0Nayj-7vY0RonP3Oe9aU8CA/preview" frameborder="0"
                                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            vam('.c661412b2-iframe_click').innerHTML = c661412b2Iframe
            vam('.c661412b2-background_click').addEventListener('click', () => {
                vam('.c661412b2-background_click').setAttribute('style', 'display:none')
                vam('.c661412b2-iframe_click').setAttribute('style', 'display:none')
                vam('.c661412b2-iframe').remove()
            })
        } else if (g == 2) {
            vam('.c661412b2-background_click').setAttribute('style', 'display:flex')
            vam('.c661412b2-iframe_click').setAttribute('style', 'display:flex')
            var c661412b2Iframe = `<iframe class="c661412b2-iframe" src="https://drive.google.com/file/d/1vIBg5cQ9KwG_ILw_DncOvsBfSvoeaLYP/preview" frameborder="0"
                                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            vam('.c661412b2-iframe_click').innerHTML = c661412b2Iframe
            vam('.c661412b2-background_click').addEventListener('click', () => {
                vam('.c661412b2-background_click').setAttribute('style', 'display:none')
                vam('.c661412b2-iframe_click').setAttribute('style', 'display:none')
                vam('.c661412b2-iframe').remove()
            })
        }
        else if (g == 3) {
            vam('.c661412b2-background_click').setAttribute('style', 'display:flex')
            vam('.c661412b2-iframe_click').setAttribute('style', 'display:flex')
            var c661412b2Iframe = `<iframe class="c661412b2-iframe" src="https://drive.google.com/file/d/1umW2r3VMZOUPFvMkNd3BztCOxeHCE-Tv/preview" frameborder="0"
                                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            vam('.c661412b2-iframe_click').innerHTML = c661412b2Iframe
            vam('.c661412b2-background_click').addEventListener('click', () => {
                vam('.c661412b2-background_click').setAttribute('style', 'display:none')
                vam('.c661412b2-iframe_click').setAttribute('style', 'display:none')
                vam('.c661412b2-iframe').remove()
            })

        } else if (g == 4) {
            vam('.c661412b2-background_click').setAttribute('style', 'display:flex')
            vam('.c661412b2-iframe_click').setAttribute('style', 'display:flex')
            var c661412b2Iframe = `<iframe class="c661412b2-iframe" src="https://drive.google.com/file/d/147-GxDfnohuCWz6SoqAtiKpBPOsgVYwy/preview" frameborder="0"
                                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            vam('.c661412b2-iframe_click').innerHTML = c661412b2Iframe
            vam('.c661412b2-background_click').addEventListener('click', () => {
                vam('.c661412b2-background_click').setAttribute('style', 'display:none')
                vam('.c661412b2-iframe_click').setAttribute('style', 'display:none')
                vam('.c661412b2-iframe').remove()
            })
        }
    }
})
vam('#intro_videosd').onclick = () => {
    vam('.c661412b2-background_click').setAttribute('style', 'display:flex')
    vam('.c661412b2-iframe_click').setAttribute('style', 'display:flex')
    var c661412b2Iframe = `<iframe class="c661412b2-iframe" src="https://drive.google.com/file/d/1hh7mlFd5A9811Gt6xXWI_xG0LTLlqwbR/preview" frameborder="0"
                                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    vam('.c661412b2-iframe_click').innerHTML = c661412b2Iframe
    vam('.c661412b2-background_click').addEventListener('click', () => {
        vam('.c661412b2-background_click').setAttribute('style', 'display:none')
        vam('.c661412b2-iframe_click').setAttribute('style', 'display:none')
        vam('.c661412b2-iframe').remove()
    })
}
/*
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
        */
function Loadlink(g) {
    let pdfEmbed =
        `<embed src="${g}" type="application/pdf" width="100%" height="100%">
        <div id="out-pdfViewer"><i class="bi bi-box-arrow-left"></i>
            <p>Thoát</p>
        </div>`
    return pdfEmbed
}


vam('#device').onclick = () => {
    document.querySelector('#pdfViewer').style.display = "block";
    document.querySelector('#pdfViewer-wrap').innerHTML = Loadlink('https://drive.google.com/file/d/10Xr5UI-QV5YMI2zF9Hq1wq4A1MQMSaPe/preview')
    document.querySelector('body').setAttribute('style', 'overflow:hidden');
    document.querySelector('#out-pdfViewer').onclick = () => {
        document.querySelector('#pdfViewer').style.display = "none";
        document.querySelector('#pdfViewer-wrap').innerHTML = ''
        document.querySelector('body').setAttribute('style', 'overflow:auto');
    }
}
vam('#button_submitExam').onclick = () => {
    document.querySelector('#pdfViewer').style.display = "block";
    document.querySelector('#pdfViewer-wrap').innerHTML = Loadlink('https://drive.google.com/file/d/1I0ZvlhERkMBcXuKVdSeMeHGEeWcgxiuc/preview')
    document.querySelector('body').setAttribute('style', 'overflow:hidden');
    document.querySelector('#out-pdfViewer').onclick = () => {
        document.querySelector('#pdfViewer').style.display = "none";
        document.querySelector('#pdfViewer-wrap').innerHTML = ''
        document.querySelector('body').setAttribute('style', 'overflow:auto');
    }
}
fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'Tài liệu Thêm',
    })
    .then((rows) => {
        document.querySelector('.dkthamgia[index="1"]').setAttribute('href', `${rows[2]['Bảng A']}`);
        document.querySelector('.dkthamgia[index="2"]').setAttribute('href', `${rows[2]['Bảng B']}`);
        document.querySelector('.dkthamgia[index="3"]').setAttribute('href', `${rows[2]['Bảng C']}`);
        document.querySelector('.dkthamgia[index="4"]').setAttribute('href', `${rows[2]['Bảng C++ đặc biệt']}`);
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
        vam('#desoloai').onclick = () => {
            document.querySelector('#pdfViewer').style.display = "block";
            document.querySelector('#pdfViewer-wrap').innerHTML = Loadlink('https://drive.google.com/file/d/1P3g_L43enMKlZv0y2dDfBZvfagLIbxva/preview')
            document.querySelector('body').setAttribute('style', 'overflow:hidden');
            document.querySelector('#out-pdfViewer').onclick = () => {
                document.querySelector('#pdfViewer').style.display = "none";
                document.querySelector('#pdfViewer-wrap').innerHTML = ''
                document.querySelector('body').setAttribute('style', 'overflow:auto');
            }
        }

    });


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
    if (scroll.top < -80) {
        document.querySelectorAll('.dot>div').forEach((t) => {
            t.classList.add('start')
        })
    }
};

let w = screen.width
if (w < 982) {
    vam('#timeline_img').src = 'https://lh3.googleusercontent.com/d/1IqGm4m7OQ-4CJwJNSs-ya8YQsT56ql9o'
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


// Nội dung phần intro / banner
fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'intro',
    })
    .then((rows) => {
        document.querySelector('#itro-spanns').innerText = rows[0]['slogan']
        document.querySelector('#intro_content').innerText = rows[0]['content']
        document.querySelector('#intro_title').innerText = rows[0]['title']
        document.querySelector('#intro_background').src = rows[0]['background']
        document.querySelector('#intro_logo').src = rows[0]['logo']
    });


// Nội dung phần mục tiêu 
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


//
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
                } else if (i == 6) {
                    items +=
                        `<li>
                        <p style="font-weight: 600"><span style="color: var(--color-main);font-weight: 600;">** </span>${t.ContentAll}<span id="linkg"> (Xem thêm thông tin tập huấn và trải nghiệm)</span></p>
                    </li>`
                }
                else if (i == 5) {
                    items +=
                        `<li>
                        <p style="font-weight: 600; color:#c30000"><span style="color: var(--color-main);font-weight: 600;">4. </span>${t.ContentAll}</p>
                    </li>`
                }
                else if (i == 4) {
                    items +=
                        `<li>
                        <p><span style="color: var(--color-main);font-weight: 600;">3. </span>${t.ContentAll}<span id="linktl" style="font-weight:600" onclick="downloadZip()"> (Xem thêm thông tin Thể lệ thi đấu)</span></p>
                    </li>`
                }
                else {
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
        vam('#linkg').onclick = () => {
            document.querySelector('#pdfViewer').style.display = "block";
            document.querySelector('#pdfViewer-wrap').innerHTML = Loadlink('https://drive.google.com/file/d/17gam4-C8Z3gH9t-oOWltaS6WMv42EoDA/preview')
            document.querySelector('body').setAttribute('style', 'overflow:hidden');
            document.querySelector('#out-pdfViewer').onclick = () => {
                document.querySelector('#pdfViewer').style.display = "none";
                document.querySelector('#pdfViewer-wrap').innerHTML = ''
                document.querySelector('body').setAttribute('style', 'overflow:auto');
            }
        }

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
            var c661412b2Iframe = `<iframe class="c661412b2-iframe" src="https://www.youtube.com/embed/u4gbjq9RiBs" frameborder="0"
                                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            vam('.c661412b2-iframe_click').innerHTML = c661412b2Iframe
            vam('.c661412b2-background_click').addEventListener('click', () => {
                vam('.c661412b2-background_click').setAttribute('style', 'display:none')
                vam('.c661412b2-iframe_click').setAttribute('style', 'display:none')
                vam('.c661412b2-iframe').remove()
            })
        })
        vam('#c661412b2-iframe_click2').addEventListener('click', () => {
            vam('.c661412b2-background_click').setAttribute('style', 'display:flex')
            vam('.c661412b2-iframe_click').setAttribute('style', 'display:flex')
            var c661412b2Iframe = `<iframe class="c661412b2-iframe" src="https://drive.google.com/file/d/1MKHepOje_hpdr5y_C_K-Xt0DR-HTSTwg/preview" frameborder="0"
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
        vam('#prize_mContent').innerHTML = rows[0]['Contentmain']
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

