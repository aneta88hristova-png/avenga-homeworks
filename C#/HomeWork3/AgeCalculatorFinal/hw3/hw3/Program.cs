using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// DIN AGECALCULATOR METOD!
int AgeCalculator(DateTime birthday)
{
    int age = DateTime.Today.Year - birthday.Year;
    if (birthday > DateTime.Today.AddYears(-age)) age--;
    return age;
}

app.MapPost("/calculate", async (HttpContext context) =>
{
    var form = context.Request.Form;
    if (form.ContainsKey("birthday"))
    {
        string birthdayStr = form["birthday"];
        if (DateTime.TryParseExact(birthdayStr, "yyyy-MM-dd", null, System.Globalization.DateTimeStyles.None, out DateTime birthday))
        {
            // ANROPA DIN AGECALCULATOR METOD!
            int age = AgeCalculator(birthday);

            await context.Response.WriteAsync($@"
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Age Calculator</title>
                    <link rel='stylesheet' href='/style.css'>
                </head>
                <body>
                    <div class='box'>
                        <h1>Age Calculator</h1>
                        <div style='font-size: 24px; margin: 20px; padding: 20px; background: #e8f5e9; border-radius: 8px;'>
                            Your age: {age} years
                        </div>
                        <a href='/' style='color: #667eea; text-decoration: none;'>Calculate Again</a>
                    </div>
                </body>
                </html>
            ");
            return;
        }
    }
    context.Response.Redirect("/");
});

app.Run();