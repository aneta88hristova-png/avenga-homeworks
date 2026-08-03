using TimeTracking.Domain.Models;

namespace TimeTracking.Domain.Database
{
    public interface IDatabase<T> where T : BaseEntity
    {
        List<T> GetAll();
        T GetById(int id);
        int Insert(T entity);
        void Update(T entity);
        void RemoveById(int id);
    }
}