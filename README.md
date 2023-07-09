### Next.jsのテスト用

- ビルドツールは?
    - なんか現状遅い
    - viteは使える?
    - webpackの後継のturbopackというのがあるみたい

**nextプロジェクトの作成**
```
    npx create-next-app@latest --ts <プロジェクト名>
```

**ルーティング**
```
    function Sample() {
        return <span>サンプルのページです</span>
    }

    // ページコンポーネントはexport defaultする
    export default Sample
```

**Storybook**

- storybookの導入
```
    npx sb@latest init
```

- storybookの起動
    - 現状docker composeでnextの開発サーバーとstorybookを同時に起動出来てない (バックグラウンドでどっちかを起動出来てない)
```
    npm run storybook
```

**styled-componentsの導入**
- インストール
```
    npm install --save styled-components
    npm install --save-dev @types/styled-components
```

- next.config.jsファイルの編集

**styles**
- cssファイルからスタイルを取ってこれる
```
    import styles from '../styles/Home.module.css'

    const Home: NextPage = () => {
        return (
            <div className={styles.container}>
                <main className={styles.main}>
                    aa
                </main>
            </div>
        )
    }
```

### メモ