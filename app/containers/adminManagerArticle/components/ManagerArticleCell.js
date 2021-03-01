import style from '../style.css'
import React from 'react'
import {Button} from 'antd'
export const ManagerArticleCell = (props)=>{
    const {isPublish}=props.data;

    function hideShowArticle() {
        console.log('隐藏显示',props)
        props.hide_show_article(props.data._id,!props.data.isPublish)
    }

    /**
     * todo 无热更新
     * <Provider> does not support changing `store` on the fly. It is most likely that you see this error because you updated to Redux 2.x and React Redux 2.x which no longer hot reload reducers automatically. See https://github.com/reactjs/react-redux/releases/tag/v2.0.0 for the migration instructions.
     */

   return <div className={style.cellContainer}>
        <div className={style.cellAboutArticle}>
            <p className={style.articleTitle}>{props.data.title}</p>
            <p className={style.articleInfo}>
                <span>作者:{props.data.author}</span>
                <span>阅读数:{props.data.viewCount}</span>
                <span>评论数:{props.data.commentCount}</span>
                <span>发表时间:{props.data.time}</span>
            </p>
        </div>
        <div className={style.cellState}>
            <span>
                {isPublish?'已发布':'草稿'}
            </span>
        </div>
        <div className={style.cellOperation}>
            {/*<a type='primary' style={{color:isPublish?'red':'blue'}}  onClick={hideShowArticle}>*/}
            {/*    {isPublish?'隐藏':'发布'}*/}
            {/*</a>*/}
            <Button type='primary' icon="edit" onClick={()=>{props.edit_article(props.data._id);props.history.push('/admin/newArticle')}}>编辑</Button>
            {/*<Button type='primary' icon="delete" onClick={()=>props.delete(props.data._id)}>删除</Button>*/}
            <Button type='primary'    onClick={hideShowArticle}>{isPublish?'隐藏':'发布'}</Button>
            <Button type='primary' icon="eye-o" onClick={()=>{props.history.push(`/detail/${props.data._id}`,{id:props.data._id});props.getArticleDetail(props.data._id)}}>查看</Button>
        </div>
    </div>
};
