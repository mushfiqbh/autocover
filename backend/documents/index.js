module.exports = (data) => {
  return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
            *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            }
            
            body, html {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            font-family: "Geist Sans", serif;
            }

            .page {
            color: #1A1A1A;
            background-color: #fff;
            font-size: 12px;
            padding-top: 6rem;
            text-align: center;
            }

            .section {
            margin: 80px 0;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 5px;
            }

            table {
            width: 100%;
            margin-bottom: 100px;
            border-collapse: separate;
            border-spacing: 0 10px;
            }

            tr {
              width: 100%;
            }

            td:first-child {
              width: 40%;
              font-weight: bold;
              text-align: right;
            }

            td:nth-child(2) {
              width: 60%;
              text-align: left;
              padding-left: 1.5rem;
              padding-right: 10rem;
            }

            .heading {
            text-align: center;
            font-weight: bold;
            font-size: 16px;
            }

            .image {
            width: 160px;
            height: 160px;
            }
          </style>
       </head>
       <body>
  <div class="page">
    <div class="section">
      <img class="image" src="https://i.ibb.co.com/cYMTmCT/Leading-University-Logo.png" alt="Leading University Logo">
      <p style="font-size: 1rem; margin-top: 10px;">Leading University</p>
      <p style="font-size: 0.8rem;">${data.student.dept}</p>
    </div>

    <table>
      <tr>
        <td>Course Code</td>
        <td>${data.course.code}</td>
      </tr>
      <tr>
        <td>Course Title</td>
        <td>${data.course.title}</td>
      </tr>
      <tr>
        <td>Assignment Title</td>
        <td>${data.title}</td>
      </tr>
    </table>

    <p class="heading">Submitted To</p>

    <table>
      <tr>
        <td>Name</td>
        <td>${data.teacher.name}</td>
      </tr>
      <tr>
        <td>Designation</td>
        <td>${data.teacher.designation}</td>
      </tr>
      <tr>
        <td>Faculty</td>
        <td>${data.teacher.faculty}</td>
      </tr>
    </table>

    <p class="heading">Submitted By</p>

    <table style="margin-bottom: 40px;">
      <tr>
        <td>Name</td>
        <td>${data.student.name}</td>
      </tr>
      <tr>
        <td>Batch</td>
        <td>${data.student.batch}</td>
      </tr>
      <tr>
        <td>Section</td>
        <td>${data.student.section}</td>
      </tr>
      <tr>
        <td>ID</td>
        <td>${data.student.id}</td>
      </tr>
    </table>

    <p class="heading">
      Submission Date: ${new Date(data.date)
        .toISOString()
        .split("T")[0]
        .replace(/\//g, "-")}
    </p>
  </div>
</body>
    </html>
    `;
};
