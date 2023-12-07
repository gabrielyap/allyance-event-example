/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        host: 'localhost',
        port: 3306,
        user: 'root', // Password comes after this but i just like blank ''
        database: 'nikeshoes',
    }

}

module.exports = nextConfig
