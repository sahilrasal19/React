const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        ></input>

        <button className="bg-green-100 p-2 m-2 py-1 ml-1 rounded-xl shadow-lg hover:bg-green-200 cursor-pointer hover:shadow-xl transition-transform transform hover:scale-105">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
