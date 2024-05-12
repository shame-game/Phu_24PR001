
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
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
        document.querySelector('#intro_img').src = rows[0]['img']
        document.querySelector('#intro_logo').src = rows[0]['logo']
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'introduce',
    })
    .then((rows) => {
        document.querySelector('#introduce_img').src = rows[0]['Hình']
        document.querySelector('#introduce_title').innerText = rows[0]['Tiêu đề']
        document.querySelector('#introduce_content').innerText = rows[0]['Nội dung']
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'DoiTuongThamGia',
    })
    .then((rows) => {
        document.querySelector('#object_title').innerText = rows[0]['Tiêu đề']
        document.querySelector('#object_title1').innerText = rows[0]['Tiêu đề bảng']
        document.querySelector('#object_content1').innerText = rows[0]['Nội dung bảng']
        document.querySelector('#object_title2').innerText = rows[1]['Tiêu đề bảng']
        document.querySelector('#object_content2').innerText = rows[1]['Nội dung bảng']
        document.querySelector('#object_title3').innerText = rows[2]['Tiêu đề bảng']
        document.querySelector('#object_content3').innerText = rows[2]['Nội dung bảng']
    });


fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'timeline',
    })
    .then((rows) => {
        let d = ""
        let i = 1
        document.querySelector('#timeline_title').innerText = rows[0]['Tiêu đề']
        rows.forEach((t) => {
            if (i % 2 === 0) {
                d +=
                    `<div class="timeline_items">
                    <div class="timeline_item-main l">
                        <h2>${t.time}</h2>
                        <div class="timeline_item-content">
                            <p>${t.content}</p>
                        </div>
                        <span class="timeline_item-index l">${i}</span>
                    </div>
                </div>`
            } else {
                d +=
                    `<div class="timeline_items">
                    <div class="timeline_item-main c">
                        <span class="timeline_item-index c">${i}</span>

                        <div class="timeline_item-content">
                            <p>${t.content}</p>
                        </div>
                        <h2>${t.time}</h2>
                    </div>
                </div>`
            }
            i++
        })
        document.querySelector('#timeline_list-wrap').innerHTML = d
    });
fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'ThoiGianConLai',
    })
    .then((rows) => {
        let r = ''
        document.querySelector('#time_title').innerText = rows[0]['Tiêu đề']
        document.querySelector('#iframevideo').src = rows[0]['iframe']
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
        rows.forEach((t) => {
            r +=
                `<div class="question_div">
                    <p class="vam_content">${t['Câu hỏi']}</p>
                    <i class="bi bi-plus-circle"></i>
                </div>`
        })
        document.querySelector('#question_load').innerHTML += r
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'HinhThucToChuc',
    })
    .then((rows) => {
        document.querySelector('#organizational_title').innerText = rows[0]['Tiêu đề']
        document.querySelector('#organizational_titlep').innerText = rows[0]['Tiêu đề phụ']
        let r = ''
        rows.forEach((t) => {
            r += `<p class="vam_content">${t['Nội dung']}</p>`
        })
        document.querySelector('#organizational_content1').innerHTML += r
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'partner',
    })
    .then((rows) => {
        let r = ''
        rows.forEach((t) => {
            r +=
                `<div>
                    <img style="width:100%" src="${t['Hình ảnh logo đơn vị phối hợp']}"/>
                </div>`
        })
        document.querySelector('#doitac_load').innerHTML += r
        $('#doitac_load').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            pauseOnHover: false,
            prevArrow: '<span class="prev"><i class="bi-chevrond-left"></i></span>',
            nextArrow: '<span class="next"><i class="bi-chevrond-right"></i></span>',
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        prevArrow: '',
                        nextArrow: '',
                        arrows: false,
                        dots: true,
                    },
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false,
                    },
                }
            ]
        });
    });

