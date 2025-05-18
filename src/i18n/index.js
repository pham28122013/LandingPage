// src/i18n/index.js
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    header: {
      menu: {
        about: 'ABOUT US',
        games: 'GAMES',
        partners: 'PARTNERS',
        contact: 'CONTACT US',
      },
      title: "We're Getting Ready",
      subtitle: 'We will be back with something amazing. Get the latest updates about our games. Please sign up to our newsletter.',
      emailPlaceholder: 'Enter your email',
      coundown: {
        Days: "Days",
        Hours: "Hours",
        Minutes: "Minutes",
        Second: "Second"
      }
    },
    aboutUs: {
      title: "About Us",
      description: "Browse our selection of free online games and have a great time without leaving the site! Our Kids Games section also includes game reviews, extensive walkthroughs of our games, gaming news, popular gaming platforms, cheats, guides, and articles as well! Enjoy reviews the most popular kids' games from all best consoles, video gaming platforms, so you don't need to search for them anywhere else. Let our expert reviewers guide you to the best of gaming art best!",
      users: "Users",
      games: "Games",
      hour: {
        title: "24 - Hour",
        description: "24/7 access ensures operators' businesses runs smoothly all year long."
      },
      design: {
        title: "Design",
        description: "Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay."
      },
      team: {
        title: "Team",
        description: "Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games."
      }
    },
    ourGames: {
      title: "Our Games",
      description: "As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress.",
    },
    ourPartners: {
      title: "Our Partners"
    },
    footer: {
      address: {
        title: "Address",
        contentEn: "Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US",
        contentVn: "20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam",
        phoneEn: "(+1) 555-0108-000",
        or: " or ",
        phoneVn: "(+236) 555-0108"
      },
      subscribe: {
        title: "Subscribe",
        description: "Subscribe to our newsletter and be the first to know about our updates",
        mail: "Enter your email"
      }
    }
  },
  vn: {
    header: {
      menu: {
        about: 'VỀ CHÚNG TÔI',
        games: 'TRÒ CHƠI',
        partners: 'ĐỐI TÁC',
        contact: 'LIÊN HỆ',
      },
      title: 'Trò chơi sắp ra mắt!',
      subtitle: 'Chúng tôi sẽ trở lại với điều tuyệt vời. Đăng ký để nhận thông tin cập nhật mới nhất về game của chúng tôi.',
      emailPlaceholder: 'Nhập email của bạn',
      coundown: {
        Days: "Ngày",
        Hours: "Giờ",
        Minutes: "Phút",
        Second: "Giây"
      }
    },
    aboutUs: {
      title: "Về chúng tôi",
      description: "Duyệt qua tuyển chọn các trò chơi trực tuyến miễn phí của chúng tôi và có một khoảng thời gian tuyệt vời mà không cần rời khỏi trang web! Tùy chọn Trò chơi dành cho Trẻ em của chúng tôi cũng bao gồm các bài đánh giá trò chơi, các trò chơi gian lận và hướng dẫn mở rộng, và nhiều hơn nữa. Chúng tôi cũng có các bản tải xuống, video và bài báo miễn phí độc quyền. Etech đánh giá các trò chơi trẻ em phổ biến nhất từ tất cả các nền tảng trò chơi điện tử phổ biến nhất, vì vậy bạn không cần phải tìm kiếm niềm vui ở bất kỳ nơi nào khác trên Internet. Khám phá một thế giới trò chơi hoàn toàn mới trên Etech.",
      users: "Người chơi",
      games: "Trò chơi",
      hour: {
        title: "Truy Cập 24/7",
        description: "Đảm bảo hoạt động kinh doanh của các nhà khai thác hoạt động trơn tru suốt cả năm."
      },
      design: {
        title: "Thiết Kế",
        description: "Kết hợp các vũ trụ giàu trí tưởng tượng, động lực chơi và lối chơi chưa từng có, trò chơi của chúng tôi vượt qua ranh giới của thế giới ảo bằng cách tạo ra lối chơi sáng tạo.",
      },
      team: {
        title: "Đội Ngũ",
        description: "Etech là một studio quốc tế, từng đoạt giải thưởng gồm các nhà thiết kế, nghệ sĩ, họa sĩ hoạt hình và nhà sản xuất chuyên tạo ra nội dung cho những tên tuổi lớn nhất trong lĩnh vực điện ảnh và trò chơi điện tử.",
      }
    },
    ourGames: {
      title: "Trò chơi",
      description: "Là nhà tiên phong trong lĩnh vực trò chơi ứng dụng dành cho thiết bị di động, chúng tôi tự hào về tính độc đáo và cá tính, cung cấp cho người chơi toàn cầu những trò chơi hiện đại có cốt truyện tuyệt vời, hiệu ứng âm thanh giật gân và hoạt ảnh hoành tráng không ngừng gây ấn tượng."
    },
    ourPartners: {
      title: "Đối tác"
    },
    footer: {
      address: {
        title: "Địa chỉ",
        contentEn: "Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US",
        contentVn: "Số 20 đường Phan Đăng Lưu, quận Hải Châu, thành phố Đà Nẵng, Việt Nam",
        phoneEn: "(+1) 555-0108-000",
        or: " hoặc ",
        phoneVn: "(+236) 555-0108"
      },
      subscribe: {
        title: "Theo dõi",
        description: "Đăng ký nhận bản tin của chúng tôi và là người đầu tiên biết về các cập nhật của chúng tôi",
        mail: "Email"
      }
    }
  },
}

const i18n = createI18n({
  legacy: false, // ✅ TẮT legacy mode
  locale: 'vn',
  fallbackLocale: 'vn',
  messages,
})

export default i18n
