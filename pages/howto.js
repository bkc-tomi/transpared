import Layout from "../components/layout";

export default function HowTo() {

  return (
    <Layout>
      <main className="mt-8 w-full p-3 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center">使い方</h1>
        <div className="my-8 mx-3 sm:w-96">
            <h2 className="text-lg font-bold ">1. 文字を入力する。</h2>
            <img src="/howto1.png" alt="1" />
        </div>
        <div className="my-8 mx-3 sm:w-96">
            <h2 className="text-lg font-bold ">
                { `2. 隠したい部分を選択して　</>　ボタンを押す。` }
            </h2>
            <img src="/howto2.png" alt="1" />
        </div>
        <div className="my-8 mx-3 w-full sm:w-96">
            <h2 className="text-lg font-bold px-3 sm:p-0">3. 作成を押す。</h2>
        </div>
        <div className="my-8 mx-3 sm:w-96">
            <h2 className="text-lg font-bold ">4. 灰色の部分をホバーすると答えが見れるます。ブックマークやURLを保存しておくといつでもこのページをみることができます。</h2>
            <img src="/howto4.png" alt="1" />
        </div>
      </main>
    </Layout>
  )
}