const AboutPage = () => {
  const { getTasks } = useTasks();
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const resp = await getTasks();
    setTasks(resp);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  console.log(tasks);
  return <div>AboutPage</div>;
};

export default AboutPage;
