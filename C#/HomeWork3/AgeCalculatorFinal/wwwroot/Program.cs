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
        string birthdayStr = form["birthday"].ToString();
        if (!string.IsNullOrEmpty(birthdayStr))
        {
            if (DateTime.TryParseExact(birthdayStr, "yyyy-MM-dd", null, System.Globalization.DateTimeStyles.None, out DateTime birthday))
            {
                if (birthday > DateTime.Today)
                {
                    await context.Response.WriteAsync($@"
                        <!DOCTYPE html>
                        <html>
                        <head><title>Age Calculator</title><link rel='stylesheet' href='/style.css'></head>
                        <body>
                            <div class='box'>
                                <h1>Age Calculator</h1>
                                <div style='color: red;'>Birthday cannot be in the future!</div>
                                <a href='/'>Try Again</a>
                            </div>
                        </body>
                        </html>
                    ");
                    return;
                }
                
                int age = AgeCalculator(birthday);
                
                if (age > 122)
                {
                    await context.Response.WriteAsync($@"
                        <!DOCTYPE html>
                        <html>
                        <head><title>Age Calculator</title><link rel='stylesheet' href='/style.css'></head>
                        <body>
                            <div class='box'>
                                <h1>Age Calculator</h1>
                                <div style='color: red;'>Please enter a valid birthday (between 1903 and {DateTime.Today.Year})</div>
                                <a href='/'>Try Again</a>
                            </div>
                        </body>
                        </html>
                    ");
                    return;
                }
                
                string birthdayMessage = "";
                if (birthday.Month == DateTime.Today.Month && birthday.Day == DateTime.Today.Day)
                {
                    birthdayMessage = "<div style='color: green; margin-top: 15px;'>Happy Birthday!</div>";
                }
                
                await context.Response.WriteAsync($@"
                    <!DOCTYPE html>
                    <html>
                    <head><title>Age Calculator</title><link rel='stylesheet' href='/style.css'></head>
                    <body>
                        <div class='box'>
                            <h1>Age Calculator</h1>
                            <div style='font-size: 24px; margin: 20px; background: #e8f5e9; border-radius: 8px;'>
                                Your age: {age} years
                            </div>
                            {birthdayMessage}
                            <a href='/'>Calculate Again</a>
                        </div>
                    </body>
                    </html>
                ");
                return;
            }
        }
    }
    context.Response.Redirect("/");
});

app.Run();