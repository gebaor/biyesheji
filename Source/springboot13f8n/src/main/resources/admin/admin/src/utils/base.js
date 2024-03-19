const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot13f8n/",
            name: "springboot13f8n",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot13f8n/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "地摊租赁管理 小程序"
        } 
    }
}
export default base
