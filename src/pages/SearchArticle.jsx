import { NavigationBar } from "../resources/component/NavigationBar";
import { BottomBar } from "../resources/component/BottomBar";
import { Article as ArticlePage } from "../resources/component/Article";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ArticleRepository from "../repository/article.mjs";
import { v4 as uuidv4 } from "uuid";
import { SideBar } from "../resources/component/SideBar";

export const SearchArticle = () => {
    const location = useLocation() // TODO: singleton instance
    const repository = new ArticleRepository() // TODO: singleton instance

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadArticle = async () => {
        setLoading(true)
        repository.findByTitle(location.state, 3, articles.length, articles.length + 2).then(newArticles => {
            if (newArticles.length > 0) {
                setArticles([...articles, ...newArticles])
            }
            setLoading(false)
        })
    }


    useEffect(() => {
        setLoading(true)
        repository.findByTitle(location.state, 3).then(newArticles => {
            setArticles(newArticles)
            setLoading(false)
        })

        document.title = `Blog - ${location.state}`

        // eslint-disable-next-line
    }, [])

    // eslin

    return (
        <>
            <NavigationBar />
            <div className="container mx-auto px-[8rem] flex flex-column justify-start items-start mt-[6rem]">
                <div className="basis-9/12 flex flex-col pr-10 w-[50vw]">
                    <p className="text-2xl font-bold">Search Result</p>
                    <hr className="w-full mt-2" />
                    <p className="mt-2 text-md font-light mb-10">Result for {location.state}</p>
                    <div className="w-full flex flex-col gap-10 pr-10">
                        {
                            (location.state === null) ? (
                                <>
                                    <div
                                        className="w-full flex flex-col justify-center items-center pt-10 text-2xl font-bold">
                                        <FontAwesomeIcon icon={faSearch} />
                                        <p className="mt-5"> Article Not Found</p>
                                    </div>
                                </>
                            ) : <>
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
                                        className="fa-spin-pulse text-2xl hover-text-green-400" /> :
                                        <FontAwesomeIcon icon={faCaretDown} onClick={loadArticle}
                                            className="hover:text-green-400 text-2xl cursor-pointer" />}
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div className="basis-3/12 w-full">
                    <SideBar />
                </div>
            </div>
            <BottomBar />
        </>
    )
}