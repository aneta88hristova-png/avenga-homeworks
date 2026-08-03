using TimeTracking.Domain.Models;
using TimeTracking.Services.Helpers;

namespace TimeTracking.Domain.Database
{
    public class Database<T> : IDatabase<T> where T : BaseEntity
    {
        private List<T> items { get; set; }

        public Database()
        {
            if (typeof(T) == typeof(User))
            {
                var users = FileStorageHelper.LoadUsers();
                items = users.Cast<T>().ToList();
            }
            else
            {
                items = new List<T>();
            }
        }

        public List<T> GetAll()
        {
            return items;
        }

        public T GetById(int id)
        {
            T? item = items.FirstOrDefault(x => x.Id == id);
            if (item == null)
            {
                throw new Exception($"Entity with id {id} was not found");
            }
            return item;
        }

        public int Insert(T entity)
        {
            if (entity == null)
            {
                throw new Exception("Entity cannot be null");
            }
            int? id = items.LastOrDefault()?.Id;
            entity.Id = id.HasValue ? id.Value + 1 : 1;
            items.Add(entity);

         
            SaveToFile();

            return entity.Id;
        }

        public void Update(T entity)
        {
            if (entity == null)
            {
                throw new Exception("Entity cannot be null");
            }
            T item = GetById(entity.Id);
            int index = items.IndexOf(item);
            items[index] = entity;

            // Spara automatiskt efter update
            SaveToFile();
        }

        public void RemoveById(int id)
        {
            T? item = items.FirstOrDefault(x => x.Id == id);
            if (item == null)
            {
                throw new Exception($"Entity with id {id} was not found");
            }
            items.Remove(item);

         
            SaveToFile();
        }
        public void SaveToFile()
        {
            if (typeof(T) == typeof(User))
            {
                var users = items.Cast<User>().ToList();
                FileStorageHelper.SaveUsers(users);
            }
        }
    }
}