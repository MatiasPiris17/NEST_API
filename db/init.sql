SELECT 'CREATE DATABASE api_nest'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'api_nest')\gexec