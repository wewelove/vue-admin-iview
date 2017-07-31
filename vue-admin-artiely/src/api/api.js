/**
 * Created by Administrator on 2017/7/20.
 */
import fetch from './fetch'

const orderList = params => {
    return fetch({
        url: `/data/${params.category}/${params.limit}/${params.page}`,
        method: 'get',
        params: ''
    })
};

const articleList = params => {
    return fetch({
        url: `/search/query/listview/category/Android/count/${params.limit}/page/${params.page}`,
        method: 'get',
        params: ''
    })
};



const apiObj = {
    orderList,
    articleList
}

export default apiObj