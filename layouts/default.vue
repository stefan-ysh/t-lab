<template>
  <div class="w-full hidden lg:block bg-base-200 mx-auto sticky top-0 z-50" @mouseleave="leave">
    <div class="absolute top-2/4 left-4 -translate-y-2/4 text-base-content">Jiabin Labs</div>
    <ul class="w-6/12 bg-base-200 table rounded-xl pl-3 pr-3 whitespace-nowrap my-0 mx-auto text-center">
      <li v-for="menu in  MENU_LIST" :key="menu.label" class="relative inline-block  ml-12">
        <nuxt-link class="block font-sans" :href="'#' ? '#' : '#'" @mouseover="overLi(menu)">{{ menu.label }}</nuxt-link>
        <ul v-if="curMenu === menu.label"
          class="absolute left-1/2 -translate-x-2/4 bg-base-200 table my-0 mx-auto rounded-xl p-3">
          <li v-for="item in menu.items" :key="item.label" class="ml-0 flex flex-col whitespace-nowrap">
            <nuxt-link class="relative block font-sans" :href="item.path">{{ item.label }}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <nav role="navigation" class="block lg:hidden fixed top-0 z-10">
    <div id="menuToggle">
      <!--
      A fake / hidden checkbox is used as click reciever,
      so you can use the :checked selector on it.
      -->
      <input type="checkbox" ref="menuCheckbox" />

      <!--
      Some spans to act as a hamburger.
      
      They are acting like a real hamburger,
      not that McDonalds stuff.
      -->
      <span></span>
      <span></span>
      <span></span>

      <!--
      Too bad the menu has to be inside of the button
      but hey, it's pure CSS magic.
      -->
      <ul id="menu" class="overflow-y-scroll">
        <template v-for="menu in MENU_LIST" :key="menu.label">
          <h3 class="w-full !p-0 -ml-7 font-mono">{{ menu.label }}</h3>
          <hr class="h-[1px] md:w-[60%] w-[60%] border-t-[4px] border-primary-400 border-cyan-400">
          <nuxt-link :href="item.path" v-for="item in menu.items" :key="item.label" @click="menuCheckbox.checked = false">
            <li>{{ item.label }}</li>
          </nuxt-link>
        </template>
      </ul>
    </div>
  </nav>
  <slot />
  <!-- <div class="footer-container w-full md:w-[inherit]">
    <div>我们的最新动态</div>
    <div class="lg:block hidden w-full border-t-[1px] border-grey-800 mb-5"></div>
    <nav class="md:grid hidden grid-cols-4 w-full py-5 gap-x-8">
      <div class="flex flex-col gap-y-content-sm justify-start items-start"><a
          href="/research-innovation/" class="flex justify-center text-text-primary footer-hover-active"
          >
          <p class="caption-sm font-bold">植物生长工作室</p>
        </a>
        <div class="flex flex-col gap-y-content-xs justify-start items-start"><a
            href="/research-innovation/network-fundamentals/"
            class="flex justify-center text-grey-800 footer-hover-active">
            <p class="caption-sm font-normal">Network Fundamentals</p>
          </a><a href="/research-innovation/automation/" class="flex justify-center text-grey-800 footer-hover-active"
            >
            <p class="caption-sm font-normal">Automation</p>
          </a><a href="/research-innovation/semiconductors-devices/"
            class="flex justify-center text-grey-800 footer-hover-active">
            <p class="caption-sm font-normal">Semiconductors and Devices</p>
          </a><a href="/research-innovation/ai-software-systems/"
            class="flex justify-center text-grey-800 footer-hover-active">
            <p class="caption-sm font-normal">AI and Software Systems</p>
          </a></div>
      </div>
      <div class="flex flex-col gap-y-content-sm justify-start items-start"><a href="/institute/"
          class="flex justify-center text-text-primary footer-hover-active">
          <p class="caption-sm font-bold">STEAM 和 PBL工作室</p>
        </a>
        <div class="flex flex-col gap-y-content-xs justify-start items-start"><a
            href="/institute/blog/" class="flex justify-center text-grey-800 footer-hover-active">
            <p class="caption-sm font-normal">Blogs</p>
          </a><a href="/institute/white-papers/" class="flex justify-center text-grey-800 footer-hover-active"
            >
            <p class="caption-sm font-normal">White papers</p>
          </a><a href="/institute/media/" class="flex justify-center text-grey-800 footer-hover-active"
            >
            <p class="caption-sm font-normal">Media</p>
          </a><a href="/institute/publications/" class="flex justify-center text-grey-800 footer-hover-active"
            >
            <p class="caption-sm font-normal">Publications</p>
          </a></div>
      </div>
      <div class="flex flex-col gap-y-content-sm justify-start items-start"><a
          href="/bell-labs-consulting/" class="flex justify-center text-text-primary footer-hover-active"
          >
          <p class="caption-sm font-bold">静电纺丝法制备纳米纤维材料设备</p>
        </a>
        <div class="flex flex-col gap-y-content-xs justify-start items-start"><a
            href="/bell-labs-consulting/communications-service-providers/"
            class="flex justify-center text-grey-800 footer-hover-active">
            <p class="caption-sm font-normal">Communications service providers</p>
          </a><a href="/bell-labs-consulting/enterprises-and-industry-players/"
            class="flex justify-center text-grey-800 footer-hover-active">
            <p class="caption-sm font-normal">Enterprises and industry</p>
          </a><a href="/bell-labs-consulting/webscalers/" class="flex justify-center text-grey-800 footer-hover-active"
            >
            <p class="caption-sm font-normal">Webscalers</p>
          </a></div>
      </div>
      <div class="flex flex-col gap-y-content-sm justify-start items-start"><a
          href="/collaboration-opportunities/" class="flex justify-center text-text-primary footer-hover-active"
          >
          <p class="caption-sm font-bold">成果：STEAM 和 PBL成果</p>
        </a>
        <div class="flex flex-col gap-y-content-xs justify-start items-start"><a
            href="/collaboration-opportunities/careers/" class="flex justify-center text-grey-800 footer-hover-active"
            >
            <p class="caption-sm font-normal">Careers</p>
          </a><a href="/collaboration-opportunities/internships/"
            class="flex justify-center text-grey-800 footer-hover-active">
            <p class="caption-sm font-normal">Internships</p>
          </a><a href="/collaboration-opportunities/prize/" class="flex justify-center text-grey-800 footer-hover-active"
            >
            <p class="caption-sm font-normal">Bell Labs Prize</p>
          </a><a href="/collaboration-opportunities/d-a-p/" class="flex justify-center text-grey-800 footer-hover-active"
            >
            <p class="caption-sm font-normal">Distinguished Academic Partners</p>
          </a><a href="/collaboration-opportunities/arena2036/"
            class="flex justify-center text-grey-800 footer-hover-active">
            <p class="caption-sm font-normal">ARENA2036</p>
          </a><a href="/collaboration-opportunities/iii-v-lab/"
            class="flex justify-center text-grey-800 footer-hover-active">
            <p class="caption-sm font-normal">III-V Lab</p>
          </a></div>
      </div>
    </nav>
    <div class="w-full border-t-[1px] border-grey-800"></div>

    <div class="w-full text-center"> ©2023 Nokia All rights reserved </div>
  </div> -->
  <footer class="footer p-10 bg-base-200 text-base-content">
    <nav>
      <header class="footer-title">Services</header>
      <a class="link link-hover">Branding</a>
      <a class="link link-hover">Design</a>
      <a class="link link-hover">Marketing</a>
      <a class="link link-hover">Advertisement</a>

    </nav>
    <nav>
      <header class="footer-title">Company</header>
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </nav>
    <nav>
      <header class="footer-title">Legal</header>
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </nav>
  </footer>
  <footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
    <aside class="items-center grid-flow-col">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
        clip-rule="evenodd" class="fill-current">
        <path
          d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z">
        </path>
      </svg>
      <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>
    </aside>
    <nav class="md:place-self-center md:justify-self-end">
      <div class="grid grid-flow-col gap-4">
        <!-- 推特 -->
        <!-- https://twitter.com/JiabinLabs -->
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
            </path>
          </svg></a>
        <!-- 抖音 -->
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Brand" transform="translate(-720.000000, -48.000000)">
                  <g id="tiktok_fill" transform="translate(720.000000, 48.000000)">
                    <path
                      d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                      id="MingCute" fill-rule="nonzero"> </path>
                    <path
                      d="M14,2 C15.1046,2 16,2.89543 16,4 C16,5.44733 17.03,6.6618 18.3984,6.93991 C19.4808,7.15992 20.1799,8.21575 19.9599,9.29819 C19.7399,10.3806 18.6841,11.0798 17.6016,10.8598 C17.0406,10.7457 16.5037,10.5646 16,10.3252 L16,16 C16,19.3137 13.3137,22 10,22 C6.68629,22 4,19.3137 4,16 C4,13.2015 5.91407,10.8551 8.50148,10.1891 C9.57119,9.91382 10.6616,10.5578 10.9369,11.6275 C11.2122,12.6972 10.5682,13.7876 9.49852,14.0629 C8.63547,14.285 8,15.0708 8,16 C8,17.1046 8.89543,18 10,18 C11.1046,18 12,17.1046 12,16 L12,4 C12,2.89543 12.8954,2 14,2 Z"
                      id="路径" fill="currentColor"> </path>
                  </g>
                </g>
              </g>
            </g>
          </svg></a>
          <!-- https://www.facebook.com/JiabinLabs   facebook -->
        <!-- 微博 -->
        <!-- https://weibo.com/5522593117 -->
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill-rule="nonzero"
                  d="M17.525 11.378c1.263.392 2.669 1.336 2.669 3.004 0 2.763-3.98 6.239-9.964 6.239-4.565 0-9.23-2.213-9.23-5.852 0-1.902 1.204-4.102 3.277-6.177 2.773-2.77 6.004-4.033 7.219-2.816.537.537.588 1.464.244 2.572-.178.557.525.25.525.25 2.24-.938 4.196-.994 4.909.027.38.543.343 1.306-.008 2.19-.163.407.048.471.36.563zm-7.282 7.939c3.641-.362 6.401-2.592 6.167-4.983-.237-2.391-3.382-4.038-7.023-3.677-3.64.36-6.403 2.59-6.167 4.98.237 2.394 3.382 4.039 7.023 3.68zM6.16 14.438c.754-1.527 2.712-2.39 4.446-1.94 1.793.463 2.707 2.154 1.976 3.8-.744 1.682-2.882 2.578-4.695 1.993-1.752-.566-2.493-2.294-1.727-3.853zm1.446 2.587c.568.257 1.325.013 1.676-.55.346-.568.163-1.217-.407-1.459-.563-.237-1.291.008-1.64.553-.354.547-.189 1.202.371 1.456zm2.206-1.808c.219.092.501-.012.628-.231.123-.22.044-.466-.178-.548-.216-.084-.486.018-.613.232-.123.214-.054.458.163.547zM19.873 9.5a.725.725 0 1 1-1.378-.451 1.38 1.38 0 0 0-.288-1.357 1.395 1.395 0 0 0-1.321-.425.723.723 0 1 1-.303-1.416 2.836 2.836 0 0 1 3.29 3.649zm-3.916-6.575A5.831 5.831 0 0 1 21.5 4.72a5.836 5.836 0 0 1 1.22 5.704.838.838 0 0 1-1.06.54.844.844 0 0 1-.542-1.062 4.143 4.143 0 0 0-4.807-5.327.845.845 0 0 1-.354-1.65z">
                </path>
              </g>
            </g>
          </svg>
        </a>
        <!-- 微信 -->
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>wechat_fill</title>
              <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Brand" transform="translate(-816.000000, -48.000000)">
                  <g id="wechat_fill" transform="translate(816.000000, 48.000000)">
                    <path
                      d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                      id="MingCute" fill-rule="nonzero"> </path>
                    <path
                      d="M16,10 C19.1536,10 22,12.1859 22,15.213 C22,16.9087 21.0792,18.366 19.7399,19.2931 C19.6961,19.558 19.7321,19.8253 19.7321,20.0917 C19.7321,20.5934 19.3304,21 18.8349,21 C18.1551,21 17.525,20.7758 16.9918,20.3553 C16.6686,20.4019 16.3373,20.426 16,20.426 C12.8464,20.426 10,18.2401 10,15.213 C10,12.1859 12.8464,10 16,10 Z M9.5,3 C13.2774,3 16.6488,5.5354 16.9743,9.0623 C16.6519,9.02108 16.3262,9 16,9 C12.4669,9 9,11.4729 9,15.2089 C9,15.5631 9.03117,15.906 9.0906,16.2365 C8.77649,16.2216 8.46717,16.1896 8.16389,16.1416 C7.49325,16.691 6.72062,17 5.85417,17 C5.3364,17 4.91667,16.5661 4.91667,16.0308 L4.92128981,15.8333185 L4.92128981,15.8333185 L4.938295,15.4358 C4.942735,15.2371 4.93443,15.0394 4.88345,14.8468 C3.16999,13.6654 2,11.7933 2,9.62308 C2,5.8073 5.52517,3 9.5,3 Z M14,13 C13.4477,13 13,13.4477 13,14 C13,14.5523 13.4477,15 14,15 C14.5523,15 15,14.5523 15,14 C15,13.4477 14.5523,13 14,13 Z M18,13 C17.4477,13 17,13.4477 17,14 C17,14.5523 17.4477,15 18,15 C18.5523,15 19,14.5523 19,14 C19,13.4477 18.5523,13 18,13 Z M7,6 C6.44772,6 6,6.44772 6,7 C6,7.55228 6.44772,8 7,8 C7.55228,8 8,7.55228 8,7 C8,6.44772 7.55228,6 7,6 Z M12,6 C11.4477,6 11,6.44772 11,7 C11,7.55228 11.4477,8 12,8 C12.5523,8 13,7.55228 13,7 C13,6.44772 12.5523,6 12,6 Z"
                      id="形状" fill="currentColor"> </path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>
        <!-- orcid -->
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>ORCID icon</title>
              <path
                d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z">
              </path>
            </g>
          </svg>
        </a>
      </div>
    </nav>
  </footer>
