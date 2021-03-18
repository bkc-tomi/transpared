import Head from "next/head";
import Header from "./header";

export default function Layout({ children }) {

    return (
        <div className="dark:bg-gray-900 dark:text-gray-100">
            <Head>
                <title>transpared</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@bkc30002594" />
                <meta property="og:url" content="https://transpared.vercel.app/" />
                <meta property="og:title" content="transpared" />
                <meta property="og:description" content="学生のころに使っていた赤シートのように、マークダウンを使って覚えたい単語などを隠したり表示したりできるサービスです。マークダウンを知らなくても使い方とこちらが用意したエディタを使えば簡単に作れます。" />
                <meta property="og:image" content="/icon.svg" />
            </Head>
            <Header />
            <div className="h-16"></div>
            { children }
        </div>
    );
}