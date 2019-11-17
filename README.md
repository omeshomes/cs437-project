# Weather Wars: Harvard v. Yale

## To run backend

First populate the database:
```
pipenv install
pipenv run python -m server.populate_db
```

Then run the server:
```
export FLASK_APP=server/app.py
pipenv run python -m flask run
``` 