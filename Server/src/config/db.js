const { PrismaClient } = require('@prisma/client');

const prisma=new PrismaClient();

const connectDB=async()=>{
    try {
        await prisma.$connect()
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Database not connected",error)
        process.exit(1)
    }
}

module.exports = { prisma, connectDB };