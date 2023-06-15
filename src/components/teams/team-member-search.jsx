const TeamMemberSearch = ({ onSearch }) => {
  return (
    <div>
      <input
        className="w-full p-2 my-5 border-2 border-gray-300 rounded-md outline-none focus:border-blue-500"
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default TeamMemberSearch;
