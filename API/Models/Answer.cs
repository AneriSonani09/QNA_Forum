namespace QAForum.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public int q_id { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; } 
        public string Body { get; set; }
        public DateTime CreatedAt { get; set; }
        
       // public int QuestionId { get; set; }
        //public virtual Question Question { get; set; }
    }
}
