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