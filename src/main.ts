import './index.less'
import './css/style.css'
// vanilla-lazyload 17
new LazyLoad({ callback_error: (el: any) => (el.src = 'https://via.placeholder.com/440x560/?text=Error') });

// gsap 3
import { animationSlide } from "./gasp.ts";
animationSlide(document.getElementById('title')!, 0);

// glightbox 3
GLightbox({});

// sweetalert2 11
import { Message } from './message.ts'
// document.getElementById('success')!.addEventListener('click', () => Message.success({ text: 'Success' }))
// document.getElementById('warning')!.addEventListener('click', () => Message.warning({ text: 'Warning' }))
// document.getElementById('confirm')!.addEventListener('click', () => Message.confirm({ text: 'Confirm' }))
// document.getElementById('error')!.addEventListener('click', () => Message.error({ text: 'Error' }))
// handle-dialog
Array.from(document.getElementsByClassName('handle-dialog')).forEach((el) => el.addEventListener('click', () => {
  const data = [
    {
      "id": "6462b8ce-09b7-4bdd-b30c-88ae18cba76e",
      "isDisabled": null,
      "createdAt": "2023-07-30T21:10:20.086Z",
      "updatedAt": "2023-07-30T21:23:16.616Z",
      "type": "member",
      "name": null,
      "image": "http://api.v2.ari.com.vn/files/1690726982010-ung-tien-dung.webp",
      "order": 1,
      "translations": [
        {
          "id": "c78054dc-0351-4622-b75f-6984a93d3dfa",
          "isDisabled": null,
          "createdAt": "2023-07-30T21:10:20.086Z",
          "updatedAt": "2023-07-30T21:10:20.086Z",
          "language": "vn",
          "name": "Ung Tiến Dũng",
          "description": "Xuất thân là một kỹ sư Công nghệ thông tin, tốt nghiệp trường Đại học Bách Khoa Thành phố Hồ Chí Minh. Với hơn 10 năm kinh nghiệm trong ngành và các dự án lớn nhỏ, là chuyên gia trong lĩnh vực tư vấn chuyển đổi số.",
          "position": "Chủ Tịch & Giám Đốc Điều Hành",
          "content": {
            "time": 1690726106709,
            "blocks": [
              {
                "id": "CgRrnLJTf2",
                "data": {
                  "text": "Xuất thân là một kỹ sư CNTT, tốt nghiệp trường Đại học Bách Khoa Thành phố Hồ Chí Minh. Với hơn 10 năm kinh nghiệm trong ngành và các dự án lớn nhỏ, anh ấy là chuyên gia trong lĩnh vực tư vấn chuyển đổi số."
                },
                "type": "paragraph"
              },
              {
                "id": "ulrsVCV_DW",
                "data": {
                  "text": "Kinh nghiệm làm việc:"
                },
                "type": "paragraph"
              },
              {
                "id": "WuGTKYxx_U",
                "data": {
                  "text": "<b>CÔNG TY CỔ PHẦN CÔNG NGHỆ ARI<br></b><i><b>Chủ tịch &amp; Giám Đốc Điều Hành / 2018 - Hiện tại</b></i>"
                },
                "type": "paragraph"
              },
              {
                "id": "06mq7FOaK4",
                "data": {
                  "text": "Định hướng chiến lược cơ cấu, tổ chức, phát triển công ty trong giai đoạn ngắn và dài hạn."
                },
                "type": "paragraph"
              },
              {
                "id": "xZVROP3bla",
                "data": {
                  "text": "<b>CÔNG TY TNHH UHOUSE SOLUTION<br></b><i><b>Đồng Sáng Lập &amp; Giám Đốc Kỹ thuật/ 2022 - Hiện tại</b></i>"
                },
                "type": "paragraph"
              },
              {
                "id": "o8_XnrLjg4",
                "data": {
                  "text": "Giám đốc kỹ thuật, phụ trách xây dựng và phát triển sản phẩm, quản lý và vận hành nhà trọ, chung cư."
                },
                "type": "paragraph"
              },
              {
                "id": "PoETRQ3_Y5",
                "data": {
                  "text": "<b>CÔNG TY CỔ PHẦN TẬP ĐOÀN EEDC BALANCE<br></b><i><b>Đồng Sáng Lập &amp; Giám Đốc Kỹ thuật/ 2022 - Hiện tại</b></i>"
                },
                "type": "paragraph"
              },
              {
                "id": "awDNQVS5_w",
                "data": {
                  "text": "Giám đốc kỹ thuật, phụ trách ở mảng công nghệ. Xây dựng sàn thương mại điện tử B2B, B2C mảng nông nghiệp. Tìm kiếm khách hàng tiềm năng và phát triển khách hàng mảng công nghệ và nông nghiệp."
                },
                "type": "paragraph"
              },
              {
                "id": "hBrtC3PY6q",
                "data": {
                  "text": "<b>QUỸ KHỞI NGHIỆP VÀ SÁNG TẠO GMT SI-FUND<br></b><i><b>Đồng Sáng Lập &amp; Phó Giám Đốc/ 2022 - Hiện tại</b></i>"
                },
                "type": "paragraph"
              },
              {
                "id": "ZQGiI6YJfo",
                "data": {
                  "text": "Phó giám đốc quỹ khởi nghiệp sáng tạo, phụ trách mảng công nghệ. Tìm kiếm các startup công nghệ tiềm năng, hướng dẫn quy trình xây dựng và phát triển doanh nghiệp. Kết nối các nhà đầu tư và các dòng tài chính đến với doanh nghiệp."
                },
                "type": "paragraph"
              },
              {
                "id": "4xi5hD6Kp0",
                "data": {
                  "text": "<b>CÔNG TY TNHH BE HAPPY<br></b><i><b>Đồng Sáng Lập &amp; Giám Đốc Kỹ thuật/ 2021 - Hiện tại</b></i>"
                },
                "type": "paragraph"
              },
              {
                "id": "MKq9e2_o1J",
                "data": {
                  "text": "Phụ trách xây dựng và phát triển sản phẩm hệ thống hóa đơn điện tử BE HAPPY."
                },
                "type": "paragraph"
              }
            ],
            "version": "2.27.0"
          },
          "dataId": "6462b8ce-09b7-4bdd-b30c-88ae18cba76e"
        }
      ]
    },
    {
      "id": "d8e531d4-f527-4565-9276-c90d94997392",
      "isDisabled": null,
      "createdAt": "2023-07-30T21:16:44.436Z",
      "updatedAt": "2023-07-30T21:54:18.917Z",
      "type": "member",
      "name": null,
      "image": "http://api.v2.ari.com.vn/files/1690728857199-nguyen-ba-trung.webp",
      "order": 4,
      "translations": [
        {
          "id": "88506435-2711-4016-a6d2-958ec1ea256a",
          "isDisabled": null,
          "createdAt": "2023-07-30T21:16:44.436Z",
          "updatedAt": "2023-07-30T21:16:44.436Z",
          "language": "vn",
          "name": "Nguyễn Bá Trung",
          "description": "Anh ấy có kinh nghiệm trong các dự án nghiên cứu và phát triển công nghệ cao, ứng dụng trên web, IoT và DevOps. Có kinh nghiệm quản lý nhân sự và dự án.",
          "position": "Phó Giám Đốc",
          "content": {
            "time": 1690726590517,
            "blocks": [
              {
                "id": "EyUnTencCq",
                "data": {
                  "text": "Anh ấy có hơn 5 năm kinh nghiệm trong lĩnh vực phát triển phần mềm. Quản lý con người, quản lý project. Là một Full Stack developer, từng làm việc với các ngôn ngữ như : Java, C#, Nodejs, Golang, Postgres, Mongodb, devOps ...Là người thích đam mê, tìm hiểu những công nghệ mới (AI, IOT, Blockchain...) để ứng dụng vào phát triển các sản phẩm phần mềm."
                },
                "type": "paragraph"
              }
            ],
            "version": "2.27.0"
          },
          "dataId": "d8e531d4-f527-4565-9276-c90d94997392"
        }
      ]
    },
    {
      "id": "fe23535a-8a62-49bb-9db7-b0c9bf05ed6a",
      "isDisabled": null,
      "createdAt": "2023-07-30T21:13:19.657Z",
      "updatedAt": "2023-07-30T21:53:54.338Z",
      "type": "member",
      "name": null,
      "image": "http://api.v2.ari.com.vn/files/1690728822555-truong-thi-ny-ut-ny.webp",
      "order": 2,
      "translations": [
        {
          "id": "aac324ba-65c3-41d0-b077-cda9a6b35936",
          "isDisabled": null,
          "createdAt": "2023-07-30T21:13:19.657Z",
          "updatedAt": "2023-07-30T21:13:19.657Z",
          "language": "vn",
          "name": "Trương Thị Ny (Út Ny)",
          "description": "Hiện là Ủy viên Đặc biệt và Đại diện của Hội đồng Phát triển Kinh tế Châu Âu (EEDC) - Đại diện cho Người được giao danh dự điều phối Chủ tịch EEDC Vương quốc Thái Lan và Cao ủy Các nước Châu Á-Thái Bình Dương và Châu Á cho Hội đồng Phát triển Kinh tế Châu Âu (EEDC). Đồng thời là chuyên gia cố vấn cho hơn 10 tổ chức và công ty, trong đó có Công ty cổ phần Công nghệ ARI.",
          "position": "Cố Vấn Chiến Lược Toàn Diện",
          "content": {
            "time": 1690726378967,
            "blocks": [
              {
                "id": "r3zPCVxHT1",
                "data": {
                  "text": "Hiện là Ủy Viên Đặc biệt và Đại diện của Hội đồng Phát triển Kinh tế Châu Âu (EEDC)."
                },
                "type": "paragraph"
              },
              {
                "id": "LIzTigHoKV",
                "data": {
                  "text": "Thành viên Hội đồng tư vấn của Viện Kinh tế - Luật và Quản lý."
                },
                "type": "paragraph"
              },
              {
                "id": "rIz8rEkjhy",
                "data": {
                  "text": "Cố Vấn Ban Trung Tâm Tư Vấn Pháp Luật ASEAN."
                },
                "type": "paragraph"
              },
              {
                "id": "8dnZoP3JsF",
                "data": {
                  "text": "Chuyên Gia Cố Vấn chiến lược Cộng Đồng cho Phó Chủ Tịch Liên Đoàn Yoga Châu Á."
                },
                "type": "paragraph"
              },
              {
                "id": "goJqCDkHIV",
                "data": {
                  "text": "Chuyên gia cố vấn toàn diện trực tiếp cho Chủ Tịch Hội Thể thao giải trí thành phố Hà Nội."
                },
                "type": "paragraph"
              },
              {
                "id": "vE2-YVZEjp",
                "data": {
                  "text": "Ủy viên ban chấp hành - Phó Trưởng Ban Truyền thông &amp; Đối ngoại Hội Thể thao giải trí thành phố Hà Nội nhiệm kỳ I (2020-2025)."
                },
                "type": "paragraph"
              },
              {
                "id": "z03kaY7g2t",
                "data": {
                  "text": "Chuyên gia hỗ trợ giải pháp doanh nghiệp."
                },
                "type": "paragraph"
              },
              {
                "id": "byHuIGn-lS",
                "data": {
                  "text": "Chuyên gia tư vấn đầu tư - hỗ trợ quỹ Dragon Capital &amp; VinaCapital tại Việt Nam."
                },
                "type": "paragraph"
              },
              {
                "id": "20BoJuvWTS",
                "data": {
                  "text": "Cố vấn tại Công ty TNHH Chứng khoán NH Việt Nam."
                },
                "type": "paragraph"
              },
              {
                "id": "wxXt6k4mZr",
                "data": {
                  "text": "Cố vấn chiến lược toàn diện cho liên minh Vườn ươm khu vực miền trung Tây Nguyên (ISHN)."
                },
                "type": "paragraph"
              },
              {
                "id": "L7CYHVoMCn",
                "data": {
                  "text": "Cố vấn chiến lược toàn diện cho Câu lạc bộ Xúc tiến Thương mại thuộc Hội Doanh nhân trẻ Việt Nam (VINATIPC)."
                },
                "type": "paragraph"
              },
              {
                "id": "eGfAHNRGiJ",
                "data": {
                  "text": "Thành viên hội đồng Ban cố vấn quỹ học bổng \"Kết Nối Chắp Cánh Tương Lai\"."
                },
                "type": "paragraph"
              },
              {
                "id": "FnWEz6b0_5",
                "data": {
                  "text": "Cố vấn chiến lược toàn diện cho Công ty Cổ phần Tập đoàn Thương Mại Khoáng Sản Toàn Cầu (GMT)."
                },
                "type": "paragraph"
              },
              {
                "id": "W_5CoHKKX9",
                "data": {
                  "text": "Cố vấn chiến lược toàn diện của Công ty Cổ phần Công nghệ ARI."
                },
                "type": "paragraph"
              },
              {
                "id": "Uhv529Bpva",
                "data": {
                  "text": "Cố vấn chiến lược toàn diện cho Công ty Cổ phần EEDC BALANCE."
                },
                "type": "paragraph"
              }
            ],
            "version": "2.27.0"
          },
          "dataId": "fe23535a-8a62-49bb-9db7-b0c9bf05ed6a"
        },
      ]
    },
    {
      "id": "0f95646c-d15e-4a48-9cbe-30f0e9990adb",
      "isDisabled": null,
      "createdAt": "2023-07-30T21:15:16.285Z",
      "updatedAt": "2023-07-30T21:54:07.126Z",
      "type": "member",
      "name": null,
      "image": "http://api.v2.ari.com.vn/files/1690728842502-phung-duc-chinh.webp",
      "order": 3,
      "translations": [
        {
          "id": "28d9904c-991c-48a2-9f6c-d210384e14b1",
          "isDisabled": null,
          "createdAt": "2023-07-30T21:15:16.285Z",
          "updatedAt": "2023-07-30T21:15:16.285Z",
          "language": "vn",
          "name": "Phùng Đức Chính",
          "description": "Nhiều năm hoạt động trong lĩnh vực phát triển phần mềm và quản lý vận hành công ty, tư vấn triển khai các giải pháp phần mềm cho khách hàng.",
          "position": "Giám Đốc Kinh Doanh",
          "content": {
            "time": 1690726450374,
            "blocks": [
              {
                "id": "PkkyXFvxZn",
                "data": {
                  "text": "Hơn 3 năm Đồng sáng lập tại công ty EdTech, phụ trách chiến lược, hoạt động, truyền thông và phát triển sản phẩm. Hơn 5 năm kinh nghiệm Phát triển phần mềm trong lĩnh vực kinh doanh như Dịch vụ kết hợp doanh nghiệp, Tìm việc, Tạp chí, Thương mại điện tử,..."
                },
                "type": "paragraph"
              },
              {
                "id": "ERYIm8QPdz",
                "data": {
                  "text": "Hơn 2 năm làm Trưởng nhóm dự án, Quản lý sản phẩm sản phẩm - đưa ra các giải pháp để kinh doanh tốt hơn."
                },
                "type": "paragraph"
              }
            ],
            "version": "2.27.0"
          },
          "dataId": "0f95646c-d15e-4a48-9cbe-30f0e9990adb"
        },
      ]
    },
    {
      "id": "8c73ab1a-083e-41c2-bb7d-5cf5a90ee004",
      "isDisabled": null,
      "createdAt": "2023-07-30T21:21:31.165Z",
      "updatedAt": "2023-07-30T21:54:31.813Z",
      "type": "member",
      "name": null,
      "image": "http://api.v2.ari.com.vn/files/1690728870489-le-viet-quynh.webp",
      "order": 6,
      "translations": [
        {
          "id": "1dc64ba2-5019-4962-8f48-27073a5f065f",
          "isDisabled": null,
          "createdAt": "2023-07-30T21:21:31.165Z",
          "updatedAt": "2023-07-30T21:21:31.165Z",
          "language": "vn",
          "name": "Lê Việt Quỳnh",
          "description": "Cô ấy có hơn 11 năm kinh nghiệm trong lĩnh vực kiểm thử phần mềm tại Việt Nam cũng như các thị trường quốc tế. Cô ấy chịu trách nhiệm xác định tầm nhìn dự án, đặt ra các ưu tiên và đảm bảo các công việc được hoàn thành đúng thời hạn với chất lượng tốt nhất.",
          "position": "Quản Lý",
          "content": {
            "time": 1690726864062,
            "blocks": [
              {
                "id": "ujGolJqMvW",
                "data": {
                  "text": "Tốt nghiệp Đại học Bách Khoa là trường đại học hàng đầu Việt Nam, cô ấy có hơn 11 năm kinh nghiệm trong lĩnh vực kiểm thử phần mềm cho các sản phẩm tại thị trường nước ngoài như Anh, Mỹ, Úc, Châu âu, Singapore. Cô ấy có kinh nghiệm xây dựng/ quản lý / lãnh đạo đội ngũ, xây dựng quy trình tốt nhất cho công ty. Có nhiều kinh nghiệm trong lĩnh vực kinh doanh từ chăm sóc sức khoẻ, kinh doanh, bảo hiểm và tài chính. Các kỹ năng mạnh như lãnh đạo, hợp tác và thuyết trình cùng với kinh nghiệm quản lý các thành viên trong nhiều dự án khác nhau."
                },
                "type": "paragraph"
              }
            ],
            "version": "2.27.0"
          },
          "dataId": "8c73ab1a-083e-41c2-bb7d-5cf5a90ee004"
        },
      ]
    },
    {
      "id": "e811024f-7d7a-4364-8f43-5fefa4e9438e",
      "isDisabled": null,
      "createdAt": "2023-07-30T21:22:45.908Z",
      "updatedAt": "2023-07-30T21:31:24.073Z",
      "type": "member",
      "name": null,
      "image": "http://api.v2.ari.com.vn/files/1690727480658-nguyen-khac-sinh-nhat.webp",
      "order": 7,
      "translations": [
        {
          "id": "1953afd6-5d91-448c-a6a9-c4e1be70082a",
          "isDisabled": null,
          "createdAt": "2023-07-30T21:22:45.908Z",
          "updatedAt": "2023-07-30T21:22:45.908Z",
          "language": "vn",
          "name": "Nguyễn Khắc Sinh Nhật",
          "description": "Nhà phát triển phần mềm chuyên nghiệp với hơn mười năm kinh nghiệm triển khai và quản lý các dự án phần mềm cho các thị trường Việt Nam, Asian và Nhật Bản.",
          "position": "Quản Lý",
          "content": {
            "time": 1690726907958,
            "blocks": [
              {
                "id": "3Ks6rz1AeR",
                "data": {
                  "text": "Xuất thân là một Developer tốt nghiệp tại trường Đại Học Khoa Học Tự Nhiên TPHCM. Với kiến thức kỹ thuật (Software development, system architect, network, infra,...) và nghiệp vụ chuyên sâu (đặc biệt trong lĩnh vực bán lẻ), khả năng giao tiếp tiếng Anh và tiếng Nhật tốt cộng với thời gian dài làm việc tại các công ty Nhật Bản và các công ty outsourcing hàng đầu Việt Nam. Anh đã tham gia triển khai và vận hành thành công nhiều dự án phầm mềm cho các thị trường Việt Nam, Asian và Nhật Bản ở cả vai trò nhà phát triển lẫn nhà quản lý dự án chuyên nghiệp."
                },
                "type": "paragraph"
              }
            ],
            "version": "2.27.0"
          },
          "dataId": "e811024f-7d7a-4364-8f43-5fefa4e9438e"
        },
      ]
    }
  ]

  const temp = document.getElementById("template-1");
  if (temp) {
    const index = el.parentElement!.parentElement!.parentElement!.parentElement!.getAttribute('data-swiper-slide-index')
    if (index) {
      const a = document.importNode(temp, true);
      const i = parseInt(index)
      a.innerHTML = a.innerHTML.replace(/{{image}}/g, `${data[i].image}`)
      a.innerHTML = a.innerHTML.replace(/{{name}}/g, `${data[i].translations[0].name}`)
      a.innerHTML = a.innerHTML.replace(/{{position}}/g, `${data[i].translations[0].position}`)
      let para = ''
      data[i].translations[0].content.blocks.forEach((e) => para = para + `<p>${e.data.text}</p>`)
      a.innerHTML = a.innerHTML.replace(/{{block}}/g, para)
      Message.html(a.innerHTML);
    }
  }
}))
//handle drop-shadow
Array.from(document.getElementsByClassName('drop-shadow')).forEach((el) => el.addEventListener('click', () => {
  console.log(el)
  const data = [
    {
      "id": "8c73ab1a-083e-41c2-bb7d-5cf5a90ee004",
      "isDisabled": null,
      "createdAt": "2023-07-30T21:21:31.165Z",
      "updatedAt": "2023-07-30T21:54:31.813Z",
      "type": "member",
      "name": null,
      "image": "http://api.v2.ari.com.vn/files/1690728870489-le-viet-quynh.webp",
      "order": 6,
      "translations": [
        {
          "id": "1dc64ba2-5019-4962-8f48-27073a5f065f",
          "isDisabled": null,
          "createdAt": "2023-07-30T21:21:31.165Z",
          "updatedAt": "2023-07-30T21:21:31.165Z",
          "language": "vn",
          "name": "Lê Việt Quỳnh",
          "description": "Cô ấy có hơn 11 năm kinh nghiệm trong lĩnh vực kiểm thử phần mềm tại Việt Nam cũng như các thị trường quốc tế. Cô ấy chịu trách nhiệm xác định tầm nhìn dự án, đặt ra các ưu tiên và đảm bảo các công việc được hoàn thành đúng thời hạn với chất lượng tốt nhất.",
          "position": "Quản Lý",
          "content": {
            "time": 1690726864062,
            "blocks": [
              {
                "id": "ujGolJqMvW",
                "data": {
                  "text": "Tốt nghiệp Đại học Bách Khoa là trường đại học hàng đầu Việt Nam, cô ấy có hơn 11 năm kinh nghiệm trong lĩnh vực kiểm thử phần mềm cho các sản phẩm tại thị trường nước ngoài như Anh, Mỹ, Úc, Châu âu, Singapore. Cô ấy có kinh nghiệm xây dựng/ quản lý / lãnh đạo đội ngũ, xây dựng quy trình tốt nhất cho công ty. Có nhiều kinh nghiệm trong lĩnh vực kinh doanh từ chăm sóc sức khoẻ, kinh doanh, bảo hiểm và tài chính. Các kỹ năng mạnh như lãnh đạo, hợp tác và thuyết trình cùng với kinh nghiệm quản lý các thành viên trong nhiều dự án khác nhau."
                },
                "type": "paragraph"
              }
            ],
            "version": "2.27.0"
          },
          "dataId": "8c73ab1a-083e-41c2-bb7d-5cf5a90ee004"
        },
      ]
    },
    {
      "id": "e811024f-7d7a-4364-8f43-5fefa4e9438e",
      "isDisabled": null,
      "createdAt": "2023-07-30T21:22:45.908Z",
      "updatedAt": "2023-07-30T21:31:24.073Z",
      "type": "member",
      "name": null,
      "image": "http://api.v2.ari.com.vn/files/1690727480658-nguyen-khac-sinh-nhat.webp",
      "order": 7,
      "translations": [
        {
          "id": "1953afd6-5d91-448c-a6a9-c4e1be70082a",
          "isDisabled": null,
          "createdAt": "2023-07-30T21:22:45.908Z",
          "updatedAt": "2023-07-30T21:22:45.908Z",
          "language": "vn",
          "name": "Nguyễn Khắc Sinh Nhật",
          "description": "Nhà phát triển phần mềm chuyên nghiệp với hơn mười năm kinh nghiệm triển khai và quản lý các dự án phần mềm cho các thị trường Việt Nam, Asian và Nhật Bản.",
          "position": "Quản Lý",
          "content": {
            "time": 1690726907958,
            "blocks": [
              {
                "id": "3Ks6rz1AeR",
                "data": {
                  "text": "Xuất thân là một Developer tốt nghiệp tại trường Đại Học Khoa Học Tự Nhiên TPHCM. Với kiến thức kỹ thuật (Software development, system architect, network, infra,...) và nghiệp vụ chuyên sâu (đặc biệt trong lĩnh vực bán lẻ), khả năng giao tiếp tiếng Anh và tiếng Nhật tốt cộng với thời gian dài làm việc tại các công ty Nhật Bản và các công ty outsourcing hàng đầu Việt Nam. Anh đã tham gia triển khai và vận hành thành công nhiều dự án phầm mềm cho các thị trường Việt Nam, Asian và Nhật Bản ở cả vai trò nhà phát triển lẫn nhà quản lý dự án chuyên nghiệp."
                },
                "type": "paragraph"
              }
            ],
            "version": "2.27.0"
          },
          "dataId": "e811024f-7d7a-4364-8f43-5fefa4e9438e"
        },
      ]
    },
    {
      "id": "0ab1c6f7-d084-42aa-b3e3-5b6f09ab38cd",
      "isDisabled": null,
      "createdAt": "2023-07-30T21:40:51.183Z",
      "updatedAt": "2023-08-03T21:01:40.203Z",
      "type": "member",
      "name": null,
      "image": "http://api.v2.ari.com.vn/files/1690728044440-le-quang-thach.webp",
      "order": null,
      "translations": [
        {
          "id": "6c0e8ac9-ab41-4947-872d-7d09ee5a7200",
          "isDisabled": null,
          "createdAt": "2023-07-30T21:40:51.183Z",
          "updatedAt": "2023-07-30T21:40:51.183Z",
          "language": "vn",
          "name": "Lê Quang Thạch",
          "description": "Tốt nghiệp tại trường Đại Học Bách Khoa TPHCM. Với kiến thức kỹ thuật (Software development, system architect, network, infra,...) và nghiệp vụ chuyên sâu trong lĩnh vực thương mại điện tử, khả năng giao tiếp tiếng Anh khá.",
          "position": "Kỹ sư phần mềm",
          "content": {
            "time": 1690728028810,
            "blocks": [
              {
                "id": "sdAuaRqO38",
                "data": {
                  "text": "Tốt nghiệp tại trường Đại Học Bách Khoa TPHCM. Với kiến thức kỹ thuật (Software development, system architect, network, infra,...) và nghiệp vụ chuyên sâu trong lĩnh vực thương mại điện tử, khả năng giao tiếp tiếng Anh khá. Đã và đang tham gia triển khai và vận hành thành công dự án phần mềm cho các thị trường Asian ở cả vai trò nhà phát triển lẫn nhà quản lý dự án chuyên nghiệp."
                },
                "type": "paragraph"
              }
            ],
            "version": "2.27.0"
          },
          "dataId": "0ab1c6f7-d084-42aa-b3e3-5b6f09ab38cd"
        },
      ]
    },
    {
      "id": "d37ed43d-ec91-4356-bf3e-06b793327b00",
      "isDisabled": null,
      "createdAt": "2023-07-30T21:43:26.020Z",
      "updatedAt": "2023-08-03T21:01:45.284Z",
      "type": "member",
      "name": null,
      "image": "http://api.v2.ari.com.vn/files/1690728154306-tong-quoc-sang.webp",
      "order": null,
      "translations": [
        {
          "id": "8d37f86b-1cf2-4ebd-9ec7-5d04606fab2f",
          "isDisabled": null,
          "createdAt": "2023-07-30T21:43:26.020Z",
          "updatedAt": "2023-07-30T21:43:26.020Z",
          "language": "vn",
          "name": "Tống Quốc Sang",
          "description": "Tốt nghiệp tại trường Đại Học Bách Khoa TPHCM. Với kiến thức kỹ thuật (Software development, system architect, network, infra,...) và nghiệp vụ chuyên sâu trong lĩnh vực thương mại điện tử, khả năng giao tiếp tiếng Anh khá.",
          "position": "Kỹ sư phần mềm",
          "content": {
            "time": 1690728172593,
            "blocks": [
              {
                "id": "PBUMk3-Eg0",
                "data": {
                  "text": "Tốt nghiệp tại trường Đại Học Bách Khoa TPHCM. Với kiến thức kỹ thuật (Software development, system architect, network, infra,...) và nghiệp vụ chuyên sâu trong lĩnh vực thương mại điện tử, khả năng giao tiếp tiếng Anh khá. Có kinh nghiệm trong việc triển khai và vận hành thành công dự án phần mềm cho các thị trường Singapore , Malaysia."
                },
                "type": "paragraph"
              }
            ],
            "version": "2.27.0"
          },
          "dataId": "d37ed43d-ec91-4356-bf3e-06b793327b00"
        },
      ]
    },
    {
      "id": "b448527a-9ae3-4234-8b25-a2d8e4660264",
      "isDisabled": null,
      "createdAt": "2023-07-30T21:45:15.174Z",
      "updatedAt": "2023-08-03T21:01:51.099Z",
      "type": "member",
      "name": null,
      "image": "http://api.v2.ari.com.vn/files/1690728303585-le-tat-thien.webp",
      "order": null,
      "translations": [
        {
          "id": "99836822-a047-47e1-b5b3-2e24217ce049",
          "isDisabled": null,
          "createdAt": "2023-07-30T21:45:15.174Z",
          "updatedAt": "2023-07-30T21:45:15.174Z",
          "language": "vn",
          "name": "Lê Tất Thiện",
          "description": "Tốt nghiệp tại trường Đại Học Bách Khoa TPHCM. Với kiến thức kỹ thuật (Software development, system architect, Frontend,...) và nghiệp vụ chuyên sâu trong lĩnh vực thương mại điện tử, CMS, khả năng giao tiếp tiếng Anh.",
          "position": "Kỹ sư phần mềm",
          "content": {
            "time": 1690728293920,
            "blocks": [
              {
                "id": "7rUHtqiVXq",
                "data": {
                  "text": "Tốt nghiệp tại trường Đại Học Bách Khoa TPHCM. Với kiến thức kỹ thuật (Software development, system architect, Frontend,...) và nghiệp vụ chuyên sâu trong lĩnh vực thương mại điện tử, CMS, khả năng giao tiếp tiếng Anh. Đã và đang tham gia triển khai và vận hành thành công dự án phần mềm cho các thị trường Châu Á và Châu Âu ở cả vai trò nhà phát triển lẫn nhà quản lý dự án chuyên nghiệp."
                },
                "type": "paragraph"
              }
            ],
            "version": "2.27.0"
          },
          "dataId": "b448527a-9ae3-4234-8b25-a2d8e4660264"
        }
      ]
    },
    {
      "id": "dc45589e-1dae-4ef8-9f31-5f9f0f27f50d",
      "isDisabled": null,
      "createdAt": "2023-07-30T21:35:38.168Z",
      "updatedAt": "2023-08-03T21:01:27.681Z",
      "type": "member",
      "name": null,
      "image": "http://api.v2.ari.com.vn/files/1690727731818-dinh-lan.webp",
      "order": null,
      "translations": [
        {
          "id": "decdc02d-842d-46e3-b6bd-523c61e6a927",
          "isDisabled": null,
          "createdAt": "2023-07-30T21:35:38.168Z",
          "updatedAt": "2023-07-30T21:35:38.168Z",
          "language": "vn",
          "name": "Định Lân",
          "description": "Với vai trò là phân tích nghiệp vụ có nền tảng công nghệ, các lĩnh vực chính của tôi là CRM, tiếp thị kỹ thuật số, thương mại điện tử B2B.",
          "position": "Phân tích nghiệp vụ",
          "content": {
            "time": 1690727719619,
            "blocks": [
              {
                "id": "z_8jy4cCC5",
                "data": {
                  "text": "Với vai trò là phân tích nghiệp vụ có nền tảng công nghệ, các lĩnh vực chính của tôi là CRM, tiếp thị kỹ thuật số, thương mại điện tử B2B. Trong 4 năm kinh nghiệm làm việc của mình, hầu hết thời gian tôi làm với khách hàng Âu Mỹ. Nên tôi hiểu được khách hàng Âu Mỹ muốn gì ở một doanh nghiệp phần mềm ở Việt Nam. Mục tiêu của tôi là mang đến những giải pháp tốt, đưa sản phẩm ra thị trường đúng hạn."
                },
                "type": "paragraph"
              }
            ],
            "version": "2.27.0"
          },
          "dataId": "dc45589e-1dae-4ef8-9f31-5f9f0f27f50d"
        }
      ]
    },
    {
      "id": "88b323bc-8660-472e-9cf7-6630133d39dc",
      "isDisabled": null,
      "createdAt": "2023-07-30T21:37:50.627Z",
      "updatedAt": "2023-08-03T21:01:35.050Z",
      "type": "member",
      "name": null,
      "image": "http://api.v2.ari.com.vn/files/1690727800868-tran-nhan-vu.webp",
      "order": null,
      "translations": [
        {
          "id": "4db7c3be-ba9a-44f2-8333-f5382da889f9",
          "isDisabled": null,
          "createdAt": "2023-07-30T21:37:50.627Z",
          "updatedAt": "2023-07-30T21:37:50.627Z",
          "language": "vn",
          "name": "Trần Nhân Vũ",
          "description": "Tốt nghiệp khoa học máy tính tại Đại học Bách Khoa TP.HCM. Có hơn 3 năm kinh nghiệm làm việc, phát triển và quản lý các dự án về Web/APP, Robot, AI...",
          "position": "Kỹ sư phần mềm",
          "content": {
            "time": 1690727846142,
            "blocks": [
              {
                "id": "Sc5xgoQOrd",
                "data": {
                  "text": "Tốt nghiệp khoa học máy tính tại Đại học Bách Khoa TP.HCM. Có hơn 3 năm kinh nghiệm làm việc, phát triển và quản lý các dự án về Web/APP, Robot, AI... Là người có hiểu biết và kiến thức kỹ thuật về: Software Development, architech, network, infra.. và các ngôn ngữ lập trình chính (Java, Python, Javascript, SQL ...). Là người có tư duy mở, thích giải quyết và tìm hiểu những vấn đề khó khăn. Có khả năng đưa ra quyết định và làm việc nhóm tốt, khả năng giao tiếp tiếng anh khá, có thể giao tiếp và làm việc với người nước ngoài."
                },
                "type": "paragraph"
              }
            ],
            "version": "2.27.0"
          },
          "dataId": "88b323bc-8660-472e-9cf7-6630133d39dc"
        }
      ]
    }
  ]

  const temp = document.getElementById("template-1");
  if (temp) {
    const index = el.getAttribute('key')
    if (index) {
      const a = document.importNode(temp, true);
      const i = parseInt(index)
      a.innerHTML = a.innerHTML.replace(/{{image}}/g, `${data[i].image}`)
      a.innerHTML = a.innerHTML.replace(/{{name}}/g, `${data[i].translations[0].name}`)
      a.innerHTML = a.innerHTML.replace(/{{position}}/g, `${data[i].translations[0].position}`)
      let para = ''
      data[i].translations[0].content.blocks.forEach((e) => para = para + `<p>${e.data.text}</p>`)
      a.innerHTML = a.innerHTML.replace(/{{block}}/g, para)
      Message.html(a.innerHTML);
    }
  }
}))

// import { setupCounter } from './counter.ts'
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
import { setupSwiper } from './swiper.ts';
setupSwiper();

import { setupMenuMobile } from './menu-mobile.ts';
setupMenuMobile(document.getElementsByClassName('handle-menu'));
