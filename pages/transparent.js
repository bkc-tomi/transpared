import { useRouter } from 'next/router';
import Layout from "../components/layout";
import ReactMarkdown from "react-markdown";
import 'github-markdown-css';
import gfm from 'remark-gfm';

export default function Transparent() {
    const router = useRouter();

    return (
        <Layout>
            <main 
                className="markdown-body m-3 question"
            >
                <ReactMarkdown 
                    className="dark:text-white"
                    plugins={[gfm]} 
                    source={ router.query.md }
                />
            </main>
        </Layout>
    )
}