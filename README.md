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

**atomic design**
- `Atoms`: Use a descriptive name for the atom component, such as "Button.tsx" or "Icon.tsx".
- `Molecules`: Combine two or more atoms, and name the file accordingly, like "LoginForm.tsx" or "ProductCard.tsx".
- `Organisms`: Combine multiple molecules or atoms to create more complex components. Name the file to describe the organism's purpose, such as "Header.tsx" or "ProductList.tsx".
- `Templates`: These are higher-level components that provide layout structures for specific pages or sections. You can name them based on their purpose, like "HomePage.tsx" or "BlogPostTemplate.tsx".
- `Pages`: These components represent actual pages in your application and are responsible for fetching data and passing it down to the templates and organisms. Name them based on the page they represent, such as "Index.tsx" or "About.tsx".

### 参考
- styled-components
https://tekrog.com/styled-components