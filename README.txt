1. Register User   POST  http://localhost:3030/users
{
	"username": "sam",
	"email": "sam@gmail.com",
	"password": "sam"
}

2. Login           POST http://localhost:3030/authentication
{
	"strategy": "local",
	"email": "sam@gmail.com",
	"password": "sam"
}
    return a token

3. POST ITEM       GET http://localhost:3030/bids
{
	"product_name": "audi",
	"current_price": "25000",
	"start_time": "2018-12-19T18:00:00.000Z",
	"end_time": "2018-12-19T18:30:00.000Z",
	 "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1YzBkODE5ZTY5MGU1YTZiYTBiNDAzMWUiLCJpYXQiOjE1NDQ0MDY5NDQsImV4cCI6MTU0NDQ5MzM0NCwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiMmViZmViNTUtYTRmMi00ZjMwLTgzM2UtM2UxOGExNTQzMDUyIn0.mwFyraYrgSnj_OHZDThJul8Gfybaeg5IMeoVDPtnFic"
}


4. bidding        Patch http://localhost:3030/postitems/: itemid
{ header: Authorization  token }
{
	"current_price": 35000
}



5. delete item    DELTE http://localhost:3030/postitems/: itemid
{ header: Authorization  token }


6. 




