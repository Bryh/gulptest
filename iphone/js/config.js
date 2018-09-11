console.log("config.js已加载");
requirejs.config({
    baseUrl: "localhost:10086",
    path: {
        "jquery": "https://cdn.bootcss.com/jquery/2.2.4/jquery",
    }
})
