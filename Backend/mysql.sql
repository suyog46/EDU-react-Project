suyoglms@gmail.com
Lamsal@123


CREATE TABLE user( uid int AUTO_INCREMENT PRIMARY key, username varchar(250), email varchar(250), password varchar(250) );



CREATE TABLE courses( cid int PRIMARY KEY NOT null, title varchar(50), description varchar(500), price int, image varchar(50), overview varchar(50), duration int, courselevel varchar(50), language varchar(50), aboutyourself varchar(500), detaildescription varchar(500), targetaudience varchar(500), category varchar(50) );
CREATE TABLE student_course (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (course_id) REFERENCES Course(course_id)
);