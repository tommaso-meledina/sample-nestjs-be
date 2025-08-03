# Sample NestJS BE

This project demonstrates a number of NestJS features:

| Feature                        | Description                                                                    |
|--------------------------------|--------------------------------------------------------------------------------|
| Entity + UUID Base Class       | `Dummy` entity extends a base class with auto-increment ID and UUID column     |
| CRUD API                       | RESTful endpoints auto-generated via `@Controller` and `@Service`              |
| Swagger UI                     | OpenAPI documentation available at `/base-path/api`                            |
| Unit Tests                     | Unit tests implemented for custom controller logic                             |
| Logging Interceptor            | Logs arguments, return values, and execution time for targeted methods         |
| Metrics Endpoint               | Prometheus-compatible `/metrics` endpoint with default system metrics          |
| Custom Metric                  | Manual counter for tracking function invocations                               |
| Health Check Endpoint          | Readiness & health check endpoints via `@nestjs/terminus` @ `/health`          |
| Base Path                      | Application routes prefixed with `/base-path`                                  |
| Dynamic DB Config              | DB type and credentials read from environment variables                        |
| Database Naming Strategy       | Tables in UPPER_SNAKE_CASE, columns in lower_snake_case via custom strategy    |
| Dockerization                  | Minimal `Dockerfile` created to containerize the app                           |
