# EXPRESS
#### npm install express --save
### Common Methods
app.get
app.post
app.put
app.delete
app.all
app.use
app.listen

### API (Application Programming Interface) vs SSR (Server Side Rendering)
1. API - JSON
2. SEND DATA
3. RES.JSON()
1. SSR - TEMPLATE
2. SEND TEMPLATE
3. RES.RENDER()
## Middleware 
It is the heart and soul of middleware
#### req => middleware => res
1. use vs route
2. options - our own / express / third party
## HTTP METHODS
### GET
Read Data
www.store.com/api/orders   get all orders
www.store.com/api/orders/:id  get single order (path params)
### POST
Insert Data
www.store.com/api/orders  place an order (send data)
### PUT
Update Data
www.store.com/api/orders/:id  update specfic order (params + send data)
### Delete
Delete data
www.store.com/api/orders/:id   delete order (path params)
