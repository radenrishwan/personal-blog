import axios from "axios";
import Article from "../model/article.mjs";

const endpoint = process.env.REACT_APP_SOURCE_ENDPOINT + "/articles"

export default class ArticleRepository {
    async findAll(limit, startAt = null, endAt = null) {
        const articles = []
        if (startAt == null && endAt == null) {
            const response = await axios.get(endpoint, {
                params: {
                    limit: limit
                }
            })

            const data = response.data.data

            if (data == null) {
                return []
            }

            data.forEach(article => {
                const dummy = new Article(article.id, article.thumbnail, article.title, article.description, article.content, article.author, article.category, article.created_at)
                articles.push(dummy)
            })

            return articles
        } else {
            const response = await axios.get(endpoint, {
                params: {
                    limit: limit,
                    startAt: startAt,
                    endAt: endAt
                }
            })

            const data = response.data.data

            data.forEach(article => {
                const dummy = new Article(article.id, article.thumbnail, article.title, article.description, article.content, article.author, article.category, article.created_at)
                articles.push(dummy)
            })

            return articles
        }
    }

    async findByTitle(title, limit, startAt = null, endAt = null) {
        const articles = []
        if (startAt == null && endAt == null) {
            const response = await axios.get(endpoint, {
                params: {
                    limit: limit,
                    q: title
                }
            })

            const data = response.data.data

            if (data == null) {
                return []
            }

            data.forEach(article => {
                const dummy = new Article(article.id, article.thumbnail, article.title, article.description, article.content, article.author, article.category, article.created_at)
                articles.push(dummy)
            })

            return articles
        } else {
            const response = await axios.get(endpoint, {
                params: {
                    limit: limit,
                    q: title,
                    startAt: startAt,
                    endAt: endAt
                }
            })

            const data = response.data.data

            if (data == null) {
                return []
            }

            data.forEach(article => {
                const dummy = new Article(article.id, article.thumbnail, article.title, article.description, article.content, article.author, article.category, article.created_at)
                articles.push(dummy)
            })

            return articles
        }
    }

    async findById(id) {
        const response = await axios.get(endpoint + "/" + id)

        const data = response.data.data

        return new Article(data.id, data.thumbnail, data.title, data.description, data.content, data.author, data.category, data.created_at)
    }
}