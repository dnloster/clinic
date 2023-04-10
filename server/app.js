const express = require("express");
const sql = require("mssql");
const app = express();

const dbConfig = {
    server: "DESKTOP-M4LBS8F/MSSQLSERVER01",
    database: "QuanLyPhongKham_HuyenNEU",
    options: {
        trustedConnection: true,
    },
};

app.get("/doctors", async (req, res) => {
    try {
        await sql.connect(dbConfig);
        const result = await sql.query("SELECT * FROM Doctor");
        res.send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send(`Internal Server Error: ${err.message}`);
    } finally {
        sql.close();
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
