# Migration `20201129231526-create-user`

This migration has been generated at 11/29/2020, 8:15:26 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "User" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "bornDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201129231526-create-user
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,22 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id        Int     @id @default(autoincrement())
+  name      String
+  email     String  @unique
+  password  String
+  bornDate  DateTime
+  createdAt DateTime  @default(dbgenerated())
+  updatedAt DateTime? @default(dbgenerated())
+  deletedAt DateTime?
+}
```


