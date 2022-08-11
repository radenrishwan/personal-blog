import { NavigationBar } from "../resources/component/NavigationBar";
import { BottomBar } from "../resources/component/BottomBar";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSpinner } from "@fortawesome/free-solid-svg-icons";
import ArticleRepository from "../repository/article.mjs";
import { Article as ArticlePage } from "../resources/component/Article";
import { SideBar } from "../resources/component/SideBar";

export const Home = () => {
    const repository = new ArticleRepository() // TODO: singleton instance

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadArticle = async () => {
        setLoading(true)
        repository.findAll(3, articles.length, articles.length + 2).then(newArticles => {
            if (newArticles.length > 0) {
                setArticles([...articles, ...newArticles])
            }
            setLoading(false)
        })
    }


    useEffect(() => {
        setLoading(true)
        repository.findAll(3).then(newArticles => {
            setArticles(newArticles)
            setLoading(false)
        })

        // eslint-disable-next-line
    }, [])

    return (
        <>
            <NavigationBar />
            <div className="container mx-auto px-[8rem] flex flex-column justify-start items-start mt-[6rem]">
                <div className="basis-9/12 flex flex-col gap-10 pr-10 w-[50vw]">
                    {
                        articles.map(article => {
                            const id = uuidv4()
                            return (
                                <div key={`${article.id}-${id}`}>
                                    <ArticlePage to={`/article/${article.id}`} article={article} />
                                </div>
                            )
                        })
                    }

                    <div className="w-full flex justify-center">
                        {loading ? <FontAwesomeIcon icon={faSpinner}
                            className="fa-spin-pulse text-2xl hover:text-green-400" /> :
                            <FontAwesomeIcon icon={faCaretDown} onClick={loadArticle}
                                className="hover:text-green-400 text-2xl cursor-pointer" />}
                    </div>
                </div>

                <div className="basis-3/12">
                    <SideBar />
                </div>
            </div>
            <BottomBar />
        </>
    )
}

export default Home

