from datetime import datetime
import uuid

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()
runs = {}

@app.get("/counting")
async def root():
    return [
        {**value.dict(), "id": key} for key, value in runs.items()
    ]


class CountingParameters(BaseModel):
    directory: str
    createTime: datetime = None
    endTime: datetime = None

@app.post("/counting")
async def create_item(params: CountingParameters):
    # create a random id, the client can use this to get
    # more details of the run later
    id = uuid.uuid4().hex
    # we add the timestamp
    params.createTime = datetime.now()
    # store in db
    runs[id] = params
    return params

@app.options("/counting")
async def create_item():
    return
