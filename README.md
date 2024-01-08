# How to Use Pemilu Backend with Postman

## How to Use Authorization

1. Open Postman.
2. Click on the 'Authorization' tab.
3. Choose 'Bearer Token' on the left.
4. Insert the Token on the right.

## A. User

1. Register User

- **URL:** http://localhost:5000/data/auth/register
- **Method:** POST
- **JSON Body Example:**

  ```json
  {
    "fullName": "Bambang Kopling",
    "alamat": "Banyuwangi",
    "jenisKelamin": "Laki-Laki",
    "username": "bambang",
    "password": "12345678"
  }

## 2. Login

- **URL:** http://localhost:5000/data/auth/login
- **Method:** POST
- **JSON Body Example:**

```json
{
    "username": "bambang",
    "password": "12345678"
}
```
Note: you will received token which is used to authorization

## B. Article

1. Getting All Articles

- **URL:** http://localhost:5000/data/artikel
- **Method:** GET

2. Getting a Specific Article

- **URL:** http://localhost:5000/data/artikel/:id
- **Method:** GET

3. Create an Article (Authorization Required)

- **URL:** http://localhost:5000/data/artikel
- **Method:** POST
- **Form-data Body Example:**
 ```
    title                   = JKT48 ikut meramaikan pemilu
    article                 = Di suatu hari tanpa sengaja kita bertemu
    imageArticle            = qqqqq.jpg    (file)
    date                    = 2022-01-01T12:34:56.789Z
```
4. Update an Article (Authorization Required)

- **URL:** http://localhost:5000/data/artikel/:id
- **Method:** PATCH
- **Form-data Body Example:**
```
    title                   = JKT48 ikut meramaikan pemilu
    article                 = Di suatu hari tanpa sengaja kita bertemu
    imageArticle            = qqqqq.jpg    (file)
    date                    = 2022-01-01T12:34:56.789Z
```
5. Delete an Article (Authorization Required)

- **URL:** http://localhost:5000/data/artikel/:id
- **Method:** DELETE

# C. Voter

1. Getting All Votes (Authorization Required)

- **URL:** http://localhost:5000/data/votes
- **Method:** GET

2. Voting (Authorization Required)

- **URL:** http://localhost:5000/data/vote
- **Method:** POST
- **JSON Body Example:**

```json
{
    "no": 2
}
```
# D. Paslon

1. Getting All Paslons (No Authorization)

- **URL:** http://localhost:5000/data/paslon
- **Method:** GET

2. Getting a Specific Paslon (No Authorization)

- **URL:** http://localhost:5000/data/paslon:id
- **Method:** GET

3. Create a Paslon (Authorization Required)

- **URL:** http://localhost:5000/data/paslon
- **Method:** POST
- **Form-data Body Example:**
```
   name             = Kawaki
   noUrut           = 1
   visiMisi         = Mengusir otsusuki dari dunia shinobi
   imagePaslon      = Kawaki.png (file)
```
4. Update a Paslon (Authorization Required)

- **URL:** http://localhost:5000/data/paslon/:id
- **Method:** PATCH
- **Form-data Body Example:**
```
    name             = Kawaki Otsusuki
    noUrut           = update 1
    visiMIsi         = membunuh boruto
    picture          = KawakiGaul.png (file)
```
5. Delete a Paslon (Authorization Required)

- **URL:** http://localhost:5000/data/paslon/:id
- **Method:** DELETE

# E. Partai

1. Getting All Partais (No Authorization)

- **URL:** http://localhost:5000/data/partai
- **Method:** GET

2. Getting a Specific Partai (No Authorization)

- **URL:** http://localhost:5000/data/partai/:id
- **Method:** GET

3. Create a Partai (Authorization Required)

- **URL:** http://localhost:5000/data/partai
- **Method:** POST
- **Form-data Body Example:**
```
    name             = Partai Wibu Indonesia
    ketuaUmum        = Agus
    visiMisi         = Meningkatkan kualitas wibu di indonesia
    alamat           = Wonogiri
    imagePartai      = qwerty.jpg (file)
    paslon           = 1 (paslonId)
```
4. Update a Partai (Authorization Required)

- **URL:** http://localhost:5000/data/partai/:id
- **Method:** PATCH
- **Form-data Body Example:**
```
    name             = Partai Wibu Indonesia V2.0
    ketuaUmum        = Agus V2.0
    visiMisi         = Meningkatkan kualitas wibu di indonesia V2.0
    alamat           = Wonogiri V2.0
    imagePartai      = qwe.jpg (file)
    paslon           = 2 (paslonId) 
```
5. Delete a Partai (Authorization Required)

- **URL:** http://localhost:5000/data/partai/:id
- **Method:** DELETE
