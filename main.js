
let stories = [
  {
    image: "saheed.jpg",
    viewed: false,
    name: "LekanSaheed",
  },
  {
    image: "jeff.jpg",
    viewed: false,
    name: "Jeff3xl",
  },
  {
    image: "alimzy.jpg",
    viewed: true,
    name: "alimzyyy",
  },
  {
    image: "mesh.jpg",
    viewed: false,
    name: "meshstudios",
  },
  {
    image: "bigwiz.jpg",
    viewed: true,
    name: "bigwizz",
  },
  {
    image: "olamide.jpg",
    viewed: false,
    name: "olamide",
  },
];
let story_panel = document.getElementById("story_panel");
let rootDiv = document.createElement("div");
rootDiv.classList.add("story_wrapper");

stories.forEach((story) => {
  let parent = document.createElement("div");
  parent.classList.add("story");
  parent.innerHTML = `<span class='story_img ${
    story.viewed ? "" : "unviewed"
  }' ><img src='/public/${story.image}'/></span>
    <div class='story_name'>${story.name}</div>
`;

  rootDiv.appendChild(parent);
});
story_panel.appendChild(rootDiv);

let articles = [
  {
    img: "/public/obo_and_chioma.jpg",
    author: {
      name: "yabaleftonline",
      has_story: true,
      img: "mesh.jpg",
    },
    likes_count: 2990,
    comment_count: 394080,
    time_created: new Date().toISOString(),
    title:
      "Fans appreciate Chioma as she steps out for her man @davido on uncle's inauguration as Osun state governor",
    time: "4 HOURS AGO",
  },
  {
    img: "/public/mayor.jpg",
    author: {
      name: "lekansaheed",
      has_story: true,
      img: "jeff.jpg",
    },
    likes_count: 398492,
    comment_count: 394080,
    time_created: new Date().toISOString(),
    time: "10 MINS AGO",
    title:
      "Mayorkun seen with popular U.K influencer as she treats him to a special dinner, something grooming ehn!",
  },
  {
    img: "/public/ay.jfif",
    author: {
      name: "gossipmillng",
      has_story: false,
      img: "alimzy.jpg",
    },
    comment_count: 394080,
    likes_count: 7,
    time_created: new Date().toISOString(),
    time: "48 MINS AGO",
    title:
      "Standup comedian, Ayo Makun, popularly known as AY, celebrates wife's better in stunnning photoshoot with kids",
  },
  {
    img: "/public/portable.jpg",
    author: {
      name: "instablog9ja",
      has_story: true,
      img: "saheed.jpg",
    },
    comment_count: 394080,
    likes_count: 7,
    time: "2 DAYS AGO",
    time_created: new Date().toISOString(),
    title: "Throwback to portable and dj chicken",
  },
];
let articleContainer = document.getElementById("article_cont");
const article_main = document.createElement("div");
articles.forEach((anArticle) => {
  let article = document.createElement("article");
  article.classList.add("article", "geist-border");
  article.innerHTML = `<header class="article_header">
                 <div class="main_header">
                <div data-hasstory='${
                  anArticle.author.has_story
                }' class="img_cover"><img src='/public/${
    anArticle.author.img
  }'/></div>
                <div class='article_author'>
                  <span>${anArticle.author.name}</span>
                  
                </div>
              </div>
              <div style='margin-right:14px; font-size:14px'><i class="fas fa-ellipsis-h"></i></div>
            </header>
            
            <div class='article_image_cover'>
            <img src='${anArticle.img}'/>
            </div>
            <div class='article_foot'>
            <div class='article_foot_all_icons'>
                <div class='article_foot_icons'>
                <i class="far fa-heart icon"></i>
                <i class="far fa-comment icon"></i>
                <i class="far fa-paper-plane icon"></i>
            </div>
            <i class="far fa-bookmark icon"></i>
            </div>
            <div class='article_foot_main'>
            <div class='likes_count'>${anArticle.likes_count.toLocaleString()} likes</div>
            <div class='article_title'><span>${anArticle.author.name}</span> ${
    anArticle.title
  }</div>
  <div class='article_comment'>View all ${anArticle.comment_count.toLocaleString()} comments</div>
  <div class='article_time'>${anArticle.time}</div>
            </div>
            </div>
          `;
  article_main.appendChild(article);
});
articleContainer.appendChild(article_main);

const suggestions = [
  {
    user: {
      name: "ademola Habeeb",
      status: "new",
      img: "olamide.jpg",
    },
  },
  {
    user: {
      name: "ayodele salam",
      status: "followed_by_friend",
      img: "bigwiz.jpg",
    },
    following_friends: ["lekansaheed"],
  },
  {
    user: {
      name: "john precious",
      status: "new",
      img: "saheed.jpg",
    },
  },
  {
    user: {
      name: "citrone hq",
      status: "new",
      img: "mesh.jpg",
    },
  },
  {
    user: {
      name: "BNXN",
      status: "new",
      img: "alimzy.jpg",
    },
  },
];

let suggestion_panel = document.getElementById("suggestmain");
let root_suggest = document.createElement("div");
suggestions.forEach((suggestion) => {
  let asuggestion = document.createElement("div");
  asuggestion.classList.add("suggest_wrapper");
  asuggestion.innerHTML = `
    <div class='suggest_flex_main'>
    <div class='suggest_avatar'>
    <img src='/public/${suggestion.user.img}'/></div>
    <div>
    <span class='suggest_name'>${suggestion.user.name}</span>
    <span class='suggest_status'>${
      suggestion.user.status === "new"
        ? "New to instagram"
        : "Followed by friends and 1 other"
    }</span>
    </div>
    </div>
    <button class='util_btn'>Follow</button>
    `;
  root_suggest.appendChild(asuggestion);
});
suggestion_panel.appendChild(root_suggest);