</template>
<script setup>
const menuCheckbox = ref(null)
const cl = (event) => {
  // 获取当前
}
const MENU_LIST = [
  {
    label: '解决方案',
    items: [
      {
        label: '首页',
        path: '/'
      },
      {
        label: '985 / 211 高校',
        path: '/solution/985211',
      },
      {
        label: '上市公司',
        path: '/solution/company-list',
      },
      {
        label: '500 强企业',
        path: '/solution/fhc',
      },
      {
        label: '中小企业',
        path: '/solution/zxqy',
      },
    ]
  },
  {
    label: '上岸课题组',
    items: [
      {
        label: '985',
        path: '/research-group/985',
      },
      {
        label: '211',
        path: '/research-group/211',
      },
      {
        label: '中科院',
        path: '/research-group/zky',
      },
      {
        label: '特色院校',
        path: '/research-group/tsyx',
      },
    ]
  },
  {
    label: '上岸企业',
    items: [
      {
        label: '珠三角',
        path: '/enterprise/saqy',
      },
      {
        label: '长三角',
        path: '/enterprise/csj',
      },
      {
        label: '粤港澳',
        path: '/enterprise/yga',
      },
      {
        label: '大湾区',
        path: '/enterprise/dwq',
      },
      {
        label: '其他',
        path: '/enterprise/qt',
      },
    ]
  },
  {
    label: 'Jiabin Labs',
    items: [
      {
        label: '关于 Jiabin Labs',
        path: '/labs/about',
      },
      {
        label: 'Research Scientist',
        path: '/labs/research-scientist',
      },
      {
        label: 'Project Scientist',
        path: '/labs/project-scientist',
      },
      {
        label: '科研与项目转孵化',
        path: '/labs/science-research-project',
      },
    ]
  },
  {
    label: 'CONTACT US',
    items: [
      {
        label: '联系我们',
        path: '/contact/item1',
      },
      {
        label: 'Discover More',
        path: '/contact/item1',
      }
    ]
  },
]
const curMenu = ref('')
const overLi = (menu) => {
  curMenu.value = menu.label
}

