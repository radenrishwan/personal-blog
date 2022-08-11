import { NavigationBar } from "../resources/component/NavigationBar";
import { BottomBar } from "../resources/component/BottomBar";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";
import remarkGfm from "remark-gfm";
import remarkBehead from "remark-behead";
import { useParams } from "react-router-dom";
import ArticleRepository from "../repository/article.mjs";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Buffer } from "buffer";
import { SideBar } from "../resources/component/SideBar";

export const ReadArticle = () => {
    const [loading, setLoading] = useState(false)
    const [article, setArticle] = useState(null)
    const [content, setContent] = useState("")
    const [date, setDate] = useState(null)
    const { id } = useParams()
    const repository = new ArticleRepository()

    useEffect(() => {
        setLoading(true)
        loadArticle().then(() => setLoading(false))

        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (article != null) {
            const buffer = Buffer.from(article.content, "base64")

            setDate(new Date(parseInt(article.createdAt)))
            setContent(buffer.toString())
        }
    }, [article])

    const loadArticle = async () => {
        const newArticle = await repository.findById(id)
        setArticle(newArticle)
    }


    return (<>
        <NavigationBar />
        <div className="container mx-auto px-[8rem] flex flex-column justify-start items-start mt-[6rem]">
            <div className="basis-9/12 flex flex-col pr-10 w-[50vw]">
                {loading ??
                    <FontAwesomeIcon icon={faSpinner} className="fa-spin-pulse text-4xl mt-10 hover-text-green-400" />}
                {article == null ? <></> : <>
                    <p className="text-3xl font-bold">
                        {article.title}
                    </p>
                    <div className="flex justify-between items-center pr-10">
                        <p className="text-md font-light mt-2">
                            {
                                date == null ? <></> : date.toLocaleDateString('en-US', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })
                            } | <span
                                className="font-bold">{article.author}</span>
                        </p>
                        <div
                            className="bg-green-400 text-white font-bold text-sm h-6 w-min px-2 py-1 mt-2 rounded-r-full">
                            {article.category}
                        </div>
                    </div>
                    <hr className="w-full my-8" />
                    <div className="flex justify-center">
                        <img
                            src={article.thumbnail}
                            alt="article-img"
                            className="object-center object-cover h-full w-[50rem] rounded-l-md"
                        />
                    </div>
                    <pre className="mt-10 whitespace-pre-line">
                        <ReactMarkdown children={content} className="reactMarkDown break-words"
                            remarkPlugins={[remarkGfm, remarkBehead]} components={{
                                code({ node, inline, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || '')
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            children={String(children).replace(/\n$/, '')}
                                            style={oneDark}
                                            language={match[1]}
                                            PreTag="div"
                                            {...props}
                                        />
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    )
                                }
                            }} />
                    </pre>
                </>}
            </div>
            <div className="basis-3/12">
                <SideBar />
            </div>
        </div>
        <BottomBar />
    </>)
}

