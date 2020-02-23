# *** Self Study Auth Sprint *** 

- What is the purpose of using sessions?
  -The purpose of using sessions is so the user/client does not have to actively pass in their credentials every time they navigate to an endpoint that requires authorization or authentication. It allows them to exchange their auth info once and that activates a session that is active for a defined amount of time where the server will recognize that they are allowed to access certain data.

- What does bcrypt do to help us store passwords in a secure manner.
  - Bcyrpt has very useful hashing feature where the user that takes the inputted password from the user and encrypts it many times over. Each hashed password is unique to that individual user so even if two users have the same password, the hashed versions will be different. This way no unencrypted password data is stored anywhere in the database. 

- What does bcrypt do to slow down attackers?
  - When it hases passwords it doesn't only do it one time. The developer can set the amount of times that the password is hashed when setting up the configuration. This means that the password is hashed many, many times (often tens of thousands or more) and it would take an attacker a very long time to get through the different versions of the password. The final hash is not a hashed version of the original password, it's a hash of another hash that's been encrypted many times.

- What are the three parts of the JSON Web Token?
  - The three parts of a jwt are the header (token type and algorithm), payload (token data), and signature.
