# 🌲NENRIN

この WEB アプリはシニアユーザーと団体ユーザーを仕事を通じて結ぶプラットフォームです。シニアユーザーは自分のスキルを活かしてサービスを提供でき、団体ユーザーはシニアに対して求人掲載ができます。

## NENRIN_Django

最終課題 NENRIN 　バックエンドを django に変更

## ユーザータイプ

1.シニアユーザー（サービス提供者であるシニア）  
2.団体ユーザー（団体、企業、学校、地方自治体など）

## 機能一覧

【共通機能】  
・アカウント作成  
・登録済みアカウントでのログイン  
・プロフィール作成・編集  
・メッセージの送受信

【団体ユーザー向け機能】  
・シニアユーザーが掲載するサービスの検索  
・依頼  
・求人の登録・募集

【シニアユーザー向け機能】  
・団体ユーザーが掲載している求人の検索・応募  
・サービスの登録・掲載

## 使用技術

### フロントエンド

<div style="display: flex; gap: 10px;">
  <img src="https://img.shields.io/badge/-Typescript-007ACC.svg?logo=typescript&style=for-the-badge">
  <img src="https://img.shields.io/badge/-React-61DAFB.svg?logo=react&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge">
</div>

### バックエンド

<div style="display: flex; gap: 10px;">
  <img src="https://img.shields.io/badge/-Python-F2C63C.svg?logo=python&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Django-092E20.svg?logo=django&style=flat-square">
  <img src="https://img.shields.io/badge/-Postgresql-336791.svg?logo=postgresql&style=for-the-badge">
</div>

### インフラ

<div style="display: flex; gap: 10px;">
  <img src="https://img.shields.io/badge/-Docker-1488C6.svg?logo=docker&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Github-181717.svg?logo=github&style=for-the-badge">
</div>

## 環境構築

```bash
git clone https://github.com/kino0510/NENRIN.git
```

docker 立ち上げ

```bash
docker-compose up --build
```

Django 仮装環境構築

```bash
cd backend
python3 -m venv venv  # 仮想環境を作成
source venv/bin/activate  # 仮想環境を有効化
```

## マイグレーション・シーディング（コンテナ内）

Django コンテナに入る

```
docker exec -it <django-container-name> bash
```

プロジェクトルートに移動

```
cd /code
```

新しいマイグレーションファイルを作成

```
python manage.py makemigrations accounts
```

マイグレーションを適用してデータベースに反映

```
python manage.py migrate
```

適用済みのマイグレーションを確認

```
python manage.py showmigrations
```

スーパーユーザーを作成

```
python manage.py createsuperuser


Username (leave blank to use 'root'): kino
Email address: kawauchi.rec@gmail.com
Password: Kapple0510
Password (again): Kapple0510
Superuser created successfully. # 結果
```

スーパーユーザーが正常に作成されたかを確認

```
http://localhost:8000/admin/
```
