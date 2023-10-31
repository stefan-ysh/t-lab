<template>
  <div class="w-full hidden lg:block my-5 mx-auto fixed top-0 z-50" @mouseleave="leave">
    <div class="absolute top-2/4 left-4 -translate-y-2/4 text-cyan-50">Jiabin Labs</div>
    <ul class="w-6/12 bg-header-color table rounded-xl pl-3 pr-3 whitespace-nowrap my-0 mx-auto text-center">
      <li v-for="menu in  MENU_LIST" :key="menu.label" class="relative inline-block  ml-12">
        <a class="block font-sans" :href="'#' ? '#' : '#'" @mouseover="overLi(menu)">{{ menu.label }}</a>
        <ul v-if="curMenu === menu.label"
          class="absolute left-1/2 -translate-x-2/4 bg-header-color table my-0 mx-auto rounded-xl p-3">
          <li v-for="item in menu.items" :key="item.label" class="ml-0 flex flex-col whitespace-nowrap">
            <a class="relative block font-sans" :href="'#' ? '#' : '#'">{{ item.label }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <nav role="navigation" class="block lg:hidden absolute">
    <div id="menuToggle">
      <!--
      A fake / hidden checkbox is used as click reciever,
      so you can use the :checked selector on it.
      -->
      <input type="checkbox" />
      
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
          <a href="#" v-for="item in menu.items" :key="item.label">
            <li>{{ item.label }}</li>
          </a>
        </template>
      </ul>
      <!-- <ul id="menu" class="w-6/12 bg-header-color table rounded-xl pl-3 pr-3 whitespace-nowrap my-0 mx-auto text-center">
        <li v-for="menu in  MENU_LIST" :key="menu.label" class="relative inline-block  ml-12">
          <a class="block font-sans" :href="'#' ? '#' : '#'" @mouseover="overLi(menu)">{{ menu.label }}</a>
          <ul v-if="curMenu === menu.label"
            class="absolute left-1/2 -translate-x-2/4 bg-header-color table my-0 mx-auto rounded-xl p-3">
            <li v-for="item in menu.items" :key="item.label" class="ml-0 flex flex-col whitespace-nowrap">
              <a class="relative block font-sans" :href="'#' ? '#' : '#'">{{ item.label }}</a>
            </li>
          </ul>
        </li>
      </ul> -->
    </div>
  </nav>
  <slot />
  <div class="footer-container w-full md:w-[inherit]" data-v-a9ab81e2="">
    <div class="lg:block hidden w-full border-t-[1px] border-grey-800 my-10" data-v-a9ab81e2=""></div>
    <nav class="md:grid hidden grid-cols-5 w-full gap-x-8 p-10" data-v-a9ab81e2="">
      <div class="flex flex-col gap-y-content-sm justify-start items-start" data-v-a9ab81e2=""><a
          href="/research-innovation/" class="flex justify-center text-text-primary footer-hover-active"
          data-v-a9ab81e2="">
          <p class="caption-sm font-bold" data-v-a9ab81e2="">Research Areas</p>
        </a>
        <div class="flex flex-col gap-y-content-xs justify-start items-start" data-v-a9ab81e2=""><a
            href="/research-innovation/network-fundamentals/"
            class="flex justify-center text-grey-800 footer-hover-active" data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">Network Fundamentals</p>
          </a><a href="/research-innovation/automation/" class="flex justify-center text-grey-800 footer-hover-active"
            data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">Automation</p>
          </a><a href="/research-innovation/semiconductors-devices/"
            class="flex justify-center text-grey-800 footer-hover-active" data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">Semiconductors and Devices</p>
          </a><a href="/research-innovation/ai-software-systems/"
            class="flex justify-center text-grey-800 footer-hover-active" data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">AI and Software Systems</p>
          </a></div>
      </div>
      <div class="flex flex-col gap-y-content-sm justify-start items-start" data-v-a9ab81e2=""><a href="/institute/"
          class="flex justify-center text-text-primary footer-hover-active" data-v-a9ab81e2="">
          <p class="caption-sm font-bold" data-v-a9ab81e2="">Publications &amp; Media</p>
        </a>
        <div class="flex flex-col gap-y-content-xs justify-start items-start" data-v-a9ab81e2=""><a
            href="/institute/blog/" class="flex justify-center text-grey-800 footer-hover-active" data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">Blogs</p>
          </a><a href="/institute/white-papers/" class="flex justify-center text-grey-800 footer-hover-active"
            data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">White papers</p>
          </a><a href="/institute/media/" class="flex justify-center text-grey-800 footer-hover-active"
            data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">Media</p>
          </a><a href="/institute/publications/" class="flex justify-center text-grey-800 footer-hover-active"
            data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">Publications</p>
          </a></div>
      </div>
      <div class="flex flex-col gap-y-content-sm justify-start items-start" data-v-a9ab81e2=""><a
          href="/bell-labs-consulting/" class="flex justify-center text-text-primary footer-hover-active"
          data-v-a9ab81e2="">
          <p class="caption-sm font-bold" data-v-a9ab81e2="">Consulting</p>
        </a>
        <div class="flex flex-col gap-y-content-xs justify-start items-start" data-v-a9ab81e2=""><a
            href="/bell-labs-consulting/communications-service-providers/"
            class="flex justify-center text-grey-800 footer-hover-active" data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">Communications service providers</p>
          </a><a href="/bell-labs-consulting/enterprises-and-industry-players/"
            class="flex justify-center text-grey-800 footer-hover-active" data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">Enterprises and industry</p>
          </a><a href="/bell-labs-consulting/webscalers/" class="flex justify-center text-grey-800 footer-hover-active"
            data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">Webscalers</p>
          </a></div>
      </div>
      <div class="flex flex-col gap-y-content-sm justify-start items-start" data-v-a9ab81e2=""><a
          href="/collaboration-opportunities/" class="flex justify-center text-text-primary footer-hover-active"
          data-v-a9ab81e2="">
          <p class="caption-sm font-bold" data-v-a9ab81e2="">Collaboration</p>
        </a>
        <div class="flex flex-col gap-y-content-xs justify-start items-start" data-v-a9ab81e2=""><a
            href="/collaboration-opportunities/careers/" class="flex justify-center text-grey-800 footer-hover-active"
            data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">Careers</p>
          </a><a href="/collaboration-opportunities/internships/"
            class="flex justify-center text-grey-800 footer-hover-active" data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">Internships</p>
          </a><a href="/collaboration-opportunities/prize/" class="flex justify-center text-grey-800 footer-hover-active"
            data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">Bell Labs Prize</p>
          </a><a href="/collaboration-opportunities/d-a-p/" class="flex justify-center text-grey-800 footer-hover-active"
            data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">Distinguished Academic Partners</p>
          </a><a href="/collaboration-opportunities/arena2036/"
            class="flex justify-center text-grey-800 footer-hover-active" data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">ARENA2036</p>
          </a><a href="/collaboration-opportunities/iii-v-lab/"
            class="flex justify-center text-grey-800 footer-hover-active" data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">III-V Lab</p>
          </a></div>
      </div>
      <div class="flex flex-col gap-y-content-sm justify-start items-start" data-v-a9ab81e2=""><a href="/about/"
          class="flex justify-center text-text-primary footer-hover-active" data-v-a9ab81e2="">
          <p class="caption-sm font-bold" data-v-a9ab81e2="">About</p>
        </a>
        <div class="flex flex-col gap-y-content-xs justify-start items-start" data-v-a9ab81e2=""><a
            href="/about/researcher-profiles/" class="flex justify-center text-grey-800 footer-hover-active"
            data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">Our people</p>
          </a><a href="/about/the-women-driving-nokia-research-innovation/"
            class="flex justify-center text-grey-800 footer-hover-active" data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">Our women innovators</p>
          </a><a href="/about/locations/" class="flex justify-center text-grey-800 footer-hover-active"
            data-v-a9ab81e2="">
            <p class="caption-sm font-normal" data-v-a9ab81e2="">Locations</p>
        </a><a href="/about/history/" class="flex justify-center text-grey-800 footer-hover-active" data-v-a9ab81e2="">
          <p class="caption-sm font-normal" data-v-a9ab81e2="">History</p>
        </a><a href="/about/awards/" class="flex justify-center text-grey-800 footer-hover-active" data-v-a9ab81e2="">
          <p class="caption-sm font-normal" data-v-a9ab81e2="">Awards</p>
        </a><a href="/about/press-releases/" class="flex justify-center text-grey-800 footer-hover-active"
          data-v-a9ab81e2="">
          <p class="caption-sm font-normal" data-v-a9ab81e2="">Press releases</p>
        </a><a href="/about/contact/" class="flex justify-center text-grey-800 footer-hover-active" data-v-a9ab81e2="">
          <p class="caption-sm font-normal" data-v-a9ab81e2="">Contact us</p>
        </a></div>
    </div>
  </nav>
  <div class="w-full border-t-[1px] border-grey-800" data-v-a9ab81e2=""></div>

    <div class="w-full text-center" data-v-a9ab81e2=""> ©2023 Nokia All rights reserved </div>
</div></template>
<script setup>
const cl = (event) => {
  // 获取当前
}
const MENU_LIST = [
  {
    label: '解决方案',
    items: [
      {
        label: '985 / 211 高校',
        path: '/985211',
      },
      {
        label: '上市公司',
        path: '/company-list',
      },
      {
        label: '500 强企业',
        path: '/fhc',
      },
      {
        label: '中小企业',
        path: '/zxqy',
      },
    ]
  },
  {
    label: '上岸课题组',
    items: [
      {
        label: '985',
        path: '/985',
      },
      {
        label: '211',
        path: '/211',
      },
      {
        label: '中科院',
        path: '/zky',
      },
      {
        label: '特色院校',
        path: '/tsyx',
      },
    ]
  },
  {
    label: '上岸企业',
    items: [
      {
        label: '珠三角',
        path: '/saqy',
      },
      {
        label: '长三角',
        path: '/csj',
      },
      {
        label: '粤港澳',
        path: '/yga',
      },
      {
        label: '大湾区',
        path: '/dwq',
      },
      {
        label: '其他',
        path: '/qt',
      },
    ]
  },
  {
    label: 'Jiabin Labs',
    items: [
      {
        label: '关于 Jiabin Labs',
        path: '/item1',
      },
      {
        label: 'Research Scientist',
        path: '/item1',
      },
      {
        label: 'Project Scientist',
        path: '/item1',
      },
      {
        label: '科研与项目转孵化',
        path: '/item1',
      },
    ]
  },
  {
    label: 'CONTACT US',
    items: [
      {
        label: '联系我们',
        path: '/item1',
      },
      {
        label: 'Discover More',
        path: '/item1',
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
<style>ul li a {
  font-family: arial;
  color: #000000;
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
}</style>

<style>

#menuToggle
{
  display: block;
  position: relative;
  top: 50px;
  left: 50px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a
{
  text-decoration: none;
  color: #232323;
  
  transition: color 0.3s ease;
}

#menuToggle a:hover
{
  color: tomato;
}


#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: #cdcdcd;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu
{
  position: absolute;
  width: 300px;
  height: 500px;
  margin: -50px 0 0 -52px;
  padding: 50px;
  /* padding-top: 125px; */
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  overflow: scroll;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  border-radius: 0  20px 20px 0;
}

#menu li
{
  padding: 10px 0;
  font-size: 20px;
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul
{
  transform: none;
}
</style>