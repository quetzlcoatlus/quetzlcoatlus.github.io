// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Repositories I&#39;ve worked on!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Allie&#39;s global CV, loosely chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-lanchester-39-s-laws-and-sc2",
        
          title: "Lanchester&#39;s Laws and SC2",
        
        description: "Lanchester&#39;s laws and Starcraft II post",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Lanchesters-Laws-and-SC2/";
          
        },
      },{id: "post-life-as-a-build-order-sc2",
        
          title: "Life as a Build Order SC2",
        
        description: "Life through the lens of a Starcraft II build order post",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Life-as-a-Build-Order-SC2/";
          
        },
      },{id: "post-fretboard-visualizer",
        
          title: "Fretboard Visualizer",
        
        description: "Fretboard visualizer project post",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/fretboard-visualizer/";
          
        },
      },{id: "post-victor-frankl-quote",
        
          title: "Victor Frankl Quote",
        
        description: "Victor Frankl quote from Man&#39;s Search for Meaning",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/frankl-quote/";
          
        },
      },{id: "news-finalized-initial-setup-of-the-website-today",
          title: 'Finalized initial setup of the website ~today!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%6E%61%6C%65%78%32%34%35%36@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/quetzlcoatlus", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/alexander-lane-ai-safety", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@quetzlcoatlus", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
