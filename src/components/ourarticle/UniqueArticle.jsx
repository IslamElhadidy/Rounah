import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import directcheese from '../../assets/images/section4.png'
function UniqueArticle({blog}) {
  const [t , i18n] = useTranslation()
  return (
    <>
            <div className="box__sec4 d-flex align-items-center justify-content-center flex-column gap-3" >
                <img src={blog.image} alt="" />
                {/* <p className='text-center'>{blog.title}</p> */}
                {/* {t("snaksdesc")} */}
                <Link to={`/article/${blog.id}`}> {blog.content}</Link>
                {/* {t("ReadTheArticle")} */}
            </div>

            
            
    </>
  )
}

export default UniqueArticle