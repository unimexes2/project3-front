# FIND A FRIEND

<br>

## Description

It is an app created for the administration of animal shelters and to be able to offer people their animals for adoption.
The application effectively allows the contact of the person interested in adopting a pet with the institution after having observed the animals to be adopted in a catalog. The app admin can perform all CRUD actions on Animals, Contacts, Maps, Stories, Location and Donations.

#### Routes

# Client / Frontend

## React Router Routes (React App)

      <Route exact path="/add"                               ---> ADD ANIMAL (CAT OR DOG) TO THE DATABASE

      <Route exact path="/"                                  --->HOME PAGE

      <Route exact path="/addmap"                            ---> ADD MAPS
      <Route exact path="/map"                               ---> LIST MAPS

      <Route exact path="/stories"                           ---> LIST ALL STORIES
      <Route exact path="/addstories"                        ---> ADD NEW STORY

      <Route exact path="/addonation"                        ---> ADD DONATION TO THE SHELTER
      <Route exact path="/donate"                            ---> DONATION PAGE

      <Route exact path="/settings"                          ---> SETTINGS

      <Route exact path="/cats"                              ---> LIST ALL CATS IN DB
      <Route exact path="/cat/:catId"                        ---> RETRIEVES A SPECIFIC CAT BY ID
      <Route exact path="/cats/edit/:catId"                  ---> EDIT CAT INFO

      <Route exact path="/dogs"                              ---> LIST ALL DOGS
      <Route exact path="/dog/:dogId"                        ---> RETRIEVES A SPECIFIC DOG BY ID
      <Route path="/dogs/edit/:dogId"                        ---> EDIT DOG INFO

      <Route exact path="/contacts"                          ---> LIST ALL CONTACT
      <Route exact path="/addcontact"                        ---> ADD NEW CONTACT
      <Route exact path="/contacts/:contactId"               ---> RETRIEVES A SPECIFIC CONTACT BY ID
      <Route path="/contacts/edit/:contactId"                ---> EDIT CONTACT INFO

      <Routeexact path="/dogadopted"                         ---> SAVE ANIMALS IN A DATABASE AS ADOPTED ANIMALS
      <Routeexact path="/catadopted"                         ---> SAVE ANIMALS IN A DATABASE AS ADOPTED ANIMALS

      <Route exact path="/signup"	                         ---> CREATE NEW ADMIN
      <Route exact path="/login"	                         ---> LOGIN ADMIN

## Components

- LoginPage

- SignupPage

- NavBar

- Map

- ElementList

- SearchForm

- SearchFilters

- ElementInfo

- ElementDetails

- ElementEdits

<br>

##### Server / Backend

GET /api
POST /api/auth/signup
POST /api/auth/login
GET /api/auth/verify
GET /api/auth/verify
POST /adddog
POST /addcat
POST /addstory
POST /adddonation
POST /addmap
POST /settings
POST /addcontact
DELETE /cats/:catId
DELETE /dogs/:dogId
DELETE /stories/:storieId
DELETE /contacts/:contactId
GET /dogs/:dogId
GET /cats/:catId
GET /contacts/:contactId
PUT /dogs/:dogId
PUT /cats/:catId
PUT /contacts/:contactId
POST /upload
POST /upload
GET /contacts
GET /donations
GET /dogs
GET /cats
GET /map
GET /stories

<br>

#### Models

##### Admin Model

```js
{
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  dogsadded: [{ type: Schema.Types.ObjectId, ref: "Dog" }],
  catsadded: [{ type: Schema.Types.ObjectId, ref: "Cat" }]
}
```

##### Cat Model

```js
{
  name: String,
  breed: String,
  age: Number,
  weight: String,
  profilePicture: String,
  pictures: [],
  description: String,
  admitionDate: String,
  views: Number,
  isAdopted:Boolean,
  sex:String,
  adminID: [{ type: Schema.Types.ObjectId, ref: "Admin" }],
  contactPerson: [{ type: Schema.Types.ObjectId, ref: "Contact" }],
}
```

##### Contact Model

```js
{
  firstName: String,
  lastName: String,
  email:String,
  phone: Number,
  foto:[String]
}
```

##### Dog Model

```js
{
  name: String,
  breed: String,
  age: Number,
  weight: String,
  profilePicture: String,
  pictures: [String],
  description: String,
  admitionDate: String,
  views: Number,
  isAdopted:Boolean,
  sex:String,
  adminID: [{ type: Schema.Types.ObjectId, ref: "Admin" }],
  contactPerson: [{ type: Schema.Types.ObjectId, ref: "Contact" }]
}
```

##### Donation Model

```js
{
    bankName: String,
    account: String,
    paypal: String,
    bizum: String,

}
```

##### Map Model

```js
{
  mapCode: String,
  description: String,

}
```

##### Site Model

```js
{
  logo: String,
  navbarlogo: String,
  devise: String,
  carusel:String

}
```

##### Stories Model

```js
{
  header: String,
  description: String,
  pictures: [],
}
```

<hr>

## Links

### Git

The url to your repository and to your deployed project

[Client repository Link - Front - AN](https://github.com/unimexes2/project3-front)
[Client repository Link - Front - SL](https://github.com/sebalaca?tab=repositories)

[Server repository Link - Back - AN](https://github.com/unimexes2/project3-back)
[Server repository Link - Back - SL](https://github.com/sebalaca/project3-back)

[Deployed App Link](https://protectorapalafols.herokuapp.com)

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1C1nFHn_p-jDXPgdZyAHWCLcYkMdlJ6lIdLGIn0uQZrs/edit?usp=sharing)
