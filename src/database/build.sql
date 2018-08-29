BEGIN;

DROP TABLE IF EXISTS users, posts, comments CASCADE;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    password VARCHAR(100)
);

INSERT INTO users (name,email,password) VALUES
('asala','asalamatarya@gmail.com','asala@123');

 CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    post_body TEXT,
    poster_id INTEGER REFERENCES users(user_id)
);

INSERT INTO posts (post_body, poster_id) VALUES
('helllllllllllllo',1);

CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY,
  comment_body TEXT NOT NULL,
  commenter_id INTEGER REFERENCES users(user_id),
  post_id INTEGER REFERENCES posts(post_id)
);

INSERT INTO comments(comment_body,commenter_id, post_id) VALUES
('this is comment ',1,1);

COMMIT;