const leave = () => {
  curMenu.value = ''
}
</script>
<style>
ul li a {
  font-family: arial;
  /* color: #000000; */
  text-decoration: none;
  padding: 15px 10px;
  font-size: 18px;
}

/* ul li a+a {
  margin-left: 16px;
} */

ul li a::after {
  content: '';
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 4px;
  background-color: #4795e8;
  transform-origin: bottom right;
  transition: transform 0.5s ease;
  transform: scaleX(0);
}

ul a:hover::after {
  transform-origin: bottom left;
  transform: scaleX(1);
}
</style>

<style>
#menuToggle {
  display: block;
  position: relative;
  top: 20px;
  left: 20px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a {
  text-decoration: none;
  color: #232323;

  transition: color 0.3s ease;
}

#menuToggle a:hover {
  color: tomato;
}


#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;

  opacity: 0;
  /* hide this */
  z-index: 2;
  /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #cdcdcd;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked~span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked~span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked~span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu {
  position: absolute;
  width: 300px;
  height: 500px;
  margin: -50px 0 0 -20px;
  padding: 50px;
  /* padding-top: 125px; */
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  overflow: scroll;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
  border-radius: 0 20px 20px 0;
}

#menu li {
  padding: 10px 0;
  font-size: 20px;
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked~ul {
  transform: none;
}
</style>