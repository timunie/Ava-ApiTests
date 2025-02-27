namespace TestProject
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var test = new TestClass1() { TestProperty = "Hello, {0}" };

            Console.WriteLine(test.GetTestPropertyFormatted("World"));
        }
    }
}
