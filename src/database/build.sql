BEGIN;

DROP TABLE IF EXISTS users, posts, comments CASCADE;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

 CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    post_body TEXT,
    user_id INTEGER REFERENCES users(user_id)
);

CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY,
  comment_body TEXT NOT NULL,
  user_id INTEGER REFERENCES users(user_id),
  post_id INTEGER REFERENCES posts(post_id)
);

COMMIT;