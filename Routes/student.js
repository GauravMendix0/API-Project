/**
 * @swagger
 * /:
 *   get:
 *     summary: Get a single student by roll number
 *     tags: [Student]
 *     parameters:
 *       - in: query
 *         name: studentRoll
 *         schema:
 *           type: integer
 *         required: true
 *         description: Roll number of the student to fetch
 *     responses:
 *       200:
 *         description: Student data retrieved successfully
 *       404:
 *         description: Student not found
 */
route.get("/", handleGet);

/**
 * @swagger
 * /getall:
 *   get:
 *     summary: Get all student records
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: List of all students
 *       500:
 *         description: Server error
 */
route.get("/getall", handlegetall);

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Create a new student
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - studentName
 *               - studentRoll
 *             properties:
 *               studentName:
 *                 type: string
 *               studentRoll:
 *                 type: integer
 *               studentAge:
 *                 type: integer
 *               studentBranch:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student created successfully
 *       400:
 *         description: Error occurred
 */
route.post("/create", handleCreate);

/**
 * @swagger
 * /update:
 *   patch:
 *     summary: Update student name by roll number
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - studentRoll
 *               - studentName
 *             properties:
 *               studentRoll:
 *                 type: integer
 *               studentName:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       400:
 *         description: Error updating student
 */
route.patch("/update", handleUpdate);

/**
 * @swagger
 * /updateall:
 *   put:
 *     summary: Fully update a student's record
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - studentRoll
 *               - studentName
 *               - studentAge
 *               - studentBranch
 *             properties:
 *               studentRoll:
 *                 type: integer
 *               studentName:
 *                 type: string
 *               studentAge:
 *                 type: integer
 *               studentBranch:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student fully updated
 *       400:
 *         description: Error updating student
 */
route.put("/updateall", handleUpdateAll);

/**
 * @swagger
 * /delete:
 *   delete:
 *     summary: Delete a student by roll number
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - studentRoll
 *             properties:
 *               studentRoll:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Student deleted
 *       400:
 *         description: Error deleting student
 */
route.delete("/delete", handleDelete);