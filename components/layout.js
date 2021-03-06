import Head from "next/head";
import Header from "./header";

export default function Layout({ children }) {

    return (
        <div className="dark:bg-gray-900 dark:text-gray-100">
            <Head>
                <title>transpared</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="My new title" key="title" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <div className="h-16"></div>
            { children }
        </div>
    );
}