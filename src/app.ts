import express, { Request, Response, NextFunction }from 'express'
import todoRoutes from './routes/todos'
import exp from 'constants'

const app = express()

app.use('/todos', todoRoutes)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({messasge: error.message})
})

app.listen(3011, () => {
    console.log('Server is running on http://localhost:3011')
})