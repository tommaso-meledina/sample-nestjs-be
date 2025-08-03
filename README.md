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

Next up:

| Feature                        | Description                                                                                     |
|--------------------------------|-------------------------------------------------------------------------------------------------|
| Role-based Access Control (RBAC) | Integrate guards and decorators to enforce role-based permissions (`@Roles`, `@UseGuards`)    |
| JWT Authentication             | Add authentication using `@nestjs/jwt` to secure your endpoints with access/refresh tokens      |
| Multi-tenancy Support          | Structure your app to support multiple tenants (e.g. by schema, column-based, or DB strategy)   |
| Request Tracing (Distributed)  | Integrate OpenTelemetry exporters with Jaeger/Zipkin for cross-service trace visualization      |
| Structured Logging             | Use `pino`, `winston`, or `nestjs-pino` for structured JSON logs with context-aware logging     |
| Rate Limiting                  | Add rate limiting using `@nestjs/throttler` to protect endpoints from abuse                     |
| Global Exception Handling      | Use a global exception filter to catch and format all errors in a uniform way                   |
| Graceful Shutdown Hooks        | Implement `onModuleDestroy` / `onApplicationShutdown` for cleanup on termination                |
| Multi-Environment Configs      | Use `.env.development`, `.env.production`, etc. with dynamic config loading via `ConfigService` |
| Caching Layer                  | Integrate `@nestjs/cache-manager` with Redis/memory for performance-critical endpoints          |
| Event-based Architecture       | Use `EventEmitterModule` or message brokers like Kafka/RabbitMQ via `@nestjs/microservices`     |
| CQRS Pattern                   | Introduce Command/Query Separation using `@nestjs/cqrs` for large-scale domain separation       |
| Soft Deletes & Audit Trail     | Add `@DeleteDateColumn` and audit log entities for regulatory traceability                      |
| Background Jobs                | Use `Bull` or `Agenda` for job queues and background processing (e.g. email sending, retries)   |
| WebSocket Support              | Real-time updates via WebSockets using `@nestjs/websockets`                                     |
| GraphQL API                    | Add a GraphQL API alongside your REST API using `@nestjs/graphql`                               |
| API Versioning                 | Support multiple API versions (e.g. `/v1/greetings`, `/v2/greetings`) with Nest’s versioning    |
| Feature Flags                  | Implement runtime toggles for A/B testing and gradual rollouts (e.g. `Unleash`, `LaunchDarkly`) |
| Secrets Management             | Use Vault, AWS Secrets Manager, or SOPS instead of plaintext `.env` files                       |
| Sentry Integration             | Real-time error monitoring and alerting using Sentry or similar platforms                       |
| Dependency Injection Scopes    | Use request-scoped providers for user-specific or request-lifecycle-bound logic                 |
