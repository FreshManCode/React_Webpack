
/**
 * 顶部Tab Item条目页面
 */
export const Menus = [
    { name: "首页", path: "/Home", key: "Home" },
    { name: "关于", path: "/About", key: "About" },
    { name: "学习", path: "/Learn", key: "Learn" },
];

export const HomeItems = [
    { name: "useState()：状态钩子", path: "/ReactHook", key: "UseState", query: { myHook: 'useState' } },
    { name: "useState()：状态钩子1", path: "/ReactHook", key: "UseState1", query: { myHook: 'useState1' } },
    { name: "useContext()：共享状态钩子", path: "/ReactHook", key: "useContext", query: { myHook: 'useContext' } },
    { name: "useReducer()：action 钩子", path: "/ReactHook", key: "useReducer", query: { myHook: 'useReducer' } },
    { name: "useEffect()：副作用钩子", path: "/ReactHook", key: "useEffect", query: { myHook: 'useEffect' } },
];

/**
 * Learn 页面中的Item
 */
export const LearnItems = [
    { name: "Redux中间键", path: "/ReduxMiddleWare", key: "ReduxMiddleWare" },
    { name: "XMLHttp", path: "/XMLHttp", key: "XMLHttp" },
    { name: "Axios", path: "/Axios", key: "Axios" },
    { name: "Ajax请求测试", path: "/Ajax", key: "Ajax" },

];


/**
 * 获取到文章列表假数据，共 100 条
 */
export const ListURL = 'http://jsonplaceholder.typicode.com/posts';

export const AxiosURL = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';