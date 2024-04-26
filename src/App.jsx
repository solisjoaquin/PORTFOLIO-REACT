import "./App.css";

/*  const week = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

function updateTime() {
  var now = new Date();
  document.getElementById("time").innerText =
    zeroPadding(now.getHours(), 2) +
    ":" +
    zeroPadding(now.getMinutes(), 2) +
    ":" +
    zeroPadding(now.getSeconds(), 2);

  document.getElementById("date").innerText =
    now.getFullYear() +
    "-" +
    zeroPadding(now.getMonth() + 1, 2) +
    "-" +
    zeroPadding(now.getDate(), 2) +
    " " +
    week [now.getDay()];
}

updateTime();
setInterval(updateTime, 1000);
function zeroPadding(num, digit) {
  return String(num).padStart(digit, "0");
} 
  */
function App() {
  return (
    <>
      <div className="container">
        {/* SIDEBAR  */}
        <div className="sidebar">
          <span className="logo"></span>
          <a className="logo-expand" href="#">
            Portfolio
          </a>
          <div className="side-wrapper">
            <div className="side-title">Menu</div>
            <div className="side-menu">
              <a className="sidebar-link discover is-active" href="#">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z" />
                </svg>
                Home
              </a>
              <a className="sidebar-link trending" href="#">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.835 12.007l.002.354c.012 1.404.096 2.657.242 3.451 0 .015.16.802.261 1.064.16.38.447.701.809.905a2 2 0 00.91.219c.249-.012.66-.137.954-.242l.244-.094c1.617-.642 4.707-2.74 5.891-4.024l.087-.09.39-.42c.245-.322.375-.715.375-1.138 0-.379-.116-.758-.347-1.064-.07-.099-.18-.226-.28-.334l-.379-.397c-1.305-1.321-4.129-3.175-5.593-3.79 0-.013-.91-.393-1.343-.407h-.057c-.665 0-1.286.379-1.603.991-.087.168-.17.496-.233.784l-.114.544c-.13.874-.216 2.216-.216 3.688zm-6.332-1.525C3.673 10.482 3 11.162 3 12a1.51 1.51 0 001.503 1.518l3.7-.328c.65 0 1.179-.532 1.179-1.19 0-.658-.528-1.191-1.18-1.191l-3.699-.327z"
                  />
                </svg>
                Proyectos
              </a>
              <a className="sidebar-link" href="#">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.23 7.29V3.283c0-.427.34-.782.77-.782.385 0 .711.298.763.677l.007.104v4.01h4.78c2.38 0 4.335 1.949 4.445 4.38l.005.215v5.04c0 2.447-1.887 4.456-4.232 4.569l-.208.005H6.44c-2.38 0-4.326-1.94-4.435-4.379L2 16.905v-5.03c0-2.447 1.878-4.466 4.222-4.58l.208-.004h4.8v6.402l-1.6-1.652a.755.755 0 00-1.09 0 .81.81 0 00-.22.568c0 .157.045.32.14.459l.08.099 2.91 3.015c.14.155.34.237.55.237a.735.735 0 00.465-.166l.075-.071 2.91-3.015c.3-.31.3-.816 0-1.126a.755.755 0 00-1.004-.077l-.086.077-1.59 1.652V7.291h-1.54z" />
                </svg>
                Diseños
              </a>
              <a className="sidebar-link" href="#">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.1535 16.64L14.995 13.77C15.2822 13.47 15.2822 13 14.9851 12.71C14.698 12.42 14.2327 12.42 13.9455 12.71L12.3713 14.31V9.49C12.3713 9.07 12.0446 8.74 11.6386 8.74C11.2327 8.74 10.896 9.07 10.896 9.49V14.31L9.32178 12.71C9.03465 12.42 8.56931 12.42 8.28218 12.71C7.99505 13 7.99505 13.47 8.28218 13.77L11.1139 16.64C11.1832 16.71 11.2624 16.76 11.3515 16.8C11.4406 16.84 11.5396 16.86 11.6386 16.86C11.7376 16.86 11.8267 16.84 11.9158 16.8C12.005 16.76 12.0842 16.71 12.1535 16.64ZM19.3282 9.02561C19.5609 9.02292 19.8143 9.02 20.0446 9.02C20.302 9.02 20.5 9.22 20.5 9.47V17.51C20.5 19.99 18.5 22 16.0446 22H8.17327C5.58911 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.4901 2 7.96535 2H13.2525C13.5 2 13.7079 2.21 13.7079 2.46V5.68C13.7079 7.51 15.1931 9.01 17.0149 9.02C17.4333 9.02 17.8077 9.02318 18.1346 9.02595C18.3878 9.02809 18.6125 9.03 18.8069 9.03C18.9479 9.03 19.1306 9.02789 19.3282 9.02561ZM19.6045 7.5661C18.7916 7.5691 17.8322 7.5661 17.1421 7.5591C16.047 7.5591 15.145 6.6481 15.145 5.5421V2.9061C15.145 2.4751 15.6629 2.2611 15.9579 2.5721C16.7203 3.37199 17.8873 4.5978 18.8738 5.63395C19.2735 6.05379 19.6436 6.44249 19.945 6.7591C20.2342 7.0621 20.0223 7.5651 19.6045 7.5661Z"
                  />
                </svg>
                Wallpapers
              </a>
              <a className="sidebar-link" href="#">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.769 8.382H22C22 4.985 19.964 3 16.516 3H7.484C4.036 3 2 4.985 2 8.338v7.324C2 19.015 4.036 21 7.484 21h9.032C19.964 21 22 19.015 22 15.662v-.313h-4.231c-1.964 0-3.556-1.552-3.556-3.466 0-1.915 1.592-3.467 3.556-3.467v-.034zm0 1.49h3.484c.413 0 .747.326.747.728v2.531a.746.746 0 01-.747.728H17.85c-.994.013-1.864-.65-2.089-1.595a1.982 1.982 0 01.433-1.652 2.091 2.091 0 011.576-.74zm.151 2.661h.329a.755.755 0 00.764-.745.755.755 0 00-.764-.746h-.329a.766.766 0 00-.54.213.727.727 0 00-.224.524c0 .413.34.75.764.754zM6.738 8.382h5.644a.755.755 0 00.765-.746.755.755 0 00-.765-.745H6.738a.755.755 0 00-.765.737c0 .413.341.75.765.754z"
                  />
                </svg>
                3D{" "}
              </a>
            </div>
          </div>
          <div className="side-wrapper">
            <div className="side-title">CONTACTO</div>
            <div className="side-menu">
              <a
                className="sidebar-link"
                href="https://www.linkedin.com/in/elias-solis/"
                target="_blank"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 115 115"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6_7)">
                    <path
                      d="M101.25 16.875C105.726 16.875 110.018 18.6529 113.182 21.8176C116.347 24.9822 118.125 29.2745 118.125 33.75V101.25C118.125 105.726 116.347 110.018 113.182 113.182C110.018 116.347 105.726 118.125 101.25 118.125H33.75C29.2745 118.125 24.9822 116.347 21.8176 113.182C18.6529 110.018 16.875 105.726 16.875 101.25V33.75C16.875 29.2745 18.6529 24.9822 21.8176 21.8176C24.9822 18.6529 29.2745 16.875 33.75 16.875H101.25ZM101.25 28.125H33.75C32.2582 28.125 30.8274 28.7176 29.7725 29.7725C28.7176 30.8274 28.125 32.2582 28.125 33.75V101.25C28.125 102.742 28.7176 104.173 29.7725 105.227C30.8274 106.282 32.2582 106.875 33.75 106.875H101.25C102.742 106.875 104.173 106.282 105.227 105.227C106.282 104.173 106.875 102.742 106.875 101.25V33.75C106.875 32.2582 106.282 30.8274 105.227 29.7725C104.173 28.7176 102.742 28.125 101.25 28.125ZM45 56.25C46.3777 56.2502 47.7075 56.756 48.7371 57.6715C49.7667 58.587 50.4244 59.8486 50.5856 61.2169L50.625 61.875V90C50.6234 91.4337 50.0744 92.8127 49.0902 93.8552C48.106 94.8977 46.7609 95.5251 45.3297 95.6091C43.8984 95.6931 42.4891 95.2275 41.3897 94.3073C40.2903 93.3871 39.5837 92.0818 39.4144 90.6581L39.375 90V61.875C39.375 60.3832 39.9676 58.9524 41.0225 57.8975C42.0774 56.8426 43.5082 56.25 45 56.25ZM61.875 50.625C63.1923 50.6248 64.468 51.087 65.4795 51.9309C66.491 52.7749 67.1742 53.9471 67.41 55.2431C68.5419 54.5867 69.7121 53.9988 70.9144 53.4825C74.6663 51.8794 80.2856 50.9962 85.3594 52.5881C88.02 53.4319 90.6919 55.0069 92.6719 57.69C94.4438 60.0806 95.4 62.9888 95.5912 66.2569L95.625 67.5V90C95.6234 91.4337 95.0744 92.8127 94.0902 93.8552C93.106 94.8977 91.7609 95.5251 90.3297 95.6091C88.8984 95.6931 87.4891 95.2275 86.3897 94.3073C85.2903 93.3871 84.5837 92.0818 84.4144 90.6581L84.375 90V67.5C84.375 65.6437 83.925 64.7775 83.6325 64.3781C83.2127 63.8559 82.6341 63.4846 81.9844 63.3206C80.0269 62.7019 77.2087 63.0281 75.3356 63.8269C72.5231 65.0306 69.9469 66.9206 68.1919 68.67L67.5 69.4125V90C67.4984 91.4337 66.9494 92.8127 65.9652 93.8552C64.981 94.8977 63.6359 95.5251 62.2047 95.6091C60.7734 95.6931 59.3641 95.2275 58.2647 94.3073C57.1653 93.3871 56.4587 92.0818 56.2894 90.6581L56.25 90V56.25C56.25 54.7582 56.8426 53.3274 57.8975 52.2725C58.9524 51.2176 60.3832 50.625 61.875 50.625ZM45 39.375C46.4918 39.375 47.9226 39.9676 48.9775 41.0225C50.0324 42.0774 50.625 43.5082 50.625 45C50.625 46.4918 50.0324 47.9226 48.9775 48.9775C47.9226 50.0324 46.4918 50.625 45 50.625C43.5082 50.625 42.0774 50.0324 41.0225 48.9775C39.9676 47.9226 39.375 46.4918 39.375 45C39.375 43.5082 39.9676 42.0774 41.0225 41.0225C42.0774 39.9676 43.5082 39.375 45 39.375Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_7">
                      <rect width="135" height="135" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Linkedin
              </a>
              <a
                className="sidebar-link"
                href="https://github.com/Gardesito"
                target="_blank"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6_13)">
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2076 22.5814 20.278 21.0505 21.7446 19.008C23.2112 16.9656 24 14.5145 24 12C24 5.37 18.63 0 12 0Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_13">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Git Hub
              </a>
              <a
                className="sidebar-link"
                href="https://www.instagram.com/elias_fx/?hl=es-la"
                target="_blank"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 94 94"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M46.87 65.9233C57.3927 65.9233 65.9233 57.3927 65.9233 46.87C65.9233 36.3471 57.3927 27.8167 46.87 27.8167C36.3471 27.8167 27.8167 36.3471 27.8167 46.87C27.8167 57.3927 36.3471 65.9233 46.87 65.9233Z"
                    stroke="currentColor"
                    stroke-width="7.145"
                    stroke-linecap="currentColor"
                    stroke-linejoin="currentColor"
                  />
                  <path
                    d="M4 65.9233V27.8167C4 14.6631 14.6631 4 27.8167 4H65.9233C79.0768 4 89.74 14.6631 89.74 27.8167V65.9233C89.74 79.0768 79.0768 89.74 65.9233 89.74H27.8167C14.6631 89.74 4 79.0768 4 65.9233Z"
                    stroke="currentColor"
                    stroke-width="7.145"
                  />
                  <path
                    d="M73.0683 20.7193L73.116 20.6664"
                    stroke="currentColor"
                    stroke-width="7.145"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Instagram
              </a>
              <a className="sidebar-link" href="#">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.158 8.233a4.207 4.207 0 01-4.209 4.234 4.207 4.207 0 01-4.21-4.234A4.206 4.206 0 0111.95 4a4.206 4.206 0 014.21 4.233zM11.95 20c-3.431 0-6.36-.544-6.36-2.72 0-2.177 2.91-2.74 6.36-2.74 3.431 0 6.361.544 6.361 2.72S15.399 20 11.949 20zm6.008-11.69a5.765 5.765 0 01-.984 3.24.158.158 0 00.107.245 3.4 3.4 0 00.483.046c1.643.044 3.118-1.02 3.525-2.621.604-2.379-1.168-4.514-3.425-4.514-.245 0-.48.026-.708.073-.031.007-.064.021-.082.05-.022.034-.006.08.016.11a5.807 5.807 0 011.068 3.37zm2.721 5.203c1.104.217 1.83.66 2.131 1.304a1.923 1.923 0 010 1.67c-.46.998-1.944 1.319-2.52 1.402-.12.018-.215-.086-.203-.206.295-2.767-2.048-4.08-2.654-4.381-.026-.014-.032-.034-.03-.047.003-.009.013-.023.033-.026 1.312-.024 2.722.156 3.243.284zM6.438 11.84c.164-.004.325-.019.483-.046a.158.158 0 00.106-.245 5.765 5.765 0 01-.984-3.24c0-1.25.39-2.416 1.068-3.372.022-.03.037-.075.016-.11-.017-.027-.051-.042-.082-.05a3.52 3.52 0 00-.71-.072c-2.255 0-4.027 2.135-3.423 4.514.407 1.6 1.882 2.664 3.525 2.621zm.159 1.414c.003.013-.003.033-.028.047-.607.302-2.95 1.614-2.656 4.38.013.121-.082.224-.201.207-.577-.083-2.06-.404-2.52-1.402a1.917 1.917 0 010-1.67c.3-.644 1.026-1.087 2.13-1.305.522-.127 1.93-.307 3.244-.283.02.003.03.017.03.026z"
                  />
                </svg>
                Behance
              </a>
            </div>
          </div>
        </div>

        {/* -------------------------------------WRAPER.............................................. */}

        <div className="wrapper">
          {/* -----------HEADER-------- */}

          <div className="header">
            <div className="search-bar">
              <input type="text" placeholder="Search" />
            </div>
            {/* ----Reloj -----*/}

            <div className="clock">
              <p id="date"></p>
              <p id="time"> </p>
            </div>
            {/* ------------------ */}
            <div className="user-settings">
              <img
                className="user-img"
                src="https://res.cloudinary.com/dtmziqubb/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1713034828/A7B15045-4966-428B-84F2-7A228DD7D1D9_fjchcg.jpg"
                alt=""
              />
              <div className="user-name">Elias</div>

              <svg viewBox="0 0 492 492" fill="currentColor">
                <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path>
              </svg>

              <div className="notify">
                <div className="notification"></div>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* -------------------------- MAIN---------------------------------- */}

          <div className="main-container">
            <div className="main-header anim">Sobre mi</div>

            <div className="main-blogs">
              <div className="main-blog anim" /* style="--delay: 0.1s" */>
                <div className="main-blog__title">
                  Diseñador y Programador
                  <h4 class="descripcion">
                    Mi nombre es Elias Solis soy un desarrollador front-end
                  </h4>
                </div>
                <div className="main-blog__author">
                  <div className="author-img__wrapper">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <img
                      className="author-img"
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1713069186/WhatsApp_Image_2024-03-20_at_17.51.05_rlr5g1.jpg"
                    />
                  </div>
                  <div className="author-detail">
                    <div className="author-name">Elias Solis</div>
                    <div className="author-info">
                      Front <span class="seperate"></span>Designer
                    </div>
                  </div>
                </div>
                <div className="main-blog__time">7 min</div>
              </div>
              <div className="main-blog anim" /* style="--delay: 0.2s" */>
                <div className="main-blog__title">Ultimos Proyectos</div>
                <div className="main-blog__author tips">
                  <div className="main-blog__time">7 min</div>
                  <div className="author-img__wrapper">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <img
                      className="author-img"
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1713551288/react-logo-1_w0rdvz.png"
                    />
                  </div>
                  <div className="author-detail">
                    <div className="author-name">Food Web</div>
                    <div className="author-info">
                      En proceso <span></span>de cambios
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ---------------------------------------------------- IMAGENES ABAJO---------------------------------------------------------------------- */}

            <div className="small-header anim" /* style="--delay: 0.3s" */>
              Proyectos
            </div>

            <div className="videos">
              <div className="video anim" /* style="--delay: 0.4s" */>
                <div className="video-time">8 min</div>
                <div className="video-wrapper">
                  <img
                    src="https://res.cloudinary.com/dtmziqubb/image/upload/v1713033461/brandon-lam-Dd_7xDCuuUo-unsplash_w40rsy.jpg"
                    alt=""
                  />
                  {/*  <!-- -------------------------- BOX 1 ------------------------*/}
                  <div className="author-img__wrapper video-author">
                    <img
                      className="author-img"
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1713991605/js_f5pvdh.png"
                    />
                  </div>
                </div>
                <div className="video-by">Java Script</div>
                <div className="video-name">Reloj Creativo </div>
                <div className="video-view">
                  Difficulty<span class="seperate video-seperate"></span>Medium
                </div>
              </div>
              {/* <!------------------------------ 2  Box ------------------------------------------------> */}

              <div className="video anim" /* style="--delay: 0.5s" */>
                <div className="video-time">5 min</div>
                <div className="video-wrapper">
                  <video muted="">
                    <source
                      src="https://res.cloudinary.com/dtmziqubb/video/upload/v1713550880/y2mate.com_-___Comic_Speed_Lines_1080p_aan4p9.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="author-img__wrapper video-author">
                    <img
                      className="author-img"
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1713991604/css_x97ls1.png"
                    />
                  </div>
                </div>
                <div className="video-by offline">Htlm + Css</div>
                <div className="video-name">Linterna </div>
                {/* <!------------------------------------- BOX 3  --------------------------------------------------->*/}
                <div className="video-view">
                  Difficulty<span class="seperate video-seperate"></span>Medium
                </div>
              </div>
              <div className="video anim" /* style="--delay: 0.6s" */>
                <div className="video-time">7 min</div>
                <div className="video-wrapper">
                  <video muted="">
                    <source
                      src="https://res.cloudinary.com/dtmziqubb/video/upload/v1713550880/y2mate.com_-___Comic_Speed_Lines_1080p_aan4p9.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="author-img__wrapper video-author">
                    <img
                      className="author-img"
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1713991604/css_x97ls1.png"
                    />
                  </div>
                </div>
                <div className="video-by offline">Html + Css</div>
                <div className="video-name">Declaracion </div>
                <div className="video-view">
                  Difficulty<span class="seperate video-seperate"></span>Medium
                </div>
              </div>
              {/*   <!-- ---------------   BOX 4 ------------------------ --> */}
              <div className="video anim" /* style="--delay: 0.7s" */>
                <div className="video-time">6 min</div>
                <div className="video-wrapper">
                  <video muted="">
                    <source
                      src="https://res.cloudinary.com/dtmziqubb/video/upload/v1713550880/y2mate.com_-___Comic_Speed_Lines_1080p_aan4p9.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="author-img__wrapper video-author">
                    <img
                      className="author-img"
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1713993116/css1_pkbk9j.png"
                    />
                  </div>
                </div>
                <div className="video-by">Html + Css</div>
                <div className="video-name">Lluvia </div>
                <div className="video-view">
                  Difficulty<span class="seperate video-seperate"></span>Easy
                </div>
              </div>
            </div>

            {/* --------------------- */}
          </div>

          {/* ------------------------------- */}
        </div>

        {/* ---------------------- */}
      </div>{" "}
    </>
  );
}

export default App;
