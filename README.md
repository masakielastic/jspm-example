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

```
jspm bundle lib/main --inject --minify
```