# MovieRentalSystem
CSC445 Movie Rental System

---
# Front End File Structure

---

##  `public/`

- **`index.html`** – Main HTML file where React mounts the app.

---

##  `src/` – Main Application Logic

###  `assets/`
Static files like images, icons, logos.

###  `components/`
Reusable UI components shared across the app.
> e.g., `Button.tsx`, `Navbar.tsx`, `Input.tsx`.

###  `pages/`
Top-level routes/pages.
- `Home.tsx` – Main catalog.
- `Login.tsx` – Login form.
- `Register.tsx` – User sign-up.
- `MovieDetails.tsx` – Movie information page.
- `Checkout.tsx` – Rental and payment.
- `AdminDashboard.tsx` – Admin interface.
- `NotFound.tsx` – 404 page.

###  `hooks/`
Custom React Hooks.
- `useAuth.ts`, `useMovies.ts`, etc.

###  `services/`
API communication using Axios.
- `AuthService.ts`
- `MovieService.ts`
- `RentalService.ts`

###  `contexts/`
React Context Providers for global state.
- `AuthContext.tsx` – Stores auth/session info.

###  `utils/`
Utility functions and constants.
- `formatDate.ts`, `validateEmail.ts`, etc.

###  `types/`
Shared TypeScript interfaces and types.
- `User.ts`, `Movie.ts`, `Rental.ts`, `Payment.ts`

###  `routes/`
Route declarations and protected routes.
- `AppRoutes.tsx`
- `PrivateRoute.tsx`

---

##  Key Files

- **`App.tsx`** – App root component.
- **`main.tsx`** – React entry point (renders `<App />`).
- **`index.css` / `App.css`** – Global styles (Tailwind or custom).

---

##  Config Files

- **`tailwind.config.ts`** – TailwindCSS configuration.
- **`tsconfig.json`** – TypeScript compiler settings.
- **`vite.config.ts`** – Vite development/build settings.
- **`package.json`** – Project dependencies and scripts.

---

##  Development Notes

- Run `npm install` before starting development.
- Start the local server using `npm run dev`.
- All API calls are abstracted inside the `services/` folder.
- Global CSS/Tailwind directives go in `index.css`.

---
# Backend Code Structure


---

### `src/main/java/com/movierental/`
Main Java source code.

#### `controllers/`
Houses REST API controllers. Handles client requests and sends responses.

- `AuthController.java` – User login, registration, token handling
- `MovieController.java` – Fetch, add, update, or delete movie entries
- `RentalController.java` – Rent, return, and list rental history

#### `services/`
Contains business logic. Used by controllers to handle core functionality.

- `AuthService.java` – Authentication, password hashing, JWT creation
- `MovieService.java` – Movie logic and database interaction
- `RentalService.java` – Manages rental records, due dates, validations

#### `models/`
Entity classes mapped to database tables.

- `User.java` – User entity with fields like ID, email, password
- `Movie.java` – Movie entity with title, genre, availability
- `Rental.java` – Rental entity linking user + movie with due dates
- `Payment.java` – Optional class for handling payment metadata

#### `repositories/`
Spring Data JPA repositories for database CRUD.

- `UserRepository.java` – Interface for querying `User` table
- `MovieRepository.java` – Interface for `Movie` table
- `RentalRepository.java` – Interface for `Rental` table

#### `config/`
Contains security and application-specific config.

- `SecurityConfig.java` – JWT-based Spring Security configuration

---

### `src/main/resources/`
Resource and configuration files.

- `application.properties` – Database URL, JWT secrets, port settings
- `schema.sql` / `data.sql` – Optional: Auto-create tables and seed demo data

---

## 🧱 Key Concepts

- Uses **Spring Boot** for fast REST API setup
- All entities are connected via **JPA annotations**
- JWT authentication is handled using **Spring Security**
- Follows **MVC structure** (Models → Services → Controllers)

---

## ⚙️ Developer Setup

1. **Install Java 17+**
2. **Install Maven**
3. Clone the repo and run:
   ```bash
   mvn clean install
   mvn spring-boot:run

