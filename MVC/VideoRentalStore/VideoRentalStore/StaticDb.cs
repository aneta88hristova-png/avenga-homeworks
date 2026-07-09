using VideoRentalStore.Models;
using VideoRentalStore.Enums;

namespace VideoRentalStore;

public static class StaticDb
{
    public static List<User> Users = new()
    {
        new User
        {
            Id = 1,
            FullName = "Anna Andersson",
            Age = 28,
            CardNumber = "1234-5678-9012",
            CreatedOn = DateTime.Now.AddDays(-30),
            IsSubscriptionExpired = false,
            SubscriptionType = SubscriptionType.Premium
        },
        new User
        {
            Id = 2,
            FullName = "Erik Eriksson",
            Age = 35,
            CardNumber = "8765-4321-0987",
            CreatedOn = DateTime.Now.AddDays(-10),
            IsSubscriptionExpired = false,
            SubscriptionType = SubscriptionType.Basic
        },
        new User
        {
            Id = 3,
            FullName = "Sofia Svensson",
            Age = 22,
            CardNumber = "1111-2222-3333",
            CreatedOn = DateTime.Now.AddDays(-5),
            IsSubscriptionExpired = false,
            SubscriptionType = SubscriptionType.Gold
        }
    };

    public static List<Movie> Movies = new()
    {
        new Movie
        {
            Id = 1,
            Title = "Inception",
            Genre = Genre.SciFi,
            Language = Language.English,
            IsAvailable = true,
            ReleaseDate = new DateTime(2010, 7, 16),
            Length = TimeSpan.FromMinutes(148),
            AgeRestriction = 12,
            Quantity = 3
        },
        new Movie
        {
            Id = 2,
            Title = "The Godfather",
            Genre = Genre.Drama,
            Language = Language.English,
            IsAvailable = true,
            ReleaseDate = new DateTime(1972, 3, 24),
            Length = TimeSpan.FromMinutes(175),
            AgeRestriction = 15,
            Quantity = 2
        },
        new Movie
        {
            Id = 3,
            Title = "Toy Story",
            Genre = Genre.Comedy,
            Language = Language.English,
            IsAvailable = true,
            ReleaseDate = new DateTime(1995, 11, 22),
            Length = TimeSpan.FromMinutes(81),
            AgeRestriction = 0,
            Quantity = 5
        },
        new Movie
        {
            Id = 4,
            Title = "The Shawshank Redemption",
            Genre = Genre.Drama,
            Language = Language.English,
            IsAvailable = true,
            ReleaseDate = new DateTime(1994, 9, 23),
            Length = TimeSpan.FromMinutes(142),
            AgeRestriction = 15,
            Quantity = 1
        },
        new Movie
        {
            Id = 5,
            Title = "Pulp Fiction",
            Genre = Genre.Thriller,
            Language = Language.English,
            IsAvailable = true,
            ReleaseDate = new DateTime(1994, 10, 14),
            Length = TimeSpan.FromMinutes(154),
            AgeRestriction = 18,
            Quantity = 2
        }
    };

    public static List<Cast> Casts = new()
    {
        new Cast { Id = 1, MovieId = 1, Name = "Leonardo DiCaprio", Part = Part.Actor },
        new Cast { Id = 2, MovieId = 1, Name = "Joseph Gordon-Levitt", Part = Part.Actor },
        new Cast { Id = 3, MovieId = 1, Name = "Christopher Nolan", Part = Part.Director },
        new Cast { Id = 4, MovieId = 2, Name = "Marlon Brando", Part = Part.Actor },
        new Cast { Id = 5, MovieId = 2, Name = "Al Pacino", Part = Part.Actor },
        new Cast { Id = 6, MovieId = 2, Name = "Francis Ford Coppola", Part = Part.Director },
        new Cast { Id = 7, MovieId = 3, Name = "Tom Hanks", Part = Part.Actor },
        new Cast { Id = 8, MovieId = 3, Name = "Tim Allen", Part = Part.Actor },
        new Cast { Id = 9, MovieId = 3, Name = "John Lasseter", Part = Part.Director },
        new Cast { Id = 10, MovieId = 4, Name = "Tim Robbins", Part = Part.Actor },
        new Cast { Id = 11, MovieId = 4, Name = "Morgan Freeman", Part = Part.Actor },
        new Cast { Id = 12, MovieId = 4, Name = "Frank Darabont", Part = Part.Director },
        new Cast { Id = 13, MovieId = 5, Name = "John Travolta", Part = Part.Actor },
        new Cast { Id = 14, MovieId = 5, Name = "Uma Thurman", Part = Part.Actor },
        new Cast { Id = 15, MovieId = 5, Name = "Quentin Tarantino", Part = Part.Director }
    };

    public static List<Rental> Rentals = new();
}