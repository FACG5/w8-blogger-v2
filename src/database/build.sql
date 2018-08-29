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
    user_id INTEGER REFERENCES users(user_id)
);

INSERT INTO posts (post_body, user_id) VALUES
('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptates neque autem vel, perspiciatis ipsa vitae placeat eos sint quae doloremque nulla ut id dolore quo architecto expedita? Quisquam, quaerat.1',1),
('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptates neque autem vel, perspiciatis ipsa vitae placeat eos sint quae doloremque nulla ut id dolore quo architecto expedita? Quisquam, quaerat.2',1);

CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY,
  comment_body TEXT NOT NULL,
  user_id INTEGER REFERENCES users(user_id),
  post_id INTEGER REFERENCES posts(post_id)
);

INSERT INTO comments(comment_body,user_id, post_id) VALUES
('this is comment from user1 to post1 1',1,1);
INSERT INTO comments(comment_body,user_id, post_id) VALUES
('this is comment from user1 to post1 2',1,1);
INSERT INTO comments(comment_body,user_id, post_id) VALUES
('this is comment from user1 to post1 3',1,1);


COMMIT;