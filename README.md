jspm の例
=========

セットアップ
----------

```
git clone https://github.com/masakielastic/jspm-example.git
cd jspm-example
jspm update
```

プロダクションコードの生成
----------------------

次のコマンドを実行すると、build.js が生成され、config.js が更新されます。

```
jspm bundle lib/main --inject --minify
```

SystemJS と jspm から独立したコードを生成するには次のコマンドを実行します。

```
jspm bundle-sfx lib/main app.js
```